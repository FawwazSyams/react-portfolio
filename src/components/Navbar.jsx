export default function Navbar() {
    return (
        <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
            <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-700 rounded-full px-6 py-3 flex items-center justify-between shadow-lg">

                <a href="#beranda" className="text-xl font-extrabold tracking-wide">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">Syams</span>
                    <span className="text-white">Dev</span>
                </a>

                <div className="hidden sm:flex items-center gap-8">
                    <a href="#beranda" className="text-sm font-medium text-zinc-300 hover:text-violet-400 transition-colors">Beranda</a>
                    <a href="#tentang" className="text-sm font-medium text-zinc-300 hover:text-violet-400 transition-colors">Tentang</a>
                    <a href="#proyek" className="text-sm font-medium text-zinc-300 hover:text-violet-400 transition-colors">Proyek</a>
                    <a href="#sertifikat" className="text-sm font-medium text-zinc-300 hover:text-violet-400 transition-colors">Sertifikat</a>
                    <a href="#kontak" className="text-sm font-medium text-zinc-300 hover:text-violet-400 transition-colors">Kontak</a>
                </div>

            </div>
        </nav>
    );
}