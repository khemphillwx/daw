import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  /*
   * appType is left at its default 'spa' on purpose. The dev server has no
   * prerendered files to serve, so it needs the SPA fallback to make deep
   * links work during development.
   *
   * `vite preview` is a different matter: that same fallback makes it serve
   * index.html for every path, so the homepage's markup gets served at /about
   * and then fails to hydrate. Preview therefore does NOT use vite — see
   * `npm run preview`, which serves dist through scripts/serve-dist.mjs and
   * resolves paths the way Vercel and Netlify actually do.
   */
})
