import { Link } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import eventshero from "../../assets/DAW-events-hero.webp";

import Seo from "../../components/seo/Seo";
import { webPageSchema, breadcrumbSchema } from "../../lib/seo";

/*
 * Season dates are not yet supplied by the studio — the calendar embed below is
 * a placeholder. The "Key Dates" list holds only recurring deadlines that are
 * already documented in our studio policies, so it is safe to show year-round.
 */
const keyDates = [
  {
    when: "Mid-July – Mid-December",
    what: "Enrollment window",
    detail:
      "New enrollment is open during this period. Current students roll over automatically and keep priority placement.",
  },
  {
    when: "December 12",
    what: "Class change deadline",
    detail: "Last day to submit a change to your dancer's class schedule.",
  },
  {
    when: "December 15",
    what: "Costume deposit due",
    detail: "50% of each costume balance is charged.",
  },
  {
    when: "January 15",
    what: "Costume balance due",
    detail: "The remaining costume balance is charged.",
  },
  {
    when: "March",
    what: "Summer Production fee",
    detail:
      "The $175 production fee is charged, covering stage time, rehearsals, t-shirt, trophy, and video links.",
  },
  {
    when: "15th of each month",
    what: "Withdrawal notice deadline",
    detail:
      "Notice must be submitted by the 15th to avoid being charged for the following month.",
  },
];

export default function Calendar() {
  return (
    <>
      <Seo
        title="Studio Calendar & Key Dates | Dance Academy West, Carrollton"
        description="Term dates, holiday closures, recital week and registration deadlines for the current season at Dance Academy West in Carrollton, Georgia."
        path="/info/calendar"
        schema={[
          webPageSchema({
            name: "Studio Calendar & Key Dates | Dance Academy West, Carrollton",
            description: "Term dates, holiday closures, recital week and registration deadlines for the current season at Dance Academy West in Carrollton, Georgia.",
            path: "/info/calendar",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Important Info", path: "/info/tuition" },
            { name: "Calendar", path: "/info/calendar" },
          ])
        ]}
      />

      <PageHero
        image={eventshero}
        label="Important Info"
        heading="Calendar"
        subheading="Season dates, studio closures, and the deadlines worth putting on your fridge."
        orb1Color="bg-aurora-purple"
        orb2Color="bg-brand"
      />

      {/* Season calendar placeholder */}
      <section className="section-pad pt-10 relative overflow-hidden">
        <div className="aurora-orb w-[450px] h-[450px] bg-brand opacity-10 -top-24 -right-24" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-10">
            <p className="section-label mb-3">This Season</p>
            <h2 className="section-heading">Season Calendar</h2>
          </div>
          {/* TODO: Replace with the studio's season calendar (embed or image). */}
          <div className="glass-card rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center min-h-[360px]">
            <p className="text-slate-400 text-sm text-center px-8 max-w-sm">
              The studio's season calendar will be placed here.
            </p>
          </div>
        </div>
      </section>

      {/* Key dates */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-aurora-pink opacity-10 bottom-0 left-0" />
        <div className="max-w-3xl mx-auto relative">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Don't Miss These</p>
            <h2 className="section-heading">Key Dates</h2>
            <p className="text-slate-500 mt-4">
              These deadlines repeat every season.
            </p>
          </div>

          <div className="glass-card rounded-2xl divide-y divide-slate-100">
            {keyDates.map((d) => (
              <div
                key={d.what}
                className="px-7 py-5 sm:flex sm:items-start sm:gap-6"
              >
                <p className="font-display font-bold text-sm text-brand-dark shrink-0 sm:w-52 mb-1 sm:mb-0">
                  {d.when}
                </p>
                <div>
                  <p className="font-semibold text-sm text-slate-800 mb-0.5">
                    {d.what}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {d.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            Full details are in our{" "}
            <Link
              to="/info/policies"
              className="text-brand-dark font-semibold hover:underline"
            >
              studio policies
            </Link>
            . For performance dates, see{" "}
            <Link
              to="/events"
              className="text-brand-dark font-semibold hover:underline"
            >
              Events
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
