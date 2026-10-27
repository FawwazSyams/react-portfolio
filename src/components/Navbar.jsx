import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isDiscussPage = location.pathname === "/discuss";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key (R-32 Keyboard Accessibility)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { name: "Tentang", href: isDiscussPage ? "/#tentang" : "#tentang" },
    { name: "Tech Stack", href: isDiscussPage ? "/#stack" : "#stack" },
    { name: "Proyek", href: isDiscussPage ? "/#proyek" : "#proyek" },
    { name: "Desain Grafis", href: isDiscussPage ? "/#desain" : "#desain" },
    { name: "Sertifikat", href: isDiscussPage ? "/#sertifikat" : "#sertifikat" },
    { name: "Kontak", href: isDiscussPage ? "/#kontak" : "#kontak" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f17]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-md py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-zinc-100 hover:text-white transition-colors"
        >
          <span className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 font-mono text-sm font-semibold group-hover:bg-indigo-600 group-hover:text-white transition-colors">
            FS
          </span>
          <span className="font-semibold">
            fawwaz<span className="text-indigo-400 font-mono">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-zinc-100 transition-colors py-1 relative"
            >
              {link.name}
            </a>
          ))}

          {isDiscussPage ? (
            <Link
              to="/"
              className="text-xs font-semibold px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 rounded-lg transition-colors shadow-sm flex items-center gap-1.5"
            >
              <i className="ri-arrow-left-line"></i>
              <span>Kembali ke Beranda</span>
            </Link>
          ) : (
            <Link
              to="/discuss"
              className="text-xs font-semibold px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors shadow-sm flex items-center gap-1.5"
            >
              <i className="ri-chat-3-line"></i>
              <span>Mari Bicara</span>
            </Link>
          )}
        </nav>

        {/* Mobile Hamburger Toggle (R-03 & R-26: fully functional) */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isOpen}
          className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <i className={isOpen ? "ri-close-line text-xl" : "ri-menu-4-line text-xl"}></i>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d121c] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-2 animate__animated animate__fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-zinc-200 hover:bg-zinc-800/80 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            {isDiscussPage ? (
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block text-center w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-semibold rounded-lg text-sm transition-colors"
              >
                Kembali ke Beranda
              </Link>
            ) : (
              <Link
                to="/discuss"
                onClick={() => setIsOpen(false)}
                className="block text-center w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg text-sm transition-colors"
              >
                Mari Bicara
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
