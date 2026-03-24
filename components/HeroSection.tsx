"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const APP_STORE_URL =
  "https://apps.apple.com/lt/app/baby-tracker-ai-soriva/id6759395777";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.domce23.babygrowthtracker&hl=en";
const HERO_VIDEO_URL = "/videos/Track%20Everything%20%281%29.mp4";

function AppStoreBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-2xl bg-black px-4 py-3 text-white transition hover:-translate-y-0.5 hover:bg-black/90">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M16.9 13.3c0-2 1.6-3 1.7-3.1-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.8-2.7-.8-1.4 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 7.9.7.9 1.5 1.9 2.6 1.9 1 0 1.4-.7 2.7-.7s1.6.7 2.7.7c1.1 0 1.9-1 2.6-1.9.8-1.2 1.1-2.3 1.1-2.4-.1 0-2.3-.9-2.3-3.7Z" />
        <path d="M14.7 5.4c.6-.7 1-1.7.9-2.7-.9.1-2 .6-2.6 1.4-.6.7-1.1 1.7-.9 2.7 1 0 2-.6 2.6-1.4Z" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[10px] uppercase tracking-[0.12em] text-white/70">Download on the</span>
        <span className="mt-1 text-sm font-semibold">App Store</span>
      </span>
    </span>
  );
}

function GooglePlayBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-2xl bg-black px-4 py-3 text-white transition hover:-translate-y-0.5 hover:bg-black/90">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M3.7 2.7c-.5.5-.7 1.2-.7 2v14.6c0 .8.2 1.5.7 2L13 12 3.7 2.7Z" fill="#34A853" />
        <path d="M14.2 10.8 5 2.1c.5-.1 1.1 0 1.8.4l11.2 6.4-3.8 1.9Z" fill="#4285F4" />
        <path d="M14.2 13.2 18 15.1 6.8 21.5c-.7.4-1.3.5-1.8.4l9.2-8.7Z" fill="#FBBC05" />
        <path d="M19.6 10.1c1 .6 1.4 1.2 1.4 1.9s-.4 1.3-1.4 1.9l-1.6.9-4.1-2.1 4.1-2.1 1.6.9Z" fill="#EA4335" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[10px] uppercase tracking-[0.12em] text-white/70">Get it on</span>
        <span className="mt-1 text-sm font-semibold">Google Play</span>
      </span>
    </span>
  );
}

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const floatKeyframes = isMobile ? [0, -5, 0] : [0, -10, 0];
  const floatDuration = isMobile ? 8 : 6.5;

  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-section-title">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#625cff] via-[#5148da] to-[#3555d6]" />
      <div className="absolute -top-24 left-1/2 -z-10 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-white/15 blur-3xl" />
      <div className="absolute bottom-[-180px] right-[-80px] -z-10 h-[300px] w-[300px] rounded-full bg-sky-300/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <h1
              id="hero-section-title"
              className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl"
            >
              The Easiest Way to Track Your Baby's Sleep & Feeding
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Track sleep, feeding and daily routines in seconds. No more guessing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#features"
                className="inline-flex items-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_16px_40px_-22px_rgba(5,9,35,0.9)] transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Start Tracking Free
              </a>

              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Download on App Store">
                <AppStoreBadge />
              </a>

              <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" aria-label="Download on Google Play">
                <GooglePlayBadge />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
            <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-fuchsia-300/35 via-cyan-300/35 to-violet-400/35 blur-2xl" />
            <div className="absolute left-1/2 top-[92%] -z-10 h-10 w-[72%] -translate-x-1/2 rounded-full bg-black/35 blur-xl" />

            <motion.div
              animate={reduceMotion ? undefined : { y: floatKeyframes }}
              transition={{ duration: floatDuration, ease: "easeInOut", repeat: Infinity }}
              className="transform-gpu transition duration-500 hover:scale-[1.02] [transform:perspective(900px)_rotateY(-2deg)_rotateX(1deg)] md:[transform:perspective(1200px)_rotateY(-8deg)_rotateX(4deg)]"
            >
              <div className="rounded-[3.05rem] bg-gradient-to-br from-sky-300 via-violet-300 to-fuchsia-300 p-[2px] shadow-[0_24px_70px_-34px_rgba(8,12,45,0.95)]">
                <div className="relative rounded-[2.95rem] bg-black p-2">
                  <div className="absolute left-1/2 top-0 z-20 h-6 w-[120px] -translate-x-1/2 rounded-b-[18px] bg-black" />
                  <div className="absolute left-1/2 top-[8px] z-20 h-[4px] w-10 -translate-x-1/2 rounded-full bg-white/20" />

                  <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.3rem] bg-black">
                    <video
                      src={HERO_VIDEO_URL}
                      className="h-full w-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      poster="/screenshots/1.png"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
