export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoPageContent = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
  faqs: SeoFaq[];
  relatedSlugs: string[];
};

export const SITEMAP_SEO_SLUGS = [
  "baby-tracker-app",
  "newborn-tracker",
  "baby-sleep-tracker",
  "baby-feeding-tracker",
  "diaper-tracker",
  "wake-window-tracker",
  "baby-growth-tracker",
  "baby-routine-app",
  "breastfeeding-tracker",
  "pumping-tracker",
  "bottle-feeding-tracker",
] as const;

export const SEO_PAGES: SeoPageContent[] = [
  {
    slug: "baby-tracker-app",
    title: "Baby Tracker App for Parents | Feeds, Sleep & Diapers – Soriva",
    metaDescription:
      "Download the Soriva baby tracker app for feeding, sleep, diapers, growth, and daily routines. Calm design, caregiver sync, and doctor-ready reports on iPhone and Android.",
    h1: "Baby tracker app for feeds, sleep, diapers, and daily care",
    intro:
      "Looking for a baby tracker app that stays simple on busy days? Soriva brings feeding, sleep, diapers, growth, and routines into one calm timeline—so you are not juggling paper notes, memory, and group chats. Built for real parents, available free on the App Store and Google Play.",
    sections: [
      {
        heading: "What a good baby tracker app should do",
        paragraphs: [
          "A baby tracker app should answer everyday questions fast: when was the last feed, how long did they nap, how many wet diapers today, and what happened while your partner had the baby overnight. Soriva puts those answers on one timeline with quick logging and a premium, uncluttered interface.",
          "You should not need five apps for five tasks. Soriva works as a newborn tracker, feeding log, sleep tracker, diaper counter, and growth history in one place—scaling from the intense first weeks through established routines.",
        ],
      },
      {
        heading: "Core features parents use every day",
        paragraphs: [
          "Log breastfeeding, bottles, and pumping. Track naps and night sleep. Record wet and dirty diapers. Save weight, height, and head circumference. View a daily schedule with wake windows. Sync with partners, grandparents, or nannies. Export summaries when your pediatrician asks about recent patterns.",
          "Widgets and shortcuts help you log without opening the full app flow every time. AI insights offer supportive summaries only—Soriva does not provide medical advice and does not replace your pediatrician.",
        ],
      },
      {
        heading: "Calm design for sleep-deprived days",
        paragraphs: [
          "Parenting apps can feel loud or clinical. Soriva is designed to feel calm: readable timelines, gentle colors, and no fake urgency. The goal is clarity, not another source of pressure.",
          "Built by a parent who needed a better way to track newborn routines, Soriva prioritizes speed and trust over feature bloat.",
        ],
      },
      {
        heading: "Explore focused tracker guides",
        paragraphs: [
          "Whether you need a dedicated sleep tracker, breastfeeding log, or wake window planner, Soriva covers it inside one app. Browse our guides for newborn tracking, diaper logs, pumping sessions, bottle feeds, growth charts, and daily routine planning—each page explains how Soriva helps with that specific job.",
        ],
      },
      {
        heading: "Download free on iPhone and Android",
        paragraphs: [
          "Start tracking free today. Optional subscriptions may unlock additional features; billing is handled by Apple or Google. No paper notes. No guessing. One simple baby log for your whole care team.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Soriva free to download?",
        answer: "Yes. Soriva is free to download on the App Store and Google Play. Some features may require a subscription.",
      },
      {
        question: "What can I track in the app?",
        answer: "Feeds, sleep, diapers, growth, temperature, pumping, and daily routines—with caregiver sync and exportable summaries.",
      },
      {
        question: "Does Soriva give medical advice?",
        answer: "No. Soriva is an informational baby care tracker. Always consult your pediatrician for medical decisions.",
      },
      {
        question: "Can multiple caregivers use one baby profile?",
        answer: "Yes. Partners and other caregivers can sync to the same timeline.",
      },
      {
        question: "Is Soriva available in the United States?",
        answer: "Yes. Soriva is available on iPhone and Android for English-speaking parents, including in the USA.",
      },
    ],
    relatedSlugs: [
      "newborn-tracker",
      "baby-sleep-tracker",
      "baby-feeding-tracker",
      "baby-routine-app",
    ],
  },
  {
    slug: "baby-feeding-tracker",
    title: "Baby Feeding Tracker App | Breastfeeding & Bottle Log – Soriva",
    metaDescription:
      "Log breastfeeding, bottle feeds, and pumping in one calm baby feeding tracker. See totals, last feed times, and export summaries for pediatrician visits.",
    h1: "Baby feeding tracker for breastfeeding, bottles, and pumping",
    intro:
      "Feeding a newborn or infant means constant questions: when was the last feed, which side, how many ounces, and is today’s intake on track? Soriva is a baby feeding tracker built for real daily use—quick logs, clear totals, and a calm interface that does not add stress to an already busy routine.",
    sections: [
      {
        heading: "Log every feed without slowing down your day",
        paragraphs: [
          "Whether you breastfeed, bottle-feed, or combine both, Soriva lets you record feeds in seconds. Log nursing sessions with side and duration, bottle feeds with amount and type, and pumping sessions when you need to track output. The baby log keeps a running timeline so you are not reconstructing the day from memory or scattered notes.",
          "Parents often need the last feed time at 2 a.m., during a pediatrician call, or when handing off to a partner. Soriva surfaces recent feeding activity on your timeline and in widgets, so the answer is always one tap away.",
        ],
      },
      {
        heading: "Breastfeeding tracker that respects how nursing actually works",
        paragraphs: [
          "Breastfeeding is not always measured in ounces. Soriva supports session-based logging so you can track left and right sides, duration, and notes without forcing bottle-style metrics where they do not fit. Over time, patterns become easier to see—which helps when you are adjusting schedules or answering questions from a lactation consultant or pediatrician.",
          "If you pump, you can log sessions alongside nursing and bottle feeds. Having pumping and breastfeeding in the same baby tracker app means one source of truth for your baby’s intake, not three separate apps or a paper notebook.",
        ],
      },
      {
        heading: "Totals and patterns for pediatrician questions",
        paragraphs: [
          "Well visits often include questions about feeding frequency, approximate volumes, and whether intake seems consistent. Instead of guessing, you can review daily and weekly feeding summaries inside Soriva and export a doctor-ready report for the date range you choose.",
          "Soriva is a baby care tracker for parents—not a medical device. It helps you bring organized information to appointments. Your pediatrician remains the source of clinical guidance.",
        ],
      },
      {
        heading: "Part of a complete newborn tracker",
        paragraphs: [
          "Feeding rarely exists in isolation. Soriva connects feeding logs with sleep, diapers, growth, and daily routines in one calm app. Caregivers can sync to the same baby profile, so everyone sees the same last feed and the same day timeline.",
          "If you are comparing baby tracker apps for parents, look for speed, clarity, and the ability to share context with your care team. Soriva is designed around those everyday moments—not feature checklists.",
        ],
      },
      {
        heading: "Why parents switch to a dedicated feeding tracker",
        paragraphs: [
          "Spreadsheets and generic notes break down quickly when feeding happens ten or more times a day. A purpose-built baby feeding tracker reduces friction: fewer fields, faster saves, and a timeline that mirrors how you actually think about the day.",
          "Soriva also fits families who alternate breastfeeding and formula, or who pump during return-to-work transitions. You do not need separate tools for each mode—the baby log stays unified.",
          "Download free on iPhone and Android, start with the essentials, and add depth only when you need it. Soriva stays calm whether you log every feed or only the ones that matter for your next pediatrician question.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I track both breastfeeding and bottle feeding in Soriva?",
        answer:
          "Yes. Soriva supports nursing sessions, bottle feeds, and pumping in one timeline. You can log whichever methods you use without switching apps.",
      },
      {
        question: "Does the app show feeding totals for the day?",
        answer:
          "Yes. Your daily timeline and summaries help you see recent feeds and patterns over time, so you can answer common questions about frequency and intake.",
      },
      {
        question: "Can I share feeding logs with my partner or nanny?",
        answer:
          "Yes. Caregiver sync lets invited family members or caregivers view and log on the same baby profile, which reduces confusion about the last feed.",
      },
      {
        question: "Can I export feeding information for a pediatrician visit?",
        answer:
          "Yes. Soriva lets you export a clear summary for a selected range of days or weeks, including feeding activity alongside sleep and diapers when helpful.",
      },
      {
        question: "Is Soriva a medical or lactation advice app?",
        answer:
          "No. Soriva is an informational baby log app. It does not provide medical advice and does not replace your pediatrician or lactation professional.",
      },
    ],
    relatedSlugs: [
      "baby-tracker-app",
      "breastfeeding-tracker",
      "bottle-feeding-tracker",
      "pumping-tracker",
    ],
  },
  {
    slug: "baby-sleep-tracker",
    title: "Baby Sleep Tracker App | Naps & Night Sleep Log – Soriva",
    metaDescription:
      "Track naps, night sleep, and wake windows in a calm baby sleep tracker. See sleep patterns, build routines, and share logs with caregivers.",
    h1: "Baby sleep tracker for naps, nights, and daily routines",
    intro:
      "Sleep changes constantly in the first year. A practical baby sleep tracker should make logging fast, show patterns clearly, and help you plan the next nap—not add another layer of anxiety. Soriva treats sleep as part of your full baby routine tracker, alongside feeds and diapers.",
    sections: [
      {
        heading: "Log naps and night sleep in seconds",
        paragraphs: [
          "Start and stop sleep sessions with a tap, or add entries manually when you catch up later. Soriva records nap length, night stretches, and wake times on a single timeline so you can see how the day is actually unfolding.",
          "Many parents use a baby log app primarily for sleep during the newborn phase. Soriva keeps that experience lightweight: open, log, close—without navigating cluttered menus.",
        ],
      },
      {
        heading: "Wake windows and schedule clarity",
        paragraphs: [
          "When you can see recent sleep blocks and upcoming wake windows in context, the day feels less like guesswork. Soriva’s schedule view helps you visualize naps and awake periods so you can adjust gently as your baby grows.",
          "Sleep recommendations in the app are supportive and informational only. Soriva does not provide medical advice and does not replace guidance from your pediatrician.",
        ],
      },
      {
        heading: "Understand patterns over days and weeks",
        paragraphs: [
          "One short nap does not define your week. A baby sleep tracker is most useful when it reveals trends—shorter mornings, longer afternoons, or shifting night sleep. Soriva’s timeline and insights help you notice patterns without drowning in charts.",
          "AI insights in Soriva are designed to be calm and practical. They summarize recent activity to help you reflect on routines; they are not a diagnosis or a substitute for professional sleep consultation.",
        ],
      },
      {
        heading: "Sleep logs your pediatrician can actually use",
        paragraphs: [
          "Doctors often ask how night sleep has been, how many naps you are seeing, or whether anything changed recently. Export a pediatrician report from Soriva for the days or weeks you choose, instead of relying on memory during a short appointment.",
          "Combined with feeding and diaper data, sleep context gives a fuller picture of your baby’s daily rhythm—useful for routine check-ins and for caregivers who need to stay aligned.",
        ],
      },
      {
        heading: "A sleep tracker that fits real family life",
        paragraphs: [
          "Some days you will log every nap; other days you will catch up at bedtime. Soriva accepts both without punishing you with cluttered reminders or guilt-driven notifications.",
          "When your partner takes the night shift or a grandparent covers an afternoon, caregiver sync keeps sleep entries on the shared timeline—so the next person on duty knows what already happened.",
          "If you are building a sustainable baby routine tracker, choose a sleep log that feels supportive on hard nights and invisible on easy ones. That balance is what Soriva aims for.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I track both naps and nighttime sleep?",
        answer:
          "Yes. Soriva logs all sleep sessions on one timeline, whether they happen during the day or at night.",
      },
      {
        question: "Does Soriva predict wake windows?",
        answer:
          "Soriva helps you visualize schedules and recent sleep blocks so you can plan routines. It offers supportive insights, not medical sleep advice.",
      },
      {
        question: "Can caregivers see sleep logs too?",
        answer:
          "Yes. With caregiver sync, partners, grandparents, and nannies can view and log sleep on the same baby profile.",
      },
      {
        question: "Can I export sleep data for a doctor visit?",
        answer:
          "Yes. Doctor-ready reports can include sleep alongside feeds and diapers for a selected date range.",
      },
      {
        question: "Will tracking sleep make me more anxious?",
        answer:
          "Soriva is designed with a calm, premium interface—focused on clarity, not alarmist notifications. You control what you log and what you review.",
      },
    ],
    relatedSlugs: [
      "baby-tracker-app",
      "wake-window-tracker",
      "newborn-tracker",
      "baby-routine-app",
    ],
  },
  {
    slug: "diaper-tracker",
    title: "Diaper Tracker App | Wet, Dirty & Newborn Diaper Log – Soriva",
    metaDescription:
      "Track wet, dirty, and dry diapers in a simple diaper tracker. Spot daily counts, log changes fast, and share summaries for pediatrician visits.",
    h1: "Diaper tracker for wet, dirty, and daily newborn counts",
    intro:
      "Diaper changes are one of the most frequent baby care tasks—and one of the first things pediatricians ask about in the early weeks. A diaper tracker should be fast enough to use with one hand and clear enough to answer “how many wet diapers today?” without mental math.",
    sections: [
      {
        heading: "Quick logging for busy parents",
        paragraphs: [
          "Soriva lets you log wet, dirty, or mixed diaper changes in a tap. Entries land on your baby’s daily timeline next to feeds and sleep, so you see the full picture of the day instead of isolated counters.",
          "For newborns especially, diaper counts matter during the first weeks at home. A dedicated diaper tracker inside your baby log app means you are not maintaining a separate spreadsheet or sticky note on the changing table.",
        ],
      },
      {
        heading: "Daily counts and simple patterns",
        paragraphs: [
          "When you need today’s total—or a rough picture of the last few days—Soriva summarizes diaper activity in context with the rest of your baby’s routine. That helps during phone nurse lines, lactation check-ins, and well visits when intake and output questions come up together.",
          "Soriva does not interpret medical risk from diaper data. It helps you record and report accurately; your pediatrician interprets what it means for your child.",
        ],
      },
      {
        heading: "Pediatrician-ready context",
        paragraphs: [
          "Export a doctor report for the timeframe you choose. Diaper entries appear alongside feeding and sleep in a readable summary you can share at appointments or with a caregiver who missed a handoff.",
          "Parents often realize how much they forget between visits. A dependable baby care tracker turns scattered moments into a clear history—without turning parenting into paperwork.",
        ],
      },
      {
        heading: "Works with your full baby tracker app",
        paragraphs: [
          "Diapers are one piece of newborn tracking. Soriva combines diaper logs with feeding, sleep, growth, and caregiver sync in one calm app—so everyone caring for your baby works from the same daily record.",
        ],
      },
      {
        heading: "Simple diaper logging that stays out of your way",
        paragraphs: [
          "The best diaper tracker is the one you actually use at 3 a.m. Soriva keeps the flow minimal: tap, log, done—then back to your baby.",
          "Because diaper entries live beside feeds and sleep, you can answer compound questions pediatricians often ask about intake and output without jumping between apps.",
          "Start free on App Store or Google Play. Whether you track every change or only during the early weeks, Soriva scales with your family.",
        ],
      },
    ],
    faqs: [
      {
        question: "What types of diapers can I log?",
        answer:
          "You can log wet, dirty, and mixed changes, with timestamps on your baby’s timeline.",
      },
      {
        question: "Is a diaper tracker useful after the newborn stage?",
        answer:
          "Yes. Many parents continue logging through illness, potty-training transitions, or when doctors ask about recent changes in routine.",
      },
      {
        question: "Can I see how many diapers today?",
        answer:
          "Yes. Daily summaries and your timeline make it easy to review today’s counts and recent patterns.",
      },
      {
        question: "Can I include diaper data in a pediatrician report?",
        answer:
          "Yes. Exported reports can cover diapers together with feeds, sleep, and growth for the dates you select.",
      },
      {
        question: "Does Soriva diagnose dehydration or feeding issues from diapers?",
        answer:
          "No. Soriva is an informational logging tool only. Contact your pediatrician for medical concerns.",
      },
    ],
    relatedSlugs: [
      "baby-tracker-app",
      "newborn-tracker",
      "baby-feeding-tracker",
      "baby-growth-tracker",
    ],
  },
  {
    slug: "newborn-tracker",
    title: "Newborn Tracker App | Feeds, Sleep, Diapers & Growth – Soriva",
    metaDescription:
      "One calm newborn tracker for feeds, sleep, diapers, and growth. Replace paper notes and chat messages with a simple baby log app for new parents.",
    h1: "Newborn tracker for feeds, sleep, diapers, and daily chaos",
    intro:
      "The first weeks with a newborn are beautiful and disorienting. You are learning feeds, sleep, diapers, and growth—all while sleep-deprived. Soriva is a newborn tracker that brings those essentials into one calm baby tracker app, so you spend less time reconstructing the day and more time with your baby.",
    sections: [
      {
        heading: "One app instead of paper, memory, and group chats",
        paragraphs: [
          "Many new parents start with notes on their phone, a hospital discharge sheet, and messages to a partner saying “did you log that feed?” Soriva replaces that patchwork with a single baby log: feeding, sleep, diapers, temperature, and growth in one timeline.",
          "The interface is designed to feel premium and quiet—not like a clinical dashboard. Open Soriva, log what happened, and get back to your baby.",
        ],
      },
      {
        heading: "Built for the questions you actually have",
        paragraphs: [
          "When was the last feed? How long did they sleep? How many wet diapers today? What was their last weight? A newborn tracker should answer everyday questions instantly. Soriva puts recent activity and daily summaries where you expect them.",
          "As your baby grows, the same app scales with you—from newborn intensity to established routines—without forcing you to migrate data to a new tool.",
        ],
      },
      {
        heading: "Caregiver sync from day one",
        paragraphs: [
          "Partners, grandparents, and night nurses can log to the same profile. Everyone sees the same timeline, which cuts down on duplicate entries and conflicting memories. For families with multiple caregivers, shared tracking is often the difference between calm handoffs and constant texting.",
        ],
      },
      {
        heading: "Doctor visits without the guesswork",
        paragraphs: [
          "Early pediatrician appointments move fast. Export a pediatrician report covering the days or weeks you choose—feeds, diapers, sleep, and growth in one readable summary. You stay informed; your doctor stays informed. Soriva does not provide medical advice.",
        ],
      },
      {
        heading: "From survival mode to a routine you can trust",
        paragraphs: [
          "The newborn phase is intense, but it is also temporary. A newborn tracker should help you feel more oriented week by week—not more overwhelmed.",
          "Soriva grows with you: the same baby log that handles ten feeds a day later supports solids introductions, longer naps, and growth milestones without starting over in a new app.",
          "Built by a parent for calmer daily care, Soriva is free to download on iPhone and Android. Track what matters today; let the timeline build the history you will want tomorrow.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Soriva only for newborns?",
        answer:
          "Soriva is especially helpful in the newborn phase, but many families continue using it as routines evolve through infancy.",
      },
      {
        question: "What can I track besides feeds and sleep?",
        answer:
          "You can log diapers, growth measurements, temperature, pumping, and daily routines in the same app.",
      },
      {
        question: "Is the app free to start?",
        answer:
          "You can download Soriva free on iPhone and Android. Optional subscriptions may be available inside the app; billing is handled by Apple or Google.",
      },
      {
        question: "Can two parents use the same baby profile?",
        answer:
          "Yes. Caregiver sync lets multiple people log and view the same baby’s timeline.",
      },
      {
        question: "Does Soriva replace medical guidance for newborns?",
        answer:
          "No. Soriva is a baby care tracker for logging and organization. Always follow your pediatrician’s advice for medical decisions.",
      },
    ],
    relatedSlugs: [
      "baby-tracker-app",
      "baby-feeding-tracker",
      "baby-sleep-tracker",
      "diaper-tracker",
    ],
  },
  {
    slug: "baby-growth-tracker",
    title: "Baby Growth Tracker | Weight, Height & Head Size – Soriva",
    metaDescription:
      "Track weight, height, and head circumference in a baby growth tracker. Save measurement history and bring clear growth summaries to doctor visits.",
    h1: "Baby growth tracker for weight, height, and head circumference",
    intro:
      "Growth measurements are easy to forget between appointments. A baby growth tracker should store weight, height, and head circumference in one place—with history you can actually read—not buried in a parent notebook or camera roll photo of a scale.",
    sections: [
      {
        heading: "Record measurements as they happen",
        paragraphs: [
          "After a pediatrician visit, home weigh-in, or lactation clinic check, log the numbers in Soriva while they are fresh. Each entry stays on your baby’s timeline with date context, so you can compare progress over weeks and months.",
          "Soriva presents growth data in a parent-friendly format with age-based percentiles, helping you visualize progress without turning a checkup into a spreadsheet project.",
        ],
      },
      {
        heading: "Growth history when doctors ask",
        paragraphs: [
          "Pediatricians often want to see trends—not just a single number. When you can open a clear growth history or export a report for a selected period, conversations become more productive and less reliant on “I think they were around…”.",
          "Soriva is an informational baby log app. Percentiles and charts are for context; clinical interpretation belongs with your pediatrician.",
        ],
      },
      {
        heading: "Growth alongside daily care",
        paragraphs: [
          "Growth does not exist apart from feeding and sleep. Soriva connects measurement logs with your broader baby routine tracker, so you can review what daily life looked like around a growth spurt or a stretch of picky feeding.",
          "Caregivers with sync access can view growth entries too—helpful when a grandparent takes your baby to an appointment or when both parents split visit duties.",
        ],
      },
      {
        heading: "A calm place for milestone moments",
        paragraphs: [
          "Tracking growth is not about pressure—it is about remembering. Soriva’s calm design keeps milestone data accessible without comparing your child to noisy social media narratives or unrealistic “should be” chatter.",
        ],
      },
      {
        heading: "Growth tracking that supports doctor conversations",
        paragraphs: [
          "Bring a clear growth history to weight checks instead of digging through photos of scale readings. Soriva keeps measurements dated and readable.",
          "Pair growth entries with feeding and sleep logs when you want fuller context—for example, around growth spurts or illness recovery weeks.",
          "Download Soriva free on App Store and Google Play. Log measurements when they happen; let the app handle the history.",
        ],
      },
    ],
    faqs: [
      {
        question: "What measurements can I track?",
        answer:
          "Soriva supports weight, height, and head circumference with dated history on your baby’s profile.",
      },
      {
        question: "Does the app show growth percentiles?",
        answer:
          "Yes. Measurements are shown with age-based percentiles in a readable format for parents.",
      },
      {
        question: "Can I export growth data for appointments?",
        answer:
          "Yes. Doctor-ready reports can include growth entries for the date range you choose.",
      },
      {
        question: "Is growth tracking medical advice?",
        answer:
          "No. Soriva helps you record and summarize data. Your pediatrician evaluates growth clinically.",
      },
      {
        question: "Can caregivers add growth measurements?",
        answer:
          "Yes. Invited caregivers can log and view entries on the shared baby profile.",
      },
    ],
    relatedSlugs: [
      "baby-tracker-app",
      "newborn-tracker",
      "baby-feeding-tracker",
      "diaper-tracker",
    ],
  },
  {
    slug: "wake-window-tracker",
    title: "Wake Window Tracker App | Baby Nap Schedule – Soriva",
    metaDescription:
      "Track wake windows and nap timing in a calm baby schedule app. See awake periods, plan naps, and sync sleep logs with your partner on iPhone and Android.",
    h1: "Wake window tracker for naps and daily baby schedules",
    intro:
      "Wake windows help many parents plan naps—but they are hard to follow when you are tired and the day moves fast. Soriva’s wake window tracker connects awake periods with sleep logs on one timeline, so you can see how long your baby has been up and what nap might come next, without a separate spreadsheet or mental math.",
    sections: [
      {
        heading: "What wake windows mean in daily baby care",
        paragraphs: [
          "A wake window is the stretch of time your baby is awake between sleep periods. In the first year, those stretches change often. A wake window tracker does not replace your instincts—it gives you a clearer picture of recent sleep and awake blocks when you are deciding whether it is nap time yet.",
          "Soriva records naps and night sleep on the same timeline as feeds and diapers, so wake windows sit in real context—not as isolated numbers.",
        ],
      },
      {
        heading: "Schedule view for naps and awake time",
        paragraphs: [
          "Soriva’s day schedule lays out sleep blocks and awake periods in a gentle structure. You can see how the morning nap affected the afternoon, or whether a short catnap shifted bedtime. That visibility helps you adjust routines gradually instead of reacting to every single short sleep.",
          "Supportive schedule insights are informational only. Soriva does not provide medical or sleep-training advice and does not replace your pediatrician.",
        ],
      },
      {
        heading: "Wake windows work best with consistent sleep logging",
        paragraphs: [
          "The value of a wake window tracker depends on accurate sleep entries. Soriva makes nap logging fast: start and stop with a tap, or add entries later when you catch up. Partners and caregivers can log too, so overnight sleep still appears on the shared timeline.",
        ],
      },
      {
        heading: "Part of a full baby routine app",
        paragraphs: [
          "Wake windows rarely matter in isolation. Feeding times, diaper patterns, and growth milestones all shape the day. Soriva is a baby routine app that keeps those pieces together—one calm baby tracker app instead of juggling separate tools.",
        ],
      },
      {
        heading: "Start tracking wake windows with Soriva",
        paragraphs: [
          "Download free on the App Store and Google Play. Log sleep, review your schedule, and build a clearer picture of your baby’s rhythm over days and weeks—without alarmist notifications or cluttered charts.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Soriva calculate wake windows automatically?",
        answer:
          "Soriva visualizes sleep and awake blocks on your schedule based on the sleep entries you log. It helps you plan; it does not provide clinical sleep recommendations.",
      },
      {
        question: "Can I track wake windows for newborns?",
        answer:
          "Yes. Newborn sleep is irregular, but logging naps and awake periods still helps you spot patterns over time.",
      },
      {
        question: "Do wake windows change as my baby grows?",
        answer:
          "Yes. Awake periods typically lengthen with age. Soriva lets you review history so you can see how your baby’s schedule has shifted.",
      },
      {
        question: "Can my partner see the same sleep schedule?",
        answer: "Yes. Caregiver sync keeps sleep and schedule data on one shared baby profile.",
      },
      {
        question: "Is this a sleep training app?",
        answer:
          "No. Soriva is a logging and schedule tool. It does not prescribe sleep training methods or medical guidance.",
      },
    ],
    relatedSlugs: [
      "baby-sleep-tracker",
      "baby-routine-app",
      "newborn-tracker",
      "baby-tracker-app",
    ],
  },
  {
    slug: "baby-routine-app",
    title: "Baby Routine App | Daily Schedule & Care Log – Soriva",
    metaDescription:
      "Plan and track your baby's daily routine in one calm app. Feeds, naps, diapers, and caregiver sync—simple baby routine tracking for modern parents.",
    h1: "Baby routine app for daily schedules and care logs",
    intro:
      "Routines shift weekly in the first year—longer wake windows, fewer naps, new feeds. A baby routine app should flex with those changes while keeping yesterday’s context visible. Soriva combines feeding, sleep, diapers, and growth on one timeline so your daily schedule is something you can actually follow, not just aspire to.",
    sections: [
      {
        heading: "One timeline for your whole day",
        paragraphs: [
          "Instead of separate notes for feeds, naps, and diaper changes, Soriva arranges everything chronologically. You see what already happened and what tends to come next—useful when you are tired and the day blurs together.",
          "The interface stays calm and readable: no dashboards that feel like work shifts. Open the app, check the timeline, log what you need, move on.",
        ],
      },
      {
        heading: "Build routines without rigid rules",
        paragraphs: [
          "A baby routine app should support your family’s rhythm, not impose a one-size-fits-all schedule. Soriva helps you notice patterns—morning nap length, afternoon feeding clusters, bedtime trends—so you can adjust gently.",
          "AI insights summarize recent activity in supportive language. They are informational only and do not replace professional guidance.",
        ],
      },
      {
        heading: "Caregiver sync for shared routines",
        paragraphs: [
          "When partners, grandparents, or nannies share logging, the routine stays consistent across handoffs. Everyone sees the same last feed and the same nap history, which means fewer texts and less confusion at shift change.",
        ],
      },
      {
        heading: "Routine data for pediatrician visits",
        paragraphs: [
          "Doctors often ask how the past week looked—feeds, sleep, diapers. Soriva lets you export a clear summary for the days you choose, built from the routine you already logged. It is not medical advice; it is organized context for better conversations.",
        ],
      },
      {
        heading: "Download the Soriva baby routine app",
        paragraphs: [
          "Free on iPhone and Android. Track feeds, sleep, diapers, growth, and wake windows in one place. Start with a calmer daily log today.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is included in routine tracking?",
        answer: "Feeds, sleep, diapers, growth, and notes—organized on one daily timeline.",
      },
      {
        question: "Can I customize what I log?",
        answer: "You log what matters for your day. Soriva focuses on common baby care categories without forcing extra fields.",
      },
      {
        question: "Does the app remind me about routines?",
        answer: "Soriva offers notifications you can configure. The product is designed to inform, not overwhelm.",
      },
      {
        question: "Is Soriva only for newborns?",
        answer: "It is especially helpful early on, but many families continue as schedules evolve.",
      },
      {
        question: "Can I share routines with my partner?",
        answer: "Yes. Caregiver sync supports shared logging on one baby profile.",
      },
    ],
    relatedSlugs: [
      "wake-window-tracker",
      "baby-sleep-tracker",
      "newborn-tracker",
      "baby-tracker-app",
    ],
  },
  {
    slug: "breastfeeding-tracker",
    title: "Breastfeeding Tracker App | Nursing Log – Soriva",
    metaDescription:
      "Log nursing sessions, sides, and duration in a simple breastfeeding tracker. Track breastfeeding alongside sleep and diapers in one calm baby app.",
    h1: "Breastfeeding tracker for nursing sessions and daily logs",
    intro:
      "Breastfeeding tracking is different from bottle tracking. You care about sides, duration, and patterns—not always ounces. Soriva is a breastfeeding tracker that logs nursing sessions quickly, shows them on your baby’s timeline, and keeps breastfeeding data alongside sleep and diapers in one app.",
    sections: [
      {
        heading: "Log nursing sessions in seconds",
        paragraphs: [
          "Tap to start and stop a nursing session, note left or right side, and add optional notes. Soriva records time and duration without making you fill out long forms during a feed.",
          "When your pediatrician or lactation consultant asks about frequency or recent sessions, you have a log—not a vague memory of a blurry week.",
        ],
      },
      {
        heading: "Breastfeeding alongside bottles and pumping",
        paragraphs: [
          "Many families combine nursing with bottles or pumping. Soriva lets you log all feeding types on one timeline, so intake context stays unified. You do not need a separate breastfeeding app and a separate bottle app.",
        ],
      },
      {
        heading: "See patterns without pressure",
        paragraphs: [
          "Cluster feeding phases, growth spurts, and return-to-work transitions all change nursing patterns. A breastfeeding tracker helps you see trends over days without turning every session into a scorecard.",
          "Soriva does not provide medical or lactation advice. For clinical concerns, contact your pediatrician or IBCLC.",
        ],
      },
      {
        heading: "Share logs with your care team",
        paragraphs: [
          "Partners and caregivers can view the same breastfeeding timeline through sync. Night feeds logged by one parent appear for the other—helpful for handoffs and pediatrician questions about overnight nursing.",
        ],
      },
      {
        heading: "Try Soriva’s breastfeeding tracker free",
        paragraphs: [
          "Download on the App Store and Google Play. Combine nursing logs with sleep, diapers, and growth in one calm baby tracker app.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I track which side I nursed on?",
        answer: "Yes. Log left, right, or both sides with session duration.",
      },
      {
        question: "Does Soriva track milk supply?",
        answer: "Soriva logs sessions and optional notes. It does not measure supply or diagnose feeding issues.",
      },
      {
        question: "Can I log breastfeeding and pumping together?",
        answer: "Yes. Nursing, pumping, and bottle feeds can all appear on one timeline.",
      },
      {
        question: "Is this a lactation consultant replacement?",
        answer: "No. Soriva is a logging tool only. Seek professional support for clinical lactation concerns.",
      },
      {
        question: "Can I export breastfeeding logs?",
        answer: "Yes. Include feeding data in exported summaries for appointments when helpful.",
      },
    ],
    relatedSlugs: [
      "pumping-tracker",
      "bottle-feeding-tracker",
      "baby-feeding-tracker",
      "newborn-tracker",
    ],
  },
  {
    slug: "pumping-tracker",
    title: "Pumping Tracker App | Breast Pump Log – Soriva",
    metaDescription:
      "Log pump sessions, output, and timing in a dedicated pumping tracker. Keep pumping records with breastfeeding and bottle feeds in one baby app.",
    h1: "Pumping tracker for breast pump sessions and output",
    intro:
      "Whether you pump occasionally or on a work schedule, you need a pumping tracker that is fast: session start, side or bottle amount, done. Soriva logs pump sessions on your baby’s feeding timeline next to nursing and bottles—one record for everything related to intake.",
    sections: [
      {
        heading: "Log pump sessions without extra admin",
        paragraphs: [
          "Record pump start and end times, amounts collected, and which side you pumped. Soriva keeps entries chronological so you can answer “how much did I pump today?” without adding up sticky notes.",
          "For parents building a freezer stash or managing supply during separation from baby, consistent pump logs make patterns easier to see over weeks.",
        ],
      },
      {
        heading: "Pumping in context with nursing and bottles",
        paragraphs: [
          "Pumping does not happen in isolation. Soriva shows pump sessions alongside breastfeeding and bottle feeds, which helps when you are balancing direct nursing, expressed milk, and formula supplementation.",
        ],
      },
      {
        heading: "Support for return-to-work pumping",
        paragraphs: [
          "Workdays add structure: pump before commute, mid-day, before pickup. A pumping tracker on your phone fits those transitions better than paper logs in a desk drawer. Caregiver sync lets partners see what was expressed and when baby ate stored milk.",
        ],
      },
      {
        heading: "Informational only—not medical guidance",
        paragraphs: [
          "Soriva does not diagnose supply issues or recommend pumping schedules clinically. Use logs to stay organized; consult your lactation professional or pediatrician for medical questions.",
        ],
      },
      {
        heading: "Download Soriva’s pumping tracker",
        paragraphs: [
          "Free on iPhone and Android. Combine pumping, nursing, and bottle logs in one calm baby feeding tracker.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I log how much milk I pumped?",
        answer: "Yes. Record amounts per session alongside time and optional notes.",
      },
      {
        question: "Does Soriva track both breasts?",
        answer: "Yes. Log sessions by side as needed.",
      },
      {
        question: "Can I see daily pumping totals?",
        answer: "Your timeline and summaries reflect logged sessions so you can review recent output.",
      },
      {
        question: "Is pumping data separate from breastfeeding?",
        answer: "No. Nursing, pumping, and bottles share one feeding timeline.",
      },
      {
        question: "Does the app store milk inventory?",
        answer: "Soriva focuses on session logging. Check in-app features for how stash notes are handled.",
      },
    ],
    relatedSlugs: [
      "breastfeeding-tracker",
      "bottle-feeding-tracker",
      "baby-feeding-tracker",
      "baby-tracker-app",
    ],
  },
  {
    slug: "bottle-feeding-tracker",
    title: "Bottle Feeding Tracker App | Formula & Milk Log – Soriva",
    metaDescription:
      "Track bottle feeds, ounces, and formula or breast milk in a bottle feeding tracker. Log bottles alongside nursing and pumping in Soriva.",
    h1: "Bottle feeding tracker for formula and expressed milk",
    intro:
      "Bottle feeds need clear numbers: how many ounces, what type of milk, when was the last bottle. Soriva’s bottle feeding tracker logs each feed in seconds and places it on your baby’s daily timeline next to nursing, pumping, sleep, and diapers.",
    sections: [
      {
        heading: "Log bottles with amount and type",
        paragraphs: [
          "Record bottle volume, breast milk or formula, and time of feed. Soriva surfaces recent bottle activity so you are not guessing during night shifts or pediatrician calls.",
          "For combo-fed babies, bottles appear on the same timeline as nursing sessions—giving you one picture of daily intake.",
        ],
      },
      {
        heading: "Daily totals and feeding rhythm",
        paragraphs: [
          "Parents often track bottles to notice rhythm: smaller frequent feeds versus larger spaced feeds. Your Soriva timeline helps you see those patterns over days without manual tallying.",
        ],
      },
      {
        heading: "Share bottle logs with caregivers",
        paragraphs: [
          "Grandparents, nannies, and partners can log bottles to the shared profile. Everyone sees the same last feed amount and time, which reduces duplicate bottles and conflicting handoff notes.",
        ],
      },
      {
        heading: "Bring organized notes to appointments",
        paragraphs: [
          "Pediatricians may ask about approximate daily volume and feeding frequency. Export a summary from Soriva for the date range you choose. Soriva is informational only—not a substitute for medical advice.",
        ],
      },
      {
        heading: "Get the bottle feeding tracker free",
        paragraphs: [
          "Download Soriva on the App Store and Google Play. One baby tracker app for bottles, breastfeeding, pumping, sleep, and more.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I track both formula and breast milk bottles?",
        answer: "Yes. Log bottle type and amount per feed.",
      },
      {
        question: "Does Soriva replace a kitchen scale?",
        answer: "You enter amounts you measure. Soriva logs and summarizes; it does not weigh bottles.",
      },
      {
        question: "Can I track bottles and nursing together?",
        answer: "Yes. All feeding types appear on one timeline.",
      },
      {
        question: "Is there a daily ounce total?",
        answer: "Logged feeds appear in summaries so you can review recent bottle intake.",
      },
      {
        question: "Is Soriva medical advice for formula feeding?",
        answer: "No. Follow your pediatrician’s guidance for formula type, amounts, and preparation.",
      },
    ],
    relatedSlugs: [
      "breastfeeding-tracker",
      "pumping-tracker",
      "baby-feeding-tracker",
      "newborn-tracker",
    ],
  },
];

export const SEO_PAGE_BY_SLUG = Object.fromEntries(
  SEO_PAGES.map((page) => [page.slug, page])
) as Record<string, SeoPageContent>;

export const SEO_PAGE_SLUGS = [...SITEMAP_SEO_SLUGS];
