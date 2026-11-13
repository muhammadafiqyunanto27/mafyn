import type { Dictionary } from "@/content/types";

export const en = {
  meta: {
    title: "MAFYN — Full-stack Development Studio",
    description:
      "MAFYN is a full-stack development studio building websites, custom web applications, and backend systems that solve real business problems.",
    keywords: [
      "full-stack development",
      "web development",
      "custom web applications",
      "software development Indonesia",
      "Next.js development",
      "backend development",
    ],
    ogAlt: "MAFYN — Full-stack development studio",
    ogLocale: "en_US",
    alternateOgLocale: "id_ID",
    inLanguage: "en",
    areaServedWorldwide: "Worldwide",
    offerCatalog: "Development services",
    knowsAbout: [
      "Full-stack development",
      "Web development",
      "Custom web applications",
      "Backend development",
      "Database architecture",
      "Web application maintenance",
    ],
  },
  brand: {
    descriptor: "Development Studio",
    tagline: "Engineering Digital Solutions.",
    message: "We Build Digital Solutions That Move Businesses Forward.",
    description:
      "MAFYN is a full-stack development studio building websites, custom web applications, and backend systems that solve real business problems.",
    location: "Indonesia — working remotely worldwide",
    locationShort: "Indonesia / Remote worldwide",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  a11y: {
    skipToContent: "Skip to content",
    backToTop: "MAFYN — back to top",
    primaryNav: "Primary",
    mobileNav: "Mobile",
    siteNavigation: "Site navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    footerNav: "Footer",
    technologyStack: "Technology stack",
    architecture: "Typical system architecture",
    theme: "Colour theme",
    language: "Language",
  },
  header: {
    talk: "Let's Talk",
    startConversation: "Start a conversation",
  },
  theme: {
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  hero: {
    eyebrow: "Full-stack development studio",
    headline: "We Build Digital Solutions That Move Businesses Forward.",
    description:
      "Full-stack development and custom web applications designed to solve real business problems.",
    primaryCta: "Start a Project",
    secondaryCta: "Explore Our Work",
    verticalTagline: "Engineering Digital Solutions",
    systemModel: {
      title: "System model",
      reference: "Ref. 001",
      layers: [
        {
          index: "01",
          title: "Interface",
          items: "Web app · Dashboard · Marketing site",
        },
        {
          index: "02",
          title: "Application",
          items: "Authentication · Business logic · Jobs",
        },
        {
          index: "03",
          title: "Data",
          items: "PostgreSQL · Storage · Audit trail",
        },
      ],
      connectors: ["HTTPS / JSON", "SQL"],
      footer: ["Clear boundaries", "Built to maintain"],
    },
    workingStack: "Working stack",
  },
  services: {
    label: "Services",
    heading: "Software that does a job for your business.",
    intro:
      "Four focused services, one standard of engineering. Every engagement starts with the business problem, not the technology.",
    typicalWork: "Typical work",
    items: [
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
    ],
  },
  work: {
    label: "Selected works",
    heading: "Selected works",
    intro:
      "Case studies are published only when the work is real and the client has given permission. No client projects are claimed here yet.",
    note: "Every entry below is a clearly labelled placeholder showing the format a verified case study will take. Nothing is presented as delivered client work.",
    pending: "Case study / pending",
    placeholder: "Placeholder",
    problem: "Problem",
    solution: "Solution",
    unpublished: "Unpublished",
    caseStudy: "Case study",
    viewProject: "View project",
    awaitingData: "Awaiting verified data",
  },
  process: {
    label: "Process",
    heading: "A clear path from brief to production.",
    intro:
      "No black boxes. Each stage has a defined output, and you see the work as it happens.",
    output: "Output",
    closing:
      "Scope is agreed before work begins. Changes are discussed openly, priced honestly, and never slipped in silently.",
    stages: [
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
    ],
  },
  about: {
    label: "About MAFYN",
    heading: "Engineering with a business reason.",
    statement:
      "MAFYN focuses on building practical digital solutions through thoughtful engineering, clean architecture, and business-oriented development.",
    paragraphs: [
      "The studio is deliberately small. That means fewer projects at a time, direct collaboration with the person writing the code, and decisions made with full context rather than handed between departments.",
      "We do not claim a long track record. We bring focused engineering, honest scoping, and software written to be maintained after launch.",
    ],
    howWeWorkLabel: "How we work",
    howWeWork:
      "You work directly with the developer building your product, from discovery through deployment and support. No account layer. No diluted requirements.",
    principlesLabel: "Principles",
    principles: [
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
    ],
  },
  contact: {
    label: "Contact",
    heading: "Have a Project in Mind? Let's Build It.",
    intro:
      "Tell us what you are trying to build, what is getting in the way, and what a good outcome looks like. We will reply with a straight answer about whether and how we can help.",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    placeholder: "Placeholder",
    studioLabel: "Studio",
    directNote:
      "Direct collaboration with the developer doing the work. No account managers, no hand-offs.",
    form: {
      title: "Project inquiry",
      replyByEmail: "Reply by email",
      received: "Received",
      requiredNote: "Fields marked * are required.",
      errorTitle: "Inquiry not sent",
      successTitle: "Message received.",
      successBody:
        "Thanks for the details. We'll review your inquiry and reply by email.",
      sendAnother: "Send another inquiry",
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      company: "Company",
      optional: "(optional)",
      companyPlaceholder: "Company or organization",
      projectType: "Project type",
      budget: "Budget range",
      details: "Project details",
      detailsPlaceholder:
        "What are you building, and what needs to change?",
      send: "Send inquiry",
      sending: "Sending inquiry",
      privacy:
        "Your details are used only to reply to this inquiry. No mailing list, no third-party marketing.",
      honeypot: "Leave this field empty",
      projectTypes: [
        { value: "Website", label: "Website" },
        { value: "Web application", label: "Web application" },
        { value: "Backend / API", label: "Backend / API" },
        { value: "Maintenance & support", label: "Maintenance & support" },
        { value: "Not sure", label: "Not sure" },
      ],
      budgets: [
        { value: "Not sure yet", label: "Not sure yet" },
        { value: "Under Rp 10 million", label: "Under Rp 10 million" },
        { value: "Rp 10–30 million", label: "Rp 10–30 million" },
        { value: "Rp 30–75 million", label: "Rp 30–75 million" },
        { value: "Above Rp 75 million", label: "Above Rp 75 million" },
      ],
      errors: {
        name: "Please enter your name (2–80 characters).",
        email: "Please enter a valid email address.",
        company:
          "Company name is too long (120 characters maximum).",
        projectType: "Please choose a project type.",
        budget: "Please choose a budget range.",
        message:
          "Please describe the project in at least 20 characters (3000 maximum).",
        checkFields: "Please check the highlighted fields.",
        rateLimited:
          "Too many inquiries were sent from this connection. Please wait a few minutes and try again.",
        notConnected:
          "The inquiry form is not connected to an inbox yet. Please email {email} directly, or contact us on WhatsApp.",
        deliveryFailed:
          "Something went wrong while sending your inquiry. Please try again, or email {email} directly.",
        couldNotDeliver:
          "The message could not be delivered. Please try again, or email {email} directly.",
        success: "Thanks — your message has been received.",
      },
    },
  },
  footer: {
    navigate: "Navigate",
    services: "Services",
    contact: "Contact",
    whatsapp: "WhatsApp",
    placeholder: "(placeholder)",
    indonesia: "Indonesia",
    workingWorldwide: "Working worldwide",
    rights: "All rights reserved.",
    descriptor: "Full-stack development & custom web applications",
  },
} satisfies Dictionary;
