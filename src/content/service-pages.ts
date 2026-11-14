import type { Locale } from "@/i18n/config";

export type ServicePageKey = "website" | "webapp" | "landing" | "backend";

export type ServicePage = {
  key: ServicePageKey;
  slug: string;
  /** Short service name used in links, breadcrumbs and structured data. */
  name: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  heading: string;
  intro: string;
  outcomes: string[];
  sections: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  stack: string[];
  faq: { question: string; answer: string }[];
  related: ServicePageKey[];
  ctaHeading: string;
  ctaBody: string;
};

export type ServicePageUi = {
  breadcrumb: string;
  breadcrumbAria: string;
  outcomesLabel: string;
  stackLabel: string;
  faqLabel: string;
  relatedLabel: string;
  contactCta: string;
  backHome: string;
};

export const servicePageUi: Record<Locale, ServicePageUi> = {
  en: {
    breadcrumb: "Home",
    breadcrumbAria: "Breadcrumb",
    outcomesLabel: "What you get",
    stackLabel: "Typical stack",
    faqLabel: "Common questions",
    relatedLabel: "Related services",
    contactCta: "Discuss your project",
    backHome: "Back to home",
  },
  id: {
    breadcrumb: "Beranda",
    breadcrumbAria: "Breadcrumb",
    outcomesLabel: "Yang Anda dapatkan",
    stackLabel: "Stack yang umum dipakai",
    faqLabel: "Pertanyaan umum",
    relatedLabel: "Layanan terkait",
    contactCta: "Diskusikan project Anda",
    backHome: "Kembali ke beranda",
  },
};

export const servicePages: Record<Locale, Record<ServicePageKey, ServicePage>> = {
  en: {
    website: {
      key: "website",
      slug: "website-development",
      metaTitle: "Website Development Services for Growing Businesses",
      name: "Website Development",
      metaDescription:
        "MAFYN builds fast, credible business websites with custom design, strong SEO foundations, and clean handover. Indonesia-based, working worldwide.",
      keywords: [
        "website development",
        "business website development",
        "company profile website",
        "Next.js website development",
        "web developer Indonesia",
      ],
      eyebrow: "Services / 01",
      heading: "Websites that earn trust before the first call.",
      intro:
        "A business website is not a brochure. It is the first place a prospect decides whether you look credible. MAFYN designs and builds sites that load fast, explain the offer clearly, and give people an obvious next step.",
      outcomes: [
        "A custom layout built around your services, not a recycled template",
        "Production-ready code with sensible content structure",
        "Technical SEO foundations: metadata, sitemap, structured data",
        "Documentation and handover so the site can be maintained",
      ],
      sections: [
        {
          title: "When a website becomes the bottleneck",
          paragraphs: [
            "Most website problems are not visual. They are structural: the offer is buried, the pages load slowly, the contact path is unclear, or every update needs a developer. The redesign fixes the surface while the underlying problem stays.",
            "We start from the questions a real buyer asks: what is this company, what does it sell, can it deliver, and how do I start? The information architecture, copy structure, and page templates are built to answer those questions in order.",
          ],
          bullets: [
            "Clear hierarchy from the first screen to the contact form",
            "Mobile layout treated as the primary layout, not a fallback",
            "Editable content sections instead of hardcoded text blocks",
            "Analytics-ready structure for measuring real inquiries",
          ],
        },
        {
          title: "What the build includes",
          paragraphs: [
            "Every project includes a design system, responsive implementation, accessibility checks, and a production build. Pages are generated as static HTML where possible so the site stays fast without extra infrastructure.",
            "We do not ship a page that only looks finished in a screenshot. Forms are validated, metadata is complete, links resolve, and the layout is tested at desktop, tablet, and mobile widths in both light and dark themes.",
          ],
        },
        {
          title: "How we work",
          paragraphs: [
            "Projects run in short reviewable increments. You see a working preview early, so feedback arrives while changes are still inexpensive. Scope, milestones, and technical decisions are agreed before implementation starts.",
            "Handover is part of the work, not an afterthought: the codebase is documented, the deployment is reproducible, and you are not locked into a single person to make a text change.",
          ],
        },
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "Vercel", "Core Web Vitals"],
      faq: [
        {
          question: "Do you use templates or page builders?",
          answer:
            "The layout is designed and implemented for the project. We may reuse our own internal components, but the information structure and visual system are built around your business rather than a purchased theme.",
        },
        {
          question: "Can the site be updated without a developer?",
          answer:
            "Where content changes often, we integrate a CMS and define editable sections. Static marketing pages can stay in code when that is simpler and cheaper to maintain.",
        },
        {
          question: "What do you need to start?",
          answer:
            "A short description of the business, the pages you expect, and any existing brand assets. If those do not exist yet, we can define the structure and content plan together first.",
        },
      ],
      related: ["landing", "webapp"],
      ctaHeading: "Need a website that does a job?",
      ctaBody:
        "Tell us what the site should accomplish and who it needs to convince. We will reply with a clear scope and next steps.",
    },
    webapp: {
      key: "webapp",
      slug: "custom-web-application",
      metaTitle: "Custom Web Application Development",
      name: "Custom Web Application",
      metaDescription:
        "Custom web apps built around real workflows: authentication, dashboards, integrations, maintainable architecture. Full-stack development from Indonesia.",
      keywords: [
        "custom web application",
        "web app development",
        "full-stack developer",
        "business dashboard development",
        "internal tools development",
      ],
      eyebrow: "Services / 02",
      heading: "Software shaped around the way your team actually works.",
      intro:
        "Off-the-shelf tools force a business to adapt to the software. A custom web application does the opposite: it models your real process, removes manual steps, and keeps the data in one place.",
      outcomes: [
        "A scoped application with defined user roles and permissions",
        "Reliable data model and server-side validation",
        "Dashboard or interface designed for daily use, not for demos",
        "Deployment, documentation, and a maintainable codebase",
      ],
      sections: [
        {
          title: "What custom software is good for",
          paragraphs: [
            "Custom development makes sense when the process is a real source of cost: repeated spreadsheets, manual reconciliation, approvals over chat, or data spread across tools that do not talk to each other.",
            "It is the wrong choice when a proven product already covers the need. Part of our job is telling you which situation you are in before any code is written.",
          ],
          bullets: [
            "Internal operations: requests, approvals, records, reporting",
            "Customer portals and authenticated self-service",
            "Workflow automation around existing systems",
            "Data consolidation with a single source of truth",
          ],
        },
        {
          title: "Architecture and security",
          paragraphs: [
            "The application is built in layers: interface, business logic, and data access. Authorization is enforced on the server for every resource, not just hidden in the UI. Input is validated where it enters the system.",
            "Sensitive configuration lives in environment variables, sessions are handled by established libraries, and database access goes through a typed data layer. Security decisions are documented so the next developer can audit them.",
          ],
        },
        {
          title: "Delivery",
          paragraphs: [
            "We work in reviewable increments with a working environment from week one. Each milestone ends with something you can open, test, and give feedback on.",
            "Before launch we verify permissions, error states, empty states, and slow-network behaviour, because those are the paths real users hit first.",
          ],
        },
      ],
      stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      faq: [
        {
          question: "Can you improve an existing application?",
          answer:
            "Yes, if the current stack can be maintained. We start with a short technical review, identify the highest-risk areas, and propose incremental changes instead of a rewrite by default.",
        },
        {
          question: "How do you handle changing requirements?",
          answer:
            "Changes are expected. We keep scope explicit, estimate the impact, and adjust the plan together. Small changes are absorbed inside a milestone; larger ones become a new agreed step.",
        },
        {
          question: "Who owns the code?",
          answer:
            "You do. The repository, documentation, and deployment configuration are handed over at the end of the engagement.",
        },
      ],
      related: ["backend", "website"],
      ctaHeading: "Have a workflow that needs software?",
      ctaBody:
        "Describe the process and where it breaks today. We will tell you honestly whether custom software is the right answer.",
    },
    landing: {
      key: "landing",
      slug: "landing-page-development",
      metaTitle: "Landing Page Development for Campaigns",
      name: "Landing Page Development",
      metaDescription:
        "Conversion-focused landing pages: clear offer, fast mobile load, measurable inquiry flow, and independent deployment for campaigns and product launches.",
      keywords: [
        "landing page development",
        "conversion landing page",
        "campaign landing page",
        "landing page design Indonesia",
        "high-converting landing page",
      ],
      eyebrow: "Services / 03",
      heading: "One page, one goal, no distractions.",
      intro:
        "A landing page has a single job: turn attention into a specific action. That means one argument, one audience, and one next step — supported by fast loading and a form that does not fight the visitor.",
      outcomes: [
        "A focused page structure built around one conversion goal",
        "Copy hierarchy that answers objections in the right order",
        "Fast mobile experience with a short, validated form",
        "Tracking hooks so results can be measured, not guessed",
      ],
      sections: [
        {
          title: "Built for a specific campaign",
          paragraphs: [
            "Landing pages fail when they inherit the whole company website. A visitor arriving from an ad should not have to navigate a menu to understand the offer.",
            "We define the audience, the promise, the proof, and the action before designing anything. Sections earn their place by moving the visitor closer to that action.",
          ],
          bullets: [
            "Message matched to the traffic source",
            "Minimal navigation and a repeated primary action",
            "Proof and objection handling without invented claims",
            "Thank-you state and confirmation that sets expectations",
          ],
        },
        {
          title: "Performance is part of conversion",
          paragraphs: [
            "Most campaign traffic is mobile and impatient. The page ships as static HTML with optimized fonts and images, so the first screen appears quickly and the layout does not jump while it loads.",
            "Forms are validated on the server, protected with rate limiting, and given clear error messages. A page that looks convincing but loses the inquiry at submit has failed its only job.",
          ],
        },
        {
          title: "Independent from the main site",
          paragraphs: [
            "The page can live on its own domain or path, so a campaign never risks the main website. It can also reuse the brand system and be extended into a full site later.",
            "We hand over the source, deployment configuration, and a short guide for editing copy between campaigns.",
          ],
        },
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Server actions", "Vercel", "Analytics"],
      faq: [
        {
          question: "Can you write the copy too?",
          answer:
            "We structure and edit copy as part of the page. If you already have messaging or a brand guide, we work within it. We do not invent testimonials, client names, or performance numbers.",
        },
        {
          question: "Do you integrate ads or analytics?",
          answer:
            "Yes. We add the tracking events that matter for the campaign and keep the implementation privacy-conscious. Ad account setup itself stays with your marketing team.",
        },
        {
          question: "How is this different from a full website?",
          answer:
            "A landing page is narrower by design: one audience, one offer, one action. If you need multiple services, navigation, and long-term content, a full website is the better starting point.",
        },
      ],
      related: ["website", "webapp"],
      ctaHeading: "Launching a campaign soon?",
      ctaBody:
        "Send the offer, the audience, and the action you want people to take. We will propose a page structure that supports it.",
    },
    backend: {
      key: "backend",
      slug: "backend-development",
      metaTitle: "Backend Development & API Engineering",
      name: "Backend Development",
      metaDescription:
        "Backend development for web products: API design, database modelling, authentication, background jobs, and integrations. Built to be maintained.",
      keywords: [
        "backend development",
        "API development",
        "backend developer Indonesia",
        "database design",
        "authentication implementation",
      ],
      eyebrow: "Services / 04",
      heading: "The part users never see is the part that decides reliability.",
      intro:
        "A backend is a contract: predictable data, enforced rules, and responses fast enough to keep the interface usable. We build that layer so the product can grow without accumulating fragile workarounds.",
      outcomes: [
        "A documented API with consistent error handling",
        "Normalized data model with constraints where they belong",
        "Authentication and server-side authorization",
        "Background jobs, integrations, and operational visibility",
      ],
      sections: [
        {
          title: "Data and business rules",
          paragraphs: [
            "The schema is designed before the endpoints. Relationships, uniqueness, and state transitions are enforced in the database and the service layer, so invalid data cannot enter through a second path.",
            "Migrations are versioned and reversible. Reporting needs are considered early, because a model that suits the form but not the report becomes expensive later.",
          ],
          bullets: [
            "Typed access layer and explicit transaction boundaries",
            "Validation at the edge and in the domain layer",
            "Indexes chosen for real query patterns",
            "Audit trails for changes that need to be traceable",
          ],
        },
        {
          title: "APIs and integrations",
          paragraphs: [
            "APIs are designed for the client that consumes them: consistent naming, pagination, filtering, and error shapes that a frontend can actually display.",
            "Third-party integrations are wrapped behind an internal interface, so a provider change does not require rewriting the application. Webhooks are verified and made idempotent.",
          ],
        },
        {
          title: "Operations",
          paragraphs: [
            "Production readiness includes structured logs, health checks, rate limiting, and a deployment process that can be repeated. Failures should be diagnosable without guessing.",
            "We document the architecture and the decisions behind it, and hand over the environment configuration so another engineer can continue the work.",
          ],
        },
      ],
      stack: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "REST", "Redis", "Docker"],
      faq: [
        {
          question: "Can you work with our existing frontend?",
          answer:
            "Yes. We can implement the API against an agreed contract, or review and extend an existing backend without changing the interface your team already ships.",
        },
        {
          question: "Do you handle deployment and monitoring?",
          answer:
            "We set up repeatable deployment and baseline monitoring as part of the work. Ongoing operations can be included in a support arrangement.",
        },
        {
          question: "How do you approach security?",
          answer:
            "Server-side authorization for every resource, validated input, hashed credentials, signed sessions, rate limiting, and no secrets in the repository. We document the threat-sensitive parts of the system.",
        },
      ],
      related: ["webapp", "website"],
      ctaHeading: "Need a backend that will hold up?",
      ctaBody:
        "Share the data you handle, the systems you need to connect, and the load you expect. We will propose an architecture and a delivery plan.",
    },
  },
  id: {
    website: {
      key: "website",
      slug: "jasa-pembuatan-website",
      metaTitle: "Jasa Pembuatan Website Profesional untuk Bisnis",
      name: "Jasa Pembuatan Website",
      metaDescription:
        "Jasa pembuatan website profesional: desain custom, performa cepat, fondasi SEO, dan handover rapi. Studio full-stack development Indonesia.",
      keywords: [
        "jasa pembuatan website",
        "jasa website profesional",
        "jasa web developer",
        "jasa pembuatan company profile",
        "jasa pembuatan website Indonesia",
        "web developer Indonesia",
      ],
      eyebrow: "Layanan / 01",
      heading: "Jasa pembuatan website yang siap dipakai bisnis.",
      intro:
        "Website bukan sekadar brosur digital. Di situlah calon klien pertama kali menilai apakah bisnis Anda kredibel. MAFYN membangun website yang cepat, menjelaskan layanan dengan jelas, dan memberi satu langkah berikutnya yang obvious.",
      outcomes: [
        "Layout custom yang dibangun dari layanan Anda, bukan template daur ulang",
        "Kode production-ready dengan struktur konten yang masuk akal",
        "Fondasi technical SEO: metadata, sitemap, structured data",
        "Dokumentasi dan handover agar website bisa di-maintain",
      ],
      sections: [
        {
          title: "Kapan website jadi bottleneck",
          paragraphs: [
            "Masalah website jarang murni visual. Biasanya struktural: penawaran terkubur, halaman lambat, jalur kontak tidak jelas, atau setiap perubahan kecil harus menunggu developer. Redesign hanya memperbaiki permukaan, masalahnya tetap.",
            "Kami mulai dari pertanyaan yang benar-benar ditanyakan calon klien: ini perusahaan apa, jual apa, bisa dipercaya tidak, dan bagaimana cara mulai? Struktur informasi, hierarki copy, dan template halaman disusun untuk menjawabnya secara berurutan.",
          ],
          bullets: [
            "Hierarki jelas dari layar pertama sampai form kontak",
            "Layout mobile diperlakukan sebagai layout utama, bukan cadangan",
            "Section konten yang mudah diedit, bukan blok teks hardcoded",
            "Struktur siap analytics untuk mengukur inquiry nyata",
          ],
        },
        {
          title: "Apa saja yang termasuk",
          paragraphs: [
            "Setiap project mencakup design system, implementasi responsive, pengecekan aksesibilitas, dan production build. Halaman dibuat sebagai static HTML bila memungkinkan supaya tetap cepat tanpa infrastruktur tambahan.",
            "Kami tidak menyerahkan halaman yang hanya terlihat jadi di screenshot. Form divalidasi, metadata lengkap, link berfungsi, dan layout diuji di desktop, tablet, serta mobile pada light dan dark theme.",
          ],
        },
        {
          title: "Cara kerja",
          paragraphs: [
            "Project berjalan dalam increment kecil yang bisa direview. Anda melihat preview yang berfungsi lebih awal, jadi feedback masuk saat perubahan masih murah. Scope, milestone, dan keputusan teknis disepakati sebelum implementasi.",
            "Handover adalah bagian dari pekerjaan: codebase terdokumentasi, deployment bisa diulang, dan Anda tidak terkunci pada satu orang hanya untuk mengubah teks.",
          ],
        },
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "Vercel", "Core Web Vitals"],
      faq: [
        {
          question: "Apakah pakai template atau page builder?",
          answer:
            "Layout dirancang dan diimplementasikan untuk project tersebut. Kami boleh memakai komponen internal sendiri, tetapi struktur informasi dan sistem visual dibangun mengikuti bisnis Anda, bukan theme yang dibeli.",
        },
        {
          question: "Apakah website bisa diupdate tanpa developer?",
          answer:
            "Jika konten sering berubah, kami integrasikan CMS dan mendefinisikan section yang bisa diedit. Halaman marketing statis tetap di kode bila itu lebih sederhana dan murah untuk di-maintain.",
        },
        {
          question: "Apa yang dibutuhkan untuk mulai?",
          answer:
            "Deskripsi singkat bisnis, halaman yang dibutuhkan, dan aset brand yang sudah ada. Kalau belum ada, kami bisa bantu susun struktur dan rencana kontennya lebih dulu.",
        },
      ],
      related: ["landing", "webapp"],
      ctaHeading: "Butuh website yang benar-benar bekerja?",
      ctaBody:
        "Ceritakan tujuan website dan siapa yang perlu diyakinkan. Kami akan balas dengan scope dan langkah berikutnya yang jelas.",
    },
    webapp: {
      key: "webapp",
      slug: "jasa-custom-web-application",
      metaTitle: "Jasa Custom Web Application & Web App Development",
      name: "Jasa Custom Web Application",
      metaDescription:
        "Jasa custom web application untuk workflow nyata: autentikasi, dashboard, integrasi, dan arsitektur maintainable. Full-stack development dari Indonesia.",
      keywords: [
        "jasa custom web application",
        "jasa web app development",
        "jasa full-stack developer",
        "jasa pembuatan dashboard",
        "jasa internal tools",
        "web app custom Indonesia",
      ],
      eyebrow: "Layanan / 02",
      heading: "Software yang mengikuti cara kerja tim Anda.",
      intro:
        "Tools off-the-shelf memaksa bisnis menyesuaikan diri dengan software. Custom web application melakukan sebaliknya: memodelkan proses nyata, menghapus langkah manual, dan menyatukan data di satu tempat.",
      outcomes: [
        "Aplikasi dengan scope jelas, role, dan permission yang terdefinisi",
        "Data model yang rapi dan validasi di sisi server",
        "Dashboard atau interface yang dirancang untuk pemakaian harian",
        "Deployment, dokumentasi, dan codebase yang maintainable",
      ],
      sections: [
        {
          title: "Kapan custom software masuk akal",
          paragraphs: [
            "Custom development masuk akal ketika prosesnya benar-benar menimbulkan biaya: spreadsheet berulang, rekonsiliasi manual, approval lewat chat, atau data tersebar di tools yang tidak saling terhubung.",
            "Custom adalah pilihan yang salah jika produk yang sudah ada memang memenuhi kebutuhan. Bagian dari pekerjaan kami adalah memberi tahu Anda sedang di posisi mana sebelum satu baris kode ditulis.",
          ],
          bullets: [
            "Operasional internal: request, approval, pencatatan, reporting",
            "Customer portal dan self-service dengan autentikasi",
            "Workflow automation di sekitar sistem yang sudah ada",
            "Konsolidasi data dengan satu sumber kebenaran",
          ],
        },
        {
          title: "Arsitektur dan keamanan",
          paragraphs: [
            "Aplikasi dibangun berlapis: interface, business logic, dan akses data. Authorization ditegakkan di server untuk setiap resource, bukan hanya disembunyikan di UI. Input divalidasi saat masuk ke sistem.",
            "Konfigurasi sensitif disimpan di environment variable, session ditangani library yang mapan, dan akses database lewat typed data layer. Keputusan keamanan didokumentasikan agar developer berikutnya bisa mengauditnya.",
          ],
        },
        {
          title: "Delivery",
          paragraphs: [
            "Kami bekerja dalam increment yang bisa direview, dengan environment yang berfungsi sejak minggu pertama. Setiap milestone berakhir dengan sesuatu yang bisa dibuka, diuji, dan diberi feedback.",
            "Sebelum launch kami cek permission, error state, empty state, dan perilaku di koneksi lambat, karena jalur itulah yang pertama kali dialami user nyata.",
          ],
        },
      ],
      stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      faq: [
        {
          question: "Bisa memperbaiki aplikasi yang sudah ada?",
          answer:
            "Bisa, selama stack-nya masih bisa di-maintain. Kami mulai dengan technical review singkat, menandai area paling berisiko, lalu mengusulkan perubahan bertahap alih-alih langsung rewrite.",
        },
        {
          question: "Bagaimana kalau requirement berubah?",
          answer:
            "Perubahan itu normal. Scope kami jaga tetap eksplisit, dampaknya diestimasi, dan rencana disesuaikan bersama. Perubahan kecil diserap dalam milestone; yang besar menjadi langkah baru yang disepakati.",
        },
        {
          question: "Siapa pemilik kode?",
          answer:
            "Anda. Repository, dokumentasi, dan konfigurasi deployment diserahkan di akhir engagement.",
        },
      ],
      related: ["backend", "website"],
      ctaHeading: "Ada workflow yang butuh software?",
      ctaBody:
        "Ceritakan prosesnya dan di mana macetnya hari ini. Kami akan jujur mengatakan apakah custom software adalah jawabannya.",
    },
    landing: {
      key: "landing",
      slug: "jasa-landing-page",
      metaTitle: "Jasa Pembuatan Landing Page untuk Campaign",
      name: "Jasa Pembuatan Landing Page",
      metaDescription:
        "Jasa landing page yang fokus konversi: penawaran jelas, mobile cepat, alur inquiry terukur, dan deployment mandiri untuk campaign.",
      keywords: [
        "jasa landing page",
        "jasa pembuatan landing page",
        "landing page conversion",
        "landing page campaign",
        "landing page profesional Indonesia",
      ],
      eyebrow: "Layanan / 03",
      heading: "Satu halaman, satu tujuan, tanpa distraksi.",
      intro:
        "Landing page hanya punya satu tugas: mengubah perhatian menjadi aksi spesifik. Satu argumen, satu audiens, satu langkah berikutnya — didukung loading cepat dan form yang tidak melawan pengunjung.",
      outcomes: [
        "Struktur halaman yang fokus pada satu conversion goal",
        "Hierarki copy yang menjawab objection di urutan tepat",
        "Pengalaman mobile cepat dengan form singkat dan tervalidasi",
        "Tracking hook supaya hasil bisa diukur, bukan ditebak",
      ],
      sections: [
        {
          title: "Dibangun untuk campaign spesifik",
          paragraphs: [
            "Landing page gagal ketika ia mewarisi seluruh isi website perusahaan. Pengunjung dari iklan tidak seharusnya harus menavigasi menu untuk memahami penawaran.",
            "Kami definisikan audiens, janji, bukti, dan aksi sebelum mendesain. Setiap section harus punya alasan untuk ada, yaitu mendekatkan pengunjung ke aksi tersebut.",
          ],
          bullets: [
            "Pesan disesuaikan dengan sumber traffic",
            "Navigasi minimal dan primary action yang diulang",
            "Bukti dan penanganan objection tanpa klaim karangan",
            "Thank-you state dan konfirmasi yang mengatur ekspektasi",
          ],
        },
        {
          title: "Performa adalah bagian dari konversi",
          paragraphs: [
            "Mayoritas traffic campaign datang dari mobile dan tidak sabar. Halaman dikirim sebagai static HTML dengan font dan image yang dioptimasi, jadi layar pertama muncul cepat dan layout tidak bergeser saat loading.",
            "Form divalidasi di server, dilindungi rate limiting, dan punya pesan error yang jelas. Halaman yang terlihat meyakinkan tapi kehilangan inquiry di tombol submit berarti gagal pada satu-satunya tugasnya.",
          ],
        },
        {
          title: "Terpisah dari website utama",
          paragraphs: [
            "Halaman bisa berdiri di domain atau path sendiri, sehingga campaign tidak membahayakan website utama. Ia juga bisa memakai brand system yang sama dan dikembangkan menjadi website penuh nanti.",
            "Kami serahkan source, konfigurasi deployment, dan panduan singkat untuk mengubah copy antar campaign.",
          ],
        },
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Server actions", "Vercel", "Analytics"],
      faq: [
        {
          question: "Bisa sekalian menulis copy-nya?",
          answer:
            "Kami menyusun dan menyunting copy sebagai bagian dari halaman. Kalau Anda sudah punya messaging atau brand guide, kami bekerja di dalamnya. Kami tidak mengarang testimoni, nama klien, atau angka performa.",
        },
        {
          question: "Bisa integrasi iklan atau analytics?",
          answer:
            "Bisa. Kami pasang event tracking yang relevan untuk campaign dan menjaganya tetap privacy-conscious. Setup akun iklan tetap di tim marketing Anda.",
        },
        {
          question: "Apa bedanya dengan website penuh?",
          answer:
            "Landing page memang lebih sempit: satu audiens, satu penawaran, satu aksi. Kalau butuh banyak layanan, navigasi, dan konten jangka panjang, website penuh adalah titik awal yang lebih tepat.",
        },
      ],
      related: ["website", "webapp"],
      ctaHeading: "Akan launching campaign?",
      ctaBody:
        "Kirim penawaran, audiens, dan aksi yang Anda inginkan. Kami akan usulkan struktur halaman yang mendukungnya.",
    },
    backend: {
      key: "backend",
      slug: "backend-development",
      metaTitle: "Jasa Backend Development & API Engineering",
      name: "Jasa Backend Development",
      metaDescription:
        "Jasa backend development untuk produk web: desain API, database modelling, autentikasi, background jobs, dan integrasi. Siap di-maintain.",
      keywords: [
        "jasa backend development",
        "jasa backend developer",
        "jasa API development",
        "desain database",
        "implementasi autentikasi",
        "backend developer Indonesia",
      ],
      eyebrow: "Layanan / 04",
      heading: "Bagian yang tidak dilihat user justru yang menentukan reliabilitas.",
      intro:
        "Backend adalah kontrak: data yang konsisten, aturan yang ditegakkan, dan respons yang cukup cepat agar interface tetap nyaman dipakai. Kami membangun lapisan itu supaya produk bisa tumbuh tanpa menumpuk workaround rapuh.",
      outcomes: [
        "API terdokumentasi dengan error handling yang konsisten",
        "Data model ternormalisasi dengan constraint di tempat yang benar",
        "Autentikasi dan authorization di sisi server",
        "Background job, integrasi, dan visibilitas operasional",
      ],
      sections: [
        {
          title: "Data dan business rules",
          paragraphs: [
            "Schema dirancang sebelum endpoint. Relasi, keunikan, dan transisi state ditegakkan di database dan service layer, sehingga data invalid tidak bisa masuk lewat jalur kedua.",
            "Migration diberi versi dan bisa dibalik. Kebutuhan reporting dipikirkan sejak awal, karena model yang cocok untuk form tapi tidak untuk laporan akan mahal diperbaiki nanti.",
          ],
          bullets: [
            "Typed access layer dan batas transaksi yang eksplisit",
            "Validasi di edge dan di domain layer",
            "Index dipilih berdasarkan pola query nyata",
            "Audit trail untuk perubahan yang perlu dilacak",
          ],
        },
        {
          title: "API dan integrasi",
          paragraphs: [
            "API dirancang untuk client yang memakainya: penamaan konsisten, pagination, filter, dan bentuk error yang bisa ditampilkan frontend.",
            "Integrasi third-party dibungkus di balik interface internal, jadi pergantian provider tidak menuntut rewrite aplikasi. Webhook diverifikasi dan dibuat idempotent.",
          ],
        },
        {
          title: "Operasional",
          paragraphs: [
            "Production readiness mencakup structured log, health check, rate limiting, dan proses deployment yang bisa diulang. Kegagalan harus bisa didiagnosis tanpa menebak.",
            "Kami dokumentasikan arsitektur dan keputusan di baliknya, serta serahkan konfigurasi environment agar engineer lain bisa melanjutkan pekerjaan.",
          ],
        },
      ],
      stack: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "REST", "Redis", "Docker"],
      faq: [
        {
          question: "Bisa bekerja dengan frontend yang sudah ada?",
          answer:
            "Bisa. Kami bisa mengimplementasikan API sesuai kontrak yang disepakati, atau mereview dan melanjutkan backend yang sudah ada tanpa mengubah interface yang tim Anda pakai.",
        },
        {
          question: "Termasuk deployment dan monitoring?",
          answer:
            "Kami siapkan deployment yang bisa diulang dan monitoring dasar sebagai bagian dari pekerjaan. Operasional lanjutan bisa masuk dalam arrangement support.",
        },
        {
          question: "Bagaimana pendekatan keamanannya?",
          answer:
            "Authorization di server untuk setiap resource, input tervalidasi, kredensial di-hash, session bertanda tangan, rate limiting, dan tidak ada secret di repository. Bagian sistem yang sensitif kami dokumentasikan.",
        },
      ],
      related: ["webapp", "website"],
      ctaHeading: "Butuh backend yang tahan lama?",
      ctaBody:
        "Ceritakan data yang ditangani, sistem yang perlu dihubungkan, dan beban yang diperkirakan. Kami akan usulkan arsitektur dan rencana delivery-nya.",
    },
  },
};

export const serviceKeys: ServicePageKey[] = ["website", "webapp", "landing", "backend"];

export function getServicePage(locale: Locale, key: ServicePageKey): ServicePage {
  return servicePages[locale][key];
}

export function servicePagePath(locale: Locale, key: ServicePageKey): string {
  return `/${locale}/${servicePages[locale][key].slug}`;
}

export function findServiceKeyBySlug(
  locale: Locale,
  slug: string,
): ServicePageKey | undefined {
  return serviceKeys.find((key) => servicePages[locale][key].slug === slug);
}

/** Route params for every localized service page, keyed by locale. */
export function serviceRouteParams(): { locale: Locale; slug: string }[] {
  return (Object.keys(servicePages) as Locale[]).flatMap((locale) =>
    serviceKeys.map((key) => ({ locale, slug: servicePages[locale][key].slug })),
  );
}

/** hreflang map for a service page, built from the paired slug per locale. */
export function serviceLanguageAlternates(
  key: ServicePageKey,
): Record<string, string> {
  return {
    en: servicePagePath("en", key),
    id: servicePagePath("id", key),
    "x-default": servicePagePath("en", key),
  };
}
