import type { Metadata } from "next";
import Link from "next/link";
import BlogShell from "@/components/BlogShell";
import { buildPageMetadata } from "@/lib/seo";
import { getPublishedArticles, SeoEngineError } from "@/lib/seo-engine";
import { formatReadableDate } from "@/lib/sanitize-html";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildPageMetadata({
  title: "Baby Tracker Blog | Sleep, Feeding & Parenting Guides – Soriva",
  description:
    "Practical guides for baby sleep, feeding, diapers, and daily routines from Baby Tracker – Soriva.",
  path: "/blog",
});

export default async function BlogIndexPage() {
  let articles: Awaited<ReturnType<typeof getPublishedArticles>> = [];
  let loadError: string | null = null;

  try {
    articles = await getPublishedArticles();
  } catch (error) {
    loadError =
      error instanceof SeoEngineError
        ? "Articles are temporarily unavailable. Please try again soon."
        : "Articles are temporarily unavailable. Please try again soon.";
  }

  return (
    <BlogShell>
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">Resources</p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
            Baby Tracker blog
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">
            Calm, practical guides on newborn sleep, feeding, diapers, growth, and everyday baby care.
          </p>
        </header>

        {loadError ? (
          <p className="mt-12 rounded-[1.5rem] border border-amber-100 bg-amber-50/80 px-5 py-4 text-sm leading-7 text-amber-950">
            {loadError}
          </p>
        ) : null}

        {!loadError && articles.length === 0 ? (
          <div className="mt-12 rounded-[2rem] border border-white/70 bg-white/90 px-6 py-10 text-center shadow-[0_28px_70px_-46px_rgba(90,120,168,0.28)]">
            <p className="text-base font-semibold text-slate-950">No published articles yet</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              New guides will appear here once they are published.
            </p>
          </div>
        ) : null}

        {articles.length > 0 ? (
          <ul className="mt-12 space-y-5">
            {articles.map((article) => {
              const published = formatReadableDate(article.published_at ?? article.created_at);
              return (
                <li key={article.id}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="block rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,249,255,0.92))] p-6 shadow-[0_28px_70px_-46px_rgba(90,120,168,0.28)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 sm:p-8"
                  >
                    <h2 className="text-balance text-xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-2xl">
                      {article.title}
                    </h2>
                    {article.meta_description ? (
                      <p className="mt-3 text-pretty text-sm leading-7 text-slate-600 sm:text-base">
                        {article.meta_description}
                      </p>
                    ) : null}
                    {published ? (
                      <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                        {published}
                      </p>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </main>
    </BlogShell>
  );
}
