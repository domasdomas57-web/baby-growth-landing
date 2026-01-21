const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.domce23.babygrowthtracker&hl=en";

export default function Footer({
  messages,
}: {
  messages: {
    brand: string;
    description: string;
    googlePlayCta: string;
    contactLinePrefix: string;
    email: string;
    emailAria: string;
    copyright: string;
    bottomNote: string;
  };
}) {
  const year = new Date().getFullYear();
  const copyright = messages.copyright.replace("{year}", String(year));

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/60 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-violet-400/5 to-fuchsia-300/5" />
        <div className="absolute -top-28 left-1/2 h-[360px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/12 via-violet-400/12 to-fuchsia-300/12 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 sm:items-start">
          <div>
            <p className="text-base font-semibold tracking-tight">{messages.brand}</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-200/70">
              {messages.description}
            </p>

            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_-44px_rgba(0,0,0,0.95)] backdrop-blur transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              {messages.googlePlayCta}
            </a>
          </div>

          <p className="text-sm text-slate-200/70 sm:justify-self-end sm:text-right">
            {messages.contactLinePrefix}{" "}
            <a
              href={`mailto:${messages.email}`}
              aria-label={messages.emailAria}
              className="text-slate-200/75 underline decoration-white/20 underline-offset-4 transition hover:text-white"
            >
              {messages.email}
            </a>
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-200/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{copyright}</p>
          <p>{messages.bottomNote}</p>
        </div>
      </div>
    </footer>
  );
}
