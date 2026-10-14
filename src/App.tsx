import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Index from "./index";
import NotFound from "./404";
import SiteNavigation from "./components/SiteNavigation";
import Footer from "./components/Footer";
import Metatags from "./utils/metatags";
import WelcomingTransition from "./components/WelcomingTransition";
import { LanguageProvider } from "./context/LanguageContext";

// Helper component to smoothly redirect legacy routes to single-page section anchors
function LegacyRouteRedirect({ targetHash }: { targetHash: string }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${targetHash}`, { replace: true });
    setTimeout(() => {
      const el = document.querySelector(targetHash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [navigate, targetHash]);

  return <Index />;
}

function AppContent() {
  const location = useLocation();

  // Scroll to hash target on initial load or hash change
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const target = document.querySelector(location.hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  }, [location.hash]);

  return (
    <div className="bg-[#171719] text-[#F4F1E9] min-h-screen selection:bg-[#FF3B45] selection:text-white font-['Inter']">
      <Metatags
        title="Luthfi Aditya // Software Engineer"
        description="Portfolio of Luthfi Aditya — Software Engineer specializing in Web and Mobile Application Development."
        name="Luthfi Aditya Portfolio"
        image="/foto-profil.avif"
      />

      {/* Top Accessible Sticky Navigation */}
      <SiteNavigation />

      {/* Main Single Page Routes */}
      <Routes>
        <Route path="/" element={<Index />} />
        {/* Legacy route redirects for existing resume & profile backlinks */}
        <Route path="/about" element={<LegacyRouteRedirect targetHash="#about" />} />
        <Route path="/project" element={<LegacyRouteRedirect targetHash="#work" />} />
        <Route path="/experience" element={<LegacyRouteRedirect targetHash="#experience" />} />
        <Route path="/contact" element={<LegacyRouteRedirect targetHash="#contact" />} />
        {/* Fallback 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Interactive A/B/C Welcoming Motion Tester */}
      <WelcomingTransition />

      {/* Bottom Technical Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}
