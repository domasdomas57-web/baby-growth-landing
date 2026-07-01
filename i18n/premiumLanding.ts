import { DEFAULT_LOCALE, type Locale } from "./locales";

type PremiumLandingFeature = {
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
};

type PremiumLandingScreen = {
  eyebrow: string;
  title: string;
  description: string;
};

type PremiumLandingReview = {
  quote: string;
  name: string;
  role: string;
};

export type PremiumLandingMessages = {
  brandName: string;
  iconAlt: string;
  nav: {
    story: string;
    features: string;
    reviews: string;
    download: string;
  };
  downloadMenu: {
    ariaLabel: string;
    iphone: string;
    googlePlay: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    downloadCta: string;
    storeAvailability: string;
    appStore: string;
    googlePlay: string;
    trustTitle: string;
    trustSubtitle: string;
    parentAvatarAltPrefix: string;
  };
  doctorReport: {
    eyebrow: string;
    title: string;
    description: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
  builtByParent: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
  };
  trust: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  seoSection: {
    title: string;
    paragraphs: string[];
  };
  downloadMicro: {
    afterFeaturesTitle: string;
    afterFeaturesSubtitle: string;
  };
  aiDisclaimer: string;
  story: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
  };
  features: {
    eyebrow: string;
    title: string;
    items: PremiumLandingFeature[];
  };
  moreScreens: {
    eyebrow: string;
    title: string;
    description: string;
    items: PremiumLandingScreen[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    description: string;
    appStoreLabel: string;
    appStoreNote: string;
    googlePlayLabel: string;
    googlePlayNote: string;
    items: PremiumLandingReview[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

const en: PremiumLandingMessages = {
  brandName: "Baby Tracker - Soriva",
  iconAlt: "Baby Tracker - Soriva app icon",
  nav: {
    story: "Story",
    features: "Features",
    reviews: "Reviews",
    download: "Download free",
  },
  downloadMenu: {
    ariaLabel: "Download app",
    iphone: "Download for iPhone",
    googlePlay: "Get it on Google Play",
  },
  hero: {
    badge: "Baby tracker for modern parents",
    title: "Baby tracking made simple for feeds, sleep, diapers and doctor reports.",
    description:
      "Track your baby's daily routine, understand patterns, sync with caregivers, and export clear reports when your pediatrician asks.",
    downloadCta: "Download free",
    storeAvailability: "Available on App Store and Google Play",
    appStore: "App Store",
    googlePlay: "Google Play",
    trustTitle: "Loved by more than 400,000 parents worldwide",
    trustSubtitle: "",
    parentAvatarAltPrefix: "Parent using baby tracker app",
  },
  doctorReport: {
    eyebrow: "Pediatrician report",
    title: "Doctor-ready reports in seconds",
    description:
      "When your pediatrician asks about feeds, diapers, sleep or growth, you don't have to guess. Export a clear summary for the days or weeks you choose.",
    ctaTitle: "Start tracking free",
    ctaSubtitle: "Prepare cleaner summaries for pediatrician visits.",
  },
  builtByParent: {
    eyebrow: "Parents worldwide",
    title: "Loved by more than 400,000 parents worldwide",
    description:
      "Parents around the world use Soriva to track feeds, sleep, diapers, and daily routines in one calm app—without paper notes, guesswork, or cluttered screens.",
    note: "Available on iPhone and Android. Built for real newborn and infant care, every day.",
  },
  trust: {
    eyebrow: "Trust",
    title: "Loved by more than 400,000 parents worldwide",
    items: [
      "Loved by parents worldwide",
      "Loved by more than 400,000 parents worldwide",
      "Available on iPhone and Android",
      "Privacy-conscious baby tracking",
      "Supportive AI insights, not medical diagnosis",
    ],
  },
  seoSection: {
    title: "One calm baby tracker app for your whole routine",
    paragraphs: [
      "Soriva is a baby tracker app for parents who want feeding, sleep, diapers, and growth in one place—not scattered across notebooks and messages. Use it as a newborn tracker from day one, a baby feeding tracker for nursing and bottles, a baby sleep tracker for naps and nights, and a diaper tracker when pediatricians ask about daily counts.",
      "Caregiver sync keeps mom, dad, grandparents, and nannies on the same baby log. When appointment day arrives, export a pediatrician report or doctor report for the timeframe you choose instead of guessing from memory. Soriva is a baby routine tracker and baby care tracker built for real households—calm, clear, and respectful of how sensitive baby data is.",
    ],
  },
  downloadMicro: {
    afterFeaturesTitle: "Start tracking free",
    afterFeaturesSubtitle:
      "No paper notes. No guessing. Track feeds, sleep, diapers, growth and routines in one calm baby log app.",
  },
  aiDisclaimer:
    "AI insights are supportive and informational only. Soriva does not provide medical advice and does not replace your pediatrician.",
  story: {
    eyebrow: "Notifications",
    title: "Notifications that keep you informed without turning the app into noise.",
    description: "Live updates, reminders, and important activity alerts help you stay on top of the day from anywhere, without constantly opening the app.",
    note: "Built to feel clear, timely, and genuinely useful when you need a fast overview.",
  },
  features: {
    eyebrow: "Features",
    title: "Every essential detail, arranged like it belongs there.",
    items: [
      {
        eyebrow: "Caregiver Sync",
        title: "Everyone caring for your baby stays beautifully in sync.",
        description: "Parents, grandparents, and other caregivers can follow the same timeline, the same notes, and the same rhythm without chasing updates across chats.",
        accent: "Shared care that feels seamless.",
      },
      {
        eyebrow: "Timeline",
        title: "Your whole day, arranged into one calm timeline.",
        description: "See what happened, when it happened, and what is likely coming next. It is the fastest way to get clarity when the day starts to blur together.",
        accent: "Clarity in one glance.",
      },
      {
        eyebrow: "Daily Routine",
        title: "Wake windows and naps turn into a routine you can actually follow.",
        description: "The day schedule view lays out naps, wake windows, and sleep blocks in one gentle structure, so planning the next part of the day feels lighter.",
        accent: "A calmer rhythm for the whole day.",
      },
      {
        eyebrow: "AI Insights",
        title: "Patterns become guidance instead of more data to manage.",
        description:
          "AI summaries turn recent activity into useful recommendations and a clearer sense of your baby's rhythm, without making the product feel noisy or clinical. AI insights are supportive and informational only—not medical advice.",
        accent: "Confidence without overwhelm.",
      },
      {
        eyebrow: "Widgets",
        title: "The fastest actions move straight to your home screen.",
        description: "Widgets bring recent activity, key shortcuts, and at-a-glance status closer, so you can log the essentials without opening the full app flow every time.",
        accent: "Quick access without extra taps.",
      },
    ],
  },
  moreScreens: {
    eyebrow: "More Screens",
    title: "More moments of the product, each designed to feel clear and reassuring.",
    description: "A closer look at the health, growth, and diaper tools parents reach for throughout the day.",
    items: [
      {
        eyebrow: "Growth",
        title: "Growth milestones stay visible in a format parents can understand fast.",
        description: "Weight, height, and head measurements are presented with age-based percentiles so progress feels readable, visual, and immediately useful.",
      },
      {
        eyebrow: "Health",
        title: "Important health entries are logged cleanly and kept close at hand.",
        description: "Temperature tracking gives parents one clear place for health notes and readings, making it easier to keep important records organized.",
      },
      {
        eyebrow: "Diapers",
        title: "Diaper changes stay logged in a clean, reassuring flow.",
        description: "Quick updates help you spot patterns and keep a dependable day record without turning small tasks into admin work.",
      },
    ],
  },
  reviews: {
    eyebrow: "Early feedback",
    title: "Parents who want less chaos in daily tracking.",
    description:
      "Soriva is still growing. Early parents tell us they appreciate a calm interface, shared caregiver sync, and doctor-ready summaries—without pressure or fake hype.",
    appStoreLabel: "App Store",
    appStoreNote: "Available on iPhone",
    googlePlayLabel: "Google Play",
    googlePlayNote: "Available on Android",
    items: [
      {
        quote:
          "I wanted one place for feeds and sleep without the app feeling clinical. Soriva stays calm even on messy days.",
        name: "Early parent feedback",
        role: "First weeks at home",
      },
      {
        quote:
          "Caregiver sync helped our handoffs—fewer texts asking what happened during the last nap.",
        name: "Early parent feedback",
        role: "Two-caregiver household",
      },
      {
        quote:
          "Exporting a summary before a checkup was easier than trying to remember the week from memory.",
        name: "Early parent feedback",
        role: "Pediatrician visit prep",
      },
    ],
  },
  finalCta: {
    eyebrow: "Download",
    title: "Start tracking free",
    description:
      "No paper notes. No guessing. One simple baby log for feeds, sleep, diapers, growth, and pediatrician-ready reports. Available on App Store and Google Play.",
  },
};

const lt: PremiumLandingMessages = {
  ...en,
  nav: { story: "Istorija", features: "Funkcijos", reviews: "Atsiliepimai", download: "Atsisiųsti" },
  downloadMenu: { ariaLabel: "Atsisiųsti programėlę", iphone: "Atsisiųsti į iPhone", googlePlay: "Gauti per Google Play" },
  hero: {
    ...en.hero,
    badge: "Ramus sekimas šiuolaikiniams tėvams",
    title: "Miegokite ramiau. Sekite mažiau. Mėgaukitės kūdikiu labiau.",
    description: "Sekite miegą, maitinimą, sauskelnes, rutiną ir AI įžvalgas vienoje ramioje, gražioje programėlėje.",
    appStore: "App Store",
    googlePlay: "Google Play",
    trustTitle: "Tėvų pasitikima visame pasaulyje",
    trustSubtitle: "Rami, patikima ir gražiai paprasta.",
    parentAvatarAltPrefix: "Tėvų avataras",
  },
  story: {
    eyebrow: "Pranešimai",
    title: "Pranešimai, kurie informuoja, bet nepaverčia programėlės triukšmu.",
    description: "Tiesioginiai atnaujinimai, priminimai ir svarbūs veiklų pranešimai padeda sekti dieną iš bet kurios vietos, neatidarinėjant programėlės nuolat.",
    note: "Sukurta taip, kad būtų aišku, laiku ir iš tiesų naudinga, kai reikia greitos apžvalgos.",
  },
  features: {
    eyebrow: "Funkcijos",
    title: "Viskas, kas svarbiausia, sudėta taip, kaip ir turi būti.",
    items: [
      { eyebrow: "Globėjų sinchronizacija", title: "Visi, kurie rūpinasi jūsų kūdikiu, lieka gražiai sinchronizuoti.", description: "Tėvai, seneliai ir kiti globėjai gali matyti tą pačią laiko juostą, tas pačias pastabas ir tą patį ritmą, nebesivaikydami informacijos žinutėse.", accent: "Bendras rūpestis be trukdžių." },
      { eyebrow: "Laiko juosta", title: "Visa diena sudėliota į vieną ramią laiko juostą.", description: "Matote, kas įvyko, kada tai įvyko ir kas tikėtina bus toliau. Tai greičiausias būdas susigrąžinti aiškumą, kai diena pradeda lietis į vieną.", accent: "Aiškumas vienu žvilgsniu." },
      { eyebrow: "Dienos rutina", title: "Budrumo langai ir miegai virsta rutina, kurios iš tikrųjų galima laikytis.", description: "Dienos grafiko vaizdas sudėlioja miegus, budrumo langus ir miego blokus į vieną švelnią struktūrą, todėl planuoti tolesnę dienos dalį tampa lengviau.", accent: "Ramesnis visos dienos ritmas." },
      { eyebrow: "AI įžvalgos", title: "Dėsningumai tampa gairėmis, o ne dar daugiau duomenų.", description: "AI suvestinės paverčia naujausią veiklą naudingomis rekomendacijomis ir aiškesniu kūdikio ritmo supratimu, nepadarydamos produkto triukšmingo ar per daug techninio.", accent: "Pasitikėjimas be perkrovos." },
      { eyebrow: "Valdikliai", title: "Greičiausi veiksmai persikelia tiesiai į jūsų pradžios ekraną.", description: "Valdikliai priartina naujausią veiklą, svarbiausius trumpinius ir greitą būsenos vaizdą, kad galėtumėte pažymėti esmę neatidarydami pilno programėlės srauto kas kartą.", accent: "Greita prieiga be papildomų paspaudimų." },
    ],
  },
  moreScreens: {
    eyebrow: "Daugiau ekranų",
    title: "Daugiau produkto akimirkų, sukurtų aiškumui ir ramybei.",
    description: "Iš arčiau pažvelkite į sveikatos, augimo ir sauskelnių įrankius, kurių tėvams reikia visos dienos metu.",
    items: [
      { eyebrow: "Augimas", title: "Augimo etapai matomi formatu, kurį tėvai greitai supranta.", description: "Svoris, ūgis ir galvos apimtis pateikiami su amžiui pritaikytais procentiliais, kad pažanga būtų aiški, vizuali ir iškart naudinga." },
      { eyebrow: "Sveikata", title: "Svarbūs sveikatos įrašai registruojami tvarkingai ir visada po ranka.", description: "Temperatūros sekimas suteikia vieną aiškią vietą sveikatos pastaboms ir matavimams, kad svarbią informaciją būtų lengviau laikyti tvarkingai." },
      { eyebrow: "Sauskelnės", title: "Sauskelnių keitimai registruojami aiškiai ir užtikrintai.", description: "Greiti įrašai padeda pastebėti dėsningumus ir turėti patikimą dienos istoriją, nepaverčiant mažų užduočių administravimu." },
    ],
  },
  reviews: {
    eyebrow: "Pasitikėjimas",
    title: "Sukurta taip, kad suteiktų ramybės nuo pirmos minutės.",
    description: "Tėvams nereikia dar daugiau spaudimo. Jiems reikia kažko patikimo, išbaigto ir pakankamai ramaus, kad tuo būtų galima pasitikėti kasdien.",
    appStoreLabel: "App Store",
    appStoreNote: "Vertinama už paprastumą",
    googlePlayLabel: "Google Play",
    googlePlayNote: "Pasitikima kasdien naudojančių",
    items: [
      { quote: "Ji suteikia tokį pat ramybės jausmą kaip geriausi produktai tėvams. Atidarau ją ir iš karto žinau, kas įvyko šiandien.", name: "Emma R.", role: "Pirmą kartą mama" },
      { quote: "Vien miego prognozės padarė vakarus mažiau įtemptus. Programėlė atrodo apgalvota, o ne triukšminga.", name: "Daniel & Sofija", role: "6 mėn. kūdikio tėvai" },
      { quote: "Dalijamės sekimu su močiute ir aukle, ir visi lieka sinchronizuoti be dešimčių žinučių.", name: "Milda K.", role: "Dirbantis tėtis ar mama" },
    ],
  },
  finalCta: {
    eyebrow: "Paskutinis kvietimas",
    title: "Norite ramesnių dienų?",
    description: "Pradėkite nuo aiškios rutinos miegui, maitinimui, sauskelnėms ir įžvalgoms. Viskas, kas svarbiausia, be triukšmo.",
  },
};

const es: PremiumLandingMessages = {
  ...en,
  nav: { story: "Historia", features: "Funciones", reviews: "Reseñas", download: "Descargar" },
  downloadMenu: { ariaLabel: "Descargar la app", iphone: "Descargar para iPhone", googlePlay: "Consíguela en Google Play" },
  hero: { ...en.hero, badge: "Seguimiento tranquilo para padres modernos", title: "Duerme mejor. Registra menos. Disfruta más de tu bebé.", description: "Registra sueño, alimentación, pañales, rutinas e insights de IA en una app tranquila y bonita.", appStore: "App Store", googlePlay: "Google Play", trustTitle: "En la confianza de padres de todo el mundo", trustSubtitle: "Tranquila, fiable y bellamente simple.", parentAvatarAltPrefix: "Avatar de padre o madre" },
  story: { eyebrow: "Notificaciones", title: "Notificaciones que te mantienen informado sin convertir la app en ruido.", description: "Actualizaciones en tiempo real, recordatorios y alertas importantes te ayudan a seguir el día desde cualquier lugar sin abrir la app constantemente.", note: "Pensada para sentirse clara, oportuna y realmente útil cuando necesitas una visión rápida." },
  features: { eyebrow: "Funciones", title: "Todo lo esencial, ordenado como realmente debería estar.", items: [
    { eyebrow: "Sincronización", title: "Todos los que cuidan a tu bebé permanecen perfectamente sincronizados.", description: "Padres, abuelos y otros cuidadores pueden seguir la misma línea de tiempo, las mismas notas y el mismo ritmo sin perseguirse por mensajes.", accent: "Cuidado compartido sin fricción." },
    { eyebrow: "Línea de tiempo", title: "Todo el día, organizado en una línea de tiempo tranquila.", description: "Ves qué pasó, cuándo pasó y qué probablemente viene después. Es la forma más rápida de recuperar claridad cuando el día empieza a mezclarse.", accent: "Claridad de un vistazo." },
    { eyebrow: "Rutina diaria", title: "Las ventanas de vigilia y las siestas se convierten en una rutina realmente fácil de seguir.", description: "La vista del horario del día organiza siestas, ventanas de vigilia y bloques de sueño en una estructura suave que facilita planificar el resto de la jornada.", accent: "Un ritmo más tranquilo para todo el día." },
    { eyebrow: "Insights IA", title: "Los patrones se convierten en guía en lugar de más datos por gestionar.", description: "Los resúmenes con IA convierten la actividad reciente en recomendaciones útiles y una comprensión más clara del ritmo de tu bebé, sin que el producto se sienta ruidoso o clínico.", accent: "Confianza sin saturación." },
    { eyebrow: "Widgets", title: "Las acciones más rápidas van directas a tu pantalla de inicio.", description: "Los widgets acercan la actividad reciente, los accesos clave y el estado general para registrar lo esencial sin abrir siempre toda la app.", accent: "Acceso rápido sin toques extra." },
  ] },
  moreScreens: { eyebrow: "Más pantallas", title: "Más momentos del producto, cada uno pensado para dar claridad y calma.", description: "Una mirada más cercana a las herramientas de salud, crecimiento y pañales que los padres usan durante el día.", items: [
    { eyebrow: "Crecimiento", title: "Los hitos de crecimiento se mantienen visibles en un formato fácil de entender.", description: "Peso, altura y perímetro craneal se muestran con percentiles según la edad para que el progreso se vea claro, visual y útil al instante." },
    { eyebrow: "Salud", title: "Las entradas de salud importantes quedan registradas de forma limpia y siempre a mano.", description: "El seguimiento de temperatura ofrece un lugar claro para notas y mediciones de salud, facilitando mantener esos datos organizados." },
    { eyebrow: "Pañales", title: "Los cambios de pañal se registran en un flujo limpio y tranquilizador.", description: "Las actualizaciones rápidas ayudan a detectar patrones y a mantener un registro fiable del día sin convertir pequeñas tareas en administración." },
  ] },
  reviews: { eyebrow: "Confianza", title: "Creada para transmitir tranquilidad desde el primer minuto.", description: "Los padres no necesitan más presión. Necesitan algo fiable, pulido y lo bastante tranquilo como para confiar en ello cada día.", appStoreLabel: "App Store", appStoreNote: "Valorada por su simplicidad", googlePlayLabel: "Google Play", googlePlayNote: "En la confianza de usuarios diarios", items: [
    { quote: "Se siente tranquila, como los mejores productos para padres. La abro y enseguida sé qué ha pasado hoy.", name: "Emma R.", role: "Mamá primeriza" },
    { quote: "Solo las predicciones de sueño hicieron las tardes menos estresantes. La app se siente pensada, no ruidosa.", name: "Daniel & Sofija", role: "Padres de un bebé de 6 meses" },
    { quote: "Compartimos el seguimiento con la abuela y la niñera, y todos siguen sincronizados sin una docena de mensajes.", name: "Milda K.", role: "Madre o padre trabajador" },
  ] },
  finalCta: { eyebrow: "CTA final", title: "¿Listo para días más tranquilos?", description: "Empieza con una rutina clara para sueño, tomas, pañales e insights. Todo lo importante, sin ruido." },
};

const fr: PremiumLandingMessages = {
  ...en,
  nav: { story: "Histoire", features: "Fonctionnalités", reviews: "Avis", download: "Télécharger" },
  downloadMenu: { ariaLabel: "Télécharger l'application", iphone: "Télécharger pour iPhone", googlePlay: "Disponible sur Google Play" },
  hero: { ...en.hero, badge: "Un suivi apaisant pour les parents d'aujourd'hui", title: "Dormez mieux. Notez moins. Profitez davantage de votre bébé.", description: "Suivez le sommeil, l'alimentation, les couches, les routines et les insights IA dans une seule application calme et élégante.", appStore: "App Store", googlePlay: "Google Play", trustTitle: "Adoptée par des parents dans le monde entier", trustSubtitle: "Calme, fiable et magnifiquement simple.", parentAvatarAltPrefix: "Avatar de parent" },
  story: { eyebrow: "Notifications", title: "Des notifications qui vous informent sans transformer l'app en bruit permanent.", description: "Mises à jour en direct, rappels et alertes importantes vous aident à suivre la journée où que vous soyez, sans devoir ouvrir l'application en permanence.", note: "Conçue pour être claire, utile et vraiment pertinente quand vous avez besoin d'un aperçu rapide." },
  features: { eyebrow: "Fonctionnalités", title: "Chaque détail essentiel, organisé comme il devrait l'être.", items: [
    { eyebrow: "Synchronisation", title: "Toutes les personnes qui s'occupent de votre bébé restent parfaitement synchronisées.", description: "Parents, grands-parents et autres aidants peuvent suivre la même chronologie, les mêmes notes et le même rythme sans courir après les informations dans les messages.", accent: "Un partage simple et fluide." },
    { eyebrow: "Chronologie", title: "Toute la journée, organisée dans une chronologie apaisante.", description: "Vous voyez ce qui s'est passé, quand cela s'est produit et ce qui arrive probablement ensuite. C'est la façon la plus rapide de retrouver de la clarté quand la journée se brouille.", accent: "De la clarté en un coup d'oeil." },
    { eyebrow: "Routine quotidienne", title: "Les fenêtres d'éveil et les siestes deviennent une routine facile à suivre.", description: "La vue planning organise les siestes, les fenêtres d'éveil et les périodes de sommeil dans une structure douce qui rend le reste de la journée plus facile à planifier.", accent: "Un rythme plus serein toute la journée." },
    { eyebrow: "Insights IA", title: "Les tendances deviennent des repères, pas des données de plus à gérer.", description: "Les résumés IA transforment l'activité récente en recommandations utiles et en une vision plus claire du rythme de votre bébé, sans donner une impression froide ou trop technique.", accent: "De la confiance sans surcharge." },
    { eyebrow: "Widgets", title: "Les actions les plus rapides arrivent directement sur l'écran d'accueil.", description: "Les widgets rapprochent les activités récentes, les raccourcis clés et l'état général pour noter l'essentiel sans ouvrir toute l'application à chaque fois.", accent: "Un accès rapide sans étapes inutiles." },
  ] },
  moreScreens: { eyebrow: "Plus d'écrans", title: "D'autres moments du produit, pensés pour rassurer et clarifier.", description: "Un aperçu plus précis des outils santé, croissance et couches que les parents utilisent tout au long de la journée.", items: [
    { eyebrow: "Croissance", title: "Les étapes de croissance restent visibles dans un format facile à comprendre.", description: "Poids, taille et périmètre crânien sont affichés avec des percentiles adaptés à l'âge pour rendre les progrès lisibles, visuels et immédiatement utiles." },
    { eyebrow: "Santé", title: "Les informations de santé importantes sont enregistrées proprement et restent à portée de main.", description: "Le suivi de température donne aux parents un endroit clair pour les notes et mesures de santé, ce qui facilite l'organisation des informations importantes." },
    { eyebrow: "Couches", title: "Les changements de couche sont enregistrés dans un flux propre et rassurant.", description: "Les mises à jour rapides aident à repérer les tendances et à conserver un historique fiable de la journée sans transformer les petites tâches en administration." },
  ] },
  reviews: { eyebrow: "Confiance", title: "Conçue pour rassurer dès la première minute.", description: "Les parents n'ont pas besoin de plus de pression. Ils ont besoin de quelque chose de fiable, soigné et assez apaisant pour lui faire confiance chaque jour.", appStoreLabel: "App Store", appStoreNote: "Appréciée pour sa simplicité", googlePlayLabel: "Google Play", googlePlayNote: "Adoptée au quotidien", items: [
    { quote: "Elle procure le même calme que les meilleurs produits pour parents. Je l'ouvre et je sais tout de suite ce qui s'est passé aujourd'hui.", name: "Emma R.", role: "Jeune maman" },
    { quote: "Les prévisions de sommeil à elles seules ont rendu les soirées moins stressantes. L'application est réfléchie, pas bruyante.", name: "Daniel & Sofija", role: "Parents d'un bébé de 6 mois" },
    { quote: "Nous partageons le suivi avec la grand-mère et la nounou, et tout le monde reste synchronisé sans une dizaine de messages.", name: "Milda K.", role: "Parent actif" },
  ] },
  finalCta: { eyebrow: "CTA final", title: "Prêt pour des journées plus sereines ?", description: "Commencez avec une routine claire pour le sommeil, les repas, les couches et les insights. Tout ce qui compte, sans le bruit." },
};

const de: PremiumLandingMessages = {
  ...en,
  nav: { story: "Story", features: "Funktionen", reviews: "Bewertungen", download: "Download" },
  downloadMenu: { ariaLabel: "App herunterladen", iphone: "Für iPhone laden", googlePlay: "Bei Google Play herunterladen" },
  hero: { ...en.hero, badge: "Ruhiges Tracking für moderne Eltern", title: "Besser schlafen. Weniger tracken. Dein Baby mehr genießen.", description: "Verfolge Schlaf, Füttern, Windeln, Routinen und KI-Insights in einer ruhigen, schönen App.", appStore: "App Store", googlePlay: "Google Play", trustTitle: "Von Eltern weltweit geschätzt", trustSubtitle: "Ruhig, verlässlich und angenehm einfach.", parentAvatarAltPrefix: "Eltern-Avatar" },
  story: { eyebrow: "Benachrichtigungen", title: "Benachrichtigungen, die dich informieren, ohne die App in Lärm zu verwandeln.", description: "Live-Updates, Erinnerungen und wichtige Hinweise helfen dir, den Tag überall im Blick zu behalten, ohne die App ständig öffnen zu müssen.", note: "So gestaltet, dass es klar, pünktlich und wirklich hilfreich wirkt, wenn du einen schnellen Überblick brauchst." },
  features: { eyebrow: "Funktionen", title: "Alles Wichtige, so angeordnet, wie es sein sollte.", items: [
    { eyebrow: "Betreuer-Sync", title: "Alle, die sich um dein Baby kümmern, bleiben wunderbar synchron.", description: "Eltern, Großeltern und andere Betreuungspersonen sehen dieselbe Zeitleiste, dieselben Notizen und denselben Rhythmus, ohne Informationen in Chats nachverfolgen zu müssen.", accent: "Gemeinsame Betreuung ohne Reibung." },
    { eyebrow: "Zeitleiste", title: "Dein ganzer Tag, ruhig in einer Zeitleiste geordnet.", description: "Du siehst, was passiert ist, wann es passiert ist und was als Nächstes wahrscheinlich kommt. So bekommst du schnell Klarheit, wenn der Tag verschwimmt.", accent: "Klarheit auf einen Blick." },
    { eyebrow: "Tagesroutine", title: "Wachfenster und Nickerchen werden zu einer Routine, der man wirklich folgen kann.", description: "Die Tagesplan-Ansicht ordnet Nickerchen, Wachfenster und Schlafblöcke in einer sanften Struktur, damit sich der Rest des Tages leichter planen lässt.", accent: "Ein ruhigerer Rhythmus für den ganzen Tag." },
    { eyebrow: "KI-Insights", title: "Muster werden zu Orientierung statt zu noch mehr Daten.", description: "KI-Zusammenfassungen verwandeln aktuelle Aktivitäten in hilfreiche Empfehlungen und ein klareres Bild vom Rhythmus deines Babys, ohne laut oder klinisch zu wirken.", accent: "Sicherheit ohne Überforderung." },
    { eyebrow: "Widgets", title: "Die schnellsten Aktionen landen direkt auf deinem Homescreen.", description: "Widgets bringen aktuelle Aktivitäten, wichtige Schnellzugriffe und Statusinfos näher, damit du das Wesentliche erfassen kannst, ohne jedes Mal die ganze App zu öffnen.", accent: "Schneller Zugriff ohne Extra-Schritte." },
  ] },
  moreScreens: { eyebrow: "Mehr Ansichten", title: "Mehr Produktmomente, gestaltet für Klarheit und Sicherheit.", description: "Ein genauerer Blick auf Gesundheits-, Wachstums- und Windel-Tools, die Eltern im Laufe des Tages brauchen.", items: [
    { eyebrow: "Wachstum", title: "Wachstumsmeilensteine bleiben in einem leicht verständlichen Format sichtbar.", description: "Gewicht, Größe und Kopfumfang werden mit altersbasierten Perzentilen dargestellt, damit Fortschritte klar, visuell und sofort nützlich sind." },
    { eyebrow: "Gesundheit", title: "Wichtige Gesundheitseinträge werden sauber erfasst und bleiben griffbereit.", description: "Die Temperaturerfassung gibt Eltern einen klaren Ort für Gesundheitsnotizen und Messwerte und hilft, wichtige Informationen sauber zu organisieren." },
    { eyebrow: "Windeln", title: "Windelwechsel werden in einem sauberen, beruhigenden Ablauf erfasst.", description: "Schnelle Einträge helfen dabei, Muster zu erkennen und einen verlässlichen Tagesverlauf zu behalten, ohne kleine Aufgaben in Verwaltungsarbeit zu verwandeln." },
  ] },
  reviews: { eyebrow: "Vertrauen", title: "So gebaut, dass es vom ersten Moment an Sicherheit gibt.", description: "Eltern brauchen nicht noch mehr Druck. Sie brauchen etwas Verlässliches, Hochwertiges und Ruhiges, dem sie jeden Tag vertrauen können.", appStoreLabel: "App Store", appStoreNote: "Beliebt wegen der Einfachheit", googlePlayLabel: "Google Play", googlePlayNote: "Von täglichen Nutzern geschätzt", items: [
    { quote: "Sie fühlt sich so ruhig an wie die besten Produkte für Eltern. Ich öffne sie und weiß sofort, was heute passiert ist.", name: "Emma R.", role: "Erstlingsmama" },
    { quote: "Allein die Schlafprognosen haben die Abende viel entspannter gemacht. Die App wirkt durchdacht statt laut.", name: "Daniel & Sofija", role: "Eltern eines 6 Monate alten Babys" },
    { quote: "Wir teilen das Tracking mit Oma und Nanny, und alle bleiben synchron, ohne ein Dutzend Nachrichten.", name: "Milda K.", role: "Berufstätiges Elternteil" },
  ] },
  finalCta: { eyebrow: "Letzter CTA", title: "Bereit für ruhigere Tage?", description: "Starte mit einer klaren Routine für Schlaf, Füttern, Windeln und Insights. Alles Wichtige, ohne den Lärm." },
};

const it: PremiumLandingMessages = {
  ...en,
  nav: { story: "Storia", features: "Funzioni", reviews: "Recensioni", download: "Scarica" },
  downloadMenu: { ariaLabel: "Scarica l'app", iphone: "Scarica per iPhone", googlePlay: "Scaricala da Google Play" },
  hero: { ...en.hero, badge: "Monitoraggio calmo per genitori moderni", title: "Dormi meglio. Traccia meno. Goditi di più il tuo bambino.", description: "Monitora sonno, alimentazione, pannolini, routine e insight IA in un'unica app calma e bellissima.", appStore: "App Store", googlePlay: "Google Play", trustTitle: "Scelta da genitori in tutto il mondo", trustSubtitle: "Calma, affidabile e splendidamente semplice.", parentAvatarAltPrefix: "Avatar genitore" },
  story: { eyebrow: "Notifiche", title: "Notifiche che ti tengono informato senza trasformare l'app in rumore.", description: "Aggiornamenti live, promemoria e avvisi importanti ti aiutano a seguire la giornata ovunque ti trovi, senza aprire l'app di continuo.", note: "Pensata per essere chiara, puntuale e davvero utile quando ti serve una panoramica veloce." },
  features: { eyebrow: "Funzioni", title: "Ogni dettaglio essenziale, organizzato come dovrebbe essere.", items: [
    { eyebrow: "Sincronizzazione caregiver", title: "Chiunque si occupi del tuo bambino resta perfettamente sincronizzato.", description: "Genitori, nonni e altri caregiver possono seguire la stessa timeline, le stesse note e lo stesso ritmo senza rincorrersi nei messaggi.", accent: "Cura condivisa senza attriti." },
    { eyebrow: "Timeline", title: "L'intera giornata, organizzata in una timeline calma e chiara.", description: "Vedi cosa è successo, quando è successo e cosa probabilmente verrà dopo. E' il modo più rapido per ritrovare chiarezza quando la giornata inizia a confondersi.", accent: "Chiarezza a colpo d'occhio." },
    { eyebrow: "Routine quotidiana", title: "Finestre di veglia e sonnellini diventano una routine davvero facile da seguire.", description: "La vista del programma giornaliero organizza sonnellini, finestre di veglia e blocchi di sonno in una struttura delicata che rende più semplice pianificare il resto della giornata.", accent: "Un ritmo più calmo per tutta la giornata." },
    { eyebrow: "Insight IA", title: "I pattern diventano indicazioni, non altri dati da gestire.", description: "I riepiloghi IA trasformano l'attività recente in consigli utili e in una comprensione più chiara del ritmo del tuo bambino, senza far sembrare il prodotto rumoroso o clinico.", accent: "Fiducia senza sovraccarico." },
    { eyebrow: "Widget", title: "Le azioni più veloci arrivano direttamente sulla schermata iniziale.", description: "I widget portano più vicino attività recenti, scorciatoie chiave e panoramica dello stato, così puoi registrare l'essenziale senza aprire ogni volta l'intero flusso dell'app.", accent: "Accesso rapido senza tocchi extra." },
  ] },
  moreScreens: { eyebrow: "Altre schermate", title: "Altri momenti del prodotto, pensati per chiarezza e tranquillità.", description: "Uno sguardo più da vicino agli strumenti per salute, crescita e pannolini che i genitori usano durante la giornata.", items: [
    { eyebrow: "Crescita", title: "Le tappe di crescita restano visibili in un formato facile da capire.", description: "Peso, altezza e circonferenza cranica vengono mostrati con percentili basati sull'età, così i progressi risultano chiari, visivi e subito utili." },
    { eyebrow: "Salute", title: "Le registrazioni importanti sulla salute restano ordinate e sempre a portata di mano.", description: "Il monitoraggio della temperatura offre ai genitori un punto chiaro per note e misurazioni di salute, rendendo più semplice tenere tutto organizzato." },
    { eyebrow: "Pannolini", title: "I cambi pannolino vengono registrati in un flusso pulito e rassicurante.", description: "Aggiornamenti rapidi aiutano a individuare pattern e a mantenere uno storico affidabile della giornata senza trasformare i piccoli compiti in amministrazione." },
  ] },
  reviews: { eyebrow: "Fiducia", title: "Creata per trasmettere sicurezza fin dal primo minuto.", description: "I genitori non hanno bisogno di altra pressione. Hanno bisogno di qualcosa di affidabile, curato e abbastanza calmo da meritare fiducia ogni giorno.", appStoreLabel: "App Store", appStoreNote: "Amata per la semplicità", googlePlayLabel: "Google Play", googlePlayNote: "Scelta da utenti quotidiani", items: [
    { quote: "Trasmette la stessa calma dei migliori prodotti per genitori. La apro e capisco subito cosa è successo oggi.", name: "Emma R.", role: "Neo mamma" },
    { quote: "Le previsioni del sonno da sole hanno reso le serate meno stressanti. L'app sembra pensata con cura, non rumorosa.", name: "Daniel & Sofija", role: "Genitori di un bimbo di 6 mesi" },
    { quote: "Condividiamo il monitoraggio con la nonna e la tata, e tutti restano sincronizzati senza una dozzina di messaggi.", name: "Milda K.", role: "Genitore che lavora" },
  ] },
  finalCta: { eyebrow: "CTA finale", title: "Pronto per giornate più serene?", description: "Inizia con una routine chiara per sonno, pasti, pannolini e insight. Tutto ciò che conta, senza rumore." },
};

const pt: PremiumLandingMessages = {
  ...en,
  nav: { story: "História", features: "Funcionalidades", reviews: "Avaliações", download: "Baixar" },
  downloadMenu: { ariaLabel: "Baixar aplicativo", iphone: "Baixar para iPhone", googlePlay: "Baixar no Google Play" },
  hero: { ...en.hero, badge: "Acompanhamento tranquilo para pais modernos", title: "Durma melhor. Registre menos. Aproveite mais o seu bebê.", description: "Acompanhe sono, alimentação, fraldas, rotinas e insights de IA em um app calmo e bonito.", appStore: "App Store", googlePlay: "Google Play", trustTitle: "Confiado por pais no mundo todo", trustSubtitle: "Calmo, confiável e lindamente simples.", parentAvatarAltPrefix: "Avatar de pai ou mãe" },
  story: { eyebrow: "Notificações", title: "Notificações que mantêm você informado sem transformar o app em ruído.", description: "Atualizações em tempo real, lembretes e alertas importantes ajudam você a acompanhar o dia de qualquer lugar, sem abrir o app o tempo todo.", note: "Feito para parecer claro, pontual e realmente útil quando você precisa de uma visão rápida." },
  features: { eyebrow: "Funcionalidades", title: "Cada detalhe essencial, organizado como realmente deveria estar.", items: [
    { eyebrow: "Sincronização", title: "Todos que cuidam do seu bebê permanecem lindamente sincronizados.", description: "Pais, avós e outros cuidadores podem acompanhar a mesma linha do tempo, as mesmas notas e o mesmo ritmo sem correr atrás de atualizações em mensagens.", accent: "Cuidado compartilhado sem atrito." },
    { eyebrow: "Linha do tempo", title: "O seu dia inteiro, organizado em uma linha do tempo calma.", description: "Veja o que aconteceu, quando aconteceu e o que provavelmente vem a seguir. E' a forma mais rápida de recuperar clareza quando o dia começa a se embaralhar.", accent: "Clareza em um só olhar." },
    { eyebrow: "Rotina diária", title: "Janelas de vigília e cochilos viram uma rotina que realmente dá para seguir.", description: "A visão da agenda do dia organiza cochilos, janelas de vigília e blocos de sono em uma estrutura suave, deixando o resto do dia mais fácil de planejar.", accent: "Um ritmo mais calmo para o dia inteiro." },
    { eyebrow: "Insights de IA", title: "Os padrões viram orientação, e não mais dados para administrar.", description: "Os resumos com IA transformam a atividade recente em recomendações úteis e em uma visão mais clara do ritmo do seu bebê, sem deixar o produto barulhento ou clínico.", accent: "Confiança sem sobrecarga." },
    { eyebrow: "Widgets", title: "As ações mais rápidas vão direto para a tela inicial.", description: "Os widgets aproximam atividade recente, atalhos importantes e status geral para que você registre o essencial sem abrir todo o fluxo do app a cada vez.", accent: "Acesso rápido sem toques extras." },
  ] },
  moreScreens: { eyebrow: "Mais telas", title: "Mais momentos do produto, cada um pensado para transmitir clareza e tranquilidade.", description: "Uma visão mais próxima das ferramentas de saúde, crescimento e fraldas que os pais usam ao longo do dia.", items: [
    { eyebrow: "Crescimento", title: "Os marcos de crescimento ficam visíveis em um formato fácil de entender.", description: "Peso, altura e circunferência da cabeça aparecem com percentis por idade para que o progresso fique claro, visual e imediatamente útil." },
    { eyebrow: "Saúde", title: "Registros importantes de saúde ficam organizados e sempre por perto.", description: "O acompanhamento de temperatura oferece um lugar claro para notas e medições de saúde, facilitando manter informações importantes organizadas." },
    { eyebrow: "Fraldas", title: "As trocas de fralda ficam registradas em um fluxo limpo e tranquilizador.", description: "Atualizações rápidas ajudam a perceber padrões e a manter um histórico confiável do dia sem transformar pequenas tarefas em administração." },
  ] },
  reviews: { eyebrow: "Confiança", title: "Feito para transmitir segurança desde o primeiro minuto.", description: "Pais não precisam de mais pressão. Precisam de algo confiável, bem acabado e calmo o bastante para usar todos os dias com confiança.", appStoreLabel: "App Store", appStoreNote: "Amado pela simplicidade", googlePlayLabel: "Google Play", googlePlayNote: "Confiado por usuários diários", items: [
    { quote: "Ele transmite a mesma calma dos melhores produtos para pais. Eu abro e já sei imediatamente o que aconteceu hoje.", name: "Emma R.", role: "Mãe de primeira viagem" },
    { quote: "Só as previsões de sono já deixaram as noites menos estressantes. O app parece pensado com cuidado, não barulhento.", name: "Daniel & Sofija", role: "Pais de um bebê de 6 meses" },
    { quote: "Compartilhamos o acompanhamento com a avó e a babá, e todo mundo fica sincronizado sem uma dúzia de mensagens.", name: "Milda K.", role: "Pai ou mãe que trabalha" },
  ] },
  finalCta: { eyebrow: "CTA final", title: "Pronto para dias mais tranquilos?", description: "Comece com uma rotina clara para sono, mamadas, fraldas e insights. Tudo o que importa, sem ruído." },
};

const pl: PremiumLandingMessages = {
  ...en,
  nav: { story: "Historia", features: "Funkcje", reviews: "Opinie", download: "Pobierz" },
  downloadMenu: { ariaLabel: "Pobierz aplikację", iphone: "Pobierz na iPhone'a", googlePlay: "Pobierz z Google Play" },
  hero: { ...en.hero, badge: "Spokojne śledzenie dla nowoczesnych rodziców", title: "Śpij lepiej. Notuj mniej. Ciesz się dzieckiem bardziej.", description: "Śledź sen, karmienie, pieluchy, rutyny i insighty AI w jednej spokojnej i pięknej aplikacji.", appStore: "App Store", googlePlay: "Google Play", trustTitle: "Zaufana przez rodziców na całym świecie", trustSubtitle: "Spokojna, niezawodna i pięknie prosta.", parentAvatarAltPrefix: "Avatar rodzica" },
  story: { eyebrow: "Powiadomienia", title: "Powiadomienia, które informują, nie zamieniając aplikacji w hałas.", description: "Aktualizacje na żywo, przypomnienia i ważne alerty pomagają śledzić dzień z dowolnego miejsca bez ciągłego otwierania aplikacji.", note: "Zaprojektowana tak, aby była czytelna, na czas i naprawdę pomocna, gdy potrzebujesz szybkiego podglądu." },
  features: { eyebrow: "Funkcje", title: "Każdy ważny szczegół, ułożony dokładnie tak, jak powinien.", items: [
    { eyebrow: "Synchronizacja opiekunów", title: "Wszyscy opiekujący się dzieckiem pozostają idealnie zsynchronizowani.", description: "Rodzice, dziadkowie i inni opiekunowie mogą śledzić tę samą oś czasu, te same notatki i ten sam rytm bez gonienia za aktualizacjami w wiadomościach.", accent: "Wspólna opieka bez tarcia." },
    { eyebrow: "Oś czasu", title: "Cały dzień ułożony w jedną spokojną oś czasu.", description: "Widzisz, co się wydarzyło, kiedy się wydarzyło i co prawdopodobnie wydarzy się dalej. To najszybszy sposób, by odzyskać jasność, gdy dzień zaczyna się zlewać.", accent: "Jasność w jednym spojrzeniu." },
    { eyebrow: "Codzienna rutyna", title: "Okna czuwania i drzemki zamieniają się w rutynę, której naprawdę da się trzymać.", description: "Widok planu dnia układa drzemki, okna czuwania i bloki snu w łagodną strukturę, dzięki czemu łatwiej zaplanować resztę dnia.", accent: "Spokojniejszy rytm na cały dzień." },
    { eyebrow: "Insighty AI", title: "Wzorce stają się wskazówkami, a nie kolejną porcją danych.", description: "Podsumowania AI zamieniają ostatnią aktywność w przydatne rekomendacje i jaśniejszy obraz rytmu dziecka, bez wrażenia hałasu czy przesadnej techniczności.", accent: "Pewność bez przeciążenia." },
    { eyebrow: "Widgety", title: "Najszybsze działania trafiają prosto na ekran główny.", description: "Widgety przybliżają ostatnią aktywność, ważne skróty i podgląd statusu, dzięki czemu możesz zapisać najważniejsze rzeczy bez otwierania całej aplikacji za każdym razem.", accent: "Szybki dostęp bez dodatkowych kliknięć." },
  ] },
  moreScreens: { eyebrow: "Więcej ekranów", title: "Więcej momentów produktu, zaprojektowanych z myślą o spokoju i jasności.", description: "Bliższe spojrzenie na narzędzia zdrowia, wzrostu i pieluch, po które rodzice sięgają w ciągu dnia.", items: [
    { eyebrow: "Wzrost", title: "Kamienie milowe wzrostu pozostają widoczne w formie łatwej do zrozumienia.", description: "Waga, wzrost i obwód głowy są pokazane z percentylami odpowiednimi do wieku, aby postęp był czytelny, wizualny i od razu użyteczny." },
    { eyebrow: "Zdrowie", title: "Ważne wpisy zdrowotne są zapisywane przejrzyście i zawsze pod ręką.", description: "Śledzenie temperatury daje rodzicom jedno jasne miejsce na notatki i pomiary zdrowotne, dzięki czemu łatwiej utrzymać ważne informacje w porządku." },
    { eyebrow: "Pieluchy", title: "Zmiany pieluch są zapisywane w czystym, uspokajającym przepływie.", description: "Szybkie aktualizacje pomagają zauważać wzorce i prowadzić wiarygodny zapis dnia bez zamieniania drobnych zadań w administrację." },
  ] },
  reviews: { eyebrow: "Zaufanie", title: "Stworzona tak, by dawać poczucie bezpieczeństwa od pierwszej minuty.", description: "Rodzice nie potrzebują więcej presji. Potrzebują czegoś niezawodnego, dopracowanego i na tyle spokojnego, by ufać temu każdego dnia.", appStoreLabel: "App Store", appStoreNote: "Uwielbiana za prostotę", googlePlayLabel: "Google Play", googlePlayNote: "Zaufana przez codziennych użytkowników", items: [
    { quote: "Daje spokój podobny do najlepszych produktów dla rodziców. Otwieram ją i od razu wiem, co wydarzyło się dziś.", name: "Emma R.", role: "Mama po raz pierwszy" },
    { quote: "Same prognozy snu sprawiły, że wieczory stały się mniej stresujące. Aplikacja wydaje się przemyślana, a nie hałaśliwa.", name: "Daniel & Sofija", role: "Rodzice 6-miesięcznego dziecka" },
    { quote: "Udostępniamy śledzenie babci i niani, a wszyscy pozostają zsynchronizowani bez tuzina wiadomości.", name: "Milda K.", role: "Pracujący rodzic" },
  ] },
  finalCta: { eyebrow: "Końcowe CTA", title: "Gotowi na spokojniejsze dni?", description: "Zacznij od przejrzystej rutyny snu, karmienia, pieluch i insightów. Wszystko, co ważne, bez hałasu." },
};

const ru: PremiumLandingMessages = {
  ...en,
  nav: { story: "История", features: "Функции", reviews: "Отзывы", download: "Скачать" },
  downloadMenu: { ariaLabel: "Скачать приложение", iphone: "Скачать для iPhone", googlePlay: "Скачать в Google Play" },
  hero: { ...en.hero, badge: "Спокойный трекинг для современных родителей", title: "Спите лучше. Отмечайте меньше. Больше наслаждайтесь ребенком.", description: "Отслеживайте сон, кормления, подгузники, рутины и AI-инсайты в одном спокойном и красивом приложении.", appStore: "App Store", googlePlay: "Google Play", trustTitle: "Родители по всему миру доверяют нам", trustSubtitle: "Спокойно, надежно и красиво просто.", parentAvatarAltPrefix: "Аватар родителя" },
  story: { eyebrow: "Уведомления", title: "Уведомления, которые держат в курсе, не превращая приложение в шум.", description: "Живые обновления, напоминания и важные уведомления помогают следить за днем из любого места, не открывая приложение постоянно.", note: "Сделано так, чтобы все ощущалось понятным, своевременным и действительно полезным, когда нужен быстрый обзор." },
  features: { eyebrow: "Функции", title: "Все важное, организованное именно так, как и должно быть.", items: [
    { eyebrow: "Синхронизация", title: "Все, кто заботится о вашем ребенке, остаются прекрасно синхронизированы.", description: "Родители, бабушки, дедушки и другие помощники могут видеть одну и ту же ленту, те же заметки и тот же ритм, не догоняя друг друга в сообщениях.", accent: "Совместная забота без лишних трений." },
    { eyebrow: "Лента дня", title: "Весь день собран в одну спокойную временную ленту.", description: "Вы видите, что произошло, когда это произошло и что, скорее всего, будет дальше. Это самый быстрый способ вернуть ясность, когда день начинает сливаться.", accent: "Ясность с одного взгляда." },
    { eyebrow: "Ежедневная рутина", title: "Окна бодрствования и сны превращаются в рутину, которой действительно легко следовать.", description: "Просмотр дневного расписания объединяет сны, окна бодрствования и блоки сна в мягкую структуру, благодаря которой остальную часть дня легче планировать.", accent: "Более спокойный ритм на весь день." },
    { eyebrow: "AI Insights", title: "Паттерны превращаются в подсказки, а не в еще больше данных.", description: "AI-сводки превращают недавнюю активность в полезные рекомендации и более ясное понимание ритма вашего малыша, не делая продукт шумным или слишком клиническим.", accent: "Уверенность без перегруза." },
    { eyebrow: "Виджеты", title: "Самые быстрые действия переходят прямо на главный экран.", description: "Виджеты приближают недавнюю активность, важные быстрые действия и общий статус, чтобы вы могли отмечать главное без полного открытия приложения каждый раз.", accent: "Быстрый доступ без лишних нажатий." },
  ] },
  moreScreens: { eyebrow: "Еще экраны", title: "Еще больше моментов продукта, созданных для ясности и спокойствия.", description: "Более близкий взгляд на инструменты здоровья, роста и подгузников, к которым родители обращаются в течение дня.", items: [
    { eyebrow: "Рост", title: "Этапы роста остаются видимыми в формате, который родители быстро понимают.", description: "Вес, рост и окружность головы показываются с возрастными перцентилями, чтобы прогресс был наглядным, понятным и сразу полезным." },
    { eyebrow: "Здоровье", title: "Важные записи о здоровье сохраняются аккуратно и всегда под рукой.", description: "Отслеживание температуры дает родителям одно понятное место для медицинских заметок и измерений, помогая держать важную информацию в порядке." },
    { eyebrow: "Подгузники", title: "Смена подгузников фиксируется в чистом и спокойном потоке.", description: "Быстрые обновления помогают замечать закономерности и вести надежную историю дня, не превращая мелкие задачи в администрирование." },
  ] },
  reviews: { eyebrow: "Доверие", title: "Создано так, чтобы успокаивать с первой минуты.", description: "Родителям не нужно еще больше давления. Им нужно что-то надежное, аккуратное и достаточно спокойное, чтобы доверять этому каждый день.", appStoreLabel: "App Store", appStoreNote: "Любят за простоту", googlePlayLabel: "Google Play", googlePlayNote: "Надежно в ежедневном использовании", items: [
    { quote: "Она дает то же спокойствие, что и лучшие продукты для родителей. Я открываю ее и сразу понимаю, что произошло сегодня.", name: "Emma R.", role: "Мама в первый раз" },
    { quote: "Одни только прогнозы сна сделали вечера менее стрессовыми. Приложение ощущается продуманным, а не шумным.", name: "Daniel & Sofija", role: "Родители 6-месячного малыша" },
    { quote: "Мы делимся трекингом с бабушкой и няней, и все остаются синхронизированы без десятка сообщений.", name: "Milda K.", role: "Работающий родитель" },
  ] },
  finalCta: { eyebrow: "Финальный CTA", title: "Готовы к более спокойным дням?", description: "Начните с понятной рутины для сна, кормлений, подгузников и инсайтов. Все важное, без лишнего шума." },
};

export const PREMIUM_LANDING_BY_LOCALE: Record<Locale, PremiumLandingMessages> = {
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

export function getPremiumLandingMessages(locale: Locale): PremiumLandingMessages {
  return PREMIUM_LANDING_BY_LOCALE[locale] ?? PREMIUM_LANDING_BY_LOCALE[DEFAULT_LOCALE];
}