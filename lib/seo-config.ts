/**
 * Server-only config for Soriva SEO Engine integration.
 * Secrets must never use NEXT_PUBLIC_*.
 */

function required(name: string, value: string | undefined): string {
  const trimmed = value?.trim();
  if (!trimmed) {
    throw new Error(
      `Missing required environment variable: ${name}. See .env.example.`
    );
  }
  return trimmed.replace(/\/$/, "");
}

export function getSiteUrl(): string {
  return (
    process.env.SITE_URL?.trim().replace(/\/$/, "") ||
    "https://babytrackersoriva.com"
  );
}

export function getSeoEngineConfig() {
  const baseUrl = required("SEO_ENGINE_BASE_URL", process.env.SEO_ENGINE_BASE_URL);
  const siteKey = required("SEO_SITE_KEY", process.env.SEO_SITE_KEY);

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(siteKey)) {
    throw new Error(`Invalid SEO_SITE_KEY format: ${siteKey}`);
  }

  return { baseUrl, siteKey };
}

export function getSeoRevalidateSecret(): string | null {
  const secret = process.env.SEO_REVALIDATE_SECRET?.trim();
  return secret || null;
}

export const SEO_CACHE_TAG_ARTICLES = "seo-articles";

export function seoArticleTag(slug: string): string {
  return `seo-article-${slug}`;
}
