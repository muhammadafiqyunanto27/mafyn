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
import { buildStructuredData } from "@/lib/structured-data";

type HomeProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: HomeProps) {
  const { locale: value } = await params;

  if (!isLocale(value)) notFound();

  const dict = getDictionary(value);

  const structuredData = buildStructuredData({
    locale: value,
    dict,
    path: `/${value}`,
  });

  return (
    <>
      <SiteHeader locale={value} dict={dict} />
      <main id="main">
        <Hero dict={dict} />
        <Services locale={value} dict={dict} />
        <Work locale={value} dict={dict} />
        <Process dict={dict} />
        <About dict={dict} />
        <Contact locale={value} dict={dict} />
      </main>
      <SiteFooter locale={value} dict={dict} />
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
