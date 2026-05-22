# Seamless — CureWood Engineered Building Products

The new marketing site for Seamless™ engineered timbers, built on Astro and deployed to Vercel.

**Brand:** Seamless is the product line. CureWood is the manufacturer.
**Design system:** Engineered Swagger — bone background, ink type, cedar accent.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the local dev server
npm run dev
# → opens http://localhost:4321

# 3. Production build (to verify)
npm run build
npm run preview
```

Requires Node.js 18.17+ or 20+.

---

## Project structure

```
seamless-site/
├── src/
│   ├── components/      # Header, Footer, reusable bits
│   ├── layouts/         # Base.astro wraps every page
│   ├── pages/           # File-based routing — every .astro is a URL
│   │   ├── index.astro              → /
│   │   ├── contact.astro            → /contact
│   │   └── products/
│   │       └── index.astro          → /products
│   └── styles/
│       └── global.css   # Tailwind + design tokens
├── public/              # Static files served as-is (favicon, PDFs, images)
├── tailwind.config.mjs  # Color tokens, type scale, spacing
├── astro.config.mjs     # Astro + Tailwind + sitemap integration
└── package.json
```

---

## Design tokens (Tailwind)

| Token | Hex | Use |
|---|---|---|
| `bone` | #FAFAF7 | Page background |
| `ink` | #0A0A0A | Primary text, buttons |
| `cedar` | #D4451F | Single accent — links, italic phrases, status dots |
| `smoke` | #444444 | Body copy |
| `ash` | #888888 | Meta / eyebrow text |
| `line` | #D4D2CC | Borders, dividers |

Apply with `text-cedar`, `bg-ink`, `border-line`, etc.

---

## Voice & rules

✓ Short declarative sentences
✓ Italic for swagger phrases (`<span class="italic text-cedar">`)
✓ Spec data on display — don't hide it behind a download
✓ One Cedar accent per section, max

✗ Marketing-speak ("solutions," "innovative," "best-in-class")
✗ Multiple accent colors
✗ Stock photography of generic buildings
✗ Soft pastels or earthy gradients

---

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to vercel.com → New Project → import the repo
3. Framework preset: **Astro** (auto-detected)
4. Build command: `npm run build` (default)
5. Output dir: `dist` (default)
6. Deploy — you'll get a preview URL like `seamless-site.vercel.app`

Once you're happy, point `curewood.co` DNS at Vercel and flip the switch.

---

## What's built so far

- [x] Homepage with hero, product matrix, and "Why Seamless"
- [x] Products overview page (`/products`)
- [x] Contact page
- [x] Header / Footer / Base layout
- [x] Tailwind design tokens (Engineered Swagger)
- [x] Inter font loaded

## What's next

- [ ] Individual product line pages with variant configurator
- [ ] Technical hub (`/technical/*`)
- [ ] Projects gallery
- [ ] Sustainability page
- [ ] Warranty page
- [ ] About page (CureWood the company)
- [ ] News/blog setup
- [ ] Real product photography
