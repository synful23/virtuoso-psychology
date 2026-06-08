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
      "An environment built by deliberate design — one that lets your people regulate, flourish, and perform consistently in the moments that matter most, long after we hand it over.",
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
    body: "We hand over — empowering you to take charge and lead, so you keep the tools long after the work ends.",
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
    "Cara has almost 20 years working in elite sport and business — and she didn't just study that world, she lived and breathed it. Representing Wales across a 16-year international career that took her to two World Championships and two Commonwealth Games, she knows the euphoria of competing at the highest level, and the challenges a career in high performance can bring, whether in sport or business.",
    "As an athlete, Cara saw how differently the athlete was supported compared to the person behind them — an area too often neglected. The same is true of the people behind a team: the relationship dynamics, the way a group functions, the culture and environment around it. That is fundamental to high performance, and it's the area Cara will help you build. She has worked across professional football, rugby and GB sport — including four years as a psychology and wellbeing lead at Brighton & Hove Albion, and now as Women's Psychosocial Pathway Manager at The Football Association.",
    "Value-driven and strengths-based, informed by the latest data and research, Cara works creatively, quickly and collaboratively to identify your strengths and build a clear, concise framework to work from. Grounded in evidence, she works alongside you to reach your goals and make sure you, your team, and your organisation harness your strengths and maximise your potential.",
  ],
  // A humanising note — kept about Cara herself.
  humanisingFact:
    "Since retiring from international netball, Cara has taken up trail ultra-marathons — a new way to push her boundaries, challenge herself physically and mentally, travel the world, and connect with nature.",
  // Short identity caption beneath the portrait: name → current role → place.
  // Distinct from `honours` (formal quals) so nothing repeats.
  identity: {
    name: "Cara Lea Moseley",
    role: "Women's Psychosocial Pathway Manager, The FA",
    location: "Based in Wales · working internationally",
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
