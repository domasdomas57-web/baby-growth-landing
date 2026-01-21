"use client";

import Image from "next/image";
import { animate, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

const FEATURES = [
{
title: "Sleep Predictions",
description:
"AI-powered sleep predictions help you understand when your baby is ready for the next nap.",
src: "/screenshots/sleep-predictions.png",
alt: "Sleep predictions screen",
},
{
title: "Growth Tracking",
description:
"Track height, weight, and head circumference with clear visual charts over time.",
src: "/screenshots/growth-tracking.png",
alt: "Growth tracking charts screen",
},
{
title: "AI Insights",
description:
"Smart insights highlight patterns in sleep, feeding, and daily routines.",
src: "/screenshots/ai-insights.png",
alt: "AI insights screen",
},
] as const;

const FEATURE_DETAILS: Record<
(typeof FEATURES)[number]["title"],
{ more: string; bullets?: readonly string[] }
> = {
"Sleep Predictions": {
more:
"Know whats coming next and plan your day with more confidence. Predictions adapt as your babys routine changes, so you spend less time guessing and more time resting.",
bullets: [
"See the next nap window at a glance",
"Spot patterns across days, not just today",
"Reduce overtired meltdowns with better timing",
],
},
"Growth Tracking": {
more:
"Keep a clear record of height, weight, and head circumference over time. Visual charts make it easy to notice trends early and share updates during checkups.",
bullets: [
"Clean charts that are easy to read",
"Track multiple measurements together",
"Perfect for quick pediatrician updates",
],
},
"AI Insights": {
more:
"Turn daily logs into useful signals. AI helps highlight whats working, whats changing, and where small adjustments can make your routine smoother.",
bullets: [
"Highlights patterns in sleep and feeding",
"Find routine shifts sooner",
"Actionable insights, not noise",
],
},
};

export default function FeatureShowcase() {
const shouldReduceMotion = useReducedMotion();
const viewportRef = useRef<HTMLDivElement | null>(null);
const trackRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
if (shouldReduceMotion) return;
const viewport = viewportRef.current;
const track = trackRef.current;
if (!viewport || !track) return;

let controls: ReturnType<typeof animate> | undefined;

const start = () => {
controls?.stop();
track.style.transform = "translateX(0px)";

const maxOffset = Math.max(0, track.scrollWidth - viewport.clientWidth);
if (maxOffset <= 0) return;

const duration = Math.max(7, maxOffset / 120);
controls = animate(0, -maxOffset, {
duration,
repeat: Infinity,
repeatType: "reverse",
ease: "easeInOut",
onUpdate: (latest) => {
track.style.transform = `translateX(${latest}px)`;
},
});
};

start();

const ro = new ResizeObserver(() => start());
ro.observe(viewport);
ro.observe(track);

return () => {
controls?.stop();
ro.disconnect();
};
}, [shouldReduceMotion]);

return (
<section className="relative overflow-hidden" aria-label="Feature showcase">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/70 to-slate-950" />
<div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-violet-400/5 to-fuchsia-300/5" />
<div className="absolute -top-28 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/12 via-violet-400/12 to-fuchsia-300/12 blur-3xl" />
</div>

<div className="w-full px-0 py-14 sm:py-20">
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-950 via-slate-950/70 to-transparent" />

<div ref={viewportRef} className="overflow-hidden">
<div
ref={trackRef}
className="flex w-max items-stretch gap-6 py-2 will-change-transform sm:gap-8"
>
{FEATURES.map((feature) => {
const details = FEATURE_DETAILS[feature.title];

return (
<motion.article
key={feature.title}
initial={{ opacity: 0, y: 18 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.35 }}
transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
className="relative w-[92vw] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_26px_90px_-60px_rgba(0,0,0,0.90)] backdrop-blur sm:w-[84vw]"
>
<div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-400/10 via-violet-400/10 to-fuchsia-300/10" />

<div className="grid gap-4 p-5 sm:gap-5 sm:p-7 md:grid-cols-[auto,minmax(0,1fr)] md:items-center md:gap-5 lg:gap-6">
<div className="flex items-center justify-center lg:justify-start">
<motion.div
animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
transition={{
duration: 8.5,
repeat: Infinity,
ease: "easeInOut",
}}
className="pointer-events-none w-full max-w-[220px] sm:max-w-[240px] lg:max-w-[260px]"
>
<div className="rounded-[34px] border border-white/10 bg-slate-950/90 p-[10px] shadow-[0_26px_90px_-58px_rgba(0,0,0,0.95)]">
<div className="relative overflow-hidden rounded-[28px] bg-black shadow-[0_18px_60px_-32px_rgba(0,0,0,0.85)]">
<div className="absolute left-1/2 top-0 z-10 h-6 w-[120px] -translate-x-1/2 rounded-b-[18px] bg-slate-950" />
<div className="absolute left-1/2 top-[7px] z-10 h-[4px] w-10 -translate-x-1/2 rounded-full bg-white/15" />

<div className="relative aspect-[9/19] w-full">
<Image
src={feature.src}
alt={feature.alt}
fill
sizes="(min-width: 1024px) 260px, 220px"
className="object-cover object-top"
/>
</div>

<div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),inset_0_-18px_42px_rgba(0,0,0,0.34)]" />
</div>
</div>
</motion.div>
</div>

<div className="text-center lg:text-left">
<div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_14px_50px_-36px_rgba(0,0,0,0.85)] backdrop-blur sm:px-6 sm:py-6 lg:mx-0">
<h3 className="text-balance text-xl font-semibold tracking-tight text-white sm:text-2xl">
{feature.title}
</h3>
<p className="mt-2 text-pretty text-xs leading-relaxed text-slate-200/80 sm:mt-3 sm:text-sm">
{feature.description} {details.more}
</p>

{details.bullets ? (
<ul className="mt-4 space-y-1.5 text-left text-xs text-slate-200/75 sm:mt-5 sm:space-y-2 sm:text-sm">
{details.bullets.map((item) => (
<li key={item} className="flex gap-3">
<span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
<span className="leading-relaxed">{item}</span>
</li>
))}
</ul>
) : null}
</div>
</div>
</div>
</motion.article>
);
})}
</div>
</div>
</div>
</div>
</section>
);
}