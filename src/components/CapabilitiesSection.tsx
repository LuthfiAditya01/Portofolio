import { capabilitiesData, type SkillGroup } from "../data/capabilities";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function CapabilitiesSection() {
  const { language } = useLanguage();
  const t = translations[language].capabilities;

  return (
    <section id="capabilities" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#3B3B42] bg-[#171719]/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 border border-[#3B3B42] bg-[#242429] px-2.5 sm:px-3 py-1 font-['JetBrains_Mono'] text-[11px] sm:text-xs text-[#85858D] mb-3">
            <span className="text-[#FF3B45] font-bold">02 //</span>
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

        {/* 4 Grouped Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {capabilitiesData.map((group: SkillGroup) => {
            const displayTitle = language === "ID" && group.title_id ? group.title_id : group.title;
            const displayDesc = language === "ID" && group.description_id ? group.description_id : group.description;

            return (
              <div
                key={group.id}
                className="bg-[#242429] border border-[#3B3B42] hover:border-[#85858D] transition-colors p-5 sm:p-7 relative"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#3B3B42] font-['JetBrains_Mono'] text-xs">
                  <span className="text-[#FF3B45] font-bold">{group.code}</span>
                  <span className="text-[#85858D] uppercase tracking-wider">{t.matrixLabel}</span>
                </div>

                <h3 className="font-['Space_Grotesk'] font-bold text-xl sm:text-2xl text-[#F4F1E9] mb-2">
                  {displayTitle}
                </h3>
                <p className="font-['Inter'] text-xs sm:text-sm text-[#c1bec0] mb-6 leading-relaxed">
                  {displayDesc}
                </p>

                {/* Skills List */}
                <div className="space-y-3">
                  {group.skills.map((skill) => {
                    const displayDetail = language === "ID" && skill.detail_id ? skill.detail_id : skill.detail;

                    return (
                      <div
                        key={skill.name}
                        className="p-3 bg-[#171719] border border-[#3B3B42]/70 hover:border-[#FF3B45]/40 transition-colors"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                          <span className="font-['JetBrains_Mono'] font-bold text-sm text-[#F4F1E9]">
                            {skill.name}
                          </span>
                          <span
                            className={`font-['JetBrains_Mono'] text-[10px] px-2 py-0.5 uppercase font-medium border ${
                              skill.level === "Core"
                                ? "border-[#FF3B45]/50 text-[#FF3B45] bg-[#FF3B45]/10"
                                : skill.level === "Advanced"
                                ? "border-[#C8F169]/50 text-[#C8F169] bg-[#C8F169]/10"
                                : "border-[#85858D]/50 text-[#85858D] bg-[#85858D]/10"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <p className="font-['Inter'] text-xs text-[#85858D] leading-normal">
                          {displayDetail}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Competency Note Footer */}
        <div className="mt-8 p-4 bg-[#242429]/40 border border-[#3B3B42] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-['JetBrains_Mono'] text-xs text-[#85858D]">
          <div className="flex items-center gap-2">
            <span className="text-[#C8F169]">{t.coreLabel}</span>
            <span>{t.coreNote}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#FF3B45]">{t.focusLabel}</span>
            <span>{t.focusNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
