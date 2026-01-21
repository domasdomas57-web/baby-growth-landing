import type { ReactNode } from "react";

function FeatureIcon({ children }: { children: ReactNode }) {
	return (
		<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/70 text-black/80 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/80">
			{children}
		</div>
	);
}

const FEATURES: Array<{
	title: string;
	description: string;
	icon: ReactNode;
}> = [
	{
		title: "Sleep tracking",
		description:
			"Log naps and nighttime sleep in seconds, then review patterns by day or week.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5"
				aria-hidden="true"
			>
				<path
					d="M12 3a7 7 0 1 0 7 7"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<path
					d="M12 7v5l3 2"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		title: "Feeding tracking",
		description:
			"Track breast, bottle, solids, and quantities with quick presets and notes.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5"
				aria-hidden="true"
			>
				<path
					d="M9 3h6"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<path
					d="M10 3v5a2 2 0 0 0 4 0V3"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinejoin="round"
				/>
				<path
					d="M8 11h8v7a4 4 0 0 1-8 0v-7Z"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		title: "AI insights & warnings",
		description:
			"Gentle summaries plus smarter alerts when something looks off—without panic.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5"
				aria-hidden="true"
			>
				<path
					d="M12 3a7 7 0 0 0-4 12v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a7 7 0 0 0-4-12Z"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinejoin="round"
				/>
				<path
					d="M9 21h6"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<path
					d="M12 8v4"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<path
					d="M12 15h.01"
					stroke="currentColor"
					strokeWidth="3"
					strokeLinecap="round"
				/>
			</svg>
		),
	},
	{
		title: "Growth charts",
		description:
			"See weight and height trends with clean charts and quick milestone snapshots.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5"
				aria-hidden="true"
			>
				<path
					d="M4 19V5"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<path
					d="M4 19h16"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<path
					d="M7 14l3-3 3 2 4-5"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		title: "Multiple caregivers",
		description:
			"Share your baby profile with caregivers so everyone stays in sync and informed.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5"
				aria-hidden="true"
			>
				<path
					d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinejoin="round"
				/>
				<path
					d="M8 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinejoin="round"
				/>
				<path
					d="M20 20a5 5 0 0 0-8-4"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<path
					d="M12 20a5 5 0 0 0-10 0"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		),
	},
];

export default function Features() {
	return (
		<section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
			<div className="rounded-3xl border border-black/10 bg-white/50 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-10">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-balance text-2xl font-semibold tracking-tight text-black sm:text-3xl dark:text-white">
						Everything you need for baby tracking
					</h2>
					<p className="mt-3 text-pretty text-sm leading-relaxed text-black/70 sm:text-base dark:text-white/70">
						Sleep, feeding, growth, and caregiver collaboration—wrapped in a calm, trustworthy experience.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{FEATURES.map((feature) => (
						<div
							key={feature.title}
							className="rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5"
						>
							<div className="flex items-start gap-4">
								<FeatureIcon>{feature.icon}</FeatureIcon>
								<div>
									<h3 className="text-sm font-semibold text-black dark:text-white">
										{feature.title}
									</h3>
									<p className="mt-1 text-sm text-black/70 dark:text-white/70">
										{feature.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
