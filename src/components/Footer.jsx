export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-zinc-800/80 bg-[#090d14] text-zinc-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-zinc-800/60">
          <div>
            <a
              href="#beranda"
              className="group inline-flex items-center gap-2.5 text-lg font-bold text-zinc-100 hover:text-white transition-colors"
            >
              <span>
                Syams<span className="text-indigo-400 font-mono">Dev</span>
              </span>
            </a>
            <p className="mt-2 text-sm text-zinc-400 max-w-sm">
              Membangun aplikasi berkinerja tinggi dan karya visual komunikatif dari Bandung, Indonesia.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#tentang" className="hover:text-zinc-200 transition-colors">Tentang</a>
            <a href="#proyek" className="hover:text-zinc-200 transition-colors">Proyek</a>
            <a href="#desain" className="hover:text-zinc-200 transition-colors">Desain Grafis</a>
            <a href="#sertifikat" className="hover:text-zinc-200 transition-colors">Sertifikat</a>
            <a href="#kontak" className="hover:text-zinc-200 transition-colors">Kontak</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/FawwazSyams"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Fawwaz Muhammad Syams"
              className="w-10 h-10 rounded-lg bg-zinc-800/70 hover:bg-zinc-700/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
            >
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/fawwaz-muhammad-syams-0b2659354/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Fawwaz Muhammad Syams"
              className="w-10 h-10 rounded-lg bg-zinc-800/70 hover:bg-zinc-700/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/fawwazsyams_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Fawwaz Muhammad Syams"
              className="w-10 h-10 rounded-lg bg-zinc-800/70 hover:bg-zinc-700/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
            >
              <i className="ri-instagram-line text-xl"></i>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
          <p>© {currentYear} Syamsdev</p>
        </div>
      </div>
    </footer>
  );
}
