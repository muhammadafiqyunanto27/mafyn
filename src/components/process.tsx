import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import type { Dictionary } from "@/content/types";

export function Process({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="border-b border-line bg-surface"
    >
      <div className="container-page section-y">
        <SectionHeader
          index="03"
          label={dict.process.label}
          title={<span id="process-heading">{dict.process.heading}</span>}
          intro={dict.process.intro}
        />

        <ol className="relative mt-12 grid gap-8 lg:mt-16 lg:grid-cols-5 lg:gap-5">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-[1.0625rem] hidden h-px bg-line-strong lg:block"
          />

          {dict.process.stages.map((stage, index) => (
            <li key={stage.index} className="relative flex gap-4 lg:block">
              <Reveal delay={index * 90} className="flex h-full flex-col">
                <span className="relative z-10 grid h-[2.125rem] w-[2.125rem] shrink-0 place-items-center rounded-full border border-line-strong bg-canvas font-mono text-[0.6875rem] font-medium tracking-[0.04em]">
                  {stage.index}
                </span>

                <div className="min-w-0 pb-1 lg:mt-6 flex flex-1 flex-col">
                  <h3 className="font-display text-lg font-semibold leading-tight tracking-[-0.025em]">
                    {stage.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">
                    {stage.description}
                  </p>

                  <div className="mt-4 border-t border-line pt-3">
                    <p className="label text-fg-subtle">{dict.process.output}</p>
                    <p className="mt-1.5 text-[0.6875rem] leading-relaxed text-fg-muted">
                      {stage.deliverables.join(" · ")}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-[60ch] border-l-2 border-lime pl-4 text-sm leading-relaxed text-fg-muted md:mt-16">
          {dict.process.closing}
        </p>
      </div>
    </section>
  );
}
