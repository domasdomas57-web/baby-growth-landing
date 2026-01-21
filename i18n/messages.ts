import type { Locale } from "./locales";

export type Messages = {
  languageName: string;
  hero: {
    badge: string;
    tagline: string;
    googlePlayAria: string;
    getItOn: string;
    googlePlay: string;
    privacyTitle: string;
    privacySubtitle: string;
    noAdsNote: string;
  };
  reviews: {
    title: string;
    subtitle: string;
    aria: string;
    viewOnGooglePlayAria: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{ title: string; description: string }>;
  };
  cta: {
    title: string;
    description: string;
    note: string;
    downloadAria: string;
    getItOn: string;
    googlePlay: string;
  };
  footer: {
    contactLinePrefix: string;
    email: string;
    emailAria: string;
    copyright: string;
  };
  featureShowcase: {
    tabs: Array<{ title: string; description: string; more: string }>;
    learnMoreHeadingPrefix: string;
    close: string;
  };
};

const en: Messages = {
  languageName: "English",
  hero: {
    badge: "AI-powered baby care insights",
    tagline: "Track sleep • feeding • growth with AI insights",
    googlePlayAria: "Download on Google Play",
    getItOn: "Get it on",
    googlePlay: "Google Play",
    privacyTitle: "Private by design",
    privacySubtitle: "Sync across devices.",
    noAdsNote: "No ads in core tracking. Designed for one-handed use.",
  },
  reviews: {
    aria: "Reviews",
    title: "Loved by parents",
    subtitle: "A few words from people using the app every day.",
    viewOnGooglePlayAria: "View on Google Play",
  },
  features: {
    title: "Everything you need for baby tracking",
    subtitle:
      "Sleep, feeding, growth, and caregiver collaboration—wrapped in a calm, trustworthy experience.",
    items: [
      {
        title: "Sleep tracking",
        description:
          "Log naps and nighttime sleep in seconds, then review patterns by day or week.",
      },
      {
        title: "Feeding tracking",
        description:
          "Track breast, bottle, solids, and quantities with quick presets and notes.",
      },
      {
        title: "AI insights & warnings",
        description:
          "Gentle summaries plus smarter alerts when something looks off—without panic.",
      },
      {
        title: "Growth charts",
        description:
          "See weight and height trends with clean charts and quick milestone snapshots.",
      },
      {
        title: "Multiple caregivers",
        description:
          "Share your baby profile with caregivers so everyone stays in sync and informed.",
      },
    ],
  },
  cta: {
    title: "Ready for calmer days?",
    description:
      "Download Baby Growth Tracker – AI to track sleep, feeding, and growth with AI insights and gentle warnings.",
    note: "Fast setup • Multiple caregivers • Privacy-first",
    downloadAria: "Download on Google Play",
    getItOn: "Get it on",
    googlePlay: "Google Play",
  },
  footer: {
    contactLinePrefix: "Have a question? Contact us -",
    email: "infobysoriva@gmail.com",
    emailAria: "Email support",
    copyright: "© {year} Baby Growth Tracker – AI",
  },
  featureShowcase: {
    learnMoreHeadingPrefix: "Learn more",
    close: "Close",
    tabs: [
      {
        title: "Sleep Predictions",
        description:
          "AI-powered sleep predictions help you understand when your baby is ready for the next nap.",
        more: "Know what’s coming next and plan naps with more confidence.",
      },
      {
        title: "Growth Tracking",
        description:
          "Track height, weight, and head circumference with clear visual charts over time.",
        more: "A clean record of growth you can review and share fast.",
      },
      {
        title: "AI Insights",
        description: "Smart insights highlight patterns in sleep, feeding, and daily routines.",
        more: "Turn daily logs into clear patterns and next steps.",
      },
    ],
  },
};

const lt: Messages = {
  languageName: "Lietuvių",
  hero: {
    badge: "AI įžvalgos kasdienei kūdikio priežiūrai",
    tagline: "Sekite miegą • maitinimą • augimą su AI įžvalgomis",
    googlePlayAria: "Atsisiųsti iš Google Play",
    getItOn: "Gaukite",
    googlePlay: "Google Play",
    privacyTitle: "Privatumas pagal nutylėjimą",
    privacySubtitle: "Sinchronizacija tarp įrenginių.",
    noAdsNote: "Be reklamų pagrindiniame sekime. Patogu naudoti viena ranka.",
  },
  reviews: {
    aria: "Atsiliepimai",
    title: "Tėvų pamėgta",
    subtitle: "Keli žodžiai iš žmonių, kurie programėlę naudoja kasdien.",
    viewOnGooglePlayAria: "Atidaryti Google Play",
  },
  features: {
    title: "Viskas, ko reikia kūdikio sekimui",
    subtitle:
      "Miegas, maitinimas, augimas ir bendras darbas su globėjais — ramiame, patikimame sprendime.",
    items: [
      {
        title: "Miego sekimas",
        description: "Užregistruokite migdymus ir nakties miegą per kelias sekundes.",
      },
      {
        title: "Maitinimo sekimas",
        description: "Sekite žindymą, buteliuką, kietą maistą ir kiekius su greitais šablonais.",
      },
      {
        title: "AI įžvalgos ir įspėjimai",
        description: "Švelnios suvestinės ir protingesni perspėjimai — be panikos.",
      },
      {
        title: "Augimo grafikai",
        description: "Aiškūs svorio ir ūgio grafikai bei greitos pažangos suvestinės.",
      },
      {
        title: "Keli globėjai",
        description: "Pasidalinkite profiliu su globėjais, kad visi turėtų tą pačią informaciją.",
      },
    ],
  },
  cta: {
    title: "Norite ramesnių dienų?",
    description:
      "Atsisiųskite Baby Growth Tracker – AI ir sekite miegą, maitinimą bei augimą su AI įžvalgomis ir švelniais perspėjimais.",
    note: "Greitas startas • Keli globėjai • Privatumas",
    downloadAria: "Atsisiųsti iš Google Play",
    getItOn: "Gaukite",
    googlePlay: "Google Play",
  },
  footer: {
    contactLinePrefix: "Turite klausimų? Susisiekite -",
    email: "infobysoriva@gmail.com",
    emailAria: "Parašyti el. paštu",
    copyright: "© {year} Baby Growth Tracker – AI",
  },
  featureShowcase: {
    learnMoreHeadingPrefix: "Sužinok daugiau",
    close: "Uždaryti",
    tabs: [
      {
        title: "Miego prognozės",
        description: "AI miego prognozės padeda suprasti, kada laikas kitam miegui.",
        more: "Lengviau planuokite dieną ir migdymą su daugiau užtikrintumo.",
      },
      {
        title: "Augimo sekimas",
        description: "Sekite ūgį, svorį ir galvos apimtį aiškiuose grafikuose laikui bėgant.",
        more: "Tvarkinga augimo istorija greitai peržiūrai ar pasidalinimui.",
      },
      {
        title: "AI įžvalgos",
        description: "Išmanios įžvalgos paryškina miego, maitinimo ir rutinos dėsningumus.",
        more: "Paverskite kasdienius įrašus aiškiais modeliais ir kitais žingsniais.",
      },
    ],
  },
};

// NOTE: For additional languages, we translate the key UI copy. Review card quotes remain in English.
const es: Messages = {
  ...en,
  languageName: "Español",
  hero: {
    ...en.hero,
    badge: "Información con IA para el cuidado del bebé",
    tagline: "Registra sueño • alimentación • crecimiento con insights de IA",
    googlePlayAria: "Descargar en Google Play",
    privacyTitle: "Privado por diseño",
  },
  reviews: {
    ...en.reviews,
    title: "Querida por padres",
    subtitle: "Algunas palabras de quienes usan la app cada día.",
    aria: "Reseñas",
  },
  features: {
    ...en.features,
    title: "Todo lo que necesitas para registrar a tu bebé",
  },
  cta: {
    ...en.cta,
    title: "¿Listo para días más tranquilos?",
    downloadAria: "Descargar en Google Play",
  },
  footer: {
    ...en.footer,
    contactLinePrefix: "¿Tienes una pregunta? Contáctanos -",
    emailAria: "Enviar correo",
  },
};

const fr: Messages = {
  ...en,
  languageName: "Français",
  hero: {
    ...en.hero,
    badge: "Des conseils IA pour le quotidien",
    tagline: "Suivez sommeil • repas • croissance avec des insights IA",
    googlePlayAria: "Télécharger sur Google Play",
  },
  reviews: {
    ...en.reviews,
    title: "Adorée des parents",
    subtitle: "Quelques mots de personnes qui utilisent l’app chaque jour.",
    aria: "Avis",
  },
  features: {
    ...en.features,
    title: "Tout ce qu’il faut pour suivre bébé",
  },
  cta: {
    ...en.cta,
    title: "Prêt pour des journées plus calmes ?",
    downloadAria: "Télécharger sur Google Play",
  },
  footer: {
    ...en.footer,
    contactLinePrefix: "Une question ? Contactez-nous -",
    emailAria: "Envoyer un email",
  },
};

const de: Messages = {
  ...en,
  languageName: "Deutsch",
  hero: {
    ...en.hero,
    badge: "KI-Insights für den Baby-Alltag",
    tagline: "Tracke Schlaf • Fütterung • Wachstum mit KI-Insights",
    googlePlayAria: "Bei Google Play herunterladen",
  },
  reviews: {
    ...en.reviews,
    title: "Von Eltern geliebt",
    subtitle: "Ein paar Worte von Menschen, die die App täglich nutzen.",
    aria: "Bewertungen",
  },
  features: {
    ...en.features,
    title: "Alles, was du fürs Baby-Tracking brauchst",
  },
  cta: {
    ...en.cta,
    title: "Bereit für ruhigere Tage?",
    downloadAria: "Bei Google Play herunterladen",
  },
  footer: {
    ...en.footer,
    contactLinePrefix: "Frage? Kontaktiere uns -",
    emailAria: "E-Mail senden",
  },
};

const it: Messages = {
  ...en,
  languageName: "Italiano",
  hero: {
    ...en.hero,
    badge: "Insight IA per la routine del bebè",
    tagline: "Monitora sonno • alimentazione • crescita con insight IA",
    googlePlayAria: "Scarica su Google Play",
  },
  reviews: {
    ...en.reviews,
    title: "Amata dai genitori",
    subtitle: "Qualche parola da chi usa l’app ogni giorno.",
    aria: "Recensioni",
  },
  features: {
    ...en.features,
    title: "Tutto ciò che serve per monitorare il bebè",
  },
  cta: {
    ...en.cta,
    title: "Pronto per giornate più serene?",
    downloadAria: "Scarica su Google Play",
  },
  footer: {
    ...en.footer,
    contactLinePrefix: "Hai una domanda? Contattaci -",
    emailAria: "Invia email",
  },
};

const pt: Messages = {
  ...en,
  languageName: "Português",
  hero: {
    ...en.hero,
    badge: "Insights com IA para o dia a dia",
    tagline: "Registre sono • alimentação • crescimento com insights de IA",
    googlePlayAria: "Baixar no Google Play",
  },
  reviews: {
    ...en.reviews,
    title: "Aprovada por pais",
    subtitle: "Algumas palavras de quem usa o app todos os dias.",
    aria: "Avaliações",
  },
  features: {
    ...en.features,
    title: "Tudo o que você precisa para acompanhar o bebê",
  },
  cta: {
    ...en.cta,
    title: "Pronto para dias mais tranquilos?",
    downloadAria: "Baixar no Google Play",
  },
  footer: {
    ...en.footer,
    contactLinePrefix: "Tem uma dúvida? Fale conosco -",
    emailAria: "Enviar e-mail",
  },
};

const pl: Messages = {
  ...en,
  languageName: "Polski",
  hero: {
    ...en.hero,
    badge: "Wskazówki AI na co dzień",
    tagline: "Śledź sen • karmienie • wzrost dzięki AI",
    googlePlayAria: "Pobierz z Google Play",
  },
  reviews: {
    ...en.reviews,
    title: "Uwielbiana przez rodziców",
    subtitle: "Kilka słów od osób korzystających z aplikacji każdego dnia.",
    aria: "Opinie",
  },
  features: {
    ...en.features,
    title: "Wszystko, czego potrzebujesz do śledzenia dziecka",
  },
  cta: {
    ...en.cta,
    title: "Gotowy na spokojniejsze dni?",
    downloadAria: "Pobierz z Google Play",
  },
  footer: {
    ...en.footer,
    contactLinePrefix: "Masz pytanie? Skontaktuj się -",
    emailAria: "Wyślij email",
  },
};

const ru: Messages = {
  ...en,
  languageName: "Русский",
  hero: {
    ...en.hero,
    badge: "AI‑подсказки для ухода за малышом",
    tagline: "Отслеживайте сон • кормление • рост с AI‑инсайтами",
    googlePlayAria: "Скачать в Google Play",
  },
  reviews: {
    ...en.reviews,
    title: "Любима родителями",
    subtitle: "Пара слов от тех, кто пользуется приложением каждый день.",
    aria: "Отзывы",
  },
  features: {
    ...en.features,
    title: "Всё, что нужно для трекинга малыша",
  },
  cta: {
    ...en.cta,
    title: "Готовы к более спокойным дням?",
    downloadAria: "Скачать в Google Play",
  },
  footer: {
    ...en.footer,
    contactLinePrefix: "Есть вопрос? Напишите нам -",
    emailAria: "Написать на почту",
  },
};

export const MESSAGES_BY_LOCALE: Record<Locale, Messages> = {
  en,
  lt,
  es,
  fr,
  de,
  it,
  pt,
  pl,
  ru,
};
