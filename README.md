# Keweenaw Now — Astro Scaffold (MVP)

Fast, factual, hyper‑local updates for the Keweenaw. Built with **Astro** (content-first), minimal JS, and accessibility by default.

## Features (MVP)
- **Live Updates feed** — reverse‑chronological, timestamped items with source links.
- **Events** — pulls events from Airtable (or a local JSON fallback); renders a weekly/month view.
- **Articles** — simple posts with a **Sources** box and **Corrections** log.
- **PWA-ready** — manifest + lightweight service worker scaffold.
- **Performance & a11y** — typography scale, high contrast, semantic HTML.

## Quick Start
1) Install Node 18+
2) `npm install`
3) Copy `.env.example` to `.env` and fill in Airtable keys (optional — JSON fallback works without).
4) `npm run dev` → http://localhost:4321

## ENV
- `AIRTABLE_API_KEY` — your API key
- `AIRTABLE_BASE_ID` — base with Events table
- `AIRTABLE_EVENTS_TABLE` — defaults to `Events`

## Structure
```
src/
  components/
    LiveFeed.astro
    EventList.astro
    ArticleMeta.astro
  lib/
    airtable.ts
    types.ts
    sample-events.json
    live.json
  pages/
    index.astro
    events.astro
    article/[slug].astro
  styles.css
public/
  manifest.webmanifest
  sw.js
```

## Content model
- **Live item**: { id, ts (ISO string), title, summary, sourceUrl }
- **Event**: { id, title, start, end, location, url, source }
- **Article**: markdown or MDX (future). For MVP, use hardcoded examples.

## Deploy
- Netlify or Vercel. Includes `netlify.toml` example.

## License
MIT — build something good for your neighbors.