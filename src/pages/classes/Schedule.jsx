import { Link } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import ClassListEmbed from "../../components/ui/ClassListEmbed";
import { STUDIO } from "../../data/classes";
import classeshero from "../../assets/DAW-classes-hero.jpg";

import Seo from "../../components/seo/Seo";
import { webPageSchema, breadcrumbSchema } from "../../lib/seo";

export default function Schedule() {
  return (
    <>
      <Seo
        title="Dance Class Schedule | Dance Academy West, Carrollton GA"
        description="This season's dance class schedule for Dance Academy West in Carrollton, GA — times, ages and current openings across ballet, tap, jazz, hip hop, acro and more."
        path="/classes/schedule"
        schema={[
          webPageSchema({
            name: "Dance Class Schedule | Dance Academy West, Carrollton GA",
            description: "This season's dance class schedule for Dance Academy West in Carrollton, GA — times, ages and current openings across ballet, tap, jazz, hip hop, acro and more.",
            path: "/classes/schedule",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Classes", path: "/classes/schedule" },
            { name: "Class Schedule", path: "/classes/schedule" },
          ])
        ]}
      />

      <PageHero
        image={classeshero}
        label="Classes"
        heading="Current Class Schedule"
        subheading="Browse this season's classes, times, and openings. Our schedule is kept up to date in Studio Pro."
        orb1Color="bg-brand"
        orb2Color="bg-aurora-cyan"
      />

      <section className="section-pad pt-10 relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-brand opacity-10 -top-20 -right-20" />
        <div className="aurora-orb w-80 h-80 bg-aurora-purple opacity-10 bottom-0 -left-16" />

        <div className="max-w-7xl mx-auto relative">
          <ClassListEmbed height="h-[48rem]" />

          {/* Next steps */}
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              {
                title: "Not sure which class?",
                desc: "Start with our age-by-age guide to find the right fit for your dancer.",
                to: "/classes/choosing",
                label: "Choosing a Class",
              },
              {
                title: "What happens in class?",
                desc: "Read full descriptions of every genre we offer, with ages and attire.",
                to: "/classes/descriptions",
                label: "Class Descriptions",
              },
              {
                title: "What should they wear?",
                desc: "Every genre has its own dress code. Here's exactly what to buy.",
                to: "/info/dress-code",
                label: "Dress Code",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="glass-card rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {card.desc}
                </p>
                <Link
                  to={card.to}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:underline"
                >
                  {card.label} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-brand opacity-10 bottom-0 right-0" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-5">
            Found a Class That Fits?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Come try it first — schedule a free trial class and see how your
            dancer likes it before you enroll.
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
            <Link to="/contact" className="btn-secondary">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
