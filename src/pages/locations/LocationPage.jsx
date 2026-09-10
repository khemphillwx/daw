import { Link, useParams } from "react-router-dom";
import Seo from "../../components/seo/Seo";
import NotFound from "../NotFound";
import {
  breadcrumbSchema,
  faqSchema,
  canonicalFor,
} from "../../lib/seo";
import { NAP, HOURS, SITE_URL, ORGANIZATION_ID } from "../../data/site";
import { STUDIO } from "../../data/classes";
import { locations, locationBySlug, locationPath } from "../../data/locations";

import heroCarrollton from "../../assets/DAW-group-photo.jpg";
import heroBremen from "../../assets/DAW-girls-outside.jpg";
import heroVillaRica from "../../assets/DAW-girls-dance.jpg";
import heroBowdon from "../../assets/DAW-happy-side.jpg";
import heroTallapoosa from "../../assets/DAW-programs-hero.png";

/* One hero per city so the five pages are not visually interchangeable. */
const HEROES = {
  "carrollton-ga": heroCarrollton,
  "bremen-ga": heroBremen,
  "villa-rica-ga": heroVillaRica,
  "bowdon-ga": heroBowdon,
  "tallapoosa-ga": heroTallapoosa,
};

/*
 * Genres, trimmed to name + one line. Deliberately not imported from
 * data/classes: those descriptions are written for a reader already browsing
 * classes, whereas a visitor landing here from a search has not decided to
 * enroll yet and needs the shortest possible orientation.
 */
const GENRE_TEASERS = [
  ["Ballet", "Technique, posture and strength — the foundation everything else builds on.", "/classes/descriptions"],
  ["Tap", "Rhythm and footwork. Dancers make the music with their feet.", "/classes/descriptions"],
  ["Jazz", "Turns, leaps and personality. Big, expressive, full of energy.", "/classes/descriptions"],
  ["Hip Hop", "Grooves, isolations and freestyle to music they actually listen to.", "/classes/descriptions"],
  ["Broadway", "Where dance meets theatre — acting, vocals and movement together.", "/classes/descriptions"],
  ["Acrobatics", "Cartwheels through aerials, taught progressively with proper spotting.", "/classes/descriptions"],
  ["Contemporary & Lyrical", "Interpretive work for dancers ready to tell a story.", "/classes/descriptions"],
  ["Dance Team & Pom", "Tryout-ready training for middle and high school dance teams.", "/competition-team"],
  ["Tiny Tots", "Ages 2–4. Movement, rhythm and play — usually a first class of any kind.", "/classes/choosing"],
];

/** Trust signals, repeated near every CTA because that is where doubt lands. */
const PROOF = [
  ["Since 2001", "25 seasons in West Georgia"],
  ["Ages 2–18", "A class for every stage"],
  ["4 studios", "Professional sprung floors"],
  ["Free trial", "No cost, no obligation"],
];

/** Google Maps directions deep link, pre-filled with the visitor's own town. */
const directionsUrl = (city, state) =>
  `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    `${city}, ${state}`,
  )}&destination=${encodeURIComponent(
    `${NAP.name}, ${NAP.street}, ${NAP.city}, ${NAP.region} ${NAP.postalCode}`,
  )}`;

/* Primary + secondary CTA pair. Repeated three times down the page — a visitor
 * who is convinced at the drive-time section should not have to scroll to act. */
function CtaPair({ city, className = "" }) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <a
        href={STUDIO.freeTrial}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary text-base px-8 py-4"
      >
        Schedule a Free Trial Class
      </a>
      <a href={STUDIO.phoneHref} className="btn-secondary text-base px-8 py-4">
        Call {NAP.phone}
      </a>
      <p className="w-full text-sm text-slate-500 mt-1">
        Free, no obligation — {city} families welcome. Prefer to text?{" "}
        <a
          href={STUDIO.smsHref}
          className="text-brand-dark font-semibold hover:underline"
        >
          {NAP.textPhone}
        </a>
      </p>
    </div>
  );
}

export default function LocationPage() {
  const { slug } = useParams();
  const loc = locationBySlug(slug);

  /*
   * An unknown city is a genuinely missing page, not a redirect target.
   * Rendering the 404 keeps the noindex directive on a URL that has no content
   * — redirecting to the hub instead would hand crawlers an indexable 200 for
   * every junk slug anyone ever links to.
   */
  if (!loc) return <NotFound />;

  const path = locationPath(loc.slug);
  const url = canonicalFor(path);
  const hero = HEROES[loc.slug];

  /*
   * Service ties the business to this specific town. Unlike areaServed on the
   * Organization node, a Service node names what is offered *and* where, which
   * is the pairing "dance classes in <town>" queries are actually asking about.
   */
  const serviceSchema = {
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType: "Children's dance classes",
    name: `Dance classes for ${loc.city}, ${loc.state} families`,
    description: loc.metaDescription,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: {
      "@type": "City",
      name: `${loc.city}, ${loc.state}`,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${loc.counties[0]}, ${loc.stateName}`,
      },
    },
    audience: { "@type": "Audience", audienceType: "Children and teens ages 2–18" },
    offers: {
      "@type": "Offer",
      name: "Free trial class",
      price: "0",
      priceCurrency: "USD",
      url: STUDIO.freeTrial,
      availability: "https://schema.org/InStock",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dance genres taught",
      itemListElement: GENRE_TEASERS.map(([name]) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };

  return (
    <>
      <Seo
        title={`${loc.metaTitle} | Dance Academy West`}
        description={loc.metaDescription}
        path={path}
        schema={[
          {
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url,
            name: loc.metaTitle,
            description: loc.metaDescription,
            about: { "@id": ORGANIZATION_ID },
            isPartOf: { "@id": `${SITE_URL}/#website` },
            inLanguage: "en-US",
          },
          serviceSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas We Serve", path: "/dance-classes" },
            { name: `${loc.city}, ${loc.state}`, path },
          ]),
          faqSchema(loc.faqs),
        ]}
      />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden">
        <img
          src={hero}
          alt={`Dance Academy West students in class, the studio serving ${loc.city}, ${loc.stateName}`}
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          loading="eager"
          fetchpriority="high"
        />
        <div className="aurora-orb w-[600px] h-[600px] bg-brand opacity-20 -top-40 -right-32" />
        <div className="aurora-orb w-[420px] h-[420px] bg-aurora-purple opacity-15 -bottom-24 -left-20" />

        <div className="relative max-w-7xl mx-auto">
          {/* Visible breadcrumb — matches the BreadcrumbList above it. */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <li>
                <Link to="/" className="hover:text-brand-dark">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/dance-classes" className="hover:text-brand-dark">
                  Areas We Serve
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-700 font-semibold" aria-current="page">
                {loc.city}, {loc.state}
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-4">
                {loc.isHome ? "Our Home Studio" : "Serving " + loc.city}
              </p>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-tight mb-5">
                {loc.h1}
              </h1>
              <p className="text-slate-600 text-xl leading-relaxed mb-8 max-w-xl">
                {loc.heroSub}
              </p>
              <CtaPair city={loc.city} />
            </div>

            {/* Drive-time card — the single biggest objection, answered first. */}
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-aurora-purple/8" />
              <div className="relative">
                {loc.drive ? (
                  <>
                    <h2 className="font-display font-bold text-2xl text-slate-900 mb-1">
                      Getting here from {loc.city}
                    </h2>
                    <p className="text-brand-dark font-bold text-lg mb-5">
                      {loc.drive.miles} miles · {loc.drive.minutes} minutes ·{" "}
                      {loc.drive.route}
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {loc.drive.directions}
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="font-display font-bold text-2xl text-slate-900 mb-1">
                      Finding the studio
                    </h2>
                    <p className="text-brand-dark font-bold text-lg mb-5">
                      North side of town, on Bankhead Highway
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      We are in the shopping center anchored by Food Depot and
                      Planet Fitness, with parking directly outside the suite.
                    </p>
                  </>
                )}

                <address className="not-italic text-sm text-slate-700 space-y-1 mb-6">
                  <div className="font-semibold text-slate-900">{NAP.name}</div>
                  <div>{NAP.street}</div>
                  <div>
                    {NAP.city}, {NAP.region} {NAP.postalCode}
                  </div>
                  <div className="pt-2">
                    <span className="text-slate-500">Open</span>{" "}
                    {HOURS.display}
                  </div>
                </address>

                <a
                  href={directionsUrl(loc.city, loc.state)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Get driving directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof bar ──────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {PROOF.map(([value, label]) => (
            <div key={label}>
              <div className="font-display font-bold text-3xl text-brand mb-1">
                {value}
              </div>
              <div className="text-slate-400 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── City-specific body copy ────────────────────────────── */}
      <section className="section-pad relative overflow-hidden">
        <div className="aurora-orb w-[450px] h-[450px] bg-aurora-cyan opacity-12 -top-32 -left-32" />
        <div className="max-w-7xl mx-auto relative grid lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2">
            <h2 className="section-heading mb-6">
              Why {loc.city} families dance with us
            </h2>
            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
              {loc.intro.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              {loc.highlights.map((h) => (
                <div
                  key={h.title}
                  className="glass-card rounded-2xl p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <h3 className="font-display font-bold text-slate-900 mb-2 leading-snug">
                    {h.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {h.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Local context sidebar — the part that is only true of this city. */}
          <aside className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-7 sticky top-28">
              <h2 className="font-display font-bold text-lg text-slate-900 mb-5">
                {loc.city} at a glance
              </h2>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    County
                  </dt>
                  <dd className="text-slate-700">{loc.counties.join(" & ")}</dd>
                </div>
                {loc.population && (
                  <div>
                    <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Population
                    </dt>
                    <dd className="text-slate-700">{loc.population}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Schools
                  </dt>
                  <dd className="text-slate-700 leading-relaxed">
                    {loc.schools.note}
                  </dd>
                </div>
                {loc.drive && (
                  <div>
                    <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Drive to the studio
                    </dt>
                    <dd className="text-slate-700">
                      {loc.drive.miles} miles via {loc.drive.route},{" "}
                      {loc.drive.minutes} minutes
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Studio hours
                  </dt>
                  <dd className="text-slate-700">{HOURS.display}</dd>
                </div>
              </dl>

              <a
                href={STUDIO.freeTrial}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center mt-7"
              >
                Book a Free Trial
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Genres ─────────────────────────────────────────────── */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-[500px] h-[500px] bg-aurora-pink opacity-10 -bottom-40 -right-20" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <p className="section-label mb-3">What We Teach</p>
            <h2 className="section-heading">
              Classes open to {loc.city} dancers
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Nine genres, ages two through eighteen, all in one building — so a
              dancer can change direction without changing studios.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GENRE_TEASERS.map(([name, desc, to]) => (
              <Link
                key={name}
                to={to}
                className="bg-white/80 glass-card rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-200 block"
              >
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  {name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/classes/schedule" className="btn-secondary">
              See the Current Schedule
            </Link>
            <Link to="/info/tuition" className="btn-secondary">
              Tuition &amp; Fees
            </Link>
          </div>
        </div>
      </section>

      {/* ── Free trial offer ───────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden">
        <div className="aurora-orb w-[600px] h-[600px] bg-brand opacity-12 -top-40 -left-40" />
        <div className="max-w-5xl mx-auto relative glass-card rounded-3xl p-10 md:p-14 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/12 to-aurora-cyan/8" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="section-label mb-3">Start Here</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-4 leading-tight">
                One free class. Then decide.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Your dancer joins a real class alongside established students —
                not a separate taster session, not a sales pitch. You watch, they
                dance, and afterwards you tell us either way.
              </p>
              <CtaPair city={loc.city} />
            </div>
            <ul className="space-y-3 text-slate-700">
              {[
                "Ages 2–18, all experience levels",
                "A real class, with real students",
                "Nothing to pay and nothing to cancel",
                `${loc.drive ? `${loc.drive.minutes} minutes from ${loc.city}` : "Parking directly outside the door"}`,
                "Registration fee is charged once — not yearly",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center text-brand-dark font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-aurora-purple opacity-10 top-0 right-0" />
        <div className="max-w-3xl mx-auto relative">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Questions from {loc.city}</p>
            <h2 className="section-heading">Before you drive over</h2>
          </div>

          {/*
            Answers are rendered open rather than behind a disclosure. FAQPage
            markup has to match what a visitor can actually read, and an
            accordion that starts collapsed is the usual way sites fall foul
            of that.
          */}
          <div className="space-y-5">
            {loc.faqs.map(({ q, a }) => (
              <div key={q} className="glass-card rounded-2xl p-7">
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2.5">
                  {q}
                </h3>
                <p className="text-slate-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-10">
            Something else on your mind?{" "}
            <Link
              to="/faq"
              className="text-brand-dark font-semibold hover:underline"
            >
              Read the full FAQ
            </Link>{" "}
            or{" "}
            <Link
              to="/contact"
              className="text-brand-dark font-semibold hover:underline"
            >
              send us a message
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Map + NAP ──────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-3">Visit Us</p>
            <h2 className="font-display font-bold text-3xl text-slate-900 mb-5">
              {loc.drive
                ? `${loc.drive.minutes} minutes from ${loc.city}`
                : "In the heart of Carrollton"}
            </h2>
            <address className="not-italic text-slate-600 leading-relaxed space-y-3">
              <p>
                <span className="font-semibold text-slate-900">{NAP.name}</span>
                <br />
                {NAP.street}
                <br />
                {NAP.city}, {NAP.region} {NAP.postalCode}
              </p>
              <p>
                <a
                  href={STUDIO.phoneHref}
                  className="text-brand-dark font-semibold hover:underline"
                >
                  {NAP.phone}
                </a>{" "}
                <span className="text-slate-400">· call or text</span>
                <br />
                <a
                  href={STUDIO.smsHref}
                  className="text-brand-dark font-semibold hover:underline"
                >
                  {NAP.textPhone}
                </a>{" "}
                <span className="text-slate-400">· text only</span>
                <br />
                <a
                  href={`mailto:${NAP.email}`}
                  className="text-brand-dark font-semibold hover:underline"
                >
                  {NAP.email}
                </a>
              </p>
              <p>
                <span className="text-slate-400">Hours</span> · {HOURS.display}
              </p>
            </address>
            <CtaPair city={loc.city} className="mt-8" />
          </div>

          <div className="glass-card rounded-2xl overflow-hidden h-80">
            <iframe
              title={`Map to Dance Academy West from ${loc.city}, ${loc.state}`}
              src={STUDIO.mapQuery}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── Nearby towns — internal linking between the location pages ── */}
      <NearbyTowns current={loc.slug} />
    </>
  );
}

/*
 * Cross-links every location page to its siblings. Beyond the obvious
 * navigation value, this is what stops the five pages from being orphans that
 * only the sitemap knows about — internal links are how PageRank reaches them.
 */
function NearbyTowns({ current }) {
  const others = locations.filter((l) => l.slug !== current);
  if (!others.length) return null;

  return (
    <section className="bg-slate-900 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-white mb-2">
          We also serve
        </h2>
        <p className="text-slate-400 text-sm mb-8">
          Dancers travel to Carrollton from across Carroll and Haralson counties.
        </p>
        <div className="flex flex-wrap gap-3">
          {others.map((l) => (
            <Link
              key={l.slug}
              to={locationPath(l.slug)}
              className="border border-slate-700 hover:border-brand text-slate-300 hover:text-brand rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200"
            >
              Dance classes in {l.city}, {l.state}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
