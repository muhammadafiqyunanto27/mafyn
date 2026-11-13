# MAFYN — Official Website

Single-page website for **MAFYN**, a full-stack development studio focused on
websites, custom web applications, and backend systems.

The design is built around a four-colour monochrome palette, a Swiss editorial
grid, and deliberately restrained interaction.

## Stack

- Next.js 16 (App Router, Turbopack)
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

Open `http://localhost:3000`.

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
    actions/contact.ts        Server Action: validation + inquiry delivery
    globals.css               Design tokens, base styles, form styles
    layout.tsx                Fonts, metadata, viewport
    opengraph-image.tsx       Generated Open Graph image
    page.tsx                  Section composition + JSON-LD
    robots.ts / sitemap.ts    SEO routes
    icon.svg                  Favicon
  components/
    ui/                       Button, section header, wordmark, reveal
    site-header.tsx           Sticky navigation + accessible mobile dialog
    hero.tsx                  Headline, CTAs, system-model panel
    services.tsx              Four services
    work.tsx                  Data-driven case-study grid
    process.tsx               Five-stage process
    about.tsx                 Studio philosophy and principles
    contact.tsx / contact-form.tsx
    site-footer.tsx
  content/
    site.ts                   Copy, navigation, contact details, services
    projects.ts               Case-study data (placeholders by default)
  lib/contact.ts              Shared form constants and state types
```

## Content

Most copy lives in `src/content/site.ts`, so text changes do not require
touching components.

### Selected works

There is **no fabricated client work** in this project. `src/content/projects.ts`
contains three clearly labelled placeholder slots. To publish real work:

1. Replace `title`, `category`, `summary`, `problem`, and `solution` with
   verified facts.
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
error with the studio email address as a fallback. The form never claims a
message was sent when it was not.

No database is used, and inquiry contents are not logged by the app.

## Accessibility and motion

- Semantic landmarks, skip link, visible focus states, labelled form controls.
- Mobile navigation uses native `<dialog>` with focus trapping and Escape.
- Colour contrast is kept at or above WCAG AA for body text.
- Scroll reveals are progressive: content is visible without JavaScript.
- All animation is disabled under `prefers-reduced-motion`.

## SEO

- Canonical URL, Open Graph and Twitter metadata, generated OG image.
- `sitemap.xml`, `robots.txt`, and `ProfessionalService` JSON-LD.
- Domain metadata is centralised in `src/content/site.ts`.

## Deployment

Set `CONTACT_WEBHOOK_URL` in the hosting environment, then run:

```bash
npm run lint
npm run typecheck
npm run build
```

The site is otherwise fully static.
