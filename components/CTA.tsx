import type { Messages } from "@/i18n/messages";

const GOOGLE_PLAY_URL =
	"https://play.google.com/store/apps/details?id=com.domce23.babygrowthtracker&hl=en";

type CTAProps = {
	title?: string;
	description?: string;
	note?: string;
	googlePlayAria?: string;
	getItOn?: string;
	googlePlayLabel?: string;
	className?: string;
};

function GooglePlayIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			className="h-5 w-5"
		>
			<path
				d="M3.7 2.7c-.5.5-.7 1.2-.7 2v14.6c0 .8.2 1.5.7 2L13 12 3.7 2.7Z"
				fill="currentColor"
				opacity="0.9"
			/>
			<path
				d="M14.2 10.8 5 2.1c.5-.1 1.1 0 1.8.4l11.2 6.4-3.8 1.9Z"
				fill="currentColor"
				opacity="0.55"
			/>
			<path
				d="M14.2 13.2 18 15.1 6.8 21.5c-.7.4-1.3.5-1.8.4l9.2-8.7Z"
				fill="currentColor"
				opacity="0.55"
			/>
			<path
				d="M19.6 10.1c1 .6 1.4 1.2 1.4 1.9s-.4 1.3-1.4 1.9l-1.6.9-4.1-2.1 4.1-2.1 1.6.9Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default function CTA({ messages }: { messages: Messages["cta"] }) {
	return (
		<CTASection
			title={messages.title}
			description={messages.description}
			note={messages.note}
			googlePlayAria={messages.downloadAria}
			getItOn={messages.getItOn}
			googlePlayLabel={messages.googlePlay}
		/>
	);
}

export function CTASection({
	title = "Ready for calmer days?",
	description =
		"Download Baby Growth Tracker – AI to track sleep, feeding, and growth with AI insights and gentle warnings.",
	note = "Fast setup • Multiple caregivers • Privacy-first",
	googlePlayAria = "Download on Google Play",
	getItOn = "Get it on",
	googlePlayLabel = "Google Play",
	className,
}: CTAProps) {
	return (
		<section
			className={(
				className ?? "mx-auto max-w-6xl px-5 pb-16 sm:px-6 sm:pb-24"
				).trim()}
		>
			<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black px-6 py-10 text-white shadow-sm sm:px-10 sm:py-14">
				<div className="absolute inset-0 -z-10">
					<div className="absolute -top-16 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500/25 via-violet-500/25 to-emerald-500/25 blur-3xl" />
					<div className="absolute bottom-[-260px] right-[-220px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
				</div>

				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
						{title}
					</h2>
					<p className="mt-3 text-pretty text-sm leading-relaxed text-white/75 sm:text-base">
						{description}
					</p>

					<div className="mt-7 flex flex-col items-center gap-3">
						<a
							href={GOOGLE_PLAY_URL}
							className="inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-base font-semibold text-black shadow-sm ring-1 ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
							aria-label={googlePlayAria}
						>
							<GooglePlayIcon />
							<span className="flex flex-col items-start leading-none">
								<span className="text-[11px] font-medium opacity-80">{getItOn}</span>
								<span className="text-base">{googlePlayLabel}</span>
							</span>
						</a>
						<p className="text-xs text-white/60">{note}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
