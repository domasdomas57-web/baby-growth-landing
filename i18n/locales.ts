export const DEFAULT_LOCALE = "en" as const;

export const SUPPORTED_LOCALES = [
  "en",
  "lt",
  "es",
  "fr",
  "de",
  "it",
  "pt",
  "pl",
  "ru",
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const LOCALE_COOKIE_NAME = "locale" as const;
