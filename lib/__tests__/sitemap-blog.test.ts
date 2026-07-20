import { beforeEach, describe, expect, it, vi } from "vitest";

describe("sitemap blog inclusion", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.unstubAllGlobals();
    process.env.SEO_ENGINE_BASE_URL = "http://localhost:3000";
    process.env.SEO_SITE_KEY = "baby-tracker-soriva";
    process.env.SITE_URL = "https://babytrackersoriva.com";
  });

  it("includes /blog and published article URLs", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({
          success: true,
          articles: [
            {
              id: "1",
              site_key: "baby-tracker-soriva",
              title: "Guide",
              slug: "baby-sleep-tracker-guide",
              meta_description: "desc",
              target_keyword: "kw",
              created_at: "2026-01-01T00:00:00.000Z",
              updated_at: "2026-02-01T00:00:00.000Z",
              published_at: "2026-03-01T00:00:00.000Z",
              canonical_url: "https://babytrackersoriva.com/blog/baby-sleep-tracker-guide",
            },
            {
              id: "2",
              site_key: "baby-tracker-soriva",
              title: "Bad",
              slug: "",
              meta_description: null,
              target_keyword: "kw",
              created_at: "2026-01-01T00:00:00.000Z",
              updated_at: "2026-01-01T00:00:00.000Z",
              published_at: "2026-01-01T00:00:00.000Z",
              canonical_url: "",
            },
            {
              id: "1-dup",
              site_key: "baby-tracker-soriva",
              title: "Guide Dup",
              slug: "baby-sleep-tracker-guide",
              meta_description: "desc",
              target_keyword: "kw",
              created_at: "2026-01-01T00:00:00.000Z",
              updated_at: "2026-01-01T00:00:00.000Z",
              published_at: "2026-01-01T00:00:00.000Z",
              canonical_url: "https://babytrackersoriva.com/blog/baby-sleep-tracker-guide",
            },
          ],
          pagination: { page: 1, pageSize: 50, total: 3 },
        }),
      })
    );

    const sitemap = (await import("@/app/sitemap")).default;
    const entries = await sitemap();
    const urls = entries.map((entry) => entry.url);
    const articleEntry = entries.find(
      (entry) => entry.url === "https://babytrackersoriva.com/blog/baby-sleep-tracker-guide"
    );

    expect(urls).toContain("https://babytrackersoriva.com/");
    expect(urls).toContain("https://babytrackersoriva.com/blog");
    expect(urls).toContain("https://babytrackersoriva.com/blog/baby-sleep-tracker-guide");
    expect(urls).toContain("https://babytrackersoriva.com/privacy");
    expect(urls.filter((url) => url.endsWith("/blog/baby-sleep-tracker-guide"))).toHaveLength(1);
    expect(articleEntry?.changeFrequency).toBe("weekly");
    expect(articleEntry?.priority).toBe(0.7);
    expect(articleEntry?.lastModified).toEqual(new Date("2026-03-01T00:00:00.000Z"));
    expect(urls.every((url) => !url.includes("localhost"))).toBe(true);
  });

  it("still includes /blog when SSE is unreachable (excludes unpublished)", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("offline"))
    );

    const sitemap = (await import("@/app/sitemap")).default;
    const entries = await sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).toContain("https://babytrackersoriva.com/blog");
    expect(urls.some((url) => url.includes("/blog/"))).toBe(false);
  });
});

describe("canonical helpers", () => {
  it("points canonicals at babytrackersoriva.com", async () => {
    process.env.SITE_URL = "https://babytrackersoriva.com";
    vi.resetModules();
    const { getSiteUrl } = await import("@/lib/seo-config");
    expect(getSiteUrl()).toBe("https://babytrackersoriva.com");
  });
});
