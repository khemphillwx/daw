import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import { STUDIO } from "../data/classes";
import programshero from "../assets/DAW-programs-hero.png";

import Seo from "../components/seo/Seo";
import { webPageSchema, breadcrumbSchema } from "../lib/seo";

const progressivePerks = [
  "Ages 3–18",
  "12-month year-round program",
  "One-time registration fee — never charged again",
  "Weekly classes building toward summer recital",
  "Full production experience on a real stage",
  "Structured curriculum with measurable growth",
  "Build lasting friendships and community",
];

const details = [
  { label: "Duration", value: "Year-round (12 months)" },
  { label: "Ages", value: "3–18" },
  { label: "Cost", value: "Monthly tuition + one-time registration fee" },
  { label: "Recital", value: "Yes — full summer production" },
  { label: "Skill level", value: "All levels, builds progressively" },
  { label: "Class type", value: "Dedicated curriculum track" },
];

export default function Programs() {
  return (
    <>
      <Seo
        title="Progressive Program — Year-Round Dance Training in Carrollton"
        description="Our 12-month Progressive Program builds skills week by week and ends in a full summer recital. One registration fee, paid once, for dancers ages 3–18."
        path="/programs"
        schema={[
          webPageSchema({
            name: "Progressive Program — Year-Round Dance Training in Carrollton",
            description: "Our 12-month Progressive Program builds skills week by week and ends in a full summer recital. One registration fee, paid once, for dancers ages 3–18.",
            path: "/programs",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Progressive Program", path: "/programs" },
          ])
        ]}
      />

      <PageHero
        image={programshero}
        label="Our Program"
        heading="The Progressive Program"
        subheading="Our year-round curriculum — where dancers build real skills season over season and finish on a real stage."
        orb1Color="bg-aurora-purple"
        orb2Color="bg-brand"
      />

      {/* Overview */}
      <section className="section-pad pt-10 relative overflow-hidden">
        <div className="aurora-orb w-[400px] h-[400px] bg-aurora-cyan opacity-15 -top-20 -left-20" />

        <div className="max-w-7xl mx-auto relative grid md:grid-cols-2 gap-10 items-start">
          <div className="glass-card rounded-3xl p-10 relative overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-aurora-purple/12 to-aurora-pink/8" />
            <div className="aurora-orb w-72 h-72 bg-aurora-purple opacity-20 -top-10 -right-10" />
            <div className="relative">
              <h2 className="font-display font-bold text-3xl text-slate-900 mb-2">
                Progressive Program
              </h2>
              <p className="text-aurora-purple font-bold text-xl mb-6">
                Year-Round &nbsp;·&nbsp; One-Time Registration Fee
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                The progressive program is for families ready to invest in their
                child's growth. Students attend weekly classes, build real
                skills, form genuine friendships, and work toward a full summer
                recital performance every season.
              </p>
              <ul className="space-y-3 mb-10">
                {progressivePerks.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-aurora-purple/15 flex items-center justify-center text-aurora-purple font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link to="/enroll" className="btn-primary">
                Enroll in Progressive
              </Link>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-10 relative overflow-hidden">
            <div className="aurora-orb w-56 h-56 bg-brand opacity-15 -top-8 -right-8" />
            <div className="relative">
              <h2 className="font-display font-bold text-2xl text-slate-900 mb-7">
                At a Glance
              </h2>
              <div className="space-y-5 mb-8">
                {details.map((d) => (
                  <div
                    key={d.label}
                    className="flex justify-between items-start gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-sm font-semibold text-slate-500 shrink-0">
                      {d.label}
                    </span>
                    <span className="text-sm font-bold text-slate-800 text-right">
                      {d.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Full pricing is on the{" "}
                <Link
                  to="/info/tuition"
                  className="text-brand-dark font-semibold hover:underline"
                >
                  Tuition &amp; Fees
                </Link>{" "}
                page. Not sure yet?{" "}
                <a
                  href={STUDIO.freeTrial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-dark font-semibold hover:underline"
                >
                  Schedule a free trial class
                </a>{" "}
                first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Teams callout */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-aurora-purple opacity-10 -top-10 -right-10" />
        <div className="aurora-orb w-80 h-80 bg-brand opacity-10 bottom-0 left-0" />
        <div className="max-w-7xl mx-auto relative">
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10 md:p-14 relative overflow-hidden">
                <div className="aurora-orb w-64 h-64 bg-aurora-purple opacity-15 -top-8 -right-8" />
                <div className="relative">
                  <h2 className="font-display font-bold text-3xl text-slate-900 mb-3">
                    Ready to Compete?
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    For dancers who want to take it to the next level, DAW
                    fields two competition teams — Celebrity and GA Dance Stars.
                    Audition-based placement, multi-day training, and a
                    community that competes with heart.
                  </p>
                  <Link to="/competition-team" className="btn-primary">
                    Learn About the Competition Team →
                  </Link>
                </div>
              </div>
              <div className="bg-slate-900 p-10 md:p-14 flex flex-col justify-center gap-5">
                {[
                  {
                    name: "Celebrity",
                    desc: "6 levels · Ballet, Tap, Jazz, Acro, Hip Hop & more",
                  },
                  {
                    name: "GA Dance Stars",
                    desc: "USASF certified · Ages 7+ · Beginning through Advanced",
                  },
                ].map((team) => (
                  <div key={team.name}>
                    <p className="font-display font-bold text-white">
                      {team.name}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mt-0.5">
                      {team.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 px-6 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/70 to-aurora-purple/50" />
        <div className="aurora-orb w-96 h-96 bg-aurora-pink opacity-20 top-0 right-0" />
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Registration is open now. Try a class free, or jump straight into
            the Progressive Program.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={STUDIO.freeTrial}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 font-display font-bold px-9 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
            >
              Schedule a Free Trial Class
            </a>
            <Link
              to="/enroll"
              className="border-2 border-white text-white font-display font-bold px-9 py-4 rounded-full hover:bg-white/15 transition-all duration-200"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
