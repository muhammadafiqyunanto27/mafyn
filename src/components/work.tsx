import Image from "next/image";
import { ArrowUpRight, Info } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import {
  getProjects,
  type LocalizedProject,
} from "@/content/projects";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";

function ProjectCard({
  project,
  index,
  dict,
}: {
  project: LocalizedProject;
  index: number;
  dict: Dictionary;
}) {
  const screenshot = project.screenshots[0];
  const placeholder = project.status === "placeholder";
  const copy = dict.work;

  return (
    <article className="flex flex-col border-b border-r border-fg/15 bg-canvas">
      <div className="placeholder-grid relative aspect-[4/3] overflow-hidden border-b border-fg/15 bg-panel">
        {screenshot ? (
          <Image
            src={screenshot}
            alt={`${project.title} — ${copy.caseStudy}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <span className="border border-fg/20 bg-canvas px-4 py-2 text-[0.625rem] font-medium uppercase tracking-[0.18em] text-fg/55">
              {copy.pending}
            </span>
          </div>
        )}

        <span className="label absolute left-4 top-4 text-fg/45">
          {String(index + 1).padStart(2, "0")}
        </span>
        {placeholder && (
          <span className="absolute right-4 top-4 border border-fg/20 bg-canvas px-2 py-1 text-[0.5625rem] font-medium uppercase tracking-[0.16em] text-fg/55">
            {copy.placeholder}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="label text-fg/40">{project.category}</p>
        <h3 className="mt-3 font-display text-xl leading-tight tracking-[-0.02em]">
          {project.title}
        </h3>
        <p className="mt-3 text-[0.8125rem] leading-relaxed text-fg/60">
          {project.summary}
        </p>

        {project.problem && project.solution && (
          <dl className="mt-6 space-y-4 border-t border-fg/15 pt-5">
            <div>
              <dt className="label text-fg/40">{copy.problem}</dt>
              <dd className="mt-1.5 text-[0.8125rem] leading-relaxed text-fg/65">
                {project.problem}
              </dd>
            </div>
            <div>
              <dt className="label text-fg/40">{copy.solution}</dt>
              <dd className="mt-1.5 text-[0.8125rem] leading-relaxed text-fg/65">
                {project.solution}
              </dd>
            </div>
          </dl>
        )}

        {project.stack.length > 0 && (
          <ul
            className="mt-5 flex flex-wrap gap-1.5"
            aria-label={dict.a11y.technologyStack}
          >
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="border border-fg/15 px-2 py-1 text-[0.625rem] font-medium uppercase tracking-[0.1em] text-fg/55"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-fg/15 pt-4">
          <span className="label text-fg/40">
            {placeholder ? copy.unpublished : copy.caseStudy}
          </span>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[0.75rem] font-medium text-fg/70 transition-colors hover:text-fg"
            >
              {copy.viewProject}
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </a>
          ) : (
            <span className="text-[0.75rem] text-fg/45">
              {copy.awaitingData}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export function Work({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const projects = getProjects(locale);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-t border-fg/15 py-20 md:py-28 lg:py-32"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeader
            index="02"
            label={dict.work.label}
            title={<span id="work-heading">{dict.work.heading}</span>}
            intro={dict.work.intro}
          />
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="flex items-start gap-3 border border-fg/15 bg-panel px-4 py-4 sm:px-5">
            <Info
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-fg/50"
              strokeWidth={1.5}
            />
            <p className="text-[0.8125rem] leading-relaxed text-fg/65">
              {dict.work.note}
            </p>
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-8">
          <div className="grid border-t border-l border-fg/15 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                dict={dict}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
