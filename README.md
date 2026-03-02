# DeepSDM Event 2026 website

Static event website built with Astro and deployed on Netlify.

## Stack

- Astro (static output)
- Netlify hosting/CDN
- Content collections for event data

## Local development

```bash
npm install
npm run dev
```

Build check:

```bash
npm run build
```

## Content editing runbook

All event updates should be made in `src/content/`.

- Global event settings: `src/content/event/config.json`
- Program items: `src/content/program/*.json`
- Speakers: `src/content/speakers/*.json`
- Organizers: `src/content/organizers/*.json`
- FAQ: `src/content/faq/*.json`

The build fails if content does not match schema rules from `src/content/config.ts`.

## Routes

- `/` main landing page
- `/code-of-conduct`
- `/privacy`

## Deployment

- Netlify build command: `npm run build`
- Publish directory: `dist`
- `netlify.toml` includes base security headers
- GitHub Action in `.github/workflows/ci.yml` verifies pull requests with `npm ci` + `npm run build`
