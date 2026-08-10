# Postchitect — Drafter & Modelling

A single-page marketing landing site for **Postchitect**, an architectural drafting & modelling studio offering architectural design, interior design, 3D visualization and working drawings — from concept to construction-ready documentation.

Built as a lightweight, self-contained React app with no heavy animation libraries: all motion is implemented with the native **Web Animations API** and **IntersectionObserver**.

## Live site

- Production: `https://postchitect.vercel.app/`

## Tech stack

- **React 18** + **Vite 6** (ESM, `@vitejs/plugin-react`)
- **Tailwind CSS 3** + PostCSS + Autoprefixer
- **sharp** — offline image optimization (WebP generation)
- Zero runtime animation dependencies (Web Animations API only)

## Getting started

```bash
npm install        # install dependencies
npm run dev        # start dev server (http://localhost:5173)
npm run build      # production build to dist/
npm run preview    # preview the production build locally
```

## Project structure

```
postchitect/
├── index.html                  # entry HTML — SEO meta, Open Graph, JSON-LD, fonts
├── vite.config.js              # Vite config (React plugin)
├── tailwind.config.js          # theme tokens (fonts, max-width, unused palette)
├── postcss.config.js
├── scripts/
│   └── optimize-images.mjs     # sharp pipeline: JPG/JPEG → responsive WebP (480/960px)
├── public/
│   ├── images/                 # source images + optimized/ WebP variants
│   ├── sitemap.xml
│   └── robots.txt
└── src/
    ├── main.jsx                # app bootstrap (manual scroll reset)
    ├── index.css               # global styles, reveal system, keyframes, reduced-motion
    ├── App.jsx                 # section composition
    ├── constants/
    │   └── site.js             # ★ single source of truth for brand + contact info
    ├── data/
    │   └── heroImages.js       # hero panel images
    └── components/
        ├── Navbar.jsx          # fixed nav, scrollspy, fullscreen mobile menu
        ├── HeroSection.jsx     # oversized wordmark + animated image panels
        ├── AboutSection.jsx    # "Where plans become places"
        ├── ProjectsSection.jsx # tabbed portfolio (3D / Sections / Details)
        ├── ServicesSection.jsx # interactive service list + pricing block
        ├── ContactSection.jsx  # WhatsApp CTA + contact links
        ├── Footer.jsx
        ├── Reveal.jsx          # scroll-in wrapper (shared IntersectionObserver)
        ├── AnimatedContent.jsx # Web Animations API entrance wrapper
        ├── ResponsiveImage.jsx # <picture>/WebP source selection with dimensions
        ├── StarBorder.jsx      # animated gradient border wrapper (+ .css)
        └── SpecularButton.jsx  # glossy specular-hover button (+ .css)
```

## Page sections

| Section  | id        | Description |
|----------|-----------|-------------|
| Hero     | `#home`   | Full-screen animated wordmark, 4 photo panels, mobile/desktop layouts |
| About    | `#about`  | Editorial statement "Where plans become places" |
| Projects | `#projects` | Tabbed gallery — 3D Visual, Sections, Details |
| Services | `#services` | Accordion-style service list with image, pricing (from Rp400K) and deliverables |
| Contact  | `#contact` | WhatsApp deep-link CTA, email, Instagram |
| Footer   | —         | Brand, copyright, social links |

## Configuring the client's details

All contact and brand information is centralized in **`src/constants/site.js`**:

```js
export const SITE = {
  name: "POSTCHITECT",
  whatsapp: { number: "...", display: "...", defaultMessage: "..." },
  email: "...",
  instagram: { handle: "...", url: "..." },
  credit: "Designed & Developed by Dignify",
  copyrightYear: 2026,
};
```

`WHATSAPP_URL` is derived automatically from `SITE.whatsapp` (digits stripped, message URL-encoded), so no other file needs editing when contact info changes.

## Image pipeline

1. Place full-size images in `public/images/` (hero or projects).
2. Run `npm run images:optimize` to generate 480px and 960px WebP variants into `public/images/optimized/`.
3. `ResponsiveImage` automatically serves the WebP `<source>` with the right `sizes`, falling back to the original file.

New images must also be added to the `images` list in `scripts/optimize-images.mjs` and the `dimensions` map in `src/components/ResponsiveImage.jsx` for correct rendering.

## SEO

- Title, description, Open Graph and Twitter card meta in `index.html`
- `Organization` JSON-LD structured data
- Canonical URL, `sitemap.xml` and `robots.txt` (served from `public/`)
- Google site verification meta
- Semantic headings and accessible tabs/roles across sections

## Accessibility & performance

- `prefers-reduced-motion` disables all entrance animations
- Lazy-loaded images with explicit `width`/`height` (no layout shift), `fetchpriority` on the hero lead image
- Keyboard-focusable controls with visible focus ring, ARIA labels, tablist/tabpanel semantics
- Responsive typography via `clamp()`, mobile-first layouts

## Deployment

The site deploys to **Vercel** (framework preset: Vite). The `dist/` output is produced with `npm run build`. Update the canonical/OG URLs in `index.html` and `public/sitemap.xml` if the domain changes.

---

Designed & Developed by [Dignify](https://dignify.design/).
