export interface ExperienceItem {
  id: string;
  code: string;
  role: string;
  role_id?: string;
  company: string;
  period: string;
  period_id?: string;
  type: string;
  type_id?: string;
  location: string;
  location_id?: string;
  stack: string[];
  achievements: string[];
  achievements_id?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "be-management",
    code: "EXP_01",
    role: "IT Mobile App Developer",
    role_id: "IT Mobile App Developer",
    company: "Be Management",
    period: "Sep 2025 – Jul 2026",
    period_id: "Sep 2025 – Jul 2026",
    type: "Contract / Remote",
    type_id: "Kontrak / Remote",
    location: "Tangerang Selatan, Indonesia",
    location_id: "Tangerang Selatan, Indonesia",
    stack: ["React Native", "JavaScript", "Android", "iOS", "Gradle", "Cocoapods", "REST API", "Git"],
    achievements: [
      "Engineered and maintained production React Native mobile apps with an emphasis on runtime stability, touch fluidity, and intuitive user flows.",
      "Diagnosed and resolved critical network/API integration challenges, crafting resilient token-based auth refresh handlers and graceful offline fallbacks.",
      "Partnered daily with backend engineers and QA specialists to deliver sprint features on schedule and manage native build releases.",
    ],
    achievements_id: [
      "Mengembangkan dan merawat aplikasi mobile React Native produksi dengan fokus pada stabilitas runtime, kelancaran animasi sentuh, dan alur pengguna yang intuitif.",
      "Mendiagnosis dan menyelesaikan kendala integrasi API, membangun mekanisme refresh token autentikasi yang tangguh serta fallback offline yang mulus.",
      "Bekerja sama erat setiap hari dengan backend engineer dan QA untuk mengirimkan fitur sprint tepat waktu dan mengelola rilis build native.",
    ],
  },
  {
    id: "umkm-freelance",
    code: "EXP_02",
    role: "Freelance Frontend Developer",
    role_id: "Freelance Frontend Developer",
    company: "UMKM Lokal Lampung",
    period: "Aug 2025 – Present",
    period_id: "Agu 2025 – Sekarang",
    type: "Freelance / Remote",
    type_id: "Freelance / Remote",
    location: "Lampung, Indonesia",
    location_id: "Lampung, Indonesia",
    stack: ["React.js", "Next.js", "TailwindCSS", "Firebase Auth", "Firestore", "Vercel", "Google Search Console"],
    achievements: [
      "Built conversion-focused product showcase platforms and e-commerce catalogs (e.g. Veccie Deluxe, Fla-O-Krezz) using mobile-first responsive principles.",
      "Integrated third-party APIs, direct marketplace conversion pipelines (Shopee, TikTok Shop), and Google Sheets automation.",
      "Achieved sub-second Core Web Vitals scores and established semantic SEO structures that propelled client products onto Google Search indexes.",
    ],
    achievements_id: [
      "Membangun platform etalase produk dan katalog e-commerce berorientasi konversi (seperti Veccie Deluxe, Fla-O-Krezz) dengan prinsip mobile-first yang responsif.",
      "Mengintegrasikan API pihak ketiga, alur rujukan langsung ke marketplace (Shopee, TikTok Shop), dan otomatisasi pesanan via Google Sheets.",
      "Mencapai skor Core Web Vitals di bawah satu detik serta struktur SEO semantik yang membawa produk klien ke indeks pencarian Google.",
    ],
  },
  {
    id: "bps-intern",
    code: "EXP_03",
    role: "IT Staff Intern",
    role_id: "IT Staff Intern (Magang)",
    company: "Badan Pusat Statistik (BPS) Kota Bandar Lampung",
    period: "Jun 2025 – Aug 2025",
    period_id: "Jun 2025 – Agu 2025",
    type: "Internship / On-site",
    type_id: "Magang / On-site",
    location: "Bandar Lampung, Indonesia",
    location_id: "Bandar Lampung, Indonesia",
    stack: ["React", "Next.js", "PHP", "Python", "TailwindCSS", "MySQL", "MongoDB"],
    achievements: [
      "Architected the digital attendance module for Magnet (Internship Management Portal), eliminating paper sign-in sheets for all university cohorts.",
      "Conducted codebase refactoring and database index tuning, improving portal query response times.",
      "Engineered an NLP sentiment analysis prototype in Python to categorize visitor service evaluations into actionable agency improvements.",
    ],
    achievements_id: [
      "Merancang modul presensi digital untuk portal Magnet, menghapus kebutuhan presensi kertas fisik untuk seluruh angkatan magang perguruan tinggi.",
      "Melakukan refactoring kode dan optimasi indeks database untuk mempercepat waktu respon query portal.",
      "Membangun prototipe analisis sentimen NLP berbasis Python untuk mengkategorikan evaluasi layanan pengunjung menjadi rekomendasi perbaikan instansi.",
    ],
  },
];
