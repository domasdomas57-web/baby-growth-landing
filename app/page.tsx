import Hero from "@/components/Hero";
import FeatureShowcase from "@/components/FeatureShowcase";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import Features from "@/components/Features";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureShowcase />
      <ReviewsMarquee />
      <Features />
      <CTA />
    </main>
  );
}
