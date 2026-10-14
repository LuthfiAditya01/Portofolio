import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section
      id="intro"
      className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#3B3B42] neo-grid-bg"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Status Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 border border-[#3B3B42] bg-[#242429] px-2.5 sm:px-3 py-1 font-['JetBrains_Mono'] text-[11px] sm:text-xs text-[#85858D]">
            <span className="text-[#FF3B45] font-bold">00 //</span>
            <span className="text-[#F4F1E9] tracking-wider uppercase font-semibold">INTRO</span>
          </div>

          <div className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] sm:text-xs text-[#85858D] border border-[#3B3B42] bg-[#171719] px-2.5 sm:px-3 py-1">
            <span className="w-2 h-2 rounded-full bg-[#C8F169] animate-pulse"></span>
            <span>{t.statusBadge}</span>
          </div>
        </div>

        {/* Hero Grid / Two Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Main Headline */}
          <div className="lg:col-span-8">
            <p className="font-['JetBrains_Mono'] text-xs sm:text-sm md:text-base text-[#FF3B45] uppercase tracking-widest font-semibold mb-2 sm:mb-3">
              {t.engineerRole}
            </p>
            <h1 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#F4F1E9] leading-[1.08] sm:leading-[1.05] uppercase break-words">
              {t.headlineL1}<br />
              <span className="text-white">{t.headlineL2}</span><br />
              <span className="text-[#FF3B45] relative inline-block">
                {t.headlineL3}
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#FF3B45]/40 -z-10"></span>
              </span>
            </h1>
          </div>

          {/* Right Column / Manifesto Callout */}
          <div className="lg:col-span-4 bg-[#242429] border border-[#3B3B42] p-5 sm:p-6 lg:p-7 relative neo-cut-corner-sm">
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#FF3B45]"></div>
            <p className="font-['JetBrains_Mono'] text-xs text-[#85858D] uppercase tracking-wider mb-2">
              {t.manifestoTitle}
            </p>
            <p className="font-['Inter'] text-[#F4F1E9] text-sm sm:text-base leading-relaxed mb-4">
              <strong className="text-white">{t.manifestoBold}</strong> {t.manifestoText}
            </p>
            <div className="flex items-center gap-2 pt-3 border-t border-[#3B3B42] font-['JetBrains_Mono'] text-xs text-[#85858D]">
              <i className="fa-solid fa-location-crosshairs text-[#FF3B45]"></i>
              <span>{t.location}</span>
            </div>
          </div>
        </div>

        {/* Action Group */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          <a
            href="#work"
            className="btn-signal neo-cut-corner-sm w-full sm:w-auto text-center justify-center py-3 sm:py-2.5"
          >
            <span>{t.btnWork}</span>
            <span className="text-base">→</span>
          </a>

          <a
            href="#contact"
            className="btn-secondary neo-cut-corner-sm w-full sm:w-auto text-center justify-center py-3 sm:py-2.5"
          >
            <i className="fa-solid fa-paper-plane text-xs text-[#FF3B45] mr-1"></i>
            <span>{t.btnContact}</span>
          </a>

          <a
            href="/Curriculum-Vitae_Luthfi-Aditya.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost font-['JetBrains_Mono'] w-full sm:w-auto text-center justify-center py-3 sm:py-2"
          >
            <i className="fa-regular fa-file-pdf text-[#FF3B45] mr-1"></i>
            <span>{t.btnCv}</span>
          </a>
        </div>

        {/* Telemetry Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#3B3B42] font-['JetBrains_Mono'] text-xs">
          <div>
            <span className="text-[#85858D] block text-[10px] uppercase">{t.telemetry.specLabel}</span>
            <span className="text-[#F4F1E9] font-medium text-xs sm:text-sm">{t.telemetry.specVal}</span>
          </div>
          <div>
            <span className="text-[#85858D] block text-[10px] uppercase">{t.telemetry.toolsLabel}</span>
            <span className="text-[#F4F1E9] font-medium text-xs sm:text-sm">{t.telemetry.toolsVal}</span>
          </div>
          <div>
            <span className="text-[#85858D] block text-[10px] uppercase">{t.telemetry.codeLabel}</span>
            <span className="text-[#C8F169] font-medium text-xs sm:text-sm">{t.telemetry.codeVal}</span>
          </div>
          <div>
            <span className="text-[#85858D] block text-[10px] uppercase">{t.telemetry.availLabel}</span>
            <span className="text-[#F4F1E9] font-medium text-xs sm:text-sm">{t.telemetry.availVal}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
