import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Use | Baby Tracker - Soriva",
  description:
    "Terms for using the Baby Tracker - Soriva website and app, including medical disclaimers, subscriptions, and support contact.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="rounded-[2.5rem] border border-white/70 bg-white/88 p-8 shadow-[0_36px_80px_-52px_rgba(90,120,168,0.35)] backdrop-blur sm:p-10 lg:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">Terms</p>
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
          Terms for using Soriva.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          By using the Baby Tracker - Soriva website or mobile app, you agree to these terms. If you do not agree, please do not use the service.
        </p>
        <p className="mt-3 text-sm text-slate-500">Last updated: July 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600 sm:text-base">
          <section>
            <h2 className="text-lg font-semibold text-slate-950">Informational purpose</h2>
            <p className="mt-2">
              Soriva is a baby care tracking tool for logging and organizing daily routines. The website and app are provided for general informational and organizational purposes. They are not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">No medical advice</h2>
            <p className="mt-2">
              Soriva does not provide medical advice. Always consult your pediatrician or qualified healthcare provider about your child&apos;s health, feeding, sleep, growth, or any medical concerns. Never disregard professional medical advice because of something you read or log in the app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">AI insights are informational only</h2>
            <p className="mt-2">
              AI-generated summaries and insights in Soriva are supportive and informational only. They may be incomplete or inaccurate. They do not replace your pediatrician or other licensed professionals.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">Subscriptions and billing</h2>
            <p className="mt-2">
              Some features may require a subscription. Purchases made through the Apple App Store or Google Play are billed and managed by Apple or Google under their respective terms. Soriva does not process store payments directly on this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">Refunds and cancellations</h2>
            <p className="mt-2">
              Refunds and subscription cancellations follow Apple App Store or Google Play policies, depending on where you subscribed. Contact Apple or Google support for billing issues tied to their checkout systems.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">Features may change</h2>
            <p className="mt-2">
              We may update, add, or remove features, screenshots, pricing, and availability as the product evolves across platforms and releases. Continued use after changes constitutes acceptance of the updated experience where permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">Acceptable use</h2>
            <p className="mt-2">
              You agree to use the website and app lawfully and respectfully. Do not misuse the service, attempt unauthorized access, or interfere with other users.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">Contact</h2>
            <p className="mt-2">
              Questions about these terms:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-slate-950">
                {CONTACT_EMAIL}
              </a>
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
