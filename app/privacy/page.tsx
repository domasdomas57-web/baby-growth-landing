import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy | Baby Tracker - Soriva",
  description:
    "How Baby Tracker - Soriva handles website and app data, baby tracking information, analytics, AI features, and deletion requests.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="rounded-[2.5rem] border border-white/70 bg-white/88 p-8 shadow-[0_36px_80px_-52px_rgba(90,120,168,0.35)] backdrop-blur sm:p-10 lg:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">Privacy Policy</p>
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
          Privacy, clearly explained.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Baby Tracker - Soriva (&quot;Soriva&quot;, &quot;we&quot;, &quot;us&quot;) is built for parents tracking everyday baby care. This policy describes what data may be collected on our website and in the mobile app, and how it is used.
        </p>
        <p className="mt-3 text-sm text-slate-500">Last updated: July 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600 sm:text-base">
          <section>
            <h2 className="text-lg font-semibold text-slate-950">Website data</h2>
            <p className="mt-2">
              This landing page may use analytics (such as Google Analytics) to understand traffic, page views, and general usage patterns. Analytics data is used to improve the website experience. We do not use the website to sell personal data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">App account and baby tracking data</h2>
            <p className="mt-2">
              When you use the Soriva mobile app, you may create an account and enter information about your baby and daily care—such as feeding, sleep, diapers, growth measurements, notes, and caregiver activity. This data is stored to provide the tracking features you use in the app.
            </p>
            <p className="mt-2">
              Baby and child-related data is sensitive. We treat it accordingly and design the product for privacy-conscious family tracking. You control what you log and who you invite through caregiver sync.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">Analytics and crash data</h2>
            <p className="mt-2">
              The app may collect diagnostic, crash, and performance data to keep the service reliable. This may include device type, app version, and error logs. We use this information to fix issues and improve stability—not to sell personal data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">AI features</h2>
            <p className="mt-2">
              If you use AI insights or summaries, recent activity you have logged may be processed to generate supportive, informational responses inside the app. AI output is not medical advice and does not replace your pediatrician. We handle AI-related data at a general product level to provide and improve these features.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">Data deletion requests</h2>
            <p className="mt-2">
              You may request deletion of your account or associated data by contacting us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-slate-950">
                {CONTACT_EMAIL}
              </a>
              . We will respond within a reasonable timeframe. Some records may be retained where required by law or legitimate operational needs.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">Children and baby data</h2>
            <p className="mt-2">
              Soriva is used by parents and caregivers to log information about infants and children. We do not knowingly collect personal information directly from children. Parents and guardians are responsible for the information they enter and share through caregiver invites.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">We do not sell personal data</h2>
            <p className="mt-2">
              We do not sell your personal information. Data is used to operate Soriva, support users, and improve the product.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">Contact</h2>
            <p className="mt-2">
              Privacy questions or requests:{" "}
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
