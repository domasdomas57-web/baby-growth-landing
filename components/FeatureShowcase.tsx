"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";

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
			animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
			transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
			className="pointer-events-none w-full max-w-[220px]"
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
							sizes="220px"
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
	const baseId = useId();
	const [openTitle, setOpenTitle] = useState<
		(typeof FEATURES)[number]["title"] | null
	>(null);

return (
<section className="relative overflow-hidden" aria-label="Feature showcase">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/70 to-slate-950" />
<div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-violet-400/5 to-fuchsia-300/5" />
<div className="absolute -top-28 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/12 via-violet-400/12 to-fuchsia-300/12 blur-3xl" />
</div>

<div className="w-full px-5 py-14 sm:px-6 sm:py-20 lg:px-10 2xl:px-16">
<div className="mb-10 text-center sm:mb-12">
<h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
Built for everyday tracking
</h2>
<p className="mx-auto mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-slate-200/70 sm:text-base">
Sleep predictions, growth charts, and AI insights—designed to help you feel confident, fast.
</p>
</div>

<div className="grid gap-6 md:grid-cols-3 md:gap-8">
{FEATURES.map((feature) => {
const details = FEATURE_DETAILS[feature.title];
const more = LEARN_MORE[feature.title];
const panelId = `${baseId}-${feature.title.replace(/\s+/g, "-").toLowerCase()}`;

return (
<motion.article
key={feature.title}
initial={{ opacity: 0, y: 14 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.25 }}
transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_26px_90px_-60px_rgba(0,0,0,0.90)] backdrop-blur sm:p-7"
>
<div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-400/10 via-violet-400/10 to-fuchsia-300/10" />

<div className="flex flex-col items-center text-center">
<PhoneMockup src={feature.src} alt={feature.alt} />

<h3 className="mt-6 text-balance text-lg font-semibold tracking-tight text-white sm:text-xl">
{feature.title}
</h3>
<p className="mt-2 text-pretty text-sm leading-relaxed text-slate-200/80">
{feature.description} {details.more}
</p>

<button
type="button"
aria-expanded={openTitle === feature.title}
aria-controls={panelId}
onClick={() =>
setOpenTitle((current) => (current === feature.title ? null : feature.title))
}
className="mt-5 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-6 py-2 text-xs font-medium tracking-wide text-white/90 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.90)] backdrop-blur transition hover:border-white/30 hover:bg-white/[0.06]"
>
{openTitle === feature.title ? "CLOSE" : "LEARN MORE"}
</button>

<AnimatePresence initial={false}>
{openTitle === feature.title ? (
<motion.div
id={panelId}
key="panel"
initial={{ opacity: 0, height: 0, marginTop: 0 }}
animate={{ opacity: 1, height: "auto", marginTop: 16 }}
exit={{ opacity: 0, height: 0, marginTop: 0 }}
transition={{ duration: 0.28, ease: "easeOut" }}
className="w-full overflow-hidden"
>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left shadow-[0_14px_50px_-40px_rgba(0,0,0,0.85)] backdrop-blur">
<p className="text-sm font-semibold tracking-tight text-white/90">
{more.heading}
</p>

{more.paragraphs.map((p) => (
<p
key={p}
className="mt-2 text-sm leading-relaxed text-slate-200/80"
>
{p}
</p>
))}

<ul className="mt-3 space-y-2 text-sm text-slate-200/75">
{more.bullets.map((item) => (
<li key={item} className="flex gap-3">
<span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
<span className="leading-relaxed">{item}</span>
</li>
))}
</ul>
</div>
</motion.div>
) : null}
</AnimatePresence>
</div>
</motion.article>
);
})}
</div>
</div>
</section>
);
}