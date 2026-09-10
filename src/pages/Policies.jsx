import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'

import Seo from "../components/seo/Seo"
import { webPageSchema, breadcrumbSchema } from "../lib/seo"

const sections = [
  {
    id: 'enrollment',
    icon: '📋',
    title: 'Enrollment',
    items: [
      { heading: 'Programs Offered', body: 'DAW offers a year-round Progressive Program. Classes are divided by grade and ability level.' },
      { heading: 'Class Placement', body: 'The studio reserves the right to reassign students to a different level mid-season to ensure optimal learning and class balance.' },
      { heading: 'Minimum Enrollment', body: 'Classes with fewer than 5 enrolled students may be cancelled. Affected students will be transferred to a comparable alternative.' },
      { heading: 'Non-Discrimination', body: 'Dance Academy West does not discriminate on the basis of race, color, religion, gender, national origin, sexual orientation, or military status.' },
      { heading: 'Enrollment Window', body: 'New enrollment is open mid-July through mid-December. Current students receive priority rollover registration without needing to re-register each season.' },
      { heading: 'Class Change Deadline', body: 'Class changes must be submitted by December 12th.' },
    ],
  },
  {
    id: 'tuition',
    icon: '💳',
    title: 'Tuition & Payment',
    items: [
      { heading: 'Monthly Billing', body: 'Tuition is collected 12 months per year on a monthly basis, regardless of the number of weeks in a given month.' },
      { heading: 'Registration Fee', body: 'A one-time $100 registration fee applies to new students. This fee is waived for returning students who commit to the 12-month Progressive Program. It is reapplied only if a student withdraws and re-enrolls.' },
      { heading: 'No Proration', body: 'Monthly tuition charges remain constant. Months are not prorated based on holidays, studio closures, or partial attendance.' },
      { heading: 'Multi-Class Discount', body: 'Tuition is tiered — the more classes per week, the more you save. Classes beyond six per month are included at no additional charge.' },
    ],
  },
  {
    id: 'attendance',
    icon: '🕐',
    title: 'Attendance & Drop-Off',
    items: [
      { heading: 'Arrival & Departure Window', body: 'Students must be dropped off and picked up within a 5-minute window of their class time. Please plan accordingly.' },
      { heading: 'Late Pick-Up Fee', body: 'Early drop-off or late pick-up beyond the 5-minute window will incur a $1 per minute charge.' },
    ],
  },
  {
    id: 'dresscode',
    icon: '👗',
    title: 'Dress Code',
    items: [
      { heading: 'Studio-Appropriate Attire', body: 'Students must wear appropriate dance attire while in the studio. A cover-up should be worn when entering and exiting the building.' },
      { heading: 'Dance Shoes', body: 'Dance shoes are not to be worn outside the facility. Please change into and out of dance shoes at the studio.' },
    ],
  },
  {
    id: 'observation',
    icon: '👀',
    title: 'Parent Observation',
    items: [
      { heading: 'Ages 6 & Under', body: 'Parents of students ages 6 and younger are permitted to observe class on a weekly basis.' },
      { heading: 'K–12th Grade', body: 'Parent Watch Weeks are scheduled sporadically throughout the season for K–12th grade classes. Dates will be communicated in advance.' },
      { heading: 'New Students', body: 'Parents of new students are welcome to observe during the first two weeks of enrollment.' },
      { heading: 'Instructor Availability', body: 'Instructors should not be approached between or during classes. Please direct questions to the front desk.' },
    ],
  },
  {
    id: 'conduct',
    icon: '🤝',
    title: 'Student Conduct',
    items: [
      { heading: 'Respect', body: 'Students are expected to treat classmates and instructors with respect at all times.' },
      { heading: 'Disruptive Behavior', body: 'Disruptive behavior may result in a student sitting out of class or being removed, with parents notified.' },
      { heading: 'Recurring Issues', body: 'Repeated conduct violations may result in dismissal from the program. All tuition and fees paid are forfeited in the event of conduct-based dismissal.' },
    ],
  },
  {
    id: 'withdrawal',
    icon: '📤',
    title: 'Withdrawal',
    items: [
      { heading: 'Notice Deadline', body: 'Withdrawal notice must be submitted by the 15th of the month to avoid being charged for the following month.' },
      { heading: 'Non-Refundable Fees', body: 'Previously collected tuition, costume fees, and performance fees are non-refundable under any circumstances.' },
      { heading: 'Competition Team Members', body: 'Students on a competition team remain responsible for all contracted fees through the end of the season, regardless of withdrawal date.' },
      { heading: 'Costume Forfeiture', body: 'Students who withdraw before costumes have been distributed forfeit their costume and any related fees paid.' },
      { heading: 'Re-Enrollment', body: 'Students who re-enroll after withdrawing will be charged the $100 registration fee again. Previously paid fees are not applied to future enrollment.' },
    ],
    cta: { label: 'Submit Withdrawal Form', href: 'https://link.enrollio.ai/widget/form/HPzkiSJoRdCenCczBbm9' },
  },
  {
    id: 'privacy',
    icon: '🔒',
    title: 'Privacy Policy',
    items: [
      { heading: 'Children Under 13', body: 'This website is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we learn such information was collected without parental consent, it will be promptly deleted.' },
      { heading: 'Data Collection', body: 'We collect information voluntarily provided through forms, surveys, and service orders. Automatic data (browser type, IP address, operating system, traffic patterns) is collected via Google Analytics for statistical purposes only.' },
      { heading: 'Email Communications', body: 'We maintain strict confidentiality of all email addresses and do not sell or rent subscriber lists. All email communications comply with the CAN-SPAM Act and include unsubscribe options.' },
    ],
  },
]

function PolicySection({ section }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left hover:bg-white/40 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{section.icon}</span>
          <span className="font-display font-bold text-slate-900 text-base">{section.title}</span>
        </div>
        <span className={`text-brand-dark text-2xl font-bold shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {open && (
        <div className="border-t border-slate-100 divide-y divide-slate-100">
          {section.items.map(item => (
            <div key={item.heading} className="px-7 py-5">
              <p className="font-semibold text-sm text-slate-800 mb-1">{item.heading}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
          {section.cta && (
            <div className="px-7 py-5">
              <a
                href={section.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2.5 px-6 inline-flex"
              >
                {section.cta.label} →
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function Policies() {
  return (
    <>
      <Seo
        title="Studio Policies | Dance Academy West, Carrollton GA"
        description="Attendance, tuition, withdrawal and conduct policies for families enrolled at Dance Academy West in Carrollton, Georgia."
        path="/info/policies"
        schema={[
          webPageSchema({
            name: "Studio Policies | Dance Academy West, Carrollton GA",
            description: "Attendance, tuition, withdrawal and conduct policies for families enrolled at Dance Academy West in Carrollton, Georgia.",
            path: "/info/policies",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Important Info", path: "/info/tuition" },
            { name: "Policies", path: "/info/policies" },
          ])
        ]}
      />

      <PageHero
        label="Studio Policies"
        heading="Policies & Guidelines"
        subheading="Everything you need to know about how Dance Academy West operates — so there are never any surprises."
        orb1Color="bg-brand"
        orb2Color="bg-aurora-purple"
      />

      <section className="section-pad pt-10 relative overflow-hidden">
        <div className="aurora-orb w-[400px] h-[400px] bg-aurora-cyan opacity-10 -top-20 -right-20" />
        <div className="aurora-orb w-[350px] h-[350px] bg-aurora-purple opacity-10 bottom-0 -left-10" />

        <div className="max-w-3xl mx-auto relative">
          <p className="text-center text-slate-500 text-sm mb-10">
            Last updated: 2025. Questions about any policy?{' '}
            <Link to="/contact" className="text-brand-dark font-semibold hover:underline">Contact us</Link>.
          </p>

          <div className="space-y-4">
            {sections.map(section => (
              <PolicySection key={section.id} section={section} />
            ))}
          </div>

          <div className="mt-14 glass-card rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Questions About Our Policies?</h3>
            <p className="text-slate-500 text-sm mb-6">
              We're always happy to clarify anything before you enroll.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="btn-primary">Contact Us</Link>
              <Link to="/enroll" className="btn-secondary">Enroll Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
