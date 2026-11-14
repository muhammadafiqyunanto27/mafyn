import type { Dictionary } from "@/content/types";

export const id = {
  meta: {
    title: "MAFYN — Studio Full-stack Development",
    description:
      "MAFYN adalah studio full-stack development yang membangun website, web app custom, dan sistem backend untuk menyelesaikan masalah bisnis nyata.",
    keywords: [
      "full-stack development",
      "web development",
      "web app custom",
      "software development Indonesia",
      "Next.js development",
      "backend development",
    ],
    ogAlt: "MAFYN — Studio full-stack development",
    ogLocale: "id_ID",
    alternateOgLocale: "en_US",
    inLanguage: "id",
    areaServedWorldwide: "Seluruh dunia",
    offerCatalog: "Layanan development",
    knowsAbout: [
      "Full-stack development",
      "Web development",
      "Web app custom",
      "Backend development",
      "Arsitektur database",
      "Maintenance aplikasi web",
    ],
  },
  brand: {
    descriptor: "Studio",
    tagline: "Engineering Digital Solutions.",
    message: "Kami membangun solusi digital yang mendorong bisnis Anda maju.",
    description:
      "MAFYN adalah studio full-stack development yang membangun website, web app custom, dan sistem backend untuk menyelesaikan masalah bisnis nyata.",
    location: "Indonesia — bekerja remote dengan tim di seluruh dunia",
    locationShort: "Indonesia / Remote global",
  },
  nav: [
    { label: "Layanan", href: "#services" },
    { label: "Karya", href: "#work" },
    { label: "Proses", href: "#process" },
    { label: "Tentang", href: "#about" },
    { label: "Kontak", href: "#contact" },
  ],
  a11y: {
    skipToContent: "Lewati ke konten",
    backToTop: "MAFYN — kembali ke atas",
    primaryNav: "Utama",
    mobileNav: "Seluler",
    siteNavigation: "Navigasi situs",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    footerNav: "Footer",
    technologyStack: "Tech stack",
    architecture: "Arsitektur sistem pada umumnya",
    theme: "Tema warna",
    language: "Bahasa",
  },
  header: {
    talk: "Mari Bicara",
    startConversation: "Mulai percakapan",
  },
  theme: {
    light: "Terang",
    dark: "Gelap",
    system: "Sistem",
  },
  hero: {
    eyebrow: "Studio full-stack development",
    headline: "Kami membangun solusi digital yang mendorong bisnis Anda maju.",
    description:
      "Full-stack development dan web app custom yang dirancang untuk menyelesaikan masalah bisnis nyata.",
    primaryCta: "Mulai Proyek",
    secondaryCta: "Lihat Karya Kami",
    verticalTagline: "Engineering Digital Solutions",
    systemModel: {
      title: "Model sistem",
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
          items: "Autentikasi · Business logic · Scheduled jobs",
        },
        {
          index: "03",
          title: "Data",
          items: "PostgreSQL · Storage · Audit log",
        },
      ],
      connectors: ["HTTPS / JSON", "SQL"],
      footer: ["Boundary yang jelas", "Dirancang untuk di-maintain"],
    },
    workingStack: "Tech stack",
  },
  services: {
    label: "Layanan",
    heading: "Software yang benar-benar bekerja untuk bisnis Anda.",
    intro:
      "Empat layanan fokus, satu standar engineering. Setiap kerja sama dimulai dari masalah bisnis, bukan dari teknologinya.",
    typicalWork: "Scope kerja",
    items: [
      {
        index: "01",
        title: "Website Development",
        icon: "layout",
        value:
          "Website yang jelas dan cepat—menjelaskan bisnis Anda, membangun trust dengan cepat, dan mengubah kunjungan menjadi inquiry nyata.",
        offerings: [
          "Landing page",
          "Company profile",
          "Product catalog",
        ],
      },
      {
        index: "02",
        title: "Custom Web App",
        icon: "layers",
        value:
          "Software yang dibentuk sesuai cara bisnis Anda benar-benar berjalan—menggantikan spreadsheet yang tersebar dan pekerjaan manual dengan satu sistem yang andal.",
        offerings: [
          "Sistem manajemen bisnis",
          "Admin dashboard",
          "Workflow automation",
        ],
      },
      {
        index: "03",
        title: "Backend Development",
        icon: "database",
        value:
          "Layer andal di balik produk Anda: API yang bersih, model data yang kuat, dan integrasi yang menjaga seluruh tools tetap sinkron.",
        offerings: [
          "REST API",
          "Arsitektur database",
          "Integrasi third-party",
        ],
      },
      {
        index: "04",
        title: "Maintenance & Support",
        icon: "wrench",
        value:
          "Maintenance yang konsisten setelah launch, agar masalah kecil diperbaiki sebelum menjadi darurat dan produk terus berkembang.",
        offerings: [
          "Maintenance website",
          "Perbaikan bug",
          "Optimasi performa",
        ],
      },
    ],
  },
  work: {
    label: "Karya pilihan",
    heading: "Karya pilihan",
    intro:
      "Studi kasus hanya dipublikasikan ketika pekerjaan itu nyata dan klien telah memberikan izin. Belum ada proyek klien yang diklaim di sini.",
    note: "Setiap entri di bawah ini adalah placeholder yang ditandai dengan jelas untuk menunjukkan format studi kasus terverifikasi. Tidak ada yang disajikan sebagai pekerjaan klien yang telah diselesaikan.",
    pending: "Studi kasus / menunggu",
    placeholder: "Placeholder",
    problem: "Masalah",
    solution: "Solusi",
    unpublished: "Belum dipublikasikan",
    caseStudy: "Studi kasus",
    viewProject: "Lihat proyek",
    awaitingData: "Menunggu data terverifikasi",
  },
  process: {
    label: "Proses",
    heading: "Jalur yang jelas dari kebutuhan hingga production.",
    intro:
      "Tanpa black box. Setiap tahap punya output yang jelas, dan Anda melihat pekerjaan berlangsung.",
    output: "Output",
    closing:
      "Scope disepakati sebelum pekerjaan dimulai. Perubahan dibahas terbuka, diberi harga yang jujur, dan tidak pernah diselipkan diam-diam.",
    stages: [
      {
        index: "01",
        title: "Discovery",
        description:
          "Kami mulai dari bisnis, pengguna, dan batasan yang ada. Tujuannya memahami seperti apa keberhasilan sebelum mengusulkan satu fitur pun.",
        deliverables: ["Project brief", "Kriteria keberhasilan"],
      },
      {
        index: "02",
        title: "Planning",
        description:
          "Scope, arsitektur, dan milestone ditetapkan bersama. Anda mendapat gambaran jelas tentang apa yang akan dibangun, dalam urutan apa, dan mengapa.",
        deliverables: [
          "Scope & milestone",
          "Model data",
          "Rencana teknis",
        ],
      },
      {
        index: "03",
        title: "Development",
        description:
          "Produk dibangun dalam increment yang bisa direview. Preview yang berfungsi tersedia di setiap checkpoint, sehingga feedback datang saat perbaikan masih murah.",
        deliverables: [
          "Sistem interface",
          "Build yang berfungsi",
          "Quality review",
        ],
      },
      {
        index: "04",
        title: "Launch",
        description:
          "Launch ditangani sebagai tugas engineering, bukan tambahan belakangan: performa, metadata, analytics, dan handover yang benar-benar bisa dipakai.",
        deliverables: [
          "Production launch",
          "Dokumentasi",
          "Handover",
        ],
      },
      {
        index: "05",
        title: "Support",
        description:
          "Setelah rilis, kami tetap tersedia untuk perbaikan, peningkatan, dan iterasi terukur seiring perubahan kebutuhan bisnis.",
        deliverables: ["Monitoring", "Perbaikan bug", "Iterasi"],
      },
    ],
  },
  about: {
    label: "Tentang MAFYN",
    heading: "Engineering yang berangkat dari kebutuhan bisnis.",
    statement:
      "MAFYN berfokus membangun solusi digital praktis melalui engineering yang cermat, arsitektur yang bersih, dan development yang berorientasi bisnis.",
    paragraphs: [
      "Studio ini sengaja dibuat kecil. Artinya, lebih sedikit proyek dalam satu waktu, kolaborasi langsung dengan orang yang menulis kode, dan keputusan yang diambil dengan konteks penuh—bukan diteruskan antar departemen.",
      "Kami tidak mengklaim rekam jejak yang panjang. Kami membawa engineering yang fokus, perencanaan yang jujur, dan software yang ditulis untuk tetap maintainable setelah launch.",
    ],
    howWeWorkLabel: "Cara kami bekerja",
    howWeWork:
      "Anda bekerja langsung dengan developer yang membangun produk Anda, mulai dari discovery hingga launch dan support. Tanpa account layer. Tanpa kebutuhan yang terencerkan.",
    principlesLabel: "Prinsip",
    principles: [
      {
        index: "01",
        title: "Kejelasan sebelum kode",
        description:
          "Jika masalahnya tidak terdefinisi, software tidak akan menyelesaikannya. Kami menyepakati hasil sebelum menulis implementasi.",
      },
      {
        index: "02",
        title: "Arsitektur yang bertahan",
        description:
          "Struktur sederhana dan terdokumentasi yang bisa dibaca, dikembangkan, dan di-maintain oleh developer berikutnya tanpa menebak-nebak.",
      },
      {
        index: "03",
        title: "Keputusan yang mengutamakan bisnis",
        description:
          "Setiap trade-off teknis diukur terhadap nilai nyata: waktu yang dihemat, pendapatan yang diperoleh, risiko yang dikurangi.",
      },
      {
        index: "04",
        title: "Komunikasi langsung",
        description:
          "Bahasa yang jelas, progres yang terlihat, dan tenggat yang jujur. Tanpa lapisan, tanpa kejutan, tanpa jargon sebagai tameng.",
      },
    ],
  },
  contact: {
    label: "Kontak",
    heading: "Punya Proyek yang Ingin Diwujudkan? Mari Kita Bangun.",
    intro:
      "Ceritakan apa yang ingin Anda bangun, apa yang menghambatnya, dan seperti apa hasil yang baik menurut Anda. Kami akan menjawab dengan jujur tentang apakah dan bagaimana kami dapat membantu.",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    placeholder: "Placeholder",
    studioLabel: "Lokasi",
    directNote:
      "Kolaborasi langsung dengan developer yang mengerjakan proyek. Tanpa account manager, tanpa pengalihan.",
    form: {
      title: "Permintaan proyek",
      replyByEmail: "Dibalas via email",
      received: "Diterima",
      requiredNote: "Kolom bertanda * wajib diisi.",
      errorTitle: "Permintaan tidak terkirim",
      successTitle: "Pesan diterima.",
      successBody:
        "Terima kasih atas detailnya. Kami akan meninjau permintaan Anda dan membalas melalui email.",
      sendAnother: "Kirim permintaan lain",
      name: "Nama",
      namePlaceholder: "Nama lengkap Anda",
      email: "Email",
      emailPlaceholder: "anda@perusahaan.com",
      company: "Perusahaan",
      optional: "(opsional)",
      companyPlaceholder: "Perusahaan atau organisasi",
      projectType: "Jenis proyek",
      budget: "Rentang anggaran",
      details: "Detail proyek",
      detailsPlaceholder:
        "Apa yang ingin Anda bangun, dan apa yang perlu diubah?",
      send: "Kirim permintaan",
      sending: "Mengirim permintaan",
      privacy:
        "Detail Anda hanya digunakan untuk membalas permintaan ini. Tanpa milis, tanpa pemasaran pihak ketiga.",
      honeypot: "Biarkan kolom ini kosong",
      projectTypes: [
        { value: "Website", label: "Website" },
        { value: "Web application", label: "Web app" },
        { value: "Backend / API", label: "Backend / API" },
        {
          value: "Maintenance & support",
          label: "Maintenance & support",
        },
        { value: "Not sure", label: "Belum yakin" },
      ],
      budgets: [
        { value: "Not sure yet", label: "Belum ditentukan" },
        { value: "Under Rp 10 million", label: "Di bawah Rp 10 juta" },
        { value: "Rp 10–30 million", label: "Rp 10–30 juta" },
        { value: "Rp 30–75 million", label: "Rp 30–75 juta" },
        { value: "Above Rp 75 million", label: "Di atas Rp 75 juta" },
      ],
      errors: {
        name: "Silakan masukkan nama Anda (2–80 karakter).",
        email: "Silakan masukkan alamat email yang valid.",
        company:
          "Nama perusahaan terlalu panjang (maksimal 120 karakter).",
        projectType: "Silakan pilih jenis proyek.",
        budget: "Silakan pilih rentang anggaran.",
        message:
          "Silakan jelaskan proyek dalam setidaknya 20 karakter (maksimal 3000).",
        checkFields: "Silakan periksa kolom yang ditandai.",
        rateLimited:
          "Terlalu banyak permintaan dikirim dari koneksi ini. Tunggu beberapa menit lalu coba lagi.",
        notConnected:
          "Formulir permintaan belum terhubung ke kotak masuk. Silakan email {email} langsung, atau hubungi kami di WhatsApp.",
        deliveryFailed:
          "Terjadi kesalahan saat mengirim permintaan Anda. Silakan coba lagi, atau email {email} langsung.",
        couldNotDeliver:
          "Pesan tidak dapat dikirim. Silakan coba lagi, atau email {email} langsung.",
        success: "Terima kasih—pesan Anda telah kami terima.",
      },
    },
  },
  footer: {
    navigate: "Navigasi",
    services: "Layanan",
    contact: "Kontak",
    whatsapp: "WhatsApp",
    placeholder: "(placeholder)",
    indonesia: "Indonesia",
    workingWorldwide: "Bekerja secara global",
    rights: "Seluruh hak cipta dilindungi.",
    descriptor: "Full-stack development & web app custom",
  },
} satisfies Dictionary;
