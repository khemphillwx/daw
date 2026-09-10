import { Link } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import { STUDIO } from "../../data/classes";
import eventshero from "../../assets/DAW-events-hero.webp";

import Seo from "../../components/seo/Seo";
import { webPageSchema, breadcrumbSchema } from "../../lib/seo";

/*
 * Venue, format, and inclusions are evergreen. Dates and ticket pricing change
 * each season — confirm with the studio before each run.
 */
const details = [
  { label: "Dates", value: "Dates to be announced" },
  { label: "Venue", value: "Carrollton Center for the Arts" },
  { label: "Address", value: "251 Alabama St., Carrollton, GA 30117" },
  { label: "Shows", value: "6 total — Fri 1 · Sat 3 · Sun 2" },
  { label: "Tickets", value: "Purchased online — pricing announced each season" },
];

const inclusions = [
  "Livestream available for all 6 shows",
  "Memory Program included for all dancers",
  "Personal & business program ads available",
];

export default function SummerProduction() {
  return (
    <>
      <Seo
        title="Summer Recital Production | Dance Academy West, Carrollton GA"
        description="Our full summer recital production — the performance every Progressive Program dancer works toward all season, staged for families across west Georgia."
        path="/events/summer-production"
        schema={[
          webPageSchema({
            name: "Summer Recital Production | Dance Academy West, Carrollton GA",
            description: "Our full summer recital production — the performance every Progressive Program dancer works toward all season, staged for families across west Georgia.",
            path: "/events/summer-production",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Events", path: "/events" },
            { name: "Summer Production", path: "/events/summer-production" },
          ])
        ]}
      />

      <PageHero
        image={eventshero}
        label="Events"
        heading="Summer Production"
        subheading="The highlight of our year — a full theatrical production at the Carrollton Center for the Arts."
        orb1Color="bg-aurora-purple"
        orb2Color="bg-aurora-pink"
      />

      <section className="section-pad pt-10 relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-aurora-purple opacity-15 -top-20 -right-20" />
        <div className="aurora-orb w-80 h-80 bg-aurora-pink opacity-10 bottom-0 left-0" />

        <div className="max-w-5xl mx-auto relative">
          <div className="glass-card rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-aurora-purple/20 to-aurora-pink/15" />
            <div className="relative grid md:grid-cols-2 gap-0">
              <div className="p-10 md:p-14">
                <h2 className="font-display font-bold text-3xl text-slate-900 mb-4">
                  A Real Stage, A Real Production
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Fun, fabulous, and a true theatrical experience. Progressive
                  Program dancers take the stage for six shows across a full
                  weekend — costumes, lights, and all. Families come from across
                  the community to watch.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 mb-8">
                  {inclusions.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-aurora-purple/20 flex items-center justify-center text-aurora-purple font-bold text-xs shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link to="/enroll" className="btn-primary">
                    Enroll to Participate
                  </Link>
                  <Link to="/contact" className="btn-secondary">
                    Ask a Question
                  </Link>
                </div>
              </div>

              <div className="bg-white/40 backdrop-blur-sm p-10 md:p-14 flex flex-col justify-center gap-6 border-t md:border-t-0 md:border-l border-white/50">
                {details.map((d) => (
                  <div key={d.label}>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      {d.label}
                    </p>
                    <p className="font-semibold text-slate-800">{d.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 mt-8">
            <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
              Who Performs
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Recital participation is included in the Progressive Program.
              Enroll by spring to secure your dancer's spot on stage. The $175
              production fee is charged in March and covers stage time,
              rehearsals, a t-shirt, a trophy, and video links — see{" "}
              <Link
                to="/info/tuition"
                className="text-brand-dark font-semibold hover:underline"
              >
                Tuition &amp; Fees
              </Link>{" "}
              for the full breakdown.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-aurora-purple opacity-10 bottom-0 left-0" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-5">
            Want Your Dancer on That Stage?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Start with a free trial class, then enroll in the Progressive
            Program to be part of the production.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={STUDIO.freeTrial}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule a Free Trial Class
            </a>
            <Link to="/programs" className="btn-secondary">
              About the Progressive Program
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
