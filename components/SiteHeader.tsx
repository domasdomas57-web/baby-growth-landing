"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";

export type SiteHeaderNavItem = {
  label: string;
  href: string;
};

export type SiteHeaderDownloadMenu = {
  ariaLabel: string;
  iphone: string;
  googlePlay: string;
};

export type SiteHeaderProps = {
  brandName: string;
  iconAlt: string;
  brandHref?: string;
  navItems: SiteHeaderNavItem[];
  downloadLabel: string;
  downloadMenu: SiteHeaderDownloadMenu;
};

const SOCIAL_LINKS = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@BySoriva",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
        <path
          d="M21.3 7.2a2.9 2.9 0 0 0-2-2C17.6 4.7 12 4.7 12 4.7s-5.6 0-7.3.5a2.9 2.9 0 0 0-2 2A30.7 30.7 0 0 0 2.2 12a30.7 30.7 0 0 0 .5 4.8 2.9 2.9 0 0 0 2 2c1.7.5 7.3.5 7.3.5s5.6 0 7.3-.5a2.9 2.9 0 0 0 2-2 30.7 30.7 0 0 0 .5-4.8 30.7 30.7 0 0 0-.5-4.8Z"
          fill="#FF0033"
        />
        <path d="m10 15.5 5.2-3.5L10 8.5v7Z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587090322816",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
        <path
          d="M13.2 21v-8h2.6l.4-3h-3v-1.9c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.5-.1-2.4 0-4 1.5-4 4.2V10H7v3h3v8h3.2Z"
          fill="#1877F2"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/baby_tracker_app/?hl=en",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
        <defs>
          <linearGradient id="headerInstagramGradient" x1="4" y1="20" x2="20" y2="4" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FEDA75" />
            <stop offset="0.35" stopColor="#FA7E1E" />
            <stop offset="0.6" stopColor="#D62976" />
            <stop offset="0.8" stopColor="#962FBF" />
            <stop offset="1" stopColor="#4F5BD5" />
          </linearGradient>
        </defs>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="url(#headerInstagramGradient)" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.8" stroke="url(#headerInstagramGradient)" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.6" r="1.1" fill="#D62976" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@baby.app",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
        <path
          d="M14.3 4c.8 1.4 1.9 2.4 3.6 2.8v2.4a7.5 7.5 0 0 1-3.6-1v4.9a5 5 0 1 1-5-5h.4V11a2.5 2.5 0 1 0 2 2.4V4h2.6Z"
          fill="#25F4EE"
          opacity="0.95"
        />
        <path
          d="M13.7 3.3c.8 1.4 1.9 2.4 3.6 2.8v2.4a7.5 7.5 0 0 1-3.6-1v4.9a5 5 0 1 1-5-5h.4v2.9a2.5 2.5 0 1 0 2 2.4V3.3h2.6Z"
          fill="#FE2C55"
          opacity="0.9"
        />
        <path
          d="M14 3.6c.8 1.3 1.9 2.2 3.4 2.5v2.4c-1.3-.1-2.4-.5-3.4-1.2v6.1A5.3 5.3 0 1 1 9.4 8v2.5a2.8 2.8 0 1 0 2.1 2.8V3.6H14Z"
          fill="#111111"
        />
      </svg>
    ),
  },
];

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

function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="m5 7.5 5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadDropdown({
  messages,
  buttonLabel,
  variant = "cta",
  className = "",
}: {
  messages: SiteHeaderDownloadMenu;
  buttonLabel: string;
  variant?: "nav" | "cta";
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const menu = menuRef.current;
      if (!menu) return;
      if (event.target instanceof Node && !menu.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const buttonClassName =
    variant === "nav"
      ? "inline-flex items-center gap-1.5 text-sm text-slate-600 transition hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
      : "inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_-24px_rgba(15,23,42,0.55)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500";

  return (
    <div ref={menuRef} className={("relative " + className).trim()}>
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className={buttonClassName}
      >
        <span>{buttonLabel}</span>
        <ChevronDownIcon
          className={(
            "h-4 w-4 transition duration-200 " + (isOpen ? "rotate-180" : "rotate-0")
          ).trim()}
        />
      </button>

      {isOpen ? (
        <div
          role="menu"
          aria-label={messages.ariaLabel}
          className="absolute left-0 top-[calc(100%+0.65rem)] z-30 w-[min(78vw,260px)] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white/92 p-2 shadow-[0_30px_80px_-36px_rgba(61,89,139,0.42)] backdrop-blur-2xl sm:left-auto sm:right-0 sm:top-[calc(100%+0.85rem)] sm:w-[min(90vw,320px)] sm:rounded-[1.8rem] sm:p-2.5"
        >
          <div className="rounded-[1.25rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,250,255,0.96))] p-1.5 sm:rounded-[1.45rem] sm:p-2">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              role="menuitem"
              onClick={() => {
                trackEvent("click_appstore", { placement: `download_menu_${variant}` });
                setIsOpen(false);
              }}
              className="group flex items-center gap-3 rounded-full border-2 border-slate-950 bg-white px-3.5 py-2.5 shadow-[0_16px_34px_-24px_rgba(15,23,42,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_38px_-22px_rgba(15,23,42,0.38)] sm:gap-4 sm:px-4 sm:py-3.5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-slate-950 bg-slate-950 text-white shadow-[0_14px_30px_-22px_rgba(15,23,42,0.55)] sm:h-12 sm:w-12">
                <AppStoreIcon />
              </span>
              <span className="min-w-0 flex-1">
                <span className="mt-1 block text-sm font-semibold text-slate-950">{messages.iphone}</span>
              </span>
            </a>

            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noreferrer"
              role="menuitem"
              onClick={() => {
                trackEvent("click_googleplay", { placement: `download_menu_${variant}` });
                setIsOpen(false);
              }}
              className="group mt-2 flex items-center gap-3 rounded-full border-2 border-slate-950 bg-white px-3.5 py-2.5 shadow-[0_16px_34px_-24px_rgba(15,23,42,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_38px_-22px_rgba(15,23,42,0.38)] sm:gap-4 sm:px-4 sm:py-3.5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-slate-950 bg-slate-950 text-white shadow-[0_14px_30px_-22px_rgba(15,23,42,0.55)] sm:h-12 sm:w-12">
                <GooglePlayIcon />
              </span>
              <span className="min-w-0 flex-1">
                <span className="mt-1 block text-sm font-semibold text-slate-950">{messages.googlePlay}</span>
              </span>
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function NavLink({ href, label }: SiteHeaderNavItem) {
  const className =
    "transition hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 rounded-sm";

  if (href.startsWith("#") || href.startsWith("http")) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function SiteHeader({
  brandName,
  iconAlt,
  brandHref = "/",
  navItems,
  downloadLabel,
  downloadMenu,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/72 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex items-center justify-between gap-3 pr-14 sm:pr-0">
          {brandHref.startsWith("#") ? (
            <a
              href={brandHref}
              className="inline-flex items-center gap-3 text-sm font-semibold tracking-tight text-slate-950"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#dff1ff,#fff4f8)] shadow-[0_14px_30px_-20px_rgba(109,142,191,0.55)] ring-1 ring-sky-100">
                <Image src="/icon.png" alt={iconAlt} width={28} height={28} className="rounded-xl" />
              </span>
              <span>{brandName}</span>
            </a>
          ) : (
            <Link
              href={brandHref}
              className="inline-flex items-center gap-3 text-sm font-semibold tracking-tight text-slate-950"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#dff1ff,#fff4f8)] shadow-[0_14px_30px_-20px_rgba(109,142,191,0.55)] ring-1 ring-sky-100">
                <Image src="/icon.png" alt={iconAlt} width={28} height={28} className="rounded-xl" />
              </span>
              <span>{brandName}</span>
            </Link>
          )}
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-sm text-slate-600 md:flex">
          {navItems.map((item) => (
            <NavLink key={`${item.label}-${item.href}`} href={item.href} label={item.label} />
          ))}
          <DownloadDropdown messages={downloadMenu} buttonLabel={downloadLabel} variant="cta" />
        </nav>

        <div className="absolute right-16 hidden items-center gap-2 md:flex lg:right-20">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.name}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e4dbd1]/95 shadow-[0_18px_38px_-24px_rgba(87,72,58,0.22)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[#ddd1c4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 md:hidden">
          <DownloadDropdown messages={downloadMenu} buttonLabel={downloadLabel} variant="cta" />
          <div className="ml-auto flex items-center gap-1.5">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={`mobile-${item.name}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e4dbd1]/95 shadow-[0_14px_30px_-22px_rgba(87,72,58,0.24)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[#ddd1c4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
