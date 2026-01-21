"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

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
"Know what’s coming next and plan naps with more confidence.",
bullets: [
"See the next nap window at a glance",
"Spot patterns across days, not just today",
"Reduce overtired meltdowns with better timing",
],
},
"Growth Tracking": {
more:
"A clean record of growth you can review and share fast.",
bullets: [
"Clean charts that are easy to read",
"Track multiple measurements together",
"Perfect for quick pediatrician updates",
],
},
"AI Insights": {
more:
"Turn daily logs into clear patterns and next steps.",
bullets: [
"Highlights patterns in sleep and feeding",
"Find routine shifts sooner",
"Actionable insights, not noise",
],
},
};

export default function FeatureShowcase() {
const shouldReduceMotion = useReducedMotion();

return (
<section className="relative overflow-hidden" aria-label="Feature showcase">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/70 to-slate-950" />
<div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-violet-400/5 to-fuchsia-300/5" />
<div className="absolute -top-28 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/12 via-violet-400/12 to-fuchsia-300/12 blur-3xl" />
</div>

<div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
<div className="space-y-6 sm:space-y-8">
{FEATURES.map((feature) => {
const details = FEATURE_DETAILS[feature.title];

return (
<motion.article
key={feature.title}
initial={{ opacity: 0, y: 16 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_26px_90px_-60px_rgba(0,0,0,0.90)] backdrop-blur"
>
<div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-400/10 via-violet-400/10 to-fuchsia-300/10" />

<div className="grid gap-5 p-5 sm:grid-cols-[240px,minmax(0,1fr)] sm:items-center sm:gap-7 sm:p-7">
<div className="flex items-center justify-center sm:justify-start">
<motion.div
animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
className="pointer-events-none w-full max-w-[220px] sm:max-w-[240px]"
>
<div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-[9px] shadow-[0_26px_90px_-58px_rgba(0,0,0,0.95)]">
<div className="relative overflow-hidden rounded-[26px] bg-black shadow-[0_18px_60px_-32px_rgba(0,0,0,0.85)]">
<div className="absolute left-1/2 top-0 z-10 h-6 w-[116px] -translate-x-1/2 rounded-b-[18px] bg-slate-950" />
<div className="absolute left-1/2 top-[7px] z-10 h-[4px] w-10 -translate-x-1/2 rounded-full bg-white/15" />

<div className="relative aspect-[9/19] w-full">
<Image
src={feature.src}
alt={feature.alt}
fill
sizes="240px"
className="object-cover object-top"
/>
</div>

<div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),inset_0_-18px_42px_rgba(0,0,0,0.34)]" />
</div>
</div>
</motion.div>
</div>

<div className="text-center sm:text-left">
<h3 className="text-balance text-xl font-semibold tracking-tight text-white sm:text-2xl">
{feature.title}
</h3>
<p className="mt-2 text-pretty text-sm leading-relaxed text-slate-200/80">
{feature.description} {details.more}
</p>

{details.bullets ? (
<ul className="mt-4 space-y-2 text-left text-sm text-slate-200/75">
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
</motion.article>
);
})}
</div>
</div>
</section>
);
}