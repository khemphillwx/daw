import { Link } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import { genres, STUDIO } from "../../data/classes";
import classeshero from "../../assets/DAW-classes-hero.webp";

import Seo from "../../components/seo/Seo";
import { webPageSchema, breadcrumbSchema } from "../../lib/seo";

export default function Descriptions() {
  return (
    <>
      <Seo
        title="Dance Class Descriptions — Ballet, Tap, Jazz, Hip Hop & More"
        description="What's taught in every class at Dance Academy West in Carrollton, GA: age ranges, technique covered and required attire, from Tiny Tots through advanced ballet."
        path="/classes/descriptions"
        schema={[
          webPageSchema({
            name: "Dance Class Descriptions — Ballet, Tap, Jazz, Hip Hop & More",
            description: "What's taught in every class at Dance Academy West in Carrollton, GA: age ranges, technique covered and required attire, from Tiny Tots through advanced ballet.",
            path: "/classes/descriptions",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Classes", path: "/classes/schedule" },
            { name: "Class Descriptions", path: "/classes/descriptions" },
          ])
        ]}
      />

      <PageHero
        image={classeshero}
        label="Classes"
        heading="Class Descriptions"
        subheading="Every genre we teach, what happens in class, who it's for, and what to wear."
        orb1Color="bg-brand"
        orb2Color="bg-aurora-cyan"
      />

      <section className="section-pad pt-10 relative overflow-hidden">
        <div className="aurora-orb w-[400px] h-[400px] bg-aurora-pink opacity-10 bottom-0 right-0" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-8">
            {genres.map((g) => (
              <div
                key={g.name}
                className="glass-card rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                {/* Cover image */}
                <div className="relative h-[450px] overflow-hidden">
                  <img
                    src={g.img}
                    alt={g.name}
                    className="w-full h-full object-cover object-[0%_20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="text-white font-display font-bold text-lg drop-shadow">
                      {g.name}
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 text-xs font-bold bg-brand text-slate-900 px-3 py-1 rounded-full">
                    {g.ages}
                  </span>
                </div>
                {/* Content */}
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {g.desc}
                  </p>
                  <p className="text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-slate-500">
                      Attire:
                    </span>{" "}
                    {g.attire}
                  </p>
                  {g.note && (
                    <p className="text-xs text-aurora-purple font-semibold bg-aurora-purple/8 rounded-lg px-3 py-2 mt-3">
                      {g.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-10">
            Full attire details for every genre are on the{" "}
            <Link
              to="/info/dress-code"
              className="text-brand-dark font-semibold hover:underline"
            >
              Dress Code
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-aurora-purple opacity-10 bottom-0 left-0" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-5">
            Still Deciding?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Our age-by-age guide narrows it down fast — or come try a class free
            and let your dancer decide.
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
            <Link to="/classes/choosing" className="btn-secondary">
              Choosing a Class
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
