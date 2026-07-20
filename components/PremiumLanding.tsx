"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import { trackEvent } from "@/lib/analytics";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";
import type { PremiumLandingMessages } from "@/i18n/premiumLanding";

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

function DownloadCtaBand({
  title,
  subtitle,
  messages,
  placement,
}: {
  title: string;
  subtitle: string;
  messages: PremiumLandingMessages;
  placement: string;
}) {
  return (
    <div className="rounded-[2rem] border border-sky-100/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(236,246,255,0.92))] px-5 py-8 text-center shadow-[0_28px_70px_-46px_rgba(90,120,168,0.28)] sm:rounded-[2.5rem] sm:px-10 sm:py-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700/80">{title}</p>
      <p className="mx-auto mt-3 max-w-xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">{subtitle}</p>
      <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
        <StoreButton
          href={APP_STORE_URL}
          icon={<AppStoreIcon />}
          label={messages.hero.appStore}
          eventName="click_appstore"
          eventPlacement={placement}
        />
        <StoreButton
          href={GOOGLE_PLAY_URL}
          icon={<GooglePlayIcon />}
          label={messages.hero.googlePlay}
          eventName="click_googleplay"
          eventPlacement={placement}
        />
      </div>
      <p className="mt-4 text-sm text-slate-500">{messages.hero.storeAvailability}</p>
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
                loading={priority ? undefined : "lazy"}
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
    { label: "Blog", href: "/blog" },
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

      <SiteHeader
        brandName={messages.brandName}
        iconAlt={messages.iconAlt}
        brandHref="#top"
        navItems={navItems}
        downloadLabel={messages.nav.download}
        downloadMenu={messages.downloadMenu}
      />

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
                label={messages.hero.downloadCta}
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
            <p className="mt-4 text-sm font-medium text-slate-500">{messages.hero.storeAvailability}</p>

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
                      loading="lazy"
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950">{messages.hero.trustTitle}</p>
                {messages.hero.trustSubtitle ? (
                  <p className="mt-1 text-sm text-slate-500">{messages.hero.trustSubtitle}</p>
                ) : null}
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

      <section id="doctor-report" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid items-center gap-8 rounded-[2.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(245,250,255,0.9))] p-5 shadow-[0_32px_90px_-58px_rgba(90,120,168,0.34)] sm:rounded-[2.5rem] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:p-12">
          <div>
            <SectionIntro
              eyebrow={messages.doctorReport.eyebrow}
              title={messages.doctorReport.title}
              description={messages.doctorReport.description}
            />
          </div>
          <div className="relative py-4">
            <div className="absolute inset-x-8 top-10 -z-10 h-44 rounded-full bg-[radial-gradient(circle,rgba(187,224,255,0.92)_0%,rgba(187,224,255,0.28)_48%,transparent_80%)] blur-3xl" />
            <DeviceFrame
              src={SCREENSHOT_ASSETS.timeline.src}
              alt="Baby tracker pediatrician report and daily timeline summary"
              className="max-w-[340px] sm:max-w-[360px]"
            />
          </div>
        </div>
        <div className="mt-8">
          <DownloadCtaBand
            title={messages.doctorReport.ctaTitle}
            subtitle={messages.doctorReport.ctaSubtitle}
            messages={messages}
            placement="after_doctor_report"
          />
        </div>
      </section>

      <section id="loved-by-parents" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid items-center gap-8 rounded-[2.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(245,250,255,0.9))] p-5 shadow-[0_34px_96px_-60px_rgba(90,120,168,0.38)] sm:rounded-[2.5rem] sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:p-12">
          <div>
            <SectionIntro
              eyebrow={messages.builtByParent.eyebrow}
              title={messages.builtByParent.title}
              description={messages.builtByParent.description}
            />
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-500">{messages.builtByParent.note}</p>
          </div>
          <div className="relative px-4 pt-4 sm:px-8 sm:pt-8">
            <div className="absolute inset-x-8 top-12 -z-10 h-52 rounded-full bg-[radial-gradient(circle,rgba(187,224,255,0.95)_0%,rgba(187,224,255,0.35)_45%,transparent_78%)] blur-3xl" />
            <DeviceFrame src={SCREENSHOT_ASSETS.main.src} alt={SCREENSHOT_ASSETS.main.alt} className="max-w-[340px] sm:max-w-[360px]" />
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
          {featureSections.map((feature, featureIndex) => (
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
                {featureIndex === 3 ? (
                  <p className="mt-4 max-w-xl rounded-2xl border border-amber-100/80 bg-amber-50/70 px-4 py-3 text-sm leading-7 text-amber-950/80">
                    {messages.aiDisclaimer}
                  </p>
                ) : null}
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

        <div className="mt-16 sm:mt-20">
          <DownloadCtaBand
            title={messages.downloadMicro.afterFeaturesTitle}
            subtitle={messages.downloadMicro.afterFeaturesSubtitle}
            messages={messages}
            placement="after_features"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="rounded-[2.2rem] border border-white/70 bg-white/90 p-6 shadow-[0_28px_70px_-46px_rgba(90,120,168,0.28)] sm:p-10 lg:p-12">
          <h2 className="text-balance text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-3xl">
            {messages.seoSection.title}
          </h2>
          {messages.seoSection.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="mt-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              {paragraph}
            </p>
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
                    loading="lazy"
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

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {messages.trust.items.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/70 bg-white/85 px-4 py-3 text-sm font-medium text-slate-700 shadow-[0_18px_50px_-36px_rgba(90,120,168,0.28)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/70 bg-white/85 p-5 shadow-[0_24px_60px_-40px_rgba(90,120,168,0.3)]">
                <p className="text-sm font-semibold text-slate-950">{messages.reviews.appStoreLabel}</p>
                <p className="mt-2 text-sm text-slate-500">{messages.reviews.appStoreNote}</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/70 bg-white/85 p-5 shadow-[0_24px_60px_-40px_rgba(90,120,168,0.3)]">
                <p className="text-sm font-semibold text-slate-950">{messages.reviews.googlePlayLabel}</p>
                <p className="mt-2 text-sm text-slate-500">{messages.reviews.googlePlayNote}</p>
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
              <p className="max-w-2xl text-xl leading-9 tracking-[-0.02em] text-slate-900 sm:text-2xl">
                “{featuredReview.quote}”
              </p>
              <p className="mt-5 text-sm font-semibold text-slate-950">{featuredReview.name}</p>
              <p className="text-sm text-slate-500">{featuredReview.role}</p>
            </motion.article>

            <div className="grid gap-5 md:grid-cols-2">
              {secondaryReviews.map((review) => (
                <motion.article
                  key={review.role}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[1.8rem] border border-white/70 bg-white/88 p-6 shadow-[0_26px_60px_-44px_rgba(90,120,168,0.34)]"
                >
                  <p className="text-base leading-8 text-slate-700">“{review.quote}”</p>
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