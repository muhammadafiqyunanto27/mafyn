import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/content/site";
import type { Dictionary } from "@/content/types";

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
];

function SystemPreview({ dict }: { dict: Dictionary }) {
  const model = dict.hero.systemModel;
  const navItems = dict.nav.slice(0, 3);

  return (
    <div aria-hidden="true" className="relative lg:h-full">
      <div className="relative h-full overflow-hidden rounded-xl border border-line bg-deep-green p-2.5 sm:p-3">
        <div className="relative flex min-h-[20rem] h-full flex-col overflow-hidden rounded-lg bg-canvas text-fg lg:min-h-0">
          <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-fg/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-fg/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-fg/20" />
            <span className="ml-2 truncate rounded-full bg-surface px-2.5 py-0.5 font-mono text-[0.625rem] tracking-[0.02em] text-fg-muted">
              {site.domain}
            </span>
            <span className="label ml-auto hidden text-fg-subtle sm:block">
              {model.reference}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3 px-4 pt-3">
            <span className="flex items-center gap-1.5">
              <span className="grid h-5 w-5 place-items-center rounded-[0.3rem] bg-lime font-display text-[0.625rem] font-bold text-forest">
                M
              </span>
              <span className="font-display text-[0.75rem] font-semibold tracking-[0.14em]">
                MAFYN
              </span>
            </span>

            <span className="hidden items-center gap-3 font-mono text-[0.625rem] uppercase tracking-[0.08em] text-fg-muted sm:flex">
              {navItems.map((item) => (
                <span key={item.href}>{item.label}</span>
              ))}
            </span>

            <span className="rounded-full bg-fg px-2.5 py-1 font-mono text-[0.5625rem] font-medium uppercase tracking-[0.06em] text-canvas">
              {dict.header.talk}
            </span>
          </div>

          <div className="flex flex-col gap-2 px-4 pt-5">
            <span className="eyebrow text-fg-muted">{dict.hero.eyebrow}</span>
            <p className="display-sub max-w-[18ch] text-[1.15rem] leading-[1.05]">
              {dict.brand.tagline}
            </p>
            <p className="max-w-[34ch] text-[0.6875rem] leading-relaxed text-fg-muted">
              {dict.hero.description}
            </p>
            <span className="mt-1 flex flex-wrap items-center gap-1.5">
              <span className="rounded-full bg-lime px-2.5 py-1 text-[0.625rem] font-semibold text-forest">
                {dict.hero.primaryCta}
              </span>
              <span className="rounded-full border border-line-strong px-2.5 py-1 text-[0.625rem] font-semibold text-fg">
                {dict.hero.secondaryCta}
              </span>
            </span>
          </div>

          <div className="relative m-4 flex-1 overflow-hidden rounded-md border border-line bg-deep-green">
            <div className="grid-texture-inverse absolute inset-0 opacity-30" />
            <div
              aria-hidden="true"
              className="absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-lime"
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 200 200"
              className="absolute right-2 top-1/2 h-28 w-28 -translate-y-1/2 text-forest/35 sm:h-36 sm:w-36"
              fill="none"
            >
              <circle cx="100" cy="100" r="34" stroke="currentColor" />
              <circle cx="100" cy="100" r="64" stroke="currentColor" />
              <circle cx="100" cy="100" r="94" stroke="currentColor" />
            </svg>
            <div className="relative flex h-full flex-col justify-between p-3">
              <span className="label text-butter/60">{model.title}</span>
              <div className="flex flex-wrap gap-1.5">
                {model.connectors.map((connector) => (
                  <span
                    key={connector}
                    className="rounded-full border border-butter/25 bg-forest/40 px-2 py-0.5 font-mono text-[0.5625rem] uppercase tracking-[0.06em] text-butter/70"
                  >
                    {connector}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 px-4 pb-4">
            {model.layers.map((layer) => (
              <div
                key={layer.index}
                className="rounded-md border border-line bg-surface px-2 py-1.5"
              >
                <p className="font-mono text-[0.5rem] text-fg-subtle">
                  {layer.index}
                </p>
                <p className="mt-0.5 truncate text-[0.625rem] font-medium leading-tight">
                  {layer.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="top" aria-labelledby="hero-title" className="border-b border-line">
      <div className="container-page pt-6 pb-12 sm:pt-8 lg:pb-20">
        <div
          className="enter flex items-center justify-between gap-4 border-b border-line pb-4"
          style={{ "--enter-delay": "0ms" } as CSSProperties}
        >
          <p className="eyebrow text-fg-muted">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-lime ring-1 ring-fg/25" />
            {dict.hero.eyebrow}
          </p>
          <p className="label hidden text-fg-subtle sm:block">
            {dict.brand.locationShort}
          </p>
        </div>

        <div className="grid items-end gap-10 pt-10 sm:pt-12 lg:grid-cols-12 lg:items-stretch lg:gap-10 lg:pt-16">
          <div
            className="enter lg:col-span-7"
            style={{ "--enter-delay": "80ms" } as CSSProperties}
          >
            <h1 id="hero-title" className="display-hero max-w-[13ch]">
              {dict.hero.headline}
            </h1>

            <p className="mt-6 max-w-[48ch] text-base leading-relaxed text-fg-muted sm:text-lg">
              {dict.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="#contact" size="lg">
                {dict.hero.primaryCta}
              </ButtonLink>
              <ButtonLink
                href="#work"
                variant="secondary"
                size="lg"
                withIcon={false}
              >
                {dict.hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>

          <div
            className="enter lg:col-span-5"
            style={{ "--enter-delay": "160ms" } as CSSProperties}
          >
            <SystemPreview dict={dict} />
          </div>
        </div>

        <div className="mt-12 overflow-hidden border-y border-line py-3 lg:mt-16">
          <div className="marquee-track flex w-max items-center gap-6">
            {[0, 1].map((pass) => (
              <div key={pass} className="flex items-center gap-6" aria-hidden={pass === 1}>
                {stack.map((item) => (
                  <span
                    key={`${pass}-${item}`}
                    className="flex items-center gap-6 label text-fg-subtle"
                  >
                    {item}
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-line-strong"
                    />
                  </span>
                ))}
                <span className="label text-fg-subtle">
                  {dict.hero.workingStack}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
