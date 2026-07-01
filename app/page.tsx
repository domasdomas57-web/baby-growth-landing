import type { Metadata } from "next";
import PremiumLanding from "@/components/PremiumLanding";
import JsonLd from "@/components/JsonLd";
import { getPremiumLandingMessages } from "@/i18n/premiumLanding";
import { getLocaleFromCookies } from "@/i18n/server";
import { buildPageMetadata, faqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Baby Tracker App for Parents | Feeds, Sleep, Diapers & Reports – Soriva",
  description:
    "Baby tracker app for feeding, sleep, diapers, growth, and daily routines. Sync with caregivers and export pediatrician-ready reports. Free on iPhone and Android.",
  path: "/",
  openGraphTitle: "Baby Tracker - Soriva",
});

const homepageFaqs = [
  {
    question: "What can I track with Soriva?",
    answer:
      "Soriva is a baby log app for feeding, sleep, diapers, growth, temperature, pumping, and daily routines—with caregiver sync and doctor-ready exports.",
  },
  {
    question: "Is Soriva a medical app?",
    answer:
      "No. Soriva is an informational baby care tracker. It does not provide medical advice and does not replace your pediatrician.",
  },
  {
    question: "Can multiple caregivers use the same baby profile?",
    answer:
      "Yes. Partners, grandparents, and nannies can log and view the same timeline with caregiver sync.",
  },
  {
    question: "Is the app available on iPhone and Android?",
    answer: "Yes. Download Soriva free on the App Store and Google Play.",
  },
];

export default async function Home() {
  const locale = await getLocaleFromCookies();

  return (
    <>
      <JsonLd data={faqPageJsonLd(homepageFaqs)} />
      <PremiumLanding messages={getPremiumLandingMessages(locale)} />
    </>
  );
}
