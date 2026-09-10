import { Link } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import { dressCodes } from "../../data/classes";
import classeshero from "../../assets/DAW-classes-hero.webp";

import Seo from "../../components/seo/Seo";
import { webPageSchema, breadcrumbSchema } from "../../lib/seo";

export default function DressCode() {
  return (
    <>
      <Seo
        title="Dance Dress Code by Class | Dance Academy West, Carrollton GA"
        description="Exactly what to buy for each class — leotards, tights and shoes for ballet, tap, jazz, hip hop and acro — with links to the studio's shop for every genre."
        path="/info/dress-code"
        schema={[
          webPageSchema({
            name: "Dance Dress Code by Class | Dance Academy West, Carrollton GA",
            description: "Exactly what to buy for each class — leotards, tights and shoes for ballet, tap, jazz, hip hop and acro — with links to the studio's shop for every genre.",
            path: "/info/dress-code",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Important Info", path: "/info/tuition" },
            { name: "Dress Code", path: "/info/dress-code" },
          ])
        ]}
      />

      <PageHero
        image={classeshero}
        label="Important Info"
        heading="Dress Code"
        subheading="Each style has specific attire that keeps dancers safe and moving their best. Here's exactly what your dancer needs."
        orb1Color="bg-brand"
        orb2Color="bg-aurora-purple"
      />

      <section className="section-pad pt-10 relative overflow-hidden">
        <div className="aurora-orb w-[500px] h-[500px] bg-aurora-purple opacity-10 -bottom-20 -left-20" />

        <div className="max-w-7xl mx-auto relative">
          {/* Studio-wide rules */}
          <div className="glass-card rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-lg text-slate-900 mb-4">
              Studio-Wide Rules
            </h2>
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                "Appropriate dance attire is required in the studio at all times.",
                "A cover-up should be worn when entering and exiting the building.",
                "Dance shoes are not to be worn outside the facility — change at the studio.",
                "Everyday undergarments should not be visible; use athletic options instead.",
              ].map((rule) => (
                <li key={rule} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center text-brand-dark font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mb-10">
            <p className="section-label mb-3">By Genre</p>
            <h2 className="section-heading">What to Wear</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              Shop recommended items directly through our partner store.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
            {dressCodes.map((d) => (
              <div
                key={d.name}
                className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="aurora-orb w-28 h-28 bg-brand opacity-10 -top-4 -right-4" />
                <div className="relative">
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">
                    {d.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {d.attire}
                  </p>
                </div>
                <a
                  href={d.shop}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark hover:underline mt-auto"
                >
                  Shop Attire →
                </a>
              </div>
            ))}
          </div>

          {/* Boys note + Kelly Sews Love */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display font-bold text-base text-slate-900 mb-1">
                Boys' Attire
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Sleeveless or short-sleeved shirts for freedom of movement.
                Dance belt optional when wearing tights or fitted pants.
              </p>
              <a
                href="https://www.shopnimbly.com/daw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark hover:underline mt-3"
              >
                Shop Boys' Attire →
              </a>
            </div>

            <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
              <div className="aurora-orb w-40 h-40 bg-aurora-pink opacity-15 -bottom-6 -right-6" />
              <div className="relative">
                <h3 className="font-display font-bold text-base text-slate-900 mb-1">
                  Custom Dancewear — Kelly Sews Love
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Want something bright, colorful, or one-of-a-kind? Kelly
                  Gammill (our Broadway Dance &amp; Acting instructor) creates
                  custom dancewear through her shop.
                </p>
                <a
                  href="https://kellysewslove.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark hover:underline mt-3"
                >
                  Visit Kelly Sews Love →
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-slate-400 mt-8">
            The studio also stocks a limited selection of leotards, shoes, and
            tights — ask at the front desk.
          </p>

          <p className="text-center text-sm text-slate-500 mt-8">
            Attire is also listed per class on the{" "}
            <Link
              to="/classes/descriptions"
              className="text-brand-dark font-semibold hover:underline"
            >
              Class Descriptions
            </Link>{" "}
            page.
          </p>
        </div>
      </section>
    </>
  );
}
