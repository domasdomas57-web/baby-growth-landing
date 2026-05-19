import type { MetadataRoute } from "next";

const BASE_URL = "https://babytrackersoriva.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    {
      path: "",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      path: "/privacy",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      path: "/terms",
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const lastModified = new Date();

  return pages.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}