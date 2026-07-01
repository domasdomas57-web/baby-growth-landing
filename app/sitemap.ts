import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/constants";
import { SITEMAP_SEO_SLUGS } from "@/lib/seoPages";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const seoEntries: MetadataRoute.Sitemap = SITEMAP_SEO_SLUGS.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: slug === "baby-tracker-app" ? 0.9 : 0.8,
  }));

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...seoEntries,
    {
      url: `${BASE_URL}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
