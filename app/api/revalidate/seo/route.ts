import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import {
  getSeoEngineConfig,
  getSeoRevalidateSecret,
  SEO_CACHE_TAG_ARTICLES,
  seoArticleTag,
} from "@/lib/seo-config";

export const runtime = "nodejs";

const ACTIONS = new Set(["published", "updated", "unpublished", "deleted"]);

function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

export async function POST(request: Request) {
  const secret = getSeoRevalidateSecret();
  if (!secret) {
    return NextResponse.json({ error: "Revalidation is not configured" }, { status: 503 });
  }

  const auth = request.headers.get("authorization") ?? "";
  const expected = `Bearer ${secret}`;
  if (auth !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const siteKey = typeof payload.siteKey === "string" ? payload.siteKey.trim() : "";
  const slug = typeof payload.slug === "string" ? payload.slug.trim() : "";
  const action = typeof payload.action === "string" ? payload.action.trim() : "";

  let expectedSiteKey: string;
  try {
    expectedSiteKey = getSeoEngineConfig().siteKey;
  } catch {
    return NextResponse.json({ error: "SEO Engine is not configured" }, { status: 503 });
  }

  if (siteKey !== expectedSiteKey) {
    return NextResponse.json({ error: "Invalid siteKey" }, { status: 400 });
  }

  if (!isValidSlug(slug)) {
    return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
  }

  if (!ACTIONS.has(action)) {
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  }

  revalidateTag(SEO_CACHE_TAG_ARTICLES, "max");
  revalidateTag(seoArticleTag(slug), "max");
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/sitemap.xml");

  return NextResponse.json({
    revalidated: true,
    action,
    slug,
    paths: ["/blog", `/blog/${slug}`, "/sitemap.xml"],
  });
}
