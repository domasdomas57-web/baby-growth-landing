import type { Metadata } from "next";
import {
  APP_STORE_ID,
  APP_STORE_URL,
  BASE_URL,
  BRAND_NAME,
  CONTACT_EMAIL,
  GOOGLE_PLAY_URL,
} from "./constants";

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${normalized}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  openGraphTitle,
}: {
  title: string;
  description: string;
  path: string;
  openGraphTitle?: string;
}): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title: openGraphTitle ?? title,
      description,
      url: canonical,
      siteName: BRAND_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle ?? title,
      description,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND_NAME,
    url: BASE_URL,
    description:
      "Baby tracker app for feeding, sleep, diapers, growth, caregiver sync, and pediatrician-ready reports.",
    inLanguage: "en-US",
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Soriva",
    url: BASE_URL,
    email: CONTACT_EMAIL,
    brand: {
      "@type": "Brand",
      name: BRAND_NAME,
    },
  };
}

export function mobileApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: BRAND_NAME,
    operatingSystem: "iOS, Android",
    applicationCategory: "HealthApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    downloadUrl: [APP_STORE_URL, GOOGLE_PLAY_URL],
    description:
      "Track feeds, sleep, diapers, growth, and daily baby routines. Sync with caregivers and export doctor-ready reports.",
  };
}

export function faqPageJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export const APPLE_SMART_APP_BANNER = {
  appId: APP_STORE_ID,
};
