export const site = {
  name: "MAFYN",
  domain: "mafyn.web.id",
  url: "https://mafyn.web.id",
  tagline: "Engineering Digital Solutions.",
  message: "We Build Digital Solutions That Move Businesses Forward.",
  description:
    "MAFYN is a full-stack development studio building websites, custom web applications, and backend systems that solve real business problems.",
  /**
   * Contact details are placeholders. Confirm the mailbox and WhatsApp number
   * before the site goes live, then update these values in one place.
   */
  email: "hello@mafyn.web.id",
  whatsapp: "+62 8XX-XXXX-XXXX",
  location: "Indonesia — working remotely worldwide",
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export type Service = {
  index: string;
  title: string;
  icon: "layout" | "layers" | "database" | "wrench";
  value: string;
  offerings: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "Website Development",
    icon: "layout",
    value:
      "A clear, fast website that explains what you do, earns trust quickly, and turns visitor attention into real inquiries.",
    offerings: [
      "Landing pages",
      "Company profile websites",
      "Product catalog websites",
    ],
  },
  {
    index: "02",
    title: "Custom Web Applications",
    icon: "layers",
    value:
      "Software shaped around how your business actually operates — replacing scattered spreadsheets and manual work with one dependable system.",
    offerings: [
      "Business management systems",
      "Admin dashboards",
      "Workflow automation",
    ],
  },
  {
    index: "03",
    title: "Backend Development",
    icon: "database",
    value:
      "The reliable layer behind your product: clean APIs, a data model that holds up, and integrations that keep your tools in sync.",
    offerings: [
      "REST APIs",
      "Database architecture",
      "Third-party integrations",
    ],
  },
  {
    index: "04",
    title: "Maintenance & Support",
    icon: "wrench",
    value:
      "Steady care after launch, so small issues are fixed before they become emergencies and the product keeps improving.",
    offerings: [
      "Website maintenance",
      "Bug fixes",
      "Performance optimization",
    ],
  },
];

export type ProcessStage = {
  index: string;
  title: string;
  description: string;
  deliverables: string[];
};

export const processStages: ProcessStage[] = [
  {
    index: "01",
    title: "Discovery",
    description:
      "We start with the business, the users, and the constraints. The goal is to understand what success looks like before proposing a single feature.",
    deliverables: ["Project brief", "Success criteria"],
  },
  {
    index: "02",
    title: "Planning",
    description:
      "Scope, architecture, and milestones are defined together. You get a clear picture of what will be built, in what order, and why.",
    deliverables: ["Scope & milestones", "Data model", "Technical plan"],
  },
  {
    index: "03",
    title: "Development",
    description:
      "The product is built in reviewable increments. A working preview is available at every checkpoint, so feedback arrives while it is still inexpensive.",
    deliverables: ["Interface system", "Working builds", "Quality review"],
  },
  {
    index: "04",
    title: "Deployment",
    description:
      "Launch is handled as an engineering task, not an afterthought: performance, metadata, analytics, and a handover you can actually use.",
    deliverables: ["Production launch", "Documentation", "Handover"],
  },
  {
    index: "05",
    title: "Support",
    description:
      "After release we stay available for fixes, improvements, and measured iterations as the business and its needs change.",
    deliverables: ["Monitoring", "Bug fixes", "Iteration"],
  },
];

export const principles = [
  {
    index: "01",
    title: "Clarity before code",
    description:
      "If the problem is not defined, the software will not solve it. We agree on the outcome before writing implementation.",
  },
  {
    index: "02",
    title: "Architecture that lasts",
    description:
      "Simple, documented structures that the next developer can read, extend, and maintain without guesswork.",
  },
  {
    index: "03",
    title: "Business-first decisions",
    description:
      "Every technical trade-off is measured against real value: time saved, revenue gained, risk reduced.",
  },
  {
    index: "04",
    title: "Direct communication",
    description:
      "Plain language, visible progress, and honest timelines. No layers, no surprises, no jargon used as a shield.",
  },
] as const;

export const workingStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
] as const;
