import Image from "next/image";
import { ArrowUpRight, Info } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { projects, type Project } from "@/content/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const screenshot = project.screenshots[0];
  const placeholder = project.status === "placeholder";

  return (
    <article className="flex flex-col border-b border-r border-ink/15 bg-paper">
      <div className="placeholder-grid relative aspect-[4/3] overflow-hidden border-b border-ink/15 bg-mist">
        {screenshot ? (
          <Image
            src={screenshot}
            alt={`${project.title} interface`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <span className="border border-ink/20 bg-paper px-4 py-2 text-[0.625rem] font-medium uppercase tracking-[0.18em] text-ink/55">
              Case study / pending
            </span>
          </div>
        )}

        <span className="label absolute left-4 top-4 text-ink/45">
          {String(index + 1).padStart(2, "0")}
        </span>
        {placeholder && (
          <span className="absolute right-4 top-4 border border-ink/20 bg-paper px-2 py-1 text-[0.5625rem] font-medium uppercase tracking-[0.16em] text-ink/55">
            Placeholder
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="label text-ink/40">{project.category}</p>
        <h3 className="mt-3 font-display text-xl leading-tight tracking-[-0.02em]">
          {project.title}
        </h3>
        <p className="mt-3 text-[0.8125rem] leading-relaxed text-ink/60">
          {project.summary}
        </p>

        {project.problem && project.solution && (
          <dl className="mt-6 space-y-4 border-t border-ink/15 pt-5">
            <div>
              <dt className="label text-ink/40">Problem</dt>
              <dd className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink/65">
                {project.problem}
              </dd>
            </div>
            <div>
              <dt className="label text-ink/40">Solution</dt>
              <dd className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink/65">
                {project.solution}
              </dd>
            </div>
          </dl>
        )}

        {project.stack.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technology stack">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="border border-ink/15 px-2 py-1 text-[0.625rem] font-medium uppercase tracking-[0.1em] text-ink/55"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-ink/15 pt-4">
          <span className="label text-ink/40">
            {placeholder ? "Unpublished" : "Case study"}
          </span>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[0.75rem] font-medium text-ink/70 transition-colors hover:text-ink"
            >
              View project
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </a>
          ) : (
            <span className="text-[0.75rem] text-ink/45">
              Awaiting verified data
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-t border-ink/15 py-20 md:py-28 lg:py-32"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeader
            index="02"
            label="Selected works"
            title={<span id="work-heading">Selected works</span>}
            intro="Case studies are published only when the work is real and the client has given permission. No client projects are claimed here yet."
          />
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="flex items-start gap-3 border border-ink/15 bg-mist px-4 py-4 sm:px-5">
            <Info
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-ink/50"
              strokeWidth={1.5}
            />
            <p className="text-[0.8125rem] leading-relaxed text-ink/65">
              Every entry below is a clearly labelled placeholder showing the
              format a verified case study will take. Nothing is presented as
              delivered client work.
            </p>
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-8">
          <div className="grid border-t border-l border-ink/15 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
