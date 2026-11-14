import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Process } from "@/components/process";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/ui/back-to-top";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/content/site";

type HomeProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: HomeProps) {
  const { locale: value } = await params;

  if (!isLocale(value)) notFound();

  const dict = getDictionary(value);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#studio`,
    name: site.name,
    url: `${site.url}/${value}`,
    description: dict.meta.description,
    slogan: dict.brand.tagline,
    inLanguage: dict.meta.inLanguage,
    areaServed: [
      { "@type": "Country", name: "Indonesia" },
      dict.meta.areaServedWorldwide,
    ],
    knowsAbout: dict.meta.knowsAbout,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: dict.meta.offerCatalog,
      itemListElement: dict.services.items.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.value,
        },
      })),
    },
  };

  return (
    <>
      <SiteHeader locale={value} dict={dict} />
      <main id="main">
        <Hero dict={dict} />
        <Services dict={dict} />
        <Work locale={value} dict={dict} />
        <Process dict={dict} />
        <About dict={dict} />
        <Contact locale={value} dict={dict} />
      </main>
      <SiteFooter dict={dict} />
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
