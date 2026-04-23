# Uchi Chinyama — Premium Personal Portfolio

A modern, dark, premium Next.js + TypeScript portfolio focused on cybersecurity, secure systems, workflow resilience, and digital trust.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react icons
- Formspree React integration (`@formspree/react`)

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm start
```

## Where to edit personal content and links

Update all profile text, contact details, links, service copy, venture copy, and insights in:

- `lib/site-config.ts`

Key placeholders you can replace later:

- `[PORTFOLIO_DOMAIN]`
- `[GITHUB_URL]`
- `[SHADOW_ROOT_LINK]`
- `[URUU_DEMO_LINK]`
- `[CV_LINK]`

## Formspree

The contact form uses Formspree React `useForm` with ID `xnjlowjp` in:

- `components/forms/contact-form.tsx`

To use a different inbox, replace `formspreeId` in `lib/site-config.ts`.
