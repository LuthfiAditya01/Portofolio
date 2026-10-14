import type { Language } from "../context/LanguageContext";

export interface Translations {
  nav: {
    work: string;
    stack: string;
    exp: string;
    about: string;
    contact: string;
    status: string;
    resume: string;
    switchLang: string;
  };
  hero: {
    statusBadge: string;
    engineerRole: string;
    headlineL1: string;
    headlineL2: string;
    headlineL3: string;
    manifestoTitle: string;
    manifestoBold: string;
    manifestoText: string;
    location: string;
    btnWork: string;
    btnContact: string;
    btnCv: string;
    telemetry: {
      specLabel: string;
      specVal: string;
      toolsLabel: string;
      toolsVal: string;
      codeLabel: string;
      codeVal: string;
      availLabel: string;
      availVal: string;
    };
  };
  projects: {
    badge: string;
    titleL1: string;
    titleL2: string;
    tabFeatured: string;
    tabAll: string;
    tabWeb: string;
    tabMobile: string;
    noteTag: string;
    noteText: string;
    rankBadge: string;
    roleLabel: string;
    outcomeLabel: string;
    btnLive: string;
    btnDownload: string;
    btnGithub: string;
    btnDemo: string;
  };
  capabilities: {
    badge: string;
    titleL1: string;
    titleL2: string;
    subtitle: string;
    matrixLabel: string;
    coreLabel: string;
    coreNote: string;
    focusLabel: string;
    focusNote: string;
  };
  experience: {
    badge: string;
    titleL1: string;
    titleL2: string;
    subtitle: string;
    toolsLabel: string;
  };
  about: {
    badge: string;
    titleL1: string;
    titleL2: string;
    verified: string;
    eduLabel: string;
    eduVal: string;
    stageLabel: string;
    stageVal: string;
    honorsLabel: string;
    honorsVal: string;
    locLabel: string;
    locVal: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    storyP3_lead: string;
    storyP3_highlight: string;
    storyP3_tail: string;
    val1_title: string;
    val1_desc: string;
    val2_title: string;
    val2_desc: string;
    val3_title: string;
    val3_desc: string;
  };
  contact: {
    badge: string;
    titleL1: string;
    titleL2: string;
    subtitle: string;
    directTitle: string;
    directSpeed: string;
    directHeading: string;
    directText: string;
    btnCopy: string;
    btnCopied: string;
    btnSend: string;
    btnResume: string;
    reposTitle: string;
    reposStatus: string;
    spotifySub: string;
    protocolNote: string;
  };
  footer: {
    designSystem: string;
    stackNote: string;
    rights: string;
    backToTop: string;
  };
  transition: {
    bootTitle: string;
    bootComplete: string;
    subRole: string;
    clickHint: string;
    replay: string;
  };
}

export const translations: Record<Language, Translations> = {
  EN: {
    nav: {
      work: "01 // WORK",
      stack: "02 // STACK",
      exp: "03 // EXP",
      about: "04 // ABOUT",
      contact: "05 // CONTACT",
      status: "STATUS: AVAILABLE FOR ROLES",
      resume: "RESUME",
      switchLang: "SWITCH LANGUAGE",
    },
    hero: {
      statusBadge: "SYS.VER: 2026.1 // PRODUCTION",
      engineerRole: "[ LUTHFI ADITYA // JUNIOR SOFTWARE ENGINEER ]",
      headlineL1: "WEB & MOBILE SYSTEMS.",
      headlineL2: "ENGINEERED FOR",
      headlineL3: "PERFORMANCE.",
      manifestoTitle: "// DESIGN PHILOSOPHY",
      manifestoBold: "Sharp interfaces invite users in; solid engineering keeps them there.",
      manifestoText: "Crafting web platforms and mobile apps that stay fast under real-world load and deliver verified outcomes.",
      location: "BASED IN INDONESIA (GMT+7)",
      btnWork: "VIEW SELECTED WORK",
      btnContact: "GET IN TOUCH",
      btnCv: "DOWNLOAD CV (PDF)",
      telemetry: {
        specLabel: "PRIMARY SPECIALIZATION",
        specVal: "WEB & MOBILE APPS",
        toolsLabel: "CORE TOOLS",
        toolsVal: "REACT • NEXT.JS • RN",
        codeLabel: "CODEBASE QUALITY",
        codeVal: "MODULAR & TYPESAFE",
        availLabel: "AVAILABILITY",
        availVal: "FULL-TIME & CONTRACT",
      },
    },
    projects: {
      badge: "01 // SELECTED WORK",
      titleL1: "PROVEN SYSTEMS &",
      titleL2: "SHIPPED PRODUCTS",
      tabFeatured: "PRIORITY HIGHLIGHTS (4)",
      tabAll: "ALL WORK",
      tabWeb: "WEB APPS",
      tabMobile: "MOBILE",
      noteTag: "// NOTE:",
      noteText: "Top 4 production projects ranked by engineering scope, architecture impact, and client results.",
      rankBadge: "RANK #",
      roleLabel: "// ROLE & CONTRIBUTION:",
      outcomeLabel: "● OUTCOME / IMPACT:",
      btnLive: "VISIT LIVE APP",
      btnDownload: "DOWNLOAD APK",
      btnGithub: "SOURCE CODE",
      btnDemo: "WATCH DEMO",
    },
    capabilities: {
      badge: "02 // CAPABILITIES",
      titleL1: "TECHNICAL PROFICIENCY &",
      titleL2: "SYSTEM COMPETENCIES",
      subtitle: "Honest engineering competencies mapped across production environments. Structured around measurable architecture practices rather than arbitrary percentage ratings.",
      matrixLabel: "// CAPABILITY MATRIX",
      coreLabel: "● CORE:",
      coreNote: "Used regularly in current production & freelance pipelines.",
      focusLabel: "● FOCUS 2026:",
      focusNote: "Deepening micro-frontend architectures & mobile animation performance.",
    },
    experience: {
      badge: "03 // EXPERIENCE",
      titleL1: "PROFESSIONAL",
      titleL2: "MISSION LOG",
      subtitle: "A scannable timeline of roles, companies, technical challenges tackled, and engineering contributions delivered.",
      toolsLabel: "TOOLS DEPLOYED:",
    },
    about: {
      badge: "04 // ABOUT",
      titleL1: "PROFILE &",
      titleL2: "ENGINEERING MINDSET",
      verified: "● VERIFIED",
      eduLabel: "EDUCATION:",
      eduVal: "Universitas Lampung",
      stageLabel: "ACADEMIC STAGE:",
      stageVal: "Final Year (Senior)",
      honorsLabel: "HONORS / ALUMNI:",
      honorsVal: "Bangkit Academy 2024",
      locLabel: "LOCATION:",
      locVal: "Bandar Lampung, ID",
      storyTitle: "Building reliable software, from mobile kernels to user interfaces.",
      storyP1: "I'm a Software Engineer based in Indonesia, specializing in high-performance web development and cross-platform mobile apps. In my final academic year at Universitas Lampung, I have shipped production systems across government portals, SME commercial hubs, and Android AI applications.",
      storyP2: "As an alumnus of Bangkit Academy (backed by Google, GoTo, and Traveloka), I learned how to blend rigorous engineering practices—such as MVVM architecture, clean modular code, and automated builds—with agile delivery cycles.",
      storyP3_lead: "My engineering philosophy is simple:",
      storyP3_highlight: "sharp interfaces invite users in; solid engineering keeps them there",
      storyP3_tail: ". Whether architecting API integration layers, optimizing database queries for high concurrency, or implementing smooth mobile UI flows, my focus remains squarely on speed, stability, and tangible business value.",
      val1_title: "01 // CODE INTEGRITY",
      val1_desc: "Strict TypeScript across all layers, modular separation of concerns, and clean commit histories so code remains easy to maintain.",
      val2_title: "02 // FAST ITERATION",
      val2_desc: "Rapid prototyping from Figma to interactive code, validating features with real users as early as possible.",
      val3_title: "03 // ACTIVE DISCIPLINE",
      val3_desc: "Maintaining stamina and focus through consistent fitness training, long-distance running, and weekly technical exploration.",
    },
    contact: {
      badge: "05 // CONTACT",
      titleL1: "LET'S BUILD SOMETHING",
      titleL2: "RELIABLE TOGETHER.",
      subtitle: "Open to full-time software engineering roles and production web or mobile contract projects. If you have an engineering opening or a product to launch, my inbox is open.",
      directTitle: "// DIRECT TRANSMISSION",
      directSpeed: "● RESPONSE TIME < 24H",
      directHeading: "Send an Inquiry or Schedule a Conversation",
      directText: "Have a technical role opening, an MVP you need launched, or an architecture challenge? My inbox is always monitored.",
      btnCopy: "COPY EMAIL",
      btnCopied: "COPIED TO CLIPBOARD",
      btnSend: "SEND DIRECT EMAIL",
      btnResume: "GET RESUME (PDF)",
      reposTitle: "// EXTERNAL REPOSITORIES & CHANNELS",
      reposStatus: "CONNECTED",
      spotifySub: "Coding & Focus Playlists",
      protocolNote: "ENCRYPTION & PROTOCOL: HTTPS // TLS 1.3 // RFC 5322",
    },
    footer: {
      designSystem: "NEO//PLAY DESIGN SYSTEM",
      stackNote: "BUILT WITH REACT • VITE • TAILWIND CSS • TYPESCRIPT",
      rights: "ALL RIGHTS RESERVED.",
      backToTop: "Back to top of page",
    },
    transition: {
      bootTitle: "[ SYSTEM BOOT // RELEASE v3.0 ]",
      bootComplete: "INITIALIZATION: COMPLETE",
      subRole: "SOFTWARE ENGINEER • WEB & MOBILE SYSTEMS",
      clickHint: "CLICK ANYWHERE TO ENTER",
      replay: "REPLAY INTRO",
    },
  },
  ID: {
    nav: {
      work: "01 // KARYA",
      stack: "02 // KEAHLIAN",
      exp: "03 // PENGALAMAN",
      about: "04 // TENTANG",
      contact: "05 // KONTAK",
      status: "STATUS: TERSEDIA UNTUK POSISI KERJA",
      resume: "RESUME",
      switchLang: "GANTI BAHASA",
    },
    hero: {
      statusBadge: "SYS.VER: 2026.1 // PRODUKSI",
      engineerRole: "[ LUTHFI ADITYA // JUNIOR SOFTWARE ENGINEER ]",
      headlineL1: "SISTEM WEB & MOBILE.",
      headlineL2: "DIREKAYASA UNTUK",
      headlineL3: "PERFORMA TINGGI.",
      manifestoTitle: "// FILOSOFI REKAYASA",
      manifestoBold: "Antarmuka yang bersih menarik perhatian; kode yang andal menjaga kepercayaan.",
      manifestoText: "Membangun aplikasi web dan mobile yang tetap responsif di bawah beban kerja riil dan terbukti menghasilkan metrik nyata bagi klien.",
      location: "BERBASIS DI INDONESIA (GMT+7)",
      btnWork: "LIHAT KARYA PILIHAN",
      btnContact: "HUBUNGI SAYA",
      btnCv: "UNDUH CV (PDF)",
      telemetry: {
        specLabel: "SPESIALISASI UTAMA",
        specVal: "APLIKASI WEB & MOBILE",
        toolsLabel: "TOOLS UTAMA",
        toolsVal: "REACT • NEXT.JS • RN",
        codeLabel: "KUALITAS KODE",
        codeVal: "MODULAR & TYPESAFE",
        availLabel: "KETERSEDIAAN",
        availVal: "FULL-TIME & KONTRAK",
      },
    },
    projects: {
      badge: "01 // KARYA TERPILIH",
      titleL1: "SISTEM TERUJI &",
      titleL2: "PRODUK PRODUKSI",
      tabFeatured: "KARYA UNGGULAN (4)",
      tabAll: "SEMUA KARYA",
      tabWeb: "APLIKASI WEB",
      tabMobile: "MOBILE",
      noteTag: "// CATATAN:",
      noteText: "4 proyek produksi teratas diranking berdasarkan cakupan teknis, arsitektur, dan dampak nyata bagi klien.",
      rankBadge: "PERINGKAT #",
      roleLabel: "// PERAN & KONTRIBUSI:",
      outcomeLabel: "● DAMPAK / HASIL NYATA:",
      btnLive: "KUNJUNGI WEBSITE",
      btnDownload: "UNDUH APK",
      btnGithub: "KODE SUMBER",
      btnDemo: "TONTON DEMO",
    },
    capabilities: {
      badge: "02 // KEAHLIAN TEKNIS",
      titleL1: "KEMAMPUAN TEKNIS &",
      titleL2: "KOMPETENSI SISTEM",
      subtitle: "Kompetensi rekayasa perangkat lunak yang dipetakan dari lingkungan produksi nyata, terstruktur berbasis arsitektur terukur tanpa persentase angka semu.",
      matrixLabel: "// MATRIKS KOMPETENSI",
      coreLabel: "● UTAMA:",
      coreNote: "Digunakan secara berkala dalam lingkungan produksi & proyek freelance aktif.",
      focusLabel: "● FOKUS 2026:",
      focusNote: "Mendalami arsitektur micro-frontend & performa animasi mobile.",
    },
    experience: {
      badge: "03 // PENGALAMAN",
      titleL1: "LOG RIWAYAT &",
      titleL2: "MISI PROFESIONAL",
      subtitle: "Lini masa ringkas berisi peran, institusi, tantangan teknis yang diselesaikan, dan kontribusi rekayasa yang telah dikirimkan.",
      toolsLabel: "TEKNOLOGI DIGUNAKAN:",
    },
    about: {
      badge: "04 // TENTANG SAYA",
      titleL1: "PROFIL &",
      titleL2: "POLA PIKIR REKAYASA",
      verified: "● TERVERIFIKASI",
      eduLabel: "PENDIDIKAN:",
      eduVal: "Universitas Lampung",
      stageLabel: "STATUS AKADEMIK:",
      stageVal: "Tingkat Akhir (Senior)",
      honorsLabel: "PRESTASI / ALUMNI:",
      honorsVal: "Bangkit Academy 2024",
      locLabel: "LOKASI:",
      locVal: "Bandar Lampung, ID",
      storyTitle: "Membangun perangkat lunak andal, dari arsitektur data hingga antarmuka pengguna.",
      storyP1: "Saya adalah Software Engineer berbasis di Indonesia dengan spesialisasi pengembangan web berkinerja tinggi dan aplikasi mobile lintas platform. Di tahun terakhir perkuliahan di Universitas Lampung, saya telah merilis sistem produksi nyata untuk portal instansi pemerintah, katalog komersial UMKM, hingga aplikasi Android AI.",
      storyP2: "Sebagai alumni Bangkit Academy (didukung oleh Google, GoTo, dan Traveloka), saya terbiasa memadukan praktik rekayasa yang disiplin—seperti arsitektur MVVM, kode modular bersih, dan build otomatis—dengan siklus rilis yang tangkas.",
      storyP3_lead: "Filosofi rekayasa saya sederhana:",
      storyP3_highlight: "antarmuka yang bersih menarik perhatian; kode yang andal menjaga kepercayaan",
      storyP3_tail: ". Baik saat merancang lapisan integrasi API, mengoptimalkan query database untuk konkurensi tinggi, maupun menyusun alur UI mobile yang mulus, fokus saya selalu pada kecepatan, stabilitas, dan nilai nyata bagi pengguna.",
      val1_title: "01 // INTEGRITAS KODE",
      val1_desc: "Strict TypeScript di semua lapisan, batasan modul yang jelas, dan commit history yang rapi agar kode mudah dipelihara tim dalam jangka panjang.",
      val2_title: "02 // ITERASI CEPAT",
      val2_desc: "Dari rancangan Figma ke prototipe interaktif yang cepat, memvalidasi alur fungsi dengan pengguna riil sedini mungkin.",
      val3_title: "03 // DISIPLIN AKTIF",
      val3_desc: "Konsistensi stamina fisik dan fokus melalui latihan kebugaran teratur, lari jarak jauh, dan eksplorasi teknologi baru setiap minggu.",
    },
    contact: {
      badge: "05 // KONTAK",
      titleL1: "MARI MEMBANGUN PRODUK",
      titleL2: "YANG ANDAL BERSAMA.",
      subtitle: "Terbuka untuk posisi Full-Time Software Engineer serta proyek kontrak web dan mobile. Jika Anda memiliki lowongan posisi rekayasa atau produk yang siap diluncurkan, silakan hubungi saya.",
      directTitle: "// TRANSMISI LANGSUNG",
      directSpeed: "● WAKTU RESPON < 24 JAM",
      directHeading: "Kirim Pesan atau Diskusikan Proyek",
      directText: "Punya lowongan engineer, MVP yang ingin diluncurkan, atau tantangan arsitektur? Kotak masuk saya selalu aktif dipantau.",
      btnCopy: "SALIN EMAIL",
      btnCopied: "TERSALIN KE CLIPBOARD",
      btnSend: "KIRIM EMAIL LANGSUNG",
      btnResume: "UNDUH RESUME (PDF)",
      reposTitle: "// REPOSITORI & KANAL EKSTERNAL",
      reposStatus: "TERHUBUNG",
      spotifySub: "Playlist Fokus & Ngoding",
      protocolNote: "ENKRIPSI & PROTOKOL: HTTPS // TLS 1.3 // RFC 5322",
    },
    footer: {
      designSystem: "SISTEM DESAIN NEO//PLAY",
      stackNote: "DIBANGUN DENGAN REACT • VITE • TAILWIND CSS • TYPESCRIPT",
      rights: "HAK CIPTA DILINDUNGI.",
      backToTop: "Kembali ke atas",
    },
    transition: {
      bootTitle: "[ SYSTEM BOOT // RELEASE v3.0 ]",
      bootComplete: "INISIALISASI: LENGKAP",
      subRole: "SOFTWARE ENGINEER • SISTEM WEB & MOBILE",
      clickHint: "KLIK DI MANA SAJA UNTUK MASUK",
      replay: "PUTAR ULANG INTRO",
    },
  },
};
