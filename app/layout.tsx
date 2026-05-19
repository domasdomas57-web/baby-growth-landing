import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import LanguagePicker from "@/components/LanguagePicker";
import AnalyticsRouteTracker from "@/components/AnalyticsRouteTracker";
import { getLocaleFromCookies, getMessages } from "@/i18n/server";
import { MESSAGES_BY_LOCALE } from "@/i18n/messages";
import type { Locale } from "@/i18n/locales";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://babytrackersoriva.com"),
  title: "Baby Tracker - Soriva",
  description: "Simple baby tracker app for feeding, sleep, diapers, pumping and daily baby routines.",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Baby Tracker - Soriva",
    description: "Simple baby tracker app for feeding, sleep, diapers, pumping and daily baby routines.",
    siteName: "Baby Tracker - Soriva",
    type: "website",
  },
  twitter: {
    title: "Baby Tracker - Soriva",
    description: "Simple baby tracker app for feeding, sleep, diapers, pumping and daily baby routines.",
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicons/favicon-32x32.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocaleFromCookies();
  const messages = getMessages(locale);
  const messagesByLocale = Object.fromEntries(
    Object.entries(MESSAGES_BY_LOCALE).map(([key, value]) => [key, { languageName: value.languageName }])
  ) as Record<Locale, { languageName: string }>;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased flex flex-col`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
          `}
        </Script>
        <AnalyticsRouteTracker />
        <LanguagePicker locale={locale} messagesByLocale={messagesByLocale} />
        <div className="flex-1">{children}</div>
        <div id="contact">
          <Footer messages={messages.footer} />
        </div>
      </body>
    </html>
  );
}
