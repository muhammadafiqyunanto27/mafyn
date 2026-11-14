import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import type { Dictionary } from "@/content/types";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-b border-line">
      <div className="container-page section-y">
        <SectionHeader
          index="04"
          label={dict.about.label}
          title={<span id="about-heading">{dict.about.heading}</span>}
        />

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <Reveal>
              <p className="max-w-[34ch] font-display text-[clamp(1.375rem,2.6vw,2rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
                {dict.about.statement}
              </p>
            </Reveal>

            <div className="mt-6 space-y-4">
              {dict.about.paragraphs.map((paragraph, i) => (
                <Reveal key={paragraph.slice(0, 24)} delay={i * 80}>
                  <p className="max-w-[60ch] text-[0.9375rem] leading-relaxed text-fg-muted">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={160}>
              <div className="mt-8 max-w-[60ch] rounded-lg border border-line bg-surface p-5 sm:p-6">
                <p className="eyebrow text-fg-subtle">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-lime ring-1 ring-fg/20" />
                  {dict.about.howWeWorkLabel}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-fg">
                  {dict.about.howWeWork}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <p className="label border-b border-line pb-3 text-fg-subtle">
              {dict.about.principlesLabel}
            </p>
            <ol>
              {dict.about.principles.map((principle, i) => (
                <li
                  key={principle.index}
                  className="border-b border-line py-4"
                >
                  <Reveal delay={i * 70}>
                    <div className="grid grid-cols-[2rem_1fr] gap-3">
                      <span className="label pt-0.5 text-fg-subtle">
                        {principle.index}
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold leading-tight tracking-[-0.02em]">
                          {principle.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>

            <p className="mt-6 flex items-center gap-2 text-xs text-fg-subtle">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-fg-subtle" />
              {dict.brand.locationShort}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
