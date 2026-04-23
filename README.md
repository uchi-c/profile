# Uchi Chinyama — Premium Cybersecurity Portfolio

A production-ready **Next.js + TypeScript + Tailwind CSS** personal portfolio for Uchi Chinyama.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- Formspree React (`@formspree/react`)

## Quick Start
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Build
```bash
npm run build
npm run start
```

## Where to edit personal details and links
Update all profile, venture, and link values in:
- `lib/site-config.ts`

This includes placeholders such as:
- `[PORTFOLIO_DOMAIN]`
- `[GITHUB_URL]`
- `[SHADOW_ROOT_LINK]`
- `[URUU_DEMO_LINK]`
- `[CV_LINK]`

## Contact Form
Formspree is integrated through:
- `components/forms/contact-form.tsx`

Form ID in use:
- `xnjlowjp`
