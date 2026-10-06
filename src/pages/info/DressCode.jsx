import { Link } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import { dressCodes } from "../../data/classes";
import classeshero from "../../assets/DAW-classes-hero.webp";
import boysGuide from "../../assets/DAW-dresscode-boys.webp";
import balletGuide from "../../assets/DAW-dresscode-junior-teen-ballet.webp";
import genresGuide from "../../assets/DAW-dresscode-junior-teen-genres.webp";
import hiphopActingGuide from "../../assets/DAW-dresscode-hiphop-acting.webp";
import twirlGuide from "../../assets/DAW-dresscode-mini-twirl-tap-groove.webp";

import Seo from "../../components/seo/Seo";
import { webPageSchema, breadcrumbSchema } from "../../lib/seo";

const visualGuides = [
  {
    name: "Junior & Teen Ballet",
    img: balletGuide,
    alt: "Junior & Teen ballet dress code: black leotard, skin-tone tights and matching shoes, hair in a bun.",
  },
  {
    name: "Junior & Teen — Jazz, Tap, Dance Team, Lyrical, Contemporary & Acro",
    img: genresGuide,
    alt: "Junior & Teen dress code for jazz, tap, dance team, lyrical, contemporary, acro and Broadway: any style leotard, jazz or tap shoes, hair pulled back.",
  },
  {
    name: "Mini, Junior & Teen — Hip Hop & Acting",
    img: hiphopActingGuide,
    alt: "Hip hop and acting dress code: loose athletic wear and clean sneakers, or barefoot for acting.",
  },
  {
    name: "Mini — Twirl, Tap & Groove",
    img: twirlGuide,
    alt: "Mini twirl, tap and groove dress code: pastel leotard with pink or skin-tone tights and shoes to match.",
  },
];

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
              <img
                src={boysGuide}
                alt="Boys' dress code: white shirt and black tights or shorts for ballet; any style semi-fitted athletic wear with jazz slip-on shoes or tap oxfords for jazz, tap, lyrical, Broadway dance and acro."
                className="rounded-xl mb-4 w-full"
                loading="lazy"
              />
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

          <div className="text-center mt-14 mb-10">
            <p className="section-label mb-3">Quick Reference</p>
            <h2 className="section-heading">Visual Dress Code Guides</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              A head-to-toe look at what to wear, by age group and style.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {visualGuides.map((g) => (
              <div
                key={g.name}
                className="glass-card rounded-2xl p-4 flex flex-col"
              >
                <img
                  src={g.img}
                  alt={g.alt}
                  className="rounded-xl w-full"
                  loading="lazy"
                />
                <p className="text-center text-sm font-semibold text-slate-700 mt-3">
                  {g.name}
                </p>
              </div>
            ))}
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
