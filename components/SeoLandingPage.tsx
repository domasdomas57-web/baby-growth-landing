import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";
import { faqPageJsonLd } from "@/lib/seo";
import type { SeoPageContent } from "@/lib/seoPages";
import { SEO_PAGE_BY_SLUG } from "@/lib/seoPages";

function AppStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M16.9 13.3c0-2 1.6-3 1.7-3.1-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.8-2.7-.8-1.4 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 7.9.7.9 1.5 1.9 2.6 1.9 1 0 1.4-.7 2.7-.7s1.6.7 2.7.7c1.1 0 1.9-1 2.6-1.9.8-1.2 1.1-2.3 1.1-2.4-.1 0-2.3-.9-2.3-3.7Z" />
      <path d="M14.7 5.4c.6-.7 1-1.7.9-2.7-.9.1-2 .6-2.6 1.4-.6.7-1.1 1.7-.9 2.7 1 0 2-.6 2.6-1.4Z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M3.7 2.7c-.5.5-.7 1.2-.7 2v14.6c0 .8.2 1.5.7 2L13 12 3.7 2.7Z" fill="#34A853" />
      <path d="M14.2 10.8 5 2.1c.5-.1 1.1 0 1.8.4l11.2 6.4-3.8 1.9Z" fill="#4285F4" />
      <path d="M14.2 13.2 18 15.1 6.8 21.5c-.7.4-1.3.5-1.8.4l9.2-8.7Z" fill="#FBBC05" />
      <path d="M19.6 10.1c1 .6 1.4 1.2 1.4 1.9s-.4 1.3-1.4 1.9l-1.6.9-4.1-2.1 4.1-2.1 1.6.9Z" fill="#EA4335" />
    </svg>
  );
}

function StoreButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-slate-200/80 bg-white/90 px-5 py-3 text-slate-950 shadow-[0_18px_45px_-30px_rgba(61,89,139,0.5)] backdrop-blur transition duration-300 hover:-translate-y-0.5 sm:w-auto"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white shadow-sm">
        {icon}
      </span>
      <span className="text-sm font-semibold sm:text-[15px]">{label}</span>
    </a>
  );
}

export default function SeoLandingPage({ content }: { content: SeoPageContent }) {
  const relatedPages = content.relatedSlugs
    .map((slug) => SEO_PAGE_BY_SLUG[slug])
    .filter(Boolean);

  return (
    <main className="relative overflow-hidden text-slate-950">
      <JsonLd data={faqPageJsonLd(content.faqs)} />

      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top_left,rgba(202,227,255,0.95),transparent_42%),radial-gradient(circle_at_top_right,rgba(255,228,239,0.75),transparent_32%),linear-gradient(180deg,#fffefb_0%,#f6fbff_54%,#fbfcff_100%)]" />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-sky-800 transition hover:text-slate-950"
        >
          <Image src="/icon.png" alt="Baby Tracker - Soriva app icon" width={24} height={24} className="rounded-lg" />
          Baby Tracker - Soriva
        </Link>

        <header className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">Baby tracker app</p>
          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
            {content.h1}
          </h1>
          <p className="mt-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg">{content.intro}</p>
        </header>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <StoreButton href={APP_STORE_URL} icon={<AppStoreIcon />} label="Download free — App Store" />
          <StoreButton href={GOOGLE_PLAY_URL} icon={<GooglePlayIcon />} label="Download free — Google Play" />
        </div>

        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-balance text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-4 text-pretty text-base leading-8 text-slate-600">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <section className="mt-14 rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(245,250,255,0.92))] p-6 shadow-[0_28px_70px_-46px_rgba(90,120,168,0.3)] sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Frequently asked questions</h2>
          <div className="mt-6 space-y-6">
            {content.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-base font-semibold text-slate-950">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {relatedPages.length > 0 ? (
          <section className="mt-12">
            <h2 className="text-lg font-semibold text-slate-950">Related baby tracker guides</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 sm:text-base">
              {relatedPages.map((page) => (
                <li key={page.slug}>
                  <Link href={`/${page.slug}`} className="font-medium text-sky-800 transition hover:text-slate-950">
                    {page.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mt-12 rounded-[2rem] border border-sky-100 bg-sky-50/60 p-6 text-center sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700/80">Start tracking free</p>
          <p className="mt-3 text-balance text-xl font-semibold tracking-[-0.03em] text-slate-950">
            No paper notes. No guessing. One simple baby log.
          </p>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-600">
            Track feeds, sleep, diapers, growth, and routines in one calm app. Available on iPhone and Android.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <StoreButton href={APP_STORE_URL} icon={<AppStoreIcon />} label="App Store" />
            <StoreButton href={GOOGLE_PLAY_URL} icon={<GooglePlayIcon />} label="Google Play" />
          </div>
        </section>
      </article>
    </main>
  );
}
