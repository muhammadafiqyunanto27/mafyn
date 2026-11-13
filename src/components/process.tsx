import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import type { Dictionary } from "@/content/types";

export function Process({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-ink py-20 text-paper md:py-28 lg:py-32"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeader
            tone="dark"
            index="03"
            label={dict.process.label}
            title={<span id="process-heading">{dict.process.heading}</span>}
            intro={dict.process.intro}
          />
        </Reveal>

        <Reveal delay={100} className="mt-12 md:mt-16">
          <ol className="grid border-t border-l border-paper/15 md:grid-cols-2 lg:grid-cols-5">
            {dict.process.stages.map((stage) => (
              <li
                key={stage.index}
                className="flex flex-col border-b border-r border-paper/15 p-6 transition-colors duration-300 hover:bg-paper/[0.035] lg:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl leading-none text-paper/30">
                    {stage.index}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 bg-paper/25"
                  />
                </div>

                <h3 className="mt-10 font-display text-lg leading-tight tracking-[-0.02em] lg:mt-12">
                  {stage.title}
                </h3>
                <p className="mt-3 text-[0.8125rem] leading-relaxed text-paper/60">
                  {stage.description}
                </p>

                <div className="mt-auto border-t border-paper/15 pt-4">
                  <p className="text-[0.5625rem] font-medium uppercase tracking-[0.16em] text-paper/40">
                    {dict.process.output}
                  </p>
                  <p className="mt-2 text-[0.75rem] leading-relaxed text-paper/65">
                    {stage.deliverables.join(" · ")}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-[52ch] text-[0.8125rem] leading-relaxed text-paper/45">
            {dict.process.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
