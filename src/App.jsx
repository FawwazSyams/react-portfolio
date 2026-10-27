import { useState, useEffect } from "react";
import DataImage, { listTools, listProyek, listSertifikat, listIgDesigns } from "./data";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Discuss from "./pages/Discuss";

export default function App() {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [formState, setFormState] = useState({
    nama: "",
    email: "",
    pesan: "",
    status: "idle", // 'idle' | 'submitting' | 'success' | 'error'
  });

  const isDiscuss = window.location.hostname === "discuss.syamsdev.id";
  if (isDiscuss) {
    return <Discuss />;
  }

  // Handle ESC key for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedDesign) {
        setSelectedDesign(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedDesign]);

  // Form submit handler with interactive feedback
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, status: "submitting" }));

    try {
      const formData = new FormData(e.target);
      const response = await fetch("https://formsubmit.co/ajax/fawwazsyams04@email.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormState({ nama: "", email: "", pesan: "", status: "success" });
      } else {
        setFormState((prev) => ({ ...prev, status: "error" }));
      }
    } catch {
      setFormState((prev) => ({ ...prev, status: "error" }));
    }
  };

  // Group tools by domain for clarity
  const toolCategories = [
    { name: "Frontend", items: ["React JS", "Tailwind CSS", "Bootstrap", "Javascript"] },
    { name: "Backend & Data", items: ["PHP", "Laravel", "Node JS", "Github"] },
    { name: "Design & Creative", items: ["Figma", "Adobe Illustrator", "Photoshop", "canva"] },
  ];

  // Filter projects if needed, or split into flagship + others
  const flagshipProject = listProyek.find((p) => p.id === 1) || listProyek[0];
  const supportingProjects = listProyek.filter((p) => p.id !== flagshipProject.id);

  return (
    <div className="relative min-h-screen bg-[#0b0f17] text-zinc-100 overflow-x-hidden">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* ========================================================
            HERO SECTION
            Editorial, grounded, confident headline with personal story
           ======================================================== */}
        <section
          id="beranda"
          className="pt-32 sm:pt-40 pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status Indicator */}
            {/* <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 w-fit mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Terbuka untuk kolaborasi proyek dan peluang magang</span>
            </div> */}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
              Membangun aplikasi yang fungsional, dirancang dengan ketelitian visual.
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mb-8">
              Saya <strong className="text-zinc-200 font-semibold">Fawwaz Muhammad Syams</strong>, mahasiswa Teknik Informatika di Politeknik TEDC Bandung. Berfokus pada pengembangan aplikasi modern serta eksplorasi desain grafis dan editorial brand identity.
            </p>

            {/* Deliberate Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#proyek"
                className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Lihat Karya Terpilih
              </a>

              <a
                href="/CV_Fawwaz_Muhammad_Syams.pdf"
                download="CV_Fawwaz_Muhammad_Syams.pdf"
                className="px-6 py-3 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 font-semibold text-sm transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <i className="ri-file-download-line text-base text-zinc-400"></i>
                Unduh CV (PDF)
              </a>

              <a
                href="#desain"
                className="px-5 py-3 rounded-lg text-zinc-400 hover:text-zinc-200 text-sm font-medium transition-colors"
              >
                Eksplorasi Desain Grafis →
              </a>
            </div>

            {/* Quick Context Highlights */}
            <div className="mt-12 pt-8 border-t border-zinc-800/80 grid grid-cols-3 gap-6 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white font-mono">10+</p>
                <p className="text-xs text-zinc-400 mt-1">Proyek Web & Desain</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white font-mono">TEDC</p>
                <p className="text-xs text-zinc-400 mt-1">Teknik Informatika Bandung</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white font-mono">2 Thn</p>
                <p className="text-xs text-zinc-400 mt-1">Pengalaman Praktik</p>
              </div>
            </div>
          </div>

          {/* Profile Framing */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl">
                <img
                  src={DataImage.HeroImage}
                  alt="Fawwaz Muhammad Syams"
                  className="w-full aspect-[4/5] object-cover filter contrast-[1.02]"
                  loading="eager"
                />
                <div className="p-4 bg-zinc-900/95 border-t border-zinc-800/80">
                  <p className="text-sm font-semibold text-zinc-200">Fawwaz Muhammad Syams</p>
                  <p className="text-xs text-zinc-400">Web Developer & Graphic Designer | Bandung</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            TENTANG SECTION (Editorial Split)
           ======================================================== */}
        <section id="tentang" className="py-20 border-t border-zinc-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">Tentang Saya</span>
              <h2 className="text-3xl font-bold text-white mt-2 tracking-tight">
                Keseimbangan antara logika kode dan kepekaan rasa.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-zinc-300 text-base text-justify leading-relaxed">
              <p>
                Bagi saya, web development bukan hanya perkara menyusun komponen hingga berfungsi, melainkan memastikan antarmuka terasa intuitif dan nyaman digunakan. Latar belakang saya dalam desain grafis memberikan perspektif unik saat merancang arsitektur halaman, tipografi, dan hierarki informasi.
              </p>
              <p>
                Sebagai mahasiswa di <strong className="text-white">Politeknik TEDC Bandung</strong>, saya aktif mengembangkan berbagai solusi digital: mulai dari portal profil perusahaan, sistem photobooth interaktif, eksplorasi machine learning sederhana, hingga identitas visual dan publikasi media sosial untuk komunitas serta instansi kepemudaan.
              </p>

              <div className="pt-4 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex items-center gap-2 text-indigo-400 mb-2">
                    <i className="ri-code-s-slash-line text-lg"></i>
                    <h3 className="font-semibold text-zinc-200 text-sm">Fullstack Development</h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-normal">
                    Fokus pada React, Next.js, Laravel, REST API, dan integrasi database relasional yang rapi dan terukur.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex items-center gap-2 text-amber-400 mb-2">
                    <i className="ri-palette-line text-lg"></i>
                    <h3 className="font-semibold text-zinc-200 text-sm">Visual & Graphic Craft</h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-normal">
                    Pengalaman merancang poster acara, layout editorial, dan aset media sosial menggunakan Illustrator, Photoshop, dan Figma.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            TECH STACK & TOOLS SECTION
           ======================================================== */}
        <section id="stack" className="py-20 border-t border-zinc-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">Toolkit & Penguasaan</span>
              <h2 className="text-3xl font-bold text-white mt-2 tracking-tight">Teknologi & Instrumen Kerja</h2>
            </div>
            <p className="text-sm text-zinc-400 max-w-md">
              Koleksi perangkat lunak dan library yang saya gunakan sehari-hari untuk mewujudkan ide menjadi produk nyata.
            </p>
          </div>

          {/* Categorized Stack Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {toolCategories.map((cat, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-zinc-900/70 border border-zinc-800">
                <h3 className="text-sm font-semibold text-zinc-200 mb-4 pb-2 border-b border-zinc-800 flex items-center justify-between">
                  <span>{cat.name}</span>
                  <span className="text-xs font-mono text-zinc-400">{cat.items.length} tools</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((itemName, itemIdx) => {
                    const toolObj = listTools.find((t) => t.nama.toLowerCase() === itemName.toLowerCase());
                    return (
                      <div
                        key={itemIdx}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800/80 border border-zinc-700/60 text-xs text-zinc-200"
                      >
                        {toolObj && (
                          <img src={toolObj.gambar} alt={toolObj.nama} className="w-4 h-4 object-contain" />
                        )}
                        <span>{itemName}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Clean Ticker for all tools */}
          {/* <div
            className="relative overflow-hidden w-full py-4 border-y border-zinc-800/80 bg-zinc-900/40"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="animate-ticker flex items-center gap-6">
              {[...listTools, ...listTools].map((tool, index) => (
                <div
                  key={`${tool.id}-${index}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-zinc-800/60 border border-zinc-700/60 shrink-0"
                >
                  <img src={tool.gambar} alt={tool.nama} className="w-5 h-5 object-contain" />
                  <span className="text-xs font-semibold text-zinc-200 whitespace-nowrap">{tool.nama}</span>
                  <span className="text-[10px] text-zinc-400 font-mono whitespace-nowrap">{tool.ket}</span>
                </div>
              ))}
            </div>
          </div> */}
        </section>

        {/* ========================================================
            PROYEK SECTION (RHYTHM 3: Flagship Spotlight + Grid)
           ======================================================== */}
        <section id="proyek" className="py-20 border-t border-zinc-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">Portofolio Terpilih</span>
              <h2 className="text-3xl font-bold text-white mt-2 tracking-tight">Karya Pengembangan Web</h2>
            </div>
            <p className="text-sm text-zinc-400 max-w-md">
              Aplikasi berbasis web yang dibangun untuk menyelesaikan kebutuhan pengguna nyata dan studi kasus terapan.
            </p>
          </div>

          {/* Flagship Project Spotlight (MG Care Ambulance) */}
          <div className="mb-12 rounded-2xl bg-zinc-900/90 border border-zinc-800 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl">
            <div className="lg:col-span-7 overflow-hidden bg-zinc-950 relative group">
              <img
                src={flagshipProject.gambar}
                alt={flagshipProject.nama}
                className="w-full h-full min-h-[300px] lg:min-h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900/90 border border-zinc-700/80 text-xs font-mono text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Proyek Unggulan (Live)
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {flagshipProject.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-zinc-800 border border-zinc-700/70 text-xs font-mono text-zinc-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{flagshipProject.nama}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {flagshipProject.desk}. Menghadirkan antarmuka darurat yang cepat dimuat, ramah seluler, serta memberikan akses instan untuk pemesanan armada darurat dan layanan medis.
                </p>

                <div className="space-y-2 mb-6 text-xs text-zinc-400 border-t border-zinc-800 pt-4">
                  <p className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-400"></i>
                    Optimalisasi performa & responsivitas seluler
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-400"></i>
                    Integrasi direct call & sistem pesan cepat WhatsApp
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                {flagshipProject.linkWebsite && (
                  <a
                    href={flagshipProject.linkWebsite}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Kunjungi Website</span>
                    <i className="ri-external-link-line text-sm"></i>
                  </a>
                )}
                {flagshipProject.linkGithub && (
                  <a
                    href={flagshipProject.linkGithub}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-semibold text-sm transition-colors flex items-center gap-2"
                  >
                    <i className="ri-github-fill text-base"></i>
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Supporting Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportingProjects.map((proyek) => (
              <div
                key={proyek.id}
                className="rounded-xl bg-zinc-900/60 border border-zinc-800/90 overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                <div>
                  <div className="aspect-[16/10] bg-zinc-950 overflow-hidden relative">
                    <img
                      src={proyek.gambar}
                      alt={proyek.nama}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {proyek.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-700/60 text-[11px] font-mono text-zinc-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">{proyek.nama}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">{proyek.desk}</p>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-auto flex items-center gap-2.5">
                  {proyek.linkWebsite && (
                    <a
                      href={proyek.linkWebsite}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Lihat Live</span>
                      <i className="ri-external-link-line"></i>
                    </a>
                  )}

                  {proyek.linkGithub && (
                    <a
                      href={proyek.linkGithub}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 text-xs font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <i className="ri-github-fill"></i>
                      <span>GitHub</span>
                    </a>
                  )}

                  {!proyek.linkWebsite && !proyek.linkGithub && (
                    <span className="text-xs text-zinc-400 font-mono py-1.5">Karya Desain Grafis</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            DESAIN GRAFIS & SOCIAL MEDIA GALLERY
            Honoring real poster & visual works with interactive preview modal
           ======================================================== */}
        <section id="desain" className="py-20 border-t border-zinc-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400">Eksplorasi Kreatif</span>
              <h2 className="text-3xl font-bold text-white mt-2 tracking-tight">Desain Grafis & Media Publikasi</h2>
            </div>
            <p className="text-sm text-zinc-400 max-w-md">
              Karya desain visual, poster acara, dan konten Instagram feed resmi untuk organisasi kepemudaan dan instansi kepolisian.
            </p>
          </div>

          {/* Social Proof & Channel Badges */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-zinc-200">Peran sebagai Graphic Designer & Content Creator:</p>
              <p className="text-xs text-zinc-400">
                Memproduksi materi komunikasi visual di Instagram Saka Bhayangkara Polres Cimahi dan Protokol Kwarcab KBB.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.instagram.com/sakabhayangkara.cimahi/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <i className="ri-instagram-line text-sm text-pink-400"></i>
                @sakabhayangkara.cimahi
              </a>

              <a
                href="https://www.instagram.com/protokolkwarcabkbb/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <i className="ri-instagram-line text-sm text-pink-400"></i>
                @protokolkwarcabkbb
              </a>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {listIgDesigns.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setSelectedDesign(item)}
                className="group text-left rounded-xl bg-zinc-900 border border-zinc-800/90 overflow-hidden hover:border-zinc-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <div className="aspect-[3/4] bg-zinc-950 overflow-hidden relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-md bg-zinc-900/90 text-white text-xs font-medium flex items-center gap-1.5 shadow">
                      <i className="ri-zoom-in-line text-sm"></i>
                      Perbesar
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">{item.kategori}</span>
                  <p className="text-xs font-semibold text-zinc-200 truncate mt-0.5">{item.title}</p>
                  <p className="text-[11px] text-zinc-400 truncate mt-0.5">{item.instansi}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Modal Preview for Design Details (R-26 & R-32 Keyboard accessible) */}
          {selectedDesign && (
            <div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedDesign(null)}
              role="dialog"
              aria-modal="true"
            >
              <div
                className="relative bg-zinc-900 border border-zinc-700/80 rounded-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedDesign(null)}
                  aria-label="Tutup pratinjau desain"
                  className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>

                <div className="aspect-[3/4] max-h-[60vh] mx-auto rounded-xl overflow-hidden bg-zinc-950 mb-4 flex items-center justify-center">
                  <img
                    src={selectedDesign.src}
                    alt={selectedDesign.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="border-t border-zinc-800 pt-4">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">{selectedDesign.kategori}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{selectedDesign.title}</h3>
                  <p className="text-sm text-zinc-400 mt-1">Dibuat untuk: <span className="text-zinc-200 font-medium">{selectedDesign.instansi}</span></p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ========================================================
            SERTIFIKAT & PENGHARGAAN SECTION
           ======================================================== */}
        <section id="sertifikat" className="py-20 border-t border-zinc-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">Validasi Kemampuan</span>
              <h2 className="text-3xl font-bold text-white mt-2 tracking-tight">Sertifikasi & Lisensi Resmi</h2>
            </div>
            <p className="text-sm text-zinc-400 max-w-md">
              Pelatihan terstruktur dan sertifikasi kompetensi dari institusi global maupun nasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listSertifikat.map((item) => (
              <div
                key={item.id}
                className="rounded-xl bg-zinc-900/60 border border-zinc-800/90 p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                <div>
                  <div className="aspect-[16/11] rounded-lg bg-zinc-950 overflow-hidden mb-4 border border-zinc-800/80">
                    <img
                      src={item.gambar}
                      alt={item.nama}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <span className="text-xs font-mono text-indigo-400 flex items-center gap-1.5 mb-1.5">
                    <i className="ri-award-line"></i>
                    {item.penerbit}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">{item.nama}</h3>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-800/80">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Verifikasi Sertifikat</span>
                    <i className="ri-external-link-line text-xs"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            KONTAK SECTION (Structured & Accessible Form)
           ======================================================== */}
        <section id="kontak" className="py-20 border-t border-zinc-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">Hubungi Saya</span>
              <h2 className="text-3xl font-bold text-white mt-2 tracking-tight">Mari Memulai Percakapan</h2>
              <p className="text-sm text-zinc-400 mt-4 text-justify leading-relaxed">
                Apakah Anda memiliki proyek pengembangan aplikasi, kebutuhan desain grafis, tawaran kerja sama, atau sekadar ingin berdiskusi seputar teknologi? Kirimkan pesan melalui formulir atau kontak langsung di bawah ini.
              </p>

              <div className="mt-8 space-y-4 text-sm">
                <a
                  href="mailto:fawwazsyams04@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  <i className="ri-mail-line text-lg text-indigo-400"></i>
                  <span>fawwazsyams04@gmail.com</span>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                  <i className="ri-map-pin-line text-lg text-indigo-400"></i>
                  <span>Bandung, Jawa Barat, Indonesia</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                {formState.status === "success" ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center text-2xl">
                      <i className="ri-check-line"></i>
                    </div>
                    <h3 className="text-xl font-bold text-white">Pesan Berhasil Terkirim</h3>
                    <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                      Terima kasih sudah menghubungi saya. Saya akan segera membaca pesan Anda dan membalasnya secepat mungkin.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormState({ nama: "", email: "", pesan: "", status: "idle" })}
                      className="px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5" autoComplete="off">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="nama" className="text-xs font-semibold text-zinc-300">
                          Nama Lengkap <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="nama"
                          type="text"
                          name="nama"
                          required
                          value={formState.nama}
                          onChange={(e) => setFormState({ ...formState, nama: e.target.value })}
                          placeholder="Fawwaz Syams"
                          className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-zinc-100 placeholder:text-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-zinc-300">
                          Alamat Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="nama@perusahaan.com"
                          className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-zinc-100 placeholder:text-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="pesan" className="text-xs font-semibold text-zinc-300">
                        Isi Pesan <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="pesan"
                        name="pesan"
                        rows={4}
                        required
                        value={formState.pesan}
                        onChange={(e) => setFormState({ ...formState, pesan: e.target.value })}
                        placeholder="Ceritakan gambaran proyek atau keperluan Anda..."
                        className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-zinc-100 placeholder:text-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                      />
                    </div>

                    {formState.status === "error" && (
                      <p className="text-xs text-rose-400 flex items-center gap-1.5">
                        <i className="ri-error-warning-line"></i>
                        Terjadi kesalahan saat mengirim pesan. Silakan coba kembali atau hubungi via email langsung.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={formState.status === "submitting"}
                      className="w-full sm:w-auto px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                    >
                      {formState.status === "submitting" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          <span>Mengirimkan...</span>
                        </>
                      ) : (
                        <>
                          <span>Kirim Pesan</span>
                          <i className="ri-send-plane-fill text-xs"></i>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
