/*
 * Local preview of the built site, resolving requests the way the production
 * hosts do:
 *
 *     exact file  →  <path>/index.html  →  404.html with a real 404 status
 *
 * `vite preview` cannot stand in for this. Its SPA fallback rewrites every
 * unmatched path to /index.html, so it serves the homepage's HTML — homepage
 * title, homepage structured data, homepage nav state — at every URL on the
 * site. The page then fails to hydrate, because the client renders the route
 * it was actually asked for while the server markup describes "/". Every
 * prerendered page looks broken and none of them actually are.
 *
 * Usage: npm run preview  (after npm run build)
 */

import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "dist",
);
const port = Number(process.env.PORT || 4173);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const file = async (p) => {
  try {
    return (await stat(p)).isFile() ? p : null;
  } catch {
    return null;
  }
};

createServer(async (req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);

  /* Normalise before joining, so ../ cannot climb out of dist. */
  const rel = path.normalize(urlPath).replace(/^(\.\.[/\\])+/, "");
  const target = path.join(root, rel);
  if (!target.startsWith(root)) {
    res.writeHead(403).end("Forbidden");
    return;
  }

  const hit = (await file(target)) || (await file(path.join(target, "index.html")));
  if (hit) {
    res.writeHead(200, { "Content-Type": TYPES[path.extname(hit)] || "application/octet-stream" });
    res.end(await readFile(hit));
    return;
  }

  const notFound = await file(path.join(root, "404.html"));
  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end(notFound ? await readFile(notFound) : "404 Not Found");
}).listen(port, () => {
  console.log(`  preview: http://localhost:${port}  (serving dist as Vercel/Netlify would)`);
});
