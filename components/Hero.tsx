"use client";

import Image from "next/image";
import type { ReactNode, SVGProps } from "react";
import type { Messages } from "@/i18n/messages";
import { trackEvent } from "@/lib/analytics";
import PhoneMockup from "@/components/PhoneMockup";

const GOOGLE_PLAY_URL =
	"https://play.google.com/store/apps/details?id=com.domce23.babygrowthtracker&hl=en";

const APP_STORE_URL =
	"https://apps.apple.com/lt/app/baby-tracker-ai-soriva/id6759395777";

const HERO_VIDEO_URL = "/videos/Track%20Everything%20%281%29.mp4";

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
			className="group inline-flex min-w-[162px] items-center gap-3 rounded-xl bg-black px-3.5 py-3 text-white ring-1 ring-black/85 transition hover:-translate-y-0.5 hover:ring-indigo-400/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:min-w-[190px] sm:px-4"
		>
			<span className="inline-flex h-8 w-8 items-center justify-center text-white">
				{icon}
			</span>
			<span className="flex flex-col leading-none">
				<span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
					{lead}
				</span>
				<span className="mt-1 text-base font-semibold leading-none">{store}</span>
			</span>
		</a>
	);
}

export default function Hero({ messages }: { messages: Messages["hero"] }) {
	const socialLinks = [
		{
			name: "Facebook",
			href: "https://www.facebook.com/profile.php?id=61587090322816",
			icon: (
				<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
					<path
						d="M13.2 21v-8h2.6l.4-3h-3v-1.9c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.5-.1-2.4 0-4 1.5-4 4.2V10H7v3h3v8h3.2Z"
						fill="#1877F2"
					/>
				</svg>
			),
		},
		{
			name: "Instagram",
			href: "https://www.instagram.com/babygrowthtrackerapp/?hl=en",
			icon: (
				<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
					<defs>
						<linearGradient id="instagramGradient" x1="4" y1="20" x2="20" y2="4" gradientUnits="userSpaceOnUse">
							<stop offset="0" stopColor="#FEDA75" />
							<stop offset="0.35" stopColor="#FA7E1E" />
							<stop offset="0.6" stopColor="#D62976" />
							<stop offset="0.8" stopColor="#962FBF" />
							<stop offset="1" stopColor="#4F5BD5" />
						</linearGradient>
					</defs>
					<rect x="3" y="3" width="18" height="18" rx="5" stroke="url(#instagramGradient)" strokeWidth="2" />
					<circle cx="12" cy="12" r="4" stroke="url(#instagramGradient)" strokeWidth="2" />
					<circle cx="17.5" cy="6.5" r="1.1" fill="#D62976" />
				</svg>
			),
		},
		{
			name: "TikTok",
			href: "https://www.tiktok.com/@baby.app",
			icon: (
				<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
					<path
						d="M14.3 4c.8 1.4 1.9 2.4 3.6 2.8v2.4a7.5 7.5 0 0 1-3.6-1v4.9a5 5 0 1 1-5-5h.4V11a2.5 2.5 0 1 0 2 2.4V4h2.6Z"
						fill="#25F4EE"
						opacity="0.95"
					/>
					<path
						d="M13.7 3.3c.8 1.4 1.9 2.4 3.6 2.8v2.4a7.5 7.5 0 0 1-3.6-1v4.9a5 5 0 1 1-5-5h.4v2.9a2.5 2.5 0 1 0 2 2.4V3.3h2.6Z"
						fill="#FE2C55"
						opacity="0.9"
					/>
					<path
						d="M14 3.6c.8 1.3 1.9 2.2 3.4 2.5v2.4c-1.3-.1-2.4-.5-3.4-1.2v6.1A5.3 5.3 0 1 1 9.4 8v2.5a2.8 2.8 0 1 0 2.1 2.8V3.6H14Z"
						fill="#111111"
					/>
				</svg>
			),
		},
	];

	return (
		<section className="relative overflow-hidden pb-14 pt-10 sm:pb-20 sm:pt-14" aria-labelledby="hero-title">
			<div className="absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-gradient-to-br from-[#6f79ff] via-[#5b4fd8] to-[#3f58d6]" />
				<div className="absolute -top-28 left-1/2 h-[440px] w-[840px] -translate-x-1/2 rounded-full bg-[#b8bfff]/20 blur-3xl" />
				<div className="absolute bottom-[-180px] left-[-120px] h-[420px] w-[420px] rounded-full bg-[#7cc8ff]/20 blur-3xl" />
				<div className="absolute right-[-140px] top-[-80px] h-[300px] w-[300px] rounded-full bg-[#8f6cff]/20 blur-3xl" />
				<div className="absolute inset-x-0 bottom-[-1px] h-28 bg-gradient-to-b from-transparent via-[#4659a9]/60 to-slate-950 sm:h-36" />
			</div>

			<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:relative">
				<div className="mx-auto max-w-3xl text-center text-white">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
						{messages.badge}
					</p>
					<h1 id="hero-title" className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-5xl">
						Baby Tracker
					</h1>
					<p className="mt-2 text-base text-white/85 sm:text-xl">{messages.subtitle}</p>
				</div>

				<div className="relative mt-8 overflow-hidden rounded-[30px] border border-white/35 bg-gradient-to-br from-slate-100 via-slate-200/90 to-slate-300/80 shadow-[0_35px_120px_-60px_rgba(8,15,70,0.95)] sm:mt-10 lg:-translate-x-64">
					<div className="absolute -right-24 bottom-[-120px] hidden h-[320px] w-[320px] rounded-full bg-white/25 blur-3xl lg:block" />

					<div className="relative border-b border-slate-300/70 px-4 py-4 sm:px-6">
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
								<p className="text-sm font-semibold text-slate-900">Baby Tracker: Feed & Sleep Log</p>
							</div>

							<nav className="hidden items-center gap-2 text-slate-600 md:flex">
								<span className="mr-1 text-[11px] font-normal normal-case tracking-normal text-slate-500">
									{messages.followUsOn}
								</span>
								{socialLinks.map((item) => (
									<a
										key={item.name}
										href={item.href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={item.name}
										className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/80 bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 shadow-sm transition hover:border-indigo-300 hover:text-indigo-600"
									>
										{item.icon}
									</a>
								))}
							</nav>
						</div>
					</div>

					<div className="relative grid gap-7 px-4 py-7 sm:px-6 sm:py-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-10 lg:px-8">
						<div className="flex h-full flex-col">
							<h2 className="text-balance text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
								{messages.title}
							</h2>
							<p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
								{messages.seoText}
							</p>

							<div className="mt-10 flex flex-wrap gap-3 lg:mt-auto lg:pt-10">
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

							<p className="mt-5 text-xs font-medium text-slate-500">{messages.noAdsNote}</p>
						</div>

						<div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
							<div className="absolute left-1/2 top-8 -z-10 h-48 w-48 -translate-x-1/2 rounded-full bg-slate-200/60 blur-3xl lg:top-12" />
							<div className="grid grid-cols-2 items-end gap-2.5 sm:gap-3">
								<div className="overflow-hidden rounded-3xl shadow-[0_26px_64px_-18px_rgba(15,23,42,0.42),0_10px_24px_-14px_rgba(15,23,42,0.35)]">
									<Image
										src="/screenshots/1.png"
										alt="Baby Tracker sleep and feeding dashboard"
										width={1080}
										height={1920}
										priority
										sizes="(min-width: 1024px) 210px, (min-width: 640px) 38vw, 46vw"
										className="h-[330px] w-full object-cover object-top sm:h-[400px]"
									/>
								</div>

								<div className="overflow-hidden rounded-3xl shadow-[0_26px_64px_-18px_rgba(15,23,42,0.42),0_10px_24px_-14px_rgba(15,23,42,0.35)]">
									<Image
										src="/screenshots/2.png"
										alt="Baby Tracker daily activity summary"
										width={1080}
										height={1920}
										sizes="(min-width: 1024px) 210px, (min-width: 640px) 38vw, 46vw"
										className="h-[330px] w-full object-cover object-top sm:h-[400px]"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-8 flex justify-center lg:hidden">
					<PhoneMockup
						videoSrc={HERO_VIDEO_URL}
						poster="/screenshots/1.png"
						className="scale-[0.86] sm:scale-95"
					/>
				</div>

				<div className="hidden lg:absolute lg:right-[-180px] lg:top-[74px] lg:block xl:right-[-220px] xl:top-[62px]">
					<PhoneMockup videoSrc={HERO_VIDEO_URL} poster="/screenshots/1.png" />
				</div>
			</div>
		</section>
	);
}
