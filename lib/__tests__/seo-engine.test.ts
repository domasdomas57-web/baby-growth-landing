import { beforeEach, describe, expect, it, vi } from "vitest";

const mockArticles = [
  {
    id: "1",
    site_key: "baby-tracker-soriva",
    title: "Baby Sleep Tracker Guide",
    slug: "baby-sleep-tracker-guide",
    meta_description: "A calm sleep guide",
    target_keyword: "baby sleep tracker",
    created_at: "2026-07-20T00:00:00.000Z",
    updated_at: "2026-07-20T00:00:00.000Z",
    published_at: "2026-07-20T00:00:00.000Z",
    canonical_url: "https://babytrackersoriva.com/blog/baby-sleep-tracker-guide",
  },
];

describe("seo-engine client", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.unstubAllGlobals();
    process.env.SEO_ENGINE_BASE_URL = "http://localhost:3000";
    process.env.SEO_SITE_KEY = "baby-tracker-soriva";
    process.env.SITE_URL = "https://babytrackersoriva.com";
  });

  it("lists published articles", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({
          success: true,
          articles: mockArticles,
          pagination: { page: 1, pageSize: 50, total: 1 },
        }),
      })
    );

    const { getPublishedArticles } = await import("@/lib/seo-engine");
    const articles = await getPublishedArticles();
    expect(articles).toHaveLength(1);
    expect(articles[0]?.slug).toBe("baby-sleep-tracker-guide");
  });

  it("paginates through all published articles and skips invalid slugs", async () => {
    const page1 = Array.from({ length: 50 }, (_, i) => ({
      ...mockArticles[0],
      id: `p1-${i}`,
      slug: `article-${i}`,
      title: `Article ${i}`,
    }));
    const page2 = [
      {
        ...mockArticles[0],
        id: "p2-0",
        slug: "article-50",
        title: "Article 50",
      },
      {
        ...mockArticles[0],
        id: "bad",
        slug: "",
        title: "Bad",
      },
      {
        ...mockArticles[0],
        id: "dup",
        slug: "article-0",
        title: "Dup",
      },
    ];

    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValueOnce({
          ok: true,
          status: 200,
          json: async () => ({
            success: true,
            articles: page1,
            pagination: { page: 1, pageSize: 50, total: 51 },
          }),
        })
        .mockResolvedValueOnce({
          ok: true,
          status: 200,
          json: async () => ({
            success: true,
            articles: page2,
            pagination: { page: 2, pageSize: 50, total: 51 },
          }),
        })
    );

    const { getPublishedArticles } = await import("@/lib/seo-engine");
    const articles = await getPublishedArticles();
    expect(articles).toHaveLength(51);
    expect(articles.some((article) => !article.slug)).toBe(false);
    expect(articles.filter((article) => article.slug === "article-0")).toHaveLength(1);
  });

  it("returns article detail for published slug", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({
          success: true,
          article: {
            ...mockArticles[0],
            site_id: "site-1",
            content_html: "<h2>Hello</h2><p>World</p>",
            faq: [],
            schema_json: null,
          },
        }),
      })
    );

    const { getPublishedArticle } = await import("@/lib/seo-engine");
    const article = await getPublishedArticle("baby-sleep-tracker-guide");
    expect(article?.title).toBe("Baby Sleep Tracker Guide");
    expect(article?.content_html).toContain("<h2>");
  });

  it("returns null for unknown slug (404)", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 404,
        json: async () => ({ success: false, error: "Article not found" }),
      })
    );

    const { getPublishedArticle } = await import("@/lib/seo-engine");
    const article = await getPublishedArticle("missing-article");
    expect(article).toBeNull();
  });

  it("treats draft/review as inaccessible via 404", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 404,
        json: async () => ({ success: false, error: "Article not found" }),
      })
    );

    const { getPublishedArticle } = await import("@/lib/seo-engine");
    expect(await getPublishedArticle("draft-slug")).toBeNull();
  });
});
