/**
 * Typed server-side client for Soriva SEO Engine public article APIs.
 * Never connect this site to SSE Supabase directly.
 */

import "server-only";

import {
  getSeoEngineConfig,
  SEO_CACHE_TAG_ARTICLES,
  seoArticleTag,
} from "@/lib/seo-config";

export type PublicSitePayload = {
  key: string;
  name: string;
  url: string;
  brand_name: string | null;
  default_language: string;
};

export type PublicArticleSummary = {
  id: string;
  site_key: string;
  title: string;
  slug: string;
  meta_description: string | null;
  target_keyword: string;
  created_at: string;
  updated_at: string;
  published_at: string | null;
  canonical_url: string;
};

export type PublicArticleDetail = PublicArticleSummary & {
  site_id: string;
  content_html: string;
  faq: Array<{ question: string; answer: string }>;
  schema_json: Record<string, unknown> | null;
};

export class SeoEngineError extends Error {
  constructor(
    message: string,
    public readonly status?: number
  ) {
    super(message);
    this.name = "SeoEngineError";
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function asString(value: unknown): string | null {
  return typeof value === "string" ? value : null;
}

const ARTICLE_SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ARTICLES_PAGE_SIZE = 50;
const ARTICLES_MAX_PAGES = 100;

export function isValidArticleSlug(slug: string): boolean {
  return ARTICLE_SLUG_RE.test(slug);
}

function parseSummary(raw: unknown): PublicArticleSummary | null {
  if (!isRecord(raw)) return null;
  const id = asString(raw.id)?.trim() || null;
  const site_key = asString(raw.site_key)?.trim() || null;
  const title = asString(raw.title)?.trim() || null;
  const slug = asString(raw.slug)?.trim() || null;
  if (!id || !site_key || !title || !slug || !isValidArticleSlug(slug)) return null;

  return {
    id,
    site_key,
    title,
    slug,
    meta_description: asString(raw.meta_description),
    target_keyword: asString(raw.target_keyword) ?? "",
    created_at: asString(raw.created_at) ?? "",
    updated_at: asString(raw.updated_at) ?? "",
    published_at: asString(raw.published_at),
    canonical_url: asString(raw.canonical_url) ?? "",
  };
}

function parseDetail(raw: unknown): PublicArticleDetail | null {
  const summary = parseSummary(raw);
  if (!summary || !isRecord(raw)) return null;
  const content_html = asString(raw.content_html);
  if (!content_html) return null;

  const faqRaw = raw.faq;
  const faq = Array.isArray(faqRaw)
    ? faqRaw
        .filter(isRecord)
        .map((item) => ({
          question: asString(item.question) ?? "",
          answer: asString(item.answer) ?? "",
        }))
        .filter((item) => item.question && item.answer)
    : [];

  return {
    ...summary,
    site_id: asString(raw.site_id) ?? "",
    content_html,
    faq,
    schema_json: isRecord(raw.schema_json) ? raw.schema_json : null,
  };
}

async function fetchJson(url: string, tags: string[]): Promise<unknown> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);

  let response: Response;
  try {
    response = await fetch(url, {
      next: { tags, revalidate: 60 },
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Network error";
    throw new SeoEngineError(`SEO Engine unreachable: ${message}`);
  } finally {
    clearTimeout(timeout);
  }

  let body: unknown = null;
  try {
    body = await response.json();
  } catch {
    body = null;
  }

  if (!response.ok) {
    throw new SeoEngineError(
      `SEO Engine request failed (${response.status})`,
      response.status
    );
  }

  return body;
}

export async function getPublishedArticles(): Promise<PublicArticleSummary[]> {
  const { baseUrl, siteKey } = getSeoEngineConfig();
  const collected: PublicArticleSummary[] = [];
  const seenSlugs = new Set<string>();
  let page = 1;
  let total = Number.POSITIVE_INFINITY;

  while (page <= ARTICLES_MAX_PAGES && collected.length < total) {
    const url = `${baseUrl}/api/public/sites/${siteKey}/articles?page=${page}&pageSize=${ARTICLES_PAGE_SIZE}`;
    const body = await fetchJson(url, [SEO_CACHE_TAG_ARTICLES]);

    if (!isRecord(body) || body.success !== true || !Array.isArray(body.articles)) {
      throw new SeoEngineError("Invalid articles list response from SEO Engine");
    }

    const pageArticles = body.articles
      .map(parseSummary)
      .filter((article): article is PublicArticleSummary => article !== null);

    for (const article of pageArticles) {
      if (seenSlugs.has(article.slug)) continue;
      seenSlugs.add(article.slug);
      collected.push(article);
    }

    const pagination = isRecord(body.pagination) ? body.pagination : null;
    const reportedTotal = pagination ? Number(pagination.total) : NaN;
    if (Number.isFinite(reportedTotal)) {
      total = reportedTotal;
    } else if (pageArticles.length < ARTICLES_PAGE_SIZE) {
      total = collected.length;
    }

    if (pageArticles.length === 0 || pageArticles.length < ARTICLES_PAGE_SIZE) {
      break;
    }

    page += 1;
  }

  return collected;
}

/**
 * Returns a published article or null when missing / not published (404).
 * Throws SeoEngineError for network or server failures.
 */
export async function getPublishedArticle(
  slug: string
): Promise<PublicArticleDetail | null> {
  if (!isValidArticleSlug(slug)) {
    return null;
  }

  const { baseUrl, siteKey } = getSeoEngineConfig();
  const url = `${baseUrl}/api/public/sites/${siteKey}/articles/${slug}`;

  try {
    const body = await fetchJson(url, [SEO_CACHE_TAG_ARTICLES, seoArticleTag(slug)]);
    if (!isRecord(body) || body.success !== true) {
      throw new SeoEngineError("Invalid article response from SEO Engine");
    }
    const article = parseDetail(body.article);
    if (!article) {
      throw new SeoEngineError("Article payload failed validation");
    }
    return article;
  } catch (error) {
    if (error instanceof SeoEngineError && error.status === 404) {
      return null;
    }
    throw error;
  }
}
