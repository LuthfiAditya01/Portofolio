import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import file CSS AOS
import Index from "./index";
import { useEffect, useState } from "react";
import NotFound from "./404";
import Metatags from "./utils/metatags";
import About from "./about";
import Project from "./project";
import { FaReact } from "react-icons/fa";
// import Project from "./project";

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Simulate loading time for first visit
    const loadingTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
        setContentVisible(true);
      }, 800); // Wait for fade out animation
    }, 2000); // Loading duration

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

    // Daftar route yang MENAMPILKAN footer
  const routesWithFooter = ['/', '/about', '/project']; // Hanya route ini yang tampil footer
  
  // Cek apakah route saat ini termasuk yang menampilkan footer
  const shouldShowFooter = routesWithFooter.includes(location.pathname);

  // Auto scroll to top saat route berubah
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Animasi scroll halus
    });
  }, [location.pathname]);

  return (
    <div className="font-jetbrains">
      {/* Loading Screen - THE SMART CHILLER */}
      {isLoading && (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#121212] transition-opacity duration-800 ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="text-center">
            {/* Minimal Loading Animation */}
            <div className="relative mb-8">
              <div className="w-16 h-16 border-2 border-[#00FFD1]/20 border-t-[#00FFD1] rounded-full animate-spin mx-auto"></div>
            </div>
            
            {/* Loading Text - Smart Chiller Style */}
            <h2 className="text-2xl font-bold text-[#F5F5F5] mb-2 font-['Space_Grotesk']">
              Syncing vibes...
            </h2>
            
            {/* Loading Bar */}
            <div className="w-48 h-1 bg-[#1E1E1E] rounded-full overflow-hidden mx-auto mt-6">
              <div className="h-full bg-gradient-to-r from-[#00FFD1] to-[#5D5FEF] animate-loading-bar"></div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content with Fade Up Animation */}
      <div className={`transition-all duration-1000 ${
        contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
      {/* Minimalist Sticky Header - THE SMART CHILLER */}
      <header
        data-aos="fade-down"
        className="fixed w-full top-0 z-50">
        <Metatags
          title="Luthfi Aditya | Developer"
          description="No noise. Just insights."
          name="Luthfi Aditya Portfolio"
          image={"./letter-l.png"}
        />
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link
            to={"/"}
            className="text-xl font-bold text-[#F5F5F5] font-['Space_Grotesk'] hover:text-[#00FFD1] transition-colors duration-300">
            LA<span className="text-[#00FFD1]">.</span>
          </Link>
          {/* Minimal Icon Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-[#A0A0A0] hover:text-[#00FFD1] transition-colors duration-300">
              <i className="fas fa-home text-lg"></i>
            </Link>
            <Link to="/about" className="text-[#A0A0A0] hover:text-[#00FFD1] transition-colors duration-300">
              <i className="fas fa-user text-lg"></i>
            </Link>
            <Link to="/project" className="text-[#A0A0A0] hover:text-[#00FFD1] transition-colors duration-300">
              <i className="fas fa-code text-lg"></i>
            </Link>
          </div>
        </nav>
      </header>
      <div className="animated-bg">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>
              <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      <Routes>
        <Route
          path="/"
          element={<Index />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/project"
          element={<Project />}
        />
      </Routes>

      <div data-aos="fade-left" className="fixed bottom-10 right-10 z-50">
        <a className="contact-btn text-[#F5F5F5] font-medium py-2 px-4 md:py-4 md:px-8 rounded-full transition-all duration-300 ease-in-out font-['Space_Grotesk']" href="mailto:luthfi2004aditya@gmail.com" rel="noopener noreferrer"> 
          Drop a line. 
        </a>
      </div>



      {/* Footer - THE SMART CHILLER */}
      {shouldShowFooter && (
        <footer data-aos="fade-up" data-aos-delay="300" className="relative z-10 py-16 bg-[#1E1E1E] border-t border-white/5">
          <div className="container mx-auto px-6">
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <div data-aos="zoom-in" data-aos-delay="400">
                <a href="https://www.github.com/LuthfiAditya01" className="social-icon group">
                  <i className="fab fa-github text-xl text-[#A0A0A0] group-hover:text-[#121212] transition-colors duration-300"></i>
                </a>
              </div>
              <div data-aos="zoom-in" data-aos-delay="500">
                <a href="https://www.linkedin.com/in/luthfi-aditya-191370242/" className="social-icon group">
                  <i className="fab fa-linkedin text-xl text-[#A0A0A0] group-hover:text-[#121212] transition-colors duration-300"></i>
                </a>
              </div>
              <div data-aos="zoom-in" data-aos-delay="600">
                <a href="https://open.spotify.com/user/luthfi.aditya" target="_blank" className="social-icon group">
                  <i className="fab fa-spotify text-xl text-[#A0A0A0] group-hover:text-[#121212] transition-colors duration-300"></i>
                </a>
              </div>
            </div>

            {/* Sign-off Text */}
            <div className="text-center">
              <p className="text-[#6B6B6B] text-sm font-['Inter'] mb-2">Built with curiosity. High-key optimized for clarity.</p>
              <p className="text-[#A0A0A0] text-sm font-['Space_Grotesk']">&copy; 2025 <span className="text-[#00FFD1]">Luthfi Aditya</span></p>
            </div>
          </div>
        </footer>
      )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
