# Virtuoso Psychology — Brand Guidelines

*Working draft v0.1 — for Cara's review, 2026-05-06*

---

## 1. Brand essence

**Virtuoso Psychology** is sports psychology that empowers teams to perform — together.

We work with teams, individuals, and the coaches who lead them. The job is not to fix what's broken; it's to unlock what's already there. **Empowerment** is the through-line — felt in the language, the colour, the typography, and the way the work is delivered.

### Promise (one line)

> Sports psychology that empowers teams to perform — together.

*(Working line — to be tested with Cara before it ships.)*

### Values

| Value | What it means in practice |
|---|---|
| **Empowerment** | We never create dependency. The team should leave stronger, not more reliant on us. |
| **Together** | Performance is collective. Even individual work happens in the context of a team, a coach, a relationship. |
| **Plain-spoken** | No clinical jargon, no buzzwords. We talk how athletes and coaches actually talk. |
| **Evidence-based** | Rooted in performance psychology research, applied with care. Confidence, not certainty. |

### Audience

- Pro and semi-pro sports teams (1st XI / 1st team / squad-level)
- Individual athletes navigating pressure, transitions, identity
- Coaches and performance directors leading the cultures above

---

## 2. Voice

### Sound like

- Direct verbs over adjectives — *"we coach"* > *"we are passionate about coaching"*
- The word "you" or "your team" close to every promise
- Confident, not hype-y. *"This works"* > *"This is a game-changing breakthrough"*
- British English throughout
- Comfortable with silence — short sentences, pull-quotes, white space on the page

### Don't sound like

- Clinical / academic ("subjects", "interventions", "modalities")
- Wellness ("journey", "holistic", "thrive")
- SaaS-marketing ("synergy", "unlock potential", "10x your performance")
- Self-help guru ("crush it", "level up", emojis as punctuation)

### Empowerment, shown not stated

The word *"empower"* should appear once, maybe twice across the whole site. It's shown by **language ownership** — *your team*, *your moment*, *your call* — not by repetition.

---

## 3. Logo

### Current state

A blue head silhouette with the wordmark `VIRTUOSO.PSYCHOLOGY` underneath. The mark itself is workable; the wordmark needs proper typography treatment.

### v1 work needed

1. **Vector cleanup** — rebuild the head as a clean SVG (currently appears to be raster from the design.com export)
2. **Wordmark re-set** — use the chosen display font (see §5), correct letterspacing, clear hierarchy between *VIRTUOSO* and *PSYCHOLOGY*
3. **Lockup variants:**
   - **Horizontal** — mark left, wordmark right (header)
   - **Stacked** — mark above wordmark (hero, large surfaces)
   - **Mark only** — favicon, social avatar, app icons
4. **Monogram fallback** — single letter `V` or `VP` for sub-32px surfaces

### Clear space & minimum size

- Clear space = the height of the wordmark cap-height on every side
- Minimum size: 24px tall (digital), 15mm tall (print)

---

## 4. Colour — three palette options

Three distinct directions for Cara to react to. Each is a complete system — primary, accent, neutral scale, semantic states — not a mood board.

### Option A — Refined Navy & Gold *(evolution of the current draft)*

| Role | Hex | Use |
|---|---|---|
| Primary (deep) | `#0B1B33` | Backgrounds, headlines |
| Primary (mid) | `#152A4D` | Cards, secondary surfaces |
| Accent | `#D4A24C` | CTAs, motif type, key emphasis |
| Accent (deep) | `#A07628` | Hover states, secondary accent |
| Neutral 0 | `#FAF7F0` | Page background (warm off-white) |
| Neutral 5 | `#1A1A1A` | Text on light |

**Mood:** trustworthy, premium, classic-sport. **Risk:** can drift toward "law firm" if the typography isn't bold enough.

### Option B — Stadium Bold *(Hyrox-energy)*

| Role | Hex | Use |
|---|---|---|
| Primary | `#0A0A0A` | Backgrounds, type |
| Surface | `#FFFFFF` | Page background |
| Accent | `#C6F432` | CTAs, motif (signal lime) |
| Accent alt | `#FF5A1F` | Optional second accent (signal orange) |
| Neutral 1 | `#F4F4F4` | Card backgrounds |
| Neutral 4 | `#5A5A5A` | Body text on light |

**Mood:** athletic, urgent, fearless. **Risk:** can read as gym brand rather than psychology brand if balanced wrong — credibility content needs to carry the weight back.

### Option C — Editorial Calm *(Kate Hays-direction)*

| Role | Hex | Use |
|---|---|---|
| Primary | `#1A1A2E` | Headlines, type |
| Accent | `#C2522D` | CTAs, motif (burnt terracotta) |
| Surface warm | `#F4ECD8` | Page background (cream) |
| Surface cool | `#FFFFFF` | Card backgrounds |
| Neutral mid | `#6B6B73` | Body text |

**Mood:** grown-up, intelligent, human. **Risk:** softest of the three — needs strong typographic presence to avoid blending into "boutique therapist" territory.

### Universal rules across all three palettes

- All body text must hit **WCAG AA** (4.5:1) on its background
- All large text and UI elements must hit **AA** (3:1) minimum
- One accent only per surface — never both lime *and* orange in Option B in the same view
- Semantic states (success / warning / error) layered onto the neutral scale at build time

---

## 5. Typography

Two fonts, deliberately paired. **Inter and Roboto are not options** — they're the AI-default trap that makes the site read as templated.

### Display (one of these, paired to palette)

| Font | Personality | Best with |
|---|---|---|
| **Fraunces** | Editorial serif, expressive | Option A or C |
| **PP Editorial New** | High-contrast serif, magazine | Option A or C |
| **GT America Condensed** | Bold condensed grotesk | Option B |
| **Söhne Breit** | Wide, confident sans | Option A or B |

### Body

One of:
- **Switzer** — modern humanist sans, free
- **Söhne** — premium humanist sans
- **IBM Plex Sans** — open-source, slightly technical feel

### Type scale

Modular ratio **1.25**, fluid via CSS `clamp()` so the hero scales gracefully from 375px to 1920px:

| Token | Mobile → Desktop |
|---|---|
| `text-display` | 56px → 120px |
| `text-h1` | 36px → 64px |
| `text-h2` | 28px → 44px |
| `text-h3` | 22px → 30px |
| `text-body` | 16px → 18px |
| `text-small` | 14px → 14px |

### Rules

- Body text **never below 16px** on mobile
- Line-height: 1.6 for body, 1.05–1.15 for display
- Line-length: capped at **65–75ch** for body
- Tracking tightened on display sizes (`-0.02em`), looser on uppercase (`+0.04em`)

---

## 6. Imagery & motion

### v1 — no photography yet

- **Typography-led** hero and section headers — display type *is* the imagery
- **Generative gradient + grain** backgrounds for credibility band and CTA strips (CSS-only, lightweight)
- **Pull-quotes** treated as visual elements — large, full-bleed, single colour
- **Reserved video slot** — 16:9 placeholder under the hero headline. Empty state = looped subtle texture; replaces with the brand film when shot.

### v2 — post-shoot

A half-day photoshoot with Cara would unlock:
- Headshot (About hero, footer signature)
- On-location: pitch, training ground, gym — Cara observing, talking to a coach, in conversation
- Hands / detail shots — notebook, whistle, pitch lines (texture pool)

Direction: polished but human. Match Kate Hays' photography register, not stock-athlete energy.

### Motion principles

- **One signature scroll moment per page**, not a confetti of micro-animations
- Examples: headline word-swap on hero; counter on credibility band; staggered fade on service cards
- All motion: 150–300ms, eased
- `prefers-reduced-motion: reduce` → all signature animations gracefully no-op (content remains, motion stops)

### Iconography

- **Lucide** line icons, single set across the site
- 1.5px stroke, 24x24 viewBox
- No emojis used as icons — anywhere

---

## 7. Layout principles

- **Editorial grid:** 12-column, with deliberate asymmetry (text often offset 2–3 columns, never centred-by-default)
- **Whitespace is structural** — not decorative. Sections breathe by 80–160px on desktop
- **One CTA per section, max** — competing CTAs kill conversion
- **Floating navbar** with 16px clearance from viewport edges (not flush to `top: 0`)
- **Max content width:** `1280px` for primary content, full-bleed for hero / pull-quote moments

---

## 8. Accessibility (non-negotiable)

- All body text ≥ AA (4.5:1)
- Visible focus rings on every interactive element
- Tab order matches visual order
- All images have meaningful `alt` text or `alt=""` if decorative
- All form inputs have associated `<label>`
- Touch targets ≥ 44x44px
- Site fully usable with `prefers-reduced-motion: reduce`

---

## 9. What's next

1. **Cara picks a palette** (A / B / C — or a hybrid she points us at)
2. **Cara reviews the voice** (one promise line, the values table)
3. **Logo SVG audit** — is the head mark already vector?
4. **Service list lock-in** so we can move to wireframes
5. Build moves to Phase 1 — Home page

---

*This doc lives at `BRAND.md` in the project root and evolves as decisions land. Every change should have a date and a reason.*
