# NEO//PLAY — Portfolio Redesign Implementation Plan

> **Dokumen Rencana Kerja & Rekomendasi Teknis**
> 
> Berdasarkan analisis terhadap [`design.md`](file:///e:/Kerja/Portofolio/design.md), arsitektur codebase saat ini, serta panduan audit dari standard `/ui-ux-pro-max`.

---

## 1. Executive Summary & Visi Redesign

Portofolio saat ini mengusung tema **"The Smart Chiller"** (dominan warna Cyan `#00FFD1`, Ungu `#5D5FEF`, glassmorphism tebal, floating blur circles, dan animasi scroll lambat).

Melalui [`design.md`](file:///e:/Kerja/Portofolio/design.md), visi baru yang ingin dicapai adalah **NEO//PLAY**:
- **Arah Seni:** Persona 5 (kontras grafis berani, tipografi oversized, asimetri) × Zenless Zone Zero (karakter urban, card berlapis, sticker accents) × Neverness to Everness (panel futuristik rapi, HUD metadata teknikal).
- **Filosofi Inti:** *"Style attracts attention; clarity earns trust."* Estetika game HUD/editorial yang bold tanpa mengorbankan kecepatan akses recruiter dan keterbacaan teknikal.
- **Warna Identitas:** Base `Ink` (`#171719`), Panel (`#242429`), Paper (`#F4F1E9`), dengan aksen utama **Signal Red (`#FF3B45`)** dan aksen status **Acid Lime (`#C8F169`)**.

---

## 2. Audit Codebase Saat Ini vs. Target `design.md`

Berikut perbandingan mendalam kondisi eksisting di codebase dengan target rancangan baru:

| Elemen / Area | Kondisi Codebase Saat Ini | Target `design.md` & UI/UX Pro Max | Catatan Evaluasi & Rencana Tindakan |
| :--- | :--- | :--- | :--- |
| **Arsitektur Halaman** | Multi-page routing via React Router (`/`, `/about`, `/project`, `/experience`, `/404`). Terjadi duplikasi konten (proyek ada di `/` dan `/project`, skill ada di `/` dan `/about`). | **Single-Page Architecture** terpadu (`00 / INTRO` → `01 / SELECTED WORK` → `02 / CAPABILITIES` → `03 / EXPERIENCE` → `04 / ABOUT` → `05 / CONTACT`). | **Sangat Direkomendasikan:** Gabungkan menjadi 1 single-page responsif dengan anchor link halus. Recruiter tidak perlu klik berpindah-pindah rute untuk melihat ringkasan kapabilitas. |
| **Loading Screen** | Artificial loading timer 2.8 detik (`setTimeout` 2000ms + fade 800ms) bertuliskan *"Syncing vibes..."*. | Zero artificial latency. Halaman langsung interaktif dan konten langsung terbaca. | **Hapus total** blocking loader ini. Berdasarkan riset UX, loading buatan meningkatkan bounce rate recruiter hingga 40%. |
| **Sistem Warna** | Dark cyan `#00FFD1`, Ungu `#5D5FEF`, Sky Blue `#38bdf8`, Glassmorphism blur 20px, glow text shadow berlebihan. | **Ink `#171719`**, **Paper `#F4F1E9`**, **Signal Red `#FF3B45`**, **Acid Lime `#C8F169`**, border teknikal tipis 1px (`#3B3B42`). | Hilangkan glow neon blur yang kabur. Ganti dengan border kontras tinggi, panel matte solid, dan aksen Signal Red tegas. |
| **Tipografi** | `index.html` hanya memuat *JetBrains Mono*. Kelas `Space Grotesk` dipanggil di CSS/inline tapi font aslinya tidak di-import di HTML, menyebabkan fallback font tidak konsisten. | **Space Grotesk** (Display/Headings), **Inter** (Body text & UI copy), **JetBrains Mono** (Technical tags, metadata, labels). | Import ketiga font secara resmi via Google Fonts di `index.html` dan definisikan di Tailwind CSS token. |
| **Navigasi Desktop** | Menggunakan icon murni tanpa label teks (`fas fa-home`, `fas fa-user`, dsb). | Navigasi ringkas dengan wordmark + text anchor (`01 // WORK`, `02 // STACK`, `03 // EXP`, `04 // CONTACT`) + status ketersediaan. | Icon murni tanpa teks membingungkan pengguna dan melanggar prinsip aksesibilitas (WCAG 2.2). Ubah ke label teks monospaced yang jelas. |
| **Seksi Skill / Capabilities** | Menampilkan persentase arbitrary / fiktif (*HTML 90%*, *CSS 75%*, *Teamwork 90%*, dll.) dengan progress bar dan pop-up modal. | Dikelompokkan berdasarkan fungsi (*Frontend/Web*, *Mobile*, *Backend/API*, *Tools/DevOps*). **Tanpa persentase palsu**. | **Wajib dirombak**: Persentase skill adalah anti-pattern besar di mata recruiter senior. Ubah menjadi kartu kapabilitas teknikal terstruktur dengan stack chip dan pengalaman nyata. |
| **Seksi Proyek** | Timeline zig-zag vertikal 2024–2025 dengan placeholder emoji kucing (`😺`, `😸`, `😼`) untuk thumbnail yang hilang. | Grid editorial / bento cards terstruktur: Thumbnail jelas, ID (`PROJECT_01`), peran, tantangan/outcome nyata, tech tags, dan action button. | Format ulang data proyek menjadi data model terpadu. Berikan screenshot asli atau fallback graphic HUD mockup yang representatif. |
| **Seksi Pengalaman** | Timeline vertikal tengah dengan garis cyan menyala. | Mission-log / technical log layout dengan date stamp rapi, bullets pencapaian terukur, dan chip teknologi. | Buat layout log teknikal yang clean, mudah di-scan dalam waktu 5 detik oleh hiring manager. |
| **CSS & Struktur File** | Terpecah di 5 file terpisah (`App.css` 981 baris, `index.css` 552 baris, `about.css` 776 baris, `project.css` 494 baris, `experience.css` 240 baris). Banyak kode mati dan styling saling menimpa. | Token CSS terpusat, utility classes via Tailwind v4, styling modular per komponen. | Konsolidasikan CSS menjadi token global (`tokens.css`) + Tailwind v4 `@theme`, hapus file-file CSS warisan yang redundan. |
| **Aksesibilitas & Motion** | Animasi AOS 1000ms (terlalu lambat), tidak ada penanganan `prefers-reduced-motion` di AOS, focus outline sering dihilangkan. | Durasi transisi cepat (120ms – 420ms), visible `:focus-visible` ring, wajib mendukung `prefers-reduced-motion`. | Tambahkan styling focus state kontras tinggi dan utility reduced-motion di semua interaksi. |

---

## 3. Keputusan Desain & Rekomendasi Teknis (UI/UX Pro Max)

### A. Format Halaman: Single-Page vs Multi-Page
- **Rekomendasi:** **Single-Page Hybrid** dengan ID anchor (`#work`, `#skills`, `#experience`, `#about`, `#contact`).
- **Alasan:** Recruiter hanya menghabiskan rata-rata 10–30 detik pada portofolio pertama kali. Single-page memungkinkan mereka melakukan quick scan (scroll cepat) dari hero hingga kontak tanpa jeda loading antar-halaman.
- **Tetap mempertahankan:** Rute 404 (`/404`) untuk handling link mati, serta opsi membuka modal / sub-view untuk detail studi kasus mendalam jika diinginkan.

### B. Desain Token Baru (Tailwind v4 & CSS Variables)
Definisi token warna dan tipografi di `src/index.css`:
```css
@import "tailwindcss";

@theme {
  --color-ink: #171719;
  --color-panel: #242429;
  --color-panel-raised: #2d2d34;
  --color-paper: #f4f1e9;
  --color-signal: #ff3b45;
  --color-signal-hover: #e02f39;
  --color-acid: #c8f169;
  --color-muted: #85858d;
  --color-line-dark: #3b3b42;
  --color-line-light: #d8d4cb;

  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}
```

### C. Signature Visual Motifs (Persona 5 × ZZZ × NTE)
1. **Divider Identitas:** `//` di semua judul seksi (contoh: `01 // SELECTED WORK`, `SYS.STATUS // AVAILABLE FOR WORK`).
2. **Technical Accent Pill:** Border 1px dengan font mono dan status dot hijau lime (`●`).
3. **Diagonal Slice Accents:** Aksen potong sudut halus (`clip-path` diagonal 45 derajat) pada primary button dan badge hero.
4. **Editorial Framing:** Border 1px `#3b3b42` yang presisi, bukan shadow blur generik.

---

## 4. Rincian Seksi Halaman Baru

### 00 // INTRO (Hero)
- **Status Indicator:** `[ ● STATUS: OPEN FOR ROLES ]` di pojok kiri atas/hero badge.
- **Main Heading:** Tipografi display masif (*Space Grotesk*):
  ```text
  LUTHFI ADITYA //
  SOFTWARE ENGINEER
  WEB & MOBILE SYSTEMS
  ```
- **Value Proposition:** Ringkas, percaya diri, tanpa basa-basi teknikal kosong (*"Building performant mobile apps and web platforms with clean architecture and modern UX."*).
- **Primary Action Group:**
  - Button Utama: `[ VIEW PROJECTS // ]` (Aksen Signal Red, teks putih, hover slide effect).
  - Button Sekunder: `[ GET IN TOUCH ]` (Border panel gelap, mono text).
  - Quick Link: `[ RESUME_2026.PDF ↓ ]` (JetBrains Mono).

### 01 // SELECTED WORK (Projects)
- **Penyortiran Proyek:** Pisahkan proyek unggulan (Featured/Production) dengan proyek eksperimental/akademik.
- **Featured Projects (Cards Besar):**
  1. **Mental.ly** — Mobile AI Mental Health Detection (Kotlin, TensorFlow, Google Cloud, Retrofit).
  2. **Duitlog** — Cross-platform Expense Tracker (React Native, Expo, Next.js, MongoDB).
  3. **Magnet (BPS)** — Intern Management System & Digital Attendance (React, Tailwind, MongoDB).
  4. **Veccie Deluxe / Ambismart** — E-Commerce / Business Profiles (React, SEO, Conversions).
- **Format Project Card:**
  - Header kartu: `PROJECT_01 // 2025`
  - Thumbnail: Rasio 16:9 bersih dengan badge tech stack.
  - Problem & Solution: Deskripsi 2 kalimat fokus pada peran dan dampak.
  - Action: Live Demo link (`EXTERNAL_LINK ↗`) dan Repository link (`GITHUB //`).

### 02 // CAPABILITIES (Skills Redefined)
- **Hapus total persentase 90%, 85%, dll.**
- **Kelompokkan ke dalam Matrix Kompetensi:**
  - **Category 1: Web & Fullstack** (React, Next.js, TypeScript, Tailwind CSS, Node.js, Laravel).
  - **Category 2: Mobile Engineering** (React Native, Expo, Android Kotlin, Jetpack).
  - **Category 3: Database & Cloud** (MongoDB, MySQL, Firebase, Google Cloud, RESTful APIs).
  - **Category 4: Workflow & Engineering Practices** (Git Flow, Clean Architecture, CI/CD Vercel, Performance & SEO).
- **Tampilan:** Grid kartu panel gelap dengan tag chip bertepi tajam/halus dan indikator pengalaman praktis.

### 03 // EXPERIENCE (Mission Log)
- Format log misi teknis yang terstruktur vertikal:
  - `LOG_03 // SEP 2025 – JUL 2026` — **IT Mobile App Developer** @ *Be Management* (Remote).
  - `LOG_02 // AUG 2025 – PRESENT` — **Freelance Frontend Developer** @ *Local SMEs*.
  - `LOG_01 // JUN 2025 – AUG 2025` — **IT Staff Intern** @ *Badan Pusat Statistik (BPS)*.
- Poin pencapaian ringkas, berorientasi hasil, lengkap dengan chip teknologi yang digunakan di setiap peran.

### 04 // ABOUT (The Profile & Philosophy)
- Foto profil editorial berkualitas tinggi dengan framing teknis.
- Profil naratif singkat: latar belakang di Universitas Lampung (final year), fokus rekayasa perangkat lunak, dan pendekatan problem-solving.
- Section pendukung: *"How I Work"* (Clean code, user empathy, rapid iteration).

### 05 // CONTACT (Closing Action)
- Heading tegas berukuran besar: *"LET'S BUILD SOMETHING RELIABLE //"*
- Direct Email copy button / mailto link: `contact@adheetya.my.id`.
- Terminal-style social link table: GitHub, LinkedIn, Spotify, CV download.
- Footer rapi dengan mono timestamp dan copyright mark.

---

## 5. Rencana Kerja Bertahap (Implementation Phases)

### Fase 1: Setup Fondasi & Design Tokens
1. Update `index.html`:
   - Import Google Fonts: `Space Grotesk`, `Inter`, dan `JetBrains Mono`.
   - Perbarui title dan metadata SEO dasar.
2. Refactor CSS:
   - Buat konfigurasi Tailwind v4 `@theme` di `src/index.css`.
   - Setup custom property CSS tokens (colors, fonts, borders, transitions).
   - Bersihkan dan arsipkan CSS lawas (`about.css`, `project.css`, `experience.css`).

### Fase 2: Layout Shell & Navigasi
1. Rebuild `SiteNavigation` di `src/App.tsx`:
   - Logo monomark: `LA // NEO` atau `LUTHFI // DEV`.
   - Desktop links dengan scroll observer aktif (`01 // WORK`, `02 // STACK`, `03 // EXP`, `04 // ABOUT`, `05 // CONTACT`).
   - Mobile responsive drawer yang accessible (keyboard navigable, ESC to close, aria attributes).
2. Hapus artificial loading screen (2.8s) di `src/App.tsx`.
3. Buat fixed floating badge atau status indicator yang bersih dan tidak menghalangi konten.

### Fase 3: Rekonstruksi Komponen & Seksi
1. Buat data model terpusat di `src/data/`:
   - `projects.ts`: Data proyek lengkap, kategori, link, gambar, dan deskripsi terkurasi.
   - `capabilities.ts`: Matrix skill tanpa persentase palsu.
   - `experience.ts`: Riwayat kerja dan magang.
2. Bangun komponen seksi:
   - `HeroSection.tsx` (`00 // INTRO`)
   - `ProjectsSection.tsx` (`01 // WORK`)
   - `CapabilitiesSection.tsx` (`02 // CAPABILITIES`)
   - `ExperienceSection.tsx` (`03 // EXPERIENCE`)
   - `AboutSection.tsx` (`04 // ABOUT`)
   - `ContactSection.tsx` (`05 // CONTACT`)
3. Tautkan semua ke single-page layout di `src/index.tsx`.

### Fase 4: Micro-interactions & Motion Refinement
1. Tune durasi animasi (120ms untuk button/chip, 250ms untuk card hover, 400ms untuk entrance).
2. Terapkan `@media (prefers-reduced-motion: reduce)` di semua elemen animasi.
3. Pastikan `:focus-visible` ring kontras (`ring-2 ring-signal`) aktif pada semua tombol dan link.

### Fase 5: QA, Responsive Testing & Pembersihan
1. Uji tampilan responsif pada 375px (mobile), 768px (tablet), 1024px (laptop), dan 1440px (desktop).
2. Pastikan tidak ada horizontal scrollbar atau clipping aneh.
3. Verifikasi kontras warna teks (WCAG AA 4.5:1 minimum).
4. Run `npm run build` dan `npm run lint` untuk memastikan zero errors / warnings.

---

## 6. Keputusan yang Perlu Dikonfirmasi oleh User

Sebelum eksekusi coding dimulai, mohon review beberapa poin berikut:
1. **Struktur Halaman:** Apakah Anda setuju mengubah portofolio menjadi **Single-Page terpadu** (semua seksi berada di satu halaman berurutan dengan navigasi anchor), atau Anda tetap ingin rute halaman terpisah seperti sekarang (`/project`, `/about`, `/experience`)? *(Rekomendasi kuat kami: Single-Page)*.
2. **Penghapusan Persentase Skill:** Apakah Anda setuju menghapus persentase angka (seperti `HTML 90%`, `Teamwork 90%`) dan menggantinya dengan **Capabilities Matrix & Stack Badges** profesional?
3. **Penghapusan Artificial Loading Screen:** Apakah Anda setuju menghapus jeda loading 2.8 detik agar website langsung terbuka instan saat dikunjungi?
4. **Aksen Warna Utama:** Memastikan pilihan warna Signal Red (`#FF3B45`) + Acid Lime (`#C8F169`) di atas base Dark Ink (`#171719`) sesuai dengan `design.md`.
