export const locales = ["en", "id"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  id: "Bahasa Indonesia",
};

export const localeShortNames: Record<Locale, string> = {
  en: "EN",
  id: "ID",
};

export const htmlLang: Record<Locale, string> = {
  en: "en",
  id: "id",
};

export const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  id: "id_ID",
};

export function localePath(locale: Locale, hash = "") {
  return `/${locale}${hash}`;
}
