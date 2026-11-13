import {
  Database,
  Layers,
  LayoutTemplate,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import type { Dictionary, ServiceIcon } from "@/content/types";

const icons: Record<ServiceIcon, LucideIcon> = {
  layout: LayoutTemplate,
  layers: Layers,
  database: Database,
  wrench: Wrench,
};

export function Services({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 md:py-28 lg:py-32"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeader
            index="01"
            label={dict.services.label}
            title={<span id="services-heading">{dict.services.heading}</span>}
            intro={dict.services.intro}
          />
        </Reveal>

        <Reveal delay={100} className="mt-12 md:mt-16">
          <div className="grid border-t border-l border-fg/15 md:grid-cols-2">
            {dict.services.items.map((service) => {
              const Icon = icons[service.icon];

              return (
                <article
                  key={service.title}
                  className="group border-b border-r border-fg/15 p-6 transition-colors duration-300 hover:bg-panel/75 sm:p-8 lg:p-10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="label text-fg/40">{service.index}</span>
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5 text-fg/45 transition-colors duration-300 group-hover:text-fg"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="mt-14 text-[1.375rem] leading-tight md:mt-16 md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-fg/65">
                    {service.value}
                  </p>

                  <div className="mt-8 border-t border-fg/15 pt-4">
                    <p className="label text-fg/40">
                      {dict.services.typicalWork}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {service.offerings.map((offering) => (
                        <li
                          key={offering}
                          className="flex items-center gap-3 text-[0.8125rem] text-fg/75"
                        >
                          <span
                            aria-hidden="true"
                            className="h-1 w-1 shrink-0 bg-fg/40"
                          />
                          {offering}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
