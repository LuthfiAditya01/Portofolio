import { useState, useEffect } from "react";
import Metatags from "./utils/metatags";
import "./about.css";

// Interface untuk skill data
interface Skill {
  type: string;
  title: string;
  icon: string;
  percentage: number;
  gradient: string;
  description: string;
  details: string[];
  experience: string;
}

export default function About() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalAnimating, setIsModalAnimating] = useState(false);

  const skillsData: Record<string, Skill> = {
    // Hard Skills
    html: { type: "hard", title: "HTML", icon: "🌐", percentage: 90, gradient: "from-orange-500 to-red-500", description: "Bahasa markup standar untuk membuat struktur halaman web.", details: ["✅ Elemen HTML5 semantik (article, section, nav, dll.)", "✅ Penanganan dan validasi formulir", "✅ Aksesibilitas (label ARIA, struktur semantik)", "✅ Meta tag dan optimisasi SEO", "✅ Gambar dan media query responsif", "✅ Web Components dan Custom Elements", "🔄 API Canvas tingkat lanjut (Dalam Proses Belajar)"], experience: "Mengembangkan struktur web modern selama sekitar 2 tahun dengan HTML5 modern. Berpengalaman dalam membangun situs web yang responsif dan dapat diakses." },
    css: { type: "hard", title: "CSS3", icon: "🎨", percentage: 75, gradient: "from-blue-500 to-indigo-500", description: "Bahasa stylesheet untuk merancang antarmuka dan tata letak halaman web.", details: ["✅ CSS Grid dan Flexbox untuk tata letak modern", "✅ Animasi dan Transisi CSS", "✅ Desain Responsif dengan Media Query", "✅ Variabel CSS (Properti Kustom)", "✅ Preprocessor SASS/SCSS", "🔄 Solusi CSS-in-JS (styled-components)", "🔄 API CSS Houdini tingkat lanjut"], experience: "Mampu membuat sistem desain yang konsisten dan animasi yang halus. Fokus pada kinerja dan kompatibilitas lintas-browser." },
    tailwind: { type: "hard", title: "Tailwind CSS", icon: "🎭", percentage: 80, gradient: "from-cyan-500 to-blue-500", description: "Kerangka kerja CSS utility-first untuk pengembangan UI yang cepat.", details: ["✅ Kelas utilitas dan modifier responsif", "✅ Sistem desain kustom dengan tailwind.config.js", "✅ Pola komposisi komponen", "✅ Implementasi mode gelap", "✅ Ekosistem plugin (forms, typography, dll.)", "✅ Kompilasi JIT (Just-In-Time)", "🔄 Integrasi Headless UI"], experience: "Menggunakan Tailwind untuk membangun UI yang konsisten dan mudah dipelihara. Ahli dalam mengoptimalkan ukuran bundel dan kinerja." },
    git: { type: "hard", title: "Git", icon: "📚", percentage: 70, gradient: "from-red-500 to-orange-500", description: "Sistem kontrol versi untuk pengembangan kolaboratif.", details: ["✅ Perintah Git dasar (add, commit, push, pull)", "✅ Strategi percabangan (Git Flow, GitHub Flow)", "✅ Alur kerja Merge vs Rebase", "✅ Resolusi konflik", "✅ Kolaborasi GitHub/GitLab", "🔄 Git hooks dan otomasi tingkat lanjut", "🔄 Git submodules dan subtrees"], experience: "Menggunakan Git untuk semua proyek pengembangan. Berpengalaman dalam kolaborasi tim dan proses peninjauan kode." },
    mysql: { type: "hard", title: "MySQL", icon: "🗄️", percentage: 75, gradient: "from-blue-400 to-blue-600", description: "Sistem manajemen basis data relasional yang populer.", details: ["✅ Desain dan normalisasi basis data", "✅ Query SQL kompleks (JOIN, subqueries, dll.)", "✅ Pengindeksan untuk optimisasi kinerja", "✅ Stored procedures dan triggers", "✅ Pencadangan dan pemulihan basis data", "🔄 Clustering dan replikasi MySQL", "🔄 Penyetelan dan pemantauan kinerja"], experience: "Mengelola basis data untuk aplikasi web skala menengah. Fokus pada optimisasi query dan integritas data." },
    nodejs: { type: "hard", title: "Node.js", icon: "🚀", percentage: 60, gradient: "from-green-500 to-green-600", description: "Runtime JavaScript untuk pengembangan sisi server.", details: ["✅ Kerangka kerja Express.js", "✅ Pengembangan RESTful API", "✅ Middleware dan routing", "✅ Operasi sistem file", "✅ Manajemen paket NPM", "🔄 GraphQL dengan Apollo Server", "🔄 Arsitektur Microservices"], experience: "Membangun API backend dan aplikasi sisi server. Sambil memperdalam pemrograman asinkron dan pola microservices." },
    kotlin: { type: "hard", title: "Kotlin", icon: "📱", percentage: 70, gradient: "from-purple-500 to-indigo-500", description: "Bahasa pemrograman modern untuk pengembangan Android.", details: ["✅ Pengembangan aplikasi Android", "✅ Sintaks dan idiom Kotlin", "✅ Coroutines untuk pemrograman asinkron", "✅ Komponen Android Jetpack", "✅ Integrasi basis data Room", "🔄 Kotlin Multiplatform Mobile (KMM)", "🔄 Toolkit UI Jetpack Compose"], experience: "Mengembangkan aplikasi Android native dengan Kotlin. Berpengalaman dalam arsitektur MVVM dan pengembangan Android modern." },
    laravel: { type: "hard", title: "Laravel", icon: "⚡", percentage: 75, gradient: "from-red-500 to-pink-500", description: "Kerangka kerja PHP yang elegan untuk pengembangan aplikasi web.", details: ["✅ Pola arsitektur MVC", "✅ Eloquent ORM dan migrasi basis data", "✅ Otentikasi dan otorisasi", "✅ Pengembangan API dengan Laravel Sanctum", "✅ Mesin template Blade", "✅ Antarmuka baris perintah Artisan", "🔄 Laravel Livewire untuk komponen reaktif"], experience: "Membangun aplikasi web dengan Laravel. Fokus pada arsitektur kode yang bersih dan praktik terbaik keamanan." },
    flutter: { type: "hard", title: "Flutter", icon: "💙", percentage: 35, gradient: "from-blue-400 to-cyan-400", description: "Kerangka kerja pengembangan seluler lintas platform oleh Google.", details: ["✅ Dasar-dasar bahasa pemrograman Dart", "✅ Pohon widget dan manajemen state", "✅ Implementasi Material Design", "✅ Navigasi dan routing dasar", "🔄 Manajemen state tingkat lanjut (BLoC, Provider)", "🔄 Channel platform untuk integrasi native", "🔄 Pengembangan Flutter Web dan Desktop"], experience: "Saat ini sedang aktif belajar Flutter untuk pengembangan lintas platform. Target untuk mencapai kemahiran dalam 6 bulan ke depan." },
    "google-workspace": { type: "hard", title: "Google Workspace", icon: "📊", percentage: 90, gradient: "from-yellow-500 to-orange-500", description: "Suite Produktivitas berbasis cloud oleh Google.", details: ["✅ Rumus dan skrip tingkat lanjut Google Sheets", "✅ Kolaborasi dan pemformatan Google Docs", "✅ Organisasi dan berbagi Google Drive", "✅ Komunikasi profesional Gmail", "✅ Penjadwalan dan manajemen Google Calendar", "✅ Google Forms untuk pengumpulan data", "✅ Otomasi Google Apps Script"], experience: "Pengguna mahir Google Workspace untuk produktivitas dan kolaborasi. Membuat skrip otomasi untuk optimisasi alur kerja." },

    // Additional Hard Skills shown in the progress list
    api: { 
      type: "hard", 
      title: "API", 
      icon: "🔗", 
      percentage: 75, 
      gradient: "from-yellow-500 to-orange-500", 
      description: "Perancangan dan konsumsi RESTful API untuk integrasi front-end dan back-end.", 
      details: [
        "✅ Perancangan endpoint REST (resource-oriented)",
        "✅ Autentikasi Bearer/JWT dan pengelolaan header",
        "✅ Fetch API/Axios, error handling, retry sederhana",
        "✅ Pagination, filtering, dan sorting di sisi API",
        "✅ Dokumentasi API (OpenAPI/Swagger) dasar",
        "🔄 Webhook dan integrasi real-time (SSE/WebSocket)"
      ],
      experience: "Membangun dan mengonsumsi REST API pada proyek web skala kecil-menengah, fokus pada konsistensi kontrak dan penanganan error."
    },
    "react-native": { 
      type: "hard", 
      title: "React Native", 
      icon: "⚛️", 
      percentage: 90, 
      gradient: "from-yellow-500 to-orange-500", 
      description: "Pengembangan aplikasi mobile lintas platform dengan React Native, komponen reusable, dan integrasi native.", 
      details: [
        "✅ Hooks dasar & lanjutan untuk state management mobile",
        "✅ React Navigation untuk navigasi stack & tab",
        "✅ Komponen native (View, Text, ScrollView, FlatList)",
        "✅ Integrasi native modules dan platform-specific code",
        "✅ Styling dengan StyleSheet dan Flexbox mobile",
        "🔄 Animasi dengan Animated API & Reanimated",
        "🔄 AsyncStorage & pengelolaan data lokal"
      ],
      experience: "Membangun aplikasi mobile lintas platform dengan React Native, fokus pada UI/UX responsif dan integrasi fitur native."
    },
    "expo": { 
      type: "hard", 
      title: "Expo", 
      icon: "📱", 
      percentage: 85, 
      gradient: "from-indigo-500 to-purple-500", 
      description: "Platform dan framework untuk mempercepat pengembangan aplikasi React Native dengan tools dan services terintegrasi.", 
      details: [
        "✅ Expo CLI untuk quick start & development workflow",
        "✅ Expo Go untuk testing langsung di perangkat",
        "✅ Expo SDK (Camera, Location, FileSystem, dll.)",
        "✅ EAS Build untuk native build cloud-based",
        "✅ Over-the-air (OTA) updates dengan EAS Update",
        "🔄 Expo Router untuk navigasi berbasis file",
        "🔄 Custom native modules dengan config plugins"
      ],
      experience: "Menggunakan Expo untuk mempercepat development cycle aplikasi React Native dengan akses mudah ke native APIs dan deployment."
    },
    "next-js": { 
      type: "hard", 
      title: "Next JS", 
      icon: "⏭️", 
      percentage: 85, 
      gradient: "from-yellow-500 to-orange-500", 
      description: "Pengembangan aplikasi React dengan kemampuan SSR/SSG/ISR dan routing berbasis file.", 
      details: [
        "✅ Routing berbasis file (pages/app router)",
        "✅ Data fetching (SSR, SSG, ISR) dan caching",
        "✅ Optimasi gambar & font bawaan",
        "✅ API routes untuk endpoint ringan",
        "🔄 Middleware & edge runtime",
        "🔄 Konfigurasi advanced untuk SEO & i18n"
      ],
      experience: "Mengerjakan proyek berbasis Next.js dengan fokus pada performa, SEO, dan pola data fetching yang tepat guna."
    },
    mongodb: { 
      type: "hard", 
      title: "MongoDB", 
      icon: "🍃", 
      percentage: 80, 
      gradient: "from-yellow-500 to-orange-500", 
      description: "Basis data dokumen NoSQL untuk aplikasi modern yang fleksibel.", 
      details: [
        "✅ Perancangan skema dokumen dan relasi (embedded/reference)",
        "✅ Query dasar & indeks untuk performa",
        "✅ Aggregation pipeline untuk analitik data",
        "✅ Praktik transaksi & konsistensi dasar",
        "🔄 ODM Mongoose & validasi skema",
        "🔄 Sharding & replikasi"
      ],
      experience: "Membangun layer data dengan MongoDB untuk kebutuhan CRUD cepat dengan pipeline agregasi sederhana."
    },
    // Soft Skills
    teamwork: { type: "soft", title: "Teamwork", icon: "🤝", percentage: 90, gradient: "from-green-500 to-emerald-500", description: "Kemampuan untuk bekerja secara efektif dalam sebuah tim.", details: ["✅ Mendengarkan aktif dan empati dalam komunikasi", "✅ Resolusi konflik dan pemecahan masalah kolaboratif", "✅ Berbagi pengetahuan dan membimbing junior", "✅ Kolaborasi lintas fungsi", "✅ Beradaptasi dengan berbagai tipe kepribadian", "✅ Berkontribusi dalam sesi brainstorming", "✅ Mendukung tujuan tim dan kesuksesan bersama"], experience: "Berpengalaman dalam memimpin dan berkontribusi pada berbagai proyek tim. Selalu fokus pada sinergi dan hasil kolektif." },
    "public-speaking": { type: "soft", title: "Public Speaking", icon: "🎤", percentage: 85, gradient: "from-blue-500 to-indigo-500", description: "Kemampuan untuk berkomunikasi secara efektif di depan audiens.", details: ["✅ Presentasi proyek kepada para pemangku kepentingan", "✅ Demo teknis dan pameran produk", "✅ Fasilitasi lokakarya dan penyampaian pelatihan", "✅ Berbicara impromptu dan menangani sesi tanya jawab", "✅ Bercerita untuk presentasi yang menarik", "🔄 Berbicara di hadapan audiens besar (100+ orang)", "🔄 Berbicara di konferensi internasional"], experience: "Sering mempresentasikan hasil proyek dan solusi teknis. Nyaman berbicara dalam berbagai suasana formal dan informal." },
    "time-management": { type: "soft", title: "Time Management", icon: "⏰", percentage: 80, gradient: "from-purple-500 to-pink-500", description: "Kemampuan untuk mengelola waktu dan prioritas secara efisien.", details: ["✅ Prioritas tugas dengan Matriks Eisenhower", "✅ Perencanaan jadwal proyek dan pelacakan milestone", "✅ Teknik Pomodoro untuk sesi kerja mendalam", "✅ Pemblokiran kalender untuk waktu kerja terfokus", "✅ Delegasi dan distribusi tugas", "🔄 Metodologi produktivitas tingkat lanjut (GTD, PARA)", "🔄 Optimisasi kolaborasi lintas zona waktu"], experience: "Menggunakan berbagai alat dan metodologi untuk produktivitas optimal. Secara konsisten memenuhi tenggat waktu dan milestone proyek." },
    "critical-thinking": { type: "soft", title: "Critical Thinking", icon: "🧠", percentage: 85, gradient: "from-yellow-500 to-orange-500", description: "Kemampuan untuk menganalisis masalah dan membuat keputusan logis.", details: ["✅ Dekomposisi masalah dan analisis akar penyebab", "✅ Pengambilan keputusan berbasis data", "✅ Penilaian risiko dan perencanaan mitigasi", "✅ Evaluasi solusi alternatif", "✅ Penalaran logis dan argumen berbasis bukti", "✅ Pemikiran sistem untuk masalah kompleks", "🔄 Kerangka kerja analitis tingkat lanjut (SWOT, 5 Whys)"], experience: "Menerapkan pemikiran kritis dalam pemecahan masalah teknis dan perencanaan strategis. Fokus pada solusi berbasis bukti." },
    adaptable: { type: "soft", title: "Adaptable", icon: "🔄", percentage: 90, gradient: "from-cyan-500 to-blue-500", description: "Kemampuan untuk beradaptasi dengan perubahan dan situasi baru.", details: ["✅ Cepat belajar teknologi dan kerangka kerja baru", "✅ Pendekatan fleksibel terhadap perubahan persyaratan", "✅ Adaptabilitas budaya dalam tim yang beragam", "✅ Menerima umpan balik dan perbaikan berkelanjutan", "✅ Ketahanan dalam menghadapi tantangan", "✅ Perluasan zona nyaman yang konsisten", "✅ Manajemen perubahan dan kepemimpinan transisi"], experience: "Berkembang di lingkungan yang dinamis dan perubahan teknologi yang cepat. Selalu bersemangat untuk menjelajahi domain dan metodologi baru." },
  };

  const openSkillModal = (key: string) => {
    setSelectedSkill(skillsData[key]);
    setIsModalVisible(true);
    document.body.style.overflow = "hidden";
    
    // Trigger animation setelah modal visible
    setTimeout(() => {
      setIsModalAnimating(true);
    }, 10);
  };

  const closeSkillModal = () => {
    setIsModalAnimating(false);
    
    // Delay sebelum menghilangkan modal untuk animasi keluar
    setTimeout(() => {
      setSelectedSkill(null);
      setIsModalVisible(false);
      document.body.style.overflow = "auto";
    }, 300);
  };

  // Close modal dengan Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedSkill) {
        closeSkillModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedSkill]);

  return (
    <>
      <Metatags
        name="About me?"
        title="About me?"
        image={"./letter-a.png"}
      />

      <div className="relative z-10 pt-24 pb-10">
        <div className="container mx-auto px-4">
          <div className="lg:flex w-full items-center justify-center gap-12 mt-20 mb-20">
            {/* <!-- Profile Image --> */}
            <div
              data-aos="fade-down"
              data-aos-delay="200"
              className="flex justify-center mb-8 lg:mb-0">
              <div className="profile-image max-w-xs md:max-w-sm lg:max-w-md">
                <img
                  src="./foto-profil.png"
                  className="w-full h-auto rounded-lg"
                  alt="Luthfi Aditya Profile"
                  loading="eager"
                />
              </div>
            </div>

            {/* <!-- Profile Details --> */}
            <section
              id="details"
              className="flex-1 max-w-3xl">
              <div
                data-aos="fade-left"
                data-aos-delay="400"
                className="profile-card p-8">
                <h2 className="text-3xl font-bold gradient-text mb-6">
                  <i className="fas fa-hand-peace mr-3"></i>Hello there! ヾ(•ω•`)o
                </h2>

                <div className="space-y-6 text-slate-200 leading-relaxed">
                  <p className="text-lg">
                    Hi! I'm <span className="font-bold text-blue-400">Luthfi Aditya</span>, a passionate <span className="font-bold text-green-400">Full-Stack Developer</span> specializing in 
                    <span className="font-bold text-green-400"> Web</span> and <span className="font-bold text-purple-400">Mobile Application Development</span>. Currently in my 7th semester at <span className="font-bold text-blue-400">Lampung University</span>, I transform ideas into elegant, user-centric digital solutions.
                  </p>

                  <p className="text-lg">
                    With expertise in <span className="font-bold text-cyan-400">React Native, Next.js, and Node.js</span>, I've successfully delivered multiple production-ready applications. My approach combines <span className="font-bold text-yellow-400">clean code principles</span> with 
                    <span className="font-bold text-pink-400"> modern development practices</span> to create scalable, performant solutions.
                  </p>

                  <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50">
                    <h3 className="text-xl font-bold text-blue-400 mb-4">Featured Projects:</h3>
                    <ol className="list-decimal list-outside pl-6 space-y-4">
                      <li className="text-slate-300">
                        <strong className="text-green-400">Mental.ly</strong> — AI-Powered Mental Health Prediction App
                        <p className="mt-2 text-sm text-slate-400">Led mobile development using <span className="text-green-300">React Native & TensorFlow</span>, integrating ML models for real-time mental health assessment. Successfully graduated from <span className="text-green-300">Bangkit Academy</span> (Google, GoTo, Traveloka) Independent Study Program.</p>
                      </li>
                      <li className="text-slate-300">
                        <strong className="text-blue-400">Magnet</strong> — Internship Management System
                        <p className="mt-2 text-sm text-slate-400">Developed attendance tracking features using <span className="text-blue-300">Laravel & MySQL</span> for BPS Bandar Lampung. Collaborated with cross-university team (ITERA & Unila) to deliver mission-critical government software.</p>
                      </li>
                    </ol>
                  </div>

                  <p className="text-lg">
                    <span className="font-bold text-cyan-400">Beyond coding</span>, I maintain peak performance through regular fitness training and jogging. I'm a <span className="font-bold text-yellow-400">quick learner</span> who thrives in dynamic environments, constantly expanding my technical expertise and soft skills to deliver exceptional results.
                    <span className="text-yellow-400">💪✨</span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* // <!-- Enhanced Skills Section --> */}
      <section
        data-aos="fade-down"
        data-aos-delay="600"
        id="skills"
        className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          {/* <!-- Section Title --> */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold gradient-text mb-4">Let's see what can I offer you! 😎</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          {/* <!-- Skills Cards Container --> */}
          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
            {/* <!-- Hard Skills Card --> */}
            <div
              data-aos="fade-down"
              data-aos-delay="800"
              className="skills-card p-8 w-full max-w-2xl">
              <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">
                <i className="fas fa-code mr-3"></i>Hard Skills
              </h2>

              <div className="space-y-6">
                {/* <!-- HTML Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="html"
                  onClick={() => openSkillModal("html")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-orange-400">HTML</span>
                    <span className="text-lg font-bold text-orange-400">90%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-orange-500 to-red-500"
                      style={{ width: "90%" }}></div>
                  </div>
                </div>

                {/* <!-- CSS3 Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="css"
                  onClick={() => openSkillModal("css")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-blue-400">CSS3</span>
                    <span className="text-lg font-bold text-blue-400">75%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-blue-500 to-indigo-500"
                      style={{ width: "75%" }}></div>
                  </div>
                </div>

                {/* <!-- Tailwind CSS Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="tailwind"
                  onClick={() => openSkillModal("tailwind")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-cyan-400">Tailwind CSS</span>
                    <span className="text-lg font-bold text-cyan-400">80%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-cyan-500 to-blue-500"
                      style={{ width: "80%" }}></div>
                  </div>
                </div>

                {/* <!-- Git Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="git"
                  onClick={() => openSkillModal("git")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-red-400">Git</span>
                    <span className="text-lg font-bold text-red-400">70%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-red-500 to-orange-500"
                      style={{ width: "70%" }}></div>
                  </div>
                </div>

                {/* <!-- MySQL Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="mysql"
                  onClick={() => openSkillModal("mysql")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-blue-300">MySQL</span>
                    <span className="text-lg font-bold text-blue-300">75%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-blue-400 to-blue-600"
                      style={{ width: "75%" }}></div>
                  </div>
                </div>

                {/* <!-- Node.js Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="nodejs"
                  onClick={() => openSkillModal("nodejs")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-green-400">Node.js</span>
                    <span className="text-lg font-bold text-green-400">60%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-green-500 to-green-600"
                      style={{ width: "60%" }}></div>
                  </div>
                </div>

                {/* <!-- Kotlin Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="kotlin"
                  onClick={() => openSkillModal("kotlin")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-purple-400">Kotlin</span>
                    <span className="text-lg font-bold text-purple-400">70%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-purple-500 to-indigo-500"
                      style={{ width: "70%" }}></div>
                  </div>
                </div>

                {/* <!-- Laravel Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="laravel"
                  onClick={() => openSkillModal("laravel")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-red-400">Laravel</span>
                    <span className="text-lg font-bold text-red-400">75%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-red-500 to-pink-500"
                      style={{ width: "75%" }}></div>
                  </div>
                </div>

                {/* <!-- Flutter Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="flutter"
                  onClick={() => openSkillModal("flutter")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-blue-400">Flutter</span>
                    <span className="text-lg font-bold text-blue-400">35% (and still going 📈)</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-blue-400 to-cyan-400"
                      style={{ width: "35%" }}></div>
                  </div>
                </div>

                {/* <!-- Google Workspaces Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="google-workspace"
                  onClick={() => openSkillModal("google-workspace")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-yellow-400">Google Workspaces</span>
                    <span className="text-lg font-bold text-yellow-400">90%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-yellow-500 to-orange-500"
                      style={{ width: "90%" }}></div>
                  </div>
                </div>

                {/* <!-- API Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="api"
                  onClick={() => openSkillModal("api")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-[#98ccfd]">API</span>
                    <span className="text-lg font-bold text-[#98ccfd]">75%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r to-#4c7eb1 from-[#98ccfd]"
                      style={{ width: "75%" }}></div>
                  </div>
                </div>

                {/* <!-- React JS Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="react-native"
                  onClick={() => openSkillModal("react-native")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-[#00b7ff]">React Native</span>
                    <span className="text-lg font-bold text-[#00b7ff]">90%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-blue-300 to-[#00b7ff]"
                      style={{ width: "90%" }}></div>
                  </div>
                </div>

                {/* <!-- Expo Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="expo"
                  onClick={() => openSkillModal("expo")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-indigo-400">Expo</span>
                    <span className="text-lg font-bold text-indigo-400">85%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-indigo-500 to-purple-500"
                      style={{ width: "85%" }}></div>
                  </div>
                </div>

                {/* <!-- Next JS Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="next-js"
                  onClick={() => openSkillModal("next-js")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-yellow-400">Next JS</span>
                    <span className="text-lg font-bold text-yellow-400">85%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-yellow-500 to-orange-500"
                      style={{ width: "85%" }}></div>
                  </div>
                </div>

                {/* <!-- MongoDB Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="mongodb"
                  onClick={() => openSkillModal("mongodb")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-[#13aa52]">MongoDB</span>
                    <span className="text-lg font-bold text-[#13aa52]">80%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-green-300 to-[#13aa52]"
                      style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Soft Skills Card --> */}
            <div
              data-aos="fade-up"
              data-aos-delay="1000"
              className="skills-card p-8 w-full max-w-2xl">
              <h2 className="text-3xl font-bold text-center mb-8 text-purple-400">
                <i className="fas fa-users mr-3"></i>Soft Skills
              </h2>

              <div className="space-y-6">
                {/* <!-- Teamwork Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="teamwork"
                  onClick={() => openSkillModal("teamwork")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-green-400">Teamwork</span>
                    <span className="text-lg font-bold text-green-400">90%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-green-500 to-emerald-500"
                      style={{ width: "90%" }}></div>
                  </div>
                </div>

                {/* <!-- Public Speaking Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="public-speaking"
                  onClick={() => openSkillModal("public-speaking")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-blue-400">Public Speaking</span>
                    <span className="text-lg font-bold text-blue-400">85%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-blue-500 to-indigo-500"
                      style={{ width: "85%" }}></div>
                  </div>
                </div>

                {/* <!-- Time Management Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="time-management"
                  onClick={() => openSkillModal("time-management")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-purple-400">Time Management</span>
                    <span className="text-lg font-bold text-purple-400">80%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-purple-500 to-pink-500"
                      style={{ width: "80%" }}></div>
                  </div>
                </div>

                {/* <!-- Critical Thinking Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="critical-thinking"
                  onClick={() => openSkillModal("critical-thinking")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-yellow-400">Critical Thinking</span>
                    <span className="text-lg font-bold text-yellow-400">85%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-yellow-500 to-orange-500"
                      style={{ width: "85%" }}></div>
                  </div>
                </div>

                {/* <!-- Adaptable Progress --> */}
                <div
                  className="progress-item cursor-pointer hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300"
                  data-skill="adaptable"
                  onClick={() => openSkillModal("adaptable")}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-cyan-400">Adaptable</span>
                    <span className="text-lg font-bold text-cyan-400">90%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-cyan-500 to-blue-500"
                      style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalVisible && (
        <div
          className={`skill-modal ${isModalAnimating ? "active" : ""}`}
          onClick={closeSkillModal}>
          <div
            className={`modal-content ${isModalAnimating ? "modal-animate-in" : "modal-animate-out"}`}
            onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal"
              onClick={closeSkillModal}>
              <i className="fas fa-times"></i>
            </button>

            {selectedSkill && (
              <>
                <div className="text-center mb-6">
                  <div className="modal-icon text-6xl mb-4">{selectedSkill.icon}</div>
                  <h2 className="modal-title text-3xl font-bold">{selectedSkill.title}</h2>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${selectedSkill.type === "hard" ? "bg-blue-600/20 text-blue-400" : "bg-purple-600/20 text-purple-400"}`}>{selectedSkill.type === "hard" ? "Hard Skill" : "Soft Skill"}</span>
                </div>

                <div className="skill-details">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">{selectedSkill.description}</p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4 text-cyan-400">Kemampuan & Detail:</h3>
                    <ul className="skill-list">
                      {selectedSkill.details.map((detail: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start">
                          <span className="text-cyan-400 mr-2 mt-1 text-sm">•</span>
                          <span className="text-sm leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 bg-gray-700/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 text-green-400">Pengalaman:</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedSkill.experience}</p>
                  </div>

                  <div className="skill-level">
                    <span className="font-bold text-cyan-400">Skill Level:</span>
                    <div className="level-bar">
                      <div
                        className={`level-fill bg-gradient-to-r ${selectedSkill.gradient}`}
                        style={{ width: `${selectedSkill.percentage}%` }}
                      />
                    </div>
                    <span className="font-bold text-xl">{selectedSkill.percentage}%</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* <section className="">
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-extrabold gradient-text mb-4 text-center">
          Here is some of my certifications! 😎
        </h1>
      </section> */}
    </>
  );
}
