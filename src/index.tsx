// import Metatags from "./utils/metatags"

import { Link } from "react-router-dom";
import { Route } from "./utils/link";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    // Hide scroll indicator after scroll
    const handleScroll = () => {
      const scrollIndicator = document.querySelector('.scroll-indicator') as HTMLElement | null;
      if (window.scrollY > 100 && scrollIndicator) {
        (scrollIndicator as HTMLElement).style.opacity = '0';
        (scrollIndicator as HTMLElement).style.transform = 'translateX(-50%) translateY(20px)';
      } else if (scrollIndicator) {
        (scrollIndicator as HTMLElement).style.opacity = '1';
        (scrollIndicator as HTMLElement).style.transform = 'translateX(-50%) translateY(0)';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {/* HERO SECTION - THE SMART CHILLER */}
      <section
          data-aos="fade-up"
          data-aos-delay="400"
          id="home"
          className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-6 py-12">
          <h1 className="hero-headline mb-6">NO NOISE.<br/>JUST INSIGHTS.</h1>
          <p className="hero-subheadline mb-8">
            Breaking down complex ideas into bite-sized vibes.<br/>
            <span className="text-[#A0A0A0]">Web & Mobile Developer from Indonesia.</span>
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to={Route.about}
              className="hero-btn inline-block">
              Get Started
            </Link>
            <Link
              to="/project"
              className="btn-ghost inline-block">
              Skip the BS →
            </Link>
          </div>
          <div className="mt-6">
            <Link
              to="./Curriculum-Vitae_Luthfi-Aditya.pdf"
              target="_blank"
              className="text-[#A0A0A0] hover:text-[#00FFD1] transition-colors duration-300 text-sm font-['Inter'] underline underline-offset-4">
              or just grab my CV 👀
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <i className="fas fa-chevron-down"></i>
      </div>

      {/* CORE FEATURES SECTION - THE SMART CHILLER */}
      <section
        id="features"
        data-aos="fade-up"
        data-aos-delay="200"
        className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-4">What I Do</h2>
          <p className="text-[#6B6B6B] text-center mb-12 font-['Inter']">Straight to the point. No fluff.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: The Deep Dive */}
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="feature-card h-full">
                <div className="icon text-[#00FFD1]">
                  <i className="fas fa-search"></i>
                </div>
                <h3 className="text-lg mb-2">The Deep Dive</h3>
                <p>Research-driven development. I dig deep into problems before writing a single line of code.</p>
              </div>
            </div>

            {/* Card 2: Quick Hits */}
            <div data-aos="fade-up" data-aos-delay="400">
              <div className="feature-card h-full">
                <div className="icon text-[#5D5FEF]">
                  <i className="fas fa-bolt"></i>
                </div>
                <h3 className="text-lg mb-2">Quick Hits</h3>
                <p>Fast iterations, rapid prototyping. Get your MVP up and running in record time.</p>
              </div>
            </div>

            {/* Card 3: The Lab */}
            <div data-aos="fade-up" data-aos-delay="500">
              <div className="feature-card h-full">
                <div className="icon text-[#00FFD1]">
                  <i className="fas fa-flask"></i>
                </div>
                <h3 className="text-lg mb-2">The Lab</h3>
                <p>Experimental projects, AI tools, and bleeding-edge tech exploration.</p>
              </div>
            </div>

            {/* Card 4: Chill Zone */}
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="feature-card h-full">
                <div className="icon text-[#5D5FEF]">
                  <i className="fas fa-palette"></i>
                </div>
                <h3 className="text-lg mb-2">Chill Zone</h3>
                <p>Clean UI/UX. Aesthetic curation. Making things look good while they work great.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION - Minimal Grid */}
      <section
        id="skills"
        data-aos="fade-up"
        data-aos-delay="200"
        className="py-20 px-6 bg-[#1E1E1E]/50">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-4">Tech Stack</h2>
          <p className="text-[#6B6B6B] text-center mb-12 font-['Inter']">Tools of the trade.</p>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Skills */}
            <div data-aos="fade-up" data-aos-delay="100" className="skill-card">
              <i className="fab fa-html5 text-4xl" style={{ color: "#e34c26" }}></i>
              <h3>HTML5</h3>
            </div>
            <div data-aos="fade-up" data-aos-delay="150" className="skill-card">
              <i className="fab fa-css3-alt text-4xl" style={{ color: "#264de4" }}></i>
              <h3>CSS3</h3>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="skill-card">
              <i className="fab fa-js text-4xl" style={{ color: "#f7df1e" }}></i>
              <h3>JavaScript</h3>
            </div>
            <div data-aos="fade-up" data-aos-delay="250" className="skill-card">
              <i className="fab fa-react text-4xl" style={{ color: "#61dafb" }}></i>
              <h3>React</h3>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="skill-card">
              <i className="fab fa-node-js text-4xl" style={{ color: "#3c873a" }}></i>
              <h3>Node.js</h3>
            </div>
            <div data-aos="fade-up" data-aos-delay="350" className="skill-card">
              <i className="fab fa-laravel text-4xl" style={{ color: "#ff2d20" }}></i>
              <h3>Laravel</h3>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className="skill-card">
              <i className="fab fa-android text-4xl" style={{ color: "#3ddc84" }}></i>
              <h3>Kotlin</h3>
            </div>
            <div data-aos="fade-up" data-aos-delay="450" className="skill-card">
              <i className="fab fa-react text-4xl" style={{ color: "#00b7ff" }}></i>
              <h3>React Native</h3>
            </div>
            <div data-aos="fade-up" data-aos-delay="500" className="skill-card">
              <i className="fas fa-database text-4xl" style={{ color: "#336791" }}></i>
              <h3>MySQL</h3>
            </div>
            <div data-aos="fade-up" data-aos-delay="550" className="skill-card">
              <i className="fab fa-git-alt text-4xl" style={{ color: "#f34f29" }}></i>
              <h3>Git</h3>
            </div>
            <div data-aos="fade-up" data-aos-delay="600" className="skill-card">
              <i className="fas fa-leaf text-4xl" style={{ color: "#4db33d" }}></i>
              <h3>MongoDB</h3>
            </div>
            <div data-aos="fade-up" data-aos-delay="650" className="skill-card">
              <i className="fas fa-wind text-4xl" style={{ color: "#38bdf8" }}></i>
              <h3>Tailwind</h3>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION - THE SMART CHILLER */}
      <section
        id="projects"
        data-aos="fade-up"
        data-aos-delay="200"
        className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-4">Latest Work</h2>
          <p className="text-[#6B6B6B] text-center mb-12 font-['Inter']">Selected projects that shipped.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              data-aos="fade-up"
              data-aos-mobile="fade-right"
              data-aos-delay="500">
              <div className="project-card rounded-lg overflow-hidden shadow-md transition duration-300">
                <div className="image-container w-full h-48">
                  <img
                    src="/project/mentally.png"
                    alt="Proyek 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Mental.ly App</h3>
                  <p className="mb-4">Aplikasi Capstone project di Bangkit Academy untuk memprediksi mental kesehatan.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="tech-tag text-xs px-3 py-1 rounded-full">Kotlin</span>
                    <span className="tech-tag text-xs px-3 py-1 rounded-full">Google Cloud</span>
                  </div>
                  <a
                    href="https://youtu.be/1yEdsNHTWZo?si=m5_UfoDv10J0-0sW"
                    className="project-btn inline-block font-medium py-2 px-4 rounded transition duration-300">
                    Lihat Demo
                  </a>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-mobile="fade-right"
              data-aos-delay="500">
              <div className="project-card rounded-lg overflow-hidden shadow-md transition duration-300">
                <div className="image-container w-full h-48">
                  <img
                    src="/project/magnet.png"
                    alt="Proyek 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Emergency Service Response</h3>
                  <p className="mb-4">Sebuah projek tugas akhir semester aplikasi web untuk membantu pengguna dalam menghadapi keadaan darurat.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="tech-tag text-xs px-3 py-1 rounded-full">HTML</span>
                    <span className="tech-tag text-xs px-3 py-1 rounded-full">CSS</span>
                    <span className="tech-tag text-xs px-3 py-1 rounded-full">JS</span>
                    <span className="tech-tag text-xs px-3 py-1 rounded-full">MySQL</span>
                  </div>
                  <a
                    href="https://github.com/rofiframadhanks/esr"
                    className="project-btn inline-block font-medium py-2 px-4 rounded transition duration-300">
                    Lihat Proyek
                  </a>
                </div> */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Magnet (Magang Management)</h3>
                  <p className="mb-4">Sebuah projek akhir untuk Kerja Praktik saya di Badan Pusat Statistik Kota Bandar Lampung. dimana saya berpartisipasi dalam fitur Daftar Hadir bagi mahasiswa yang sedang magang disana</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="tech-tag text-xs px-3 py-1 rounded-full">React Js</span>
                    <span className="tech-tag text-xs px-3 py-1 rounded-full">Javascript</span>
                    <span className="tech-tag text-xs px-3 py-1 rounded-full">Tailwind</span>
                    <span className="tech-tag text-xs px-3 py-1 rounded-full">MongoDB</span>
                  </div>
                  <a
                    href="https://magnet-bps.vercel.app/"
                    className="project-btn inline-block font-medium py-2 px-4 rounded transition duration-300">
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-mobile="fade-right"
              data-aos-delay="500">
              <div className="project-card rounded-lg overflow-hidden shadow-md transition duration-300">
                <div className="image-container w-full h-48">
                  <img
                    src="/project/sip-sj.jpeg"
                    alt="Proyek 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">SIP-SJ (SISTEM INFORMASI POSYANDU SEPUTIH JAYA)</h3>
                  <p className="mb-4">Website untuk mengelola data dan informasi posyandu di Kelurahan Seputih Jaya</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="tech-tag text-xs px-3 py-1 rounded-full">Laravel</span>
                    <span className="tech-tag text-xs px-3 py-1 rounded-full">TailwindCSS</span>
                    <span className="tech-tag text-xs px-3 py-1 rounded-full">JavaScript</span>
                    <span className="tech-tag text-xs px-3 py-1 rounded-full">MySQL</span>
                  </div>
                  <a
                    href="https://github.com/LuthfiAditya01/SIP-SJ"
                    className="project-btn inline-block font-medium py-2 px-4 rounded transition duration-300">
                    Lihat Proyek
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-[#6B6B6B] mb-4 font-['Inter']">Want to see more?</p>
            <Link
              to={"/project"}
              className="hero-btn inline-block">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
