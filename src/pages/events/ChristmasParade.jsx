import EventDetailShell from "./EventDetailShell";
import Seo from "../../components/seo/Seo";
import { webPageSchema, breadcrumbSchema } from "../../lib/seo";

const PATH = "/events/christmas-parade";
const TITLE = "Carrollton Christmas Parade | Dance Academy West";
const DESC =
  "Dance Academy West dancers perform in the annual Carrollton Christmas parade — one of the studio's longest-running traditions. Dates announced each autumn.";

export default function ChristmasParade() {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESC}
        path={PATH}
        schema={[
          webPageSchema({ name: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Events", path: "/events" },
            { name: "Christmas Parade", path: PATH },
          ]),
        ]}
      />
      <EventDetailShell
        heading="Christmas Parade"
        subheading="DAW dancers take to the streets of Carrollton for the annual Christmas parade."
        blurb="One of our favourite traditions — our dancers perform for the whole community as the parade rolls through town."
        orb1Color="bg-aurora-pink"
        orb2Color="bg-brand"
      />
    </>
  );
}
