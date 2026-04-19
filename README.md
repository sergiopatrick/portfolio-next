# Portfolio - Next.js port

Next.js 15 (App Router) port of the WordPress theme at `../sp-portfolio`. Same visual and logic; content is authored in TypeScript under [content/](content/) (no WP backend).

## Local dev

```bash
cp .env.example .env.local
# edit .env.local with real RESEND_API_KEY

npm install
npm run dev
```

## Editing content

- Site copy, services, stack, brands, timeline: [content/site.ts](content/site.ts)
- Cases (7): [content/cases.ts](content/cases.ts)

After edit, re-run `npm run dev` (or Vercel will rebuild automatically on push).

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import on Vercel.
3. Set env vars (see `.env.example`).
4. Add your domain.

## Structure

```
app/
  layout.tsx                 root layout + header/footer
  page.tsx                   home (/)
  about/page.tsx
  contact/page.tsx
  services/page.tsx          hub
  services/[slug]/page.tsx   3 axis details
  work/page.tsx              archive
  work/[slug]/page.tsx       single case
  work/category/[slug]/page.tsx
  api/contact/route.ts       form handler (Resend)
  sitemap.ts
  robots.ts
  not-found.tsx
components/
  layout/                    SiteHeader, SiteFooter, SkipLink, ThemeToggleScript, ClientBehaviors
  home/                      8 home sections
  case/                      CaseHero, CaseMeta, CaseSection, CaseCode, CaseMetrics, CaseNext, CaseRelated
  service/                   ServiceHero, ...
  ui/                        SvgIcon, CardCase, Faq, Prose
content/
  site.ts                    site options, services, stack, brands, timeline, FAQs
  cases.ts                   7 cases
lib/
  seo.ts                     generateMetadata + JSON-LD
  whatsapp.ts                wa.me URL builder
  svg.ts                     inline-svg reader for diagrams and icons
```
