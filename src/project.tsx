import { Link } from "react-router-dom";
import "./project.css";
import Metatags from "./utils/metatags";

export default function project() {
  return (
    <>
      <Metatags name="Welcome to My Lab" title="Welcome to My Lab" image={"./letter-a.png"} />
      <section id="hero" className="mt-24 pt-8">
        <h1
          data-aos="fade-down"
          data-aos-delay="300"
          className="text-center mx-16 text-4xl font-bold font-['Space_Grotesk']"
        >
          The Lab
          <span className="ml-3">
            <i className="fa-solid fa-flask text-[#00FFD1]"></i>
          </span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center text-[#6B6B6B] mt-4 font-['JetBrains_Mono']"
        >
          Projects that shipped. Say less.
        </p>
      </section>

      <section id="project" className="md:m-16 m-4">
        <div className="timeline">
          {/* <!-- 2024 Year Marker --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="timeline-year"
          >
            <h2 className="text-3xl font-bold">2024</h2>
          </div>

          {/* <!-- ESR Project - Left --> */}
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="timeline-item left"
          >
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img
                  src="/project/esr.jpeg"
                  alt="Emergency Service Response"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Emergency Service Response (ESR)
                </h3>
                <p className="mb-4 text-md md:text-lg">
                  A website project for the <i>Final Project</i> in the
                  Information Systems Analysis and Design course. This platform
                  helps users report emergency incidents and request assistance
                  from the appropriate authorities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    HTML
                  </span>
                  <span className="tech-tag text-xs px-3 py-1 rounded-full">
                    CSS
                  </span>
                  <span className="tech-tag text-xs px-3 py-1 rounded-full">
                    PHP
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    JavaScript
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    MySQL
                  </span>
                </div>
                <a
                  href="https://github.com/rofiframadhanks/esr"
                  className="project-btn inline-block font-medium py-3 px-6 rounded-lg"
                >
                  <i className="fab fa-github mr-2"></i>View Project
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Mental.ly Project - Right --> */}
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="timeline-item right"
          >
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img
                  src="/project/mentally.png"
                  alt="Mental.ly App"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mental.ly</h3>
                <p className="mb-4 text-md md:text-lg">
                  A Kotlin-based mobile application designed for early mental
                  health detection through questionnaires about users' mental
                  health conditions and daily habits.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    Kotlin
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    Retrofit
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    Figma
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    Google Cloud
                  </span>
                </div>
                <div className="gap-2">
                  <a
                    href="https://github.com/AhlanAlghiff/Mental.ly-Project"
                    className="project-btn inline-block font-medium py-3 px-6 rounded-lg"
                  >
                    <i className="fab fa-github mr-2"></i>View Project
                  </a>
                  <a
                    href="https://youtu.be/1yEdsNHTWZo?si=m5_UfoDv10J0-0sW"
                    className="project-btn inline-block ml-2 font-medium py-3 px-6 rounded-lg"
                  >
                    <i className="fab fa-youtube mr-2"></i>Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Portfolio Project - Left --> */}
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="timeline-item left"
          >
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img
                  src="/project/portofolio.png"
                  alt="Portfolio Website"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Portofolio</h3>
                <p className="mb-4 text-md md:text-lg">
                  A portfolio website containing information about my
                  professional experience and projects.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    HTML
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    TailwindCSS
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    JavaScript
                  </span>
                  {/* <span className="tech-tag text-sm px-3 py-1 rounded-full">Google Script</span> */}
                </div>
                <a
                  href="https://luthfiaditya01.github.io"
                  className="project-btn inline-block font-medium py-3 px-6 rounded-lg"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>View Project
                </a>
              </div>
            </div>
          </div>

          {/* <!-- JKT48 Merch Shop Project - Right --> */}
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="timeline-item right"
          >
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                {/* <img src="/api/placeholder/400/320" alt="JKT48 Merch Shop" className="w-full h-full object-cover" /> */}
                <span className="text-6xl">😺</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">JKT48 Merch Shop</h3>
                <p className="mb-4 text-md md:text-lg">
                  A website project for the <i>Final Project</i> in the Web
                  Programming course. This platform allows users to purchase
                  official JKT48 merchandise directly without using third-party
                  <i> online shop platforms</i>.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    HTML
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    CSS
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    PHP
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    MySQL
                  </span>
                </div>
                <a
                  href="https://github.com/andika1991/jkt48merchshop"
                  className="project-btn inline-block font-medium py-3 px-6 rounded-lg"
                >
                  <i className="fab fa-github mr-2"></i>View Project
                </a>
              </div>
            </div>
          </div>

          {/* <!-- DocTrol Project - Left --> */}
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="timeline-item left"
          >
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                {/* <img src="/api/placeholder/400/320" alt="DocTrol System" className="w-full h-full object-cover" /> */}
                <span className="text-6xl">😸</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  DocTrol (Document Control)
                </h3>
                <p className="mb-4 text-md md:text-lg">
                  A website project for the <i>Final Project</i> in the
                  Knowledge Management course. The platform helps users manage
                  classroom learning materials and activities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    HTML
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    CSS
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    PHP
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    MySQL
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Perpustakaan Modern XYZ Project - Right --> */}
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="timeline-item right"
          >
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <span className="text-6xl">😼</span>

                {/* <img src="/api/placeholder/400/320" alt="Library Management System" className="w-full h-full object-cover" /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Perpustakaan Modern XYZ
                </h3>
                <p className="mb-4 text-md md:text-lg">
                  A pre-final exam project as a requirement for the
                  Object-Oriented Programming course. This project is a library
                  information system that helps users borrow books, view book
                  information, and manage library members.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    Java
                  </span>
                  {/* <span className="tech-tag text-sm px-3 py-1 rounded-full">CSS</span>
                <span className="tech-tag text-sm px-3 py-1 rounded-full">PHP</span>
                <span className="tech-tag text-sm px-3 py-1 rounded-full">MySQL</span> */}
                </div>
                <a
                  href="https://github.com/LuthfiAditya01/PerpustakaanModernXYZ"
                  className="project-btn inline-block font-medium py-3 px-6 rounded-lg"
                >
                  <i className="fab fa-github mr-2"></i>View Project
                </a>
                <div className="text-gray-500 text-sm italic">
                  <i className="fas fa-info-circle mr-2"></i>Academic project
                  completed
                </div>
              </div>
            </div>
          </div>

          {/* <!-- 2025 Year Marker --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="timeline-year"
          >
            <h2 className="text-3xl font-bold">2025</h2>
          </div>

          {/* <!-- SIP-SJ Project - Left --> */}
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="timeline-item left"
          >
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img
                  src="/project/sip-sj.jpeg"
                  alt="SIP-SJ Posyandu System"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  SIP-SJ (SISTEM INFORMASI POSYANDU SEPUTIH JAYA)
                </h3>
                <p className="mb-4 text-md md:text-lg">
                  Developed a web-based system for managing Posyandu data and
                  information in Seputih Jaya Village, improving administrative
                  efficiency and information accessibility for users.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    Laravel
                  </span>
                  <span className="tech-tag text-xs px-3 py-1 rounded-full">
                    TailwindCSS
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    JavaScript
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    MySQL
                  </span>
                </div>
                <a
                  href="https://github.com/LuthfiAditya01/SIP-SJ"
                  className="project-btn inline-block font-medium py-3 px-6 rounded-lg"
                >
                  <i className="fab fa-github mr-2"></i>View Project
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Fla-O-Krezz Project - Right --> */}
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="timeline-item right"
          >
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img
                  src="/project/fla-o-krezz.png"
                  alt="Fla-O-Krezz Website"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fla-O-Krezz</h3>
                <p className="mb-4 text-md md:text-lg">
                  Developed a landing page website to promote Fla-O-Krezz
                  pudding products, with a focus on clear product information
                  delivery and stronger visual appeal.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    HTML
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    TailwindCSS
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    JavaScript
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    Google Script
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    Vercel
                  </span>
                </div>
                <a
                  href="https://fla-o-krezz.vercel.app"
                  className="project-btn inline-block font-medium py-3 px-6 rounded-lg"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>Visit Website
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Portfolio Project - Left --> */}
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="timeline-item left"
          >
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img
                  src="/project/portofolio.png"
                  alt="Updated Portfolio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Portofolio (Updated)
                </h3>
                <p className="mb-4 text-md md:text-lg">
                  Developed a personal portfolio website using React.js with a
                  modern and responsive design to present experience and
                  projects professionally while strengthening frontend
                  development skills with modern technologies.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    React JS
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    TailwindCSS
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    JavaScript
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    Vercel
                  </span>
                </div>
                <Link
                  to={"/"}
                  className="project-btn inline-block font-medium py-3 px-6 rounded-lg"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>View Project
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- Mental.ly Project - Right --> */}
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="timeline-item right"
          >
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img
                  src="/project/nibras.png"
                  alt="Mental.ly App"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  #17(You)thOfNibras
                </h3>
                <p className="mb-4 text-md md:text-lg">
                  Developed an interactive React.js website to celebrate a
                  17th birthday with a personal concept and visual
                  storytelling, enhanced with AOS scroll animations and a
                  responsive design for a unique user experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    React Js
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    Google Script
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    Vercel
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    Vite
                  </span>
                </div>
                <div className="gap-2">
                  <a
                    href="https://17youth-of-nibras.vercel.app/"
                    className="project-btn inline-block font-medium py-3 px-6 rounded-lg"
                  >
                    <i className="fa-solid fa-globe mr-2"></i>View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Portfolio Project - Left --> */}
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="timeline-item left"
          >
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img
                  src="/project/magnet.png"
                  alt="Updated Portfolio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Magnet (Magang Management)
                </h3>
                <p className="mb-4 text-md md:text-lg">
                  Developed a digital attendance feature in an intern
                  management system during an internship project at the BPS
                  Bandar Lampung City office to improve administrative
                  efficiency.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-xs px-3 py-1 rounded-full">
                    React Js
                  </span>
                  <span className="tech-tag text-xs px-3 py-1 rounded-full">
                    Javascript
                  </span>
                  <span className="tech-tag text-xs px-3 py-1 rounded-full">
                    Tailwind
                  </span>
                  <span className="tech-tag text-xs px-3 py-1 rounded-full">
                    MongoDB
                  </span>
                </div>
                <a
                  href="https://magnet-bps.vercel.app/"
                  className="project-btn inline-block font-medium py-2 px-4 rounded transition ml-5 duration-300"
                >
                  <i className="fa-solid fa-globe mr-2"></i> Visit Website
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Mental.ly Project - Right --> */}
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="timeline-item right"
          >
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img
                  src="/project/ambismart.png"
                  alt="Mental.ly App"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ambismart</h3>
                <p className="mb-4 text-md md:text-lg">
                  Built a responsive company profile website for Ambismart with
                  a focus on intuitive UI/UX and CTA strategy to improve
                  information access and user interaction.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    React Js
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    Search Engine Optimization
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    Vercel
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    Vite
                  </span>
                </div>
                <div className="gap-2">
                  <a
                    href="https://ambismart.web.id/"
                    className="project-btn inline-block font-medium py-3 px-6 rounded-lg"
                  >
                    <i className="fa-solid fa-globe mr-2"></i>Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Portfolio Project - Left --> */}
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="timeline-item left"
          >
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img
                  src="/project/veccie.png"
                  alt="Updated Portfolio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Veccie Deluxe</h3>
                <p className="mb-4 text-md md:text-lg">
                  Built a product catalog website for Veccie Deluxe with a
                  responsive design and UI/UX focus, while integrating
                  call-to-action (CTA) elements linked directly to e-commerce
                  platforms such as Shopee and TikTok Shop to increase
                  conversion potential.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-xs px-3 py-1 rounded-full">
                    React Js
                  </span>
                  <span className="tech-tag text-xs px-3 py-1 rounded-full">
                    Search Engine Optimization
                  </span>
                  <span className="tech-tag text-xs px-3 py-1 rounded-full">
                    Firebase Authentication
                  </span>
                  <span className="tech-tag text-xs px-3 py-1 rounded-full">
                    Google Storage
                  </span>
                </div>
                <a
                  href="https://vecciedeluxe.web.id/"
                  className="project-btn inline-block font-medium py-2 px-4 rounded transition ml-5 duration-300"
                >
                  <i className="fa-solid fa-globe mr-2"></i> Visit Website
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Mental.ly Project - Right --> */}
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="timeline-item right"
          >
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img
                  src="/project/duitlog.png"
                  alt="Mental.ly App"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Duitlog</h3>
                <p className="mb-4 text-md md:text-lg">
                  A system delivered as both mobile and web applications for
                  expense tracking, designed to help users manage their
                  finances easily and efficiently.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    React Native
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    Expo
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    Next.js
                  </span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">
                    MongoDB
                  </span>
                </div>
                <div className="gap-2">
                  <a
                    href="https://duitlog.web.id/"
                    className="project-btn inline-block font-medium py-3 px-6 rounded-lg"
                  >
                    <i className="fa-solid fa-globe mr-2"></i>Visit Web
                  </a>
                  <a
                    href="https://drive.google.com/drive/folders/1eQ3gFq8s7nJOpvuW1JD2KdOKKKG6tW-Q?usp=drive_link"
                    className="project-btn inline-block ml-2 font-medium py-3 px-6 rounded-lg"
                  >
                    <i className="fab fa-android mr-2"></i>Download App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
