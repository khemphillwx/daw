import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import { STUDIO } from "../data/classes";
import happyside from "../assets/DAW-happy-side.webp";
import hero from "../assets/DAW-about-hero.webp";

import Seo from "../components/seo/Seo";
import { webPageSchema, breadcrumbSchema } from "../lib/seo";

const staffImages = import.meta.glob("../assets/staff/*.webp", { eager: true });
const staffImg = (filename) =>
  staffImages[`../assets/staff/${filename}`]?.default;

const adminStaff = [
  { name: "KC Emberson", role: "Studio Owner", photo: "kc-emberson-daw.webp" },
  { name: "Angela Reagh", role: "Enrollment", photo: "angela-reagh-daw.webp" },
  {
    name: "Ann Tritt",
    role: "Accounts Receivable",
    photo: "ann-tritt-daw.webp",
  },
  {
    name: "Tori Hughes",
    role: "Marketing Manager",
    photo: "tori-hughes-daw.webp",
  },
  {
    name: "EStef Martin",
    role: "Social Media Specialist",
    photo: "estef-martin-daw.webp",
  },
  {
    name: "Crystal Robins",
    role: "Celebrity Admin Manager",
    photo: "crystal-robins-daw.webp",
  },
];

const instructors = [
  { name: "Kelly Gammill", photo: "kelly-gammill-daw.webp" },
  { name: "Sherry Proctor", photo: "sherry-proctor-daw.webp" },
  { name: "Taylor Benion", photo: "taylor-benion-daw.webp" },
  { name: "Julia Hubbard", photo: "julia-hubbard-daw.webp" },
  { name: "Gwyn Goodwin", photo: "gwyn-goodwin-daw.webp" },
  { name: "DJ Hill", photo: "dj-hill-daw.webp" },
  { name: "Erica Keating", photo: "erica-keating-daw.webp" },
  { name: "Sara Beth Wilkins", photo: "sara-beth-wilkins-daw.webp" },
  { name: "Sophia Flowers", photo: "sophia-flowers-daw.webp" },
  { name: "Kirbi Lee Rutledge", photo: "kirbi-lee-rutledge-daw.webp" },
  { name: "Ava Emberson", photo: "ava-emberson-daw.webp" },
  { name: "Avery Tritt", photo: "avery-tritt-daw.webp" },
];

const guests = [
  { name: "Shannon Brown", photo: "shannon-brown-daw.webp" },
  { name: "Carly Gallup", photo: "carly-gallup-daw.webp" },
  { name: "Cherrise Wakeham", photo: "cherrise-wakeham-daw.webp" },
  { name: "Zach Walker", photo: "zach-walker-daw.webp" },
  { name: "Brady Michael", photo: "brady-michael-daw.webp" },
  { name: "Summer Robins", photo: "summer-robins-daw.webp" },
  { name: "Taylor Gammill", photo: "taylor-gimmill-daw.webp" },
];

const values = [
  {
    emoji: "❤️",
    title: "Acceptance",
    desc: "Every child is welcome here, regardless of experience, background, or ability.",
    gradient: "from-brand/12 to-aurora-cyan/8",
    orb: "bg-brand",
  },
  {
    emoji: "✨",
    title: "Joy",
    desc: "We believe dance should be fun first. Happy dancers are the best dancers.",
    gradient: "from-aurora-purple/12 to-aurora-pink/8",
    orb: "bg-aurora-purple",
  },
  {
    emoji: "💪",
    title: "Growth",
    desc: "We meet students where they are and help them grow at their own pace.",
    gradient: "from-aurora-cyan/12 to-brand/8",
    orb: "bg-aurora-cyan",
  },
  {
    emoji: "🤝",
    title: "Community",
    desc: "DAW is a family. We celebrate every student's wins — big and small.",
    gradient: "from-aurora-pink/12 to-aurora-purple/8",
    orb: "bg-aurora-pink",
  },
  {
    emoji: "🌟",
    title: "Excellence",
    desc: "High standards delivered with warmth — we push students to be their best.",
    gradient: "from-brand/12 to-aurora-purple/8",
    orb: "bg-brand",
  },
  {
    emoji: "🌈",
    title: "Inclusion",
    desc: "A breath of fresh air in the local dance world. No drama, just dance.",
    gradient: "from-aurora-purple/12 to-brand/8",
    orb: "bg-aurora-purple",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us — 25 Seasons of Dance in Carrollton, GA"
        description="Founded in 2001, Dance Academy West is Carrollton's studio for acceptance, joy and growth. Meet the owner, faculty and guest instructors behind 25 seasons."
        path="/about"
        schema={[
          webPageSchema({
            name: "About Us — 25 Seasons of Dance in Carrollton, GA",
            description: "Founded in 2001, Dance Academy West is Carrollton's studio for acceptance, joy and growth. Meet the owner, faculty and guest instructors behind 25 seasons.",
            path: "/about",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
          ])
        ]}
      />

      <PageHero
        image={hero}
        label="Our Story"
        heading="25 Seasons of Dance in West Georgia"
        subheading="Dance Academy West has been a cornerstone of the Carrollton community for over two decades — and we're just getting started."
        orb1Color="bg-aurora-pink"
        orb2Color="bg-brand"
      />

      {/* Story section */}
      <section className="section-pad pt-10 relative overflow-hidden">
        <div className="aurora-orb w-[400px] h-[400px] bg-brand opacity-15 -top-20 -right-20" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="section-label mb-4">Who We Are</p>
              <h2 className="font-display font-bold text-4xl text-slate-900 mb-6">
                The Happy Side of Dance Studios
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Dance Academy West was founded on a simple idea: dance should
                  be a positive, joyful experience for every child who walks
                  through our doors. For 25 seasons, we've lived that idea every
                  single day.
                </p>
                <p>
                  Based in Carrollton, GA, we offer classes in ballet, hip hop,
                  tap, jazz, Broadway, acrobatics, and more for students ages
                  2–18. Whether your child is taking their very first dance
                  class or training for competition, we have a program that
                  fits.
                </p>
                <p>
                  We're known throughout the community as a studio that leads
                  with kindness — a place where parents trust us with their
                  children and kids genuinely want to be. That reputation is
                  something we work hard to earn every season.
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src={happyside}
                alt="Dance Academy West studio"
                className="w-full h-full object-cover"
              />
              {/* Aurora tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-aurora-purple/10" />
              {/* Logo badge */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
                <img
                  src="/logos/MainLogo1.png"
                  alt="DAW"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
            {[
              { value: "25", label: "Seasons" },
              { value: "700+", label: "Students in System" },
              { value: "6+", label: "Dance Genres" },
            ].map((s) => (
              <div
                key={s.label}
                className="glass-card rounded-2xl p-7 text-center hover:shadow-md transition-shadow"
              >
                <div className="font-display font-bold text-4xl text-brand mb-1">
                  {s.value}
                </div>
                <div className="text-slate-500 text-sm font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <p className="section-label mb-3">What We Stand For</p>
            <h2 className="section-heading">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="glass-card rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-200 relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${v.gradient}`}
                />
                <div
                  className={`aurora-orb w-28 h-28 ${v.orb} opacity-20 -top-4 -right-4`}
                />
                <div className="relative">
                  <div className="text-3xl mb-4">{v.emoji}</div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-[500px] h-[500px] bg-brand opacity-10 -top-20 -right-32" />
        <div className="aurora-orb w-[400px] h-[400px] bg-aurora-purple opacity-10 bottom-0 -left-20" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-14">
            <p className="section-label mb-3">The People Behind the Magic</p>
            <h2 className="section-heading">Meet the Team</h2>
          </div>

          {/* Admin */}
          <div className="mb-14">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 mb-7 text-center">
              Administration
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {adminStaff.map((person) => (
                <div
                  key={person.name}
                  className="glass-card rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={staffImg(person.photo)}
                      alt={person.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="font-display font-bold text-sm text-slate-900 leading-snug">
                      {person.name}
                    </p>
                    <p className="text-xs text-brand-dark font-semibold mt-1">
                      {person.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructors */}
          <div className="mb-14">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 mb-7 text-center">
              Instructors
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {instructors.map((person) => (
                <div
                  key={person.name}
                  className="glass-card rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={staffImg(person.photo)}
                      alt={person.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-display font-bold text-sm text-slate-900 leading-snug">
                      {person.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guest Instructors */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 mb-3 text-center">
              Guest Instructors & Choreographers
            </h3>
            <p className="text-center text-slate-500 text-sm mb-7 max-w-xl mx-auto">
              DAW regularly brings in guest artists to provide fresh
              perspectives, innovative styles, and expert training.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">
              {guests.map((person) => (
                <div
                  key={person.name}
                  className="glass-card rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={staffImg(person.photo)}
                      alt={person.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-display font-bold text-sm text-slate-900 leading-snug">
                      {person.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-aurora-purple opacity-10 bottom-0 right-0" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Find Us</p>
            <h2 className="section-heading">Our Location</h2>
          </div>
          <div className="max-w-3xl mx-auto glass-card rounded-3xl overflow-hidden">
            <div className="rounded-t-3xl overflow-hidden h-72 w-full">
              <iframe
                title="Dance Academy West location"
                src={STUDIO.mapQuery}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-8 text-center">
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-1">
                Carrollton, GA
              </h3>
              <p className="text-brand-dark font-semibold text-sm mb-4">
                {STUDIO.address}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Our Carrollton studio is the heart of everything we do — all
                programs, classes, and events are centered here.
              </p>
              <Link to="/contact" className="btn-primary">
                Get Directions &amp; Hours
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
