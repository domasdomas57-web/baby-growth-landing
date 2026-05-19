"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import type { PremiumLandingMessages } from "@/i18n/premiumLanding";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.domce23.babygrowthtracker&hl=en";

const APP_STORE_URL =
  "https://apps.apple.com/lt/app/baby-tracker-ai-soriva/id6759395777";

const SCREENSHOT_ASSETS = {
  main: {
    src: "/landing/main.png",
    alt: "Main overview screen in Baby Tracker",
  },
  notification: {
    src: "/landing/notification.png",
    alt: "Notification and reminder screen in Baby Tracker",
  },
  caregivers: {
    src: "/landing/caregivers.png",
    alt: "Caregivers collaboration screen in Baby Tracker",
  },
  timeline: {
    src: "/landing/timeline.png",
    alt: "Daily timeline screen in Baby Tracker",
  },
  daySchedule: {
    src: "/landing/day-schedule.png",
    alt: "Day schedule and wake window screen in Baby Tracker",
  },
  diapers: {
    src: "/landing/diapers.png",
    alt: "Diaper tracking screen in Baby Tracker",
  },
  growth: {
    src: "/landing/growth.png",
    alt: "Growth tracking screen in Baby Tracker",
  },
  temperature: {
    src: "/landing/temperature.png",
    alt: "Temperature tracking screen in Baby Tracker",
  },
  widgets: {
    src: "/landing/widgets.png",
    alt: "Home screen widgets in Baby Tracker",
  },
  insights: {
    src: "/landing/ai-insights.png",
    alt: "AI insights screen in Baby Tracker",
  },
} as const;

const FEATURE_SECTION_ASSETS = [
  { image: SCREENSHOT_ASSETS.caregivers.src, alt: SCREENSHOT_ASSETS.caregivers.alt, reverse: false },
  { image: SCREENSHOT_ASSETS.timeline.src, alt: SCREENSHOT_ASSETS.timeline.alt, reverse: true },
  { image: SCREENSHOT_ASSETS.daySchedule.src, alt: SCREENSHOT_ASSETS.daySchedule.alt, reverse: false },
  { image: SCREENSHOT_ASSETS.insights.src, alt: SCREENSHOT_ASSETS.insights.alt, reverse: true },
  { image: SCREENSHOT_ASSETS.widgets.src, alt: SCREENSHOT_ASSETS.widgets.alt, reverse: false },
] as const;

const EXTRA_SCREENSHOT_ASSETS = [
  { image: SCREENSHOT_ASSETS.growth.src, alt: SCREENSHOT_ASSETS.growth.alt },
  { image: SCREENSHOT_ASSETS.temperature.src, alt: SCREENSHOT_ASSETS.temperature.alt },
  { image: SCREENSHOT_ASSETS.diapers.src, alt: SCREENSHOT_ASSETS.diapers.alt },
] as const;

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

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4">
          <path d="m10 1.8 2.53 5.12 5.65.82-4.09 3.99.96 5.63L10 14.68l-5.05 2.66.96-5.63L1.82 7.74l5.65-.82L10 1.8Z" />
        </svg>
      ))}
    </div>
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
  messages: PremiumLandingMessages["downloadMenu"];
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
      ? "inline-flex items-center gap-1.5 text-sm text-slate-600 transition hover:text-slate-950"
      : "inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_-24px_rgba(15,23,42,0.55)] transition hover:-translate-y-0.5";

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
            "h-4 w-4 transition duration-200 " +
            (isOpen ? "rotate-180" : "rotate-0")
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

function StoreButton({
  href,
  icon,
  label,
  eventName,
  eventPlacement,
  className = "",
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  eventName: Parameters<typeof trackEvent>[0];
  eventPlacement: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent(eventName, { placement: eventPlacement })}
      className={(
        "group inline-flex w-full items-center justify-center gap-3 rounded-full border border-slate-200/80 bg-white/90 px-5 py-3 text-slate-950 shadow-[0_18px_45px_-30px_rgba(61,89,139,0.5)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_55px_-30px_rgba(61,89,139,0.55)] sm:w-auto sm:justify-start " +
        className
      ).trim()}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white shadow-sm">
        {icon}
      </span>
      <span className="text-sm font-semibold leading-none sm:text-[15px]">
        {label}
      </span>
    </a>
  );
}

function DeviceFrame({
  src,
  alt,
  priority,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={(
        "relative mx-auto w-full max-w-[330px] [transform:none] sm:[transform:perspective(1200px)_rotateY(-9deg)_rotateX(4deg)] " +
        className
      ).trim()}
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : { y: [0, -12, 0], rotate: [-0.8, 0.8, -0.8] }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 6.8,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
              }
        }
      >
        <div className="absolute inset-x-[12%] bottom-[-22px] h-14 rounded-full bg-[#8ab6ff]/20 blur-2xl" />
        <div className="relative rounded-[3.25rem] bg-[linear-gradient(160deg,#fefefe,#eef3f8_45%,#c8d0dc_100%)] p-[2px] shadow-[0_44px_90px_-42px_rgba(70,96,136,0.45),0_28px_40px_-30px_rgba(148,167,194,0.6)]">
          <div className="absolute inset-y-24 right-[-5px] z-20 w-[5px] rounded-r-full bg-slate-300/90" />
          <div className="absolute left-[-4px] top-26 z-20 h-12 w-[4px] rounded-l-full bg-slate-300/90" />
          <div className="absolute left-[-4px] top-42 z-20 h-16 w-[4px] rounded-l-full bg-slate-300/90" />
          <div className="relative rounded-[3.1rem] bg-[#f8fbff] p-2">
            <div className="absolute left-1/2 top-0 z-20 h-7 w-[122px] -translate-x-1/2 rounded-b-[18px] bg-[#dfe6ee]" />
            <div className="relative overflow-hidden rounded-[2.55rem] bg-[#edf4fb] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-22px_30px_rgba(133,157,184,0.08)]">
              <Image
                src={src}
                alt={alt}
                width={760}
                height={1520}
                priority={priority}
                className="h-auto w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.18)_28%,rgba(255,255,255,0)_48%)]" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">{eyebrow}</p>
      <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[3.6rem] lg:leading-[1.02]">
        {title}
      </h2>
      <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function PremiumLanding({ messages }: { messages: PremiumLandingMessages }) {
  const navItems = [
    { label: messages.nav.story, href: "#story" },
    { label: messages.nav.features, href: "#features" },
    { label: messages.nav.reviews, href: "#reviews" },
  ];

  const featureSections = FEATURE_SECTION_ASSETS.map((asset, index) => ({
    ...messages.features.items[index],
    image: asset.image,
    alt: asset.alt,
    reverse: asset.reverse,
  }));

  const extraScreenshots = EXTRA_SCREENSHOT_ASSETS.map((asset, index) => ({
    ...messages.moreScreens.items[index],
    image: asset.image,
    alt: asset.alt,
  }));

  const [featuredReview, ...secondaryReviews] = messages.reviews.items;

  return (
    <main className="relative overflow-hidden text-slate-950">
      <div className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(circle_at_top_left,rgba(202,227,255,0.95),transparent_42%),radial-gradient(circle_at_top_right,rgba(255,228,239,0.75),transparent_32%),linear-gradient(180deg,#fffefb_0%,#f6fbff_54%,#fbfcff_100%)]" />

      <header className="sticky top-0 z-40 border-b border-white/60 bg-white/72 backdrop-blur-xl">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
          <div className="flex items-center justify-between gap-3 pr-14 sm:pr-0">
            <a href="#top" className="inline-flex items-center gap-3 text-sm font-semibold tracking-tight text-slate-950">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#dff1ff,#fff4f8)] shadow-[0_14px_30px_-20px_rgba(109,142,191,0.55)] ring-1 ring-sky-100">
                <Image src="/icon.png" alt={messages.iconAlt} width={28} height={28} className="rounded-xl" />
              </span>
              <span>{messages.brandName}</span>
            </a>
          </div>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-sm text-slate-600 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-slate-950">
                {item.label}
              </a>
            ))}
            <DownloadDropdown messages={messages.downloadMenu} buttonLabel={messages.nav.download} variant="cta" />
          </nav>

          <div className="absolute right-16 hidden items-center gap-2 md:flex lg:right-20">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e4dbd1]/95 shadow-[0_18px_38px_-24px_rgba(87,72,58,0.22)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[#ddd1c4]"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 md:hidden">
            <DownloadDropdown messages={messages.downloadMenu} buttonLabel={messages.nav.download} variant="cta" />
            <div className="ml-auto flex items-center gap-1.5">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={`mobile-${item.name}`}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e4dbd1]/95 shadow-[0_14px_30px_-22px_rgba(87,72,58,0.24)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[#ddd1c4]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section id="top" className="relative mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8 lg:pb-36">
        <div className="absolute left-[-120px] top-20 -z-10 h-64 w-64 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute right-[-100px] top-12 -z-10 h-64 w-64 rounded-full bg-rose-100/80 blur-3xl" />
        <div className="grid items-center gap-10 rounded-[2.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(245,250,255,0.9))] p-5 shadow-[0_32px_90px_-58px_rgba(90,120,168,0.34)] sm:rounded-[2.75rem] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:p-12">
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-full border border-white/70 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 shadow-[0_12px_25px_-18px_rgba(119,150,195,0.5)] backdrop-blur">
              {messages.hero.badge}
            </p>
            <h1 className="mt-6 text-balance text-[2.55rem] font-semibold tracking-[-0.06em] leading-[0.94] text-slate-950 sm:mt-8 sm:text-6xl lg:text-[5.5rem] lg:leading-[0.95]">
              {messages.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:mt-6 sm:text-xl sm:leading-8">
              {messages.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
              <StoreButton
                href={APP_STORE_URL}
                icon={<AppStoreIcon />}
                label={messages.hero.appStore}
                eventName="click_appstore"
                eventPlacement="hero"
              />
              <StoreButton
                href={GOOGLE_PLAY_URL}
                icon={<GooglePlayIcon />}
                label={messages.hero.googlePlay}
                eventName="click_googleplay"
                eventPlacement="hero"
              />
            </div>

            <div className="mt-7 flex items-start gap-3 sm:mt-8 sm:items-center sm:gap-4">
              <div className="flex -space-x-3">
                {["/landing/parent-1.png", "/landing/parent-2.png", "/landing/parent-3.png"].map((src, index) => (
                  <span
                    key={src}
                    className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-white shadow-[0_12px_24px_-14px_rgba(15,23,42,0.42)] ring-1 ring-slate-200/70"
                  >
                    <Image
                      src={src}
                      alt={`${messages.hero.parentAvatarAltPrefix} ${index + 1}`}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950">{messages.hero.trustTitle}</p>
                <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                  <StarRow />
                  <span>{messages.hero.trustSubtitle}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] sm:max-w-[540px]">
            <div className="absolute inset-x-10 top-10 -z-10 h-[78%] rounded-full bg-[radial-gradient(circle,rgba(177,218,255,0.95)_0%,rgba(177,218,255,0.3)_35%,transparent_72%)] blur-3xl" />
            <div className="absolute bottom-6 left-0 -z-10 h-44 w-44 rounded-full bg-rose-100/80 blur-3xl" />
            <DeviceFrame src={SCREENSHOT_ASSETS.main.src} alt={SCREENSHOT_ASSETS.main.alt} priority className="max-w-[360px] sm:max-w-[390px] lg:max-w-[410px]" />
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid items-center gap-8 rounded-[2.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(245,250,255,0.9))] p-5 shadow-[0_34px_96px_-60px_rgba(90,120,168,0.38)] sm:rounded-[2.5rem] sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:p-12">
          <div>
            <SectionIntro
              eyebrow={messages.story.eyebrow}
              title={messages.story.title}
              description={messages.story.description}
            />
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-500">
              {messages.story.note}
            </p>
          </div>

          <div className="relative px-4 pt-4 sm:px-8 sm:pt-8">
            <div className="absolute inset-x-8 top-12 -z-10 h-52 rounded-full bg-[radial-gradient(circle,rgba(187,224,255,0.95)_0%,rgba(187,224,255,0.35)_45%,transparent_78%)] blur-3xl" />
            <div className="absolute bottom-6 right-6 -z-10 h-32 w-32 rounded-full bg-rose-100/70 blur-3xl" />
            <DeviceFrame src={SCREENSHOT_ASSETS.notification.src} alt={SCREENSHOT_ASSETS.notification.alt} className="max-w-[340px] sm:max-w-[360px]" />
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">{messages.features.eyebrow}</p>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-[4.25rem] lg:leading-[1.02]">
            {messages.features.title}
          </h2>
        </div>

        <div className="mt-12 space-y-16 sm:mt-20 sm:space-y-32">
          {featureSections.map((feature) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="grid items-center gap-10 rounded-[2.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(245,249,255,0.92))] p-5 shadow-[0_30px_84px_-54px_rgba(90,120,168,0.3)] sm:rounded-[2.5rem] sm:p-8 lg:grid-cols-2 lg:gap-20 lg:p-12"
            >
              <div className={feature.reverse ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700/70">{feature.eyebrow}</p>
                <h3 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[3.25rem] lg:leading-[1.04]">
                  {feature.title}
                </h3>
                <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">
                  {feature.description}
                </p>
                <div className="mt-7 inline-flex items-center rounded-full border border-sky-100 bg-sky-50/80 px-4 py-2 text-sm font-medium text-sky-900">
                  {feature.accent}
                </div>
              </div>

              <div className={feature.reverse ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
                <div className="relative py-6">
                  <div className="absolute inset-x-8 top-14 -z-10 h-44 rounded-full bg-[radial-gradient(circle,rgba(187,224,255,0.92)_0%,rgba(187,224,255,0.28)_48%,transparent_80%)] blur-3xl" />
                  <div className="absolute bottom-4 left-8 -z-10 h-28 w-28 rounded-full bg-rose-100/60 blur-3xl" />
                  <DeviceFrame src={feature.image} alt={feature.alt} className="max-w-[340px] sm:max-w-[360px]" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">{messages.moreScreens.eyebrow}</p>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-[3.5rem] lg:leading-[1.04]">
            {messages.moreScreens.title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">
            {messages.moreScreens.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {extraScreenshots.map((item) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,249,255,0.92))] p-5 shadow-[0_28px_70px_-46px_rgba(90,120,168,0.28)] sm:p-6"
            >
              <div className="relative overflow-hidden rounded-[1.65rem] border border-slate-100 bg-[#eef4fb] p-3">
                <div className="absolute inset-x-4 top-6 h-24 rounded-full bg-sky-100/80 blur-3xl" />
                <div className="relative overflow-hidden rounded-[1.3rem]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={900}
                    height={1800}
                    className="h-[280px] w-full object-cover object-top sm:h-[320px]"
                  />
                </div>
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700/70">{item.eyebrow}</p>
              <h3 className="mt-3 text-balance text-xl font-semibold tracking-[-0.03em] text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">{messages.reviews.eyebrow}</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-[4rem] lg:leading-[1.02]">
              {messages.reviews.title}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
              {messages.reviews.description}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/70 bg-white/85 p-5 shadow-[0_24px_60px_-40px_rgba(90,120,168,0.3)]">
                <p className="text-sm font-semibold text-slate-950">{messages.reviews.appStoreLabel}</p>
                <div className="mt-2 flex items-center gap-3">
                  <StarRow />
                  <span className="text-sm text-slate-500">{messages.reviews.appStoreNote}</span>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-white/70 bg-white/85 p-5 shadow-[0_24px_60px_-40px_rgba(90,120,168,0.3)]">
                <p className="text-sm font-semibold text-slate-950">{messages.reviews.googlePlayLabel}</p>
                <div className="mt-2 flex items-center gap-3">
                  <StarRow />
                  <span className="text-sm text-slate-500">{messages.reviews.googlePlayNote}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,251,255,0.92))] p-7 shadow-[0_28px_70px_-46px_rgba(90,120,168,0.36)] sm:p-9"
            >
              <StarRow />
              <p className="mt-5 max-w-2xl text-xl leading-9 tracking-[-0.02em] text-slate-900 sm:text-2xl">
                “{featuredReview.quote}”
              </p>
              <p className="mt-5 text-sm font-semibold text-slate-950">{featuredReview.name}</p>
              <p className="text-sm text-slate-500">{featuredReview.role}</p>
            </motion.article>

            <div className="grid gap-5 md:grid-cols-2">
              {secondaryReviews.map((review) => (
                <motion.article
                  key={review.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[1.8rem] border border-white/70 bg-white/88 p-6 shadow-[0_26px_60px_-44px_rgba(90,120,168,0.34)]"
                >
                  <StarRow />
                  <p className="mt-4 text-base leading-8 text-slate-700">“{review.quote}”</p>
                  <p className="mt-5 text-sm font-semibold text-slate-950">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pb-28 lg:px-8 lg:pb-36">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(236,246,255,0.95)_54%,rgba(255,239,245,0.88)_100%)] px-5 py-10 shadow-[0_34px_92px_-54px_rgba(90,120,168,0.42)] sm:rounded-[2.75rem] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute left-[-80px] top-[-60px] h-64 w-64 rounded-full bg-sky-200/70 blur-3xl" />
          <div className="absolute bottom-[-90px] right-[-50px] h-72 w-72 rounded-full bg-rose-100/75 blur-3xl" />
          <div className="relative z-10 max-w-2xl text-center lg:mx-auto">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">{messages.finalCta.eyebrow}</p>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-[4.3rem] lg:leading-[1.02]">
                {messages.finalCta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">
                {messages.finalCta.description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
                <StoreButton
                  href={APP_STORE_URL}
                  icon={<AppStoreIcon />}
                  label={messages.hero.appStore}
                  eventName="click_appstore"
                  eventPlacement="final_cta"
                />
                <StoreButton
                  href={GOOGLE_PLAY_URL}
                  icon={<GooglePlayIcon />}
                  label={messages.hero.googlePlay}
                  eventName="click_googleplay"
                  eventPlacement="final_cta"
                />
              </div>
          </div>
        </div>
      </section>
    </main>
  );
}