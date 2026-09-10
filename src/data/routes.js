/*
 * Every indexable URL on the site, in one list.
 *
 * Three consumers read this and must not drift apart:
 *   - scripts/prerender.mjs  renders one static HTML file per entry
 *   - scripts/sitemap.mjs    writes sitemap.xml from the same entries
 *   - App.jsx                declares the matching <Route>s
 *
 * Adding a page means adding it here as well, or it gets no prerendered HTML
 * and never reaches the sitemap. Redirect-only paths (/classes, /policies,
 * /competitive) are deliberately absent: they are not destinations and should
 * not be advertised to crawlers.
 *
 * `priority` and `changefreq` are sitemap hints. Google has said for years it
 * largely ignores both; they cost nothing and other crawlers still read them.
 */

/*
 * Extension included deliberately. scripts/prerender.mjs and scripts/sitemap.mjs
 * import this file with plain Node rather than through Vite, and Node's ESM
 * resolver does not guess extensions the way the bundler does.
 */
import { locations, locationPath } from "./locations.js";

const staticRoutes = [
  { path: "/", priority: 1.0, changefreq: "weekly" },

  /* The service-area set — the pages this SEO work is built around. */
  { path: "/dance-classes", priority: 0.9, changefreq: "monthly" },

  /* Money pages: high commercial intent, linked from every CTA. */
  { path: "/enroll", priority: 0.9, changefreq: "monthly" },
  { path: "/classes/schedule", priority: 0.9, changefreq: "weekly" },
  { path: "/contact", priority: 0.8, changefreq: "monthly" },

  { path: "/classes/descriptions", priority: 0.8, changefreq: "monthly" },
  { path: "/classes/choosing", priority: 0.8, changefreq: "monthly" },
  { path: "/competition-team", priority: 0.8, changefreq: "monthly" },
  { path: "/programs", priority: 0.7, changefreq: "monthly" },
  { path: "/about", priority: 0.7, changefreq: "monthly" },
  { path: "/faq", priority: 0.7, changefreq: "monthly" },

  { path: "/info/tuition", priority: 0.7, changefreq: "monthly" },
  { path: "/info/calendar", priority: 0.6, changefreq: "monthly" },
  { path: "/info/dress-code", priority: 0.6, changefreq: "monthly" },
  { path: "/info/policies", priority: 0.4, changefreq: "yearly" },

  { path: "/events", priority: 0.6, changefreq: "monthly" },
  { path: "/events/christmas-parade", priority: 0.5, changefreq: "yearly" },
  { path: "/events/mayfest", priority: 0.5, changefreq: "yearly" },
  { path: "/events/summer-production", priority: 0.5, changefreq: "yearly" },

  { path: "/gallery", priority: 0.5, changefreq: "monthly" },
];

/** Location pages carry high priority — they are the point of the exercise. */
const locationRoutes = locations.map((l) => ({
  path: locationPath(l.slug),
  priority: 0.9,
  changefreq: "monthly",
}));

export const routes = [...staticRoutes, ...locationRoutes];

/** Just the paths, for the prerender loop. */
export const routePaths = routes.map((r) => r.path);
