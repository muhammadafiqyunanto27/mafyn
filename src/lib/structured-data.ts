import { site } from "@/content/site";
import {
  getServicePage,
  serviceKeys,
  servicePagePath,
  type ServicePageKey,
} from "@/content/service-pages";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { absoluteUrl } from "@/lib/seo";

type StructuredDataInput = {
  locale: Locale;
  dict: Dictionary;
  /** Locale-relative path of the current page, e.g. "/id". */
  path: string;
  /** Optional breadcrumb trail, including the current page as the last item. */
  breadcrumb?: { name: string; path: string }[];
  /** Services to expose as Service nodes. Defaults to all. */
  services?: ServicePageKey[];
};

const whatsappTelephone = "+6282219785260";

/**
 * One JSON-LD @graph per page.
 *
 * References between nodes use @id so Organization, WebSite, the studio, its
 * services and breadcrumbs describe one consistent entity instead of competing
 * duplicates. Only verified, on-site facts are used: no ratings, reviews,
 * employee counts, addresses or certifications are invented.
 */
export function buildStructuredData({
  locale,
  dict,
  path,
  breadcrumb,
  services = serviceKeys,
}: StructuredDataInput) {
  const orgId = `${absoluteUrl("/")}#organization`;
  const websiteId = `${absoluteUrl("/")}#website`;
  const studioId = `${absoluteUrl("/")}#studio`;

  const organization = {
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    alternateName: `${site.name} Studio`,
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon.svg"),
    },
    image: absoluteUrl("/opengraph-image"),
    email: site.email,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: whatsappTelephone,
        availableLanguage: ["English", "Indonesian"],
        areaServed: "ID",
      },
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: absoluteUrl("/"),
    name: site.name,
    description: dict.meta.description,
    inLanguage: ["en", "id"],
    publisher: { "@id": orgId },
  };

  const professionalService = {
    "@type": "ProfessionalService",
    "@id": studioId,
    name: site.name,
    url: absoluteUrl("/"),
    description: dict.meta.description,
    slogan: dict.brand.tagline,
    email: site.email,
    telephone: whatsappTelephone,
    parentOrganization: { "@id": orgId },
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
    },
    areaServed: [
      { "@type": "Country", name: "Indonesia" },
      { "@type": "Place", name: "Worldwide" },
    ],
    knowsAbout: dict.meta.knowsAbout,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: dict.meta.offerCatalog,
      itemListElement: services.map((key) => ({
        "@type": "Offer",
        itemOffered: { "@id": `${absoluteUrl("/")}#service-${key}` },
      })),
    },
  };

  const serviceNodes = services.map((key) => {
    const page = getServicePage(locale, key);

    return {
      "@type": "Service",
      "@id": `${absoluteUrl("/")}#service-${key}`,
      name: page.name,
      serviceType: page.name,
      description: page.metaDescription,
      url: absoluteUrl(servicePagePath(locale, key)),
      provider: { "@id": studioId },
      areaServed: [
        { "@type": "Country", name: "Indonesia" },
        { "@type": "Place", name: "Worldwide" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: dict.services.typicalWork,
        itemListElement: page.outcomes.map((offering) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: offering,
          },
        })),
      },
    };
  });

  const graph: Record<string, unknown>[] = [
    organization,
    website,
    professionalService,
    ...serviceNodes,
  ];

  if (breadcrumb && breadcrumb.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${absoluteUrl(path)}#breadcrumb`,
      itemListElement: breadcrumb.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
