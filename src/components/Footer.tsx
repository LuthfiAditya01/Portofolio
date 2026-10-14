import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#171719] border-t border-[#3B3B42] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 font-['JetBrains_Mono'] text-xs text-[#85858D]">
        {/* Brand identity */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FF3B45]"></span>
            <span className="font-['Space_Grotesk'] font-bold text-sm text-[#F4F1E9]">
              LUTHFI ADITYA
            </span>
          </div>
          <span className="hidden sm:inline-block text-[#3B3B42]">|</span>
          <span className="text-[11px] sm:text-xs">{t.designSystem}</span>
        </div>

        {/* Technical stack notes */}
        <div className="text-center text-[10px] sm:text-[11px] text-[#85858D]">
          <span>{t.stackNote}</span>
        </div>

        {/* Action / Back to Top */}
        <div className="flex items-center gap-3 sm:gap-4 text-center">
          <span className="text-[11px] sm:text-xs">&copy; {new Date().getFullYear()} {t.rights}</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="w-8 h-8 flex items-center justify-center border border-[#3B3B42] hover:border-[#FF3B45] text-[#F4F1E9] hover:text-[#FF3B45] transition-colors neo-cut-corner-sm cursor-pointer"
            aria-label={t.backToTop}
          >
            <i className="fa-solid fa-arrow-up text-xs"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
