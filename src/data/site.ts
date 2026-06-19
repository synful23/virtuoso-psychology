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
  founderRole: "Performance Psychologist",
  tagline: "High Performance Specialists",
  description:
    "High performance specialists with certified experience and specific expertise in sport and business — helping you know your people, recruit the best, and be the best.",
  social: {
    instagram: "https://www.instagram.com/virtuoso.psychology",
    linkedin: "https://www.linkedin.com/in/cara-lea-moseley-267b744a/",
  },
  // Entity / structured-data signals. Cara works internationally from a UK base,
  // so we declare both. These feed the Organization & Person JSON-LD.
  areaServed: ["United Kingdom", "Worldwide"],
  addressCountry: "GB",
  // Topical coverage — balanced across sport and business performance. Drives
  // the `knowsAbout` field that helps search/answer engines place the entity.
  knowsAbout: [
    "Performance psychology",
    "Sport psychology",
    "High performance culture",
    "Recruitment and onboarding",
    "Leadership coaching",
    "Organisational development",
    "Performance under pressure",
    "Athlete wellbeing",
    "Mental health and wellbeing in sport",
  ],
} as const;

/** Profiles to assert entity identity (schema `sameAs`, `rel="me"`). */
export const sameAs: string[] = [site.social.instagram, site.social.linkedin];

/*
  Per-route SEO metadata — single source of truth for <title>, meta description
  and the Open Graph image. Titles target a balanced sport + business audience
  ("performance psychologist", "sport psychology", "high-performance culture")
  while preserving the brand voice. Titles ≤ ~60 chars, descriptions ≤ ~155.
  ogImage currently points at the shared default for every route (no per-page
  art yet). When Cara supplies branded 1200×630 images, drop them at /og/<route>.png
  and switch the paths here — no page edits needed.
*/
export type SeoMeta = { title: string; description: string; ogImage: string };

const DEFAULT_OG = "/og-default.png";

export const seo: Record<string, SeoMeta> = {
  home: {
    title: "Virtuoso Psychology · Performance Psychology for Sport & Business",
    description:
      "Performance psychology for sport and business. Know your people, recruit the best, be the best — plain-spoken, evidence-based, built to leave you stronger.",
    ogImage: DEFAULT_OG,
  },
  about: {
    title: "About Cara Lea Moseley · Performance Psychologist",
    description:
      "Cara Lea Moseley — HCPC & BPS chartered performance psychologist and ex-international athlete. Almost 20 years at the top of elite sport and business.",
    ogImage: DEFAULT_OG,
  },
  services: {
    title: "Services · Sport & Business Performance Psychology",
    description:
      "Recruitment, culture and strategic development, leadership coaching, performance psychology and speaking — bespoke for teams, organisations, leaders and individuals.",
    ogImage: DEFAULT_OG,
  },
  contact: {
    title: "Contact · Virtuoso Psychology",
    description:
      "Start a conversation about your organisation, team, or speaking enquiry. No pitch, no pressure — just a chance to see if we're the right fit.",
    ogImage: DEFAULT_OG,
  },
};

/*
  Cookie consent (UK GDPR / PECR). The site sets no cookies by default; analytics
  is gated behind explicit opt-in via the ConsentBanner. The consent record itself
  is stored in localStorage (a "strictly necessary" function that needs no consent),
  not a cookie. `version` lets us re-prompt everyone if the cookie policy changes.
*/
export const consent = {
  version: 1,
  storageKey: "vp-consent",
  policyHref: "/privacy",
  message:
    "We'd like to use privacy-friendly analytics to understand how the site is used. No tracking happens until you choose. You can change your mind anytime.",
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
  defaultMark: "logo4",
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
    title: "Teams & Organisations",
    summary:
      "Recruitment, onboarding, and cultural and strategic development for the people and systems behind high performance.",
    tag: "Most common",
    who: "Teams and organisations who know that the conditions around their people decide whether those people thrive. We help you design the environment, recruit the right talent, and build psychologically informed systems that hold up under pressure.",
    includes: [
      "Recruitment & onboarding",
      "Cultural development",
      "Strategic development",
      "Leadership coaching and mentoring",
      "Developing psychologically informed systems",
    ],
    outcome:
      "An environment built by deliberate design — one that lets your people regulate, flourish, and perform consistently in the moments that matter most.",
  },
  {
    id: "individuals",
    number: "02",
    title: "Leaders & Individuals",
    summary:
      "Coaching, performance psychology, and wellbeing support for leaders and individuals carrying real pressure.",
    who: "Leaders and individuals navigating the demands of high performance — in sport or business — who want to perform consistently while staying well.",
    includes: [
      "Leadership coaching and mentoring",
      "Performance psychology support",
      "Mental health and wellbeing support",
    ],
    outcome:
      "A clearer, steadier you — equipped with skills you keep, so you leave each block more capable than you arrived, not more reliant.",
  },
  {
    id: "speaking",
    number: "03",
    title: "Speaking",
    summary:
      "Insight-led talks on leadership, performance culture, performance psychology, and wellbeing in sport.",
    who: "Clubs, federations, governing bodies, and businesses who want an honest, evidence-based session on what high performance really takes.",
    includes: [
      "Insights",
      "Leadership",
      "Performance culture and environments",
      "Performance psychology",
      "Mental health and wellbeing in sport",
    ],
    outcome:
      "A room that leaves with something usable on Monday morning — not a highlight reel, but practical ideas to take away.",
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
    body: "We listen, we observe, we learn — starting where you are, with your people, your pressures, and the moment you're in.",
  },
  {
    number: "02",
    title: "Build",
    body: "We build, together — tailored, evidence-based solutions that fit you, not a template.",
  },
  {
    number: "03",
    title: "Hand over",
    body: "We hand over — empowering you to take charge and lead.",
  },
];

/** The verbatim empowerment statement — the brand's philosophical anchor. */
export const philosophy = {
  // Rendered as a pull-quote; the emphasised phrase is split out for styling.
  lead: "Virtuoso Psychology isn't about selling — we don't believe psychology is a package to be bought and sold. This is a service that truly believes in",
  emphasis: "empowerment and sustainability",
  trail: "— working alongside you to reach your performance goals, recruit the best, be the best, and create sustainable high-performing environments.",
  attribution: "Cara · Founder, Virtuoso Psychology",
};

export type Credential = { title: string; sub: string };

/*
  Formal qualifications & honours only — kept distinct from the role/location
  "identity" caption (see about.identity) so the two never repeat on a page.
  Three items: lays out as one clean row on both the home band and About.
*/
export const credentials: Credential[] = [
  { title: "HCPC Accredited Performance Psychologist", sub: "Performance & wellbeing" },
  { title: "BPS Chartered Psychologist", sub: "British Psychological Society" },
  { title: "64+ caps for Wales", sub: "2× World Championships · 2× Commonwealth Games" },
];

export const about = {
  heading: "Almost 20 years lived and breathed at the top of high performance.",
  paragraphs: [
    "Cara not only has almost 20 years working in elite sports and business, she also lived and breathed the world of international sport. Representing Wales in a 16 year career that took her to compete at two World Championships and two Commonwealth Games, Cara truly understands the euphoria competing at the highest of levels, as well as some of the challenges it presents. In addition to this, Cara holds a deep insight into the environment required to enhance performance and ensure consistent execution of top level performance under the highest amounts of pressure. Successful teams don't happen by chance, they are developed through a consistent and systematic approach, anchored by their values and performance objectives, underpinned by a high performance culture.",
    "Cara’s ability to build relationships and understanding is rare, with a strong focus on empowerment, she works creatively, quickly, and collaboratively to identify your areas of strength and develop a clear, concise framework to work upon.",
    "Applying a value drive and strengths based approach, informed by the latest data insights and research, Cara will work alongside you to drive performance and ensure you maximise potential.",
  ],
  // A humanising note — kept about Cara herself.
  humanisingFact:
    "Since retiring from international netball, Cara has taken up trail ultra-marathons — a new way to push her boundaries, challenge herself physically and mentally, travel the world, and connect with nature.",
  // Short identity caption beneath the portrait: name → current role → place.
  // Distinct from `honours` (formal quals) so nothing repeats.
  identity: {
    name: "Cara Lea Moseley",
    role: "Company Director",
    location: "Working internationally",
  },
  // Full qualifications & honours list (About page). The home credibility band
  // shows a tighter 3-up subset via `credentials`.
  honours: [
    "HCPC Accredited Performance Psychologist",
    "BPS Chartered Psychologist",
    "BACP qualified Counselling Psychotherapist",
    "Almost 20 years' experience in professional sport and business",
    "64+ senior international caps for Wales in netball",
    "2× World Championships (2007, 2011) · 2× Commonwealth Games (2014, 2018)",
  ],
};
