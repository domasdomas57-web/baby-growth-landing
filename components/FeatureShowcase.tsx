"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
			"Know what’s coming next and plan your day with more confidence. Predictions adapt as your baby’s routine changes, so you spend less time guessing and more time resting.",
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
			"Turn daily logs into useful signals. AI helps highlight what’s working, what’s changing, and where small adjustments can make your routine smoother.",
		bullets: [
			"Highlights patterns in sleep and feeding",
			"Find routine shifts sooner",
			"Actionable insights, not noise",
		],
	},
};

export default function FeatureShowcase() {
	return (
		<section className="relative overflow-hidden" aria-label="Feature showcase">
			<div className="absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/70 to-slate-950" />
				<div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-violet-400/5 to-fuchsia-300/5" />
				<div className="absolute -top-28 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/12 via-violet-400/12 to-fuchsia-300/12 blur-3xl" />
			</div>

			<div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
				<div className="space-y-12 sm:space-y-16">
					{FEATURES.map((feature, index) => {
						const isReversed = index % 2 === 1;
						const details = FEATURE_DETAILS[feature.title];

						return (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 22 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.35 }}
								transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
								className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_26px_90px_-60px_rgba(0,0,0,0.90)] backdrop-blur"
							>
								<div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-400/10 via-violet-400/10 to-fuchsia-300/10" />

								<div
									className={`grid gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:items-center ${
										isReversed ? "lg:[&>*:first-child]:order-2" : ""
									}`}
								>
									<motion.div
										initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true, amount: 0.45 }}
										transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
										className={`flex w-full items-center justify-center ${
											isReversed ? "lg:justify-end" : "lg:justify-start"
										}`}
									>
										<motion.div
											animate={{ y: [0, -8, 0] }}
											transition={{
												duration: 8.5,
												repeat: Infinity,
												ease: "easeInOut",
											}}
											className="pointer-events-none w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px]"
										>
											<div className="relative">
												<div className="rounded-[34px] border border-white/10 bg-slate-950/90 p-[10px] shadow-[0_26px_90px_-58px_rgba(0,0,0,0.95)]">
													<div className="relative overflow-hidden rounded-[28px] bg-black shadow-[0_18px_60px_-32px_rgba(0,0,0,0.85)]">
														<div className="absolute left-1/2 top-0 z-10 h-6 w-[120px] -translate-x-1/2 rounded-b-[18px] bg-slate-950" />
														<div className="absolute left-1/2 top-[7px] z-10 h-[4px] w-10 -translate-x-1/2 rounded-full bg-white/15" />

														<div className="relative aspect-[9/19] w-full">
															<Image
																src={feature.src}
																alt={feature.alt}
																fill
																sizes="(min-width: 768px) 420px, 90vw"
																className="object-cover object-top"
															/>
														</div>

														<div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),inset_0_-18px_42px_rgba(0,0,0,0.34)]" />
													</div>
												</div>
											</div>
										</motion.div>
									</motion.div>

									<motion.div
										initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true, amount: 0.45 }}
										transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
										className="text-center lg:text-left"
									>
										<div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-6 shadow-[0_14px_50px_-36px_rgba(0,0,0,0.85)] backdrop-blur sm:px-7 sm:py-7 lg:mx-0">
											<h3 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
												{feature.title}
											</h3>
											<p className="mt-3 text-pretty text-sm leading-relaxed text-slate-200/80 sm:text-base">
												{feature.description} {details.more}
											</p>

											{details.bullets ? (
												<ul className="mt-5 space-y-2 text-left text-sm text-slate-200/75">
													{details.bullets.map((item) => (
														<li key={item} className="flex gap-3">
															<span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
															<span className="leading-relaxed">{item}</span>
														</li>
													))}
												</ul>
											) : null}
										</div>
									</motion.div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
