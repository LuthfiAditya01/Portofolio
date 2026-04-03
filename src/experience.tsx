import Metatags from "./utils/metatags";
import "./experience.css";

type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  location: string;
  stack: string[];
  summary: string | string[];
};

type ExperienceYear = {
  year: string;
  entries: ExperienceEntry[];
};

const experienceData: ExperienceYear[] = [
  {
    year: "2025",
    entries: [
      {
        role: "IT Staff Intern",
        company: "Badan Pusat Statistik Kota Bandar Lampung",
        period: "Mei 2025 - Agustus 2025",
        location: "Bandar Lampung, Indonesia",
        stack: [
          "React",
          "Next.js",
          "PHP",
          "Python",
          "JavaScript",
          "TailwindCSS",
          "MySQL",
          "MongoDB",
        ],
        summary: [
          "Mengembangkan fitur absensi digital dalam sistem manajemen peserta magang untuk meningkatkan efisiensi administrasi.",
          "Melakukan maintenance dan refactor pada codebase existing, termasuk pengelolaan database, untuk meningkatkan stabilitas aplikasi.",
          "Membangun sistem analisis sentimen berbasis NLP untuk mengolah ulasan pengunjung booth BPS sebagai bahan evaluasi layanan.",
        ],
      },
      {
        role: "Freelance Frontend Developer",
        company: "UMKM Lokal Lampung",
        period: "September 2025 - Desember 2025",
        location: "Remote",
        stack: ["React.js", "Next.js", "Vercel", "Firebase Firestore", "Firebase Authentication", "Google Search Console"],
        summary:
          "Mengembangkan landing page promosi produk untuk UMKM dengan pendekatan mobile-first, optimalisasi performa, dan implementasi SEO dasar guna meningkatkan visibilitas dan konversi pengguna.",
      },
      {
        role: "IT Mobile App Developer",
        company: "Be Management / PT. Maju Gemilang Indotech",
        period: "September 2025 - Sekarang",
        location: "Rawa Buntu, Tangerang Selatan (Remote/WFH)",
        stack: ["React Native", "JavaScript", "Android", "REST API", "Git"],
        summary: [
          "Mengembangkan dan memelihara aplikasi mobile berbasis React Native dengan fokus pada stabilitas, performa, dan user experience.",
          "Menangani permasalahan integrasi API termasuk error handling, autentikasi, dan komunikasi data antara mobile app dan backend.",
          "Berkolaborasi dengan tim backend dan QA dalam pengembangan fitur, pengujian, serta deployment aplikasi ke environment production.",
        ],
      },
    ],
  },
];

export default function experience() {
  let itemIndex = 0;

  return (
    <>
      <Metatags
        name="Pengalaman Kerja"
        title="Pengalaman Kerja | Luthfi Aditya"
        description="Timeline pengalaman kerja dan proyek profesional saya."
        image={"./letter-a.png"}
      />

      <section id="experience-hero" className="mt-24 pt-8">
        <h1
          data-aos="fade-down"
          data-aos-delay="300"
          className="text-center mx-16 text-4xl font-bold font-['JetBrains_Mono']"
        >
          Work Experience
          <span className="ml-3">
            <i className="fa-solid fa-briefcase text-[#00FFD1]"></i>
          </span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center text-[#6B6B6B] mt-4 font-['JetBrains_Mono']"
        >
          The timeline of my professional journey, showcasing the roles I've
          held, the companies I've worked with, and the skills I've honed along
          the way.
        </p>
      </section>

      <section id="experience" className="md:m-16 m-4">
        <div className="experience-timeline">
          {experienceData.map((yearBlock) => (
            <div key={yearBlock.year}>
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="experience-year"
              >
                <h2 className="text-3xl font-bold">{yearBlock.year}</h2>
              </div>

              {yearBlock.entries.map((entry) => {
                itemIndex += 1;
                const isLeft = itemIndex % 2 === 1;
                return (
                  <div
                    key={`${yearBlock.year}-${entry.company}-${entry.role}`}
                    data-aos={isLeft ? "fade-right" : "fade-left"}
                    data-aos-delay="500"
                    className={`experience-item ${isLeft ? "left" : "right"}`}
                  >
                    <article className="experience-card shadow-md">
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-1">
                          {entry.role}
                        </h3>
                        <p className="text-[#00FFD1] text-sm mb-2">
                          {entry.company}
                        </p>
                        <div className="experience-meta mb-3">
                          <span>
                            <i className="fa-regular fa-calendar mr-2"></i>
                            {entry.period}
                          </span>
                          <span>
                            <i className="fa-solid fa-location-dot mr-2"></i>
                            {entry.location}
                          </span>
                        </div>
                        {Array.isArray(entry.summary) ? (
                          <ul className="mb-4 list-disc space-y-2 pl-5 text-md md:text-lg text-[#A0A0A0]">
                            {entry.summary.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mb-4 text-md md:text-lg">
                            {entry.summary}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {entry.stack.map((tech) => (
                            <span
                              key={`${entry.role}-${tech}`}
                              className="experience-tag text-xs px-3 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
