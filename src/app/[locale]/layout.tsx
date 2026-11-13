import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { getDictionary } from "@/i18n/dictionaries";
import {
  isLocale,
  locales,
} from "@/i18n/config";
import { site } from "@/content/site";
import { themeScript } from "@/lib/theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale: value } = await params;

  if (!isLocale(value)) return {};

  const dict = getDictionary(value);
  const canonical = `/${value}`;
  const languages = {
    en: "/en",
    id: "/id",
    "x-default": "/en",
  };

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.title,
      template: `%s — ${site.name}`,
    },
    description: dict.meta.description,
    applicationName: site.name,
    keywords: dict.meta.keywords,
    authors: [{ name: site.name }],
    creator: site.name,
    publisher: site.name,
    alternates: { canonical, languages },
    category: "technology",
    openGraph: {
      type: "website",
      locale: dict.meta.ogLocale,
      alternateLocale: [dict.meta.alternateOgLocale],
      url: canonical,
      siteName: site.name,
      title: dict.meta.title,
      description: dict.meta.description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: dict.meta.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/opengraph-image"],
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F4F2" },
    { media: "(prefers-color-scheme: dark)", color: "#111318" },
  ],
  colorScheme: "light dark",
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: value } = await params;

  if (!isLocale(value)) notFound();

  const dict = getDictionary(value);

  return (
    <html
      lang={value}
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-canvas text-fg antialiased">
        <a href="#main" className="skip-link">
          {dict.a11y.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
