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
      {/* // <!-- Enhanced hero section --> */}
      <section
        data-aos="fade-up"
        data-aos-delay="600"
        id="home"
        className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to my Portofolio! ^_^</h1>
          <p className="text-xl mb-2 text-slate-300">
            Hello! I'm <span className="text-sky-600 font-bold">Luthfi Aditya</span>,
          </p>
          <p className="text-xl mb-6 text-slate-300">
            a <span className="text-sky-600 font-bold">Web Developer</span>, and <span className="text-sky-600 font-bold">Mobile Developer</span> that focusing on Interactive, Responive, and Web and Multiplatform Mobile Application Development.
          </p>
          <Link
            to={Route.about}
            className="hero-btn text-white font-semibold py-3 px-6 rounded-lg transition duration-300 inline-block mt-4">
            Let's know about me more!
          </Link>
          <br />
          <span className="text-slate-300">or</span>
          <br />
          <Link
            to="./Curriculum Vitae_Luthfi Aditya.pdf"
            target="_blank"
            className="hero-btn text-white font-semibold py-3 px-6 rounded-lg transition duration-300 inline-block mt-4">
            Have a look at my CV! 👀
          </Link>
        </div>
      </section>

      {/* <!-- Scroll indicator --> */}
      <div className="scroll-indicator">
        <i className="fas fa-chevron-down"></i>
      </div>

      {/* <!-- Enhanced flex container for About and Skills --> */}
      <div className="flex flex-wrap">
        {/* <!-- Glassmorphism About Section --> */}
        <section
          id="about"
          data-aos="fade-up"
          data-aos-delay="300"
          className="w-full md:w-1/2 py-16 glassmorphism-section px-6">
          <h2 className="section-title text-3xl font-bold mb-8 text-center">About Me?</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4 text-slate-300">
              I'm a <span className="text-sky-600 font-bold">6th Semester Computer Science</span> student with an enourmous interest in <span className="text-sky-600 font-bold">Web</span> and <span className="text-sky-600 font-bold">Mobile Development</span>. I have a pretty good knowledge in using <span className="text-[#E34F26] font-bold">HTML</span>, <span className="text-[#1572B6] font-bold">CSS</span>, <span className="text-[#B59F00] font-bold">JavaScript</span>, <span className="text-[#7F52FF] font-bold">Kotlin</span> language, also in Modern Framework like <span className="text-[#FF2D20] font-bold">Laravel</span> and <span className="text-[#38BDF8] font-bold">Tailwind</span>. I'm looking for an Internship Opportunity as a <span className="text-sky-600 font-bold">Web Developer</span> and/or <span className="text-sky-600 font-bold">Mobile Developer</span> to honing my skill and get an professional experience.
            </p>
            <p className="mb-4 text-slate-300">I like to solve problems and creating an user interface that visually appealing and works well. I love to learn new technologies and keep up with the latest trends in web development.</p>
            <p className="mb-4 text-slate-300">Some of the soft skills I have:</p>
            <ul className="list-disc pl-8 mb-6 text-slate-300 space-y-2">
              <li>Fast Learner</li>
              <li>Strong Problem Solving skills</li>
              <li>Pay Attention to Details</li>
              <li>Easy to work on Team</li>
              <li>Effective Communiation</li>
            </ul>
          </div>
        </section>

        {/* <!-- Enhanced Skills Section --> */}
        <section
          id="skills"
          data-aos="fade-up"
          data-aos-delay="700"
          className="w-full md:w-1/2 py-16 px-6">
          <h2
            data-aos="fade-up"
            className="section-title text-3xl font-bold mb-12 text-center">
            Keahlian Teknis
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* <!-- HTML Skill --> */}
            <div
              data-aos="fade-up"
              data-aos-delay="500">
              <div className="skill-card p-6 shadow-md transition-all duration-300 ease-linear text-center">
                <i
                  className="fab fa-html5 text-5xl mb-4"
                  style={{ color: "#e34c26" }}
                />
                <h3 className="text-lg font-semibold">HTML5</h3>
              </div>
            </div>
            {/* <!-- CSS Skill --> */}
            <div
              data-aos="fade-up"
              data-aos-delay="700">
              <div className="skill-card p-6 shadow-md transition duration-300 text-center">
                <i
                  className="fab fa-css3-alt text-5xl mb-4"
                  style={{ color: "#264de4" }}></i>
                <h3 className="text-lg font-semibold">CSS3</h3>
              </div>
            </div>
            {/* <!-- Tailwind CSS Skill --> */}
            <div
              data-aos="fade-up"
              data-aos-delay="500">
              <div className="skill-card p-6 shadow-md transition duration-300 text-center">
                <i
                  className="fab fa-css3 text-5xl mb-4"
                  style={{ color: "#38bdf8" }}></i>
                <h3 className="text-lg font-semibold">Tailwind CSS</h3>
              </div>
            </div>
            {/* <!-- Git Skill --> */}
            <div
              data-aos="fade-up"
              data-aos-delay="700">
              <div className="skill-card p-6 shadow-md transition duration-300 text-center">
                <i
                  className="fab fa-git-alt text-5xl mb-4"
                  style={{ color: "#f34f29" }}></i>
                <h3 className="text-lg font-semibold">Git</h3>
              </div>
            </div>
            {/* <!-- MySQL Skill --> */}
            <div
              data-aos="fade-up"
              data-aos-delay="500">
              <div className="skill-card p-6 shadow-md transition duration-300 text-center">
                <i
                  className="fas fa-database text-5xl mb-4"
                  style={{ color: "#336791" }}></i>
                <h3 className="text-lg font-semibold">MySQL</h3>
              </div>
            </div>
            {/* <!-- Node.js Skill --> */}
            <div
              data-aos="fade-up"
              data-aos-delay="700">
              <div className="skill-card p-6 shadow-md transition duration-300 text-center">
                <i
                  className="fab fa-node-js text-5xl mb-4"
                  style={{ color: "#3c873a" }}></i>
                <h3 className="text-lg font-semibold">Node.js</h3>
              </div>
            </div>
            {/* <!-- Kotlin Skill --> */}
            <div
              data-aos="fade-up"
              data-aos-delay="500">
              <div className="skill-card p-6 shadow-md transition duration-300 text-center">
                <i
                  className="fab fa-android text-5xl mb-4"
                  style={{ color: "#3c873a" }}></i>
                <h3 className="text-lg font-semibold">Kotlin</h3>
              </div>
            </div>
            {/* <!-- Laravel Skill --> */}
            <div
              data-aos="fade-up"
              data-aos-delay="700">
              <div className="skill-card p-6 shadow-md transition duration-300 text-center">
                <i
                  className="fab fa-laravel text-5xl mb-4"
                  style={{ color: "#ff2d20" }}></i>
                <h3 className="text-lg font-semibold">Laravel</h3>
              </div>
            </div>
            {/* <!-- Flutter Skill --> */}
            <div
              data-aos="fade-up"
              data-aos-delay="500">
              <div className="skill-card p-6 shadow-md transition duration-300 text-center">
                <i
                  className="fab fa-flutter fa-bounce text-5xl mb-4"
                  style={{ color: "#74c0fc" }}></i>
                <h3 className="text-lg font-semibold">Flutter</h3>
              </div>
            </div>
            {/* <!-- Google Workspaces Skill --> */}
            <div
              data-aos="fade-up"
              data-aos-delay="700">
              <div className="skill-card p-6 shadow-md transition duration-300 text-center">
                <i
                  className="fab fa-google text-5xl mb-4"
                  style={{ color: "#ff0000" }}></i>
                <h3 className="text-lg font-semibold">Google Workspaces</h3>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- Enhanced Projects Section --> */}
      <section
        id="projects"
        data-aos="fade-up"
        data-aos-delay="400"
        className="py-16 glassmorphism-section">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-3xl font-bold mb-12 text-center">Latest Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              data-aos="fade-up"
              data-aos-mobile="fade-right"
              data-aos-delay="500">
              <div className="project-card rounded-lg overflow-hidden shadow-md transition duration-300">
                <div className="image-container w-full h-48">
                  <img
                    src="/api/placeholder/400/320"
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
                    Lihat Proyek
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
                    src="/api/placeholder/400/320"
                    alt="Proyek 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
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
                    src="/api/placeholder/400/320"
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
          <div className="mt-8 lg:mt-4 text-slate-300">
            Let's View all of my Project <br />
            <Link
              to={"/project"}
              className="hero-btn inline-block font-semibold py-3 px-6 rounded-lg transition duration-300 mt-4">
              shall we?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
