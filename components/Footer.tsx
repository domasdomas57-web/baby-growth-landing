"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.domce23.babygrowthtracker&hl=en";

const APP_STORE_URL =
  "https://apps.apple.com/lt/app/baby-tracker-ai-soriva/id6759395777";

export default function Footer({
  messages,
}: {
  messages: {
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
}) {
  const year = new Date().getFullYear();
  const copyright = messages.copyright.replace("{year}", String(year));

  const [fromEmail, setFromEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ fromEmail, subject, message }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

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

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("click_googleplay", { placement: "footer" })}
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_-44px_rgba(0,0,0,0.95)] backdrop-blur transition hover:border-white/25 hover:bg-white/[0.06]"
              >
                {messages.googlePlayCta}
              </a>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("click_appstore", { placement: "footer" })}
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_-44px_rgba(0,0,0,0.95)] backdrop-blur transition hover:border-white/25 hover:bg-white/[0.06]"
              >
                {messages.appStoreCta}
              </a>
            </div>
          </div>

          <div className="sm:justify-self-end sm:text-right">
            <p className="text-lg font-semibold tracking-tight text-white">{messages.formTitle}</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-200/70 sm:ml-auto">
              {messages.formSubtitle}
            </p>

            <form
              onSubmit={onSubmit}
              className="mt-5 flex w-full max-w-md flex-col gap-3 sm:ml-auto"
            >
              <label className="w-full text-left text-xs text-slate-200/70">
                <span className="mb-1.5 block">{messages.yourEmailLabel}</span>
                <input
                  type="email"
                  required
                  value={fromEmail}
                  onChange={(e) => {
                    setFromEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white shadow-[0_18px_60px_-44px_rgba(0,0,0,0.95)] backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                />
              </label>

              <label className="w-full text-left text-xs text-slate-200/70">
                <span className="mb-1.5 block">{messages.subjectLabel}</span>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white shadow-[0_18px_60px_-44px_rgba(0,0,0,0.95)] backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                />
              </label>

              <label className="w-full text-left text-xs text-slate-200/70">
                <span className="mb-1.5 block">{messages.messageLabel}</span>
                <textarea
                  required
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white shadow-[0_18px_60px_-44px_rgba(0,0,0,0.95)] backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                />
              </label>

              <div className="flex w-full items-center justify-end gap-3">
                <p aria-live="polite" className="mr-auto text-xs text-slate-200/70">
                  {status === "sent" ? messages.sentMessage : null}
                  {status === "error" ? messages.errorMessage : null}
                </p>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_-44px_rgba(0,0,0,0.95)] backdrop-blur transition hover:border-white/25 hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? messages.sendingLabel : messages.sendLabel}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-200/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{copyright}</p>
          <p>{messages.bottomNote}</p>
        </div>
      </div>
    </footer>
  );
}
