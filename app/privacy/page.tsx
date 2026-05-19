import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="rounded-[2.5rem] border border-white/70 bg-white/88 p-8 shadow-[0_36px_80px_-52px_rgba(90,120,168,0.35)] backdrop-blur sm:p-10 lg:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">Privacy Policy</p>
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
          Privacy, clearly explained.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          We keep the website and app experience focused on trust, clarity, and respectful data handling.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600 sm:text-base">
          <section>
            <h2 className="text-lg font-semibold text-slate-950">What this site collects</h2>
            <p className="mt-2">
              This landing page may collect limited analytics and the information you intentionally provide through app store visits or contact requests.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">How information is used</h2>
            <p className="mt-2">
              Information is used to improve the product, understand interest in the app, respond to support questions, and keep the experience reliable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">Contact</h2>
            <p className="mt-2">
              For privacy questions or requests, contact <a href="mailto:infobysoriva@gmail.com" className="font-semibold text-slate-950">infobysoriva@gmail.com</a>.
            </p>
          </section>
        </div>

        <div className="mt-10">
          <Link href="/" className="inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}