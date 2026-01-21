import Hero from "@/components/Hero";
import FeatureShowcase from "@/components/FeatureShowcase";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import { getLocaleFromCookies, getMessages } from "@/i18n/server";

export default async function Home() {
  const locale = await getLocaleFromCookies();
  const messages = getMessages(locale);

  return (
    <main>
      <Hero messages={messages.hero} />
      <FeatureShowcase messages={messages.featureShowcase} />
      <ReviewsMarquee messages={messages.reviews} />
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/70 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-violet-400/5 to-fuchsia-300/5" />
          <div className="absolute -top-24 left-1/2 h-[320px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/12 via-violet-400/12 to-fuchsia-300/12 blur-3xl" />
        </div>
        <Features messages={messages.features} />
        <CTA messages={messages.cta} />
      </section>
    </main>
  );
}
