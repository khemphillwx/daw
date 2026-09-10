import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import comphero from '../assets/DAW-classes-dance-team-pom.webp'

import Seo from "../components/seo/Seo"
import { webPageSchema, breadcrumbSchema } from "../lib/seo"

const teams = [
  {
    name: 'Celebrity',
    color: 'bg-aurora-purple',
    textColor: 'text-aurora-purple',
    ringColor: 'bg-aurora-purple/10',
    emoji: '⭐',
    description: 'Our flagship competitive dance team training across multiple styles and competing at the highest level. Celebrity dancers represent the best of what DAW has to offer.',
    styles: ['Ballet', 'Tap', 'Jazz', 'Contemporary', 'Acro', 'Hip Hop', 'Musical Theater'],
    levels: ['Twinkle', 'Spark', 'Sparkle', 'Glitz', 'Glam', 'VIP'],
    auditionDate: 'June 27, 2026',
    location: 'Carrollton Location',
    contact: 'thecompany@danceacademywest.com',
  },
  {
    name: 'GA Dance Stars',
    color: 'bg-brand',
    textColor: 'text-brand-dark',
    ringColor: 'bg-brand/10',
    emoji: '🌟',
    description: 'A USASF certified All-Star dance team offering beginning through advanced levels. GA Dance Stars is the perfect competitive entry point for dedicated young dancers.',
    styles: ['All-Star Dance', 'USASF Certified'],
    levels: ['Beginning', 'Intermediate', 'Advanced'],
    auditionDate: 'June 26, 2026',
    location: 'Carrollton Location',
    ageMin: 7,
    contact: 'thecompany@danceacademywest.com',
  },
]

const highlights = [
  { emoji: '🏅', title: 'Competition-Ready Training', desc: 'Dancers train multiple days per week in choreography, technique, and performance skills designed for competitive showcase.', gradient: 'from-aurora-purple/12 to-aurora-pink/8',  orb: 'bg-aurora-purple' },
  { emoji: '🎬', title: 'High-Level Choreography',    desc: "Our competitive teams are choreographed to impress — visually dynamic routines that highlight each dancer's strengths.",   gradient: 'from-brand/12 to-aurora-cyan/8',         orb: 'bg-brand'         },
  { emoji: '🤝', title: 'Team Culture',               desc: 'Competitive dancers build deep bonds through intensive rehearsals, travel to competitions, and shared victories.',           gradient: 'from-aurora-pink/12 to-aurora-purple/8', orb: 'bg-aurora-pink'   },
  { emoji: '📸', title: 'Community Showcase',         desc: 'Our competitive team serves as the public face of DAW — performing at community events and inspiring prospective students.', gradient: 'from-aurora-cyan/12 to-brand/8',         orb: 'bg-aurora-cyan'   },
]

export default function Competitive() {
  return (
    <>
      <Seo
        title="Competition Dance Team | Dance Academy West, Carrollton GA"
        description="Competitive dance training in Carrollton, GA for dancers ready to push further — auditions, commitment, travel and what joining the team involves."
        path="/competition-team"
        schema={[
          webPageSchema({
            name: "Competition Dance Team | Dance Academy West, Carrollton GA",
            description: "Competitive dance training in Carrollton, GA for dancers ready to push further — auditions, commitment, travel and what joining the team involves.",
            path: "/competition-team",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Competition Team", path: "/competition-team" },
          ])
        ]}
      />

      <PageHero
        image={comphero}
        label="Competition Team"
        heading="Dance at the Next Level"
        subheading="For dedicated dancers who are ready to push their craft, compete, and represent Dance Academy West on a bigger stage."
        orb1Color="bg-aurora-purple"
        orb2Color="bg-brand"
      />

      {/* Overview */}
      <section className="section-pad pt-0 relative overflow-hidden">
        <div className="aurora-orb w-[400px] h-[400px] bg-aurora-purple opacity-15 -top-20 right-0" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="section-label mb-4">Who It's For</p>
              <h2 className="font-display font-bold text-4xl text-slate-900 mb-5">
                Built for Dancers Who Want More
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Our competitive program is designed for students who are passionate about
                dance and ready to take on the challenge of competing. These dancers train
                multiple days per week and develop skills that go far beyond the standard curriculum.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                While competition is at the core, the competitive team also serves an important
                role in the broader DAW community — performing at events, inspiring younger students,
                and representing everything we stand for.
              </p>
              <Link to="/contact" className="btn-primary">Inquire About the Competition Team</Link>
            </div>

            <div className="glass-card rounded-3xl p-10 relative overflow-hidden">
              <div className="aurora-orb w-56 h-56 bg-aurora-purple opacity-20 -top-8 -right-8" />
              <div className="relative space-y-5">
                {[
                  ['Commitment Level', 'Multiple days per week'],
                  ['Ages',            'Varies by team (typically 6–18)'],
                  ['Auditions',       'By invitation or audition'],
                  ['Season',          'Year-round with competition schedule'],
                  ['Cost',            'Contact us for team-specific pricing'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <span className="text-sm font-semibold text-slate-500">{label}</span>
                    <span className="text-sm font-bold text-slate-800 text-right max-w-[55%]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(h => (
              <div key={h.title} className="glass-card rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-200 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${h.gradient}`} />
                <div className={`aurora-orb w-28 h-28 ${h.orb} opacity-20 -top-4 -right-4`} />
                <div className="relative">
                  <div className="text-4xl mb-4">{h.emoji}</div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">{h.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-[500px] h-[500px] bg-aurora-purple opacity-10 -top-20 -right-20" />
        <div className="aurora-orb w-[400px] h-[400px] bg-brand opacity-10 bottom-0 -left-20" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Our Teams</p>
            <h2 className="section-heading">Find Your Team</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              DAW fields two competitive teams — each with its own focus, structure, and path to the stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teams.map(team => (
              <div key={team.name} className="glass-card rounded-3xl p-10 relative overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className={`aurora-orb w-64 h-64 ${team.color} opacity-15 -top-10 -right-10`} />
                <div className="relative">
                  <div className="text-5xl mb-5">{team.emoji}</div>
                  <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">{team.name}</h3>
                  <p className="text-slate-600 leading-relaxed mb-7">{team.description}</p>

                  {/* Styles */}
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Styles / Focus</p>
                    <div className="flex flex-wrap gap-2">
                      {team.styles.map(s => (
                        <span key={s} className={`text-xs font-semibold px-3 py-1 rounded-full ${team.ringColor} ${team.textColor}`}>{s}</span>
                      ))}
                    </div>
                  </div>

                  {/* Levels */}
                  <div className="mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Levels</p>
                    <div className="flex flex-wrap gap-2">
                      {team.levels.map(l => (
                        <span key={l} className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">{l}</span>
                      ))}
                    </div>
                  </div>

                  {/* Audition details */}
                  <div className="glass-card rounded-2xl p-5 space-y-3 mb-7">
                    {[
                      { icon: '📅', label: 'Audition Date', value: team.auditionDate },
                      { icon: '📍', label: 'Location',      value: team.location },
                      ...(team.ageMin ? [{ icon: '👧', label: 'Minimum Age', value: `${team.ageMin} years old` }] : []),
                    ].map(({ icon, label, value }) => (
                      <div key={label} className="flex items-center gap-3">
                        <span className="text-lg">{icon}</span>
                        <div>
                          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{label}</p>
                          <p className="text-sm font-bold text-slate-800">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`mailto:${team.contact}`}
                    className="btn-primary inline-flex"
                  >
                    Inquire About {team.name} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note about focus */}
      <section className="bg-slate-50 py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-brand opacity-10 -bottom-20 -left-20" />
        <div className="max-w-3xl mx-auto text-center relative">
          <p className="section-label mb-4">Our Philosophy</p>
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-5">
            Competitive Doesn't Mean Cutthroat
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg mb-6">
            At DAW, our competitive teams reflect the same values as every other
            program — acceptance, encouragement, and joy. We believe the best
            competitors are kids who truly love to dance, and that's exactly who
            we cultivate here.
          </p>
          <p className="font-display font-bold text-xl text-slate-900">
            "Our team values commitment, kindness, and self worth."
          </p>
        </div>
      </section>
    </>
  )
}
