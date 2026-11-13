# MAFYN — Official Website

Single-page website for **MAFYN**, a full-stack development studio focused on
websites, custom web applications, and backend systems.

The design is built around a four-colour monochrome palette, a Swiss editorial
grid, and deliberately restrained interaction. The site is bilingual (English
and Indonesian) and supports light, dark, and system themes.

## Stack

- Next.js 16 (App Router, Turbopack, locale routes)
- React 19
- TypeScript (strict)
- Tailwind CSS 4
- Lucide icons
- Space Grotesk + Inter via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The root redirects to `/en`; Indonesian content is
available at `/id`.

### Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm start` | Run the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |

## Structure

```
src/
  app/
    [locale]/
      layout.tsx              Fonts, localized metadata, theme bootstrap
      page.tsx                Section composition + JSON-LD
    actions/contact.ts        Server Action: validation + inquiry delivery
    globals.css               Theme tokens, base styles, form styles
    opengraph-image.tsx       Generated Open Graph image
    robots.ts / sitemap.ts    SEO routes (both locales)
    icon.svg                  Favicon
  components/
    ui/                       Button, section header, wordmark, reveal
    site-header.tsx           Sticky navigation + accessible mobile dialog
    theme-switch.tsx          Light / dark / system selector
    language-switch.tsx       EN / ID selector
    hero.tsx                  Headline, CTAs, system-model panel
    services.tsx              Four services
    work.tsx                  Data-driven case-study grid
    process.tsx               Five-stage process
    about.tsx                 Studio philosophy and principles
    contact.tsx / contact-form.tsx
    site-footer.tsx
  content/
    types.ts                  Dictionary contract
    dictionaries/en.ts        English copy
    dictionaries/id.ts        Indonesian copy
    site.ts                   Language-independent brand and contact constants
    projects.ts               Bilingual case-study data (placeholders by default)
  i18n/                       Locale configuration and dictionary lookup
  lib/theme.ts                Theme storage key, types, pre-paint script
  lib/contact.ts              Shared form constants and state types
```

## Content and languages

The site uses real locale routes: `/en` (default) and `/id`. The root path
redirects to `/en`. Each route has its own `<html lang>`, canonical URL,
`hreflang` alternates, Open Graph locale, and localized metadata.

All user-facing copy lives in `src/content/dictionaries/en.ts` and
`src/content/dictionaries/id.ts`. Both files must satisfy the `Dictionary`
contract in `src/content/types.ts`, so a missing translation is a type error.
Brand names, product names, technology names, URLs, and the tagline
“Engineering Digital Solutions.” are intentionally not translated.

To add a locale: extend `locales` in `src/i18n/config.ts`, add a dictionary,
and update the `languages` maps in the layout metadata and sitemap.

## Theme

The theme selector offers **Light**, **Dark**, and **System**. The preference is
stored in `localStorage` under `mafyn-theme`; first-time visitors follow
`prefers-color-scheme`. A small inline script in `[locale]/layout.tsx` resolves
the theme before first paint to prevent a flash of the wrong colours.

Semantic tokens in `src/app/globals.css` switch under `html[data-theme]`:

| Token | Light | Dark |
| --- | --- | --- |
| `canvas` | `#F4F4F2` | `#111318` |
| `fg` | `#111318` | `#F4F4F2` |
| `panel` | `#EAEAE7` | `#191C22` |
| `solid` | `#111318` | `#F4F4F2` |
| `on-solid` | `#F4F4F2` | `#111318` |

The Process, Contact, and Footer sections are intentionally dark in both themes;
the contact form keeps a paper-on-ink field treatment. Theme changes are
synchronised across tabs and follow OS changes while “System” is selected.

## Selected works

There is **no fabricated client work** in this project.
`src/content/projects.ts` contains three clearly labelled placeholder slots in
both languages. To publish real work:

1. Replace the `en` and `id` title, category, summary, problem, and solution
   with verified facts.
2. Add the stack, and put screenshots in `public/work/`.
3. Set `status` to `"published"` and `href` to the live project URL (or `null`).
4. Publish client work only with permission.

The card layout already supports screenshots (through `next/image`), problem,
solution, stack, and project link, so no component changes are required.

### Placeholders to confirm before launch

- **Email:** `hello@mafyn.web.id` in `src/content/site.ts`. Confirm the mailbox
  exists and is monitored.
- **WhatsApp:** `+62 8XX-XXXX-XXXX` in `src/content/site.ts`. Replace with the
  real number and, if desired, turn it into a `wa.me` link in `contact.tsx` and
  `site-footer.tsx`.
- **Selected works:** replace the placeholder entries as described above.

No statistics, testimonials, awards, team sizes, or project results are claimed
anywhere on the site.

## Contact form

The form is a React Server Action (`src/app/actions/contact.ts`) with:

- Server-side validation for every field, length limits, and email format.
- Localized validation, error, and success messages based on the submitted
  locale. Unknown locales fall back to English.
- A honeypot field for basic bot filtering.
- An in-memory rate limit (5 inquiries per IP per 10 minutes). On multi-instance
  serverless hosting this limit is per instance; add edge/platform rate limiting
  if the site sees abuse.
- Meaningful loading, error, and success states. Errors are announced with
  `role="alert"` and invalid fields use `aria-invalid` + `aria-describedby`.

Delivery uses a JSON webhook:

```bash
# .env.local
CONTACT_WEBHOOK_URL=https://example.com/inquiry-endpoint
```

`CONTACT_WEBHOOK_URL` can point at Formspree, n8n, Zapier, Make, or a custom
handler. The payload is:

```json
{
  "source": "https://mafyn.web.id",
  "locale": "en",
  "submittedAt": "2026-01-01T00:00:00.000Z",
  "name": "...",
  "email": "...",
  "company": "...",
  "projectType": "Web application",
  "budget": "Rp 10–30 million",
  "message": "..."
}
```

If the variable is missing or delivery fails, the visitor sees an explicit
localized error with the studio email address as a fallback. The form never
claims a message was sent when it was not.

No database is used, and inquiry contents are not logged by the app.

## Accessibility and motion

- Semantic landmarks, skip link, visible focus states, labelled form controls.
- Theme and language switches are grouped, labelled, and keyboard operable.
- Mobile navigation uses native `<dialog>` with focus trapping and Escape.
- Scroll reveals are progressive: content is visible without JavaScript.
- All animation is disabled under `prefers-reduced-motion`.

## SEO

- Per-locale canonical URLs, `hreflang` alternates, Open Graph and Twitter
  metadata, and a generated OG image.
- `sitemap.xml` lists `/en` and `/id` with language alternates; `robots.txt`
  points to the sitemap.
- `ProfessionalService` JSON-LD is localized and includes the service catalog.
- Domain metadata is centralised in `src/content/site.ts`.

## Deployment

Set `CONTACT_WEBHOOK_URL` in the hosting environment, then run:

```bash
npm run lint
npm run typecheck
npm run build
```

The site is otherwise fully static. Locale routes are prerendered at build time.
