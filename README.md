# Zendriq — website

A single-page marketing site for Zendriq, built with Next.js (App Router) and plain CSS
Modules. No UI framework, no runtime dependencies beyond React.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, **Add New → Project**, import the repo, and accept the defaults —
   Vercel detects Next.js and needs no build configuration.
3. Add your domain under **Settings → Domains**.
4. Set one environment variable so canonical URLs, `sitemap.xml`, `robots.txt` and
   social previews point at the real domain:

   ```
   NEXT_PUBLIC_SITE_URL = https://zendriq.com
   ```

   Without it the site falls back to `https://zendriq.com`, which is fine once that
   domain is live and wrong before then.

Or, from this directory:

```bash
npx vercel        # preview deploy
npx vercel --prod # production deploy
```

## What to edit first

| You want to change | File |
| --- | --- |
| Business name, email, tagline, domain | `lib/site.ts` |
| Nav links | `lib/site.ts` |
| Hero headline and the technical-surface diagram | `components/Hero.tsx`, `components/BuildGraph.tsx` |
| The two tracks (who each is for, what it starts with) | `components/Tracks.tsx` |
| Service cards, and the fee shape on each | `components/Services.tsx` |
| Both engagement timelines (the gantts) | `components/Process.tsx` |
| Capability areas | `components/Coverage.tsx` |
| Operating principles | `components/Principles.tsx` |
| Contact copy and form | `components/Contact.tsx` |
| Colors, type scale, spacing | `app/globals.css` (`:root`) |
| The logo mark | `public/logo.svg` → baked into `lib/logo.ts` |
| Favicon | `app/icon.tsx` |
| Social preview card | `app/opengraph-image.tsx` |

**`hello@zendriq.com` is a placeholder.** Change it in `lib/site.ts` before you launch —
it appears in the nav CTA, the contact form, the footer, the OG image and the
structured data.

The copy deliberately names no vendors, frameworks or industries — `Coverage.tsx`
describes capability areas instead, so the site doesn't filter out work by implying a
narrower practice than Zendriq runs.

The site follows the **two-track** position in `Zendriq Business Plan` — one practice,
two front doors:

- **Track A — Assess & Remediate**: established businesses. Entry offer is the Baseline
  Assessment, which is the flagship and is flagged *Start here*.
- **Track B — Plan & Build**: startups. Entry offer is the discovery and architecture
  sprint.

Two rules the copy is built around, worth keeping:

- **Managed support is not on the site.** It stays off until it can actually be staffed.
- **Build is present but honest about capacity.** The note on the Build card and the
  dashed bar in `Process.tsx` say one build at a time, never quoted against people we
  haven't confirmed. Don't quietly upgrade that into a standing-team promise.

No prices are published. Every offering shows a fee *shape* and a duration instead,
because the plan says to quote only after a scoping call.

## The contact form

The form composes a `mailto:` link and opens the visitor's email client. Nothing is
sent from the page, so there's no backend, no API key, and no spam surface — it works
the moment you deploy.

To collect submissions server-side instead, add a route handler at
`app/api/contact/route.ts`, post the form to it, and forward the message with
[Resend](https://resend.com) or [Formspree](https://formspree.io). The form state in
`components/Contact.tsx` is already there; only the `compose` function changes.

## Design notes

- **Substrate** — the page sits on a graph-paper grid (24px minor, 120px major),
  drawn in `body` in `app/globals.css`. Warm paper, graphite linework.
- **Keep the grid faint rather than plating the type.** The minor 24px rule is the one
  that lands mid-line, so it sits at `0.07` alpha — texture, not furniture. Backing every
  text block with an opaque panel was tried and looks bad: big blank slabs floating on
  graph paper, and the page stops reading as a drawing. Large display type is fine over a
  soft grid. If you ever strengthen the grid, you inherit that problem.
  - The **eyebrow labels** are the one exception, and carry their own paper via
    `.eyebrow::after` — they're the smallest, thinnest, orange-est text on the page.
    `width: fit-content` keeps the paper hugging the label instead of running the column.
  - **Panels** (cards, charts, the diagram frame) carry `--sheet-2` and are **opaque**.
    At the 72% alpha they used to have, the grid still read through behind their text.
    `--sheet-hi` is the hover step above that.
- **Palette** — one spot colour, used the way a highlighter is used on a real drawing.
  **`--brand: #ff500a`**, straight from `logo.svg`.

  | Token | Use it for |
  | --- | --- |
  | `--brand` `#ff500a` | fills, rules, marks, strokes, and all orange text |
  | `--brand-ink` | orange text on the light sheet — currently the same as `--brand` |
  | `--brand-tint` `#ffe3d1` | pale fills — gantt bars, the diagram's outcome box |

  Anything sitting *on* orange takes `--ink`, never white — the brand orange only clears
  4.5:1 against ink, not against paper.

  `--brand-ink` exists as a separate token so orange text can be darkened independently
  of fills. It is deliberately set equal to `--brand` right now, which is ~2.7:1 on the
  sheet and below AA; the small mono labels lean on weight and size to stay legible
  instead. If that ever has to pass an audit, darken **this token alone** — `#a83b00` is
  5.3:1 — rather than touching `--brand`.
- **Small mono labels** — the eyebrows, chips, gantt spans and form labels are the
  hardest type on the page: small, uppercase, tracked out and often orange. They are all
  set at **500, never 400**, at **11.5px or larger**, with tracking **at or under
  0.12em**. Plex Mono 400 is thin enough that these turn to mush below that; and because
  monospace advance widths don't change with weight, going to 500 costs no extra space.
  The only exceptions are the two SVG `<text>` rules in `BuildGraph.module.css`, whose
  sizes are viewBox units measured against hand-set boxes — thicken those, never enlarge.
- **The two tracks differ in weight, not hue** — both are brand orange so neither reads as
  the junior one. Track A gets solid marks and a solid edge rule; Track B gets hollow
  marks and a hatched rule. Same pattern in `Tracks`, `Process` and `Services`.
- **The mark** — `public/logo.svg` is the source. `lib/logo.ts` holds its two paths with
  the source's `<g transform="matrix(...)">` baked into the coordinates, because next/og
  (Satori) renders the favicon and social card and doesn't handle group transforms
  reliably. Shared by `components/Logo.tsx` (inline, inherits `currentColor`),
  `app/icon.tsx` and `app/opengraph-image.tsx`. Re-bake from the SVG rather than
  hand-editing the path data, and note the art fills 90% of its viewBox horizontally but
  only 65% vertically — size the mark accordingly, or use `LOGO_VIEWBOX_TIGHT`, which
  crops to the art's own 450×324 bounds. The favicon uses the tight box, in brand orange
  on transparent, so it is the logo as drawn rather than a knocked-out tile. There is no
  `apple-icon`; add one if you want a proper iOS home-screen tile, and give it an opaque
  background, since iOS composites transparency onto black.
- **Type** — Archivo (display), IBM Plex Sans (body), IBM Plex Mono (labels and data),
  loaded through `next/font` so there are no external requests. Archivo is a grotesque out
  of the American gothic tradition — the same heavy, squarish territory the Z mark sits
  in — and Plex keeps the register technical rather than trend-led.
- **The hero diagram** draws itself on load. Two inputs — a running system of unknown
  health and a product that doesn't exist yet — feed the same five layers and come out
  under control. It has two layouts: a five-branch bus above 700px and a vertical stack
  below, both in `components/BuildGraph.tsx`. The "New product" box has marching-ant
  dashes on purpose — it's the only thing on the page that never settles.
- Motion respects `prefers-reduced-motion`; the diagram renders in its final state.
