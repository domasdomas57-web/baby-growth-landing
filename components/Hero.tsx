"use client";

import Image from "next/image";
import type { ReactNode, SVGProps } from "react";
import type { Messages } from "@/i18n/messages";
import { trackEvent } from "@/lib/analytics";

const GOOGLE_PLAY_URL =
	"https://play.google.com/store/apps/details?id=com.domce23.babygrowthtracker&hl=en";

const APP_STORE_URL =
	"https://apps.apple.com/lt/app/baby-tracker-ai-soriva/id6759395777";

function GooglePlayIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			{...props}
		>
			<path
				d="M3.7 2.7c-.5.5-.7 1.2-.7 2v14.6c0 .8.2 1.5.7 2L13 12 3.7 2.7Z"
				fill="#34A853"
			/>
			<path
				d="M14.2 10.8 5 2.1c.5-.1 1.1 0 1.8.4l11.2 6.4-3.8 1.9Z"
				fill="#4285F4"
			/>
			<path
				d="M14.2 13.2 18 15.1 6.8 21.5c-.7.4-1.3.5-1.8.4l9.2-8.7Z"
				fill="#FBBC05"
			/>
			<path
				d="M19.6 10.1c1 .6 1.4 1.2 1.4 1.9s-.4 1.3-1.4 1.9l-1.6.9-4.1-2.1 4.1-2.1 1.6.9Z"
				fill="#EA4335"
			/>
		</svg>
	);
}

function AppStoreIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			{...props}
		>
			<path
				d="M16.9 13.3c0-2 1.6-3 1.7-3.1-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.8-2.7-.8-1.4 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 7.9.7.9 1.5 1.9 2.6 1.9 1 0 1.4-.7 2.7-.7s1.6.7 2.7.7c1.1 0 1.9-1 2.6-1.9.8-1.2 1.1-2.3 1.1-2.4-.1 0-2.3-.9-2.3-3.7Z"
				fill="currentColor"
			/>
			<path
				d="M14.7 5.4c.6-.7 1-1.7.9-2.7-.9.1-2 .6-2.6 1.4-.6.7-1.1 1.7-.9 2.7 1 0 2-.6 2.6-1.4Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function StoreButton({
	href,
	ariaLabel,
	icon,
	lead,
	store,
	onClick,
}: {
	href: string;
	ariaLabel: string;
	icon: ReactNode;
	lead: string;
	store: string;
	onClick: () => void;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			onClick={onClick}
			aria-label={ariaLabel}
			className="group inline-flex min-w-[190px] items-center gap-3 rounded-xl bg-black px-4 py-3 text-white ring-1 ring-black/85 transition hover:-translate-y-0.5 hover:ring-indigo-400/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
		>
			<span className="inline-flex h-8 w-8 items-center justify-center text-white">
				{icon}
			</span>
			<span className="flex flex-col leading-none">
				<span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
					{lead}
				</span>
				<span className="mt-1 text-base font-semibold">{store}</span>
			</span>
		</a>
	);
}

export default function Hero({ messages }: { messages: Messages["hero"] }) {
	const navItems = [
		{ label: "Features", href: "#features" },
		{ label: "Showcase", href: "#showcase" },
		{ label: "Reviews", href: "#reviews" },
		{ label: "Contact", href: "#contact" },
	];

	return (
		<section className="relative overflow-hidden pb-14 pt-10 sm:pb-20 sm:pt-14" aria-labelledby="hero-title">
			<div className="absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-gradient-to-br from-[#6f79ff] via-[#5b4fd8] to-[#3f58d6]" />
				<div className="absolute -top-28 left-1/2 h-[440px] w-[840px] -translate-x-1/2 rounded-full bg-[#b8bfff]/20 blur-3xl" />
				<div className="absolute bottom-[-180px] left-[-120px] h-[420px] w-[420px] rounded-full bg-[#7cc8ff]/20 blur-3xl" />
				<div className="absolute right-[-140px] top-[-80px] h-[300px] w-[300px] rounded-full bg-[#8f6cff]/20 blur-3xl" />
			</div>

			<div className="mx-auto max-w-6xl px-5 sm:px-6">
				<div className="mx-auto max-w-3xl text-center text-white">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
						{messages.badge}
					</p>
					<h1 id="hero-title" className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-5xl">
						Baby Tracker
					</h1>
					<p className="mt-2 text-base text-white/85 sm:text-xl">{messages.subtitle}</p>
				</div>

				<div className="relative mt-8 overflow-hidden rounded-[30px] border border-white/35 bg-white shadow-[0_35px_120px_-60px_rgba(8,15,70,0.95)] sm:mt-10">
					<div className="absolute inset-y-0 right-0 hidden w-[42%] bg-gradient-to-b from-[#5f89ff] via-[#5f67ff] to-[#5945cd] lg:block" />
					<div className="absolute -right-24 bottom-[-120px] hidden h-[320px] w-[320px] rounded-full bg-white/25 blur-3xl lg:block" />

					<div className="relative border-b border-slate-200 px-4 py-4 sm:px-6">
						<div className="flex items-center justify-between gap-4">
							<div className="inline-flex items-center gap-2">
								<Image
									src="/icon.png"
									alt="Baby Tracker app icon"
									width={36}
									height={36}
									className="rounded-xl"
									priority
								/>
								<p className="text-sm font-semibold text-slate-900">Baby Tracker</p>
							</div>

							<nav className="hidden items-center gap-5 text-sm font-semibold text-slate-600 md:flex">
								{navItems.map((item) => (
									<a key={item.href} href={item.href} className="transition hover:text-indigo-600">
										{item.label}
									</a>
								))}
							</nav>
						</div>
					</div>

					<div className="relative grid gap-7 px-4 py-7 sm:px-6 sm:py-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-10 lg:px-8">
						<div>
							<h2 className="text-balance text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
								{messages.title}
							</h2>
							<p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
								{messages.seoText}
							</p>

							<div className="mt-6 flex flex-wrap gap-3">
								<StoreButton
									href={APP_STORE_URL}
									ariaLabel={messages.appStoreAria}
									lead={messages.appStoreCtaLead}
									store={messages.appStore}
									onClick={() => trackEvent("click_appstore", { placement: "hero_primary" })}
									icon={<AppStoreIcon className="h-8 w-8" />}
								/>
								<StoreButton
									href={GOOGLE_PLAY_URL}
									ariaLabel={messages.googlePlayAria}
									lead={messages.googlePlayCtaLead}
									store={messages.googlePlay}
									onClick={() => trackEvent("click_googleplay", { placement: "hero_primary" })}
									icon={<GooglePlayIcon className="h-8 w-8" />}
								/>
							</div>

							<p className="mt-4 text-xs font-medium text-slate-500">{messages.noAdsNote}</p>
						</div>

						<div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
							<div className="absolute left-1/2 top-8 -z-10 h-48 w-48 -translate-x-1/2 rounded-full bg-indigo-300/45 blur-3xl lg:top-12" />
							<div className="grid grid-cols-2 items-end gap-4">
								<div className="overflow-hidden rounded-3xl border border-white/50 shadow-[0_30px_70px_-38px_rgba(18,25,88,0.55)]">
									<Image
										src="/screenshots/1.png"
										alt="Baby Tracker sleep and feeding dashboard"
										width={1080}
										height={1920}
										priority
										sizes="(min-width: 1024px) 210px, (min-width: 640px) 38vw, 46vw"
										className="h-auto w-full"
									/>
								</div>

								<div className="translate-y-6 overflow-hidden rounded-3xl border border-white/50 shadow-[0_30px_70px_-38px_rgba(18,25,88,0.55)]">
									<Image
										src="/screenshots/2.png"
										alt="Baby Tracker daily activity summary"
										width={1080}
										height={1920}
										sizes="(min-width: 1024px) 210px, (min-width: 640px) 38vw, 46vw"
										className="h-auto w-full"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
