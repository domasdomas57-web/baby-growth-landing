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

export default function FeatureShowcase() {
	return (
		<section className="relative overflow-hidden" aria-label="Feature showcase">
			<div className="absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/70 to-slate-950" />
				<div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-violet-400/5 to-fuchsia-300/5" />
				<div className="absolute -top-28 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/12 via-violet-400/12 to-fuchsia-300/12 blur-3xl" />
			</div>

			<div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
				<div className="space-y-8 sm:space-y-10">
					{FEATURES.map((feature, index) => {
						const isReversed = index % 2 === 1;

						return (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 18 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.35 }}
								transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
								className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-[0_18px_70px_-40px_rgba(0,0,0,0.85)] backdrop-blur"
							>
								<div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-400/10 via-violet-400/10 to-fuchsia-300/10" />

								<div
									className={`grid gap-8 p-6 sm:p-10 md:grid-cols-2 md:items-center ${
										isReversed ? "md:[&>*:first-child]:order-2" : ""
									}`}
								>
									<motion.div
										initial={{ opacity: 0, x: isReversed ? 18 : -18 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true, amount: 0.45 }}
										transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
										className="mx-auto w-full max-w-[420px]"
									>
										<motion.div
											animate={{ y: [0, -8, 0] }}
											transition={{
												duration: 7.5,
												repeat: Infinity,
												ease: "easeInOut",
											}}
											className="pointer-events-none"
										>
											<div className="relative">
												<div className="absolute -inset-6 -z-10 rounded-[34px] bg-gradient-to-br from-sky-400/12 via-violet-400/10 to-fuchsia-300/10 blur-2xl" />

												<div className="rounded-[36px] border border-white/10 bg-slate-950/90 p-[10px] shadow-[0_30px_110px_-55px_rgba(0,0,0,0.95)]">
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
										initial={{ opacity: 0, x: isReversed ? -18 : 18 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true, amount: 0.45 }}
										transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
										className="text-center md:text-left"
									>
										<h3 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
											{feature.title}
										</h3>
										<p className="mt-3 text-pretty text-sm leading-relaxed text-slate-200/80 sm:text-base">
											{feature.description}
										</p>
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
