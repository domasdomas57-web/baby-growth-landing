"use client";

import { useCallback } from "react";
import {
  LOCALE_COOKIE_NAME,
  SUPPORTED_LOCALES,
  type Locale,
} from "@/i18n/locales";
import type { Messages } from "@/i18n/messages";

const FLAGS: Record<Locale, string> = {
  en: "🇬🇧",
  lt: "🇱🇹",
  es: "🇪🇸",
  fr: "🇫🇷",
  de: "🇩🇪",
  it: "🇮🇹",
  pt: "🇵🇹",
  pl: "🇵🇱",
  ru: "🇷🇺",
};

export default function LanguagePicker({
  locale,
  messagesByLocale,
}: {
  locale: Locale;
  messagesByLocale: Record<Locale, Pick<Messages, "languageName">>;
}) {
  const setLocale = useCallback((next: Locale) => {
    const maxAge = 60 * 60 * 24 * 365; // 1 year
    document.cookie = `${LOCALE_COOKIE_NAME}=${next}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
    window.location.reload();
  }, []);

  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/40 p-2 backdrop-blur sm:right-6 sm:top-6">
      {(SUPPORTED_LOCALES as readonly Locale[]).map((l) => {
        const isActive = l === locale;
        const label = messagesByLocale[l]?.languageName ?? l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-label={label}
            title={label}
            className={
              "grid h-9 w-9 place-items-center rounded-full border text-base shadow-sm transition " +
              (isActive
                ? "border-white/30 bg-white/10"
                : "border-white/10 bg-white/[0.03] hover:bg-white/[0.07]")
            }
          >
            <span aria-hidden className="leading-none">
              {FLAGS[l]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
