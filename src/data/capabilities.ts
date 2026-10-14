export interface SkillGroup {
  id: string;
  code: string;
  title: string;
  title_id?: string;
  description: string;
  description_id?: string;
  skills: {
    name: string;
    level: "Core" | "Advanced" | "Proficient";
    detail: string;
    detail_id?: string;
  }[];
}

export const capabilitiesData: SkillGroup[] = [
  {
    id: "web-engineering",
    code: "STACK_01",
    title: "Web & Frontend Engineering",
    title_id: "Rekayasa Web & Frontend",
    description: "Building responsive, component-driven web applications optimized for speed, accessibility, and high conversion.",
    description_id: "Membangun aplikasi web responsif berbasis komponen modular dengan optimasi kecepatan, aksesibilitas, dan konversi tinggi.",
    skills: [
      { name: "React.js", level: "Core", detail: "Modern hooks, custom hooks, component composition, state management", detail_id: "Hooks modern, custom hooks, komposisi komponen, manajemen state" },
      { name: "Next.js", level: "Core", detail: "App router, SSR, static generation, API routes, performance tuning", detail_id: "App router, SSR, static generation, API routes, tuning performa" },
      { name: "TypeScript", level: "Proficient", detail: "Strict type safety, interfaces, generic types, developer ergonomics", detail_id: "Strict type safety, interface, generic types, ergonomi kode" },
      { name: "Tailwind CSS", level: "Core", detail: "Design systems, utility-first styling, v4 tokens, responsive layouts", detail_id: "Design system, utility-first, token v4, layout responsif" },
      { name: "HTML5 & CSS3", level: "Core", detail: "Semantic landmarks, Flexbox, Grid, CSS animations, WCAG accessibility", detail_id: "Landmark semantik, Flexbox, Grid, animasi CSS, aksesibilitas WCAG" },
      { name: "JavaScript (ES6+)", level: "Core", detail: "Async/await, DOM APIs, modern ES syntax, functional patterns", detail_id: "Async/await, DOM APIs, sintaks ES modern, functional patterns" },
    ],
  },
  {
    id: "mobile-engineering",
    code: "STACK_02",
    title: "Mobile App Development",
    title_id: "Pengembangan Aplikasi Mobile",
    description: "Engineering cross-platform and native mobile applications with 60fps gesture response, safe-area ergonomics, and offline-first data sync.",
    description_id: "Membangun aplikasi mobile lintas platform dan native dengan respon gestur 60fps, ergonomi safe-area, dan sinkronisasi offline-first.",
    skills: [
      { name: "React Native", level: "Core", detail: "Cross-platform mobile UI, React Navigation, native bridge integration", detail_id: "UI mobile cross-platform, React Navigation, integrasi bridge native" },
      { name: "Expo", level: "Core", detail: "EAS build pipelines, Expo SDK, rapid prototyping, OTA updates", detail_id: "Pipeline EAS build, Expo SDK, prototipe cepat, OTA updates" },
      { name: "Android (Kotlin)", level: "Proficient", detail: "MVVM architecture, Jetpack components, Coroutines, Retrofit", detail_id: "Arsitektur MVVM, komponen Jetpack, Coroutines, Retrofit" },
      { name: "Mobile UI/UX", level: "Advanced", detail: "Touch ergonomics, safe areas, haptic feedback, responsive mobile viewports", detail_id: "Ergonomi sentuhan, safe areas, respon haptic, viewport mobile" },
    ],
  },
  {
    id: "backend-database",
    code: "STACK_03",
    title: "Backend, APIs & Databases",
    title_id: "Backend, API & Basis Data",
    description: "Designing reliable server-side endpoints, data persistence schemas, and authenticated communication layers.",
    description_id: "Merancang endpoint server andal, skema persistensi data terstruktur, dan layer komunikasi terautentikasi.",
    skills: [
      { name: "Node.js & Express", level: "Proficient", detail: "RESTful API creation, middleware, authentication flows, error handling", detail_id: "Pembuatan REST API, middleware, alur autentikasi, penanganan error" },
      { name: "Laravel (PHP)", level: "Proficient", detail: "MVC architecture, Eloquent ORM, database migrations, Blade templates", detail_id: "Arsitektur MVC, Eloquent ORM, migrasi database, template Blade" },
      { name: "MongoDB", level: "Proficient", detail: "Document modeling, aggregation pipelines, indexing, NoSQL schemas", detail_id: "Pemodelan dokumen, pipeline agregasi, indexing, skema NoSQL" },
      { name: "MySQL", level: "Proficient", detail: "Relational schema design, complex joins, transactions, query optimization", detail_id: "Desain skema relasional, join kompleks, transaksi, optimasi query" },
      { name: "RESTful API Design", level: "Core", detail: "Contract consistency, HTTP status semantics, JWT bearer authentication", detail_id: "Konsistensi kontrak, semantik HTTP status, autentikasi JWT bearer" },
    ],
  },
  {
    id: "tooling-practices",
    code: "STACK_04",
    title: "Tooling, Cloud & Engineering Practices",
    title_id: "Tooling, Cloud & Praktik Rekayasa",
    description: "Maintaining strict development standards, automated CI/CD pipelines, and continuous performance monitoring.",
    description_id: "Menjaga disiplin pengembangan terstandar, pipeline deployment otomatis, dan monitoring performa berkala.",
    skills: [
      { name: "Git & GitHub", level: "Core", detail: "Branching workflows, merge conflicts, pull request reviews, versioning", detail_id: "Alur branching, merge conflicts, review pull request, versioning" },
      { name: "Firebase", level: "Proficient", detail: "Authentication, Firestore database, storage, security rules", detail_id: "Autentikasi, basis data Firestore, storage, aturan keamanan" },
      { name: "Vercel & Cloud Hosting", level: "Core", detail: "Edge deployments, continuous deployment (CD), custom domains, SSL", detail_id: "Edge deployment, integrasi CD, custom domain, sertifikat SSL" },
      { name: "SEO & Web Vitals", level: "Advanced", detail: "Lighthouse optimization, OpenGraph meta tags, Google Search Console", detail_id: "Optimasi Lighthouse, tag meta OpenGraph, Google Search Console" },
      { name: "Google Cloud Platform", level: "Proficient", detail: "Cloud storage, basic compute and model deployment workflows", detail_id: "Cloud storage, komputasi dasar, dan alur deployment model" },
    ],
  },
];
