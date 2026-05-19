"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  LOCALE_COOKIE_NAME,
  SUPPORTED_LOCALES,
  type Locale,
} from "@/i18n/locales";
import type { Messages } from "@/i18n/messages";

const FLAG_ICONS: Record<Locale, string> = {
  en: "gb",
  lt: "lt",
  es: "es",
  fr: "fr",
  de: "de",
  it: "it",
  pt: "pt",
  pl: "pl",
  ru: "ru",
};

function Flag({ code }: { code: string }) {
  return (
    <span
      aria-hidden
      className={`fi fi-${code} block overflow-hidden rounded-full`}
      style={{ width: 24, height: 24, backgroundSize: "cover" }}
    />
  );
}

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
      className="fixed right-4 top-4 z-50 sm:right-6 sm:top-5"
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
          "grid h-11 w-11 place-items-center rounded-full border border-white/80 bg-white/78 text-lg shadow-[0_18px_40px_-24px_rgba(90,120,168,0.34)] backdrop-blur-xl transition " +
          "hover:-translate-y-0.5 hover:bg-white/92 focus:outline-none focus:ring-2 focus:ring-sky-200"
        }
      >
        <Flag code={FLAG_ICONS[locale]} />
      </button>

      {isOpen ? (
        <div
          role="menu"
          aria-label="Language selector"
          className="absolute right-0 mt-3 w-max rounded-[1.4rem] border border-white/80 bg-white/86 p-2 shadow-[0_24px_60px_-34px_rgba(90,120,168,0.34)] backdrop-blur-xl"
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
                      ? "border-sky-200 bg-sky-50"
                      : "border-slate-200 bg-white hover:bg-slate-50")
                  }
                >
                  <Flag code={FLAG_ICONS[l]} />
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
