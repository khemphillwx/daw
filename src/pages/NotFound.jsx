import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";
import { STUDIO } from "../data/classes";
import { NAP } from "../data/site";

/*
 * A real 404 page, replacing the catch-all redirect to "/".
 *
 * Redirecting every unknown URL to the homepage is the worse option in two
 * ways. For visitors, a mistyped or stale link silently dumps them somewhere
 * they did not ask for. For Search Console, every dead URL reports as a soft
 * 404 against the homepage, which over time buries the real coverage problems
 * in noise.
 *
 * The page is noindex, follow: keep it out of the index, but let crawlers use
 * the links on it to find their way back into the site.
 *
 * Note this still serves an HTTP 200 — that is inherent to a static SPA host
 * rewriting unknown paths to index.html. The noindex directive is what
 * actually keeps these out of the index, so it is the part that matters.
 */
export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Dance Academy West"
        description="That page doesn't exist. Find classes, schedules and enrollment for Dance Academy West in Carrollton, GA."
        path="/404"
        noindex
      />

      <section className="relative min-h-[70vh] flex items-center px-6 md:px-12 overflow-hidden">
        <div className="aurora-orb w-[500px] h-[500px] bg-brand opacity-20 -top-32 -right-24" />
        <div className="aurora-orb w-[380px] h-[380px] bg-aurora-purple opacity-15 -bottom-20 -left-16" />

        <div className="relative max-w-2xl mx-auto text-center py-24">
          <p className="section-label mb-4">Error 404</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-slate-900 leading-tight mb-5">
            We can't find that page
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            The link may be out of date, or the page may have moved. Here is
            where most people are heading:
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {[
              ["/classes/schedule", "Class Schedule"],
              ["/dance-classes", "Areas We Serve"],
              ["/info/tuition", "Tuition & Fees"],
              ["/faq", "FAQ"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <Link
                key={to}
                to={to}
                className="glass-card px-5 py-2.5 rounded-full text-sm font-semibold text-slate-700 hover:text-brand-dark hover:border-brand/30 transition-all duration-200 border border-slate-200"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={STUDIO.freeTrial}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule a Free Trial Class
            </a>
            <a href={STUDIO.phoneHref} className="btn-secondary">
              Call {NAP.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
