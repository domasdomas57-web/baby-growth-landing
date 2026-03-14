import Image from "next/image";
import type { SVGProps } from "react";
import type { Messages } from "@/i18n/messages";

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

export default function Hero({ messages }: { messages: Messages["hero"] }) {
	return (
		<section className="relative overflow-hidden" aria-labelledby="hero-title">
			<div className="absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/90 to-slate-950" />
				<div className="absolute inset-0 bg-gradient-to-br from-[#7DD3FC]/10 via-[#C4B5FD]/10 to-[#F6A6C1]/10" />
				<div className="absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#7DD3FC]/25 via-[#C4B5FD]/25 to-[#F6A6C1]/25 blur-3xl" />
				<div className="absolute bottom-[-240px] left-[-200px] h-[560px] w-[560px] rounded-full bg-[#7DD3FC]/10 blur-3xl" />
				<div className="absolute bottom-[-300px] right-[-240px] h-[680px] w-[680px] rounded-full bg-[#F6A6C1]/10 blur-3xl" />
			</div>

			<a
				href={GOOGLE_PLAY_URL}
				target="_blank"
				rel="noreferrer"
				aria-label="Open Baby Growth Tracker – AI on Google Play"
				className="absolute left-5 top-5 z-10 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] p-2 shadow-[0_18px_60px_-44px_rgba(0,0,0,0.95)] backdrop-blur transition hover:bg-white/[0.09] sm:left-6 sm:top-6 lg:left-10 lg:top-8"
			>
				<Image
					src="/icon.png"
					alt="Baby Growth Tracker – AI"
					width={56}
					height={56}
					className="rounded-2xl"
					priority
				/>
			</a>

			<div className="mx-auto max-w-6xl px-5 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16">
				<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
					<div className="text-center lg:text-left">
						<div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 shadow-sm backdrop-blur md:mx-0">
							<span className="inline-block h-2 w-2 rounded-full bg-[#7DD3FC]" />
							{messages.badge}
						</div>

						<h1
							id="hero-title"
							className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
						>
							Baby Growth Tracker – AI
						</h1>

						<p className="mt-4 text-pretty text-base leading-relaxed text-slate-200/80 sm:text-lg">
							{messages.tagline}
						</p>

						<div className="mt-7 flex flex-col items-stretch gap-2 sm:items-center lg:items-start">
							<div className="flex w-full flex-wrap items-stretch justify-center gap-2 lg:justify-start">
								<a
								href={GOOGLE_PLAY_URL}
								className="relative isolate inline-flex w-full max-w-[200px] rounded-md p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7DD3FC]"
								aria-label={messages.googlePlayAria}
							>
								<span
									aria-hidden="true"
									className="absolute -inset-2 -z-10 rounded-[10px] bg-gradient-to-r from-[#7DD3FC] via-[#C4B5FD] to-[#F6A6C1] opacity-35 blur-xl"
								/>
								<span
									aria-hidden="true"
									className="absolute inset-0 -z-10 rounded-md bg-gradient-to-r from-[#7DD3FC] via-[#C4B5FD] to-[#F6A6C1] opacity-70"
								/>
								<span className="inline-flex w-full items-center justify-start gap-3 rounded-[5px] bg-black px-3 py-3 pr-4 text-white ring-1 ring-white/15 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.85)]">
									<GooglePlayIcon className="h-7 w-7" />
									<span className="flex flex-col items-start leading-none">
										<span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
											{messages.getItOn}
										</span>
										<span className="text-base font-semibold">{messages.googlePlay}</span>
									</span>
								</span>
								</a>

								<a
								href={APP_STORE_URL}
								className="relative isolate inline-flex w-full max-w-[200px] rounded-md p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7DD3FC]"
								aria-label={messages.appStoreAria}
							>
								<span
									aria-hidden="true"
									className="absolute -inset-2 -z-10 rounded-[10px] bg-gradient-to-r from-[#7DD3FC] via-[#C4B5FD] to-[#F6A6C1] opacity-35 blur-xl"
								/>
								<span
									aria-hidden="true"
									className="absolute inset-0 -z-10 rounded-md bg-gradient-to-r from-[#7DD3FC] via-[#C4B5FD] to-[#F6A6C1] opacity-70"
								/>
								<span className="inline-flex w-full items-center justify-start gap-3 rounded-[5px] bg-black px-3 py-3 pr-4 text-white ring-1 ring-white/15 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.85)]">
									<AppStoreIcon className="h-7 w-7" />
									<span className="flex flex-col items-start leading-none">
										<span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
											{messages.getItOn}
										</span>
										<span className="text-base font-semibold">{messages.appStore}</span>
									</span>
								</span>
								</a>
							</div>

							<div className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-xs text-white/75 shadow-sm backdrop-blur sm:w-auto">
								<div className="flex items-center gap-2">
									<span className="font-medium text-white/90">{messages.privacyTitle}</span>
									<span className="text-white/60">•</span>
									<span className="text-white/70">{messages.privacySubtitle}</span>
								</div>
							</div>
						</div>

						<p className="mt-4 text-xs text-slate-200/60">
							{messages.noAdsNote}
						</p>
					</div>

					<div className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[520px]">
						<div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-[#7DD3FC]/15 via-[#C4B5FD]/10 to-[#F6A6C1]/10 blur-2xl" />
						<div className="grid items-end gap-5 sm:grid-cols-2">
							<div className="overflow-hidden rounded-3xl border border-white/10 shadow-[0_24px_80px_-52px_rgba(0,0,0,0.95)]">
								<Image
									src="/screenshots/1.png"
									alt="Baby Growth Tracker – AI screenshot 1"
									width={1080}
									height={1920}
									priority
									sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 90vw"
									className="h-auto w-full"
								/>
							</div>

							<div className="overflow-hidden rounded-3xl border border-white/10 shadow-[0_24px_80px_-52px_rgba(0,0,0,0.95)]">
								<Image
									src="/screenshots/2.png"
									alt="Baby Growth Tracker – AI screenshot 2"
									width={1080}
									height={1920}
									sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 90vw"
									className="h-auto w-full"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
