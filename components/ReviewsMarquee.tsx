"use client";

import { motion, useMotionValue, useReducedMotion, useAnimationFrame } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type Review = {
  rating: 5;
  text: string;
  name: string;
};

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M10 1.6l2.47 5.02 5.54.8-4 3.9.95 5.52L10 14.95l-4.96 2.6.95-5.52-4-3.9 5.54-.8L10 1.6z" />
    </svg>
  );
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1 text-amber-300">
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} className="h-4 w-4 drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]" />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="h-full w-[260px] shrink-0 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_22px_70px_-52px_rgba(0,0,0,0.95)] backdrop-blur sm:w-[300px]">
      <Stars count={review.rating} />
      <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
        {review.text}
      </p>
      <p className="mt-4 text-sm font-medium text-white/85">{review.name}</p>
    </article>
  );
}

export default function ReviewsMarquee() {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const reviews = useMemo<readonly Review[]>(
    () => [
      {
        rating: 5,
        text: "The charts are super clear and the daily logging is actually quick. It’s helped us stay consistent without feeling overwhelmed.",
        name: "Emily R.",
      },
      {
        rating: 5,
        text: "Sleep predictions are surprisingly accurate for our little one. The next-nap timing alone has been worth it.",
        name: "James K.",
      },
      {
        rating: 5,
        text: "Love the clean design. AI insights feel practical—not random tips—and it’s easy to spot patterns across days.",
        name: "Sofia M.",
      },
      {
        rating: 5,
        text: "Great for sharing updates during checkups. Everything is organized and the growth trends are obvious at a glance.",
        name: "Daniel P.",
      },
      {
        rating: 5,
        text: "Finally an app that looks premium and stays fast. The interface is smooth and the summaries are really helpful.",
        name: "Ava L.",
      },
    ],
    []
  );

  const x = useMotionValue(0);
  const setRef = useRef<HTMLDivElement | null>(null);
  const [setWidth, setSetWidth] = useState(0);

  useEffect(() => {
    const el = setRef.current;
    if (!el) return;

    const measure = () => {
      const width = el.scrollWidth;
      setSetWidth(width);
    };

    measure();
    const ro = new ResizeObserver(() => measure());
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion) return;
    if (isHovered) return;
    if (setWidth <= 0) return;

    const pxPerSecond = 28; // slow, elegant
    const next = x.get() - (pxPerSecond * delta) / 1000;

    // Keep x in [-setWidth, 0] range for seamless looping.
    if (next <= -setWidth) {
      x.set(next + setWidth);
      return;
    }

    x.set(next);
  });

  return (
    <section className="relative overflow-hidden" aria-label="Reviews">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/70 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-violet-400/5 to-fuchsia-300/5" />
        <div className="absolute -top-24 left-1/2 h-[320px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/12 via-violet-400/12 to-fuchsia-300/12 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Loved by parents
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-slate-200/70 sm:text-base">
            A few words from people using the app every day.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-950 via-slate-950/70 to-transparent" />

          <div className="overflow-hidden">
            <motion.div
              style={{ x }}
              className="flex w-max items-stretch gap-4 py-2 will-change-transform sm:gap-5"
            >
              <div ref={setRef} className="flex items-stretch gap-4 sm:gap-5">
                {reviews.map((review, idx) => (
                  <ReviewCard key={`a-${idx}`} review={review} />
                ))}
              </div>

              {/* Duplicate set for seamless loop */}
              <div aria-hidden className="flex items-stretch gap-4 sm:gap-5">
                {reviews.map((review, idx) => (
                  <ReviewCard key={`b-${idx}`} review={review} />
                ))}
              </div>
            </motion.div>
          </div>

          <p className="mt-4 text-center text-xs text-slate-200/50">
            Hover to pause
          </p>
        </div>
      </div>
    </section>
  );
}
