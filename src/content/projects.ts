import type { Locale } from "@/i18n/config";

/**
 * Selected works are data-driven and bilingual.
 *
 * No client work is claimed yet. Every entry below is a labelled placeholder.
 * To publish a real case study:
 *   1. Replace the English and Indonesian copy with verified facts.
 *   2. Add the real stack and a screenshot path (place files in /public/work).
 *   3. Set `status` to "published" and `href` to the live URL (or remove it).
 *   4. Only publish client work with permission.
 *
 * Placeholder entries are intentionally excluded from structured data and are
 * clearly marked in the interface.
 */
export type ProjectStatus = "placeholder" | "published";

export type ProjectCopy = {
  title: string;
  category: string;
  summary: string;
  problem: string | null;
  solution: string | null;
};

export type Project = {
  id: string;
  stack: string[];
  screenshots: string[];
  href: string | null;
  status: ProjectStatus;
  copy: Record<Locale, ProjectCopy>;
};

export const projects: Project[] = [
  {
    id: "slot-01",
    stack: [],
    screenshots: [],
    href: null,
    status: "placeholder",
    copy: {
      en: {
        title: "Case study slot 01",
        category: "Website",
        summary:
          "Reserved for a verified website project. A published entry will document the brief, the decisions, and the result.",
        problem: null,
        solution: null,
      },
      id: {
        title: "Slot studi kasus 01",
        category: "Website",
        summary:
          "Disiapkan untuk proyek website terverifikasi. Entri yang dipublikasikan akan mendokumentasikan kebutuhan, keputusan, dan hasilnya.",
        problem: null,
        solution: null,
      },
    },
  },
  {
    id: "slot-02",
    stack: [],
    screenshots: [],
    href: null,
    status: "placeholder",
    copy: {
      en: {
        title: "Case study slot 02",
        category: "Web application",
        summary:
          "Reserved for a verified web application. This slot will show the operational problem and the system built to solve it.",
        problem: null,
        solution: null,
      },
      id: {
        title: "Slot studi kasus 02",
        category: "Aplikasi web",
        summary:
          "Disiapkan untuk aplikasi web terverifikasi. Slot ini akan menampilkan masalah operasional dan sistem yang dibangun untuk menyelesaikannya.",
        problem: null,
        solution: null,
      },
    },
  },
  {
    id: "slot-03",
    stack: [],
    screenshots: [],
    href: null,
    status: "placeholder",
    copy: {
      en: {
        title: "Case study slot 03",
        category: "Backend system",
        summary:
          "Reserved for a verified backend project. This slot will cover the data model, the API surface, and the integrations involved.",
        problem: null,
        solution: null,
      },
      id: {
        title: "Slot studi kasus 03",
        category: "Sistem backend",
        summary:
          "Disiapkan untuk proyek backend terverifikasi. Slot ini akan mencakup model data, permukaan API, dan integrasi yang terlibat.",
        problem: null,
        solution: null,
      },
    },
  },
];

export function getProjects(locale: Locale) {
  return projects.map((project) => ({
    ...project,
    ...project.copy[locale],
  }));
}

export type LocalizedProject = ReturnType<typeof getProjects>[number];
