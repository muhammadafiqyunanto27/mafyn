import type { MetadataRoute } from "next";
import {
  serviceKeys,
  servicePagePath,
  serviceLanguageAlternates,
} from "@/content/service-pages";
import { absoluteUrl } from "@/lib/seo";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const homeAlternates = {
    en: absoluteUrl("/en"),
    id: absoluteUrl("/id"),
    "x-default": absoluteUrl("/en"),
  };

  const homeEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: absoluteUrl(`/${locale}`),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: homeAlternates },
  }));

  const serviceEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    serviceKeys.map((key) => ({
      url: absoluteUrl(servicePagePath(locale, key)),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(serviceLanguageAlternates(key)).map(([lang, path]) => [
            lang,
            absoluteUrl(path),
          ]),
        ),
      },
    })),
  );

  return [...homeEntries, ...serviceEntries];
}
