import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function WelcomingTransition() {
  const [stage, setStage] = useState<"enter" | "active" | "exit" | "done">("enter");
  const { language } = useLanguage();
  const t = translations[language].transition;

  const runAnimation = () => {
    setStage("enter");
    const tActive = setTimeout(() => setStage("active"), 50);
    const tExit = setTimeout(() => setStage("exit"), 950);
    const tDone = setTimeout(() => setStage("done"), 1450);

    return () => {
      clearTimeout(tActive);
      clearTimeout(tExit);
      clearTimeout(tDone);
    };
  };

  useEffect(() => {
    return runAnimation();
  }, []);

  const forceDismiss = () => {
    setStage("done");
  };

  if (stage === "done") {
    // Omit Replay button on deployed production builds
    if (import.meta.env.PROD) {
      return null;
    }

    return (
      <button
        type="button"
        onClick={runAnimation}
        className="fixed bottom-4 left-4 z-40 font-['JetBrains_Mono'] text-[11px] text-[#85858D] hover:text-[#FF3B45] bg-[#242429]/80 backdrop-blur-sm border border-[#3B3B42] hover:border-[#FF3B45] px-2.5 py-1 transition-all neo-cut-corner-sm flex items-center gap-1.5 cursor-pointer shadow-lg"
        title="Replay welcoming intro animation (Dev only)"
      >
        <i className="fa-solid fa-rotate-right text-[10px]"></i>
        <span>{t.replay}</span>
      </button>
    );
  }

  return (
    <div
      onClick={forceDismiss}
      className="fixed inset-0 z-[9999] overflow-hidden cursor-pointer select-none bg-black"
      title={t.clickHint}
      role="banner"
      aria-label="Welcome animation"
    >
      {/* ========================================================= */}
      {/* TOP RED SHUTTER                                            */}
      {/* Mobile: Top half box (translate-y)                        */}
      {/* Desktop (md:): Diagonal cut curtain (Persona 5 style)     */}
      {/* ========================================================= */}
      <div
        className={`absolute top-0 left-0 w-full h-1/2 md:h-full md:inset-0 bg-[#FF3B45] shutter-top-cut transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
          stage === "enter"
            ? "-translate-y-full md:-translate-x-full md:-translate-y-full"
            : stage === "active"
            ? "translate-y-0 md:translate-x-0 md:translate-y-0"
            : "-translate-y-full md:-translate-x-[120%] md:-translate-y-[120%]"
        }`}
      >
        {/* Oversized Graphic Bleed Typography */}
        <div className="absolute top-4 sm:top-8 left-4 sm:left-10 font-['JetBrains_Mono'] text-black/35 font-black text-6xl sm:text-7xl md:text-8xl tracking-tighter whitespace-nowrap select-none leading-none">
          LUTHFI//ADITYA
        </div>
      </div>

      {/* ========================================================= */}
      {/* BOTTOM DARK SHUTTER                                       */}
      {/* Mobile: Bottom half box (translate-y)                     */}
      {/* Desktop (md:): Diagonal cut curtain (Persona 5 style)     */}
      {/* ========================================================= */}
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 md:h-full md:inset-0 bg-[#171719] shutter-bottom-cut transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
          stage === "enter"
            ? "translate-y-full md:translate-x-full md:translate-y-full"
            : stage === "active"
            ? "translate-y-0 md:translate-x-0 md:translate-y-0"
            : "translate-y-full md:translate-x-[120%] md:translate-y-[120%]"
        }`}
      >
        {/* Oversized Graphic Bleed Typography */}
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-10 font-['JetBrains_Mono'] text-white/10 font-black text-6xl sm:text-7xl md:text-8xl tracking-tighter whitespace-nowrap select-none leading-none">
          PORTFOLIO//v3.0
        </div>
      </div>

      {/* ========================================================= */}
      {/* STRAIGHT HORIZONTAL TITLE BANNER (LURUS, DI TENGAH)       */}
      {/* ========================================================= */}
      <div
        className={`absolute top-1/2 left-0 w-full -translate-y-1/2 bg-[#0E0E10] text-[#F4F1E9] border-y-4 border-[#FF3B45] py-4 sm:py-8 px-4 shadow-[0_0_60px_rgba(0,0,0,0.95)] transition-all duration-300 z-10 ${
          stage === "enter"
            ? "scale-95 opacity-0"
            : stage === "active"
            ? "scale-100 opacity-100"
            : "scale-105 opacity-0"
        }`}
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center px-2">
          {/* Top Metadata */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-['JetBrains_Mono'] text-[10px] sm:text-xs tracking-widest text-[#FF3B45] font-bold uppercase mb-2">
            <span>{t.bootTitle}</span>
            <span className="hidden sm:inline text-[#85858D]">•</span>
            <span className="hidden sm:inline text-[#C8F169]">{t.bootComplete}</span>
          </div>

          {/* Straight Horizontal Display Headline */}
          <h1 className="font-['Space_Grotesk'] text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none break-words">
            LUTHFI ADITYA<span className="text-[#FF3B45] ml-1">//</span>
          </h1>

          {/* Subtitle / Role */}
          <p className="font-['JetBrains_Mono'] text-[11px] sm:text-sm text-[#F4F1E9] tracking-wider uppercase mt-2.5 sm:mt-3 font-medium">
            {t.subRole}
          </p>

          {/* Skip hint */}
          <div className="flex items-center gap-2 mt-3 sm:mt-4 font-['JetBrains_Mono'] text-[10px] sm:text-[11px] text-[#85858D]">
            <span className="w-2 h-2 rounded-full bg-[#C8F169] animate-pulse"></span>
            <span>{t.clickHint}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
