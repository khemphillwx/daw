import { Link } from 'react-router-dom'
import { STUDIO } from '../../data/classes'
import { NAP, HOURS } from '../../data/site'
import { locations, locationPath } from '../../data/locations'

const explore = [
  ['/',                      'Home'                  ],
  ['/classes/schedule',      'Class Schedule'        ],
  ['/classes/descriptions',  'Class Descriptions'    ],
  ['/classes/choosing',      'Choosing a Class'      ],
  ['/competition-team',      'Competition Team'      ],
  ['/about',                 'About Us'              ],
]

const resources = [
  ['/info/tuition',    'Tuition & Fees' ],
  ['/info/calendar',   'Calendar'       ],
  ['/info/dress-code', 'Dress Code'     ],
  ['/info/policies',   'Policies'       ],
  ['/programs',        'Progressive Program'],
  ['/faq',             'FAQ'            ],
]

const more = [
  ['/events',        'Events' ],
  ['/gallery',       'Gallery'],
  ['/enroll',        'Enroll' ],
  ['/contact',       'Contact'],
  ['/dance-classes', 'Areas We Serve'],
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Aurora accent bar */}
      <div className="h-1 bg-gradient-to-r from-aurora-purple via-brand to-aurora-pink" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <img
              src="/logos/MainLogo_White.png"
              alt="Dance Academy West"
              className="h-12 w-12 object-contain"
            />
            <span className="font-display font-bold text-base leading-snug">
              <span className="text-brand">Dance</span><br />
              <span className="text-white">Academy West</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Where every child finds their dance. Serving Carrollton and
            surrounding areas for 25 seasons.
          </p>

          {/*
            Social icons.
            TikTok and YouTube used to sit here as href="#", which is a link to
            nowhere: it looks live, does nothing when clicked, and adds two
            dead outbound links to every page. Add them back with real URLs
            when the studio confirms the accounts exist.
          */}
          <div className="flex gap-4">
            {[
              { label: 'Facebook',  href: 'https://www.facebook.com/125995280747922', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
              { label: 'Instagram', href: 'https://www.instagram.com/dawdancers',       path: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' },
            ].map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate-400 hover:text-brand transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Explore links */}
        <div>
          <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 mb-5">
            Explore
          </h3>
          <ul className="space-y-3">
            {explore.map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-slate-300 hover:text-brand text-sm transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources links */}
        <div>
          <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 mb-5">
            Resources
          </h3>
          <ul className="space-y-3">
            {resources.map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-slate-300 hover:text-brand text-sm transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More links */}
        <div>
          <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 mb-5">
            More
          </h3>
          <ul className="space-y-3">
            {more.map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-slate-300 hover:text-brand text-sm transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 mb-5">
            Visit Us
          </h3>
          {/*
            The site-wide NAP. Google cross-checks the name, address and phone
            here against the Google Business Profile and the studio's other
            directory listings — they have to agree exactly, which is why every
            value comes from data/site.js rather than being typed inline.
          */}
          <address className="not-italic space-y-4 text-sm text-slate-400">
            <div className="text-slate-400 text-xs leading-relaxed">
              <p className="text-slate-200 font-semibold text-sm mb-1">{NAP.name}</p>
              <p>{NAP.street}</p>
              <p>{NAP.city}, {NAP.region} {NAP.postalCode}</p>
            </div>
            <p className="text-slate-500 text-xs">{HOURS.display}</p>
            <a
              href={`mailto:${NAP.email}`}
              className="block hover:text-brand transition-colors duration-200"
            >
              {NAP.email}
            </a>
            <a
              href={STUDIO.phoneHref}
              className="block hover:text-brand transition-colors duration-200"
            >
              {NAP.phone} <span className="text-slate-500">· call or text</span>
            </a>
            <a
              href={STUDIO.smsHref}
              className="block hover:text-brand transition-colors duration-200"
            >
              {NAP.textPhone} <span className="text-slate-500">· text only</span>
            </a>
          </address>
        </div>
      </div>

      {/*
        Service-area links, sitewide.
        These five pages need internal links from every page on the site, not
        just from the hub — internal links are how authority reaches them, and
        a footer link on every page is the cheapest way to give them that.
      */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">
            Dance Classes Near You
          </h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link
                  to={locationPath(l.slug)}
                  className="text-slate-300 hover:text-brand text-sm transition-colors duration-200"
                >
                  Dance Classes in {l.city}, {l.state}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 px-6 md:px-12 py-5 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Dance Academy West. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link to="/info/policies" className="hover:text-slate-300 transition-colors duration-200">Policies</Link>
          <span>·</span>
          <p>Celebrating 25 seasons of dance in West Georgia.</p>
        </div>
      </div>
    </footer>
  )
}
