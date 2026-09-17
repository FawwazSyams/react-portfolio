import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

export default function Discuss() {
  return (
    <div className="relative min-h-screen bg-transparent overflow-x-hidden text-white font-sans">
      <div className="fixed inset-0 z-[-1]">
        <ParticleBackground />
      </div>

      <main className="relative z-10 container mx-auto px-4 pt-32 pb-20 max-w-4xl">
        {/* Header Artikel */}
        <header className="mb-12 animate__animated animate__fadeInDown">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-sm font-semibold mb-6">
            <i className="ri-quill-pen-line"></i> Artikel Web Development
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300 leading-tight">
            Memahami React 19: Era Baru Pengembangan Web dengan Hooks Server
          </h1>

          <div className="flex items-center gap-4 text-zinc-400 text-sm">
            <div className="flex items-center gap-2">
              <img src="https://ui-avatars.com/api/?name=Fawwaz&background=random" alt="Author" className="w-8 h-8 rounded-full border border-zinc-700 bg-zinc-800 object-cover" />
              <span className="font-medium text-zinc-300">Fawwaz Muhammad Syams</span>
            </div>
            <span>•</span>
            <span><i className="ri-calendar-line"></i> 17 September 2026</span>
            <span>•</span>
            <span><i className="ri-time-line"></i> 5 Min Read</span>
          </div>
        </header>

        {/* Gambar Ilustrasi */}
        <div className="w-full h-[400px] mb-12 rounded-3xl overflow-hidden border border-zinc-700/50 shadow-2xl relative animate__animated animate__fadeIn group">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 opacity-60"></div>
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop"
            alt="React JS 19 Illustration"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-4 right-4 z-20 text-xs text-zinc-400 bg-zinc-900/80 px-2 py-1 rounded">
            Ilustrasi: Ekosistem React (Unsplash)
          </div>
        </div>

        {/* Konten Artikel */}
        <article className="prose prose-invert prose-violet max-w-none text-zinc-300 animate__animated animate__fadeInUp animate__delay-1s">
          <p className="text-xl leading-relaxed text-zinc-200 mb-8 font-medium border-l-4 border-violet-500 pl-6 bg-violet-500/5 p-4 rounded-r-xl">
            Tahun 2024 lalu membawa lompatan besar bagi ekosistem React. Dengan dirilisnya React 19, tim inti React secara resmi mengintegrasikan berbagai fitur yang sebelumnya hanya berstatus eksperimental, terutama seputar pengambilan data dan manajemen form.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4 flex items-center gap-2">
            <i className="ri-rocket-line text-cyan-400"></i> Mengapa React 19 Penting?
          </h2>
          <p className="leading-relaxed mb-6">
            Selama bertahun-tahun, developer React mengandalkan library pihak ketiga seperti <code>react-query</code>, <code>swr</code>, atau <code>formik</code> untuk menangani state asinkron dan form. React 19 merubah paradigma tersebut dengan memperkenalkan hook baru yang secara bawaan sangat cerdas dalam menangani Promise dan proses asinkron.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Hook <code>use</code>: Ucapkan Selamat Tinggal pada useEffect untuk Fetching</h3>
          <p className="leading-relaxed mb-4">
            Sebelumnya, jika kita tidak menggunakan framework seperti Next.js, mengambil data di komponen React adalah hal yang merepotkan dan rentan bug (seperti race condition). Di React 19, kita diberikan <code>use</code> API yang dapat mengkonsumsi Promise secara langsung di dalam render komponen.
          </p>

          <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 mb-8 shadow-inner overflow-x-auto font-mono text-sm">
            <pre className="text-zinc-300">
              <span className="text-pink-400">import</span> {'{ use }'} <span className="text-pink-400">from</span> <span className="text-green-300">'react'</span>;<br /><br />
              <span className="text-violet-400">function</span> <span className="text-blue-300">Comments</span>({'{ commentsPromise }'}) {'{'}<br />
              {'  '}<span className="text-zinc-500">// React akan melakukan suspend hingga promise ini selesai</span><br />
              {'  '}<span className="text-violet-400">const</span> comments = <span className="text-blue-300">use</span>(commentsPromise);<br />
              {'  '}<span className="text-pink-400">return</span> comments.<span className="text-blue-300">map</span>(comment {'=>'} {'<p key={comment.id}>{comment.text}</p>'});<br />
              {'}'}
            </pre>
          </div>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">2. React Actions dan formAction</h3>
          <p className="leading-relaxed mb-6">
            Di masa lalu, submit form memerlukan pembuatan event handler <code>onSubmit</code>, pemanggilan <code>e.preventDefault()</code>, manajemen state loading, dan manajemen state error. Di React 19, form dapat langsung memanggil fungsi asinkron via prop <code>action</code>.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4 flex items-center gap-2">
            <i className="ri-tools-line text-cyan-400"></i> Pengalaman Developer yang Lebih Baik
          </h2>
          <p className="leading-relaxed mb-6">
            Selain fitur besar seperti Actions dan Server Components, React 19 juga mempermudah banyak hal kecil:
          </p>
          <ul className="list-disc list-inside space-y-3 mb-8 text-zinc-300 ml-4">
            <li><strong>Ref sebagai prop:</strong> Tidak perlu lagi menggunakan <code>forwardRef</code> yang membingungkan. Kita bisa langsung melempar prop <code>ref</code> layaknya prop biasa.</li>
            <li><strong>Context sebagai provider:</strong> Alih-alih menulis <code>{'<ThemeContext.Provider>'}</code>, sekarang kita cukup menulis <code>{'<ThemeContext>'}</code>.</li>
            <li><strong>Document Metadata:</strong> Dukungan bawaan untuk merender <code>{'<title>'}</code>, <code>{'<meta>'}</code>, dan <code>{'<link>'}</code> di dalam komponen mana pun. React akan secara otomatis mengangkat (hoist) tag ini ke <code>{'<head>'}</code> dokumen.</li>
          </ul>

          <div className="bg-gradient-to-r from-violet-900/40 to-cyan-900/40 border border-violet-500/30 p-6 rounded-2xl mb-8">
            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <i className="ri-lightbulb-flash-line text-yellow-400"></i> Insight Tambahan
            </h4>
            <p className="text-sm leading-relaxed">
              Meskipun React 19 menawarkan banyak fitur luar biasa untuk Single Page Application (SPA), fitur ini didesain agar sangat bersinergi dengan arsitektur React Server Components (RSC) yang populer di framework seperti Next.js dan Remix.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Kesimpulan</h2>
          <p className="leading-relaxed mb-10">
            React 19 bukan sekadar versi baru; ini adalah langkah evolusi yang matang. Fitur-fitur ini mengurangi banyak boilerplate yang sebelumnya wajib kita tulis secara manual, memungkinkan kita untuk lebih fokus pada logika bisnis dan UI yang memukau.
          </p>
        </article>

        {/* Diskusi / Komentar Mockup */}
        <div className="mt-16 pt-10 border-t border-zinc-800">
          <h3 className="text-2xl font-bold mb-6 text-white">Diskusi Terbuka (0)</h3>
          <div className="bg-zinc-800/40 border border-zinc-700/50 p-6 rounded-2xl text-center">
            <i className="ri-chat-3-line text-4xl text-zinc-500 mb-4 block"></i>
            <h4 className="text-lg font-semibold text-zinc-300 mb-2">Jadilah yang pertama berdiskusi!</h4>
            <p className="text-sm text-zinc-400 mb-6">Bagikan pandanganmu mengenai fitur-fitur baru di React 19.</p>
            <button className="bg-violet-600 hover:bg-violet-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
              Mulai Diskusi
            </button>
          </div>
        </div>
      </main>

    </div>
  );
}
