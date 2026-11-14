import { ArrowUpRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import {
  getServicePage,
  servicePageUi,
  type ServicePage,
} from "@/content/service-pages";
import { servicePagePath } from "@/content/service-pages";
import type { Locale } from "@/i18n/config";

export function ServicePageView({
  locale,
  page,
}: {
  locale: Locale;
  page: ServicePage;
}) {
  const ui = servicePageUi[locale];
  const homeHref = `/${locale}`;
  const contactHref = `${homeHref}#contact`;

  return (
    <main id="main">
      <section className="border-b border-line">
        <div className="container-page pt-6 pb-12 sm:pt-8 lg:pb-16">
          <nav aria-label={ui.breadcrumbAria} className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.06em] text-fg-subtle">
              <li>
                <a
                  href={homeHref}
                  className="transition-colors hover:text-fg"
                >
                  {ui.breadcrumb}
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-fg-muted">
                {page.eyebrow}
              </li>
            </ol>
          </nav>

          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="eyebrow text-fg-muted">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-lime ring-1 ring-fg/25"
                />
                {page.eyebrow}
              </p>
              <h1 className="display-section mt-4 max-w-[18ch]">
                {page.heading}
              </h1>
            </div>
            <div className="flex flex-col justify-end lg:col-span-5">
              <p className="text-base leading-relaxed text-fg-muted sm:text-lg">
                {page.intro}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={contactHref}>{ui.contactCta}</ButtonLink>
                <ButtonLink href={homeHref} variant="secondary" withIcon={false}>
                  {ui.backHome}
                </ButtonLink>
              </div>
            </div>
          </div>

          <ul className="mt-10 grid gap-x-8 gap-y-4 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {page.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2.5">
                <Check
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-deep-green dark:text-lime"
                  strokeWidth={2}
                />
                <span className="text-sm leading-relaxed text-fg-muted">
                  {outcome}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="container-page section-y">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-10 lg:col-span-7">
              {page.sections.map((section) => (
                <article key={section.title}>
                  <h2 className="display-sub max-w-[26ch]">{section.title}</h2>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-fg-muted">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets && (
                    <ul className="mt-4 space-y-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-fg-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime ring-1 ring-fg/20"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>

            <aside className="lg:col-span-5">
              <div className="card p-6 sm:p-7">
                <h2 className="label text-fg-subtle">{ui.stackLabel}</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {page.stack.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="border-b border-line">
        <div className="container-page section-y">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 id="faq-heading" className="display-sub">
                {ui.faqLabel}
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-line border-y border-line">
                {page.faq.map((item) => (
                  <li key={item.question}>
                    <details className="group py-4">
                      <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-semibold">
                        {item.question}
                        <span
                          aria-hidden="true"
                          className="mt-0.5 font-mono text-sm text-fg-subtle transition-transform duration-200 group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-3 max-w-[68ch] text-sm leading-relaxed text-fg-muted">
                        {item.answer}
                      </p>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="related-heading" className="border-b border-line">
        <div className="container-page section-y">
          <h2 id="related-heading" className="label text-fg-subtle">
            {ui.relatedLabel}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {page.related.map((key) => {
              const related = getServicePage(locale, key);
              return (
                <a
                  key={key}
                  href={servicePagePath(locale, key)}
                  className="card card-interactive group flex items-start justify-between gap-4 p-6"
                >
                  <span>
                    <span className="block text-lg font-semibold tracking-[-0.02em]">
                      {related.heading}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-fg-muted">
                      {related.metaDescription}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-fg-subtle transition-colors group-hover:text-fg"
                    strokeWidth={1.75}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container-page section-y">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2 className="display-section max-w-[22ch]">{page.ctaHeading}</h2>
              <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-fg-muted">
                {page.ctaBody}
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <ButtonLink href={contactHref}>{ui.contactCta}</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
