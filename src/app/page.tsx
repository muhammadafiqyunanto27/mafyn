import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Process } from "@/components/process";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { services, site } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: site.url },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#studio`,
  name: site.name,
  url: site.url,
  description: site.description,
  slogan: site.tagline,
  areaServed: [
    { "@type": "Country", name: "Indonesia" },
    "Worldwide",
  ],
  knowsAbout: [
    "Full-stack development",
    "Web development",
    "Custom web applications",
    "Backend development",
    "Database architecture",
    "Web application maintenance",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.value,
      },
    })),
  },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Services />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
