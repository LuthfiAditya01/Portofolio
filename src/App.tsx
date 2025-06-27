import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import file CSS AOS
import Index from "./index";
import { useEffect } from "react";
import NotFound from "./404";
import Metatags from "./utils/metatags";
import About from "./about";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="font-jetbrains">
      <Router>
        <header
          data-aos="fade-down"
          className="fixed w-full top-0 z-50">
          <Metatags
            title="Portofolio Adheet"
            description="Halaman Awal Portofolio Adheet"
            name="Portofolio Adheet"
            image={"./letter-l.png"}
          />
          <nav className="container mx-auto flex justify-between items-center py-4 px-6">
            <Link
              to={"/"}
              className=" text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Luthfi Aditya
            </Link>
            {/* Cute Cat Navigation indicator  */}
            <div className="hidden md:flex space-x-1">
              <div className="text-lg animate-bounce">🐱</div>
              <div className="text-lg animate-bounce delay-75">🐾</div>
              <div className="text-lg animate-bounce delay-150">😸</div>
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
        </Routes>
      </Router>
      <footer data-aos="fade-down" data-aos-delay="500" className="relative z-10 py-16 mt-20">
      <div className="container mx-auto px-6">
        {/* <!-- Social Links --> */}
        <div className="flex justify-center space-x-8 mb-8">
          <div data-aos="zoom-in" data-aos-delay="1400">
            <a href="https://www.github.com/LuthfiAditya01" className="social-icon group">
              <i className="fab fa-github text-2xl text-slate-300 group-hover:text-white transition-colors duration-300"></i>
            </a>
          </div>
          <div data-aos="zoom-in" data-aos-delay="1600">
            <a href="https://www.linkedin.com/in/luthfi-aditya-191370242/" className="social-icon group">
              <i className="fab fa-linkedin text-2xl text-slate-300 group-hover:text-blue-400 transition-colors duration-300"></i>
            </a>
          </div>
          <div data-aos="zoom-in" data-aos-delay="1800">
            <a href="https://www.instagram.com/aditeverything_" className="social-icon group">
              <i className="fab fa-instagram text-2xl text-slate-300 group-hover:text-pink-400 transition-colors duration-300"></i>
            </a>
          </div>
        </div>
        
        {/* <!-- Copyright --> */}
        <div className="text-center">
          <p className="text-slate-400 text-lg">&copy; 2025 <span className="font-bold text-blue-400">Luthfi Aditya</span>. All Rights Reserved.</p>
          <p className="text-slate-500 text-sm mt-2">Made with <span className="text-red-400">❤️</span> and lots of <span className="text-yellow-400">☕</span></p>
        </div>
      </div>
    </footer>
    </div>
  );
}
