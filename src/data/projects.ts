export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: "WEB APP" | "MOBILE APP" | "FULLSTACK" | "LANDING PAGE";
  year: string;
  tagline: string;
  tagline_id?: string;
  description: string;
  description_id?: string;
  role: string;
  role_id?: string;
  outcome?: string;
  outcome_id?: string;
  techStack: string[];
  image: string;
  featured: boolean;
  highlightRank?: number; // 1: Veccie Deluxe, 2: Ambismart, 3: Duitlog, 4: Magnet
  links: {
    live?: string;
    github?: string;
    demo?: string;
    download?: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "veccie-deluxe",
    number: "PROJECT_01",
    title: "Veccie Deluxe",
    category: "WEB APP",
    year: "2025",
    tagline: "E-Commerce Product Catalog & Conversion Hub",
    tagline_id: "Katalog Produk E-Commerce & Jalur Konversi",
    description:
      "High-performance product catalog web application built for Veccie Deluxe. Features instant category filtering, direct referral pathways to Shopee and TikTok Shop, and Firebase authentication with Google Cloud Storage for dynamic asset delivery.",
    description_id:
      "Aplikasi web katalog produk berkinerja tinggi untuk Veccie Deluxe. Dilengkapi filter kategori instan, rujukan langsung ke Shopee & TikTok Shop, serta autentikasi Firebase dan Google Cloud Storage untuk pengelolaan aset dinamis.",
    role: "Lead Frontend Developer — System architecture, responsive component design, and SEO optimization",
    role_id: "Lead Frontend Developer — Arsitektur sistem, desain komponen responsif, dan optimasi SEO",
    outcome: "Organized the complete product catalog with instant search, driving a 30%+ increase in referral clicks to Shopee and TikTok Shop.",
    outcome_id: "Menata ulang katalog produk dengan pencarian instan dan filter kategori, meningkatkan klik rujukan (referral) ke marketplace sebesar 30%+.",
    techStack: ["React.js", "TailwindCSS", "Firebase Auth", "Google Storage", "Vercel", "SEO"],
    image: "/project/veccie.png",
    featured: true,
    highlightRank: 1,
    links: {
      live: "https://vecciedeluxe.web.id/",
    },
  },
  {
    id: "ambismart",
    number: "PROJECT_02",
    title: "Ambismart",
    category: "WEB APP",
    year: "2025",
    tagline: "Corporate Profile & Interactive Educational Platform",
    tagline_id: "Profil Perusahaan & Platform Edukasi Interaktif",
    description:
      "Corporate profile and digital learning portal for Ambismart. Delivers sub-second initial load times, structured curriculum navigation, and direct enrollment pathways for prospective students.",
    description_id:
      "Portal profil perusahaan dan pembelajaran digital Ambismart. Menghasilkan waktu muat awal di bawah 1 detik, navigasi kurikulum terstruktur, dan jalur pendaftaran langsung bagi calon siswa.",
    role: "Frontend Engineer — Component system development, responsive layout, and performance tuning",
    role_id: "Frontend Engineer — Pengembangan sistem komponen, tata letak responsif, dan tuning performa",
    outcome: "Achieved sub-second initial load times and secured first-page organic search rankings for primary brand keywords.",
    outcome_id: "Mencapai waktu muat di bawah satu detik dan mengamankan peringkat halaman pertama pencarian organik Google untuk kata kunci utama.",
    techStack: ["React.js", "Vite", "TailwindCSS", "SEO", "Vercel"],
    image: "/project/ambismart.png",
    featured: true,
    highlightRank: 2,
    links: {
      live: "https://ambismart.web.id/",
    },
  },
  {
    id: "duitlog",
    number: "PROJECT_03",
    title: "Duitlog",
    category: "MOBILE APP",
    year: "2025",
    tagline: "Cross-Platform Personal Expense & Cashflow Tracker",
    tagline_id: "Pencatat Keuangan & Arus Kas Pribadi Lintas Platform",
    description:
      "Cross-platform budgeting application available on native Android and the web. Tracks daily expenses, categorizes recurring subscriptions, and breaks down monthly burn rate without requiring manual spreadsheets.",
    description_id:
      "Aplikasi keuangan pribadi lintas platform yang tersedia di Android native dan web. Membantu memonitor pengeluaran harian, memilah langganan rutin, dan menganalisa burn rate bulanan tanpa spreadsheet manual.",
    role: "Fullstack Mobile Developer — React Native / Expo client and Next.js / MongoDB API services",
    role_id: "Fullstack Mobile Developer — Klien React Native / Expo dan layanan API Next.js / MongoDB",
    outcome: "Shipped production Android APK with offline SQLite caching and real-time database synchronization.",
    outcome_id: "Merilis build APK Android produksi dengan caching lokal SQLite offline dan sinkronisasi database real-time.",
    techStack: ["React Native", "Expo", "Next.js", "MongoDB", "TailwindCSS"],
    image: "/project/duitlog.png",
    featured: true,
    highlightRank: 3,
    links: {
      live: "https://duitlog.web.id/",
      download: "https://drive.google.com/drive/folders/1eQ3gFq8s7nJOpvuW1JD2KdOKKKG6tW-Q?usp=drive_link",
    },
  },
  {
    id: "magnet-bps",
    number: "PROJECT_04",
    title: "Magnet (Magang Management)",
    category: "FULLSTACK",
    year: "2025",
    tagline: "Government Intern Attendance & Administration System",
    tagline_id: "Sistem Presensi & Administrasi Magang Instansi BPS",
    description:
      "Digital management and attendance tracking portal developed during an internship at Badan Pusat Statistik (BPS) Kota Bandar Lampung. Replaces paper sign-in sheets with an auditable, timestamped digital check-in system.",
    description_id:
      "Portal administrasi dan pelacakan presensi digital yang dibangun saat magang di BPS Kota Bandar Lampung. Menggantikan lembar presensi manual kertas dengan sistem check-in digital berstempel waktu yang akuntabel.",
    role: "Fullstack Developer — Developed digital attendance module, database schemas, and administrative dashboard",
    role_id: "Fullstack Developer — Mengembangkan modul presensi digital, skema database, dan dashboard admin",
    outcome: "Eliminated manual paperwork for 20+ concurrent interns per batch, cutting monthly administrative reporting time from hours to minutes.",
    outcome_id: "Menghapus pekerjaan kertas manual untuk 20+ mahasiswa magang per angkatan, memangkas waktu rekap bulanan dari berjam-jam menjadi beberapa menit.",
    techStack: ["React.js", "Next.js", "JavaScript", "TailwindCSS", "MongoDB"],
    image: "/project/magnet.png",
    featured: true,
    highlightRank: 4,
    links: {
      live: "https://magnet-bps.vercel.app/",
    },
  },
  {
    id: "mentally",
    number: "PROJECT_05",
    title: "Mental.ly",
    category: "MOBILE APP",
    year: "2024",
    tagline: "AI-Powered Early Mental Health Detection Mobile App",
    tagline_id: "Aplikasi Mobile Deteksi Dini Kesehatan Mental Berbasis AI",
    description:
      "Native Android application built as a Capstone Project in the Bangkit Academy Program (Google, GoTo, Traveloka). Uses machine learning questionnaires and habit tracking to provide preliminary mental health insights.",
    description_id:
      "Aplikasi Android native sebagai Proyek Capstone di Program Bangkit Academy (Google, GoTo, Traveloka). Menggunakan kuesioner machine learning dan pelacakan kebiasaan untuk deteksi dini kesehatan mental.",
    role: "Lead Mobile Developer — Android Native architecture, Retrofit network layer, and ML model inference",
    role_id: "Lead Mobile Developer — Arsitektur Android Native, layer jaringan Retrofit, dan inferensi model ML",
    outcome: "Graduated with distinction from Bangkit Academy 2024 Mobile Development path.",
    outcome_id: "Lulus dengan predikat memuaskan dari jalur Mobile Development Bangkit Academy 2024.",
    techStack: ["Kotlin", "Retrofit", "TensorFlow", "Google Cloud", "Figma"],
    image: "/project/mentally.png",
    featured: false,
    links: {
      demo: "https://youtu.be/1yEdsNHTWZo?si=m5_UfoDv10J0-0sW",
      github: "https://github.com/AhlanAlghiff/Mental.ly-Project",
    },
  },
  {
    id: "sip-sj",
    number: "PROJECT_06",
    title: "SIP-SJ Posyandu System",
    category: "FULLSTACK",
    year: "2025",
    tagline: "Community Healthcare Information System",
    tagline_id: "Sistem Informasi Kesehatan Posyandu Desa",
    description:
      "Web-based maternal and child healthcare management portal designed for Seputih Jaya Village Posyandu to record maternal check-ups, child growth data, and generate health report summaries.",
    description_id:
      "Portal manajemen kesehatan ibu dan anak berbasis web untuk Posyandu Kampung Seputih Jaya guna mencatat pemeriksaan kehamilan, tumbuh kembang balita, dan rekapitulasi data berkala.",
    role: "Fullstack Developer — Laravel backend architecture, MySQL database design, and UI implementation",
    role_id: "Fullstack Developer — Arsitektur backend Laravel, perancangan basis data MySQL, dan integrasi UI",
    techStack: ["Laravel", "TailwindCSS", "JavaScript", "MySQL"],
    image: "/project/sip-sj.jpeg",
    featured: false,
    links: {
      github: "https://github.com/LuthfiAditya01/SIP-SJ",
    },
  },
  {
    id: "fla-o-krezz",
    number: "PROJECT_07",
    title: "Fla-O-Krezz",
    category: "LANDING PAGE",
    year: "2025",
    tagline: "Food & Beverage Product Showcase Landing Page",
    tagline_id: "Landing Page Showcase Produk Kuliner Lokal",
    description:
      "A fast, high-conversion landing page created for a local artisan pudding brand, integrating Google Apps Script for customer order collection and instant WhatsApp checkout redirection.",
    description_id:
      "Landing page berkecepatan tinggi untuk produk puding lokal, mengintegrasikan Google Apps Script untuk pencatatan pesanan pelanggan dan checkout otomatis via WhatsApp.",
    role: "Frontend Developer — UI/UX design, responsive coding, and order automation pipeline",
    role_id: "Frontend Developer — Desain UI/UX, penulisan kode responsif, dan alur otomatisasi pesanan",
    techStack: ["HTML5", "TailwindCSS", "JavaScript", "Google Script", "Vercel"],
    image: "/project/fla-o-krezz.png",
    featured: false,
    links: {
      live: "https://fla-o-krezz.vercel.app",
    },
  },
  {
    id: "youth-of-nibras",
    number: "PROJECT_08",
    title: "#17(You)thOfNibras",
    category: "WEB APP",
    year: "2025",
    tagline: "Interactive Visual Storytelling Celebration Web",
    tagline_id: "Website Interaktif Storytelling Perayaan Ulang Tahun",
    description:
      "Interactive 17th birthday celebration microsite featuring custom scroll animations, interactive message guestbook connected to Google Sheets, and responsive design.",
    description_id:
      "Microsite perayaan interaktif dengan animasi scroll kustom, buku tamu pesan interaktif yang terhubung ke Google Sheets, dan tata letak responsif.",
    role: "Frontend Developer — Creative direction, interactive animation design, and API integration",
    role_id: "Frontend Developer — Arahan kreatif, desain animasi interaktif, dan integrasi API",
    techStack: ["React.js", "Vite", "Google Script", "TailwindCSS", "Vercel"],
    image: "/project/nibras.png",
    featured: false,
    links: {
      live: "https://17youth-of-nibras.vercel.app/",
    },
  },
  {
    id: "esr",
    number: "PROJECT_09",
    title: "Emergency Service Response (ESR)",
    category: "WEB APP",
    year: "2024",
    tagline: "Incident Reporting & Dispatch Platform",
    tagline_id: "Platform Pelaporan Kejadian Darurat & Disposisi",
    description:
      "Academic final project for Information Systems Analysis & Design. Allows citizens to report emergencies with geolocation coordinates directly to dispatch authorities.",
    description_id:
      "Tugas besar mata kuliah Analisis & Perancangan Sistem Informasi. Memungkinkan warga melaporkan insiden darurat lengkap dengan koordinat geolokasi kepada petugas.",
    role: "Fullstack Developer — Incident intake forms, authority dashboard, and database design",
    role_id: "Fullstack Developer — Formulir pelaporan insiden, dashboard petugas, dan desain basis data",
    techStack: ["PHP", "JavaScript", "MySQL", "CSS3", "HTML5"],
    image: "/project/esr.jpeg",
    featured: false,
    links: {
      github: "https://github.com/rofiframadhanks/esr",
    },
  },
];
