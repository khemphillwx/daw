/*
 * Service-area landing pages.
 *
 * These are not doorway pages, and the shape of this file is what keeps them
 * from becoming doorway pages. Google's doorway guidance targets sets of
 * near-identical city pages that exist only to funnel traffic to one place, so
 * every entry below carries content that is only true of that city: its
 * counties, its school district, the actual road you drive to reach the studio,
 * and questions that only a family in that town would ask. The shared parts —
 * class list, free trial, program structure — are the parts a visitor genuinely
 * needs on whichever page they land on.
 *
 * Every factual claim was verified on 2026-09-10 against the source named
 * beside it. If you edit a fact, re-verify it; do not carry one forward on
 * trust. Population figures are 2020 decennial census unless marked otherwise.
 *
 * Drive distances and times are city-centre to city-centre, from routing data
 * (travelmath / distance-cities / rome2rio agreeing on the same route). They
 * are described in copy as approximate, because they are.
 */

/*
 * metaTitle is suffixed with " | Dance Academy West" (21 chars) at render
 * time, so keep it at or under ~44 characters: Google truncates a SERP title
 * around 60. metaDescription should stay under ~155 for the same reason.
 */

/** Ordered as they appear in the footer and on the service-area hub. */
export const locations = [
  /* ── Carrollton ───────────────────────────────────────────────────── */
  {
    slug: "carrollton-ga",
    city: "Carrollton",
    state: "GA",
    stateName: "Georgia",
    /** Home city — no drive block, and the hub labels it differently. */
    isHome: true,
    counties: ["Carroll County"],
    /* Carrollton City Schools; Carrollton High School, 201 Trojan Drive,
     * enrollment 1,825 (2023–24), mascot the Trojans. Source: Wikipedia,
     * "Carrollton High School (Carrollton, Georgia)" and "Carrollton City
     * School District". Carroll County School District separately serves
     * schools outside the city limits (Central, Mount Zion, Bowdon, Villa
     * Rica and others). */
    schools: {
      district: "Carrollton City Schools",
      note:
        "Families inside the city limits are zoned to Carrollton City Schools, " +
        "while addresses outside them fall under the Carroll County School " +
        "District — we have dancers from both.",
    },

    metaTitle: "Dance Studio in Carrollton, GA — Ages 2–18",
    metaDescription:
      "Dance Academy West is a Carrollton dance studio on Bankhead Highway. Ballet, tap, jazz, hip hop, acro and competition classes, ages 2–18. Free trial class.",
    h1: "Dance Classes in Carrollton, GA",
    heroSub:
      "Our home studio — 8,000 square feet on Bankhead Highway, four dance rooms, and 25 seasons of Carrollton families through the door.",

    intro: [
      "Dance Academy West has been part of Carrollton since 2001. The studio sits on Bankhead Highway on the north side of town, in the shopping center anchored by Food Depot and Planet Fitness — an easy stop on the way home from school, with parking directly outside the door.",
      "Inside are four custom dance rooms, each with professional sprung flooring: a proper subfloor underneath a smooth marley surface. That construction is not a detail we mention for the sake of it. Dancing on concrete under vinyl is how young dancers pick up shin and knee injuries, and a sprung floor is the single biggest safety difference between studios.",
      "We teach ballet, tap, jazz, hip hop, Broadway, acrobatics, contemporary and lyrical, dance team and pom, and acting, for students from age two through eighteen. Whether your child has never taken a class or is training seriously for competition, there is a place for them here — and you can try it before you commit to anything.",
    ],

    /* Local hooks: things only a Carrollton reader cares about. */
    highlights: [
      {
        title: "Minutes from downtown Carrollton",
        body: "North of the square on Bankhead Highway, with a full parking lot out front. No parallel parking, no meter, no circling the block.",
      },
      {
        title: "Built around the school day",
        body: "Classes run in the late afternoon and evening, Monday through Friday, so they land after the last bell for both Carrollton City and Carroll County schedules.",
      },
      {
        title: "Two decades of local families",
        body: "Founded in 2001 and now in our 25th season. A lot of our current dancers are the younger siblings — and in a few cases the children — of dancers we taught years ago.",
      },
    ],

    faqs: [
      {
        q: "Where exactly is Dance Academy West in Carrollton?",
        a: "We are at 1004 Bankhead Highway, Suite C-37, Carrollton, GA 30117. The suite is in the shopping center anchored by Food Depot and Planet Fitness. Park in the main lot and look for our sign — you do not need to go through another business to reach us.",
      },
      {
        q: "What time do classes run?",
        a: "The studio is open Monday through Friday from 4:00 to 8:30 PM. Classes are scheduled through that window so dancers can come straight from school. Exact class times vary by genre and age and are listed on our class schedule.",
      },
      {
        q: "Do you have classes for two-year-olds?",
        a: "Yes. Our Tiny Tots / Creative Movement class is built for ages 2 to 4 and focuses on movement, rhythm and listening through imaginative play rather than formal technique. It is usually a child's first structured class of any kind, and it is paced accordingly.",
      },
      {
        q: "Can we watch a class before enrolling?",
        a: "Better than watching — your dancer can take one. Our free trial places them in a real class alongside current students, not a separate taster session. There is no cost and no obligation to enroll afterward.",
      },
    ],
  },

  /* ── Bremen ───────────────────────────────────────────────────────── */
  {
    slug: "bremen-ga",
    city: "Bremen",
    state: "GA",
    stateName: "Georgia",
    /* Bremen spans Haralson and Carroll counties; population 7,185 (2020
     * census). Source: Wikipedia, "Bremen, Georgia". */
    counties: ["Haralson County", "Carroll County"],
    population: "7,185 (2020 census)",
    /* Bremen operates its own city school district — three elementary
     * schools, one middle school, one high school, 2,000+ students; Bremen
     * High School enrollment 744 (2024–25). Haralson County Schools serves
     * the county outside Bremen's city limits. Sources: Wikipedia, "Bremen
     * City School District"; NCES / Niche for Bremen High School. */
    schools: {
      district: "Bremen City Schools",
      note:
        "Bremen runs its own city school system — three elementary schools, a " +
        "middle school and Bremen High School — separate from Haralson County " +
        "Schools, which covers the rest of the county.",
    },
    drive: {
      miles: 12,
      minutes: "about 15–20",
      route: "US-27 South",
      /* 12 mi via US-27 S / GA-1 S, ~14–18 min. Sources: travelmath,
       * distance-cities, drivedistance — all in agreement. */
      directions:
        "Take US-27 south out of Bremen and stay on it into Carrollton. Bankhead Highway is on the north side of town — we are on the right, in the shopping center anchored by Food Depot and Planet Fitness.",
    },

    metaTitle: "Dance Classes for Bremen, GA Families",
    metaDescription:
      "Bremen families dance at Dance Academy West, about 15 minutes south on US-27 in Carrollton. Ballet, tap, jazz, hip hop and acro, ages 2–18. Free trial class.",
    h1: "Dance Classes for Bremen, GA Families",
    heroSub:
      "Twelve miles straight down US-27. A short drive for a studio with four sprung-floor rooms and a class for every age from two up.",

    intro: [
      "Bremen sits about twelve miles north of us on US-27 — close enough that the drive is genuinely part of the after-school routine for a good number of our families, not an expedition. There are no turns to remember. You get on 27 south and you get off in Carrollton.",
      "What that drive buys you is an 8,000 square foot studio with four separate dance rooms, all built on professional sprung flooring, and a faculty deep enough to run ballet, tap, jazz, hip hop, Broadway, acrobatics, contemporary, dance team and pom, and acting — all in the same building, on the same evening. For families with two dancers in different genres, that matters more than the mileage.",
      "Because Bremen straddles the Haralson and Carroll county line and runs its own city school district, our Bremen dancers arrive on a few different bell schedules. Our classes run from 4:00 to 8:30 PM Monday through Friday, which leaves room to make the drive after school lets out.",
    ],

    highlights: [
      {
        title: "A straight shot down US-27",
        body: "No back roads and no county-road detours — roughly a 15 to 20 minute drive from central Bremen, depending on traffic through town.",
      },
      {
        title: "Everything under one roof",
        body: "Four rooms running simultaneously means siblings in different genres can often dance in the same time slot, so you make one trip instead of two.",
      },
      {
        title: "Built for school dance team tryouts",
        body: "Competitive dance is a fully sanctioned GHSA sport, judged in jazz, high kick, hip hop and pom. Our Dance Team & Pom class trains exactly those skills for middle and high school tryouts.",
      },
    ],

    faqs: [
      {
        q: "How long is the drive from Bremen to Dance Academy West?",
        a: "About 15 to 20 minutes. It is roughly 12 miles straight down US-27 south from Bremen into Carrollton, with no turns until you reach Bankhead Highway on the north side of town.",
      },
      {
        q: "Do you have dancers from Bremen City Schools?",
        a: "Yes — Bremen is one of the towns we draw from most consistently, along with Villa Rica, Bowdon and Tallapoosa. Because Bremen runs its own city school district separate from Haralson County Schools, our Bremen families come in on a slightly different school calendar, and our 4:00 to 8:30 PM class window accommodates both.",
      },
      {
        q: "Is it worth driving from Bremen when there are closer options?",
        a: "That is a fair question and the honest answer is: come see. Our free trial exists precisely so you can judge the studio, the teaching and the drive for yourself before spending anything. Take one class, then decide.",
      },
      {
        q: "Can my dancer take more than one class in an evening?",
        a: "Yes, and most of our Bremen families do — it makes the drive go further. With four rooms running at once we can usually stack two or three classes back to back so you make a single trip.",
      },
    ],
  },

  /* ── Villa Rica ───────────────────────────────────────────────────── */
  {
    slug: "villa-rica-ga",
    city: "Villa Rica",
    state: "GA",
    stateName: "Georgia",
    /* Villa Rica spans Carroll and Douglas counties; population 16,970
     * (2020 census), estimated ~18,551 more recently. Source: Wikipedia,
     * "Villa Rica, Georgia"; georgia-demographics for the estimate. */
    counties: ["Carroll County", "Douglas County"],
    population: "16,970 (2020 census), and growing",
    /* Villa Rica High School, 600 Rocky Branch Road, Carroll County School
     * District, enrollment 1,795 (2023–24), mascot the Wildcats. Source:
     * Wikipedia, "Villa Rica High School"; GreatSchools. */
    schools: {
      district: "Carroll County School District",
      note:
        "Villa Rica High School on Rocky Branch Road is part of the Carroll " +
        "County School District and enrolls close to 1,800 students, making it " +
        "one of the largest schools in the county.",
    },
    drive: {
      miles: 15,
      minutes: "about 20–25",
      route: "GA-61 South",
      /* 15 mi via GA-61, ~21 min. Sources: distance-cities, travelmath,
       * rome2rio. */
      directions:
        "Head south out of Villa Rica on GA-61 and follow it into Carrollton. Pick up Bankhead Highway on the north side of town; we are in the shopping center anchored by Food Depot and Planet Fitness.",
    },

    metaTitle: "Dance Classes for Villa Rica, GA Families",
    metaDescription:
      "Villa Rica families dance at Dance Academy West in Carrollton, about 20 minutes down GA-61. Ballet, tap, jazz, hip hop and acro, ages 2–18. Free trial class.",
    h1: "Dance Classes for Villa Rica, GA Families",
    heroSub:
      "Twenty minutes down GA-61, in the same county. Four sprung-floor studios, nine genres, and a free trial before you commit to anything.",

    intro: [
      "Villa Rica is the largest of the towns we serve outside Carrollton, and it is also the fastest growing — a little under 17,000 people at the 2020 census and noticeably more now. Growth like that tends to outrun the number of studio spots available locally, which is why a fair number of Villa Rica families end up looking west.",
      "We are about fifteen miles away, straight down GA-61. Villa Rica sits across the Carroll and Douglas county line, but the Carroll County side is zoned to the same school district as much of our existing student base, so our schedule already lines up with the bell schedule most Villa Rica dancers are on.",
      "The studio runs four dance rooms at once across 8,000 square feet, all on professional sprung floors with a proper subfloor beneath the marley. That means we can put a nine-year-old in ballet, her older sister in hip hop and their cousin in acro in the same hour — one drive, three dancers.",
    ],

    highlights: [
      {
        title: "Same county, same school district",
        body: "Villa Rica High School and much of the city fall under the Carroll County School District, so our calendar and class times already fit the school year our Villa Rica dancers are living.",
      },
      {
        title: "One drive, several classes",
        body: "With four rooms running simultaneously, siblings in different genres can usually dance in overlapping slots rather than consecutive trips.",
      },
      {
        title: "Serious training when they want it",
        body: "Our competition team and Ballet Technique track exist for dancers who want to push. Nobody is pushed into them — but they are there when a dancer is ready.",
      },
    ],

    faqs: [
      {
        q: "How far is Dance Academy West from Villa Rica?",
        a: "About 15 miles, or roughly a 20 to 25 minute drive down GA-61 south into Carrollton. We are on Bankhead Highway on the north side of town.",
      },
      {
        q: "My daughter wants to try out for her school's dance team. Can you help?",
        a: "That is exactly what our Dance Team & Pom class is for. Competitive dance is a sanctioned GHSA sport with a state championship judged in jazz, high kick, hip hop and pom, so the skills schools look for at tryouts are specific and trainable — turn sequences, leaps and pom technique. We teach them directly.",
      },
      {
        q: "We are new to the area. Where do we start?",
        a: "Start with the free trial. Tell us your dancer's age and what they are curious about, and we will place them in a real class with current students so you can both see how it feels. There is no cost and nothing to cancel afterward.",
      },
      {
        q: "Do you offer classes for boys?",
        a: "Yes. Hip hop, tap, acrobatics and Broadway all draw boys, and every class we offer is open to any student in the right age range. Our faculty includes male instructors.",
      },
    ],
  },

  /* ── Bowdon ───────────────────────────────────────────────────────── */
  {
    slug: "bowdon-ga",
    city: "Bowdon",
    state: "GA",
    stateName: "Georgia",
    /* Bowdon, Carroll County; population 2,161 (2020 census). Source:
     * Wikipedia, "Bowdon, Georgia". */
    counties: ["Carroll County"],
    population: "2,161 (2020 census)",
    /* Bowdon High School, Carroll County School District, enrollment 428
     * (2024–25). Sources: Wikipedia, "Bowdon High School"; NCES; US News. */
    schools: {
      district: "Carroll County School District",
      note:
        "Bowdon High School is part of the Carroll County School District and " +
        "enrolls a little over 400 students — a small school where a dancer " +
        "with real training tends to stand out quickly.",
    },
    drive: {
      miles: 12,
      minutes: "about 20",
      route: "GA-166 East",
      /* 12 mi via GA-166, ~21 min. Sources: distance-cities, travelmath. */
      directions:
        "Take GA-166 east out of Bowdon into Carrollton, then head north to Bankhead Highway. We are in the shopping center anchored by Food Depot and Planet Fitness.",
    },

    metaTitle: "Dance Classes for Bowdon, GA Families",
    metaDescription:
      "Bowdon families dance at Dance Academy West in Carrollton, about 20 minutes east on GA-166. Ballet, tap, jazz, hip hop and acro, ages 2–18. Free trial class.",
    h1: "Dance Classes for Bowdon, GA Families",
    heroSub:
      "Twelve miles east on GA-166. A small-town drive to a studio with four rooms, nine genres and room for your dancer to go as far as they want.",

    intro: [
      "Bowdon is a small town — a little over two thousand people — and small towns tend to be short on the kind of studio that can offer nine genres, four simultaneous classes and a competition track under one roof. Twelve miles east on GA-166 gets you one.",
      "That size cuts the other way too, and in your dancer's favour. Bowdon High School enrolls a little over four hundred students. A dancer who has spent a few years in real technique classes — proper ballet, proper turns, proper conditioning — is noticeable in a school that size, whether the goal is a dance team spot, a school production, or simply being the kid who can actually do the thing.",
      "We teach from age two upward: Tiny Tots for the very youngest, then ballet, tap, jazz, hip hop, Broadway, acrobatics, contemporary and lyrical, dance team and pom, and acting as they grow into them. Classes run 4:00 to 8:30 PM Monday through Friday, which leaves plenty of room to make the drive after school.",
    ],

    highlights: [
      {
        title: "Twenty minutes on one road",
        body: "GA-166 runs east out of Bowdon directly into Carrollton — roughly 12 miles and about 20 minutes, without threading county roads.",
      },
      {
        title: "Depth a small town cannot usually support",
        body: "Nine genres, a dedicated Ballet Technique track, an acro programme with proper spotting, and a competition team — all in one building.",
      },
      {
        title: "Still in Carroll County",
        body: "Bowdon is Carroll County, same as us, so our calendar tracks the Carroll County School District year your dancer is already on.",
      },
    ],

    faqs: [
      {
        q: "How far is the studio from Bowdon?",
        a: "About 12 miles and roughly 20 minutes, straight east on GA-166 into Carrollton. We are on Bankhead Highway on the north side of town.",
      },
      {
        q: "My child has never danced before. Is that a problem?",
        a: "No — it is the norm for us. We place beginners by age, not by experience, and every genre has an entry level. The free trial is the low-risk way to find out whether they like it before you buy shoes or pay anything.",
      },
      {
        q: "Is there anything for kids who want to compete?",
        a: "Yes. We run a competition team, and separately a Ballet Technique class for dancers who want to accelerate their technical development faster than a performance class alone allows. Neither is a requirement — plenty of our dancers never compete and love it here.",
      },
      {
        q: "What does the first class actually cost?",
        a: "Nothing. The trial class is free and carries no obligation. If you enroll afterward, our Progressive Program charges its registration fee once — not annually.",
      },
    ],
  },

  /* ── Tallapoosa ───────────────────────────────────────────────────── */
  {
    slug: "tallapoosa-ga",
    city: "Tallapoosa",
    state: "GA",
    stateName: "Georgia",
    /* Tallapoosa, Haralson County; population 3,227 (2020 census). Source:
     * Wikipedia, "Tallapoosa, Georgia"; Census Reporter. */
    counties: ["Haralson County"],
    population: "3,227 (2020 census)",
    /* Haralson County High School is located in Tallapoosa; enrollment 937,
     * grades 9–12, Haralson County School District. Sources: Wikipedia,
     * "Haralson County High School"; NCES; SchoolDigger. */
    schools: {
      district: "Haralson County School District",
      note:
        "Haralson County High School is in Tallapoosa itself and serves the " +
        "whole county outside Bremen, with around 930 students in grades 9–12.",
    },
    drive: {
      miles: 20,
      minutes: "about 25–30",
      route: "US-27 South",
      /* 20 mi via US-27 S / GA-1 S, ~24 min. Sources: travelmath,
       * distance-cities, drivedistance. */
      directions:
        "Pick up US-27 south and stay on it through Bremen and into Carrollton — the same road the whole way. Bankhead Highway is on the north side of town; we are in the shopping center anchored by Food Depot and Planet Fitness.",
    },

    metaTitle: "Dance Classes for Tallapoosa, GA Families",
    metaDescription:
      "Tallapoosa families dance at Dance Academy West in Carrollton, a straight run down US-27. Ballet, tap, jazz, hip hop and acro, ages 2–18. Free trial class.",
    h1: "Dance Classes for Tallapoosa, GA Families",
    heroSub:
      "A straight run down US-27 through Bremen. The furthest of our regular towns — and worth the drive, which we would rather you decide for yourself.",

    intro: [
      "Tallapoosa is the longest drive of the towns we regularly serve: about twenty miles, and somewhere in the twenty-five to thirty minute range depending on how Bremen is moving. It is also the simplest drive. US-27 south, the whole way, no turns to remember.",
      "We will not pretend the distance is nothing. What we will say is that families make it every week, and the reason is what is waiting at the other end — 8,000 square feet, four dance rooms running at once on professional sprung floors, and a faculty broad enough to teach ballet, tap, jazz, hip hop, Broadway, acrobatics, contemporary and lyrical, dance team and pom, and acting without sending anyone elsewhere.",
      "For a Tallapoosa family, the practical answer to the drive is stacking. Take two or three classes in one evening rather than one class on three evenings. With four rooms going simultaneously, we can usually build a schedule that turns a weekly commitment into a single trip.",
    ],

    highlights: [
      {
        title: "One road, start to finish",
        body: "US-27 runs south out of Tallapoosa through Bremen and into Carrollton. Roughly 20 miles, about 25 to 30 minutes.",
      },
      {
        title: "Stack classes, cut trips",
        body: "Four rooms running at once means two or three classes can often be scheduled back to back on one evening — the way most of our furthest families do it.",
      },
      {
        title: "GHSA-relevant training close to home",
        body: "Haralson County High School is in Tallapoosa. Competitive dance is a sanctioned GHSA sport judged in jazz, high kick, hip hop and pom, and our Dance Team & Pom class trains those categories directly.",
      },
    ],

    faqs: [
      {
        q: "How long does it take to get from Tallapoosa to the studio?",
        a: "About 25 to 30 minutes. It is roughly 20 miles straight down US-27 south, through Bremen and into Carrollton, with no turns until you reach Bankhead Highway.",
      },
      {
        q: "That is a long way. How do other families make it work?",
        a: "By stacking classes. Rather than driving in three times a week for one class each, most of our furthest families schedule two or three classes back to back on a single evening. Because four rooms run simultaneously, we can usually make that work across different genres and even different siblings.",
      },
      {
        q: "Do you ever cancel for weather?",
        a: "When conditions make the drive unsafe we close, and we announce it on our Facebook page and by text before the first class of the evening. We would rather you not attempt US-27 in ice to make a jazz class.",
      },
      {
        q: "Is a trial class really free?",
        a: "Yes — free, and with no obligation. Given the drive from Tallapoosa, we would rather you spend one evening finding out whether this is right for your family than commit first and wonder later.",
      },
    ],
  },
];

/** Lookup by URL slug. Returns undefined for an unknown city. */
export const locationBySlug = (slug) =>
  locations.find((l) => l.slug === slug);

/** Route path for a location page. */
export const locationPath = (slug) => `/dance-classes/${slug}`;
