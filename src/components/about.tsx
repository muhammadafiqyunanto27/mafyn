import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { principles } from "@/content/site";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-ink/15 py-20 md:py-28 lg:py-32"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeader
            index="04"
            label="About MAFYN"
            title={
              <span id="about-heading">
                Engineering with a business reason.
              </span>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <p className="max-w-[24ch] font-display text-[clamp(1.5rem,2.7vw,2.35rem)] leading-[1.28] tracking-[-0.028em]">
              MAFYN focuses on building practical digital solutions through
              thoughtful engineering, clean architecture, and business-oriented
              development.
            </p>

            <div className="mt-8 max-w-[58ch] space-y-5 text-[0.9375rem] leading-relaxed text-ink/65">
              <p>
                The studio is deliberately small. That means fewer projects at a
                time, direct collaboration with the person writing the code, and
                decisions made with full context rather than handed between
                departments.
              </p>
              <p>
                We do not claim a long track record. We bring focused
                engineering, honest scoping, and software written to be
                maintained after launch.
              </p>
            </div>

            <div className="mt-10 max-w-[58ch] border-l-2 border-ink pl-5">
              <p className="label text-ink/45">How we work</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">
                You work directly with the developer building your product, from
                discovery through deployment and support. No account layer. No
                diluted requirements.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5 lg:pl-8">
            <p className="label text-ink/45">Principles</p>
            <ol className="mt-4 border-t border-ink/15">
              {principles.map((principle) => (
                <li
                  key={principle.index}
                  className="grid grid-cols-[2rem_1fr] gap-3 border-b border-ink/15 py-4"
                >
                  <span className="label pt-1 text-ink/40">
                    {principle.index}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-medium tracking-[-0.01em]">
                      {principle.title}
                    </h3>
                    <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink/60">
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
