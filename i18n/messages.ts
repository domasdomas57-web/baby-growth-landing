import type { Locale } from "./locales";

export type Messages = {
  languageName: string;
  hero: {
    title: string;
    subtitle: string;
    badge: string;
    followUsOn: string;
    tagline: string;
    googlePlayAria: string;
    appStoreAria: string;
    googlePlayCtaLead: string;
    appStoreCtaLead: string;
    getItOn: string;
    googlePlay: string;
    appStore: string;
    seoHeading: string;
    seoText: string;
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
    appStoreAria: string;
    getItOn: string;
    googlePlay: string;
    appStore: string;
  };
  footer: {
    brand: string;
    description: string;
    googlePlayCta: string;
    appStoreCta: string;
    formTitle: string;
    formSubtitle: string;
    yourEmailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    sendLabel: string;
    sendingLabel: string;
    sentMessage: string;
    errorMessage: string;
    contactLinePrefix: string;
    email: string;
    emailAria: string;
    copyright: string;
    bottomNote: string;
  };
  featureShowcase: {
    ariaLabel: string;
    heading: string;
    subtitle: string;
    tabs: Array<{ title: string; description: string; more: string }>;
    screenshotAlts: string[];
    learnMorePanels: Array<{ heading: string; paragraphs: string[]; bullets: string[] }>;
    learnMoreHeadingPrefix: string;
    close: string;
  };
};

const en: Messages = {
  languageName: "English",
  hero: {
    title: "Baby Tracker App – Sleep, Feeding & Newborn Tracker",
    subtitle:
      "Track baby sleep, feeding, diapers and daily routines with a smart baby tracker app designed for modern parents and newborn care.",
    badge: "AI-powered baby care insights",
    followUsOn: "Follow us on",
    tagline: "Track sleep • feeding • growth with AI insights",
    googlePlayAria: "Download on Google Play",
    appStoreAria: "Download on the App Store",
    googlePlayCtaLead: "Get Baby Tracker on",
    appStoreCtaLead: "Download Baby Tracker on",
    getItOn: "Get it on",
    googlePlay: "Google Play",
    appStore: "App Store",
    seoHeading: "All-in-One Baby Tracker App",
    seoText:
      "Track sleep patterns, feeding sessions, diaper changes, and daily baby routines in one place with smart newborn tracking made for real-life parenting.",
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
      "Download Baby Tracker: Feed & Sleep Log to track sleep, feeding, and growth with AI insights and gentle warnings.",
    note: "Fast setup • Multiple caregivers • Privacy-first",
    downloadAria: "Download on Google Play",
    appStoreAria: "Download on the App Store",
    getItOn: "Get it on",
    googlePlay: "Google Play",
    appStore: "App Store",
  },
  footer: {
    brand: "Baby Tracker: Feed & Sleep Log",
    description:
      "Track sleep, feeding, and growth with AI insights—built for calm, consistent routines.",
    googlePlayCta: "Get it on Google Play",
    appStoreCta: "Download on the App Store",
    formTitle: "Contact us",
    formSubtitle: "Have any questions or suggestions? Leave us a message.",
    yourEmailLabel: "Your email",
    subjectLabel: "Subject",
    messageLabel: "Message",
    sendLabel: "Send",
    sendingLabel: "Sending…",
    sentMessage: "Sent. We’ll reply by email.",
    errorMessage: "Could not send right now. Please try again later.",
    contactLinePrefix: "Have a question? Contact us -",
    email: "infobysoriva@gmail.com",
    emailAria: "Email support",
    copyright: "© {year} Baby Tracker: Feed & Sleep Log",
    bottomNote: "Made for parents. Privacy-first.",
  },
  featureShowcase: {
    ariaLabel: "Feature showcase",
    heading: "Built for everyday tracking",
    subtitle:
      "Sleep predictions, growth charts, and AI insights—designed to help you feel confident, fast.",
    screenshotAlts: [
      "Sleep predictions screen",
      "Growth tracking charts screen",
      "AI insights screen",
    ],
    learnMorePanels: [
      {
        heading: "How sleep predictions work",
        paragraphs: [
          "Log naps and wake windows, and the app learns your baby’s rhythm over time. It uses your recent patterns to estimate the next best nap window.",
          "Instead of guessing, you get a clear ‘what’s next’ view—helpful for planning feeds, errands, and smoother transitions before overtiredness kicks in.",
        ],
        bullets: [
          "Next-nap window based on recent patterns",
          "Quick at-a-glance timing for your day",
          "Adapts as routines change week to week",
        ],
      },
      {
        heading: "Track growth with clarity",
        paragraphs: [
          "Keep height, weight, and head circumference in one place, with charts that make trends obvious at a glance.",
          "It’s designed to be easy to review during checkups—so you can share progress confidently without digging through notes.",
        ],
        bullets: [
          "Clear charts for quick trend spotting",
          "All measurements organized over time",
          "Fast sharing during pediatric visits",
        ],
      },
      {
        heading: "Turn logs into insights",
        paragraphs: [
          "Daily tracking is only useful if it leads to better decisions. AI Insights highlight patterns across sleep, feeding, and routines.",
          "You’ll see what’s changing, what’s consistent, and where small tweaks could make your day easier—without drowning you in data.",
        ],
        bullets: [
          "Pattern highlights across days",
          "Signals when routines shift",
          "Actionable summaries you can use",
        ],
      },
    ],
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
    title: "Kūdikio sekimo programėlė – miegas, maitinimas ir naujagimio sekimas",
    subtitle:
      "Sekite kūdikio miegą, maitinimą, sauskelnes ir dienos rutiną su išmania sekimo programėle, sukurta šiuolaikiniams tėvams ir naujagimio priežiūrai.",
    badge: "AI įžvalgos kasdienei kūdikio priežiūrai",
    followUsOn: "Sekite mus",
    tagline: "Sekite miegą • maitinimą • augimą su AI įžvalgomis",
    googlePlayAria: "Atsisiųsti iš Google Play",
    appStoreAria: "Atsisiųsti iš App Store",
    googlePlayCtaLead: "Gaukite Baby Tracker iš",
    appStoreCtaLead: "Atsisiųskite Baby Tracker iš",
    getItOn: "Gaukite",
    googlePlay: "Google Play",
    appStore: "App Store",
    seoHeading: "Viskas vienoje kūdikio sekimo programėlėje",
    seoText:
      "Sekite miego įpročius, maitinimus, sauskelnių keitimus ir kasdienę rutiną vienoje vietoje su išmaniu naujagimio sekimu.",
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
      "Atsisiųskite Baby Tracker: Feed & Sleep Log ir sekite miegą, maitinimą bei augimą su AI įžvalgomis ir švelniais perspėjimais.",
    note: "Greitas startas • Keli globėjai • Privatumas",
    downloadAria: "Atsisiųsti iš Google Play",
    appStoreAria: "Atsisiųsti iš App Store",
    getItOn: "Gaukite",
    googlePlay: "Google Play",
    appStore: "App Store",
  },
  footer: {
    brand: "Baby Tracker: Feed & Sleep Log",
    description:
      "Sekite miegą, maitinimą ir augimą su AI įžvalgomis — ramiai ir nuosekliai kasdien.",
    googlePlayCta: "Gauti Google Play",
    appStoreCta: "Atsisiųsti iš App Store",
    formTitle: "Susisiekite",
    formSubtitle: "Turite klausimų ar pasiūlymų? Palikite žinutę.",
    yourEmailLabel: "Jūsų el. paštas",
    subjectLabel: "Tema",
    messageLabel: "Žinutė",
    sendLabel: "Siųsti",
    sendingLabel: "Siunčiama…",
    sentMessage: "Išsiųsta. Atsakysime el. paštu.",
    errorMessage: "Nepavyko išsiųsti. Pabandykite vėliau.",
    contactLinePrefix: "Turite klausimų? Susisiekite -",
    email: "infobysoriva@gmail.com",
    emailAria: "Parašyti el. paštu",
    copyright: "© {year} Baby Tracker: Feed & Sleep Log",
    bottomNote: "Sukurta tėvams. Privatumas pirmiausia.",
  },
  featureShowcase: {
    ariaLabel: "Funkcijų pristatymas",
    heading: "Sukurta kasdieniam sekimui",
    subtitle:
      "Miego prognozės, augimo grafikai ir AI įžvalgos — kad jaustumėtės užtikrintai greičiau.",
    screenshotAlts: [
      "Miego prognozių ekranas",
      "Augimo sekimo grafikų ekranas",
      "AI įžvalgų ekranas",
    ],
    learnMorePanels: [
      {
        heading: "Kaip veikia miego prognozės",
        paragraphs: [
          "Žymėkite migdymus ir budrumo langus, o programėlė laikui bėgant perpranta jūsų kūdikio ritmą. Remdamasi naujausiais duomenimis, ji įvertina tinkamiausią kitą miego langą.",
          "Vietoje spėliojimo matote aiškų „kas toliau“ vaizdą, kuris padeda planuoti maitinimus, išvykas ir sklandesnius perėjimus prieš pervargimą.",
        ],
        bullets: [
          "Kito miego langas pagal naujausius įpročius",
          "Greitas dienos laiko planas vienu žvilgsniu",
          "Prisitaiko, kai rutina keičiasi savaitėmis",
        ],
      },
      {
        heading: "Sekite augimą aiškiai",
        paragraphs: [
          "Laikykite ūgį, svorį ir galvos apimtį vienoje vietoje su grafikais, kurie leidžia lengvai pastebėti tendencijas.",
          "Sukurta taip, kad būtų patogu peržiūrėti vizitų metu ir užtikrintai pasidalyti pažanga neieškant užrašų.",
        ],
        bullets: [
          "Aiškūs grafikai greitam tendencijų matymui",
          "Visi matavimai tvarkingai vienoje istorijoje",
          "Greitas pasidalijimas per vizitus pas gydytoją",
        ],
      },
      {
        heading: "Paverskite įrašus įžvalgomis",
        paragraphs: [
          "Kasdienis sekimas naudingas tik tada, kai padeda priimti geresnius sprendimus. AI įžvalgos išryškina miego, maitinimo ir rutinos dėsningumus.",
          "Matysite, kas keičiasi, kas išlieka stabilu ir kur maži pakeitimai galėtų palengvinti dieną — be perteklinių duomenų triukšmo.",
        ],
        bullets: [
          "Dėsningumų akcentai per kelias dienas",
          "Signalai, kai rutina pradeda keistis",
          "Pritaikomos suvestinės realiems veiksmams",
        ],
      },
    ],
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
    title: "App de seguimiento del bebé: sueño, alimentación y recién nacido",
    subtitle:
      "Registra el sueño, la alimentación, los pañales y las rutinas diarias con una app inteligente de seguimiento del bebé diseñada para padres modernos y el cuidado del recién nacido.",
    badge: "Información con IA para el cuidado del bebé",
    tagline: "Registra sueño • alimentación • crecimiento con insights de IA",
    googlePlayAria: "Descargar en Google Play",
    appStoreAria: "Descargar en App Store",
    googlePlayCtaLead: "Consigue Baby Tracker en",
    appStoreCtaLead: "Descarga Baby Tracker en",
    seoHeading: "App de seguimiento del bebé todo en uno",
    seoText:
      "Controla el sueño, las tomas, los cambios de pañal y la rutina diaria en un solo lugar con seguimiento inteligente del recién nacido.",
    privacyTitle: "Privado por diseño",
  },
  reviews: {
    ...en.reviews,
    title: "Querida por padres",
    subtitle: "Algunas palabras de quienes usan la app cada día.",
    aria: "Reseñas",
  },
  features: {
    title: "Todo lo que necesitas para el seguimiento del bebé",
    subtitle:
      "Sueño, alimentación, crecimiento y colaboración entre cuidadores en una experiencia tranquila y confiable.",
    items: [
      {
        title: "Seguimiento del sueño",
        description:
          "Registra siestas y sueño nocturno en segundos y revisa patrones por día o semana.",
      },
      {
        title: "Seguimiento de alimentación",
        description:
          "Controla pecho, biberón, sólidos y cantidades con ajustes rápidos y notas.",
      },
      {
        title: "Insights y alertas IA",
        description:
          "Resúmenes suaves y alertas inteligentes cuando algo parece fuera de lo habitual.",
      },
      {
        title: "Gráficas de crecimiento",
        description:
          "Visualiza tendencias de peso y talla con gráficas claras y resumen de hitos.",
      },
      {
        title: "Varios cuidadores",
        description:
          "Comparte el perfil del bebé para que todos estén coordinados y bien informados.",
      },
    ],
  },
  cta: {
    title: "¿Listo para días más tranquilos?",
    description:
      "Descarga Baby Tracker: Feed & Sleep Log para seguir sueño, alimentación y crecimiento con insights de IA y alertas suaves.",
    note: "Configuración rápida • Varios cuidadores • Privacidad primero",
    downloadAria: "Descargar en Google Play",
    appStoreAria: "Descargar en App Store",
    getItOn: "Consíguelo en",
    googlePlay: "Google Play",
    appStore: "App Store",
  },
  footer: {
    brand: "Baby Tracker: Feed & Sleep Log",
    description:
      "Controla sueño, alimentación y crecimiento con insights de IA, diseñado para rutinas calmadas y consistentes.",
    googlePlayCta: "Consíguelo en Google Play",
    appStoreCta: "Descargar en App Store",
    formTitle: "Contáctanos",
    formSubtitle: "¿Tienes preguntas o sugerencias? Déjanos un mensaje.",
    yourEmailLabel: "Tu correo",
    subjectLabel: "Asunto",
    messageLabel: "Mensaje",
    sendLabel: "Enviar",
    sendingLabel: "Enviando…",
    sentMessage: "Enviado. Te responderemos por correo.",
    errorMessage: "No se pudo enviar ahora. Inténtalo más tarde.",
    contactLinePrefix: "¿Tienes una pregunta? Contáctanos -",
    email: "infobysoriva@gmail.com",
    emailAria: "Enviar correo",
    copyright: "© {year} Baby Tracker: Feed & Sleep Log",
    bottomNote: "Hecho para padres. Privacidad primero.",
  },
  featureShowcase: {
    ariaLabel: "Vitrina de funciones",
    heading: "Diseñada para el seguimiento diario",
    subtitle:
      "Predicciones de sueño, gráficas de crecimiento e insights de IA para ayudarte a decidir con confianza.",
    screenshotAlts: [
      "Pantalla de predicciones de sueño",
      "Pantalla de gráficas de crecimiento",
      "Pantalla de insights de IA",
    ],
    learnMorePanels: [
      {
        heading: "Cómo funcionan las predicciones de sueño",
        paragraphs: [
          "Registra siestas y ventanas de vigilia, y la app aprende el ritmo de tu bebé con el tiempo.",
          "Obtienes una vista clara de lo que viene después para planificar tomas, salidas y transiciones más suaves.",
        ],
        bullets: [
          "Ventana de próxima siesta basada en patrones recientes",
          "Horario rápido para organizar tu día",
          "Se adapta cuando cambian las rutinas",
        ],
      },
      {
        heading: "Sigue el crecimiento con claridad",
        paragraphs: [
          "Guarda talla, peso y perímetro craneal en un solo lugar con gráficas fáciles de leer.",
          "Ideal para revisar durante consultas y compartir avances sin buscar notas.",
        ],
        bullets: [
          "Gráficas claras para detectar tendencias",
          "Mediciones organizadas en el tiempo",
          "Compartir rápido en visitas pediátricas",
        ],
      },
      {
        heading: "Convierte registros en insights",
        paragraphs: [
          "Los insights de IA resaltan patrones de sueño, alimentación y rutinas diarias.",
          "Verás qué cambia, qué se mantiene y qué pequeños ajustes pueden ayudarte.",
        ],
        bullets: [
          "Patrones destacados por días",
          "Señales cuando la rutina cambia",
          "Resúmenes accionables",
        ],
      },
    ],
    learnMoreHeadingPrefix: "Saber más",
    close: "Cerrar",
    tabs: [
      {
        title: "Predicciones de sueño",
        description:
          "Las predicciones con IA te ayudan a entender cuándo tu bebé está listo para la próxima siesta.",
        more: "Planifica mejor tus siestas con más confianza.",
      },
      {
        title: "Seguimiento de crecimiento",
        description:
          "Controla talla, peso y perímetro craneal con gráficas visuales claras.",
        more: "Un historial limpio para revisar y compartir rápido.",
      },
      {
        title: "Insights de IA",
        description:
          "Insights inteligentes resaltan patrones en sueño, alimentación y rutina diaria.",
        more: "Convierte registros diarios en siguientes pasos claros.",
      },
    ],
  },
};

const fr: Messages = {
  ...en,
  languageName: "Français",
  hero: {
    ...en.hero,
    title: "Application suivi bébé – sommeil, repas et nouveau-né",
    subtitle:
      "Suivez le sommeil, l'alimentation, les couches et la routine quotidienne avec une application intelligente conçue pour les parents modernes et le suivi du nouveau-né.",
    badge: "Des conseils IA pour le quotidien",
    tagline: "Suivez sommeil • repas • croissance avec des insights IA",
    googlePlayAria: "Télécharger sur Google Play",
    appStoreAria: "Télécharger sur l'App Store",
    googlePlayCtaLead: "Obtenez Baby Tracker sur",
    appStoreCtaLead: "Téléchargez Baby Tracker sur",
    seoHeading: "Application de suivi bébé tout-en-un",
    seoText:
      "Suivez le sommeil, les repas, les couches et la routine de bébé en un seul endroit grâce à un suivi intelligent du nouveau-né.",
  },
  reviews: {
    ...en.reviews,
    title: "Adorée des parents",
    subtitle: "Quelques mots de personnes qui utilisent l’app chaque jour.",
    aria: "Avis",
  },
  features: {
    title: "Tout ce qu'il faut pour suivre bébé",
    subtitle:
      "Sommeil, repas, croissance et partage entre aidants dans une expérience calme et fiable.",
    items: [
      {
        title: "Suivi du sommeil",
        description:
          "Enregistrez les siestes et les nuits en quelques secondes puis consultez les tendances.",
      },
      {
        title: "Suivi des repas",
        description:
          "Suivez allaitement, biberon, solides et quantités avec des saisies rapides.",
      },
      {
        title: "Insights et alertes IA",
        description:
          "Des résumés doux et des alertes utiles quand quelque chose semble inhabituel.",
      },
      {
        title: "Courbes de croissance",
        description:
          "Visualisez poids et taille avec des graphiques clairs et des repères utiles.",
      },
      {
        title: "Plusieurs aidants",
        description:
          "Partagez le profil de bébé pour que tout le monde reste synchronisé.",
      },
    ],
  },
  cta: {
    title: "Prêt pour des journées plus calmes ?",
    description:
      "Téléchargez Baby Tracker: Feed & Sleep Log pour suivre sommeil, repas et croissance avec des insights IA et des alertes douces.",
    note: "Configuration rapide • Plusieurs aidants • Confidentialité d'abord",
    downloadAria: "Télécharger sur Google Play",
    appStoreAria: "Télécharger sur l'App Store",
    getItOn: "Disponible sur",
    googlePlay: "Google Play",
    appStore: "App Store",
  },
  footer: {
    brand: "Baby Tracker: Feed & Sleep Log",
    description:
      "Suivez sommeil, repas et croissance avec des insights IA, pensé pour des routines calmes et régulières.",
    googlePlayCta: "Disponible sur Google Play",
    appStoreCta: "Télécharger sur l'App Store",
    formTitle: "Contactez-nous",
    formSubtitle: "Une question ou une suggestion ? Laissez-nous un message.",
    yourEmailLabel: "Votre e-mail",
    subjectLabel: "Sujet",
    messageLabel: "Message",
    sendLabel: "Envoyer",
    sendingLabel: "Envoi…",
    sentMessage: "Envoyé. Nous vous répondrons par e-mail.",
    errorMessage: "Envoi impossible pour le moment. Réessayez plus tard.",
    contactLinePrefix: "Une question ? Contactez-nous -",
    email: "infobysoriva@gmail.com",
    emailAria: "Envoyer un email",
    copyright: "© {year} Baby Tracker: Feed & Sleep Log",
    bottomNote: "Conçu pour les parents. Confidentialité d'abord.",
  },
  featureShowcase: {
    ariaLabel: "Présentation des fonctionnalités",
    heading: "Pensé pour le suivi au quotidien",
    subtitle:
      "Prédictions de sommeil, courbes de croissance et insights IA pour vous aider à décider vite et sereinement.",
    screenshotAlts: [
      "Écran des prédictions de sommeil",
      "Écran des courbes de croissance",
      "Écran des insights IA",
    ],
    learnMorePanels: [
      {
        heading: "Comment fonctionnent les prédictions de sommeil",
        paragraphs: [
          "Enregistrez les siestes et fenêtres d'éveil, l'application apprend progressivement le rythme de votre bébé.",
          "Vous obtenez une vue claire de la prochaine fenêtre de sieste pour mieux organiser votre journée.",
        ],
        bullets: [
          "Fenêtre de sieste suivante basée sur l'historique récent",
          "Vue rapide pour planifier la journée",
          "S'adapte quand la routine évolue",
        ],
      },
      {
        heading: "Suivez la croissance avec clarté",
        paragraphs: [
          "Regroupez taille, poids et périmètre crânien dans des graphiques lisibles.",
          "Pratique pour les consultations et le partage rapide des progrès.",
        ],
        bullets: [
          "Graphiques clairs pour repérer les tendances",
          "Mesures organisées dans le temps",
          "Partage rapide en rendez-vous pédiatrique",
        ],
      },
      {
        heading: "Transformez vos logs en insights",
        paragraphs: [
          "Les insights IA mettent en évidence les schémas de sommeil, repas et routine.",
          "Vous voyez ce qui change, ce qui reste stable et quels ajustements tester.",
        ],
        bullets: [
          "Schémas clés sur plusieurs jours",
          "Signaux quand la routine bouge",
          "Résumés actionnables",
        ],
      },
    ],
    learnMoreHeadingPrefix: "En savoir plus",
    close: "Fermer",
    tabs: [
      {
        title: "Prédictions de sommeil",
        description:
          "Les prédictions IA vous aident à savoir quand bébé est prêt pour la prochaine sieste.",
        more: "Planifiez les siestes avec plus de confiance.",
      },
      {
        title: "Suivi de croissance",
        description:
          "Suivez taille, poids et périmètre crânien avec des graphiques clairs.",
        more: "Un historique propre à consulter et partager rapidement.",
      },
      {
        title: "Insights IA",
        description:
          "Des insights intelligents révèlent les tendances de sommeil, repas et routine.",
        more: "Transformez les logs quotidiens en actions claires.",
      },
    ],
  },
};

const de: Messages = {
  ...en,
  languageName: "Deutsch",
  hero: {
    ...en.hero,
    title: "Baby-Tracker-App – Schlaf, Füttern und Neugeborenen-Tracking",
    subtitle:
      "Erfasse Schlaf, Füttern, Windeln und tägliche Routinen mit einer smarten Baby-Tracker-App für moderne Eltern und die Neugeborenenpflege.",
    badge: "KI-Insights für den Baby-Alltag",
    tagline: "Tracke Schlaf • Fütterung • Wachstum mit KI-Insights",
    googlePlayAria: "Bei Google Play herunterladen",
    appStoreAria: "Im App Store herunterladen",
    googlePlayCtaLead: "Hol dir Baby Tracker auf",
    appStoreCtaLead: "Lade Baby Tracker im",
    seoHeading: "All-in-One Baby-Tracker-App",
    seoText:
      "Verfolge Schlaf, Fütterungen, Windelwechsel und Tagesroutinen an einem Ort mit intelligentem Neugeborenen-Tracking.",
  },
  reviews: {
    ...en.reviews,
    title: "Von Eltern geliebt",
    subtitle: "Ein paar Worte von Menschen, die die App täglich nutzen.",
    aria: "Bewertungen",
  },
  features: {
    title: "Alles, was du für Baby-Tracking brauchst",
    subtitle:
      "Schlaf, Füttern, Wachstum und Zusammenarbeit mit Betreuungspersonen in einer ruhigen, verlässlichen Erfahrung.",
    items: [
      {
        title: "Schlaf-Tracking",
        description:
          "Erfasse Nickerchen und Nachtschlaf in Sekunden und prüfe Muster nach Tag oder Woche.",
      },
      {
        title: "Fütterungs-Tracking",
        description:
          "Dokumentiere Stillen, Fläschchen, Beikost und Mengen mit schnellen Vorlagen.",
      },
      {
        title: "KI-Insights & Warnungen",
        description:
          "Sanfte Zusammenfassungen und smarte Hinweise, wenn etwas auffällig wirkt.",
      },
      {
        title: "Wachstumskurven",
        description:
          "Sieh Gewichts- und Größenverläufe in klaren Diagrammen mit Meilensteinen.",
      },
      {
        title: "Mehrere Betreuungspersonen",
        description:
          "Teile das Babyprofil, damit alle synchron und informiert bleiben.",
      },
    ],
  },
  cta: {
    title: "Bereit für ruhigere Tage?",
    description:
      "Lade Baby Tracker: Feed & Sleep Log herunter und verfolge Schlaf, Füttern und Wachstum mit KI-Insights und sanften Warnungen.",
    note: "Schnelles Setup • Mehrere Betreuungspersonen • Datenschutz zuerst",
    downloadAria: "Bei Google Play herunterladen",
    appStoreAria: "Im App Store herunterladen",
    getItOn: "Erhältlich bei",
    googlePlay: "Google Play",
    appStore: "App Store",
  },
  footer: {
    brand: "Baby Tracker: Feed & Sleep Log",
    description:
      "Verfolge Schlaf, Füttern und Wachstum mit KI-Insights für ruhige, konstante Routinen.",
    googlePlayCta: "Bei Google Play holen",
    appStoreCta: "Im App Store herunterladen",
    formTitle: "Kontakt",
    formSubtitle: "Fragen oder Vorschläge? Schreib uns eine Nachricht.",
    yourEmailLabel: "Deine E-Mail",
    subjectLabel: "Betreff",
    messageLabel: "Nachricht",
    sendLabel: "Senden",
    sendingLabel: "Wird gesendet…",
    sentMessage: "Gesendet. Wir antworten per E-Mail.",
    errorMessage: "Senden gerade nicht möglich. Bitte später erneut versuchen.",
    contactLinePrefix: "Frage? Kontaktiere uns -",
    email: "infobysoriva@gmail.com",
    emailAria: "E-Mail senden",
    copyright: "© {year} Baby Tracker: Feed & Sleep Log",
    bottomNote: "Für Eltern gemacht. Datenschutz zuerst.",
  },
  featureShowcase: {
    ariaLabel: "Funktionsübersicht",
    heading: "Für tägliches Tracking entwickelt",
    subtitle:
      "Schlafprognosen, Wachstumskurven und KI-Insights helfen dir, schneller sicher zu entscheiden.",
    screenshotAlts: [
      "Schlafprognose-Bildschirm",
      "Wachstumskurven-Bildschirm",
      "KI-Insights-Bildschirm",
    ],
    learnMorePanels: [
      {
        heading: "So funktionieren Schlafprognosen",
        paragraphs: [
          "Trage Nickerchen und Wachfenster ein, die App lernt den Rhythmus deines Babys mit der Zeit.",
          "Du siehst klar, wann das nächste Schlaffenster wahrscheinlich ist und kannst besser planen.",
        ],
        bullets: [
          "Nächstes Schlaffenster aus aktuellen Mustern",
          "Schneller Überblick für den Tagesplan",
          "Passt sich an wechselnde Routinen an",
        ],
      },
      {
        heading: "Wachstum klar verfolgen",
        paragraphs: [
          "Halte Größe, Gewicht und Kopfumfang an einem Ort mit übersichtlichen Diagrammen fest.",
          "Ideal für Untersuchungen und schnelles Teilen des Fortschritts.",
        ],
        bullets: [
          "Klare Diagramme für Trends",
          "Messwerte sauber über die Zeit organisiert",
          "Schnelles Teilen beim Kinderarzt",
        ],
      },
      {
        heading: "Aus Logs werden Insights",
        paragraphs: [
          "KI-Insights zeigen Muster in Schlaf, Füttern und Routine.",
          "Du erkennst, was sich ändert und welche kleinen Anpassungen helfen könnten.",
        ],
        bullets: [
          "Muster über mehrere Tage",
          "Signale bei Routineveränderungen",
          "Praktische Zusammenfassungen",
        ],
      },
    ],
    learnMoreHeadingPrefix: "Mehr erfahren",
    close: "Schließen",
    tabs: [
      {
        title: "Schlafprognosen",
        description:
          "KI-gestützte Schlafprognosen helfen zu erkennen, wann dein Baby bereit für das nächste Nickerchen ist.",
        more: "Plane Nickerchen mit mehr Sicherheit.",
      },
      {
        title: "Wachstums-Tracking",
        description:
          "Verfolge Größe, Gewicht und Kopfumfang mit klaren visuellen Diagrammen.",
        more: "Eine saubere Historie zum schnellen Prüfen und Teilen.",
      },
      {
        title: "KI-Insights",
        description:
          "Smarte Insights heben Muster bei Schlaf, Füttern und Tagesroutine hervor.",
        more: "Aus täglichen Einträgen werden klare nächste Schritte.",
      },
    ],
  },
};

const it: Messages = {
  ...en,
  languageName: "Italiano",
  hero: {
    ...en.hero,
    title: "App tracker neonato – sonno, alimentazione e routine",
    subtitle:
      "Monitora sonno, alimentazione, pannolini e routine quotidiane con un'app intelligente pensata per genitori moderni e cura del neonato.",
    badge: "Insight IA per la routine del bebè",
    tagline: "Monitora sonno • alimentazione • crescita con insight IA",
    googlePlayAria: "Scarica su Google Play",
    appStoreAria: "Scarica su App Store",
    googlePlayCtaLead: "Ottieni Baby Tracker su",
    appStoreCtaLead: "Scarica Baby Tracker su",
    seoHeading: "App tracker neonato tutto-in-uno",
    seoText:
      "Tieni traccia di sonno, poppate, cambi pannolino e routine giornaliera in un unico posto con monitoraggio smart del neonato.",
  },
  reviews: {
    ...en.reviews,
    title: "Amata dai genitori",
    subtitle: "Qualche parola da chi usa l’app ogni giorno.",
    aria: "Recensioni",
  },
  features: {
    title: "Tutto ciò che serve per monitorare il bebè",
    subtitle:
      "Sonno, alimentazione, crescita e collaborazione tra caregiver in un'esperienza calma e affidabile.",
    items: [
      {
        title: "Monitoraggio del sonno",
        description:
          "Registra sonnellini e sonno notturno in pochi secondi e rivedi i pattern.",
      },
      {
        title: "Monitoraggio alimentazione",
        description:
          "Tieni traccia di allattamento, biberon, solidi e quantità con preset rapidi.",
      },
      {
        title: "Insight e avvisi IA",
        description:
          "Riepiloghi delicati e avvisi intelligenti quando qualcosa sembra fuori routine.",
      },
      {
        title: "Grafici di crescita",
        description:
          "Visualizza andamento di peso e altezza con grafici chiari e tappe rapide.",
      },
      {
        title: "Più caregiver",
        description:
          "Condividi il profilo del bebè così tutti restano sincronizzati.",
      },
    ],
  },
  cta: {
    title: "Pronto per giornate più serene?",
    description:
      "Scarica Baby Tracker: Feed & Sleep Log per monitorare sonno, alimentazione e crescita con insight IA e avvisi delicati.",
    note: "Setup rapido • Più caregiver • Privacy prima di tutto",
    downloadAria: "Scarica su Google Play",
    appStoreAria: "Scarica su App Store",
    getItOn: "Disponibile su",
    googlePlay: "Google Play",
    appStore: "App Store",
  },
  footer: {
    brand: "Baby Tracker: Feed & Sleep Log",
    description:
      "Monitora sonno, alimentazione e crescita con insight IA, pensato per routine calme e costanti.",
    googlePlayCta: "Disponibile su Google Play",
    appStoreCta: "Scarica su App Store",
    formTitle: "Contattaci",
    formSubtitle: "Hai domande o suggerimenti? Lasciaci un messaggio.",
    yourEmailLabel: "La tua email",
    subjectLabel: "Oggetto",
    messageLabel: "Messaggio",
    sendLabel: "Invia",
    sendingLabel: "Invio…",
    sentMessage: "Inviato. Ti risponderemo via email.",
    errorMessage: "Invio non riuscito. Riprova più tardi.",
    contactLinePrefix: "Hai una domanda? Contattaci -",
    email: "infobysoriva@gmail.com",
    emailAria: "Invia email",
    copyright: "© {year} Baby Tracker: Feed & Sleep Log",
    bottomNote: "Creato per i genitori. Privacy prima di tutto.",
  },
  featureShowcase: {
    ariaLabel: "Panoramica funzionalità",
    heading: "Pensata per il monitoraggio quotidiano",
    subtitle:
      "Previsioni del sonno, grafici di crescita e insight IA per aiutarti a decidere con più sicurezza.",
    screenshotAlts: [
      "Schermata previsioni sonno",
      "Schermata grafici crescita",
      "Schermata insight IA",
    ],
    learnMorePanels: [
      {
        heading: "Come funzionano le previsioni del sonno",
        paragraphs: [
          "Registra sonnellini e finestre di veglia: l'app impara il ritmo del tuo bebè nel tempo.",
          "Ottieni una vista chiara della prossima finestra di sonno per pianificare meglio la giornata.",
        ],
        bullets: [
          "Prossima finestra di sonno basata sui pattern recenti",
          "Panoramica rapida per organizzare la giornata",
          "Si adatta ai cambi di routine",
        ],
      },
      {
        heading: "Segui la crescita con chiarezza",
        paragraphs: [
          "Conserva altezza, peso e circonferenza cranica in un unico posto con grafici leggibili.",
          "Perfetto per controlli pediatrici e condivisione rapida dei progressi.",
        ],
        bullets: [
          "Grafici chiari per individuare trend",
          "Misurazioni organizzate nel tempo",
          "Condivisione rapida durante le visite",
        ],
      },
      {
        heading: "Trasforma i log in insight",
        paragraphs: [
          "Gli insight IA evidenziano i pattern di sonno, alimentazione e routine.",
          "Capisci cosa cambia, cosa resta stabile e quali piccoli aggiustamenti fare.",
        ],
        bullets: [
          "Pattern evidenziati giorno per giorno",
          "Segnali quando la routine cambia",
          "Riepiloghi pratici e utili",
        ],
      },
    ],
    learnMoreHeadingPrefix: "Scopri di più",
    close: "Chiudi",
    tabs: [
      {
        title: "Previsioni sonno",
        description:
          "Le previsioni IA aiutano a capire quando il tuo bebè è pronto per il prossimo sonnellino.",
        more: "Pianifica i sonnellini con maggiore sicurezza.",
      },
      {
        title: "Crescita",
        description:
          "Monitora altezza, peso e circonferenza cranica con grafici chiari.",
        more: "Uno storico ordinato da rivedere e condividere rapidamente.",
      },
      {
        title: "Insight IA",
        description:
          "Insight intelligenti mettono in evidenza pattern di sonno, alimentazione e routine.",
        more: "Trasforma i log quotidiani in azioni chiare.",
      },
    ],
  },
};

const pt: Messages = {
  ...en,
  languageName: "Português",
  hero: {
    ...en.hero,
    title: "App de acompanhamento do bebê – sono, alimentação e recém-nascido",
    subtitle:
      "Acompanhe sono, alimentação, fraldas e rotinas diárias com um app inteligente feito para pais modernos e cuidados com recém-nascidos.",
    badge: "Insights com IA para o dia a dia",
    tagline: "Registre sono • alimentação • crescimento com insights de IA",
    googlePlayAria: "Baixar no Google Play",
    appStoreAria: "Baixar na App Store",
    googlePlayCtaLead: "Obtenha Baby Tracker no",
    appStoreCtaLead: "Baixe Baby Tracker na",
    seoHeading: "App de acompanhamento do bebê tudo em um",
    seoText:
      "Registre sono, mamadas, trocas de fralda e rotina diária em um só lugar com acompanhamento inteligente do recém-nascido.",
  },
  reviews: {
    ...en.reviews,
    title: "Aprovada por pais",
    subtitle: "Algumas palavras de quem usa o app todos os dias.",
    aria: "Avaliações",
  },
  features: {
    title: "Tudo o que você precisa para acompanhar o bebê",
    subtitle:
      "Sono, alimentação, crescimento e colaboração entre cuidadores em uma experiência calma e confiável.",
    items: [
      {
        title: "Acompanhamento do sono",
        description:
          "Registre cochilos e sono noturno em segundos e veja padrões por dia ou semana.",
      },
      {
        title: "Acompanhamento da alimentação",
        description:
          "Acompanhe peito, mamadeira, sólidos e quantidades com registros rápidos.",
      },
      {
        title: "Insights e alertas com IA",
        description:
          "Resumos suaves e alertas inteligentes quando algo parecer fora do normal.",
      },
      {
        title: "Gráficos de crescimento",
        description:
          "Veja tendências de peso e altura com gráficos claros e marcos importantes.",
      },
      {
        title: "Vários cuidadores",
        description:
          "Compartilhe o perfil do bebê para que todos fiquem sincronizados.",
      },
    ],
  },
  cta: {
    title: "Pronto para dias mais tranquilos?",
    description:
      "Baixe Baby Tracker: Feed & Sleep Log para acompanhar sono, alimentação e crescimento com insights de IA e alertas suaves.",
    note: "Configuração rápida • Vários cuidadores • Privacidade em primeiro lugar",
    downloadAria: "Baixar no Google Play",
    appStoreAria: "Baixar na App Store",
    getItOn: "Disponível no",
    googlePlay: "Google Play",
    appStore: "App Store",
  },
  footer: {
    brand: "Baby Tracker: Feed & Sleep Log",
    description:
      "Acompanhe sono, alimentação e crescimento com insights de IA para rotinas mais calmas e consistentes.",
    googlePlayCta: "Baixar no Google Play",
    appStoreCta: "Baixar na App Store",
    formTitle: "Fale conosco",
    formSubtitle: "Tem dúvidas ou sugestões? Envie uma mensagem.",
    yourEmailLabel: "Seu e-mail",
    subjectLabel: "Assunto",
    messageLabel: "Mensagem",
    sendLabel: "Enviar",
    sendingLabel: "Enviando…",
    sentMessage: "Enviado. Vamos responder por e-mail.",
    errorMessage: "Não foi possível enviar agora. Tente novamente mais tarde.",
    contactLinePrefix: "Tem uma dúvida? Fale conosco -",
    email: "infobysoriva@gmail.com",
    emailAria: "Enviar e-mail",
    copyright: "© {year} Baby Tracker: Feed & Sleep Log",
    bottomNote: "Feito para pais. Privacidade em primeiro lugar.",
  },
  featureShowcase: {
    ariaLabel: "Vitrine de recursos",
    heading: "Feito para o acompanhamento diário",
    subtitle:
      "Previsões de sono, gráficos de crescimento e insights com IA para decisões mais confiantes.",
    screenshotAlts: [
      "Tela de previsões de sono",
      "Tela de gráficos de crescimento",
      "Tela de insights com IA",
    ],
    learnMorePanels: [
      {
        heading: "Como funcionam as previsões de sono",
        paragraphs: [
          "Registre cochilos e janelas de vigília e o app aprende o ritmo do bebê com o tempo.",
          "Você vê com clareza a próxima janela de sono e consegue planejar melhor o dia.",
        ],
        bullets: [
          "Próxima janela de cochilo com base em padrões recentes",
          "Visão rápida para organizar o dia",
          "Adapta-se quando a rotina muda",
        ],
      },
      {
        heading: "Acompanhe o crescimento com clareza",
        paragraphs: [
          "Guarde altura, peso e perímetro cefálico em um só lugar com gráficos claros.",
          "Perfeito para consultas e para compartilhar evolução rapidamente.",
        ],
        bullets: [
          "Gráficos claros para identificar tendências",
          "Medições organizadas ao longo do tempo",
          "Compartilhamento rápido em consultas pediátricas",
        ],
      },
      {
        heading: "Transforme registros em insights",
        paragraphs: [
          "Insights com IA destacam padrões de sono, alimentação e rotina.",
          "Você entende o que mudou, o que permanece estável e o que pode ajustar.",
        ],
        bullets: [
          "Padrões destacados por dias",
          "Sinais quando a rotina muda",
          "Resumos práticos para agir",
        ],
      },
    ],
    learnMoreHeadingPrefix: "Saiba mais",
    close: "Fechar",
    tabs: [
      {
        title: "Previsões de sono",
        description:
          "Previsões com IA ajudam a entender quando o bebê está pronto para o próximo cochilo.",
        more: "Planeje os cochilos com mais confiança.",
      },
      {
        title: "Acompanhamento do crescimento",
        description:
          "Acompanhe altura, peso e perímetro cefálico com gráficos visuais claros.",
        more: "Histórico organizado para revisar e compartilhar rapidamente.",
      },
      {
        title: "Insights com IA",
        description:
          "Insights inteligentes destacam padrões de sono, alimentação e rotina diária.",
        more: "Transforme registros diários em próximos passos claros.",
      },
    ],
  },
};

const pl: Messages = {
  ...en,
  languageName: "Polski",
  hero: {
    ...en.hero,
    title: "Aplikacja baby tracker – sen, karmienie i noworodek",
    subtitle:
      "Śledź sen, karmienie, pieluchy i codzienną rutynę dzięki inteligentnej aplikacji dla nowoczesnych rodziców i opieki nad noworodkiem.",
    badge: "Wskazówki AI na co dzień",
    tagline: "Śledź sen • karmienie • wzrost dzięki AI",
    googlePlayAria: "Pobierz z Google Play",
    appStoreAria: "Pobierz z App Store",
    googlePlayCtaLead: "Pobierz Baby Tracker z",
    appStoreCtaLead: "Pobierz Baby Tracker z",
    seoHeading: "Kompletna aplikacja baby tracker",
    seoText:
      "Śledź sen, karmienia, zmiany pieluch i codzienną rutynę dziecka w jednym miejscu dzięki inteligentnemu trackingowi noworodka.",
  },
  reviews: {
    ...en.reviews,
    title: "Uwielbiana przez rodziców",
    subtitle: "Kilka słów od osób korzystających z aplikacji każdego dnia.",
    aria: "Opinie",
  },
  features: {
    title: "Wszystko, czego potrzebujesz do śledzenia dziecka",
    subtitle:
      "Sen, karmienie, wzrost i współpraca opiekunów w spokojnym, godnym zaufania doświadczeniu.",
    items: [
      {
        title: "Śledzenie snu",
        description:
          "Zapisuj drzemki i sen nocny w kilka sekund, a potem analizuj wzorce.",
      },
      {
        title: "Śledzenie karmienia",
        description:
          "Monitoruj karmienie piersią, butelką, stałe pokarmy i ilości z szybkimi wpisami.",
      },
      {
        title: "Insighty i alerty AI",
        description:
          "Delikatne podsumowania i inteligentne alerty, gdy coś wygląda nietypowo.",
      },
      {
        title: "Wykresy wzrostu",
        description:
          "Sprawdzaj trendy masy i wzrostu na czytelnych wykresach.",
      },
      {
        title: "Wielu opiekunów",
        description:
          "Udostępnij profil dziecka, aby wszyscy byli na bieżąco.",
      },
    ],
  },
  cta: {
    title: "Gotowy na spokojniejsze dni?",
    description:
      "Pobierz Baby Tracker: Feed & Sleep Log, aby śledzić sen, karmienie i wzrost z insightami AI i delikatnymi alertami.",
    note: "Szybka konfiguracja • Wielu opiekunów • Prywatność przede wszystkim",
    downloadAria: "Pobierz z Google Play",
    appStoreAria: "Pobierz z App Store",
    getItOn: "Pobierz w",
    googlePlay: "Google Play",
    appStore: "App Store",
  },
  footer: {
    brand: "Baby Tracker: Feed & Sleep Log",
    description:
      "Śledź sen, karmienie i wzrost z insightami AI, zaprojektowane dla spokojnych i regularnych rutyn.",
    googlePlayCta: "Pobierz z Google Play",
    appStoreCta: "Pobierz z App Store",
    formTitle: "Skontaktuj się z nami",
    formSubtitle: "Masz pytania lub sugestie? Napisz do nas.",
    yourEmailLabel: "Twój e-mail",
    subjectLabel: "Temat",
    messageLabel: "Wiadomość",
    sendLabel: "Wyślij",
    sendingLabel: "Wysyłanie…",
    sentMessage: "Wysłano. Odpowiemy e-mailem.",
    errorMessage: "Nie udało się wysłać. Spróbuj ponownie później.",
    contactLinePrefix: "Masz pytanie? Skontaktuj się -",
    email: "infobysoriva@gmail.com",
    emailAria: "Wyślij email",
    copyright: "© {year} Baby Tracker: Feed & Sleep Log",
    bottomNote: "Stworzone dla rodziców. Prywatność przede wszystkim.",
  },
  featureShowcase: {
    ariaLabel: "Prezentacja funkcji",
    heading: "Stworzone do codziennego śledzenia",
    subtitle:
      "Prognozy snu, wykresy wzrostu i insighty AI pomagają szybciej podejmować pewne decyzje.",
    screenshotAlts: [
      "Ekran prognoz snu",
      "Ekran wykresów wzrostu",
      "Ekran insightów AI",
    ],
    learnMorePanels: [
      {
        heading: "Jak działają prognozy snu",
        paragraphs: [
          "Zapisuj drzemki i okna czuwania, a aplikacja uczy się rytmu Twojego dziecka.",
          "Widzisz, kiedy prawdopodobnie nadejdzie kolejna drzemka i łatwiej planujesz dzień.",
        ],
        bullets: [
          "Kolejne okno drzemki na podstawie ostatnich wzorców",
          "Szybki podgląd planu dnia",
          "Dostosowanie do zmian rutyny",
        ],
      },
      {
        heading: "Śledź wzrost przejrzyście",
        paragraphs: [
          "Trzymaj wzrost, wagę i obwód głowy w jednym miejscu na czytelnych wykresach.",
          "To wygodne podczas wizyt i szybkiego udostępniania postępów.",
        ],
        bullets: [
          "Czytelne wykresy trendów",
          "Pomiary uporządkowane w czasie",
          "Szybkie udostępnianie u pediatry",
        ],
      },
      {
        heading: "Zamień logi w insighty",
        paragraphs: [
          "Insighty AI pokazują wzorce snu, karmienia i codziennej rutyny.",
          "Widzisz co się zmienia, co jest stabilne i jakie drobne poprawki warto wdrożyć.",
        ],
        bullets: [
          "Najważniejsze wzorce z kolejnych dni",
          "Sygnały zmian rutyny",
          "Praktyczne podsumowania",
        ],
      },
    ],
    learnMoreHeadingPrefix: "Dowiedz się więcej",
    close: "Zamknij",
    tabs: [
      {
        title: "Prognozy snu",
        description:
          "Prognozy AI pomagają zrozumieć, kiedy dziecko jest gotowe na kolejną drzemkę.",
        more: "Planuj drzemki z większą pewnością.",
      },
      {
        title: "Śledzenie wzrostu",
        description:
          "Śledź wzrost, wagę i obwód głowy na przejrzystych wykresach.",
        more: "Uporządkowana historia do szybkiego przeglądu i udostępniania.",
      },
      {
        title: "Insighty AI",
        description:
          "Inteligentne insighty wskazują wzorce snu, karmienia i codziennej rutyny.",
        more: "Zamień codzienne wpisy w jasne kolejne kroki.",
      },
    ],
  },
};

const ru: Messages = {
  ...en,
  languageName: "Русский",
  hero: {
    ...en.hero,
    title: "Приложение Baby Tracker — сон, кормление и новорожденный",
    subtitle:
      "Отслеживайте сон, кормления, подгузники и ежедневный режим с умным трекером для современных родителей и ухода за новорожденным.",
    badge: "AI‑подсказки для ухода за малышом",
    tagline: "Отслеживайте сон • кормление • рост с AI‑инсайтами",
    googlePlayAria: "Скачать в Google Play",
    appStoreAria: "Скачать в App Store",
    googlePlayCtaLead: "Скачать Baby Tracker в",
    appStoreCtaLead: "Загрузить Baby Tracker в",
    seoHeading: "Универсальное приложение Baby Tracker",
    seoText:
      "Отслеживайте сон, кормления, смену подгузников и ежедневный режим в одном месте с умным трекингом новорожденного.",
  },
  reviews: {
    ...en.reviews,
    title: "Любима родителями",
    subtitle: "Пара слов от тех, кто пользуется приложением каждый день.",
    aria: "Отзывы",
  },
  features: {
    title: "Все, что нужно для трекинга малыша",
    subtitle:
      "Сон, кормления, рост и совместная работа опекунов в спокойном и надежном интерфейсе.",
    items: [
      {
        title: "Трекинг сна",
        description:
          "Фиксируйте дневной и ночной сон за секунды и смотрите закономерности по дням.",
      },
      {
        title: "Трекинг кормлений",
        description:
          "Отслеживайте грудное, бутылочку, прикорм и объемы с быстрыми шаблонами.",
      },
      {
        title: "AI-инсайты и предупреждения",
        description:
          "Мягкие сводки и умные предупреждения, когда что-то выглядит необычно.",
      },
      {
        title: "Графики роста",
        description:
          "Смотрите тренды веса и роста на понятных графиках с ключевыми этапами.",
      },
      {
        title: "Несколько опекунов",
        description:
          "Делитесь профилем малыша, чтобы все были синхронизированы.",
      },
    ],
  },
  cta: {
    title: "Готовы к более спокойным дням?",
    description:
      "Скачайте Baby Tracker: Feed & Sleep Log, чтобы отслеживать сон, кормления и рост с AI-инсайтами и мягкими предупреждениями.",
    note: "Быстрая настройка • Несколько опекунов • Приватность прежде всего",
    downloadAria: "Скачать в Google Play",
    appStoreAria: "Скачать в App Store",
    getItOn: "Доступно в",
    googlePlay: "Google Play",
    appStore: "App Store",
  },
  footer: {
    brand: "Baby Tracker: Feed & Sleep Log",
    description:
      "Отслеживайте сон, кормления и рост с AI-инсайтами для спокойного и стабильного режима.",
    googlePlayCta: "Скачать в Google Play",
    appStoreCta: "Скачать в App Store",
    formTitle: "Свяжитесь с нами",
    formSubtitle: "Есть вопросы или предложения? Оставьте сообщение.",
    yourEmailLabel: "Ваш e-mail",
    subjectLabel: "Тема",
    messageLabel: "Сообщение",
    sendLabel: "Отправить",
    sendingLabel: "Отправка…",
    sentMessage: "Отправлено. Ответим на e-mail.",
    errorMessage: "Сейчас отправить не удалось. Попробуйте позже.",
    contactLinePrefix: "Есть вопрос? Напишите нам -",
    email: "infobysoriva@gmail.com",
    emailAria: "Написать на почту",
    copyright: "© {year} Baby Tracker: Feed & Sleep Log",
    bottomNote: "Сделано для родителей. Приватность прежде всего.",
  },
  featureShowcase: {
    ariaLabel: "Обзор функций",
    heading: "Создано для ежедневного трекинга",
    subtitle:
      "Прогнозы сна, графики роста и AI-инсайты помогают быстрее принимать уверенные решения.",
    screenshotAlts: [
      "Экран прогнозов сна",
      "Экран графиков роста",
      "Экран AI-инсайтов",
    ],
    learnMorePanels: [
      {
        heading: "Как работают прогнозы сна",
        paragraphs: [
          "Записывайте дневной сон и окна бодрствования, приложение со временем изучает ритм малыша.",
          "Вы видите ближайшее окно сна и можете спокойнее планировать день.",
        ],
        bullets: [
          "Следующее окно сна по последним паттернам",
          "Быстрый обзор для планирования дня",
          "Адаптация к изменениям режима",
        ],
      },
      {
        heading: "Отслеживайте рост наглядно",
        paragraphs: [
          "Храните рост, вес и окружность головы в одном месте с понятными графиками.",
          "Удобно для визитов к врачу и быстрого обмена прогрессом.",
        ],
        bullets: [
          "Понятные графики для отслеживания трендов",
          "Измерения аккуратно упорядочены по времени",
          "Быстрый обмен данными на приеме",
        ],
      },
      {
        heading: "Превращайте записи в инсайты",
        paragraphs: [
          "AI-инсайты выделяют закономерности сна, кормлений и ежедневного режима.",
          "Вы видите, что меняется, что стабильно и где помогут небольшие корректировки.",
        ],
        bullets: [
          "Ключевые паттерны по дням",
          "Сигналы при изменении режима",
          "Практичные рекомендации",
        ],
      },
    ],
    learnMoreHeadingPrefix: "Подробнее",
    close: "Закрыть",
    tabs: [
      {
        title: "Прогнозы сна",
        description:
          "AI-прогнозы сна помогают понять, когда малыш готов к следующему сну.",
        more: "Планируйте сон с большей уверенностью.",
      },
      {
        title: "Трекинг роста",
        description:
          "Отслеживайте рост, вес и окружность головы на наглядных графиках.",
        more: "Чистая история для быстрого просмотра и обмена.",
      },
      {
        title: "AI-инсайты",
        description:
          "Умные инсайты подсвечивают паттерны сна, кормлений и рутины.",
        more: "Преобразуйте ежедневные записи в понятные следующие шаги.",
      },
    ],
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
