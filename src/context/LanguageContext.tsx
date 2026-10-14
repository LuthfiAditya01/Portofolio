import { useState, useEffect, type ReactNode } from "react";
import { LanguageContext, type Language } from "./useLanguage";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to "EN" as explicitly requested by user
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem("portfolio_lang");
      if (saved === "EN" || saved === "ID") {
        return saved;
      }
    } catch {
      // Fallback if localStorage is inaccessible
    }
    return "EN";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("portfolio_lang", lang);
    } catch {
      // Ignored
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "ID" : "EN");
  };

  useEffect(() => {
    // Update HTML lang attribute for accessibility and SEO
    document.documentElement.lang = language === "EN" ? "en" : "id";
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Re-export hook and types for convenience
// eslint-disable-next-line react-refresh/only-export-components
export { useLanguage, type Language } from "./useLanguage";
