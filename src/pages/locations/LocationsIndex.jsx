import { Link } from "react-router-dom";
import Seo from "../../components/seo/Seo";
import { breadcrumbSchema, webPageSchema, canonicalFor } from "../../lib/seo";
import { NAP, HOURS } from "../../data/site";
import { STUDIO } from "../../data/classes";
import { locations, locationPath } from "../../data/locations";
import hero from "../../assets/DAW-group-photo.webp";

/*
 * The hub for the five service-area pages.
 *
 * Its job is mostly structural: it gives the location pages a parent in the
 * breadcrumb trail and a single place that links to all of them, so they are
 * reachable in two clicks from the homepage rather than depending on the
 * sitemap to be discovered.
 */
export default function LocationsIndex() {
  const path = "/dance-classes";
  const title = "Dance Classes Near You — Carrollton, Bremen, Villa Rica, Bowdon & Tallapoosa, GA";
  const description =
    "Dance Academy West serves families across west Georgia from our Carrollton studio — Bremen, Villa Rica, Bowdon and Tallapoosa. Drive times and directions inside.";

  return (
    <>
      <Seo
        title={`Areas We Serve | ${NAP.name}`}
        description={description}
        path={path}
        schema={[
          webPageSchema({ name: title, description, path }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas We Serve", path },
          ]),
          {
            "@type": "ItemList",
            "@id": `${canonicalFor(path)}#arealist`,
            name: "Towns served by Dance Academy West",
            itemListElement: locations.map((l, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `Dance classes in ${l.city}, ${l.state}`,
              url: canonicalFor(locationPath(l.slug)),
            })),
          },
        ]}
      />

      <section className="relative pt-36 pb-16 px-6 md:px-12 overflow-hidden">
        <img
          src={hero}
          alt="Dance Academy West students from across Carroll and Haralson counties"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="aurora-orb w-96 h-96 bg-brand -top-24 -right-24 opacity-25" />
        <div className="aurora-orb w-80 h-80 bg-aurora-purple -bottom-16 -left-16 opacity-20" />

        <div className="relative max-w-7xl mx-auto text-center">
          <p className="section-label mb-4">Areas We Serve</p>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-slate-900 leading-tight mb-5">
            Dance Classes Across West Georgia
          </h1>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
            One studio in Carrollton, dancers from all over Carroll and Haralson
            counties. Pick your town to see the drive, the directions and the
            questions families there tend to ask.
          </p>
        </div>
      </section>

      <section className="section-pad pt-6 relative overflow-hidden">
        <div className="aurora-orb w-[450px] h-[450px] bg-aurora-cyan opacity-12 -top-20 -left-32" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {locations.map((l) => (
              <Link
                key={l.slug}
                to={locationPath(l.slug)}
                className="glass-card rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  {l.isHome ? "Our studio" : l.counties[0]}
                </p>
                <h2 className="font-display font-bold text-2xl text-slate-900 mb-2">
                  {l.city}, {l.state}
                </h2>
                <p className="text-brand-dark font-bold text-sm mb-4">
                  {l.drive
                    ? `${l.drive.miles} miles · ${l.drive.minutes} min via ${l.drive.route}`
                    : "1004 Bankhead Highway · on site"}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">
                  {l.heroSub}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-dark mt-6">
                  Classes for {l.city} families →
                </span>
              </Link>
            ))}
          </div>

          <div className="glass-card rounded-3xl p-10 mt-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/12 to-aurora-purple/8" />
            <div className="relative">
              <h2 className="font-display font-bold text-3xl text-slate-900 mb-3">
                Don't see your town?
              </h2>
              <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-4">
                These are just the towns we hear from most. Dancers come to us
                from all over west Georgia — if you can reach {NAP.city}, you
                can dance here.
              </p>
              <p className="text-slate-500 text-sm mb-8">
                {NAP.street}, {NAP.city}, {NAP.region} {NAP.postalCode} ·{" "}
                {HOURS.display}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href={STUDIO.freeTrial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base px-8 py-4"
                >
                  Schedule a Free Trial Class
                </a>
                <a
                  href={STUDIO.phoneHref}
                  className="btn-secondary text-base px-8 py-4"
                >
                  Call {NAP.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
