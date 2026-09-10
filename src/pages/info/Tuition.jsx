import { Link } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import { STUDIO } from "../../data/classes";
import programshero from "../../assets/DAW-programs-hero.png";

import Seo from "../../components/seo/Seo";
import { webPageSchema, breadcrumbSchema } from "../../lib/seo";

const monthlyTuition = [
  { classes: "1 class", price: "$85", savings: "—" },
  { classes: "2 classes", price: "$145", savings: "$25" },
  { classes: "3 classes", price: "$205", savings: "$50" },
  { classes: "4 classes", price: "$265", savings: "$75" },
  { classes: "5 classes", price: "$325", savings: "$100" },
  { classes: "6+ classes", price: "$385", savings: "$125" },
];

const additionalFees = [
  {
    title: "New Student Fee",
    amount: "$100",
    unit: "one-time",
    accent: "text-brand-dark",
    orb: "bg-brand",
    desc: "Charged once at enrollment. Only reapplied if a student withdraws and re-enrolls.",
  },
  {
    title: "Costumes",
    amount: "$110–$130",
    unit: "per costume",
    accent: "text-aurora-purple",
    orb: "bg-aurora-purple",
    desc: "50% due by Dec 15, remaining balance charged Jan 15.",
  },
  {
    title: "Summer Production",
    amount: "$175",
    unit: "per student",
    accent: "text-aurora-pink",
    orb: "bg-aurora-pink",
    desc: "Charged in March. Covers stage time, rehearsals, t-shirt, trophy, and video links.",
  },
];

const billingNotes = [
  "Tuition is collected 12 months per year on a monthly basis, regardless of the number of weeks in a given month.",
  "Monthly charges remain constant — months are not prorated for holidays, studio closures, or partial attendance.",
  "The one-time registration fee is waived for returning students who commit to the 12-month Progressive Program.",
  "Withdrawal notice must be submitted by the 15th of the month to avoid being charged for the following month.",
];

export default function Tuition() {
  return (
    <>
      <Seo
        title="Dance Class Tuition & Fees | Dance Academy West, Carrollton GA"
        description="Tuition, registration and costume costs for dance classes at Dance Academy West in Carrollton, GA. The registration fee is charged once — not every season."
        path="/info/tuition"
        schema={[
          webPageSchema({
            name: "Dance Class Tuition & Fees | Dance Academy West, Carrollton GA",
            description: "Tuition, registration and costume costs for dance classes at Dance Academy West in Carrollton, GA. The registration fee is charged once — not every season.",
            path: "/info/tuition",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Important Info", path: "/info/tuition" },
            { name: "Tuition & Fees", path: "/info/tuition" },
          ])
        ]}
      />

      <PageHero
        image={programshero}
        label="Important Info"
        heading="Tuition & Fees"
        subheading="No surprises — here's everything you need to know about costs before you enroll."
        orb1Color="bg-brand"
        orb2Color="bg-aurora-purple"
      />

      <section className="section-pad pt-10 relative overflow-hidden">
        <div className="aurora-orb w-[500px] h-[500px] bg-aurora-cyan opacity-10 -top-20 -right-32" />

        <div className="max-w-4xl mx-auto relative">
          {/* Monthly tuition table */}
          <div className="glass-card rounded-2xl overflow-hidden mb-8">
            <div className="grid grid-cols-3 bg-slate-900 text-white text-sm font-display font-bold">
              <div className="p-5 text-slate-400">Classes / Week</div>
              <div className="p-5 text-brand text-center">Monthly Tuition</div>
              <div className="p-5 text-aurora-purple text-center">You Save</div>
            </div>
            {monthlyTuition.map((row, i) => (
              <div
                key={row.classes}
                className={`grid grid-cols-3 text-sm border-t border-slate-100 ${
                  i % 2 === 0 ? "bg-white/60" : "bg-white/30"
                }`}
              >
                <div className="p-5 font-semibold text-slate-700">
                  {row.classes}
                </div>
                <div className="p-5 text-slate-800 font-bold text-center">
                  {row.price}
                </div>
                <div
                  className={`p-5 text-center font-semibold ${
                    row.savings === "—" ? "text-slate-400" : "text-aurora-purple"
                  }`}
                >
                  {row.savings}
                </div>
              </div>
            ))}
            <div className="bg-slate-50 border-t border-slate-100 px-5 py-3 text-xs text-slate-500 text-center">
              Tuition maxes out at 6 classes — enroll in more at no additional
              cost.
            </div>
          </div>

          {/* Additional fees */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {additionalFees.map((fee) => (
              <div
                key={fee.title}
                className="glass-card rounded-2xl p-7 relative overflow-hidden"
              >
                <div
                  className={`aurora-orb w-32 h-32 ${fee.orb} opacity-15 -top-4 -right-4`}
                />
                <div className="relative">
                  <h3 className="font-display font-bold text-base text-slate-900 mb-1">
                    {fee.title}
                  </h3>
                  <p className={`${fee.accent} font-bold text-xl mb-3`}>
                    {fee.amount}{" "}
                    <span className="text-sm font-normal text-slate-500">
                      {fee.unit}
                    </span>
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {fee.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Billing notes */}
          <div className="glass-card rounded-2xl p-8">
            <h2 className="font-display font-bold text-lg text-slate-900 mb-5">
              How Billing Works
            </h2>
            <ul className="space-y-3">
              {billingNotes.map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center text-brand-dark font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  {note}
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-500 mt-6">
              Full details are in our{" "}
              <Link
                to="/info/policies"
                className="text-brand-dark font-semibold hover:underline"
              >
                studio policies
              </Link>
              .
            </p>
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            Questions about pricing?{" "}
            <Link
              to="/contact"
              className="text-brand-dark font-semibold hover:underline"
            >
              Reach out
            </Link>{" "}
            — we're happy to help.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-brand opacity-10 bottom-0 right-0" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Try a class free before you commit to anything.
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
            <Link to="/enroll" className="btn-secondary">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
