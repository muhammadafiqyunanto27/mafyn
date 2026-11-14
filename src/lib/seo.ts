import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Absolute URL helper. Every canonical, hreflang and structured-data URL in
 * the site must go through here so the www host stays consistent.
 */
export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}

export type PageMetadataInput = {
  title: string;
  description: string;
  keywords?: string[];
  /** Locale-relative canonical path, e.g. "/id" or "/id/jasa-pembuatan-website". */
  path: string;
  /** hreflang map of locale-relative paths, including x-default. */
  languages: Record<string, string>;
  ogAlt: string;
  ogLocale: string;
  alternateOgLocale: string;
};

/**
 * Shared metadata builder for every indexable page.
 *
 * Keeps title/description/OG/Twitter/canonical/hreflang in one place so a new
 * page cannot accidentally ship a missing canonical or a conflicting hreflang.
 */
export function buildPageMetadata({
  title,
  description,
  keywords,
  path,
  languages,
  ogAlt,
  ogLocale,
  alternateOgLocale,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const languageUrls = Object.fromEntries(
    Object.entries(languages).map(([key, value]) => [key, absoluteUrl(value)]),
  );

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    alternates: {
      canonical,
      languages: languageUrls,
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale: [alternateOgLocale],
      url: canonical,
      siteName: site.name,
      title,
      description,
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/opengraph-image")],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
