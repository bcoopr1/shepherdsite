# Shepherd

> The eye that never closes.

Marketing website for **Shepherd**, a defense and ag-tech company building
autonomous LoRa mesh monitoring systems for ranches, outdoor properties, and
tactical operations. Flagship product: the **Argus System** — a Hub (central
base station) and Scouts (remote sensor nodes).

Built with Next.js 14 (App Router), Tailwind CSS, Framer Motion, and Lucide
React.

---

## Stack

- **Next.js 14** — App Router, Server Components, `next/font`
- **TypeScript** — strict mode
- **Tailwind CSS** — custom dark / tactical theme
- **Framer Motion** — parallax, scroll-driven animations, page transitions
- **Lucide React** — icon set

## Design

- Dark, defense-tech aesthetic inspired by Anduril and Mach Industries
- Color palette
  - Background `#0A0A0B`
  - Surfaces `#1C1F22` / `#2A2E33`
  - Accent (tactical green) `#5B7340`
  - Body text `#E8E8E6`
  - Borders `#3A3F45`
- Typography
  - Display: **Rajdhani** (industrial, condensed)
  - Body: **Inter**
- All-caps section labels and nav, monospace metadata, ultra-wide letter
  spacing throughout

## Pages

| Route       | Description                                                       |
| ----------- | ----------------------------------------------------------------- |
| `/`         | Home — full-bleed parallax hero, 4 parallax sections, use cases   |
| `/products` | Argus, Hub, and Scout details with pinned horizontal scroll       |
| `/about`    | Company story, philosophy, founder (Beau Cooper)                  |
| `/contact`  | Contact form (name, email, organization, use case, message)       |

## Component map

```
components/
  Nav.tsx                  # Sticky nav, becomes opaque on scroll, mobile drawer
  Footer.tsx               # Site footer
  Hero.tsx                 # Parallax full-bleed hero with fade/scale-in headline
  ParallaxSection.tsx      # Reusable scroll-driven parallax background section
  PinnedProductScroller.tsx# Pinned horizontal scroll on Products page
  ProductCard.tsx          # Argus / Hub / Scout summary cards
  SpecTable.tsx            # Grouped technical spec tables
  HudFrame.tsx             # Tactical HUD-corner frame for diagrams / panels
  FeaturePillar.tsx        # Capability / use-case cards
  SectionHeading.tsx       # Eyebrow + display headline + description
  ContactForm.tsx          # Client form with submit state
  Stat.tsx                 # Big-number stat with mono label
  ScrollCue.tsx            # Animated scroll indicator under hero
  Logo.tsx                 # Inline SVG mark
```

## Setup

Requires **Node 18.17+** (Node 20+ recommended).

```bash
# Install
npm install

# Dev server (http://localhost:3000)
npm run dev

# Production build
npm run build
npm run start

# Lint
npm run lint
```

## Notes

- All imagery uses Unsplash placeholder URLs. Swap `bgImage` props on
  `<ParallaxSection />` and `<Hero />` for real assets when available.
- The contact form is wired to a local submit handler and shows a success
  state. Wire it up to your transport (email, CRM, encrypted endpoint) in
  `components/ContactForm.tsx`.
- Founder section in `app/about/page.tsx` is a placeholder for **Beau Cooper**
  — drop a portrait into the `<HudFrame>` block when ready.

## Brand voice

Short, punchy, technical. Military / industrial precision. No fluff. No
emojis. No exclamation points. Examples used in copy:

- "Awareness without infrastructure."
- "The eye that never closes."
- "Watch what matters. From anywhere. With nothing in between."
- "Pilots are open. Briefings are closed."
