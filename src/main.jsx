import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')

const tree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

/*
 * The build prerenders every route to static HTML (scripts/prerender.mjs), so
 * in production #root already holds markup and we hydrate it rather than
 * throwing it away and re-rendering. In `vite dev` the container is empty and
 * we mount normally — same code path either way, decided by what is actually
 * in the DOM rather than by an env flag that can disagree with reality.
 */
if (container.hasChildNodes()) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}
