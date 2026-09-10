import { Link } from "react-router-dom";
import ClassListEmbed from "../components/ui/ClassListEmbed";
import Seo from "../components/seo/Seo";
import { SITE_URL, SITE_NAME, ORGANIZATION_ID } from "../data/site";
import { STUDIO } from "../data/classes";
import { locations, locationPath } from "../data/locations";
// TODO: Swap `hero` for the studio's new homepage photo once supplied.
import hero from "../assets/DAW-girls-outside.webp";
import kid from "../assets/DAW-kid-dance.webp";
import girlsoutside from "../assets/DAW-girls-outside.webp";
import group from "../assets/DAW-group-photo.webp";

const genres = [
  {
    name: "Ballet",
    desc: "Grace, poise, and classical technique for all ages and levels.",
  },
  {
    name: "Hip Hop",
    desc: "High-energy moves, rhythm, and creative self-expression.",
  },
  {
    name: "Tap",
    desc: "Rhythm and footwork that's as fun as it looks — and sounds.",
  },
  {
    name: "Jazz",
    desc: "Dynamic, expressive movement bursting with personality.",
  },
  {
    name: "Broadway",
    desc: "Theatrical performance combining storytelling, song, and dance.",
  },
  {
    name: "Acrobatics",
    desc: "Strength, flexibility, and impressive athletic skills.",
  },
];

/*
 * Real reviews from real families. They previously carried avatar images
 * pulled from picsum.photos — random stock photographs of strangers, shown
 * beside named parents' quotes. That reads as a photo of the reviewer, which
 * it is not, so the avatars are now the reviewer's initials instead.
 *
 * Deliberately no AggregateRating schema anywhere on the site: Google does not
 * allow a business to mark up reviews it has collected about itself on its own
 * pages, and doing it anyway risks a structured-data manual action.
 */
const testimonials = [
  {
    name: "Nicole E.",
    role: "Mom of Olivia & Aiden",
    quote:
      "Being a part of the Dance Academy West family has been such a joy! We can't imagine being a part of any other studio!",
  },
  {
    name: "Jaleen W.",
    role: "Mom of Kennedy",
    quote:
      "My daughter has been dancing at DAW for 3 years now and we have loved every single minute of it. We WILL not dance anywhere else. We love our Dance Academy West family!!!",
  },
  {
    name: "Brittany S.",
    role: "Mom of Lily",
    quote:
      "Dance Academy West is a fun and welcoming dance studio. The instructors and students are encouraging. Thanks DAW for providing my daughter with a loving and professional dance experience!",
  },
  {
    name: "Zoey",
    role: "DAW Student, Age 8",
    quote:
      "It feels like joy to me. I'm comfortable with my dance instructors and love how they encourage me. I love my dance sisters and have more friends than ever before. I feel like I can do anything...",
  },
  {
    name: "Jennifer A.",
    role: "Mom of Addison & Blakely",
    quote:
      "Our girls have loved every minute at DAW! The teachers are so loving, caring, and so knowledgeable. DAW quickly grew into part of our family.",
  },
];

const stats = [
  { value: "25", label: "Seasons of Dance" },
  { value: "6+", label: "Dance Genres" },
  { value: "Ages 2–18", label: "Programs for All Ages" },
  { value: "Free", label: "Trial Class" },
];

export default function Home() {
  return (
    <>
      {/*
        The homepage carries the head term — "dance classes in Carrollton, GA"
        — because it is the strongest page on the domain and the one Google
        already trusts. /dance-classes/carrollton-ga deliberately targets the
        narrower visit-intent phrasing instead, so the two support each other
        rather than compete for the same query.
      */}
      <Seo
        title="Dance Classes in Carrollton, GA | Ages 2–18 | Dance Academy West"
        description="Dance Academy West is Carrollton's studio for ballet, tap, jazz, hip hop, acro and competition dance, ages 2–18. 25 seasons in west Georgia. Free trial class."
        path="/"
        schema={[
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: SITE_NAME,
            publisher: { "@id": ORGANIZATION_ID },
            inLanguage: "en-US",
          },
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}/#webpage`,
            url: `${SITE_URL}/`,
            name: "Dance Classes in Carrollton, GA | Dance Academy West",
            description:
              "Ballet, tap, jazz, hip hop, Broadway, acrobatics and competition dance for ages 2–18 at Dance Academy West in Carrollton, Georgia.",
            about: { "@id": ORGANIZATION_ID },
            isPartOf: { "@id": `${SITE_URL}/#website` },
            inLanguage: "en-US",
          },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Aurora orbs */}
        <div className="aurora-orb w-[700px] h-[700px] bg-brand opacity-20 -top-48 -right-48" />
        <div className="aurora-orb w-[500px] h-[500px] bg-aurora-purple opacity-20 -bottom-32 -left-24" />
        <div className="aurora-orb w-[350px] h-[350px] bg-aurora-pink opacity-10 top-1/3 right-1/3" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/25 rounded-full px-4 py-1.5 text-sm font-semibold text-brand-dark mb-7">
              🎉 Now Enrolling — Ages 2–18
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-slate-900 leading-tight mb-6">
              We Do Things
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark via-cyan-400 to-aurora-purple">
                Differently Here
              </span>
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed mb-10 max-w-lg">
              25 seasons of joyful dance education in Carrollton, GA. From first
              steps to stage performances — we make dance fun, welcoming, and
              unforgettable for every child.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={STUDIO.freeTrial}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4"
              >
                Schedule a Free Trial Class
              </a>
              <Link to="/enroll" className="btn-secondary text-base px-8 py-4">
                Enroll Now
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Aurora glow behind */}
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-brand/30 via-aurora-purple/15 to-aurora-pink/20 blur-2xl" />

              {/* Main photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src={hero}
                  alt="Dancers at Dance Academy West"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating secondary photo */}
              <div className="absolute -bottom-6 -left-8 w-36 h-36 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={kid}
                  alt="Dance class"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Logo badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center p-2">
                <img
                  src="/logos/MainLogo1.png"
                  alt="DAW"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display font-bold text-4xl text-brand mb-1">
                {s.value}
              </div>
              <div className="text-slate-400 text-sm font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Programs ─────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden">
        <img
          src={girlsoutside}
          alt="Dance Academy West Group photo"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover opacity-10"
        />
        <div className="aurora-orb w-[450px] h-[450px] bg-aurora-cyan opacity-15 -top-32 -left-32" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Choose Your Path</p>
            <h2 className="section-heading">Start Dancing</h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto">
              Find the class that fits your dancer, then come try it free before
              you commit to anything.
            </p>
          </div>

          {/* Choose a Class chart — live Studio Pro class list */}
          <ClassListEmbed className="mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free trial */}
            <div className="glass-card rounded-3xl p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/12 to-aurora-cyan/8" />
              <div className="aurora-orb w-64 h-64 bg-brand top-0 right-0 opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative">
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
                  Free Trial Class
                </h3>
                <p className="text-brand-dark font-bold text-lg mb-5">
                  No Cost &nbsp;·&nbsp; No Commitment
                </p>
                <p className="text-slate-600 leading-relaxed mb-7">
                  The best way to know is to come dance with us. Your child sits
                  in on a real class alongside established students — no
                  pressure, just fun.
                </p>
                <ul className="space-y-2.5 text-sm text-slate-700 mb-9">
                  {[
                    "Ages 2–18 welcome",
                    "All skill levels",
                    "A real class, not a taster session",
                    "Decide afterward — no obligation",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center text-brand-dark font-bold text-xs shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={STUDIO.freeTrial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Schedule a Free Trial Class
                </a>
              </div>
            </div>

            {/* Progressive Program */}
            <div className="glass-card rounded-3xl p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-aurora-purple/20">
              <div className="absolute inset-0 bg-gradient-to-br from-aurora-purple/12 to-aurora-pink/8" />
              <div className="aurora-orb w-64 h-64 bg-aurora-purple top-0 right-0 opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative">
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
                  Progressive Program
                </h3>
                <p className="text-aurora-purple font-bold text-lg mb-5">
                  Year-Round &nbsp;·&nbsp; One-Time Registration Fee
                </p>
                <p className="text-slate-600 leading-relaxed mb-7">
                  For families ready to invest in growth. Build skills week by
                  week, form lasting friendships, and perform in a full summer
                  recital production.
                </p>
                <ul className="space-y-2.5 text-sm text-slate-700 mb-9">
                  {[
                    "Ages 3–18",
                    "12-month program",
                    "Summer recital performance",
                    "Pay the registration fee once — ever",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-aurora-purple/15 flex items-center justify-center text-aurora-purple font-bold text-xs shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/programs" className="btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            Need help narrowing it down?{" "}
            <Link
              to="/classes/choosing"
              className="text-brand-dark font-semibold hover:underline"
            >
              Read our guide to choosing a class
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Genres ───────────────────────────────────────────── */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-[500px] h-[500px] bg-aurora-pink opacity-10 -bottom-40 -right-20" />
        <div className="aurora-orb w-[350px] h-[350px] bg-brand opacity-10 top-0 left-1/2" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Something for Everyone</p>
            <h2 className="section-heading">Explore Our Genres</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {genres.map((genre) => (
              <div
                key={genre.name}
                className="bg-white/80 glass-card rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  {genre.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {genre.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/classes/descriptions" className="btn-secondary">
              View All Classes & Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden">
        <div className="aurora-orb w-[600px] h-[600px] bg-brand opacity-10 -top-40 -left-40" />
        <div className="aurora-orb w-[400px] h-[400px] bg-aurora-purple opacity-10 -bottom-20 right-0" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-14">
            <p className="section-label mb-3">From Our Families</p>
            <h2 className="section-heading">What Parents Are Saying</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="glass-card rounded-2xl p-8 hover:shadow-md transition-shadow duration-200 flex flex-col w-full relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${i % 3 === 0 ? "from-brand/10 to-aurora-cyan/6" : i % 3 === 1 ? "from-aurora-purple/10 to-aurora-pink/6" : "from-aurora-pink/10 to-brand/6"}`}
                />
                <div className="relative flex flex-col flex-1">
                  <div className="text-brand text-5xl font-display leading-none mb-4">
                    "
                  </div>
                  <p className="text-slate-700 leading-relaxed italic flex-1 mb-6">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      aria-hidden="true"
                      className="w-11 h-11 rounded-full shrink-0 ring-2 ring-brand/30 bg-brand/15 flex items-center justify-center font-display font-bold text-brand-dark text-sm"
                    >
                      {t.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-display font-bold text-slate-900">
                        {t.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service area ─────────────────────────────────────── */}
      {/*
        Names the towns we serve on the homepage itself, and links each one to
        its page. Two things happen here: a parent in Bremen sees their own
        town on the page they landed on, and the five location pages get an
        internal link from the strongest page on the domain.
      */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-[420px] h-[420px] bg-aurora-cyan opacity-12 -top-24 -right-24" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Where Our Dancers Come From</p>
            <h2 className="section-heading">Serving West Georgia</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              One studio on Bankhead Highway, dancers from all across Carroll
              and Haralson counties. Find the drive time and directions from
              your town.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {locations.map((l) => (
              <Link
                key={l.slug}
                to={locationPath(l.slug)}
                className="bg-white/80 glass-card rounded-2xl p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="font-display font-bold text-slate-900 mb-1">
                  {l.city}, {l.state}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {l.drive
                    ? `${l.drive.minutes} min · ${l.drive.miles} miles`
                    : "Our home studio"}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/dance-classes" className="btn-secondary">
              See All Areas We Serve
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 px-6 md:px-12">
        <img
          src={group}
          alt="Dance Academy West Group photo"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand/80 via-cyan-300/60 to-aurora-purple/50" />
        <div className="aurora-orb w-[500px] h-[500px] bg-aurora-pink opacity-25 -top-20 right-0" />
        <div className="aurora-orb w-[400px] h-[400px] bg-aurora-purple opacity-20 bottom-0 left-0" />

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-black mb-5 leading-tight">
            Ready to Find Your Child's Dance?
          </h2>
          <p className="text-black/80 text-lg mb-10 leading-relaxed">
            Start with a free trial class — no cost, no commitment. Classes are
            forming now, and spots fill fast.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={STUDIO.freeTrial}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 font-display font-bold px-9 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Schedule a Free Trial Class
            </a>
            <Link
              to="/contact"
              className="border-2 border-black/80 text-black font-display font-bold px-9 py-4 rounded-full hover:bg-white/15 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
