import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "contact@adheetya.my.id";
  const { language } = useLanguage();
  const t = translations[language].contact;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#3B3B42] neo-grid-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 border border-[#3B3B42] bg-[#242429] px-2.5 sm:px-3 py-1 font-['JetBrains_Mono'] text-[11px] sm:text-xs text-[#85858D] mb-3">
            <span className="text-[#FF3B45] font-bold">05 //</span>
            <span className="text-[#F4F1E9] tracking-wider uppercase font-semibold">{t.badge}</span>
          </div>
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-5xl md:text-6xl text-[#F4F1E9] tracking-tight uppercase">
            {t.titleL1}<br />
            <span className="text-[#FF3B45]">{t.titleL2}</span>
          </h2>
          <p className="font-['Inter'] text-[#85858D] text-sm md:text-base max-w-2xl mt-4 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Main Direct Email Dispatch Box */}
          <div className="lg:col-span-7 bg-[#242429] border border-[#3B3B42] p-5 sm:p-7 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#3B3B42] font-['JetBrains_Mono'] text-xs">
                <span className="text-[#FF3B45] font-bold">{t.directTitle}</span>
                <span className="text-[#C8F169]">{t.directSpeed}</span>
              </div>

              <h3 className="font-['Space_Grotesk'] font-bold text-xl sm:text-2xl text-[#F4F1E9] mb-3">
                {t.directHeading}
              </h3>
              <p className="font-['Inter'] text-xs sm:text-sm text-[#c1bec0] mb-6 leading-relaxed">
                {t.directText}
              </p>

              {/* Email Box */}
              <div className="bg-[#171719] border border-[#3B3B42] p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <i className="fa-regular fa-envelope text-[#FF3B45] text-base sm:text-lg shrink-0"></i>
                  <span className="font-['JetBrains_Mono'] text-xs sm:text-sm md:text-base text-white font-medium select-all break-all">
                    {emailAddress}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-ghost text-xs py-2 sm:py-1.5 px-3 w-full sm:w-auto text-center justify-center shrink-0 cursor-pointer"
                  aria-label="Copy email address to clipboard"
                >
                  <i className={`fa-regular ${copied ? "fa-circle-check text-[#C8F169]" : "fa-copy"}`}></i>
                  <span>{copied ? t.btnCopied : t.btnCopy}</span>
                </button>
              </div>
            </div>

            {/* Direct Email Action Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-[#3B3B42]">
              <a
                href={`mailto:${emailAddress}?subject=Engineering%20Inquiry%20-%20Luthfi%20Aditya`}
                className="btn-signal text-xs py-3 px-5 w-full sm:w-auto text-center justify-center"
              >
                <i className="fa-solid fa-paper-plane text-xs"></i>
                <span>{t.btnSend}</span>
                <span className="text-sm">→</span>
              </a>

              <a
                href="/Curriculum-Vitae_Luthfi-Aditya.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-3 px-5 w-full sm:w-auto text-center justify-center"
              >
                <i className="fa-solid fa-arrow-down-to-bracket text-xs text-[#FF3B45]"></i>
                <span>{t.btnResume}</span>
              </a>
            </div>
          </div>

          {/* Social Profiles & Presence */}
          <div className="lg:col-span-5 bg-[#242429] border border-[#3B3B42] p-5 sm:p-7 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#3B3B42] font-['JetBrains_Mono'] text-xs">
                <span className="text-[#FF3B45] font-bold">{t.reposTitle}</span>
                <span className="text-[#85858D]">{t.reposStatus}</span>
              </div>

              <div className="space-y-3 font-['JetBrains_Mono'] text-xs">
                {/* GitHub */}
                <a
                  href="https://www.github.com/LuthfiAditya01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[#171719] border border-[#3B3B42] hover:border-[#F4F1E9] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <i className="fa-brands fa-github text-lg text-white"></i>
                    <div>
                      <span className="text-[#F4F1E9] block font-bold group-hover:text-[#FF3B45] transition-colors">
                        GITHUB
                      </span>
                      <span className="text-[#85858D] text-[11px]">@LuthfiAditya01</span>
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[#85858D] group-hover:text-white transition-colors"></i>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/luthfi-aditya-191370242/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[#171719] border border-[#3B3B42] hover:border-[#F4F1E9] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <i className="fa-brands fa-linkedin text-lg text-[#0ea5e9]"></i>
                    <div>
                      <span className="text-[#F4F1E9] block font-bold group-hover:text-[#FF3B45] transition-colors">
                        LINKEDIN
                      </span>
                      <span className="text-[#85858D] text-[11px]">Luthfi Aditya</span>
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[#85858D] group-hover:text-white transition-colors"></i>
                </a>

                {/* Spotify */}
                <a
                  href="https://open.spotify.com/user/31z2zthbqw3kwbzr5zwiinh4rg7y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[#171719] border border-[#3B3B42] hover:border-[#F4F1E9] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <i className="fa-brands fa-spotify text-lg text-[#C8F169]"></i>
                    <div>
                      <span className="text-[#F4F1E9] block font-bold group-hover:text-[#FF3B45] transition-colors">
                        SPOTIFY
                      </span>
                      <span className="text-[#85858D] text-[11px]">{t.spotifySub}</span>
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[#85858D] group-hover:text-white transition-colors"></i>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#3B3B42] font-['JetBrains_Mono'] text-[11px] text-[#85858D]">
              <span>{t.protocolNote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
