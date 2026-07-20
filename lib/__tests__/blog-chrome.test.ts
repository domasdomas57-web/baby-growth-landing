import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";

const root = path.resolve(__dirname, "../..");

describe("blog shell uses real Baby Tracker chrome", () => {
  it("SiteHeader preserves brand and download controls", () => {
    const source = readFileSync(path.join(root, "components/SiteHeader.tsx"), "utf8");
    expect(source).toContain("DownloadDropdown");
    expect(source).toContain("APP_STORE_URL");
    expect(source).toContain("GOOGLE_PLAY_URL");
    expect(source).toContain("sticky top-0");
  });

  it("BlogShell wraps pages with SiteHeader", () => {
    const source = readFileSync(path.join(root, "components/BlogShell.tsx"), "utf8");
    expect(source).toContain("SiteHeader");
    expect(source).toContain('href: "/blog"');
  });

  it("Footer remains shared and includes Blog link", () => {
    const source = readFileSync(path.join(root, "components/Footer.tsx"), "utf8");
    expect(source).toContain('href="/blog"');
    expect(source).toContain("APP_STORE_URL");
    expect(source).toContain("GOOGLE_PLAY_URL");
  });

  it("Blog CTA uses existing store links", () => {
    const source = readFileSync(path.join(root, "components/BlogAppCta.tsx"), "utf8");
    expect(source).toContain("APP_STORE_URL");
    expect(source).toContain("GOOGLE_PLAY_URL");
    expect(APP_STORE_URL).toContain("6759395777");
    expect(GOOGLE_PLAY_URL).toContain("com.domce23.babygrowthtracker");
  });

  it("article page canonical targets babytrackersoriva.com", () => {
    const source = readFileSync(path.join(root, "app/blog/[slug]/page.tsx"), "utf8");
    expect(source).toContain("getSiteUrl");
    expect(source).toContain("/blog/");
    expect(source).toContain("BlogPosting");
    expect(source).toContain("sanitizeArticleHtml");
  });

  it("homepage still uses PremiumLanding", () => {
    const source = readFileSync(path.join(root, "app/page.tsx"), "utf8");
    expect(source).toContain("PremiumLanding");
  });
});
