import { Routes, Route, Navigate } from 'react-router-dom'
import Layout          from './components/layout/Layout'
import Home            from './pages/Home'
import Schedule        from './pages/classes/Schedule'
import Descriptions    from './pages/classes/Descriptions'
import ChoosingAClass  from './pages/classes/ChoosingAClass'
import Tuition         from './pages/info/Tuition'
import Calendar        from './pages/info/Calendar'
import DressCode       from './pages/info/DressCode'
import Policies        from './pages/Policies'
import Programs        from './pages/Programs'
import Competitive     from './pages/Competitive'
import About           from './pages/About'
import Events           from './pages/events/EventsIndex'
import ChristmasParade  from './pages/events/ChristmasParade'
import Mayfest          from './pages/events/Mayfest'
import SummerProduction from './pages/events/SummerProduction'
import Gallery         from './pages/Gallery'
import Enroll          from './pages/Enroll'
import Contact         from './pages/Contact'
import FAQ             from './pages/FAQ'
import LocationsIndex  from './pages/locations/LocationsIndex'
import LocationPage    from './pages/locations/LocationPage'
import NotFound        from './pages/NotFound'

/*
 * Routes only — the Router itself lives in the entry points, because the
 * browser needs BrowserRouter and the prerender needs StaticRouter.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* Classes */}
        <Route path="classes">
          <Route index               element={<Navigate to="/classes/schedule" replace />} />
          <Route path="schedule"     element={<Schedule />}       />
          <Route path="descriptions" element={<Descriptions />}   />
          <Route path="choosing"     element={<ChoosingAClass />} />
        </Route>

        {/* Important Info */}
        <Route path="info">
          <Route index             element={<Navigate to="/info/tuition" replace />} />
          <Route path="tuition"    element={<Tuition />}   />
          <Route path="calendar"   element={<Calendar />}  />
          <Route path="dress-code" element={<DressCode />} />
          <Route path="policies"   element={<Policies />}  />
        </Route>

        <Route path="about"            element={<About />}       />
        <Route path="faq"              element={<FAQ />}         />
        <Route path="competition-team" element={<Competitive />} />

        {/* Events */}
        <Route path="events">
          <Route index                      element={<Events />}           />
          <Route path="christmas-parade"    element={<ChristmasParade />}  />
          <Route path="mayfest"             element={<Mayfest />}          />
          <Route path="summer-production"   element={<SummerProduction />} />
        </Route>

        {/*
          Service-area pages. The keyword sits in the URL segment itself
          ("/dance-classes/bremen-ga") rather than in a generic /locations/
          path, because the slug is one of the few parts of a URL that still
          carries weight and it is what shows in the SERP breadcrumb.
        */}
        <Route path="dance-classes">
          <Route index         element={<LocationsIndex />} />
          <Route path=":slug"  element={<LocationPage />}   />
        </Route>

        {/* Reachable from the footer and in-page CTAs, not the top nav */}
        <Route path="programs" element={<Programs />} />
        <Route path="gallery"  element={<Gallery />}  />
        <Route path="enroll"   element={<Enroll />}   />
        <Route path="contact"  element={<Contact />}  />

        {/* Legacy paths */}
        <Route path="policies"    element={<Navigate to="/info/policies"   replace />} />
        <Route path="competitive" element={<Navigate to="/competition-team" replace />} />

        {/*
          A real 404 rather than a redirect home — see NotFound for why the
          old catch-all Navigate was costing us clean Search Console coverage.
        */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
