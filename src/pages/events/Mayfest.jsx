import EventDetailShell from "./EventDetailShell";
import Seo from "../../components/seo/Seo";
import { webPageSchema, breadcrumbSchema } from "../../lib/seo";

const PATH = "/events/mayfest";
const TITLE = "Mayfest Performance | Dance Academy West, Carrollton GA";
const DESC =
  "Dance Academy West dancers perform at Mayfest each spring, one of the studio's regular community appearances around Carrollton and west Georgia.";

export default function Mayfest() {
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
            { name: "Mayfest", path: PATH },
          ]),
        ]}
      />
      <EventDetailShell
        heading="Mayfest"
        subheading="A spring celebration and one of our favourite community performances of the year."
        blurb="DAW dancers perform at Mayfest each spring, bringing the joy of dance to the wider Carrollton area."
        orb1Color="bg-brand"
        orb2Color="bg-aurora-purple"
      />
    </>
  );
}
