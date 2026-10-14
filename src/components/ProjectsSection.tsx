import { useState } from "react";
import { projectsData, type ProjectItem } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"ALL" | "FEATURED" | "WEB" | "MOBILE">("FEATURED");
  const { language } = useLanguage();
  const t = translations[language].projects;

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "FEATURED") return project.featured;
    if (filter === "WEB") return project.category === "WEB APP" || project.category === "LANDING PAGE";
    if (filter === "MOBILE") return project.category === "MOBILE APP";
    return true;
  });

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#3B3B42]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#3B3B42] bg-[#242429] px-3 py-1 font-['JetBrains_Mono'] text-xs text-[#85858D] mb-3">
              <span className="text-[#FF3B45] font-bold">01 //</span>
              <span className="text-[#F4F1E9] tracking-wider uppercase font-semibold">{t.badge}</span>
            </div>
            <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-5xl text-[#F4F1E9] tracking-tight uppercase">
              {t.titleL1}<br />
              <span className="text-[#FF3B45]">{t.titleL2}</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 font-['JetBrains_Mono'] text-[11px] sm:text-xs" role="tablist" aria-label="Project Categories">
            {(
              [
                { id: "FEATURED", label: t.tabFeatured },
                { id: "ALL", label: `${t.tabAll} (${projectsData.length})` },
                { id: "WEB", label: t.tabWeb },
                { id: "MOBILE", label: t.tabMobile },
              ] as const
            ).map((tab) => {
              const isSelected = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-2.5 sm:px-3 py-1.5 uppercase transition-all duration-150 cursor-pointer border ${
                    isSelected
                      ? "bg-[#FF3B45] text-white border-[#FF3B45] font-semibold"
                      : "bg-[#242429] text-[#85858D] border-[#3B3B42] hover:text-[#F4F1E9] hover:border-[#85858D]"
                  }`}
                  role="tab"
                  aria-selected={isSelected}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Highlighted Banner Info */}
        {filter === "FEATURED" && (
          <div className="mb-8 p-4 bg-[#242429]/60 border border-[#3B3B42] flex items-center justify-between text-xs font-['JetBrains_Mono'] text-[#85858D]">
            <div className="flex items-center gap-2">
              <span className="text-[#FF3B45] font-bold">{t.noteTag}</span>
              <span>{t.noteText}</span>
            </div>
            <span className="hidden sm:inline-block text-[#C8F169]">01 → 04</span>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project: ProjectItem) => {
            const displayTagline = language === "ID" && project.tagline_id ? project.tagline_id : project.tagline;
            const displayDesc = language === "ID" && project.description_id ? project.description_id : project.description;
            const displayRole = language === "ID" && project.role_id ? project.role_id : project.role;
            const displayOutcome = language === "ID" && project.outcome_id ? project.outcome_id : project.outcome;

            return (
              <article
                key={project.id}
                className={`bg-[#242429] border transition-all duration-200 flex flex-col justify-between overflow-hidden relative group ${
                  project.highlightRank === 1
                    ? "border-[#FF3B45]/80 shadow-lg shadow-[#FF3B45]/10"
                    : "border-[#3B3B42] hover:border-[#85858D]"
                }`}
              >
                {/* Top Accent Strip */}
                <div className="p-4 sm:p-6 pb-0">
                  <div className="flex items-center justify-between mb-4 font-['JetBrains_Mono'] text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#FF3B45]">{project.number}</span>
                      <span className="text-[#85858D]">/ {project.year}</span>
                      {project.highlightRank && (
                        <span className="bg-[#171719] text-[#C8F169] border border-[#C8F169]/30 px-2 py-0.5 font-semibold">
                          {t.rankBadge}{project.highlightRank}
                        </span>
                      )}
                    </div>
                    <span className="border border-[#3B3B42] bg-[#171719] px-2 py-0.5 text-[#F4F1E9] uppercase text-[11px]">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Image */}
                  <div className="w-full h-52 sm:h-64 bg-[#171719] border border-[#3B3B42] overflow-hidden relative mb-5">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171719] via-transparent to-transparent opacity-40"></div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-['Space_Grotesk'] font-bold text-2xl text-[#F4F1E9] group-hover:text-white transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="font-['JetBrains_Mono'] text-xs text-[#FF3B45] mb-3">
                    {displayTagline}
                  </p>

                  {/* Description & Role */}
                  <p className="font-['Inter'] text-sm text-[#c1bec0] leading-relaxed mb-4">
                    {displayDesc}
                  </p>

                  {/* Role Callout */}
                  <div className="bg-[#171719]/80 border-l-2 border-[#FF3B45] p-3 mb-4 text-xs font-['Inter'] text-[#85858D]">
                    <strong className="text-[#F4F1E9] block font-['JetBrains_Mono'] mb-0.5">{t.roleLabel}</strong>
                    {displayRole}
                  </div>

                  {/* Measurable Outcome */}
                  {displayOutcome && (
                    <div className="bg-[#171719]/40 border border-[#3B3B42]/60 p-3 mb-4 text-xs font-['Inter'] text-[#C8F169]">
                      <strong className="text-[#F4F1E9] block font-['JetBrains_Mono'] mb-0.5">{t.outcomeLabel}</strong>
                      {displayOutcome}
                    </div>
                  )}
                </div>

                {/* Bottom Tech Tags & Links Footer */}
                <div className="p-4 sm:p-6 pt-0 mt-2">
                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5" aria-label="Technologies used">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-['JetBrains_Mono'] text-[11px] bg-[#171719] text-[#85858D] border border-[#3B3B42] px-2 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-4 border-t border-[#3B3B42]">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-signal text-xs py-2.5 sm:py-2 px-4 w-full sm:w-auto text-center justify-center"
                        aria-label={`Visit live website for ${project.title}`}
                      >
                        <span>{t.btnLive}</span>
                        <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                      </a>
                    )}

                    {project.links.download && (
                      <a
                        href={project.links.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs py-2.5 sm:py-2 px-4 w-full sm:w-auto text-center justify-center"
                        aria-label={`Download mobile APK for ${project.title}`}
                      >
                        <i className="fa-brands fa-android text-[#C8F169]"></i>
                        <span>{t.btnDownload}</span>
                      </a>
                    )}

                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost text-xs py-2.5 sm:py-2 px-3 w-full sm:w-auto text-center justify-center"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <i className="fa-brands fa-github text-[#F4F1E9]"></i>
                        <span>{t.btnGithub}</span>
                      </a>
                    )}

                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost text-xs py-2.5 sm:py-2 px-3 w-full sm:w-auto text-center justify-center"
                        aria-label={`Watch video demo for ${project.title}`}
                      >
                        <i className="fa-brands fa-youtube text-[#FF3B45]"></i>
                        <span>{t.btnDemo}</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
