"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";
import { SITEMAP_SEO_SLUGS } from "@/lib/seoPages";

export default function Footer({
  messages,
}: {
  messages: {
    brand: string;
    description: string;
    googlePlayCta: string;
    appStoreCta: string;
    formTitle: string;
    formSubtitle: string;
    yourEmailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    sendLabel: string;
    sendingLabel: string;
    sentMessage: string;
    errorMessage: string;
    contactLinePrefix: string;
    email: string;
    emailAria: string;
    copyright: string;
    bottomNote: string;
  };
}) {
  const year = new Date().getFullYear();
  const copyright = messages.copyright.replace("{year}", String(year));

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 bg-[linear-gradient(180deg,#fcfdff_0%,#f6fbff_100%)] text-slate-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-0 h-72 w-72 rounded-full bg-sky-100/80 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-60px] h-72 w-72 rounded-full bg-rose-100/70 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 border-b border-slate-200/80 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-base font-semibold tracking-tight text-slate-950">{messages.brand}</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              {messages.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("click_googleplay", { placement: "footer" })}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_-30px_rgba(61,89,139,0.3)] backdrop-blur transition hover:-translate-y-0.5"
              >
                {messages.googlePlayCta}
              </a>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("click_appstore", { placement: "footer" })}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_-30px_rgba(15,23,42,0.42)] transition hover:-translate-y-0.5"
              >
                {messages.appStoreCta}
              </a>
          </div>
        </div>

        <div className="grid gap-10 pt-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700/70">Contact</p>
            <a
              href={`mailto:${messages.email}`}
              className="mt-3 inline-flex text-base font-semibold text-slate-950 transition hover:text-sky-800"
            >
              {messages.email}
            </a>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">Questions, support, partnerships, or press. We reply by email.</p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700/70">Links</p>
            <div className="flex flex-col gap-3 text-sm text-slate-600">
              <Link href="/blog" className="transition hover:text-slate-950">Blog</Link>
              <Link href="/privacy" className="transition hover:text-slate-950">Privacy Policy</Link>
              <Link href="/terms" className="transition hover:text-slate-950">Terms</Link>
              <a href={`mailto:${messages.email}`} className="transition hover:text-slate-950">Contact</a>
              <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="transition hover:text-slate-950">App Store</a>
              <a href={GOOGLE_PLAY_URL} target="_blank" rel="noreferrer" className="transition hover:text-slate-950">Google Play</a>
              <a href="#top" className="transition hover:text-slate-950">Back to top</a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700/70">Baby tracker guides</p>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              {SITEMAP_SEO_SLUGS.map((slug) => (
                <Link key={slug} href={`/${slug}`} className="transition hover:text-slate-950">
                  {slug.replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700/70">Social</p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/profile.php?id=61587090322816" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-[0_14px_34px_-24px_rgba(61,89,139,0.32)] transition hover:-translate-y-0.5 hover:text-slate-950" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4"><path d="M13.2 21v-8h2.6l.4-3h-3v-1.9c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.5-.1-2.4 0-4 1.5-4 4.2V10H7v3h3v8h3.2Z" /></svg>
              </a>
              <a href="https://www.instagram.com/babygrowthtrackerapp/?hl=en" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-[0_14px_34px_-24px_rgba(61,89,139,0.32)] transition hover:-translate-y-0.5 hover:text-slate-950" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4"><rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" /></svg>
              </a>
              <a href="https://www.tiktok.com/@baby.app" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-[0_14px_34px_-24px_rgba(61,89,139,0.32)] transition hover:-translate-y-0.5 hover:text-slate-950" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4"><path d="M14 3.6c.8 1.3 1.9 2.2 3.4 2.5v2.4c-1.3-.1-2.4-.5-3.4-1.2v6.1A5.3 5.3 0 1 1 9.4 8v2.5a2.8 2.8 0 1 0 2.1 2.8V3.6H14Z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200/80 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{copyright}</p>
          <p>{messages.bottomNote}</p>
        </div>
      </div>
    </footer>
  );
}
