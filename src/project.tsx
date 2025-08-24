import { Link } from "react-router-dom"
import "./project.css"

export default function project() {
  return (
    <>
      <section id="hero" className="mt-24 pt-8">
        <h1 data-aos="fade-down" data-aos-delay="500" className="text-center mx-16 text-4xl font-bold">
          Let's explore the journey of my coding!
          <span><i className="fa-solid fa-paper-plane fa-beat-fade text-sky-400"></i></span>
        </h1>
      </section>


      <section id="project" className="md:m-16 m-4">
        <div className="timeline">
          {/* <!-- 2024 Year Marker --> */}
          <div data-aos="fade-up" data-aos-delay="500" className="timeline-year">
            <h2 className="text-3xl font-bold">2024</h2>
          </div>

          {/* <!-- ESR Project - Left --> */}
          <div data-aos="fade-right" data-aos-delay="500" className="timeline-item left">
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img src="/project/esr.jpeg" alt="Emergency Service Response" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Emergency Service Response (ESR)</h3>
                <p className="mb-4 text-md md:text-lg">Projek Website untuk <i>Final Project</i> mata kuliah Analisis dan Desain Sistem Informasi. Website ini berfungsi untuk membantu pengguna dalam membuat laporan kejadian darurat dan meminta bantuan dari pihak berwenang</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">HTML</span>
                  <span className="tech-tag text-xs px-3 py-1 rounded-full">CSS</span>
                  <span className="tech-tag text-xs px-3 py-1 rounded-full">PHP</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">JavaScript</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">MySQL</span>
                </div>
                <a href="https://github.com/rofiframadhanks/esr" className="project-btn inline-block font-medium py-3 px-6 rounded-lg">
                  <i className="fab fa-github mr-2"></i>Lihat Proyek
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Mental.ly Project - Right --> */}
          <div data-aos="fade-left" data-aos-delay="500" className="timeline-item right">
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img src="/project/mentally.png" alt="Mental.ly App" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mental.ly</h3>
                <p className="mb-4 text-md md:text-lg">Aplikasi mobile dengan menggunakan Kotlin yang bermanfaat untuk mendeteksi awal kesehatan mental pengguna dengan cara memberikan kuisioner mengenai kesehatan mental dan kebiasaan pengguna</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">Kotlin</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">Retrofit</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">Figma</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">Google Cloud</span>
                </div>
                <div className="gap-2">
                  <a href="https://github.com/AhlanAlghiff/Mental.ly-Project" className="project-btn inline-block font-medium py-3 px-6 rounded-lg">
                    <i className="fab fa-github mr-2"></i>Lihat Proyek
                  </a>
                  <a href="https://youtu.be/1yEdsNHTWZo?si=m5_UfoDv10J0-0sW" className="project-btn inline-block ml-2 font-medium py-3 px-6 rounded-lg">
                    <i className="fab fa-youtube mr-2"></i>Lihat Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Portfolio Project - Left --> */}
          <div data-aos="fade-right" data-aos-delay="500" className="timeline-item left">
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img src="/project/portofolio.png" alt="Portfolio Website" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Portofolio</h3>
                <p className="mb-4 text-md md:text-lg">Website portofolio yang berisi informasi tentang pengalaman dan proyek saya</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">HTML</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">TailwindCSS</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">JavaScript</span>
                  {/* <span className="tech-tag text-sm px-3 py-1 rounded-full">Google Script</span> */}
                </div>
                <a href="https://luthfiaditya01.github.io" className="project-btn inline-block font-medium py-3 px-6 rounded-lg">
                  <i className="fas fa-external-link-alt mr-2"></i>Lihat Proyek
                </a>
              </div>
            </div>
          </div>

          {/* <!-- JKT48 Merch Shop Project - Right --> */}
          <div data-aos="fade-left" data-aos-delay="500" className="timeline-item right">
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                {/* <img src="/api/placeholder/400/320" alt="JKT48 Merch Shop" className="w-full h-full object-cover" /> */}
                <span className="text-6xl">😺</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">JKT48 Merch Shop</h3>
                <p className="mb-4 text-md md:text-lg">Project Website untuk <i>Final Project</i> mata kuliah Pemrograman Web. Website ini berfungsi untuk membeli merchandise JKT48 langsung dari website resmi tanpa melewati <i>Platform Online Shop</i> ketiga</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">HTML</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">CSS</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">PHP</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">MySQL</span>
                </div>
                <a href="https://github.com/andika1991/jkt48merchshop" className="project-btn inline-block font-medium py-3 px-6 rounded-lg">
                  <i className="fab fa-github mr-2"></i>Lihat Proyek
                </a>
              </div>
            </div>
          </div>

          {/* <!-- DocTrol Project - Left --> */}
          <div data-aos="fade-right" data-aos-delay="500" className="timeline-item left">
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                {/* <img src="/api/placeholder/400/320" alt="DocTrol System" className="w-full h-full object-cover" /> */}
                <span className="text-6xl">😸</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">DocTrol (Document Control)</h3>
                <p className="mb-4 text-md md:text-lg">Project Website untuk <i>Final Project</i> mata kuliah Manajemen Pengetahuan. Website ini berfungsi untuk membantu pengguna dalam memanajemen pembelajaran pada sebuah kelas.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">HTML</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">CSS</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">PHP</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">MySQL</span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Perpustakaan Modern XYZ Project - Right --> */}
          <div data-aos="fade-left" data-aos-delay="500" className="timeline-item right">
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <span className="text-6xl">😼</span>

                {/* <img src="/api/placeholder/400/320" alt="Library Management System" className="w-full h-full object-cover" /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Perpustakaan Modern XYZ</h3>
                <p className="mb-4 text-md md:text-lg">Project Pra-UAS untuk Prasyarat pelaksanaan UAS mata kuliah Pemrograman Berbasis Objek. Projek ini Merupakan sebuah Sistem Informasi Perpustakaan yang dapat membantu pengguna dalam meminjam buku, Melihat Informasi Buku, dan Mengatur Anggota Perpustakaan.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">Java</span>
                  {/* <span className="tech-tag text-sm px-3 py-1 rounded-full">CSS</span>
                <span className="tech-tag text-sm px-3 py-1 rounded-full">PHP</span>
                <span className="tech-tag text-sm px-3 py-1 rounded-full">MySQL</span> */}
                </div>
                <a href="https://github.com/LuthfiAditya01/PerpustakaanModernXYZ" className="project-btn inline-block font-medium py-3 px-6 rounded-lg">
                  <i className="fab fa-github mr-2"></i>Lihat Proyek
                </a>
                <div className="text-gray-500 text-sm italic">
                  <i className="fas fa-info-circle mr-2"></i>Project akademik selesai
                </div>
              </div>
            </div>
          </div>

          {/* <!-- 2025 Year Marker --> */}
          <div data-aos="fade-up" data-aos-delay="500" className="timeline-year">
            <h2 className="text-3xl font-bold">2025</h2>
          </div>

          {/* <!-- SIP-SJ Project - Left --> */}
          <div data-aos="fade-right" data-aos-delay="500" className="timeline-item left">
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img src="/project/sip-sj.jpeg" alt="SIP-SJ Posyandu System" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">SIP-SJ (SISTEM INFORMASI POSYANDU SEPUTIH JAYA)</h3>
                <p className="mb-4 text-md md:text-lg">Website untuk mengelola data dan informasi posyandu di Kelurahan Seputih Jaya</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">Laravel</span>
                  <span className="tech-tag text-xs px-3 py-1 rounded-full">TailwindCSS</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">JavaScript</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">MySQL</span>
                </div>
                <a href="https://github.com/LuthfiAditya01/SIP-SJ" className="project-btn inline-block font-medium py-3 px-6 rounded-lg">
                  <i className="fab fa-github mr-2"></i>Lihat Proyek
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Fla-O-Krezz Project - Right --> */}
          <div data-aos="fade-left" data-aos-delay="500" className="timeline-item right">
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img src="/project/fla-o-krezz.png" alt="Fla-O-Krezz Website" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fla-O-Krezz</h3>
                <p className="mb-4 text-md md:text-lg">Website berbentuk seperti brosur untuk memperkenalkan kreasi Pudding Fla-O-Krezz</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">HTML</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">TailwindCSS</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">JavaScript</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">Google Script</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">Vercel</span>
                </div>
                <a href="https://fla-o-krezz.vercel.app" className="project-btn inline-block font-medium py-3 px-6 rounded-lg">
                  <i className="fas fa-external-link-alt mr-2"></i>Lihat Website
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Portfolio Project - Left --> */}
          <div data-aos="fade-right" data-aos-delay="500" className="timeline-item left">
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img src="/project/portofolio.png" alt="Updated Portfolio" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Portofolio (Updated)</h3>
                <p className="mb-4 text-md md:text-lg">Website portofolio yang berisi informasi tentang pengalaman dan proyek saya dengan desain yang diperbaharui</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">React JS</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">TailwindCSS</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">JavaScript</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">Vercel</span>
                </div>
                <Link
                  to={"/"}
                  className="project-btn inline-block font-medium py-3 px-6 rounded-lg">
                  <i className="fas fa-external-link-alt mr-2"></i>Lihat Proyek
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- Mental.ly Project - Right --> */}
          <div data-aos="fade-left" data-aos-delay="500" className="timeline-item right">
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img src="/project/nibras.png" alt="Mental.ly App" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">#17(You)thOfNibras</h3>
                <p className="mb-4 text-md md:text-lg">Website interaktif yang dibuat untuk merayakan momen ulang tahun ke-17 seseorang dengan konsep personal dan storytelling visual. Dibangun menggunakan React.js, Tailwind CSS, dan AOS untuk animasi scroll, situs ini menghadirkan pengalaman yang unik, responsif, dan penuh elemen kejutan.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">React Js</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">Google Script</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">Vercel</span>
                  <span className="tech-tag text-sm px-3 py-1 rounded-full">Vite</span>
                </div>
                <div className="gap-2">
                  <a href="https://17youth-of-nibras.vercel.app/" className="project-btn inline-block font-medium py-3 px-6 rounded-lg">
                    <i className="fa-solid fa-globe mr-2"></i>Lihat Proyek
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Portfolio Project - Left --> */}
          <div data-aos="fade-right" data-aos-delay="500" className="timeline-item left">
            <div className="project-card shadow-md">
              <div className="image-container w-full h-48">
                <img src="/project/magnet.png" alt="Updated Portfolio" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Magnet (Magang Management)</h3>
                <p className="mb-4 text-md md:text-lg">Sebuah projek akhir untuk Kerja Praktik saya di Badan Pusat Statistik Kota Bandar Lampung. dimana saya berpartisipasi dalam fitur Daftar Hadir bagi mahasiswa yang sedang magang disana</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag text-xs px-3 py-1 rounded-full">React Js</span>
                  <span className="tech-tag text-xs px-3 py-1 rounded-full">Javascript</span>
                  <span className="tech-tag text-xs px-3 py-1 rounded-full">Tailwind</span>
                  <span className="tech-tag text-xs px-3 py-1 rounded-full">MongoDB</span>
                </div>
                <a
                  href="https://magnet-bps.vercel.app/"
                  className="project-btn inline-block font-medium py-2 px-4 rounded transition ml-5 duration-300">
                  <i className="fa-solid fa-globe mr-2"></i> Lihat Website
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}