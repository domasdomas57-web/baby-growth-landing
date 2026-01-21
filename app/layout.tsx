import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import LanguagePicker from "@/components/LanguagePicker";
import { getLocaleFromCookies, getMessages } from "@/i18n/server";
import { MESSAGES_BY_LOCALE } from "@/i18n/messages";
import type { Locale } from "@/i18n/locales";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baby Growth Tracker – AI",
  description: "Track sleep, feeding & growth with AI insights",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
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
        <LanguagePicker locale={locale} messagesByLocale={messagesByLocale} />
        <div className="flex-1">{children}</div>
        <Footer messages={messages.footer} />
      </body>
    </html>
  );
}
