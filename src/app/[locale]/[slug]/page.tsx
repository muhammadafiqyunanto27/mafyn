import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ServicePageView } from "@/components/service-page";
import { BackToTop } from "@/components/ui/back-to-top";
import {
  findServiceKeyBySlug,
  getServicePage,
  serviceKeys,
  serviceLanguageAlternates,
  servicePagePath,
  servicePageUi,
  type ServicePageKey,
} from "@/content/service-pages";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/seo";
import { buildStructuredData } from "@/lib/structured-data";

type ServiceRouteProps = {
  params: Promise<{ locale: string; slug: string }>;
};

const slugs = Array.from(
  new Set(
    serviceKeys.flatMap((key) => [
      getServicePage("en", key).slug,
      getServicePage("id", key).slug,
    ]),
  ),
);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceRouteProps): Promise<Metadata> {
  const { locale: value, slug } = await params;

  if (!isLocale(value)) return {};

  const key = findServiceKeyBySlug(value, slug);

  if (!key) return {};

  const dict = getDictionary(value);
  const page = getServicePage(value, key);

  return buildPageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    path: servicePagePath(value, key),
    languages: serviceLanguageAlternates(key),
    ogAlt: `${page.metaTitle} — ${dict.brand.tagline}`,
    ogLocale: dict.meta.ogLocale,
    alternateOgLocale: dict.meta.alternateOgLocale,
  });
}

export default async function ServiceRoute({ params }: ServiceRouteProps) {
  const { locale: value, slug } = await params;

  if (!isLocale(value)) notFound();

  const key: ServicePageKey | undefined = findServiceKeyBySlug(value, slug);

  if (!key) notFound();

  const dict = getDictionary(value);
  const page = getServicePage(value, key);
  const path = servicePagePath(value, key);

  const structuredData = buildStructuredData({
    locale: value as Locale,
    dict,
    path,
    services: [key],
    breadcrumb: [
      { name: servicePageUi[value].breadcrumb, path: `/${value}` },
      { name: page.name, path },
    ],
  });

  return (
    <>
      <SiteHeader locale={value} dict={dict} homeHref={`/${value}`} />
      <ServicePageView locale={value} page={page} />
      <SiteFooter locale={value} dict={dict} homeHref={`/${value}`} />
      <BackToTop label={dict.a11y.backToTop} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
