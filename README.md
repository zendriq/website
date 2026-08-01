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
| Hero headline and the architecture diagram | `components/Hero.tsx`, `components/BuildGraph.tsx` |
| Problem framing | `components/Gap.tsx` |
| Service cards | `components/Services.tsx` |
| Engagement timeline (the gantt) | `components/Process.tsx` |
| Offers and fee structures | `components/Engagements.tsx` |
| Industries and tech list | `components/Focus.tsx` |
| Operating principles | `components/Principles.tsx` |
| Contact copy and form | `components/Contact.tsx` |
| Colors, type scale, spacing | `app/globals.css` (`:root`) |
| Social preview card | `app/opengraph-image.tsx` |

**`hello@zendriq.com` is a placeholder.** Change it in `lib/site.ts` before you launch —
it appears in the nav CTA, the contact form, the footer, the OG image and the
structured data.

The three focus industries in `components/Focus.tsx` (AI-native SaaS, healthcare,
industrial technology) are a starting point drawn from the business outline. Pick the
ones you actually want to be known for.

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
  drawn in `body` in `app/globals.css`.
- **Palette** — cool gray sheet, graphite ink, ultramarine `#2a34c8` for structure, and
  ochre `#b8660f` reserved for anything that is *live* or *recurring*. Keep that
  distinction if you add sections.
- **Type** — Bricolage Grotesque (display), Instrument Sans (body), JetBrains Mono
  (labels and data), loaded through `next/font` so there are no external requests.
- **The hero diagram** draws itself on load. It has two layouts: a five-branch bus
  above 700px and a vertical stack below, both in `components/BuildGraph.tsx`. The
  "Your idea" box has marching-ant dashes on purpose — it's the only thing on the page
  that never settles.
- Motion respects `prefers-reduced-motion`; the diagram renders in its final state.
