import { beforeEach, describe, expect, it, vi } from "vitest";

const revalidatePath = vi.fn();
const revalidateTag = vi.fn();

vi.mock("next/cache", () => ({
  revalidatePath,
  revalidateTag,
}));

describe("POST /api/revalidate/seo", () => {
  beforeEach(() => {
    vi.resetModules();
    revalidatePath.mockClear();
    revalidateTag.mockClear();
    process.env.SEO_ENGINE_BASE_URL = "http://localhost:3000";
    process.env.SEO_SITE_KEY = "baby-tracker-soriva";
    process.env.SEO_REVALIDATE_SECRET = "test-secret";
    process.env.SITE_URL = "https://babytrackersoriva.com";
  });

  it("returns 401 for unauthorized requests", async () => {
    const { POST } = await import("@/app/api/revalidate/seo/route");
    const response = await POST(
      new Request("http://localhost/api/revalidate/seo", {
        method: "POST",
        headers: { Authorization: "Bearer wrong", "Content-Type": "application/json" },
        body: JSON.stringify({
          siteKey: "baby-tracker-soriva",
          slug: "baby-sleep-tracker-guide",
          action: "published",
        }),
      })
    );
    expect(response.status).toBe(401);
    expect(revalidatePath).not.toHaveBeenCalled();
  });

  it("revalidates index and article on valid request", async () => {
    const { POST } = await import("@/app/api/revalidate/seo/route");
    const response = await POST(
      new Request("http://localhost/api/revalidate/seo", {
        method: "POST",
        headers: {
          Authorization: "Bearer test-secret",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          siteKey: "baby-tracker-soriva",
          slug: "baby-sleep-tracker-guide",
          action: "updated",
        }),
      })
    );

    expect(response.status).toBe(200);
    const json = await response.json();
    expect(json.revalidated).toBe(true);
    expect(revalidateTag).toHaveBeenCalledWith("seo-articles", "max");
    expect(revalidateTag).toHaveBeenCalledWith("seo-article-baby-sleep-tracker-guide", "max");
    expect(revalidatePath).toHaveBeenCalledWith("/blog");
    expect(revalidatePath).toHaveBeenCalledWith("/blog/baby-sleep-tracker-guide");
    expect(revalidatePath).toHaveBeenCalledWith("/sitemap.xml");
  });
});
