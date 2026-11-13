export type ServiceIcon = "layout" | "layers" | "database" | "wrench";

export type ServiceCopy = {
  index: string;
  title: string;
  icon: ServiceIcon;
  value: string;
  offerings: string[];
};

export type ProcessStageCopy = {
  index: string;
  title: string;
  description: string;
  deliverables: string[];
};

export type PrincipleCopy = {
  index: string;
  title: string;
  description: string;
};

export type SelectOption = {
  value: string;
  label: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogAlt: string;
    ogLocale: string;
    alternateOgLocale: string;
    inLanguage: string;
    areaServedWorldwide: string;
    offerCatalog: string;
    knowsAbout: string[];
  };
  brand: {
    descriptor: string;
    tagline: string;
    message: string;
    description: string;
    location: string;
    locationShort: string;
  };
  a11y: {
    skipToContent: string;
    backToTop: string;
    primaryNav: string;
    mobileNav: string;
    siteNavigation: string;
    openMenu: string;
    closeMenu: string;
    footerNav: string;
    technologyStack: string;
    architecture: string;
    theme: string;
    language: string;
  };
  header: {
    talk: string;
    startConversation: string;
  };
  theme: {
    light: string;
    dark: string;
    system: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    verticalTagline: string;
    systemModel: {
      title: string;
      reference: string;
      layers: [
        { index: string; title: string; items: string },
        { index: string; title: string; items: string },
        { index: string; title: string; items: string },
      ];
      connectors: [string, string];
      footer: [string, string];
    };
    workingStack: string;
  };
  services: {
    label: string;
    heading: string;
    intro: string;
    typicalWork: string;
    items: ServiceCopy[];
  };
  work: {
    label: string;
    heading: string;
    intro: string;
    note: string;
    pending: string;
    placeholder: string;
    problem: string;
    solution: string;
    unpublished: string;
    caseStudy: string;
    viewProject: string;
    awaitingData: string;
  };
  process: {
    label: string;
    heading: string;
    intro: string;
    output: string;
    closing: string;
    stages: ProcessStageCopy[];
  };
  about: {
    label: string;
    heading: string;
    statement: string;
    paragraphs: [string, string];
    howWeWorkLabel: string;
    howWeWork: string;
    principlesLabel: string;
    principles: PrincipleCopy[];
  };
  contact: {
    label: string;
    heading: string;
    intro: string;
    emailLabel: string;
    whatsappLabel: string;
    placeholder: string;
    studioLabel: string;
    directNote: string;
    form: {
      title: string;
      replyByEmail: string;
      received: string;
      requiredNote: string;
      errorTitle: string;
      successTitle: string;
      successBody: string;
      sendAnother: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      company: string;
      optional: string;
      companyPlaceholder: string;
      projectType: string;
      budget: string;
      details: string;
      detailsPlaceholder: string;
      send: string;
      sending: string;
      privacy: string;
      honeypot: string;
      projectTypes: SelectOption[];
      budgets: SelectOption[];
      errors: {
        name: string;
        email: string;
        company: string;
        projectType: string;
        budget: string;
        message: string;
        checkFields: string;
        rateLimited: string;
        notConnected: string;
        deliveryFailed: string;
        couldNotDeliver: string;
        success: string;
      };
    };
  };
  footer: {
    navigate: string;
    services: string;
    contact: string;
    whatsapp: string;
    placeholder: string;
    indonesia: string;
    workingWorldwide: string;
    rights: string;
    descriptor: string;
  };
};
