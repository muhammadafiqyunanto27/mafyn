import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { getProjects, type LocalizedProject } from "@/content/projects";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";

function DashboardPreview() {
  return (
    <div aria-hidden="true" className="flex h-full w-full">
      <div className="flex w-1/4 flex-col gap-2 border-r border-butter/10 bg-forest/60 p-3">
        <span className="h-2 w-8 rounded-full bg-lime" />
        <span className="mt-1 h-1.5 w-10 rounded-full bg-butter/25" />
        <span className="h-1.5 w-8 rounded-full bg-butter/20" />
        <span className="h-1.5 w-9 rounded-full bg-butter/20" />
        <span className="mt-auto h-6 w-full rounded-md bg-butter/10" />
      </div>
      <div className="flex-1 space-y-3 p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="h-2.5 w-24 rounded-full bg-butter/45" />
          <span className="h-5 w-16 rounded-full bg-lime/85" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((item) => (
            <div key={item} className="rounded-md border border-butter/10 p-2">
              <span className="block h-1 w-6 rounded-full bg-butter/20" />
              <span className="mt-1.5 block h-2 w-9 rounded-full bg-butter/45" />
            </div>
          ))}
        </div>
        <div className="flex h-20 items-end gap-1.5 rounded-md border border-butter/10 p-2">
          {[42, 58, 36, 72, 50, 84, 64, 92, 70].map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-sm bg-lime/75"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="space-y-1.5">
          <span className="block h-1.5 w-full rounded-full bg-butter/15" />
          <span className="block h-1.5 w-3/4 rounded-full bg-butter/12" />
        </div>
      </div>
    </div>
  );
}

function FormPreview() {
  return (
    <div aria-hidden="true" className="flex h-full flex-col gap-3 p-5">
      <div className="flex items-center justify-between">
        <span className="h-2.5 w-20 rounded-full bg-butter/45" />
        <span className="label text-butter/35">01 / 03</span>
      </div>
      <div className="grid flex-1 gap-2.5 sm:grid-cols-2">
        <div className="space-y-2 rounded-md border border-butter/10 p-3">
          <span className="block h-1.5 w-10 rounded-full bg-butter/25" />
          <span className="block h-6 rounded-sm bg-butter/10" />
          <span className="block h-1.5 w-12 rounded-full bg-butter/25" />
          <span className="block h-6 rounded-sm bg-butter/10" />
        </div>
        <div className="space-y-2 rounded-md border border-lime/30 bg-lime/10 p-3">
          <span className="block h-1.5 w-14 rounded-full bg-lime/70" />
          <span className="block h-6 rounded-sm bg-butter/10" />
          <span className="block h-1.5 w-10 rounded-full bg-butter/25" />
          <span className="mt-2 block h-10 rounded-sm bg-butter/10" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3">
        <span className="h-1.5 w-24 rounded-full bg-butter/15" />
        <span className="h-7 w-20 rounded-full bg-lime" />
      </div>
    </div>
  );
}

function ApiPreview() {
  return (
    <div aria-hidden="true" className="flex h-full flex-col p-5">
      <div className="flex items-center gap-2 border-b border-butter/10 pb-3">
        <span className="h-2 w-2 rounded-full bg-butter/25" />
        <span className="h-2 w-2 rounded-full bg-butter/25" />
        <span className="h-2 w-2 rounded-full bg-lime/70" />
        <span className="ml-2 label text-butter/35">system / deploy</span>
      </div>
      <div className="mt-3 grid flex-1 gap-2 font-mono text-[0.6875rem] leading-relaxed text-butter/55 sm:grid-cols-2">
        {[
          "POST   /api/projects",
          "GET    /api/projects/:id",
          "PATCH  /api/projects/:id",
          "DELETE /api/projects/:id",
          "GET    /api/health",
          "POST   /api/webhooks",
        ].map((line) => (
          <div
            key={line}
            className="flex items-center gap-2 rounded-md border border-butter/10 px-2.5 py-2"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime/70" />
            <span className="truncate">{line}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-butter/10 pt-3">
        <span className="label text-butter/35">200 OK</span>
        <span className="label text-lime/80">healthy</span>
      </div>
    </div>
  );
}

const previews = [DashboardPreview, FormPreview, ApiPreview];

function ProjectVisual({
  project,
  copy,
  index,
  wide,
}: {
  project: LocalizedProject;
  copy: Dictionary["work"];
  index: number;
  wide: boolean;
}) {
  const screenshot = project.screenshots[0];
  const Preview = previews[index % previews.length];

  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden bg-deep-green ${
        wide
          ? "md:aspect-[21/9] lg:aspect-auto lg:h-full"
          : "lg:aspect-auto lg:h-[20rem]"
      }`}
    >
      {screenshot ? (
        <Image
          src={screenshot}
          alt={`${project.title} — ${copy.caseStudy}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      ) : (
        <>
          <div aria-hidden="true" className="grid-texture-inverse absolute inset-0 opacity-20" />
          <div className="absolute inset-0">
            <Preview />
          </div>
        </>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  copy,
  index,
  wide,
  className = "",
}: {
  project: LocalizedProject;
  copy: Dictionary["work"];
  index: number;
  wide: boolean;
  className?: string;
}) {
  const hasLink = Boolean(project.href);

  return (
    <article
      className={`card overflow-hidden ${className} ${
        wide ? "lg:grid lg:grid-cols-12 lg:items-stretch" : ""
      }`}
    >
      <div className={wide ? "lg:col-span-7 lg:h-full" : ""}>
        <ProjectVisual
          project={project}
          copy={copy}
          index={index}
          wide={wide}
        />
      </div>

      <div
        className={`flex flex-col p-6 sm:p-7 ${
          wide ? "lg:col-span-5 lg:justify-center" : ""
        }`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip">{project.category}</span>
          {project.screenshots.length === 0 && (
            <span className="chip border-dashed text-fg-subtle">
              {copy.placeholder}
            </span>
          )}
          <span className="label text-fg-subtle">
            {project.status === "published" ? copy.caseStudy : copy.unpublished}
          </span>
        </div>

        <h3 className="mt-4 max-w-[20ch] font-display text-2xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[1.75rem]">
          {project.title}
        </h3>

        <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-fg-muted">
          {project.summary}
        </p>

        {project.stack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex items-center justify-between gap-4 border-t border-line pt-4">
          <span className="label text-fg-subtle">{copy.awaitingData}</span>
          {hasLink && project.href ? (
            <a
              href={project.href}
              className="inline-flex items-center gap-1.5 text-sm font-medium link-underline"
            >
              {copy.viewProject}
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5"
                strokeWidth={1.75}
              />
            </a>
          ) : (
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-fg-subtle" />
          )}
        </div>
      </div>
    </article>
  );
}

export function Work({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const projects = getProjects(locale);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="section-dark border-y border-line"
    >
      <div className="container-page section-y">
        <SectionHeader
          index="02"
          label={dict.work.label}
          title={<span id="work-heading">{dict.work.heading}</span>}
          intro={dict.work.intro}
        />

        <p className="mt-6 max-w-[62ch] rounded-md border border-line px-4 py-3 text-sm leading-relaxed text-fg-muted">
          {dict.work.note}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-12">
          {projects.map((project, index) => {
            const wide = index === 2;
            const span = wide
              ? "md:col-span-2 lg:col-span-12"
              : index === 0
                ? "lg:col-span-7"
                : "lg:col-span-5";

            return (
              <Reveal key={project.id} delay={index * 100} className={span}>
                <ProjectCard
                  project={project}
                  copy={dict.work}
                  index={index}
                  wide={wide}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
