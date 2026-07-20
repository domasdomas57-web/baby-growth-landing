import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogAppCta from "@/components/BlogAppCta";
import BlogShell from "@/components/BlogShell";
import JsonLd from "@/components/JsonLd";
import { BRAND_NAME } from "@/lib/constants";
import { getSiteUrl } from "@/lib/seo-config";
import { getPublishedArticle, SeoEngineError } from "@/lib/seo-engine";
import {
  estimateReadingTimeMinutes,
  formatReadableDate,
  sanitizeArticleHtml,
} from "@/lib/sanitize-html";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

const ARTICLE_CONTENT_CLASS = [
  "mt-10 max-w-none overflow-hidden break-words rounded-[2rem] border border-slate-200 bg-white px-6 py-8 text-[1.05rem] leading-8 text-slate-700 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:px-10 sm:py-10",
  "[&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-950",
  "[&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-slate-900",
  "[&_p]:my-5 [&_p]:leading-8 [&_p]:text-slate-700",
  "[&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-slate-700",
  "[&_ol]:my-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-slate-700",
  "[&_li]:my-2 [&_li]:pl-1 [&_li]:leading-8",
  "[&_strong]:font-semibold [&_strong]:text-slate-950",
  "[&_a]:font-medium [&_a]:text-sky-700 [&_a]:underline [&_a]:decoration-sky-300 [&_a]:underline-offset-4 hover:[&_a]:text-sky-800",
  "[&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-sky-200 [&_blockquote]:bg-sky-50/60 [&_blockquote]:px-5 [&_blockquote]:py-3 [&_blockquote]:text-slate-700",
  "[&_table]:my-8 [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto [&_table]:border-collapse [&_table]:rounded-xl",
  "[&_thead]:bg-slate-100 [&_th]:border [&_th]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:text-sm [&_th]:font-semibold [&_th]:text-slate-950",
  "[&_td]:border [&_td]:border-slate-200 [&_td]:px-4 [&_td]:py-3 [&_td]:align-top [&_td]:text-sm",
  "[&_img]:my-8 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-2xl [&_img]:border [&_img]:border-slate-200",
].join(" ");

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await getPublishedArticle(slug);
    if (!article) {
      return { title: "Article not found" };
    }

    const siteUrl = getSiteUrl();
    const canonical = `${siteUrl}/blog/${article.slug}`;
    const description = article.meta_description ?? undefined;

    return {
      title: { absolute: article.title },
      description,
      alternates: { canonical },
      openGraph: {
        title: article.title,
        description,
        url: canonical,
        siteName: BRAND_NAME,
        type: "article",
        locale: "en_US",
      },
      twitter: {
        card: "summary_large_image",
        title: article.title,
        description,
      },
    };
  } catch {
    return { title: "Article not found" };
  }
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;

  let article: Awaited<ReturnType<typeof getPublishedArticle>> = null;
  try {
    article = await getPublishedArticle(slug);
  } catch (error) {
    if (error instanceof SeoEngineError && error.status === 404) {
      notFound();
    }
    notFound();
  }

  if (!article) {
    notFound();
  }

  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/blog/${article.slug}`;
  const publishedLabel = formatReadableDate(article.published_at ?? article.created_at);
  const updatedLabel = formatReadableDate(article.updated_at);
  const readingTime = estimateReadingTimeMinutes(article.content_html);
  const safeHtml = sanitizeArticleHtml(article.content_html);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.meta_description,
    datePublished: article.published_at ?? article.created_at,
    dateModified: article.updated_at,
    mainEntityOfPage: canonical,
    publisher: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: siteUrl,
    },
  };

  return (
    <BlogShell>
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <JsonLd data={jsonLd} />

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-sky-800 transition hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
        >
          <span aria-hidden="true">←</span>
          <span>Back to blog</span>
        </Link>

        <header className="mt-6 rounded-[2rem] border border-white/70 bg-white/90 px-6 py-8 shadow-[0_28px_70px_-46px_rgba(90,120,168,0.28)] sm:px-10 sm:py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">{BRAND_NAME}</p>
          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          {article.meta_description ? (
            <p className="mt-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              {article.meta_description}
            </p>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-200 pt-4 text-sm text-slate-500">
            {publishedLabel ? <p>Published {publishedLabel}</p> : null}
            {updatedLabel ? <p>Updated {updatedLabel}</p> : null}
            <p>{readingTime} min read</p>
          </div>
        </header>

        <article
          className={ARTICLE_CONTENT_CLASS}
          dangerouslySetInnerHTML={{ __html: safeHtml }}
        />

        <BlogAppCta placement="blog_article" />
      </main>
    </BlogShell>
  );
}
