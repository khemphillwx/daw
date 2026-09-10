import ballet from "../assets/DAW-classes-ballet.webp";
import hiphop from "../assets/DAW-classes-hiphop.webp";
import tap from "../assets/DAW-classes-tap.webp";
import jazz from "../assets/DAW-classes-jazz.webp";
import broadway from "../assets/DAW-classes-broadway.webp";
import acro from "../assets/DAW-classes-acrobatics.webp";
import creative from "../assets/DAW-classes-tinytots.webp";
import kiddance from "../assets/DAW-kid-dance.webp";
import acting from "../assets/DAW-classes-acting.webp";
import pom from "../assets/DAW-classes-dance-team-pom.webp";
import contemporary from "../assets/DAW-classes-contemporary-lyrical.webp";
import technique from "../assets/DAW-classes-ballet-technique.webp";
import twirl from "../assets/DAW-classes-twirl-groove.webp";

/*
 * Shared class data. Consumed by:
 *   - pages/classes/Descriptions.jsx   (genres)
 *   - pages/classes/ChoosingAClass.jsx (genres, filtered by minAge/maxAge)
 *   - pages/info/DressCode.jsx         (dressCodes)
 *
 * minAge/maxAge mirror the `ages` display string and drive the age filter on
 * the Choosing a Class page — keep them in sync when ages change.
 */

export const genres = [
  {
    name: "Tiny Tots / Creative Movement",
    ages: "Ages 2–4",
    minAge: 2,
    maxAge: 4,
    img: kiddance,
    desc: "Our youngest dancers explore movement, rhythm, and music through imaginative play. This class builds coordination, listening skills, and a love for dance in a nurturing, age-appropriate setting.",
    attire: "Comfortable clothing, ballet shoes or bare feet.",
  },
  {
    name: "Twirl & Tap",
    ages: "Preschool",
    minAge: 3,
    maxAge: 5,
    img: creative,
    desc: "A ballet and tap combo class designed for our preschool dancers. Students learn basic technique from both styles while building flexibility, coordination, and motor skills through fun, age-appropriate movement.",
    attire: "Comfortable clothing, ballet shoes and tap shoes.",
  },
  {
    name: "Twirl & Groove",
    ages: "Ages 3–5",
    minAge: 3,
    maxAge: 5,
    img: twirl,
    desc: "A ballet and jazz combo class that introduces our youngest movers to basic terminology and technique from both styles. Emphasis on rhythm, self-expression, and building a love for dance.",
    attire: "Comfortable clothing, convertible tights, ballet or jazz shoes.",
  },
  {
    name: "Ballet Performance",
    ages: "Ages 3–18",
    minAge: 3,
    maxAge: 18,
    img: ballet,
    desc: "The foundation of all dance. Students learn proper technique, posture, and grace while building strength and flexibility. Our ballet curriculum progresses from basic barre exercises to center floor combinations. Intermediate and advanced students must also enroll in Ballet Technique.",
    attire: "Black leotard, pink tights, ballet shoes, hair in bun.",
    note: "Co-requisite: Intermediate & advanced dancers must enroll in Ballet Technique.",
  },
  {
    name: "Ballet Technique",
    ages: "Ages 7–18",
    minAge: 7,
    maxAge: 18,
    img: technique,
    desc: "A non-performance class for dancers who want to accelerate their technical development. Focuses on precision, strength, and skill refinement at a faster pace. Required for all students enrolled in Ballet Performance (intermediate/advanced), Contemporary, or Lyrical.",
    attire: "Black leotard, pink tights, ballet shoes, hair in bun.",
    note: "Required for: Ballet Performance (intermediate/advanced), Contemporary & Lyrical students.",
  },
  {
    name: "Jazz",
    ages: "Ages 3–18",
    minAge: 3,
    maxAge: 18,
    img: jazz,
    desc: "Jazz combines technique with personality and flair. Classes focus on turns, leaps, kicks, and stylized combinations that build strength, flexibility, and showmanship. May fulfill the co-requisite for Acting students.",
    attire: "Form-fitting athletic wear, jazz shoes.",
  },
  {
    name: "Tap",
    ages: "Ages 3–18",
    minAge: 3,
    maxAge: 18,
    img: tap,
    desc: "Tap dance develops rhythm, coordination, and musicality. Students progress from basic shuffles and flaps to more complex rhythmic patterns, and learn to create music with their feet.",
    attire: "Comfortable clothing, tap shoes.",
  },
  {
    name: "Hip Hop",
    ages: "Ages 5–18",
    minAge: 5,
    maxAge: 18,
    img: hiphop,
    desc: "High-energy and expressive, our hip hop classes cover foundational grooves, isolations, breaking, and freestyle. Students learn to move confidently to current music in a fun, supportive environment.",
    attire: "Comfortable athletic wear, clean sneakers.",
  },
  {
    name: "Broadway Dance",
    ages: "Ages 5–18",
    minAge: 5,
    maxAge: 18,
    img: broadway,
    desc: "Where dance meets theater. Rooted in the diverse history of Broadway musicals, students explore acting, vocals, and movement to bring characters to life. Prior experience in ballet, tap, or jazz is beneficial.",
    attire: "Comfortable clothing, character shoes or jazz shoes.",
  },
  {
    name: "Contemporary & Lyrical",
    ages: "Ages 8–18",
    minAge: 8,
    maxAge: 18,
    img: contemporary,
    desc: "Interpretive dance styles that embrace innovation and blend techniques from multiple genres. Students learn to express emotion and tell stories through movement. Ballet class enrollment required.",
    attire: "Form-fitting athletic wear, bare feet or lyrical shoes.",
    note: "Co-requisite: Must be enrolled in a Ballet class.",
  },
  {
    name: "Acrobatics",
    ages: "Ages 4–14",
    minAge: 4,
    maxAge: 14,
    img: acro,
    desc: "Acro builds strength, balance, and flexibility through cartwheels, walkovers, aerials, and more. All skills are taught progressively and safely with proper spotting technique.",
    attire: "Form-fitting athletic wear, bare feet or acro shoes.",
  },
  {
    name: "Dance Team & Pom",
    ages: "Ages 8–18",
    minAge: 8,
    maxAge: 18,
    img: pom,
    desc: "Recognized as a GHSA sport, this class prepares students for middle and high school dance teams. Focus areas include turn sequences, leaps, pom choreography, and team technique — everything needed to make the team and shine.",
    attire: "Athletic wear, clean sneakers or pom shoes.",
  },
  {
    name: "Acting",
    ages: "Ages 6–18",
    minAge: 6,
    maxAge: 18,
    img: acting,
    desc: "For students pursuing speaking roles or backstage crew positions in the summer recital. Builds confidence, stage presence, and performance skills. Students must also be enrolled in Broadway Dance or Jazz.",
    attire: "Comfortable clothing, any dance shoes.",
    note: "Co-requisite: Must be enrolled in Broadway Dance or Jazz.",
  },
];

export const dressCodes = [
  {
    name: "Ballet",
    attire:
      "Black leotard, pink tights, ballet shoes, hair in bun. Everyday undergarments should not be visible — use athletic options instead.",
    shop: "https://www.shopnimbly.com/ClassListView?lid=a0e4R00000MQ27eQAD",
  },
  {
    name: "Hip Hop",
    attire:
      "Loose, comfortable athletic wear that allows full freedom of movement. Clean sneakers required. Personalization and self-expression encouraged.",
    shop: "https://www.shopnimbly.com/ClassListView?lid=a0e4R00000MQ2HvQAL",
  },
  {
    name: "Tap",
    attire: "Comfortable clothing, tap shoes.",
    shop: "https://www.shopnimbly.com/daw",
  },
  {
    name: "Jazz",
    attire: "Form-fitting athletic wear, jazz shoes.",
    shop: "https://www.shopnimbly.com/daw",
  },
  {
    name: "Broadway",
    attire: "Comfortable clothing, character shoes or jazz shoes.",
    shop: "https://www.shopnimbly.com/daw",
  },
  {
    name: "Acrobatics",
    attire:
      "Leotard or fitted dance set — no tights. Tights create slipping hazards on the mat. Bare feet or acro shoes.",
    shop: "https://www.shopnimbly.com/ClassListView?lid=a0e4R00000MQ2K3QAL",
  },
  {
    name: "Tiny Tots / Creative Movement",
    attire:
      "Comfortable, easy-to-move-in clothing. Convertible tights work great — worn over the foot or pulled up as needed. Ballet shoes or bare feet.",
    shop: "https://www.shopnimbly.com/daw",
  },
  {
    name: "Twirl & Tap",
    attire:
      "Comfortable clothing, convertible tights, ballet shoes and tap shoes.",
    shop: "https://www.shopnimbly.com/daw",
  },
  {
    name: "Twirl & Groove",
    attire: "Comfortable clothing, convertible tights, ballet or jazz shoes.",
    shop: "https://www.shopnimbly.com/daw",
  },
  {
    name: "Ballet Technique",
    attire:
      "Black leotard, pink tights, ballet shoes, hair in bun. Same requirements as Ballet Performance.",
    shop: "https://www.shopnimbly.com/ClassListView?lid=a0e4R00000MQ27eQAD",
  },
  {
    name: "Contemporary & Lyrical",
    attire: "Form-fitting athletic wear, bare feet or lyrical shoes.",
    shop: "https://www.shopnimbly.com/daw",
  },
  {
    name: "Dance Team & Pom",
    attire: "Athletic wear, clean sneakers or pom shoes.",
    shop: "https://www.shopnimbly.com/daw",
  },
  {
    name: "Acting",
    attire: "Comfortable clothing, any dance shoes.",
    shop: "https://www.shopnimbly.com/daw",
  },
];

/*
 * Studio contact details, referenced from several pages.
 * Sourced from danceacademywest.com — the studio runs two numbers: a main line
 * that takes calls and texts, and a dedicated text-only line.
 */
export const STUDIO = {
  phone: "(770) 489-8580",
  phoneHref: "tel:+17704898580",
  textPhone: "(762) 572-5678",
  smsHref: "sms:+17625725678",
  email: "info@danceacademywest.com",
  address: "1004 Bankhead Highway, Suite C-37, Carrollton, GA 30117",
  mapQuery:
    "https://maps.google.com/maps?q=1004+Bankhead+Highway+Suite+C-37+Carrollton+GA+30117&output=embed",
  // Parent portal / login for current students.
  portal: "https://app.gostudiopro.com/online/index.php?account_id=28352",
  // Dedicated free-trial booking flow.
  freeTrial:
    "https://app.gostudiopro.com/landing.php?id=aa543875-17f8-4f95-a56b-fa647e7c6603",
  /*
   * Live Studio Pro class list — the "choose a class" widget. Renders its own
   * search box and age filter, and links each row to registration, waitlist,
   * or a per-class trial. Embedded rather than fetched: this is a static site
   * with no backend to proxy the request past CORS.
   *
   * This is the exact URL the current danceacademywest.com site embeds. It
   * 301s to app.gostudiopro.com/apps/ — kept as the vendor's published address
   * so a hosting change on their end stays transparent to us. The response
   * sets no X-Frame-Options or CSP, so framing is permitted.
   *
   * The shell loads first and the class rows arrive by AJAX, so the frame is
   * briefly empty on load. That is the widget's own behaviour, not a bug.
   */
  classList:
    "https://dancestudio-pro.com/apps/api_classes_resp.php?id=zaqlxajd29jd26492e9b21845109jasdklj21dx6492e9b218455",
};
