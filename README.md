# DeepSDM Event 2026 website

Website: https://eceo-epfl.github.io/deepsdm2026/

## Local development

```bash
npm install
npm run dev
```

Deploy website:

```bash
npm run build && npm run deploy  
```

## Content editing runbook

All event updates should be made in `src/content/`.

- Global event settings: `src/content/event/config.json`
- Program items: `src/content/program.json`
- Speakers: `src/content/speakers.json`
- Organizers: `src/content/organizers.json`

The build fails if content does not match schema rules from `src/content/config.ts`.


