"use client";

import Image from "next/image";
import {
	AnimatePresence,
	motion,
	useAnimationFrame,
	useMotionValue,
	useReducedMotion,
} from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import type { Messages } from "@/i18n/messages";

const SHOWCASE_SCREENSHOTS: ReadonlyArray<{ src: string; alt: string }> = [
	{ src: "/showcase/Sleep predictions.webp", alt: "Sleep predictions screen" },
	{ src: "/showcase/Growth tracking.webp", alt: "Growth tracking screen" },
	{ src: "/showcase/AI insights.webp", alt: "AI insights screen" },
	{ src: "/showcase/caregivers.webp", alt: "Caregivers collaboration screen" },
	{ src: "/showcase/teething.webp", alt: "Teething tracker screen" },
	{ src: "/showcase/widgets.webp", alt: "Home widgets screen" },
];

export default function FeatureShowcase({
	messages,
}: {
	messages: Messages["featureShowcase"];
}) {
	const shouldReduceMotion = useReducedMotion();
	const baseId = useId();
	const [openCardKey, setOpenCardKey] = useState<string | null>(null);
	const [isHovered, setIsHovered] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const x = useMotionValue(0);
	const setRef = useRef<HTMLDivElement | null>(null);
	const [setWidth, setSetWidth] = useState(0);

	const normalizeX = () => {
		if (setWidth <= 0) return;

		let current = x.get();
		while (current <= -setWidth) current += setWidth;
		while (current > 0) current -= setWidth;
		x.set(current);
	};

	useEffect(() => {
		const el = setRef.current;
		if (!el) return;

		const measure = () => {
			setSetWidth(el.scrollWidth);
		};

		measure();
		const ro = new ResizeObserver(() => measure());
		ro.observe(el);

		return () => ro.disconnect();
	}, []);

	useAnimationFrame((_, delta) => {
		if (shouldReduceMotion) return;
		if (isHovered) return;
		if (isDragging) return;
		if (setWidth <= 0) return;

		const pxPerSecond = 24;
		const next = x.get() - (pxPerSecond * delta) / 1000;

		if (next <= -setWidth) {
			x.set(next + setWidth);
			return;
		}

		x.set(next);
	});

	const renderCard = (screenshot: { src: string; alt: string }, idx: number, keyPrefix: string) => {
		const tab = messages.tabs[idx % messages.tabs.length];
		const screenshotAlt =
			messages.screenshotAlts[idx % messages.screenshotAlts.length] ?? screenshot.alt;
		const more = messages.learnMorePanels[idx % messages.learnMorePanels.length];
		const cardKey = `${keyPrefix}-${idx}`;
		const panelId = `${baseId}-${keyPrefix}-${idx}`;
		const isOpen = openCardKey === cardKey;

		return (
			<motion.article
				key={panelId}
				initial={{ opacity: 0, y: 14 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
				className="group relative w-[290px] shrink-0 snap-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_26px_90px_-60px_rgba(0,0,0,0.90)] backdrop-blur sm:w-[340px] sm:p-7 lg:w-[360px]"
			>
				<div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-400/10 via-violet-400/10 to-fuchsia-300/10" />

				<div className="flex flex-col items-center text-center">
					<div className="relative [perspective:1200px]">
						<div className="overflow-hidden rounded-2xl border border-white/15 shadow-[0_30px_80px_-34px_rgba(0,0,0,0.95),0_14px_28px_-18px_rgba(56,189,248,0.20)] transition duration-500 [transform:rotateX(5deg)_rotateY(-3deg)_translateZ(0)] group-hover:[transform:rotateX(0deg)_rotateY(0deg)_translateZ(0)]">
						<Image
							src={screenshot.src}
							alt={screenshotAlt}
							width={760}
							height={1520}
							sizes="(min-width: 1024px) 320px, (min-width: 640px) 300px, 80vw"
							className="h-[360px] w-full object-cover object-top"
						/>
							<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(150deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.06)_22%,rgba(0,0,0,0)_45%)]" />
							<div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-26px_40px_rgba(2,6,23,0.33)]" />
						</div>
						<div className="pointer-events-none absolute -bottom-5 left-1/2 h-8 w-[76%] -translate-x-1/2 rounded-full bg-black/45 blur-xl" />
					</div>

					<h3 className="mt-6 text-balance text-lg font-semibold tracking-tight text-white sm:text-xl">
						{tab.title}
					</h3>
					<p className="mt-2 text-pretty text-sm leading-relaxed text-slate-200/80">
						{tab.description} {tab.more}
					</p>

					<button
						type="button"
						aria-expanded={isOpen}
						aria-controls={panelId}
						onClick={() =>
							setOpenCardKey((current) => (current === cardKey ? null : cardKey))
						}
						className="mt-5 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-6 py-2 text-xs font-medium tracking-wide text-white/90 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.90)] backdrop-blur transition hover:border-white/30 hover:bg-white/[0.06]"
					>
						{isOpen ? messages.close : messages.learnMoreHeadingPrefix}
					</button>

					<AnimatePresence initial={false}>
						{isOpen ? (
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
										<p key={p} className="mt-2 text-sm leading-relaxed text-slate-200/80">
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
	};

	return (
		<section className="relative overflow-hidden" aria-label={messages.ariaLabel}>
			<div className="absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/70 to-slate-950" />
				<div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-violet-400/5 to-fuchsia-300/5" />
				<div className="absolute -top-28 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/12 via-violet-400/12 to-fuchsia-300/12 blur-3xl" />
			</div>

			<div className="w-full px-5 py-14 sm:px-6 sm:py-20 lg:px-10 2xl:px-16">
				<div className="mb-10 text-center sm:mb-12">
					<h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
						{messages.heading}
					</h2>
					<p className="mx-auto mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-slate-200/70 sm:text-base">
						{messages.subtitle}
					</p>
				</div>

				<div
					className="relative"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
					<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-950 via-slate-950/70 to-transparent" />

					<div className="no-scrollbar overflow-hidden pb-2 sm:pb-3">
						<motion.div
							style={{ x }}
							drag="x"
							dragMomentum={false}
							dragElastic={0.06}
							dragConstraints={{ left: -setWidth, right: 0 }}
							onDragStart={() => setIsDragging(true)}
							onDragEnd={() => {
								setIsDragging(false);
								normalizeX();
							}}
							className="flex w-max snap-x snap-mandatory gap-4 pr-2 will-change-transform touch-pan-y cursor-grab active:cursor-grabbing sm:gap-6 sm:pr-4"
						>
							<div ref={setRef} className="flex w-max snap-x snap-mandatory gap-4 pr-2 sm:gap-6 sm:pr-4">
								{SHOWCASE_SCREENSHOTS.map((screenshot, idx) =>
									renderCard(screenshot, idx, "main")
								)}
							</div>

							<div className="flex w-max snap-x snap-mandatory gap-4 pr-2 sm:gap-6 sm:pr-4">
								{SHOWCASE_SCREENSHOTS.map((screenshot, idx) =>
									renderCard(screenshot, idx, "clone")
								)}
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}