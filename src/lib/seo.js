/*
 * Per-page head management for a Vite + React Router SPA.
 *
 * Why this exists rather than react-helmet: the project ships zero runtime
 * dependencies beyond React and the router, and helmet's async model is
 * awkward to drain during the static prerender in scripts/prerender.mjs. This
 * module does the two things that actually matter — build the tags, and hand
 * them to whichever renderer is running.
 *
 * Two execution paths, one source of truth:
 *
 *   Prerender (node)  <Seo> records its descriptor into the module-level
 *                     collector during render; entry-server.jsx reads it back
 *                     after renderToString and prerender.mjs writes real tags
 *                     into the emitted HTML. This is the copy crawlers get.
 *
 *   Browser           <Seo> applies the same descriptor to document.head in an
 *                     effect on every route change, so the tab title, canonical
 *                     and JSON-LD stay correct as visitors navigate.
 *
 * Tags this module owns are stamped with data-seo="1" so the browser path can
 * clear its own previous output without touching anything the build put there.
 */

import { SITE_URL, SITE_NAME, OG_IMAGE, organizationSchema } from "../data/site";

/** Marks every element this module creates, so route changes can sweep them. */
export const MANAGED_ATTR = "data-seo";

/*
 * SSR collector. Single-slot rather than a stack: exactly one <Seo> renders per
 * page, and a second one would mean two competing titles — a bug worth having
 * surface as an overwrite rather than get silently merged.
 */
let ssrHead = null;

export const resetSsrHead = () => {
  ssrHead = null;
};
export const getSsrHead = () => ssrHead;
export const setSsrHead = (head) => {
  ssrHead = head;
};

/**
 * Normalise a route path into the canonical URL for that page.
 * Trailing slashes are stripped so `/about/` and `/about` can never both be
 * canonical — duplicate canonicals split link equity between the two.
 */
export function canonicalFor(path = "/") {
  if (!path || path === "/") return `${SITE_URL}/`;
  const clean = `/${String(path).replace(/^\/+|\/+$/g, "")}`;
  return `${SITE_URL}${clean}`;
}

/**
 * Build the full head descriptor for a page.
 *
 * `schema` nodes are merged into one @graph alongside the site-wide
 * Organization node. One graph per page beats several loose script tags: nodes
 * can then reference each other by @id instead of restating the business.
 */
export function buildHead({
  title,
  description,
  path = "/",
  image = OG_IMAGE,
  noindex = false,
  type = "website",
  schema = [],
}) {
  const url = canonicalFor(path);
  const graph = [organizationSchema(), ...schema];

  return {
    title,
    description,
    canonical: url,
    robots: noindex ? "noindex, follow" : "index, follow, max-image-preview:large",
    meta: [
      { name: "description", content: description },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    jsonLd: { "@context": "https://schema.org", "@graph": graph },
  };
}

/* ── Schema node builders ─────────────────────────────────────────────── */

/**
 * BreadcrumbList. Google renders these in the SERP in place of the raw URL,
 * which measurably helps click-through on deep pages like the location pages.
 *
 * @param trail [{ name, path }] ordered root-first. Include the current page.
 */
export const breadcrumbSchema = (trail) => ({
  "@type": "BreadcrumbList",
  itemListElement: trail.map(({ name, path }, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: canonicalFor(path),
  })),
});

/**
 * FAQPage. Only ever build this from Q&A that is genuinely visible on the page
 * — Google requires the marked-up answer to match the rendered answer, and
 * hidden-answer FAQ markup is a common cause of manual actions.
 */
export const faqSchema = (faqs) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

/** A page that primarily describes one page of the site, tied to the business. */
export const webPageSchema = ({ name, description, path }) => ({
  "@type": "WebPage",
  "@id": `${canonicalFor(path)}#webpage`,
  url: canonicalFor(path),
  name,
  description,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
});

/* ── Browser-side application ─────────────────────────────────────────── */

const upsertMeta = (head, attr, key, content) => {
  if (!content) return;
  let el = head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    head.appendChild(el);
  }
  el.setAttribute("content", content);
  el.setAttribute(MANAGED_ATTR, "1");
};

/**
 * Apply a head descriptor to the live document. Idempotent: re-applying the
 * same descriptor produces the same DOM, so a re-render mid-navigation cannot
 * leave duplicate canonicals behind.
 */
export function applyHead(head) {
  if (typeof document === "undefined") return;
  const { head: docHead } = document;

  document.title = head.title;

  /*
   * JSON-LD is replaced wholesale rather than patched. It is one blob per page
   * and diffing it would cost more than rebuilding it.
   */
  docHead
    .querySelectorAll(`script[type="application/ld+json"][${MANAGED_ATTR}]`)
    .forEach((el) => el.remove());

  upsertMeta(docHead, "name", "description", head.description);
  upsertMeta(docHead, "name", "robots", head.robots);
  head.meta.forEach(({ name, property, content }) =>
    upsertMeta(docHead, name ? "name" : "property", name || property, content),
  );

  let link = docHead.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    docHead.appendChild(link);
  }
  link.setAttribute("href", head.canonical);
  link.setAttribute(MANAGED_ATTR, "1");

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute(MANAGED_ATTR, "1");
  script.textContent = JSON.stringify(head.jsonLd);
  docHead.appendChild(script);
}

/* ── Static HTML serialisation, used by the prerender ─────────────────── */

const escapeAttr = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/*
 * `</script>` inside JSON-LD would close the script element early. Escaping the
 * slash keeps the JSON valid while making the sequence inert to the HTML parser.
 */
const escapeJsonLd = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");

/**
 * Render a head descriptor as the HTML string injected by prerender.mjs.
 *
 * The canonical link and the JSON-LD script are stamped with MANAGED_ATTR for
 * a specific reason: applyHead() clears and rewrites the JSON-LD on every
 * route change, and it only clears tags carrying that attribute. Without the
 * stamp, the prerendered block survives the sweep and the first client-side
 * render appends a second, duplicate @graph to the page.
 *
 * Meta tags do not need it — upsertMeta matches them by name/property and
 * updates in place, so there is nothing to duplicate.
 */
export function headToHtml(head) {
  const lines = [
    `<title>${escapeAttr(head.title)}</title>`,
    `<link rel="canonical" href="${escapeAttr(head.canonical)}" ${MANAGED_ATTR}="1" />`,
    `<meta name="robots" content="${escapeAttr(head.robots)}" />`,
    ...head.meta
      .filter((m) => m.content)
      .map(
        (m) =>
          `<meta ${m.name ? "name" : "property"}="${escapeAttr(
            m.name || m.property,
          )}" content="${escapeAttr(m.content)}" />`,
      ),
    `<script type="application/ld+json" ${MANAGED_ATTR}="1">${escapeJsonLd(head.jsonLd)}</script>`,
  ];
  return lines.join("\n    ");
}
