import { Link } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import ClassListEmbed from "../../components/ui/ClassListEmbed";
import { STUDIO } from "../../data/classes";
import classeshero from "../../assets/DAW-classes-hero.webp";

import Seo from "../../components/seo/Seo";
import { webPageSchema, breadcrumbSchema } from "../../lib/seo";

/*
 * Level bands read off the live Studio Pro class list. Verify with the studio
 * before launch — Jr. 3 never appears on its own, only paired with Jr. 2.
 */
const levels = [
  { name: "Mini 1", ages: "Ages 3–5", desc: "First classes — combo formats that mix two styles in one hour." },
  { name: "Mini 2", ages: "Ages 4–6", desc: "The next step up, still combo-based, with more structure." },
  { name: "Jr. 1", ages: "Ages 7–10", desc: "Single-genre classes begin, alongside combo options." },
  { name: "Jr. 2 & 3", ages: "Ages 8–12", desc: "Genre-specific training with technique classes available." },
  { name: "Teen 1–3", ages: "Ages 12–18", desc: "Full genre range, technique, pointe, and performance tracks." },
];

const steps = [
  {
    n: "1",
    title: "Start with age",
    desc: "Every class lists its age range. Use the age filter above to see only what your dancer is eligible for.",
  },
  {
    n: "2",
    title: "Pick a style they're drawn to",
    desc: "There's no wrong first class. Most dancers try one genre, love it, and add a second the following season.",
  },
  {
    n: "3",
    title: "Check for a co-requisite",
    desc: "A few classes pair with another — ballet underpins contemporary, and acting pairs with Broadway or jazz.",
  },
  {
    n: "4",
    title: "Come try it free",
    desc: "Where a class offers it, you can book a trial directly from the list above before committing.",
  },
];

const coRequisites = [
  {
    genre: "Ballet Performance",
    rule: "Intermediate and advanced dancers must also enroll in Ballet Technique.",
  },
  {
    genre: "Contemporary & Lyrical",
    rule: "Must be enrolled in a Ballet class.",
  },
  {
    genre: "Acting",
    rule: "Must be enrolled in Broadway Dance or Jazz.",
  },
];

export default function ChoosingAClass() {
  return (
    <>
      <Seo
        title="How to Choose Your Child's First Dance Class | Carrollton, GA"
        description="An age-by-age guide to picking a first dance class, ages 2 to 18. Filter by your child's age and see what each genre involves before you enroll."
        path="/classes/choosing"
        schema={[
          webPageSchema({
            name: "How to Choose Your Child's First Dance Class | Carrollton, GA",
            description: "An age-by-age guide to picking a first dance class, ages 2 to 18. Filter by your child's age and see what each genre involves before you enroll.",
            path: "/classes/choosing",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Classes", path: "/classes/schedule" },
            { name: "Choosing a Class", path: "/classes/choosing" },
          ])
        ]}
      />

      <PageHero
        image={classeshero}
        label="Classes"
        heading="Choosing a Class"
        subheading="Not sure where your dancer fits? Search by age below, then use the guide underneath to narrow it down."
        orb1Color="bg-aurora-purple"
        orb2Color="bg-brand"
      />

      {/* Live class list */}
      <section className="section-pad pt-10 relative overflow-hidden">
        <div className="aurora-orb w-[450px] h-[450px] bg-brand opacity-10 -top-24 -right-24" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Start Here</p>
            <h2 className="section-heading">Find Your Class</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              Filter by age or search by name. Every class shows its day, time,
              and studio — and you can register or join a waitlist right here.
            </p>
          </div>
          <ClassListEmbed height="h-[44rem]" />
        </div>
      </section>

      {/* Levels */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-aurora-pink opacity-10 -top-16 left-0" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <p className="section-label mb-3">How Classes Are Grouped</p>
            <h2 className="section-heading">Our Levels</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              Class names start with a level. Once you know your dancer's level,
              the list above gets much easier to read.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {levels.map((l) => (
              <div
                key={l.name}
                className="glass-card rounded-2xl p-7 hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1">
                  {l.name}
                </h3>
                <p className="text-xs font-semibold text-brand-dark mb-3">
                  {l.ages}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {l.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-7 mt-6 max-w-2xl mx-auto">
            <h3 className="font-display font-bold text-base text-slate-900 mb-2">
              What does "Non Recital Class" mean?
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Classes marked <em>*Non Recital Class</em> focus purely on
              training — technique, pointe, acro, and conditioning. They don't
              perform in the summer production, so they're a good way to build
              skill without adding another costume or routine.
            </p>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="section-pad relative overflow-hidden">
        <div className="aurora-orb w-[400px] h-[400px] bg-aurora-cyan opacity-10 bottom-0 -right-20" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Four Steps</p>
            <h2 className="section-heading">How to Choose</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div
                key={s.n}
                className="glass-card rounded-2xl p-7 flex gap-5 hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-brand/20 flex items-center justify-center font-display font-bold text-brand-dark shrink-0">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-requisites */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-aurora-purple opacity-10 top-0 right-0" />
        <div className="max-w-3xl mx-auto relative">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Good to Know</p>
            <h2 className="section-heading">Classes That Pair</h2>
            <p className="text-slate-500 mt-4">
              Three of our classes require a second enrollment alongside them.
              Everything else can be taken on its own.
            </p>
          </div>

          <div className="glass-card rounded-2xl divide-y divide-slate-100">
            {coRequisites.map((c) => (
              <div key={c.genre} className="px-7 py-5">
                <p className="font-display font-bold text-slate-900 text-sm mb-1">
                  {c.genre}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {c.rule}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            Full details for every style are on the{" "}
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

      {/* CTA */}
      <section className="section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-brand opacity-10 bottom-0 left-0" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-5">
            Let Them Try It First
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            The fastest way to know is to come dance with us. Schedule a free
            trial class — no commitment, no pressure.
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
            <Link to="/classes/schedule" className="btn-secondary">
              View the Schedule
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
