"use client";

import { trackEvent } from "@/lib/analytics";
import { APP_STORE_URL, BRAND_NAME, GOOGLE_PLAY_URL } from "@/lib/constants";

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

export default function BlogAppCta({ placement = "blog_article" }: { placement?: string }) {
  return (
    <aside className="mt-12 rounded-[2rem] border border-sky-100/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(236,246,255,0.92))] px-6 py-8 shadow-[0_28px_70px_-46px_rgba(90,120,168,0.28)] sm:px-10 sm:py-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700/80">{BRAND_NAME}</p>
      <p className="mt-3 max-w-xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">
        Track sleep, feeding, diapers, and growth in one calm baby tracker app—built for everyday parents.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEvent("click_appstore", { placement })}
          className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-slate-200/80 bg-white/90 px-5 py-3 text-slate-950 shadow-[0_18px_45px_-30px_rgba(61,89,139,0.5)] backdrop-blur transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 sm:w-auto"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white shadow-sm">
            <AppStoreIcon />
          </span>
          <span className="text-sm font-semibold sm:text-[15px]">App Store</span>
        </a>
        <a
          href={GOOGLE_PLAY_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEvent("click_googleplay", { placement })}
          className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-slate-200/80 bg-white/90 px-5 py-3 text-slate-950 shadow-[0_18px_45px_-30px_rgba(61,89,139,0.5)] backdrop-blur transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 sm:w-auto"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white shadow-sm">
            <GooglePlayIcon />
          </span>
          <span className="text-sm font-semibold sm:text-[15px]">Google Play</span>
        </a>
      </div>
    </aside>
  );
}
