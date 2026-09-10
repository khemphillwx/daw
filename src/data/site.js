/*
 * Single source of truth for everything SEO and NAP (name / address / phone).
 *
 * Local search ranking depends on the studio's NAP being byte-identical
 * everywhere it appears — this site, the Google Business Profile, the Carroll
 * County Chamber listing, Yelp, Facebook. Every consumer of these values reads
 * them from here so a change lands in one place.
 *
 * Facts below were verified against primary sources on 2026-09-10:
 *   - Address, phones, email ....... danceacademywest.com/contact-us
 *   - Founded 2001 ................. Carroll County Chamber member listing
 *                                    (business.carroll-ga.org, member 11022)
 *   - Coordinates .................. OpenStreetMap Nominatim geocode of
 *                                    1004 Bankhead Highway, Carrollton GA 30117
 *   - Shopping-center anchors ...... commercial leasing listing for the center,
 *                                    which names DAW, Food Depot and Planet
 *                                    Fitness as tenants (Planet Fitness is
 *                                    independently confirmed at 1004 Bankhead
 *                                    Hwy in OSM)
 *
 * Do not add an aggregateRating here. Google does not allow a business to mark
 * up reviews it collects about itself on its own site, and doing it anyway
 * risks a structured-data manual action.
 */

/** Canonical origin. No trailing slash — every helper below assumes that. */
export const SITE_URL = "https://danceacademywest.com";

export const SITE_NAME = "Dance Academy West";

/** Used as the trailing half of most page titles. */
export const BRAND_SUFFIX = "Dance Academy West | Carrollton, GA";

export const NAP = {
  name: "Dance Academy West",
  legalName: "Dance Academy West, Inc.",
  street: "1004 Bankhead Highway, Suite C-37",
  city: "Carrollton",
  region: "GA",
  regionName: "Georgia",
  postalCode: "30117",
  country: "US",
  phone: "(770) 489-8580",
  phoneE164: "+17704898580",
  textPhone: "(762) 572-5678",
  textPhoneE164: "+17625725678",
  email: "info@danceacademywest.com",
  foundingYear: 2001,
  /* Geocoded, not eyeballed. See the header note. */
  latitude: 33.59176,
  longitude: -85.04679,
};

/**
 * Studio hours, confirmed with the studio.
 *
 * Classes run after school, so the studio is not staffed during the day. These
 * are the hours published in LocalBusiness schema and shown on the location
 * pages; keep them in sync with the Google Business Profile, which is what most
 * people actually see.
 */
export const HOURS = {
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  opens: "16:00",
  closes: "20:30",
  /** Human-readable form, for page copy. */
  display: "Monday–Friday, 4:00–8:30 PM",
};

/**
 * Profiles Google uses to corroborate that this site and the Google Business
 * Profile describe the same real business. Only verified, live URLs belong
 * here — a dead `sameAs` is a weak signal, and a wrong one is worse.
 */
export const SAME_AS = [
  "https://www.facebook.com/125995280747922",
  "https://www.instagram.com/dawdancers",
  "https://www.yelp.com/biz/W5fBoAOBPbAQ6vRcgV-Muw",
  "https://business.carroll-ga.org/list/member/dance-academy-west-inc-11022",
];

/** Default social share image. Replace with a purpose-built 1200×630 card. */
export const OG_IMAGE = `${SITE_URL}/logos/MainLogo1.png`;

/** Absolute URL for a site-relative path. `abs('/about')` → origin + '/about'. */
export const abs = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`.replace(/\/$/, "") ||
  SITE_URL;

/**
 * The Organization / LocalBusiness node, emitted once site-wide from the app
 * shell and referenced by @id from page-level nodes rather than repeated.
 *
 * Typed as both LocalBusiness and EducationalOrganization: schema.org has no
 * DanceSchool type (verified against schema.org/EducationalOrganization), and
 * a dance studio is genuinely both a storefront business and a school.
 */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export function organizationSchema() {
  return {
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "@id": ORGANIZATION_ID,
    name: NAP.name,
    legalName: NAP.legalName,
    alternateName: "DAW",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logos/MainLogo1.png`,
    },
    image: OG_IMAGE,
    description:
      "Dance Academy West is a dance studio in Carrollton, Georgia offering " +
      "ballet, tap, jazz, hip hop, Broadway, acrobatics, contemporary and " +
      "competition dance classes for students ages 2 to 18.",
    foundingDate: String(NAP.foundingYear),
    slogan: "We do things differently here.",
    telephone: NAP.phoneE164,
    email: NAP.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.street,
      addressLocality: NAP.city,
      addressRegion: NAP.region,
      postalCode: NAP.postalCode,
      addressCountry: NAP.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.latitude,
      longitude: NAP.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: HOURS.days.map((d) => `https://schema.org/${d}`),
        opens: HOURS.opens,
        closes: HOURS.closes,
      },
    ],
    sameAs: SAME_AS,
    /*
     * areaServed tells Google which towns this business actually serves. It is
     * not a ranking shortcut into those towns' local packs — proximity still
     * governs that — but it does help organic "dance classes in <town>"
     * queries, which is what the location pages are built to win.
     */
    areaServed: [
      "Carrollton, GA",
      "Bremen, GA",
      "Villa Rica, GA",
      "Bowdon, GA",
      "Tallapoosa, GA",
      "Carroll County, GA",
      "Haralson County, GA",
    ].map((name) => ({ "@type": "City", name })),
    knowsAbout: [
      "Ballet",
      "Tap dance",
      "Jazz dance",
      "Hip hop dance",
      "Broadway dance",
      "Acrobatic arts",
      "Contemporary dance",
      "Lyrical dance",
      "Competitive dance",
      "Pom and dance team",
    ],
  };
}
