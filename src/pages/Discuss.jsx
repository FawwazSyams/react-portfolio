import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Discuss() {
  return (
    <div className="relative min-h-screen bg-[#0b0f17] text-zinc-100 overflow-x-hidden">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 pt-32 pb-20 max-w-4xl">
        {/* Back Link Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-indigo-400 transition-colors px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800/80"
          >
            <i className="ri-arrow-left-line"></i>
            <span>Kembali ke Halaman Portfolio</span>
          </Link>
        </div>

        {/* Header Artikel */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            Memahami React 19: Paradigma Baru Penanganan Asinkron dan Formulir
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-xs sm:text-sm border-b border-zinc-800 pb-6">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-xs font-semibold flex items-center justify-center">
                FS
              </span>
              <span className="font-medium text-zinc-200">Fawwaz Muhammad Syams</span>
            </div>
            <span>•</span>
            <span className="flex items-center gap-1.5"><i className="ri-calendar-line"></i> 17 September 2024</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><i className="ri-time-line"></i> 5 Menit Baca</span>
          </div>
        </header>

        {/* Gambar Ilustrasi */}
        <div className="w-full h-64 sm:h-96 mb-12 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-lg relative">
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop"
            alt="Ilustrasi Ekosistem React"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 right-3 text-[11px] text-zinc-400 bg-zinc-900/90 border border-zinc-800 px-2.5 py-1 rounded">
            Dokumentasi Visual: Ekosistem React
          </div>
        </div>

        {/* Konten Artikel */}
        <article className="space-y-6 text-zinc-300 text-base leading-relaxed">
          <p className="text-lg leading-relaxed text-zinc-200 p-5 rounded-xl bg-zinc-900/70 border-l-4 border-indigo-500 border border-zinc-800/80">
            Ekosistem React terus bergerak ke arah penyederhanaan manajemen asynchronous state. Dengan dirilisnya React 19, berbagai fitur yang sebelumnya membutuhkan library tambahan kini terintegrasi secara native di level runtime.
          </p>

          <h2 className="text-2xl font-bold text-white pt-6 pb-2 border-b border-zinc-800/80">
            1. Mengapa React 19 Mengubah Paradigma?
          </h2>
          <p>
            Selama bertahun-tahun, developer React mengandalkan kombinasi <code>useEffect</code> dan library eksternal untuk menangani Promise, sinkronisasi form, dan status loading. Pendekatan ini sering memicu boilerplate yang panjang dan potensi race condition jika tidak dikelola dengan teliti.
          </p>

          <h3 className="text-xl font-bold text-white pt-4">Hook use: Pengambilan Data Lebih Dekat ke Render</h3>
          <p>
            React 19 memperkenalkan API <code>use</code> yang dapat membaca Promise secara langsung di dalam komponen saat proses rendering, bersinergi dengan Suspense:
          </p>

          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto shadow-inner">
            <pre>
              {`import { use } from 'react';

function Komentar({ commentsPromise }) {
  // React akan suspend sampai promise selesai diproses
  const comments = use(commentsPromise);
  return (
    <ul>
      {comments.map((c) => (
        <li key={c.id}>{c.text}</li>
      ))}
    </ul>
  );
}`}
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white pt-6 pb-2 border-b border-zinc-800/80">
            2. Actions & Integrasi Form Bawaan
          </h2>
          <p>
            Dengan fitur Actions, penanganan form tidak lagi menuntut <code>e.preventDefault()</code> secara manual di setiap handler. Kita dapat langsung memberikan async function ke atribut <code>action</code> form dan memanfaatkan hooks seperti <code>useActionState</code> untuk melacak status pengiriman dan pesan balikan.
          </p>

          <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-sm space-y-2">
            <h4 className="font-semibold text-zinc-200 flex items-center gap-2">
              <i className="ri-information-line text-indigo-400"></i>
              Catatan Arsitektur
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Meskipun dirancang untuk bekerja maksimal bersama React Server Components (RSC), fitur-fitur ini tetap membawa efisiensi nyata pada aplikasi berbasis Client-side (SPA).
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white pt-6 pb-2 border-b border-zinc-800/80">
            Kesimpulan
          </h2>
          <p>
            React 19 mematangkan alur kerja modern: mengurangi kode perantara yang berulang dan memberi ruang lebih besar bagi pengembang untuk berfokus pada kualitas interaksi antarmuka serta arsitektur data.
          </p>
        </article>

        {/* Diskusi & Hubungi */}
        <div className="mt-16 pt-10 border-t border-zinc-800">
          <div className="p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800 text-center max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-indigo-600/20 text-indigo-400 mx-auto flex items-center justify-center text-2xl">
              <i className="ri-chat-smile-2-line"></i>
            </div>
            <h3 className="text-xl font-bold text-white">Ingin Berdiskusi Lebih Lanjut?</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Punya ide, pertanyaan mengenai pengembangan web, atau tawaran kolaborasi proyek? Mari bertukar pikiran secara langsung.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/#kontak"
                className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors"
              >
                Kirim Pesan ke Fawwaz
              </a>
              <Link
                to="/"
                className="px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-semibold text-xs transition-colors"
              >
                Lihat Portfolio
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
