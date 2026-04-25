import DataImage from "./data";
import { listTools, listProyek, listSertifikat, listIgDesigns } from "./data";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

const openInstagram = () => {
  const username = "sakabhayangkara.cimahi";
  const appLink = `instagram://user?username=${username}`;
  const webLink = `https://www.instagram.com/${username}/`;

  window.location.href = appLink;

  setTimeout(() => {
    window.location.href = webLink;
  }, 1500);
};

function App() {
  return (
    <div className="relative min-h-screen bg-transparent overflow-x-hidden">
      <div className="fixed inset-0 z-[-1]">
        <ParticleBackground />
      </div>
      <Navbar />
      <div className="relative z-10 container mx-auto px-4">

        {/* === HERO SECTION === */}
        <div id="beranda" className="hero grid md:grid-cols-2 items-center pt-36 md:pt-24 pb-10 xl:gap-0 gap-6 grid-cols-1 min-h-screen">
          <div className="animate__animated animate__fadeInUp">
            <div className="flex items-center gap-3 mb-6 bg-zinc-800/80 backdrop-blur-sm w-fit p-4 rounded-2xl" loading="lazy">
              <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
              <q>Setiap baris kode adalah langkah menuju mimpi.</q>
            </div>
            <h1 className="text-5xl/tight font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
              Hi, Saya Fawwaz Muhammad Syams
            </h1>
            <div className="text-2xl font-semibold mb-6 text-violet-400 h-10">
              <TypeAnimation
                sequence={[
                  'Fullstack Web Developer',
                  1500,
                  'React & Laravel Enthusiast',
                  1500,
                  'Data Science & UI/UX',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-base/loose mb-6 opacity-50">
              Saya mempunyai ketertarikan dalam bidang programming dan design, terutama pada
              pembuatan website, desain poster, pamflet, serta Banner. Saya juga mahasiswa aktif di
              Politeknik TEDC Bandung jurusan Teknik Informatika.
            </p>
            <div className="flex items-center sm:gap-4 gap-2">
              <a href="#proyek" className="bg-violet-700 text-white py-3 px-6 rounded-full hover:bg-violet-600 transition-all hover:shadow-[0_0_20px_rgba(109,40,217,0.5)] flex items-center gap-2 font-semibold">
                Lihat Proyek <i className="ri-arrow-down-fill ri-lg"></i>
              </a>

              <a
                href="/CV_FawwazMuhammadSyams.pdf"
                download="CV_Fawwaz_Muhammad_Syams.pdf"
                className="border-2 border-zinc-600 text-zinc-300 py-3 px-6 rounded-full hover:border-violet-500 hover:text-violet-400 transition-all flex items-center gap-2 font-semibold bg-zinc-900/50"
              >
                Download CV <i className="ri-download-line ri-lg"></i>
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-12 md:mt-0 relative z-10" data-aos="fade-up" data-aos-delay="200">
            <div className="relative w-[280px] sm:w-[350px] md:w-[400px]">

              <div className="absolute inset-0 bg-gradient-to-l from-violet-600 to-cyan-400 blur-3xl opacity-5 rounded-full animate-pulse"></div>

              <img
                src={DataImage.HeroImage}
                alt="Profile Fawwaz"
                className="relative z-10 w-full object-cover rounded-3xl border border-zinc-700/50 shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* === TENTANG SECTION === */}
        <div className="tentang mt-32 py-10" id="tentang">
          <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800/80 backdrop-blur-sm rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" />
            <p className="text-base/loose mb-10">
              Hi, Perkenalkan saya Fawwaz Muhammad Syams, seorang mahasiswa aktif yang meminati Web Developer, Design
              UI/UX dan Graphic Desgin. Saya percaya bahwa desain dan fungsionalitas harus berjalan beriringan, sehingga setiap
              proyek yang saya kembangkan tidak hanya terlihat menarik tetapi juga memberikan pengalaman pengguna yang optimal.
            </p>

            <div className="flex items-center justify-between gap-4">
              <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" />
              <div className="flex items-center gap-6">
                <div>
                  <h1 className="text-4xl mb-1">15<span className="text-violet-500">+</span></h1>
                  <p>Proyek Selesai</p>
                </div>
                <div>
                  <h1 className="text-4xl mb-1">2<span className="text-violet-500">+</span></h1>
                  <p>Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tools mt-32">
            <h1 className="text-4xl/snug font-bold mb-4 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Tech Stack</span> & Tools
            </h1>
            <p className="w-full sm:w-2/3 mx-auto text-base/loose opacity-50 text-center mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
              Teknologi yang saya gunakan untuk meracik antarmuka web, membangun API backend, hingga mengolah data.
            </p>

            <div className="relative flex overflow-hidden w-full bg-zinc-900/30 py-8 rounded-2xl border border-zinc-800/50"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
              }}
            >
              <div className="animate-scroll whitespace-nowrap flex items-center gap-8 px-4">
                {[...listTools, ...listTools].map((tool, index) => (
                  <div
                    key={`${tool.id}-${index}`}
                    className="flex items-center gap-4 p-4 min-w-[200px] border border-zinc-700/50 rounded-xl bg-zinc-800/80 backdrop-blur-sm hover:border-violet-500/50 transition-colors shadow-lg"
                  >
                    <div className="bg-zinc-900 p-2 rounded-lg shadow-inner">
                      <img src={tool.gambar} alt={tool.nama} className="w-10 h-10 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-200">{tool.nama}</h4>
                      <p className="text-xs text-zinc-400">{tool.ket}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === PROYEK SECTION === */}
        <div className="proyek mt-16 py-10" id="proyek">
          <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
          <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-delay="300" data-aos-once="true">Beberapa karya dan eksplorasi teknologi yang telah saya bangun.</p>
        </div>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {listProyek.map(proyek => (
            <Tilt
              key={proyek.id}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.02}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glarePosition="all"
              className="h-full"
            >
              <div
                className="group relative flex flex-col justify-between p-5 bg-zinc-800/60 backdrop-blur-sm border border-zinc-700 rounded-2xl overflow-hidden h-full"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={proyek.dad}
                data-aos-once="true"
              >
                <div className="overflow-hidden rounded-xl mb-5">
                  <img
                    src={proyek.gambar}
                    alt="Proyek Image"
                    loading="lazy"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex-1">
                  <h1 className="text-xl font-bold mb-3 group-hover:text-violet-400 transition-colors">{proyek.nama}</h1>
                  <p className="text-sm/relaxed text-zinc-400 mb-6">{proyek.desk}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-700/50">
                  {proyek.tools.map((tool, index) => (
                    <span
                      className="text-xs py-1 px-3 border border-zinc-600 bg-zinc-900/50 text-zinc-300 rounded-full font-medium"
                      key={index}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-5">
                  {proyek.linkGithub && (
                    <a
                      href={proyek.linkGithub}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex justify-center items-center gap-2 py-2.5 bg-zinc-700/50 hover:bg-zinc-600 border border-zinc-600 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02]"
                    >
                      <i className="ri-github-fill text-lg"></i> GitHub
                    </a>
                  )}

                  {proyek.linkWebsite && (
                    <a
                      href={proyek.linkWebsite}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex justify-center items-center gap-2 py-2.5 bg-violet-600/80 hover:bg-violet-500 border border-violet-500 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02]"
                    >
                      <i className="ri-external-link-line text-lg"></i> Live
                    </a>
                  )}
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        {/* === INSTAGRAM DESIGN SHOWCASE BANNER === */}
        <div className="mt-20 relative group" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="relative bg-zinc-800/80 backdrop-blur-xl border border-zinc-700/50 rounded-3xl p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Background Pattern */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* Floating Design Images */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.15] sm:opacity-20 group-hover:opacity-40 transition-opacity duration-700 z-0 overflow-hidden">
              {listIgDesigns.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Desain Background"
                  className={`absolute object-cover rounded-xl shadow-2xl transition-all duration-700 filter grayscale-[40%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100 group-hover:scale-110
                    /* Ukuran seragam untuk semua gambar (Mobile & Desktop) */
                    w-24 h-36 sm:w-32 sm:h-44 lg:w-40 lg:h-56
                    /* Posisi teratur untuk 7 gambar */
                    ${index === 0 ? '-top-10 -left-6 sm:-left-10 rotate-[-15deg] group-hover:rotate-[-8deg] group-hover:translate-x-2' : ''}
                    ${index === 1 ? '-top-10 -right-6 sm:-right-10 rotate-[15deg] group-hover:rotate-[8deg] group-hover:-translate-x-2' : ''}
                    ${index === 2 ? '-bottom-10 -left-6 sm:-left-10 rotate-[-10deg] group-hover:rotate-[-5deg] group-hover:translate-x-2' : ''}
                    ${index === 3 ? '-bottom-10 -right-6 sm:-right-10 rotate-[10deg] group-hover:rotate-[5deg] group-hover:-translate-x-2' : ''}
                    ${index === 4 ? 'hidden md:block top-1/2 -translate-y-1/2 -left-12 lg:-left-16 rotate-[-20deg] group-hover:rotate-[-12deg]' : ''}
                    ${index === 5 ? 'hidden md:block top-1/2 -translate-y-1/2 -right-12 lg:-right-16 rotate-[20deg] group-hover:rotate-[12deg]' : ''}
                    ${index === 6 ? 'hidden sm:block -top-16 left-1/2 -translate-x-1/2 rotate-[-5deg] group-hover:rotate-0 group-hover:translate-y-2' : ''}
                  `}
                />
              ))}
            </div>

            <div className="relative z-10 flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-sm font-semibold mb-6">
                <i className="ri-instagram-line text-lg"></i> Desain Grafis
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                Eksplorasi Visual & Kreativitas
              </h2>
              <p className="text-zinc-400 text-base/loose max-w-2xl mx-auto md:mx-0">
                Temukan eksplorasi visual saya seperti desain poster dan konten media sosial di Instagram Saka Bhayangkara Polres Cimahi di mana saya berperan sebagai graphic designer dan content creator.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <button
                onClick={openInstagram}
                className="group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-violet-600 to-pink-500 rounded-2xl hover:scale-105 hover:shadow-[0_10px_40px_rgba(236,72,153,0.4)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                <i className="ri-instagram-fill text-2xl relative z-10"></i>
                <span className="relative z-10 text-lg">Lihat Instagram</span>
                <i className="ri-arrow-right-up-line text-xl relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"></i>
              </button>
            </div>
          </div>
        </div>

        {/* === SERTIFIKAT SECTION === */}
        <div className="sertifikat mt-32 py-10" id="sertifikat">
          <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Sertifikat & Penghargaan</h1>
          <p className="text-base/loose text-center opacity-50 mb-14" data-aos="fade-up" data-aos-delay="300" data-aos-once="true">Validasi keahlian dan pencapaian akademik maupun profesional.</p>

          <div className="sertifikat-box grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {listSertifikat.map(sertifikat => (
              <div
                key={sertifikat.id}
                className="group relative flex flex-col p-5 bg-zinc-800/60 backdrop-blur-sm border border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)] hover:border-violet-500/50"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={sertifikat.dad}
                data-aos-once="true"
              >
                {/* Gambar Sertifikat */}
                <div className="overflow-hidden rounded-xl mb-5 relative bg-zinc-900">
                  <div className="absolute inset-0 bg-violet-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                  <img
                    src={sertifikat.gambar}
                    alt="Sertifikat"
                    loading="lazy"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Detail Sertifikat */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h1 className="text-lg font-bold mb-2 group-hover:text-violet-400 transition-colors leading-snug">{sertifikat.nama}</h1>
                    <p className="text-sm text-zinc-400 mb-6 font-medium flex items-center gap-2">
                      <i className="ri-award-fill text-violet-500"></i> {sertifikat.penerbit}
                    </p>
                  </div>

                  {sertifikat.link && (
                    <a
                      href={sertifikat.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto flex justify-center items-center gap-2 py-2.5 bg-zinc-700/50 hover:bg-violet-600 border border-zinc-600 hover:border-violet-500 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02]"
                    >
                      <i className="ri-verified-badge-line text-lg"></i> Lihat Sertifikat
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* === SERTIFIKAT SECTION === */}

        {/* === KONTAK SECTION === */}
        <div className="kontak mt-32 sm:p-10 p-4 mb-20" id="kontak">
          <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Mari Berkolaborasi</h1>
          <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
            Punya ide proyek, tawaran pekerjaan, atau sekadar ingin menyapa? Jangan ragu untuk mengirim pesan!
          </p>

          <form
            action="https://formsubmit.co/fawwazsyams04@email.com"
            method="POST"
            className="bg-zinc-800/50 backdrop-blur-md border border-zinc-700/50 p-8 sm:p-12 max-w-2xl rounded-2xl mx-auto shadow-xl"
            autoComplete="off"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <div className="flex flex-col gap-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-zinc-300">Nama Lengkap</label>
                  <input
                    type="text"
                    name="nama"
                    placeholder="Masukkan nama..."
                    className="w-full bg-zinc-900/50 border border-zinc-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-zinc-600"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-zinc-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="nama@email.com"
                    className="w-full bg-zinc-900/50 border border-zinc-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-zinc-600"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-zinc-300">Pesan</label>
                <textarea
                  name="pesan"
                  rows="5"
                  placeholder="Ceritakan tentang proyek atau tujuanmu..."
                  className="w-full bg-zinc-900/50 border border-zinc-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-zinc-600 resize-none"
                  required
                />
              </div>

              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl w-full sm:w-auto shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-1 transition-all duration-300"
                >
                  Kirim Pesan
                </button>
              </div>

            </div>
          </form>
        </div>
        {/* === KONTAK SECTION === */}
      </div>
    </div>
  );
}

export default App;