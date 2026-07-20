import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/constants";
import { getSiteUrl } from "@/lib/seo-config";
import {
  getPublishedArticles,
  type PublicArticleSummary,
} from "@/lib/seo-engine";
import { SITEMAP_SEO_SLUGS } from "@/lib/seoPages";

export const dynamic = "force-dynamic";

function resolveSiteUrl(): string {
  try {
    return getSiteUrl();
  } catch {
    return BASE_URL;
  }
}

function articleLastModified(article: PublicArticleSummary): Date {
  const raw =
    article.published_at || article.updated_at || article.created_at || "";
  const parsed = raw ? new Date(raw) : new Date();
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

function dedupeByUrl(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = resolveSiteUrl();
  const lastModified = new Date();

  const seoEntries: MetadataRoute.Sitemap = SITEMAP_SEO_SLUGS.map((slug) => ({
    url: `${siteUrl}/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: slug === "baby-tracker-app" ? 0.9 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/blog`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.85,
    },
  ];

  try {
    const articles = await getPublishedArticles();
    for (const article of articles) {
      if (!article.slug) continue;
      blogEntries.push({
        url: `${siteUrl}/blog/${article.slug}`,
        lastModified: articleLastModified(article),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  } catch {
    // Keep static pages + /blog index when SSE is temporarily unreachable.
  }

  return dedupeByUrl([
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...seoEntries,
    ...blogEntries,
    {
      url: `${siteUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ]);
}
