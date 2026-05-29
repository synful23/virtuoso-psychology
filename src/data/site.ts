/*
  Single source of truth for site copy & config.
  Every string Cara hasn't finalised is flagged `// PLACEHOLDER`.
  Components read from here, so swapping in real copy later touches only this file.
  Phase 2 can promote `services`/`about` into Astro content collections without
  changing component props.
*/

export const site = {
  name: "Virtuoso Psychology",
  url: "https://www.virtuosopsychology.com",
  // PLACEHOLDER — confirm email TLD with Cara (.com vs .co.uk).
  email: "cara@virtuosopsychology.com",
  founderName: "Cara Lea Moseley",
  founderRole: "Sport & Performance Psychologist",
  tagline: "Empower the team. Elevate the game.",
  description:
    "Sports psychology that empowers teams, athletes and the people who lead them to perform — together.",
  social: {
    instagram: "https://www.instagram.com/virtuoso.psychology",
    linkedin: "https://www.linkedin.com/in/cara-lea-moseley-267b744a/",
  },
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/*
  Logo experiment (temporary). The text wordmark is fixed; the image MARK
  beside it is swappable via the floating LogoSwitcher so Cara can compare
  options live. Each mark has a normal + white-for-dark variant. `id` is the
  value stored in localStorage. To retire the experiment: drop <LogoSwitcher/>
  from BaseLayout and set the lockup's default mark.
*/
export type LogoMark = { id: string; label: string; normal: string; white: string };

export const logoExperiment = {
  // The wordmark — stays constant across all options.
  text: { normal: "/images/logos/text-logo.png", white: "/images/logos/text-logo-white.png" },
  defaultMark: "logo3",
  marks: [
    { id: "logo3", label: "VP monogram", normal: "/images/logos/logo3.png", white: "/images/logos/logo3-white.png" },
    { id: "logo1", label: "Head + V", normal: "/images/logos/logo1.png", white: "/images/logos/logo1-white.png" },
    { id: "logo4", label: "Overlapping VP", normal: "/images/logos/logo4.png", white: "/images/logos/logo4-white.png" },
    { id: "logo5", label: "V + profile", normal: "/images/logos/logo5.png", white: "/images/logos/logo5-white.png" },
    { id: "logo6", label: "V + laurel", normal: "/images/logos/logo6.png", white: "/images/logos/logo6-white.png" },
  ] as LogoMark[],
};

export type Service = {
  id: string;
  number: string;
  title: string;
  /** Short line used on the home cards. */
  summary: string;
  tag?: string;
  /** Long-form detail used on the Services page. */
  who: string;
  includes: string[];
  outcome: string;
};

export const services: Service[] = [
  {
    id: "teams",
    number: "01",
    title: "Teams",
    summary:
      "Workshops, season-long retainers, and culture work for squads, staff, and the people who shape the room.",
    tag: "Most common",
    // PLACEHOLDER copy — replace once Cara confirms her service descriptions.
    who: "Squads, coaching teams, and performance staff who want to perform better together — not by adding pressure, but by building a shared way of working.",
    includes: [
      "Team workshops and culture sessions",
      "Season-long retainer support",
      "Work with coaches and performance staff",
      "Group debriefs around key moments",
    ],
    outcome:
      "A team that understands itself, communicates under pressure, and owns its own standards — without depending on anyone to hold it together.",
  },
  {
    id: "individuals",
    number: "02",
    title: "Individuals",
    summary:
      "1:1 work for athletes navigating pressure, selection, injury, transitions, and identity beyond performance.",
    // PLACEHOLDER copy.
    who: "Individual athletes and performers navigating pressure, selection, injury, transition, or the question of who they are beyond their sport.",
    includes: [
      "Confidential one-to-one sessions",
      "Performance-under-pressure strategies",
      "Support through injury and transition",
      "Identity and life-beyond-sport work",
    ],
    outcome:
      "A clearer, steadier you — equipped with skills you keep, so you leave each block more capable than you arrived, not more reliant.",
  },
  {
    id: "speaking",
    number: "03",
    title: "Speaking",
    summary:
      "Keynotes and bespoke sessions for clubs, federations, governing bodies, and corporate audiences.",
    // PLACEHOLDER copy.
    who: "Clubs, federations, governing bodies, and corporate audiences who want an honest, evidence-based session on performance and culture.",
    includes: [
      "Keynote talks",
      "Bespoke half- and full-day sessions",
      "Panel and Q&A appearances",
      "Tailored briefs for your audience",
    ],
    outcome:
      "A room that leaves with something usable on Monday morning — not a highlight reel, but practical ideas they can apply themselves.",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Listen",
    body: "We start where you are — the people, the pressures, the moment you're in. No assumptions, no template.",
  },
  {
    number: "02",
    title: "Build",
    body: "Together we build the skills, language, and standards that fit you. Evidence-based, plain-spoken, practical.",
  },
  {
    number: "03",
    title: "Hand over",
    body: "The goal is your independence. You keep the tools, so you continue to be world class long after the work ends.",
  },
];

/** The verbatim empowerment statement — the brand's philosophical anchor. */
export const philosophy = {
  // Rendered as a pull-quote; the emphasised phrase is split out for styling.
  lead: "We aren't about selling. This isn't a service you become dependent on.",
  emphasis: "We're here to support your strengths, your team, your skills and your vision",
  trail: "— so you can flourish and continue to be world class.",
  attribution: "Cara · Founder, Virtuoso Psychology",
};

export type Credential = { title: string; sub: string };

/*
  Formal qualifications & honours only — kept distinct from the role/location
  "identity" caption (see about.identity) so the two never repeat on a page.
  Three items: lays out as one clean row on both the home band and About.
*/
export const credentials: Credential[] = [
  // Verified from Cara's own public LinkedIn profile.
  { title: "HCPC Accredited Psychologist", sub: "Performance & wellbeing" },
  { title: "PhD, Psychology", sub: "Cardiff Metropolitan University" },
  { title: "60+ caps for Wales", sub: "2× World Championships · 2× Commonwealth Games" },
];

export const about = {
  heading: "A practitioner first. A psychologist second. A teammate, always.",
  paragraphs: [
    "Cara Lea Moseley competed at the very top of sport — earning more than 60 caps for Wales at netball across two World Championships and two Commonwealth Games. She knows the highs and lows of performance because she's lived them, not just studied them.",
    "As an athlete, she saw how much was done for the performer and how little for the person behind it. So she built the career she wished had existed: an HCPC-accredited psychologist with a PhD in psychology, she has worked across professional football, rugby and GB sport — spending four years as a psychology and wellbeing lead at Brighton & Hove Albion, and now serving as Women's Psychosocial Pathway Manager at The Football Association.",
    "Her belief is simple, and it's the value she leads with: empowerment. Performance and wellbeing go hand in hand. The work begins by listening, stays grounded in evidence, and ends where it should — with the person, the squad, or the staff member more capable of the next moment than they were before. Virtuoso Psychology is the formal home for that work.",
  ],
  // A humanising note — kept about Cara herself.
  humanisingFact:
    "Away from the touchline, Cara is an ultra-marathon trail runner — the place she first learned that the mind is where the last mile is won.",
  // Short identity caption beneath the portrait: name → current role → place.
  // Distinct from `credentials` (formal quals) so nothing repeats.
  identity: {
    name: "Cara Lea Moseley",
    role: "Women's Psychosocial Pathway Manager, The FA",
    location: "Based in Wales · working internationally",
  },
};
