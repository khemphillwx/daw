import { Link } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import { STUDIO } from "../../data/classes";
import eventshero from "../../assets/DAW-events-hero.webp";

/*
 * Shared shell for event pages whose copy and photos have not been supplied
 * yet. Replace each usage with a full page (see SummerProduction.jsx for the
 * pattern) once the studio sends content.
 */
export default function EventDetailShell({
  heading,
  subheading,
  blurb,
  orb1Color = "bg-brand",
  orb2Color = "bg-aurora-purple",
}) {
  return (
    <>
      <PageHero
        image={eventshero}
        label="Events"
        heading={heading}
        subheading={subheading}
        orb1Color={orb1Color}
        orb2Color={orb2Color}
      />

      <section className="section-pad pt-10 relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-brand opacity-10 -top-20 -right-20" />

        <div className="max-w-3xl mx-auto relative">
          <p className="text-slate-600 leading-relaxed text-lg mb-10 text-center">
            {blurb}
          </p>

          {/* TODO: Replace with the studio's copy, photos, dates, and details. */}
          <div className="glass-card rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center min-h-[300px] mb-10">
            <p className="text-slate-400 text-sm text-center px-8 max-w-sm">
              Details for this event will be published here.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-10 text-center">
            <h2 className="font-display font-bold text-xl text-slate-900 mb-2">
              Want the Details?
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              Text us and we'll let you know as soon as dates are confirmed.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={STUDIO.smsHref} className="btn-primary">
                Text Us
              </a>
              <Link to="/events" className="btn-secondary">
                All Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
