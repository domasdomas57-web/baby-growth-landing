import { describe, expect, it } from "vitest";
import { sanitizeArticleHtml, stripHtmlToText, estimateReadingTimeMinutes } from "@/lib/sanitize-html";
import { APP_STORE_URL, GOOGLE_PLAY_URL, BRAND_NAME } from "@/lib/constants";

describe("sanitizeArticleHtml", () => {
  it("strips script tags and event handlers", () => {
    const dirty =
      '<p onclick="alert(1)">Hello</p><script>alert(2)</script><a href="javascript:alert(3)">bad</a><a href="/blog">ok</a>';
    const clean = sanitizeArticleHtml(dirty);
    expect(clean).not.toContain("script");
    expect(clean).not.toContain("onclick");
    expect(clean).not.toContain("javascript:");
    expect(clean).toContain('href="/blog"');
    expect(clean).toContain("<p>");
  });

  it("keeps safe article markup", () => {
    const html = "<h2>Title</h2><p>Body <strong>bold</strong></p><ul><li>One</li></ul>";
    const clean = sanitizeArticleHtml(html);
    expect(clean).toContain("<h2>");
    expect(clean).toContain("<strong>");
    expect(clean).toContain("<ul>");
  });
});

describe("reading time helpers", () => {
  it("estimates at least one minute", () => {
    expect(estimateReadingTimeMinutes("<p>Hi</p>")).toBe(1);
    expect(stripHtmlToText("<p>Hello <strong>world</strong></p>")).toBe("Hello world");
  });
});

describe("store CTA constants", () => {
  it("uses real existing store URLs", () => {
    expect(APP_STORE_URL).toContain("apps.apple.com");
    expect(APP_STORE_URL).toContain("6759395777");
    expect(GOOGLE_PLAY_URL).toContain("play.google.com");
    expect(GOOGLE_PLAY_URL).toContain("com.domce23.babygrowthtracker");
    expect(BRAND_NAME).toContain("Soriva");
  });
});
