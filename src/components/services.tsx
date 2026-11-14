import {
  ArrowUpRight,
  Database,
  Layers,
  LayoutTemplate,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { servicePagePath } from "@/content/service-pages";
import type { Dictionary, ServiceIcon } from "@/content/types";
import type { Locale } from "@/i18n/config";

const icons: Record<ServiceIcon, LucideIcon> = {
  layout: LayoutTemplate,
  layers: Layers,
  database: Database,
  wrench: Wrench,
};

const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
];

/** Maps the four dictionary services to localized service pages where one exists. */
const pageKeys = ["website", "webapp", "backend", null] as const;

export function Services({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-b border-line"
    >
      <div className="container-page section-y">
        <SectionHeader
          index="01"
          label={dict.services.label}
          title={<span id="services-heading">{dict.services.heading}</span>}
          intro={dict.services.intro}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5 lg:mt-14 lg:grid-cols-12">
          {dict.services.items.map((service, index) => {
            const Icon = icons[service.icon];
            const pageKey = pageKeys[index] ?? null;
            const href = pageKey ? servicePagePath(locale, pageKey) : null;

            const content = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-[0.875rem] bg-lime text-forest">
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5"
                      strokeWidth={1.6}
                    />
                  </span>
                  <span className="label text-fg-subtle">
                    {service.index} / 04
                  </span>
                </div>

                <h3 className="display-sub mt-6 max-w-[18ch]">
                  {service.title}
                </h3>

                <p className="mt-2.5 max-w-[46ch] text-sm leading-relaxed text-fg-muted">
                  {service.value}
                </p>

                <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                  <ul
                    aria-label={dict.services.typicalWork}
                    className="flex flex-wrap gap-1.5"
                  >
                    {service.offerings.map((offering) => (
                      <li key={offering} className="chip">
                        {offering}
                      </li>
                    ))}
                  </ul>
                  {href && (
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-fg-subtle transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                      strokeWidth={1.6}
                    />
                  )}
                </div>
              </>
            );

            const boxClass = `card flex min-h-[15rem] flex-col p-6 sm:p-7 lg:min-h-[17rem] ${spans[index] ?? ""}`;

            if (!href) {
              return (
                <article key={service.index} className={boxClass}>
                  {content}
                </article>
              );
            }

            return (
              <a
                key={service.index}
                href={href}
                className={`${boxClass} card-interactive group`}
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
