import { Link } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import { STUDIO } from "../../data/classes";
import eventshero from "../../assets/DAW-events-hero.webp";

import Seo from "../../components/seo/Seo";
import { webPageSchema, breadcrumbSchema } from "../../lib/seo";

const featured = [
  {
    to: "/events/christmas-parade",
    title: "Christmas Parade",
    desc: "Our dancers take to the streets of Carrollton for the annual Christmas parade — one of our favourite traditions of the year.",
    gradient: "from-aurora-pink/15 to-brand/8",
    orb: "bg-aurora-pink",
  },
  {
    to: "/events/mayfest",
    title: "Mayfest",
    desc: "A spring celebration and community performance, bringing the joy of dance to the wider Carrollton area.",
    gradient: "from-brand/15 to-aurora-cyan/8",
    orb: "bg-brand",
  },
  {
    to: "/events/summer-production",
    title: "Summer Production",
    desc: "The highlight of our year. Progressive Program dancers take the stage at the Carrollton Center for the Arts for six shows across a full weekend.",
    gradient: "from-aurora-purple/15 to-aurora-pink/8",
    orb: "bg-aurora-purple",
  },
];

const alsoHappening = [
  {
    title: "Competitions",
    desc: "Our competition teams travel to regional dance competitions throughout the year. Follow along as they represent DAW on a bigger stage.",
    gradient: "from-aurora-cyan/12 to-aurora-purple/8",
    orb: "bg-aurora-cyan",
    link: "/competition-team",
    linkLabel: "Meet the Teams",
  },
  {
    title: "Parent Appreciation Weeks",
    desc: "A special celebration just for our DAW families. Come into the studio, watch your child's class, enjoy light refreshments, and take part in door prizes and raffle drawings.",
    gradient: "from-aurora-purple/12 to-brand/8",
    orb: "bg-aurora-purple",
  },
  {
    title: "Community Performances",
    desc: "DAW dancers perform at local community events, school functions, and special occasions throughout the year.",
    gradient: "from-brand/12 to-aurora-pink/8",
    orb: "bg-brand",
  },
  {
    title: "Workshops & Masterclasses",
    desc: "Special workshops and guest instructor masterclasses are offered periodically to help students expand their skills in specific styles or techniques.",
    gradient: "from-aurora-purple/12 to-aurora-cyan/8",
    orb: "bg-aurora-purple",
  },
];

export default function Events() {
  return (
    <>
      <Seo
        title="Studio Events & Performances | Dance Academy West, Carrollton"
        description="The Carrollton Christmas Parade, Mayfest and our summer recital production — where Dance Academy West dancers perform for the west Georgia community each year."
        path="/events"
        schema={[
          webPageSchema({
            name: "Studio Events & Performances | Dance Academy West, Carrollton",
            description: "The Carrollton Christmas Parade, Mayfest and our summer recital production — where Dance Academy West dancers perform for the west Georgia community each year.",
            path: "/events",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Events", path: "/events" },
          ])
        ]}
      />

      <PageHero
        image={eventshero}
        label="Events & Performances"
        heading="Celebrate Your Dancer"
        subheading="From the Christmas parade to our full summer production — there's always something happening at Dance Academy West."
        orb1Color="bg-aurora-pink"
        orb2Color="bg-aurora-purple"
      />

      {/* Featured three */}
      <section className="section-pad pt-10 relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-brand opacity-15 -top-20 -right-20" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Our Signature Events</p>
            <h2 className="section-heading">Three Nights to Remember</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((e) => (
              <Link
                key={e.title}
                to={e.to}
                className="glass-card rounded-3xl p-10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${e.gradient}`}
                />
                <div
                  className={`aurora-orb w-48 h-48 ${e.orb} opacity-20 -top-8 -right-8`}
                />
                <div className="relative flex flex-col flex-1">
                  <h3 className="font-display font-bold text-2xl text-slate-900 mb-3">
                    {e.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">
                    {e.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-dark">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Also happening */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-aurora-pink opacity-10 bottom-0 right-0" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Throughout the Year</p>
            <h2 className="section-heading">Also Happening</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {alsoHappening.map((e) => (
              <div
                key={e.title}
                className="glass-card rounded-2xl p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${e.gradient}`}
                />
                <div
                  className={`aurora-orb w-32 h-32 ${e.orb} opacity-20 -top-4 -right-4`}
                />
                <div className="relative flex flex-col flex-1">
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                    {e.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {e.desc}
                  </p>
                  {e.link && (
                    <Link
                      to={e.link}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:underline mt-4"
                    >
                      {e.linkLabel} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-aurora-purple opacity-10 bottom-0 left-0" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-5">
            Want to Be Part of It?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Performance opportunities are included in the Progressive Program.
            Start with a free trial class and see if it's a fit.
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
