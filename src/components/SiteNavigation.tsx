import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

interface SiteNavigationProps {
  activeSection?: string;
}

export default function SiteNavigation({ activeSection = "intro" }: SiteNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(activeSection);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { language, toggleLanguage, setLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);

      const sectionIds = ["intro", "work", "capabilities", "experience", "about", "contact"];
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setCurrentSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { id: "work", label: t.work, href: "#work" },
    { id: "capabilities", label: t.stack, href: "#capabilities" },
    { id: "experience", label: t.exp, href: "#experience" },
    { id: "about", label: t.about, href: "#about" },
    { id: "contact", label: t.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 border-b ${
        hasScrolled
          ? "bg-[#171719]/95 backdrop-blur-md border-[#3B3B42] py-2.5 sm:py-3 shadow-lg shadow-black/50"
          : "bg-[#171719]/90 backdrop-blur-sm border-[#3B3B42]/50 py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#intro"
          className="group flex items-center gap-1.5 sm:gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B45]"
          aria-label="Luthfi Aditya Portfolio Homepage"
        >
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#FF3B45] group-hover:scale-125 transition-transform duration-150"></span>
          <span className="font-['Space_Grotesk'] font-bold text-base sm:text-lg md:text-xl tracking-tight text-[#F4F1E9] group-hover:text-white transition-colors">
            LUTHFI ADITYA<span className="text-[#FF3B45] ml-0.5 sm:ml-1">//</span>
          </span>
          <span className="hidden sm:inline-block font-['JetBrains_Mono'] text-[10px] sm:text-[11px] text-[#85858D] border border-[#3B3B42] px-1.5 py-0.5 ml-1 sm:ml-2">
            DEV
          </span>
        </a>

        {/* Live Status Badge (Desktop Large screens) */}
        <div className="hidden xl:flex items-center gap-2 border border-[#3B3B42] bg-[#242429]/60 px-3 py-1 font-['JetBrains_Mono'] text-xs text-[#F4F1E9]">
          <span className="w-2 h-2 rounded-full bg-[#C8F169] animate-pulse"></span>
          <span className="text-[#C8F169] font-medium">{t.status}</span>
        </div>

        {/* Desktop Navigation Links & Language Switcher */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`font-['JetBrains_Mono'] text-xs uppercase px-2.5 lg:px-3 py-1.5 transition-all duration-150 relative ${
                  isActive
                    ? "text-[#FF3B45] font-semibold bg-[#242429] border border-[#FF3B45]/40"
                    : "text-[#85858D] hover:text-[#F4F1E9] hover:bg-[#242429]/50 border border-transparent"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}

          {/* Desktop Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="ml-1.5 lg:ml-2 font-['JetBrains_Mono'] text-xs px-2.5 py-1.5 border border-[#3B3B42] hover:border-[#FF3B45] bg-[#242429] text-[#F4F1E9] transition-all flex items-center gap-1.5 neo-cut-corner-sm cursor-pointer"
            aria-label={`Switch language from ${language}`}
            title="Switch language (EN / ID)"
          >
            <svg className="w-3.5 h-3.5 text-[#FF3B45]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <span className={language === "EN" ? "text-white font-bold" : "text-[#85858D]"}>EN</span>
            <span className="text-[#3B3B42] text-[10px]">/</span>
            <span className={language === "ID" ? "text-white font-bold" : "text-[#85858D]"}>ID</span>
          </button>

          {/* Resume Link */}
          <a
            href="/Curriculum-Vitae_Luthfi-Aditya.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1.5 lg:ml-2 font-['JetBrains_Mono'] text-xs font-semibold px-3 py-1.5 border border-[#FF3B45] text-[#FF3B45] hover:bg-[#FF3B45] hover:text-white transition-all duration-150 flex items-center gap-1.5 neo-cut-corner-sm"
          >
            <span>{t.resume}</span>
            <span className="text-[10px]">↓</span>
          </a>
        </nav>

        {/* Mobile Action & Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3 md:hidden">
          {/* Mobile Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="font-['JetBrains_Mono'] text-xs px-2 py-1.5 border border-[#3B3B42] bg-[#242429] neo-cut-corner-sm flex items-center gap-1 cursor-pointer"
            aria-label="Toggle language"
          >
            <span className={language === "EN" ? "text-[#FF3B45] font-bold" : "text-[#85858D]"}>EN</span>
            <span className="text-[#3B3B42] text-[10px]">/</span>
            <span className={language === "ID" ? "text-[#FF3B45] font-bold" : "text-[#85858D]"}>ID</span>
          </button>

          <a
            href="/Curriculum-Vitae_Luthfi-Aditya.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['JetBrains_Mono'] text-xs px-2.5 py-1.5 border border-[#FF3B45] text-[#FF3B45] neo-cut-corner-sm flex items-center gap-1"
          >
            <span>CV</span>
            <span className="text-[10px]">↓</span>
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-[#F4F1E9] hover:text-[#FF3B45] hover:bg-[#242429] border border-[#3B3B42] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B45] neo-cut-corner-sm cursor-pointer"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5 text-[#FF3B45]" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-[#F4F1E9]" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#171719] border-b border-[#3B3B42] px-4 py-4 space-y-2 shadow-2xl animate-in fade-in duration-150">
          <div className="flex items-center justify-between pb-2.5 border-b border-[#3B3B42]/50 font-['JetBrains_Mono'] text-xs text-[#85858D]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8F169] animate-pulse"></span>
              <span className="text-[11px]">{t.status}</span>
            </div>

            {/* Language Selector Pills in Drawer */}
            <div className="flex items-center gap-1 border border-[#3B3B42] bg-[#242429] p-0.5">
              <button
                type="button"
                onClick={() => setLanguage("EN")}
                className={`px-2 py-0.5 text-[11px] font-bold ${
                  language === "EN" ? "bg-[#FF3B45] text-white" : "text-[#85858D]"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("ID")}
                className={`px-2 py-0.5 text-[11px] font-bold ${
                  language === "ID" ? "bg-[#FF3B45] text-white" : "text-[#85858D]"
                }`}
              >
                ID
              </button>
            </div>
          </div>

          {navLinks.map((link) => {
            const isActive = currentSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block font-['JetBrains_Mono'] text-sm px-3.5 py-3 border transition-colors ${
                  isActive
                    ? "border-[#FF3B45] text-[#FF3B45] bg-[#242429] font-semibold"
                    : "border-transparent text-[#F4F1E9] hover:bg-[#242429] hover:border-[#3B3B42]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
