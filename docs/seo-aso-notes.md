# SEO & ASO implementation notes

## Changes made (July 2026)

### Homepage (`PremiumLanding`)
- **Hero** rewritten for clarity: feeds, sleep, diapers, doctor reports, caregivers; CTA “Download free” + store availability line.
- **Doctor report section** added after hero with CTA band.
- **Built by a parent** section added with authentic founder story angle.
- **Trust block** updated: no fake ratings, no “millions of parents”; realistic bullets (built by parent, calm design, iPhone/Android, privacy, AI disclaimer).
- **AI disclaimer** on AI Insights feature + legal pages.
- **SEO content section** with natural keyword coverage (baby tracker app, newborn tracker, feeding/sleep/diaper trackers, caregiver sync, pediatrician report).
- **Download CTAs** at hero, after doctor report, after features grid, and final CTA.
- **Reviews** softened to “early parent feedback” without fake names posing as mass social proof.
- **Images**: lazy loading on below-fold screenshots; hero keeps `priority`.

### Technical SEO
- Unique `title` / `meta description` / `canonical` / OpenGraph / Twitter per page via `buildPageMetadata()`.
- JSON-LD: `WebSite`, `Organization`, `MobileApplication` (layout); `FAQPage` on homepage + each SEO landing page.
- Apple Smart App Banner: `apple-itunes-app` app-id=6759395777.
- `robots.ts` → allows crawl + sitemap URL.
- `sitemap.ts` → homepage, 7 SEO pages, privacy, terms.
- Fonts: `display: "swap"` on Geist fonts.
- Footer links: Privacy, Terms, Contact, App Store, Google Play, SEO guide pages.

### Legal
- `/privacy` expanded: website analytics, app/account/baby data, crash data, AI handling, deletion requests, children/baby sensitivity, no selling personal data.
- `/terms` expanded: informational purpose, no medical advice, AI disclaimer, Apple/Google subscriptions & refunds, features may change, contact.

### New SEO landing pages (English, USA focus)
| URL | Focus |
|-----|--------|
| `/baby-feeding-tracker` | Breastfeeding, bottle, pumping, totals, pediatrician context |
| `/baby-sleep-tracker` | Naps, night sleep, wake windows, patterns |
| `/diaper-tracker` | Wet/dirty counts, newborn context |
| `/newborn-tracker` | All-in-one newborn chaos |
| `/baby-growth-tracker` | Weight, height, head circumference |
| `/baby-tracker-doctor-report` | Export reports, pediatrician visits |
| `/baby-tracker-for-caregivers` | Family/nanny/grandparent sync |

Each page includes: unique metadata, H1, ~600–900 words, FAQ (5 questions), FAQPage JSON-LD, internal links, download CTAs.

---

## Keywords covered

**Primary (homepage + guides):**
baby tracker, baby tracker app, newborn tracker, baby feeding tracker, baby sleep tracker, diaper tracker, baby growth tracker, baby routine tracker, baby log, baby log app, breastfeeding tracker, caregiver sync, family baby tracker, pediatrician report, doctor report, baby care tracker, baby tracker app for parents.

**Secondary / long-tail:**
wake windows, pumping log, wet diapers, doctor-ready export, built by a parent, calm baby tracking.

---

## Files added

- `lib/constants.ts` — URLs, app ID, contact email
- `lib/seo.ts` — metadata helper, JSON-LD builders
- `lib/seoPages.ts` — SEO page content
- `components/JsonLd.tsx`
- `components/SeoLandingPage.tsx`
- `app/[slug]/page.tsx` — dynamic SEO routes
- `docs/seo-aso-notes.md` (this file)
- `docs/app-store-aso-copy.md`

---

## Manual follow-up (required)

### Google Search Console
1. Verify property `babytrackersoriva.com` (DNS or HTML tag).
2. Submit sitemap: `https://babytrackersoriva.com/sitemap.xml`
3. Request indexing for homepage + new SEO URLs after deploy.
4. Monitor Coverage / Page indexing for `/baby-*` routes.

### Bing Webmaster Tools
1. Add site and verify.
2. Submit same sitemap URL.

### App Store Connect
1. Update subtitle, promotional text, keywords using `docs/app-store-aso-copy.md`.
2. A/B test screenshots with headlines from ASO doc.
3. Confirm app-id `6759395777` matches Smart App Banner (already set in layout metadata).
4. **TODO:** Confirm live App Store rating before adding star/rating copy to website (currently omitted intentionally).

### Google Play Console
1. Update short + full description from ASO doc.
2. Test custom store listing / screenshot experiments.
3. Align package `com.domce23.babygrowthtracker` links site-wide.

### Reviews & trust
1. Collect genuine App Store / Play reviews from early users.
2. Only add numeric ratings to the site after verifying live store data.
3. Replace “Early parent feedback” quotes with real attributed reviews when available (with permission).

### Performance
1. Run Lighthouse on production after deploy (mobile + desktop).
2. **TODO:** Compress `/landing/*.png` screenshots if LCP > 2.5s (assets not re-encoded in this pass).
3. Consider WebP/AVIF variants for landing screenshots in a future pass.

### Analytics
1. Confirm GA4 events for `click_appstore` / `click_googleplay` by placement (hero, after_doctor_report, after_features, final_cta).
2. Add Search Console ↔ GA4 linking.

### Content
1. Non-English locales still inherit English SEO sections for new homepage blocks via `...en` spread — translate when ready for LT/ES/FR markets.
2. Add Open Graph image (`og:image`) — **TODO:** create 1200×630 branded share image and add to metadata.

---

## Local verification

```bash
npm install
npm run dev
# Open http://localhost:3000
npm run lint
npm run build
```

Check:
- `/` hero + new sections
- `/baby-feeding-tracker` (and other SEO slugs)
- `/privacy`, `/terms`
- View source: canonical, JSON-LD, apple-itunes-app meta
- `/sitemap.xml`, `/robots.txt`
