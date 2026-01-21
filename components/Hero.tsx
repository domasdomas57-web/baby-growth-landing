import Image from "next/image";
import type { SVGProps } from "react";

const GOOGLE_PLAY_URL =
	"https://play.google.com/store/apps/details?id=com.domce23.babygrowthtracker&hl=en";

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

export default function Hero() {
	return (
		<section className="relative overflow-hidden" aria-labelledby="hero-title">
			<div className="absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/90 to-slate-950" />
				<div className="absolute inset-0 bg-gradient-to-br from-[#7DD3FC]/10 via-[#C4B5FD]/10 to-[#F6A6C1]/10" />
				<div className="absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#7DD3FC]/25 via-[#C4B5FD]/25 to-[#F6A6C1]/25 blur-3xl" />
				<div className="absolute bottom-[-240px] left-[-200px] h-[560px] w-[560px] rounded-full bg-[#7DD3FC]/10 blur-3xl" />
				<div className="absolute bottom-[-300px] right-[-240px] h-[680px] w-[680px] rounded-full bg-[#F6A6C1]/10 blur-3xl" />
			</div>

			<div className="mx-auto max-w-6xl px-5 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16">
				<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
					<div className="text-center lg:text-left">
						<div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 shadow-sm backdrop-blur md:mx-0">
							<span className="inline-block h-2 w-2 rounded-full bg-[#7DD3FC]" />
							AI-powered baby care insights
						</div>

						<h1
							id="hero-title"
							className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
						>
							Baby Growth Tracker – AI
						</h1>

						<p className="mt-4 text-pretty text-base leading-relaxed text-slate-200/80 sm:text-lg">
							Track sleep • feeding • growth with AI insights
						</p>

						<div className="mt-7 flex flex-col items-stretch gap-2 sm:items-center lg:items-start">
							<a
								href={GOOGLE_PLAY_URL}
								className="inline-flex w-full max-w-[200px] items-center justify-center gap-3 rounded-md bg-black px-4 py-3 text-white shadow-sm ring-1 ring-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7DD3FC]"
								aria-label="Download on Google Play"
							>
								<GooglePlayIcon className="h-6 w-6" />
								<span className="flex flex-col items-start leading-none">
									<span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
										Get it on
									</span>
									<span className="text-base font-semibold">Google Play</span>
								</span>
							</a>

							<div className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-xs text-white/75 shadow-sm backdrop-blur sm:w-auto">
								<div className="flex items-center gap-2">
									<span className="font-medium text-white/90">Private by design</span>
									<span className="text-white/60">•</span>
									<span className="text-white/70">Sync across devices.</span>
								</div>
							</div>
						</div>

						<p className="mt-4 text-xs text-slate-200/60">
							No ads in core tracking. Designed for one-handed use.
						</p>
					</div>

					<div className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[520px]">
						<div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-[#7DD3FC]/15 via-[#C4B5FD]/10 to-[#F6A6C1]/10 blur-2xl" />
						<div className="rounded-[28px] border border-white/10 bg-white/10 p-2 shadow-sm backdrop-blur sm:p-3">
							<div className="relative w-full overflow-hidden rounded-[20px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10),inset_0_-16px_36px_rgba(0,0,0,0.28)]">
								<div className="relative aspect-[9/16] w-full">
									<Image
										src="/screenshots/app-home.png"
										alt="Baby Growth Tracker – AI app screen mockup"
										fill
										priority
										sizes="(min-width: 1024px) 520px, 90vw"
										className="object-cover object-top"
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
