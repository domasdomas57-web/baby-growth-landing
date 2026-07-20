# Baby Tracker Soriva × Soriva SEO Engine (SSE) blog integration

## Local development

SSE and this website both default to port 3000. Run them on different ports:

```bash
# Terminal A — Soriva SEO Engine
cd "Soriva Seo Engine/soriva-seo-engine"
npm run dev
# http://localhost:3000

# Terminal B — Baby Tracker website
cd baby-growth-landing
cp .env.example .env.local   # if needed
npm run dev -- -p 3001
# http://localhost:3001
```

Required `.env.local` values:

```bash
SITE_URL=https://babytrackersoriva.com
SEO_ENGINE_BASE_URL=http://localhost:3000
SEO_SITE_KEY=baby-tracker-soriva
SEO_REVALIDATE_SECRET=local-dev-revalidate-secret
```

Local URLs to verify:

- http://localhost:3001/blog
- http://localhost:3001/blog/baby-sleep-tracker-guide
- http://localhost:3001/sitemap.xml
- http://localhost:3001/robots.txt

## Production (Vercel)

Set the same env vars in the Vercel project (Production + Preview):

| Variable | Example |
|----------|---------|
| `SITE_URL` | `https://babytrackersoriva.com` |
| `SEO_ENGINE_BASE_URL` | `https://YOUR-SSE-DOMAIN` |
| `SEO_SITE_KEY` | `baby-tracker-soriva` |
| `SEO_REVALIDATE_SECRET` | long random secret |

In SSE Admin → site `baby-tracker-soriva`:

- `integration_type`: `custom_nextjs`
- `revalidate_url`: `https://babytrackersoriva.com/api/revalidate/seo`
- `revalidate_secret`: same as `SEO_REVALIDATE_SECRET`

## Routes

| Path | Purpose |
|------|---------|
| `/blog` | Published article index |
| `/blog/[slug]` | Published article |
| `/api/revalidate/seo` | SSE webhook (Bearer secret) |

Canonical URLs always use `SITE_URL` / `https://babytrackersoriva.com` — never the SSE hosted-blog URL.
