import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Interface untuk skill data
interface Skill {
  title: string;
  percentage: number;
  icon: string;
  gradient: string;
  description: string;
  details: string[];
}

// Definisi data skills sesuai dengan yang ada di index.tsx
const skillsData: Record<string, Skill> = {
  html5: {
    title: "HTML5",
    percentage: 90,
    icon: "🌐",
    gradient: "from-orange-400 to-red-500",
    description: "Struktur dasar web development dengan semantic HTML5 untuk membangun website yang modern dan accessible.",
    details: [
      "Semantic HTML elements untuk SEO yang lebih baik",
      "Forms dan input validation",
      "Accessibility best practices (ARIA)",
      "Progressive Web Apps (PWA) fundamentals",
      "HTML5 APIs seperti Canvas dan Local Storage"
    ]
  },
  css3: {
    title: "CSS3",
    percentage: 85,
    icon: "🎨",
    gradient: "from-blue-400 to-indigo-500",
    description: "Styling dan layout modern dengan CSS3 untuk membuat design yang responsive dan menarik.",
    details: [
      "Flexbox dan CSS Grid untuk layout modern",
      "Responsive design dengan media queries",
      "CSS animations dan transitions",
      "CSS preprocessors (Sass/SCSS)",
      "CSS-in-JS dan modern CSS methodologies"
    ]
  },
  tailwindcss: {
    title: "Tailwind CSS",
    percentage: 88,
    icon: "💨",
    gradient: "from-cyan-400 to-blue-500",
    description: "Utility-first CSS framework untuk rapid development dan design yang konsisten.",
    details: [
      "Utility-first approach untuk development cepat",
      "Custom design system dan component library",
      "Responsive design dengan mobile-first approach",
      "Dark mode implementation",
      "Performance optimization dengan purging"
    ]
  },
  javascript: {
    title: "JavaScript",
    percentage: 82,
    icon: "⚡",
    gradient: "from-yellow-400 to-orange-500",
    description: "Programming language untuk interaktivitas web dan pengembangan aplikasi modern.",
    details: [
      "ES6+ features (Arrow functions, Destructuring, Modules)",
      "Async/await dan Promise handling",
      "DOM manipulation dan Event handling",
      "API integration dan AJAX/Fetch",
      "Object-oriented dan Functional programming"
    ]
  },
  git: {
    title: "Git",
    percentage: 78,
    icon: "🔀",
    gradient: "from-red-400 to-pink-500",
    description: "Version control system untuk collaborative development dan project management.",
    details: [
      "Git workflow dan branching strategies",
      "Collaborative development dengan GitHub/GitLab",
      "Merge conflict resolution",
      "Git hooks dan automation",
      "Code review dan pull request management"
    ]
  },
  mysql: {
    title: "MySQL",
    percentage: 75,
    icon: "🗄️",
    gradient: "from-blue-500 to-indigo-600",
    description: "Relational database management system untuk data storage dan retrieval.",
    details: [
      "Database design dan normalization",
      "Complex SQL queries dan joins",
      "Stored procedures dan functions",
      "Database optimization dan indexing",
      "Backup, recovery, dan security best practices"
    ]
  },
  nodejs: {
    title: "Node.js",
    percentage: 80,
    icon: "🟢",
    gradient: "from-green-400 to-emerald-500",
    description: "JavaScript runtime untuk server-side development dan building scalable applications.",
    details: [
      "Express.js framework untuk RESTful APIs",
      "Async programming dengan callbacks, promises, async/await",
      "NPM package management dan module system",
      "File system operations dan stream processing",
      "Authentication dan authorization implementation"
    ]
  },
  kotlin: {
    title: "Kotlin",
    percentage: 85,
    icon: "📱",
    gradient: "from-purple-400 to-indigo-500",
    description: "Modern programming language untuk Android development dan multiplatform applications.",
    details: [
      "Android app development dengan Kotlin",
      "Jetpack Compose untuk modern UI development",
      "Coroutines untuk asynchronous programming",
      "MVVM architecture pattern",
      "REST API integration dan Room database"
    ]
  },
  laravel: {
    title: "Laravel",
    percentage: 83,
    icon: "🔧",
    gradient: "from-red-500 to-orange-500",
    description: "PHP framework untuk rapid web application development dengan elegant syntax.",
    details: [
      "MVC architecture dan Eloquent ORM",
      "RESTful API development",
      "Authentication dan authorization",
      "Database migrations dan seeding",
      "Blade templating engine dan Artisan commands"
    ]
  },
  flutter: {
    title: "Flutter",
    percentage: 77,
    icon: "🦋",
    gradient: "from-blue-400 to-cyan-400",
    description: "Cross-platform framework untuk building native mobile applications dengan single codebase.",
    details: [
      "Widget-based UI development",
      "State management dengan Provider/Bloc",
      "Navigation dan routing",
      "HTTP requests dan API integration",
      "Platform-specific integrations dan plugins"
    ]
  },
  googleworkspaces: {
    title: "Google Workspaces",
    percentage: 70,
    icon: "🔍",
    gradient: "from-red-500 to-yellow-500",
    description: "Suite produktivitas Google untuk collaboration dan business productivity.",
    details: [
      "Google Docs, Sheets, dan Slides untuk collaboration",
      "Google Drive untuk file management dan sharing",
      "Gmail dan Calendar untuk communication",
      "Google Meet untuk video conferencing",
      "Admin console untuk workspace management"
    ]
  }
};

export default function AboutPage() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 100, easing: 'ease-out-cubic' });
  }, []);

  const openSkillModal = (key: string) => {
    setSelectedSkill(skillsData[key]);
    document.body.style.overflow = 'hidden';
  };

  const closeSkillModal = () => {
    setSelectedSkill(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="font-jetbrains bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 min-h-screen text-white relative overflow-x-hidden">
      {/* Header & Profile sections ... keep your existing JSX here ... */}

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10" data-aos="fade-down" data-aos-delay="600">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold gradient-text text-center mb-8">
            Let's see what can I offer you! 😎
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([key, skill]) => (
              <div
                key={key}
                onClick={() => openSkillModal(key)}
                className="skills-card p-8 w-full cursor-pointer transform hover:scale-105 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-400/50"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="text-center mb-4">
                  <span className="text-4xl">{skill.icon}</span>
                  <h3 className="text-xl font-bold mt-2">{skill.title}</h3>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Skill Level</span>
                  <span className="text-sm font-bold">{skill.percentage}%</span>
                </div>
                <div className="progress-bar bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className={`progress-fill bg-gradient-to-r ${skill.gradient} h-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedSkill && (
        <div
          className="skill-modal fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeSkillModal}
        >
          <div
            className="modal-content bg-gray-800 rounded-2xl p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
              onClick={closeSkillModal}
            >
              &times;
            </button>

            <div className="text-center mb-6">
              <span className="text-6xl">{selectedSkill.icon}</span>
              <h2 className="text-3xl font-bold mt-4">{selectedSkill.title}</h2>
            </div>

            <div className="mb-6">
              <p className="text-lg text-gray-300 leading-relaxed">{selectedSkill.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Kemampuan & Pengalaman:</h3>
              <ul className="space-y-2 text-gray-300">
                {selectedSkill.details.map((detail: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 bg-gray-700 rounded-lg p-4">
              <span className="font-bold text-cyan-400">Skill Level:</span>
              <div className="level-bar bg-gray-600 rounded-full flex-1 h-4 overflow-hidden">
                <div
                  className={`level-fill bg-gradient-to-r ${selectedSkill.gradient} h-full transition-all duration-500`}
                  style={{ width: `${selectedSkill.percentage}%` }}
                />
              </div>
              <span className="font-bold text-xl">{selectedSkill.percentage}%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 