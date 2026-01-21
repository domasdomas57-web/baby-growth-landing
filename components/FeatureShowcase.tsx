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
more: "Know what’s coming next and plan naps with more confidence.",
},
"Growth Tracking": {
more: "A clean record of growth you can review and share fast.",
},
"AI Insights": {
more: "Turn daily logs into clear patterns and next steps.",
},
};

const LEARN_MORE: Record<
	(typeof FEATURES)[number]["title"],
	{
		heading: string;
		paragraphs: readonly string[];
		bullets: readonly string[];
	}
> = {
	"Sleep Predictions": {
		heading: "How sleep predictions work",
		paragraphs: [
			"Log naps and wake windows, and the app learns your baby’s rhythm over time. It uses your recent patterns to estimate the next best nap window.",
			"Instead of guessing, you get a clear ‘what’s next’ view—helpful for planning feeds, errands, and smoother transitions before overtiredness kicks in.",
		],
		bullets: [
			"Next-nap window based on recent patterns",
			"Quick at-a-glance timing for your day",
			"Adapts as routines change week to week",
		],
	},
	"Growth Tracking": {
		heading: "Track growth with clarity",
		paragraphs: [
			"Keep height, weight, and head circumference in one place, with charts that make trends obvious at a glance.",
			"It’s designed to be easy to review during checkups—so you can share progress confidently without digging through notes.",
		],
		bullets: [
			"Clear charts for quick trend spotting",
			"All measurements organized over time",
			"Fast sharing during pediatric visits",
		],
	},
	"AI Insights": {
		heading: "Turn logs into insights",
		paragraphs: [
			"Daily tracking is only useful if it leads to better decisions. AI Insights highlight patterns across sleep, feeding, and routines.",
			"You’ll see what’s changing, what’s consistent, and where small tweaks could make your day easier—without drowning you in data.",
		],
		bullets: [
			"Pattern highlights across days",
			"Signals when routines shift",
			"Actionable summaries you can use",
		],
	},
};

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.div
			aria-hidden
			animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
			transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
			className="pointer-events-none w-full max-w-[280px] lg:max-w-[320px]"
		>
			<div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-[9px] shadow-[0_26px_90px_-58px_rgba(0,0,0,0.95)]">
				<div className="relative overflow-hidden rounded-[26px] bg-black shadow-[0_18px_60px_-32px_rgba(0,0,0,0.85)]">
					<div className="absolute left-1/2 top-0 z-10 h-6 w-[116px] -translate-x-1/2 rounded-b-[18px] bg-slate-950" />
					<div className="absolute left-1/2 top-[7px] z-10 h-[4px] w-10 -translate-x-1/2 rounded-full bg-white/15" />

					<div className="relative aspect-[9/19] w-full">
						<Image
							src={src}
							alt={alt}
							fill
							sizes="(min-width: 1024px) 320px, 280px"
							className="object-cover object-top"
						/>
					</div>

					<div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),inset_0_-18px_42px_rgba(0,0,0,0.34)]" />
				</div>
			</div>
		</motion.div>
	);
}

export default function FeatureShowcase() {
	useReducedMotion();

return (
<section className="relative overflow-hidden" aria-label="Feature showcase">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/70 to-slate-950" />
<div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-violet-400/5 to-fuchsia-300/5" />
<div className="absolute -top-28 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/12 via-violet-400/12 to-fuchsia-300/12 blur-3xl" />
</div>

<div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
<div className="space-y-10 sm:space-y-14">
{FEATURES.map((feature, index) => {
const isReversed = index % 2 === 1;
const details = FEATURE_DETAILS[feature.title];
const more = LEARN_MORE[feature.title];

return (
<motion.article
key={feature.title}
initial={{ opacity: 0, y: 18 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_26px_90px_-60px_rgba(0,0,0,0.90)] backdrop-blur"
>
<div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-400/10 via-violet-400/10 to-fuchsia-300/10" />

<div
className={`grid gap-10 p-6 sm:p-8 lg:grid-cols-2 lg:items-center ${
isReversed ? "lg:[&>*:first-child]:order-2" : ""
}`}
>
<div className="flex items-center justify-center">
<PhoneMockup src={feature.src} alt={feature.alt} />
</div>

<div className="text-center lg:text-left">
<div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-6 shadow-[0_14px_50px_-36px_rgba(0,0,0,0.85)] backdrop-blur lg:mx-0">
<p className="text-xs font-medium tracking-wide text-white/60">
{more.heading}
</p>
<h3 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
{feature.title}
</h3>

<p className="mt-3 text-pretty text-sm leading-relaxed text-slate-200/85 sm:text-base">
{feature.description} {details.more}
</p>

<p className="mt-3 text-pretty text-sm leading-relaxed text-slate-200/75 sm:text-base">
{more.paragraphs[0]}
</p>

<ul className="mt-5 space-y-2 text-left text-sm text-slate-200/75">
{more.bullets.slice(0, 3).map((item) => (
<li key={item} className="flex gap-3">
<span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
<span className="leading-relaxed">{item}</span>
</li>
))}
</ul>
</div>
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