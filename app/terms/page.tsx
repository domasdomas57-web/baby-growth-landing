import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="rounded-[2.5rem] border border-white/70 bg-white/88 p-8 shadow-[0_36px_80px_-52px_rgba(90,120,168,0.35)] backdrop-blur sm:p-10 lg:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">Terms</p>
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
          Simple terms for using this site.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          By using this website, you agree to use it lawfully and respectfully while reviewing information about the Baby Tracker app.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600 sm:text-base">
          <section>
            <h2 className="text-lg font-semibold text-slate-950">Informational content</h2>
            <p className="mt-2">
              Content on this website is provided for general product information, feature overviews, and download access.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">Availability</h2>
            <p className="mt-2">
              Features, screenshots, and availability can change over time as the app evolves across releases and platforms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">Questions</h2>
            <p className="mt-2">
              For product or legal questions, contact <a href="mailto:infobysoriva@gmail.com" className="font-semibold text-slate-950">infobysoriva@gmail.com</a>.
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