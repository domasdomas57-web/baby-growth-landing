import { cookies } from "next/headers";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  SUPPORTED_LOCALES,
  type Locale,
} from "./locales";
import { MESSAGES_BY_LOCALE, type Messages } from "./messages";

export async function getLocaleFromCookies(): Promise<Locale> {
  const store = await cookies();
  const cookieValue = store.get(LOCALE_COOKIE_NAME)?.value;

  if (!cookieValue) return DEFAULT_LOCALE;

  const normalized = cookieValue.toLowerCase();
  if ((SUPPORTED_LOCALES as readonly string[]).includes(normalized)) {
    return normalized as Locale;
  }

  return DEFAULT_LOCALE;
}

export function getMessages(locale: Locale): Messages {
  return MESSAGES_BY_LOCALE[locale] ?? MESSAGES_BY_LOCALE[DEFAULT_LOCALE];
}
