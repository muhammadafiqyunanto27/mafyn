import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import type { Dictionary } from "@/content/types";

const workingStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
];

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
    <div className="border border-fg/15 bg-canvas px-3.5 py-3">
      <div className="flex items-center justify-between">
        <span className="label text-fg/45">{index}</span>
        <span aria-hidden="true" className="h-1.5 w-1.5 bg-fg/25" />
      </div>
      <p className="mt-2 font-display text-sm font-medium tracking-[-0.01em]">
        {title}
      </p>
      <p className="mt-0.5 text-xs leading-snug text-fg/60">{items}</p>
    </div>
  );
}

function Connector({ label }: { label: string }) {
  return (
    <div className="flex h-9 items-center gap-3 pl-6">
      <span aria-hidden="true" className="h-full w-px bg-fg/20" />
      <span className="text-[0.5625rem] font-medium uppercase tracking-[0.16em] text-fg/45">
        {label}
      </span>
    </div>
  );
}

function SystemModel({ dict }: { dict: Dictionary }) {
  const model = dict.hero.systemModel;

  return (
    <aside
      aria-label={dict.a11y.architecture}
      className="border border-fg/15 bg-panel"
    >
      <div className="flex items-center justify-between border-b border-fg/15 px-4 py-3">
        <span className="label text-fg/60">{model.title}</span>
        <span className="label text-fg/40">{model.reference}</span>
      </div>
      <div className="p-4">
        <Layer {...model.layers[0]} />
        <Connector label={model.connectors[0]} />
        <Layer {...model.layers[1]} />
        <Connector label={model.connectors[1]} />
        <Layer {...model.layers[2]} />
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-fg/15 px-4 py-3">
        <span className="label text-fg/40">{model.footer[0]}</span>
        <span className="label text-fg/40">{model.footer[1]}</span>
      </div>
    </aside>
  );
}

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="border-b border-fg/15"
    >
      <div className="container-page pt-8 md:pt-12">
        <div
          className="enter flex items-center justify-between gap-6 border-b border-fg/15 pb-5"
          style={{ "--enter-delay": "0ms" } as CSSProperties}
        >
          <p className="label flex items-center gap-2.5 text-fg/60">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-fg" />
            {dict.hero.eyebrow}
          </p>
          <p className="label hidden text-fg/50 sm:block">
            {dict.brand.locationShort}
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
              {dict.hero.headline}
            </h1>
          </div>
          <div className="hidden items-end justify-end lg:col-span-3 lg:flex xl:col-span-2">
            <p className="label rotate-180 text-fg/40 [writing-mode:vertical-rl]">
              {dict.hero.verticalTagline}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-10 border-t border-fg/15 pt-8 md:mt-14 lg:grid-cols-12 lg:gap-8">
          <div
            className="enter lg:col-span-6 xl:col-span-5"
            style={{ "--enter-delay": "160ms" } as CSSProperties}
          >
            <p className="max-w-[46ch] text-[1.0625rem] leading-relaxed text-fg/70 md:text-lg">
              {dict.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#contact">{dict.hero.primaryCta}</ButtonLink>
              <ButtonLink href="#work" variant="outline">
                {dict.hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>

          <div
            className="enter lg:col-span-5 lg:col-start-8"
            style={{ "--enter-delay": "240ms" } as CSSProperties}
          >
            <SystemModel dict={dict} />
          </div>
        </div>

        <div className="mt-12 border-t border-fg/15 py-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
            <p className="label shrink-0 text-fg/40">
              {dict.hero.workingStack}
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {workingStack.map((item) => (
                <li
                  key={item}
                  className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-fg/65"
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
