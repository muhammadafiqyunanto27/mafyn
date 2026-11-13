import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import type { Dictionary } from "@/content/types";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-fg/15 py-20 md:py-28 lg:py-32"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeader
            index="04"
            label={dict.about.label}
            title={<span id="about-heading">{dict.about.heading}</span>}
          />
        </Reveal>

        <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <p className="max-w-[24ch] font-display text-[clamp(1.5rem,2.7vw,2.35rem)] leading-[1.28] tracking-[-0.028em]">
              {dict.about.statement}
            </p>

            <div className="mt-8 max-w-[58ch] space-y-5 text-[0.9375rem] leading-relaxed text-fg/65">
              {dict.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 max-w-[58ch] border-l-2 border-fg pl-5">
              <p className="label text-fg/45">{dict.about.howWeWorkLabel}</p>
              <p className="mt-2 text-sm leading-relaxed text-fg/75">
                {dict.about.howWeWork}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5 lg:pl-8">
            <p className="label text-fg/45">{dict.about.principlesLabel}</p>
            <ol className="mt-4 border-t border-fg/15">
              {dict.about.principles.map((principle) => (
                <li
                  key={principle.index}
                  className="grid grid-cols-[2rem_1fr] gap-3 border-b border-fg/15 py-4"
                >
                  <span className="label pt-1 text-fg/40">
                    {principle.index}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-medium tracking-[-0.01em]">
                      {principle.title}
                    </h3>
                    <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-fg/60">
                      {principle.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
