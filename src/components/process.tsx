import { SectionHeader } from "@/components/ui/section-header";
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

        <ol className="relative mt-12 grid gap-8 md:mt-16 md:grid-cols-5 md:gap-5">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-[1.0625rem] hidden h-px bg-line-strong md:block"
          />

          {dict.process.stages.map((stage) => (
            <li key={stage.index} className="relative flex gap-4 md:block">
              <span className="relative z-10 grid h-[2.125rem] w-[2.125rem] shrink-0 place-items-center rounded-full border border-line-strong bg-surface font-mono text-[0.6875rem] font-medium tracking-[0.04em] md:bg-canvas">
                {stage.index}
              </span>

              <div className="min-w-0 pb-1 md:mt-6">
                <h3 className="font-display text-lg font-semibold leading-tight tracking-[-0.025em]">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {stage.description}
                </p>

                <div className="mt-4 border-t border-line pt-3">
                  <p className="label text-fg-subtle">{dict.process.output}</p>
                  <p className="mt-1.5 text-[0.6875rem] leading-relaxed text-fg-muted">
                    {stage.deliverables.join(" · ")}
                  </p>
                </div>
              </div>
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
