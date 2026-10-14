import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#3B3B42] bg-[#171719]/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 border border-[#3B3B42] bg-[#242429] px-2.5 sm:px-3 py-1 font-['JetBrains_Mono'] text-[11px] sm:text-xs text-[#85858D] mb-3">
            <span className="text-[#FF3B45] font-bold">04 //</span>
            <span className="text-[#F4F1E9] tracking-wider uppercase font-semibold">{t.badge}</span>
          </div>
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-5xl text-[#F4F1E9] tracking-tight uppercase">
            {t.titleL1}<br />
            <span className="text-[#FF3B45]">{t.titleL2}</span>
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column / Profile Card */}
          <div className="lg:col-span-4 max-w-md mx-auto lg:max-w-none w-full bg-[#242429] border border-[#3B3B42] p-5 sm:p-6 relative">
            <div className="w-full aspect-[4/5] bg-[#171719] border border-[#3B3B42] overflow-hidden relative mb-5 sm:mb-6">
              <img
                src="/foto-profil.avif"
                alt="Luthfi Aditya"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-[#171719]/90 border-t border-[#3B3B42] font-['JetBrains_Mono'] text-[11px] flex justify-between items-center">
                <span className="text-[#F4F1E9]">LUTHFI ADITYA</span>
                <span className="text-[#C8F169]">{t.verified}</span>
              </div>
            </div>

            <div className="space-y-3 font-['JetBrains_Mono'] text-xs">
              <div className="flex justify-between py-1.5 border-b border-[#3B3B42]">
                <span className="text-[#85858D]">{t.eduLabel}</span>
                <span className="text-[#F4F1E9] text-right font-medium">{t.eduVal}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#3B3B42]">
                <span className="text-[#85858D]">{t.stageLabel}</span>
                <span className="text-[#F4F1E9] text-right">{t.stageVal}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#3B3B42]">
                <span className="text-[#85858D]">{t.honorsLabel}</span>
                <span className="text-[#FF3B45] text-right">{t.honorsVal}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#85858D]">{t.locLabel}</span>
                <span className="text-[#F4F1E9] text-right">{t.locVal}</span>
              </div>
            </div>
          </div>

          {/* Right Column / Narrative & Mindset */}
          <div className="lg:col-span-8 space-y-6 w-full">
            {/* Story Card */}
            <div className="bg-[#242429] border border-[#3B3B42] p-5 sm:p-7 md:p-8">
              <h3 className="font-['Space_Grotesk'] font-bold text-xl sm:text-2xl text-[#F4F1E9] mb-4">
                {t.storyTitle}
              </h3>
              <div className="font-['Inter'] text-sm sm:text-base text-[#c1bec0] leading-relaxed space-y-4">
                <p>{t.storyP1}</p>
                <p>{t.storyP2}</p>
                <p>
                  {t.storyP3_lead} <strong className="text-[#FF3B45]">{t.storyP3_highlight}</strong>{t.storyP3_tail}
                </p>
              </div>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-['JetBrains_Mono'] text-xs">
              <div className="p-4 bg-[#242429] border border-[#3B3B42]">
                <span className="text-[#FF3B45] font-bold block mb-1">{t.val1_title}</span>
                <p className="font-['Inter'] text-[#85858D] text-xs leading-normal">
                  {t.val1_desc}
                </p>
              </div>
              <div className="p-4 bg-[#242429] border border-[#3B3B42]">
                <span className="text-[#FF3B45] font-bold block mb-1">{t.val2_title}</span>
                <p className="font-['Inter'] text-[#85858D] text-xs leading-normal">
                  {t.val2_desc}
                </p>
              </div>
              <div className="p-4 bg-[#242429] border border-[#3B3B42]">
                <span className="text-[#FF3B45] font-bold block mb-1">{t.val3_title}</span>
                <p className="font-['Inter'] text-[#85858D] text-xs leading-normal">
                  {t.val3_desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
