import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { workingStack } from "@/content/site";

function Layer({
  index,
  title,
  items,
}: {
  index: string;
  title: string;
  items: string;
}) {
  return (
    <div className="border border-ink/15 bg-paper px-3.5 py-3">
      <div className="flex items-center justify-between">
        <span className="label text-ink/45">{index}</span>
        <span aria-hidden="true" className="h-1.5 w-1.5 bg-ink/25" />
      </div>
      <p className="mt-2 font-display text-sm font-medium tracking-[-0.01em]">
        {title}
      </p>
      <p className="mt-0.5 text-xs leading-snug text-ink/60">{items}</p>
    </div>
  );
}

function Connector({ label }: { label: string }) {
  return (
    <div className="flex h-9 items-center gap-3 pl-6">
      <span aria-hidden="true" className="h-full w-px bg-ink/20" />
      <span className="text-[0.5625rem] font-medium uppercase tracking-[0.16em] text-ink/45">
        {label}
      </span>
    </div>
  );
}

function SystemModel() {
  return (
    <aside
      aria-label="Typical system architecture"
      className="border border-ink/15 bg-mist"
    >
      <div className="flex items-center justify-between border-b border-ink/15 px-4 py-3">
        <span className="label text-ink/60">System model</span>
        <span className="label text-ink/40">Ref. 001</span>
      </div>
      <div className="p-4">
        <Layer
          index="01"
          title="Interface"
          items="Web app · Dashboard · Marketing site"
        />
        <Connector label="HTTPS / JSON" />
        <Layer
          index="02"
          title="Application"
          items="Authentication · Business logic · Jobs"
        />
        <Connector label="SQL" />
        <Layer
          index="03"
          title="Data"
          items="PostgreSQL · Storage · Audit trail"
        />
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-ink/15 px-4 py-3">
        <span className="label text-ink/40">Clear boundaries</span>
        <span className="label text-ink/40">Built to maintain</span>
      </div>
    </aside>
  );
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="border-b border-ink/15">
      <div className="container-page pt-8 md:pt-12">
        <div
          className="enter flex items-center justify-between gap-6 border-b border-ink/15 pb-5"
          style={{ "--enter-delay": "0ms" } as CSSProperties}
        >
          <p className="label flex items-center gap-2.5 text-ink/60">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-ink" />
            Full-stack development studio
          </p>
          <p className="label hidden text-ink/50 sm:block">
            Indonesia / Remote worldwide
          </p>
        </div>

        <div className="grid gap-8 pt-10 md:pt-14 lg:grid-cols-12">
          <div
            className="enter lg:col-span-9 xl:col-span-10"
            style={{ "--enter-delay": "80ms" } as CSSProperties}
          >
            <h1
              id="hero-title"
              className="max-w-[16ch] text-[clamp(2.65rem,7.8vw,6.4rem)] font-medium leading-[0.94] tracking-[-0.045em]"
            >
              We Build Digital Solutions That Move Businesses Forward.
            </h1>
          </div>
          <div className="hidden items-end justify-end lg:col-span-3 lg:flex xl:col-span-2">
            <p className="label rotate-180 text-ink/40 [writing-mode:vertical-rl]">
              Engineering Digital Solutions
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-10 border-t border-ink/15 pt-8 md:mt-14 lg:grid-cols-12 lg:gap-8">
          <div
            className="enter lg:col-span-6 xl:col-span-5"
            style={{ "--enter-delay": "160ms" } as CSSProperties}
          >
            <p className="max-w-[46ch] text-[1.0625rem] leading-relaxed text-ink/70 md:text-lg">
              Full-stack development and custom web applications designed to
              solve real business problems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#contact">Start a Project</ButtonLink>
              <ButtonLink href="#work" variant="outline">
                Explore Our Work
              </ButtonLink>
            </div>
          </div>

          <div
            className="enter lg:col-span-5 lg:col-start-8"
            style={{ "--enter-delay": "240ms" } as CSSProperties}
          >
            <SystemModel />
          </div>
        </div>

        <div className="mt-12 border-t border-ink/15 py-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
            <p className="label shrink-0 text-ink/40">Working stack</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {workingStack.map((item) => (
                <li
                  key={item}
                  className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink/65"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
