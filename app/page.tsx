import Hero from "@/components/Hero";
import FeatureShowcase from "@/components/FeatureShowcase";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import Features from "@/components/Features";
import CTA, { CTASection } from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureShowcase />
      <ReviewsMarquee />
      <CTASection
        title="Start tracking with confidence"
        description="Join parents using Baby Growth Tracker – AI to understand routines, spot patterns, and stay consistent without stress."
        note="No clutter • Clear charts • Calm insights"
        className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16"
      />
      <Features />
      <CTA />
    </main>
  );
}
