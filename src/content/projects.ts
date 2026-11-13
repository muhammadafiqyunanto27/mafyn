/**
 * Selected works are data-driven.
 *
 * No client work is claimed yet. Every entry below is a labelled placeholder.
 * To publish a real case study:
 *   1. Replace the title, summary, problem, and solution with verified facts.
 *   2. Add the real stack and a screenshot path (place files in /public/work).
 *   3. Set `status` to "published" and `href` to the live URL (or remove it).
 *   4. Only publish client work with permission.
 *
 * Placeholder entries are intentionally excluded from structured data and are
 * clearly marked in the interface.
 */
export type ProjectStatus = "placeholder" | "published";

export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  problem: string | null;
  solution: string | null;
  stack: string[];
  screenshots: string[];
  href: string | null;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    id: "slot-01",
    title: "Case study slot 01",
    category: "Website",
    summary:
      "Reserved for a verified website project. A published entry will document the brief, the decisions, and the result.",
    problem: null,
    solution: null,
    stack: [],
    screenshots: [],
    href: null,
    status: "placeholder",
  },
  {
    id: "slot-02",
    title: "Case study slot 02",
    category: "Web application",
    summary:
      "Reserved for a verified web application. This slot will show the operational problem and the system built to solve it.",
    problem: null,
    solution: null,
    stack: [],
    screenshots: [],
    href: null,
    status: "placeholder",
  },
  {
    id: "slot-03",
    title: "Case study slot 03",
    category: "Backend system",
    summary:
      "Reserved for a verified backend project. This slot will cover the data model, the API surface, and the integrations involved.",
    problem: null,
    solution: null,
    stack: [],
    screenshots: [],
    href: null,
    status: "placeholder",
  },
];
