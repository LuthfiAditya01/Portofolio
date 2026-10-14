import { experienceData, type ExperienceItem } from "../data/experience";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function ExperienceSection() {
  const { language } = useLanguage();
  const t = translations[language].experience;

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#3B3B42]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 border border-[#3B3B42] bg-[#242429] px-2.5 sm:px-3 py-1 font-['JetBrains_Mono'] text-[11px] sm:text-xs text-[#85858D] mb-3">
            <span className="text-[#FF3B45] font-bold">03 //</span>
            <span className="text-[#F4F1E9] tracking-wider uppercase font-semibold">{t.badge}</span>
          </div>
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-5xl text-[#F4F1E9] tracking-tight uppercase">
            {t.titleL1}<br />
            <span className="text-[#FF3B45]">{t.titleL2}</span>
          </h2>
          <p className="font-['Inter'] text-[#85858D] text-sm md:text-base max-w-2xl mt-3">
            {t.subtitle}
          </p>
        </div>

        {/* Mission Log Stack */}
        <div className="space-y-6">
          {experienceData.map((item: ExperienceItem) => {
            const displayRole = language === "ID" && item.role_id ? item.role_id : item.role;
            const displayPeriod = language === "ID" && item.period_id ? item.period_id : item.period;
            const displayType = language === "ID" && item.type_id ? item.type_id : item.type;
            const displayLocation = language === "ID" && item.location_id ? item.location_id : item.location;
            const displayAchievements = language === "ID" && item.achievements_id ? item.achievements_id : item.achievements;

            return (
              <div
                key={item.id}
                className="bg-[#242429] border border-[#3B3B42] hover:border-[#85858D] transition-colors p-5 sm:p-7 md:p-8"
              >
                {/* Log Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-[#3B3B42] font-['JetBrains_Mono'] text-xs">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-[#FF3B45] font-bold text-sm">{item.code}</span>
                    <span className="text-[#F4F1E9] font-medium border border-[#3B3B42] bg-[#171719] px-2 py-0.5">
                      {displayPeriod}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#85858D] text-[11px] sm:text-xs">
                    <span>{displayType}</span>
                    <span>•</span>
                    <span>{displayLocation}</span>
                  </div>
                </div>

                {/* Role & Company */}
                <div className="mb-4">
                  <h3 className="font-['Space_Grotesk'] font-bold text-xl sm:text-2xl text-[#F4F1E9]">
                    {displayRole}
                  </h3>
                  <p className="font-['JetBrains_Mono'] text-xs sm:text-sm text-[#FF3B45] font-medium mt-0.5">
                    @ {item.company}
                  </p>
                </div>

                {/* Achievements / Points */}
                <ul className="space-y-2.5 mb-6 font-['Inter'] text-sm text-[#c1bec0] leading-relaxed">
                  {displayAchievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#FF3B45] font-['JetBrains_Mono'] font-bold text-xs mt-0.5">
                        //
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Strip */}
                <div className="pt-4 border-t border-[#3B3B42]/70 flex flex-wrap items-center gap-2">
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#85858D] uppercase mr-1">
                    {t.toolsLabel}
                  </span>
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-['JetBrains_Mono'] text-[11px] bg-[#171719] text-[#85858D] border border-[#3B3B42] px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
