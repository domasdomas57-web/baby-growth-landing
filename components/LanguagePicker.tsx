"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const supportedLocales = useMemo(
    () => SUPPORTED_LOCALES as readonly Locale[],
    []
  );

  const setLocale = useCallback((next: Locale) => {
    if (next === locale) {
      setIsOpen(false);
      return;
    }
    const maxAge = 60 * 60 * 24 * 365; // 1 year
    document.cookie = `${LOCALE_COOKIE_NAME}=${next}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
    window.location.reload();
  }, [locale]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const onPointerDown = (e: PointerEvent) => {
      const container = containerRef.current;
      if (!container) return;
      if (e.target instanceof Node && !container.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6"
    >
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={
          messagesByLocale[locale]?.languageName ?? "Select language"
        }
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className={
          "grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-slate-950/40 text-lg shadow-lg backdrop-blur transition " +
          "hover:border-white/20 hover:bg-slate-950/55 focus:outline-none focus:ring-2 focus:ring-white/25"
        }
      >
        <span aria-hidden className="leading-none">
          {FLAGS[locale]}
        </span>
      </button>

      {isOpen ? (
        <div
          role="menu"
          aria-label="Language selector"
          className="absolute right-0 mt-3 w-max rounded-2xl border border-white/10 bg-slate-950/70 p-2 shadow-2xl backdrop-blur"
        >
          <div className="grid grid-cols-3 gap-2">
            {supportedLocales.map((l) => {
              const isActive = l === locale;
              const label = messagesByLocale[l]?.languageName ?? l;
              return (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLocale(l)}
                  aria-label={label}
                  title={label}
                  role="menuitem"
                  className={
                    "grid h-10 w-10 place-items-center rounded-full border text-base shadow-sm transition " +
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
        </div>
      ) : null}
    </div>
  );
}
