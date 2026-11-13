import { en } from "@/content/dictionaries/en";
import { id } from "@/content/dictionaries/id";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";

const dictionaries: Record<Locale, Dictionary> = { en, id };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
