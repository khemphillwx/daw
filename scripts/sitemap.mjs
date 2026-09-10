/*
 * Writes dist/sitemap.xml and dist/robots.txt from the same route list the
 * prerender uses, so the two can never disagree about what exists.
 *
 * robots.txt is generated rather than kept in public/ for one reason: it has
 * to name the sitemap's absolute URL, and that URL comes from SITE_URL. A
 * hand-maintained copy in public/ would be one more place to forget when the
 * domain changes.
 */

import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "dist");

const { routes } = await import(
  pathToFileURL(path.join(root, "src", "data", "routes.js")).href
);
const { SITE_URL } = await import(
  pathToFileURL(path.join(root, "src", "data", "site.js")).href
);

/*
 * One shared date for every entry. lastmod is meant to be the last meaningful
 * content change; per-file mtimes would report "today" for all of them on
 * every build, which trains crawlers to ignore the field. Build date is the
 * honest approximation available without a CMS.
 */
const lastmod = new Date().toISOString().slice(0, 10);

const urlEntry = ({ path: route, priority, changefreq }) =>
  [
    "  <url>",
    `    <loc>${SITE_URL}${route === "/" ? "/" : route}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority.toFixed(1)}</priority>`,
    "  </url>",
  ].join("\n");

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map(urlEntry),
  "</urlset>",
  "",
].join("\n");

/*
 * Nothing on this site is private, so the only Disallow is the API endpoint —
 * a POST-only form handler that has no business being crawled.
 *
 * No crawl-delay: Google ignores it outright, and throttling Bing on a site
 * this size gains nothing.
 */
const robots = [
  "# https://www.robotstxt.org/robotstxt.html",
  "User-agent: *",
  "Allow: /",
  "Disallow: /api/",
  "",
  `Sitemap: ${SITE_URL}/sitemap.xml`,
  "",
].join("\n");

await mkdir(outDir, { recursive: true });
await writeFile(path.join(outDir, "sitemap.xml"), sitemap, "utf8");
await writeFile(path.join(outDir, "robots.txt"), robots, "utf8");

console.log(`  sitemap:   ${routes.length} urls → dist/sitemap.xml, robots.txt`);
