import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'
import { resetSsrHead, getSsrHead, headToHtml } from './lib/seo'

/*
 * Build-time entry point. Not a server — nothing runs this at request time.
 * scripts/prerender.mjs imports it once per route and writes the output to a
 * static .html file, so crawlers and social scrapers get real markup instead
 * of an empty <div id="root">.
 *
 * Returns the body HTML plus the head tags that the page's <Seo> declared
 * during that render. The head has to come back out of the render rather than
 * being computed alongside it, because only the component tree knows which
 * page matched the URL.
 */
export function render(url) {
  resetSsrHead()

  const body = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )

  const head = getSsrHead()
  return { body, head, headHtml: head ? headToHtml(head) : '' }
}
