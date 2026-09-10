/*
 * Static prerender. Runs after both Vite builds, as part of `npm run build`.
 *
 * Why bother, given Google executes JavaScript? Three reasons that all bite a
 * local business site specifically:
 *
 *   1. Rendering is queued. Googlebot reads the HTML immediately and comes
 *      back to render it later — sometimes days later. Until it does, a page
 *      whose title and description are injected by React looks identical to
 *      every other page on the site.
 *   2. Most other crawlers do not render at all. The Facebook, iMessage and
 *      WhatsApp scrapers that build link previews run no JavaScript, so a
 *      shared link to a location page would otherwise show the homepage's
 *      title, description and image.
 *   3. LLM crawlers largely read raw HTML, and that is increasingly where
 *      "dance studios near Carrollton" gets answered.
 *
 * Output is one real HTML file per route, hydrated by main.jsx on load, so the
 * interactive site behaves exactly as before.
 *
 * Because every indexable route now exists as a file, the deployment needs no
 * SPA catch-all rewrite — see vercel.json. The trade-off to know about: a route
 * added to App.jsx but not to src/data/routes.js gets no file, so a cold deep
 * link to it 404s instead of falling back to client routing. The guard at the
 * bottom of this script is what stops that going unnoticed.
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = path.join(root, "dist");
const serverEntry = path.join(root, "dist-ssr", "entry-server.js");

const fail = (msg) => {
  console.error(`\n  prerender failed: ${msg}\n`);
  process.exit(1);
};

if (!existsSync(serverEntry)) {
  fail(
    `missing ${path.relative(root, serverEntry)} — the SSR build step did not run`,
  );
}

/* pathToFileURL rather than a bare absolute path: dynamic import of a Windows
 * drive path throws ERR_UNSUPPORTED_ESM_URL_SCHEME without it. */
const { render } = await import(pathToFileURL(serverEntry).href);

/* routes.js and locations.js are plain data modules with no JSX and no Vite
 * intrinsics, so Node loads them from source directly. */
const { routes } = await import(
  pathToFileURL(path.join(root, "src", "data", "routes.js")).href
);

const template = await readFile(path.join(clientDir, "index.html"), "utf8");

/*
 * The template's own <title> and description exist so `vite dev` and the raw
 * shell are not blank. They are stripped before each page's real tags go in —
 * two <title> elements in one document is not something to leave to the
 * parser's tie-breaking rules.
 */
const stripPlaceholders = (html) =>
  html
    .replace(/\n?[ \t]*<title>[\s\S]*?<\/title>/i, "")
    .replace(/\n?[ \t]*<meta\s+name="description"[^>]*>/i, "")
    .replace(/\n?[ \t]*<meta\s+name="keywords"[^>]*>/i, "");

const shell = stripPlaceholders(template);

const buildPage = (route) => {
  const { body, headHtml } = render(route);
  const html = shell
    .replace("</head>", `  ${headHtml}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return { html, headHtml };
};

/** `/` → dist/index.html, `/a/b` → dist/a/b/index.html. */
const outputFileFor = (route) =>
  route === "/"
    ? path.join(clientDir, "index.html")
    : path.join(clientDir, route.replace(/^\//, ""), "index.html");

const write = async (file, html) => {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html, "utf8");
};

const missingHead = [];
let written = 0;

for (const { path: route } of routes) {
  const { html, headHtml } = buildPage(route);
  if (!headHtml) missingHead.push(route);
  await write(outputFileFor(route), html);
  written += 1;
}

/*
 * A real 404 document at the output root. Both Vercel and Netlify serve
 * /404.html with an actual HTTP 404 for paths that match no file, which is
 * what the old catch-all rewrite to index.html was quietly preventing: every
 * dead URL used to return 200 with the homepage, and Search Console counted
 * them as soft 404s against the homepage.
 *
 * Rendered from a path that cannot collide with a real route, so App's catch-
 * all is what matches.
 */
const { html: notFoundHtml, headHtml: notFoundHead } = buildPage(
  "/__not-found__",
);
if (!notFoundHead) missingHead.push("404 page");
await write(path.join(clientDir, "404.html"), notFoundHtml);
written += 1;

console.log(`  prerender: wrote ${written} static pages`);

if (missingHead.length) {
  /*
   * A route that renders no <Seo> inherits nothing — no title, no canonical,
   * no structured data. That is always an oversight rather than a choice, so
   * fail the build rather than ship a page that cannot rank.
   */
  fail(
    `these routes rendered no <Seo> component:\n    ${missingHead.join("\n    ")}`,
  );
}
