import HeroImage from "/assets/hero-image.jpeg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/php.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/ps.png";
import Tools11 from "/assets/tools/canva.png";
import Tools12 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "PHP",
    ket: "Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Graphic Design",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Photoshop",
    ket: "Graphic Design",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "canva",
    ket: "Graphic Design",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Figma",
    ket: "Design App",
    dad: "1200",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";
import Proyek6 from "/assets/proyek/proyek6.jpeg";
import Proyek7 from "/assets/proyek/proyek7.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Sistem Informasi Klinik",
    desk: "Sebuah Sistem informasi klinik sederhana yang dibuat menggunakan PHP native dan MySQL",
    tools: ["HTML", "CSS", "PHP", "MYSQL", "Javascript"],
    linkGithub: "",
    linkWebsite: "",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek7,
    nama: "Logo Memontra Photobooth",
    desk: "Official Logo Untuk Memontra Photobooth",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    linkGithub: "",
    linkWebsite: "",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Logo Kontingen Ranting Cililin",
    desk: "Official logo untuk kontingen ranting Cililin pada Raimuna Daerah Jawa Barat 2024",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    linkGithub: "",
    linkWebsite: "",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Prediksi Harga Pemain Sepak Bola",
    desk: "Sebuah website yang dibuat untuk memprediksi harga pemain sepak bola berdasarkan dataset yang telah dikumpulkan",
    tools: ["React JS", "Laravel", "Python"],
    linkGithub: "https://github.com/FawwazSyams/Football-Players-Market-Value-Predictor.git",
    linkWebsite: "https://fawdawproject.vercel.app",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Deteksi Jenis Ras Kucing",
    desk: "Website yang dibuat untuk mengidentifikasi jenis ras kucing berdasarkan gambar yang diupload",
    tools: ["React JS", "Python"],
    linkGithub: "https://github.com/FawwazSyams/deteksi-jenis-kucing.git",
    linkWebsite: "https://fawcat.vercel.app",
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Sistem API Event Kampus",
    desk: "Sistem API event kampus yang dibuat untuk memudahkan pengguna dalam mengelola event kampus menggunakan Laravel",
    tools: ["Laravel", "PHP", "MYSQL"],
    linkGithub: "https://github.com/FawwazSyams/api-event-kampus.git",
    linkWebsite: "",
    dad: "700",
  },

];

import sertifikat1 from "/assets/sertifikat/sertifikat1.png";
import sertifikat2 from "/assets/sertifikat/sertifikat2.png";
import sertifikat3 from "/assets/sertifikat/sertifikat3.png";
import sertifikat4 from "/assets/sertifikat/sertifikat4.png";
import sertifikat5 from "/assets/sertifikat/sertifikat5.png";

export const listSertifikat = [
  {
    id: 1,
    nama: "Microsoft Office Specialist: Excel 2019 Assosicate",
    penerbit: "Microsoft",
    gambar: sertifikat1,
    link: "https://drive.google.com/file/d/1HCYLsXGOqw6MZTV8kZ_LTMfKc0zJ1sY0/view?usp=drive_link",
    dad: "200",
  },
  {
    id: 2,
    nama: "Pemrograman Web Dasar",
    penerbit: "Dicoding",
    gambar: sertifikat4,
    link: "https://drive.google.com/file/d/138zKWplY2lO55xkUDjsnvIPd_YigfurR/view?usp=sharing",
    dad: "300",
  },
  {
    id: 3,
    nama: "Data Science Introduction",
    penerbit: "MySkill x IdScore",
    gambar: sertifikat5,
    link: "https://drive.google.com/file/d/19VnxGjDH6sT8rsBfx4hFZBeUm38i5L7C/view?usp=drive_link",
    dad: "400",
  },
  {
    id: 4,
    nama: "Partner: NDG Linux Essentials",
    penerbit: "Cisco",
    gambar: sertifikat2,
    link: "https://drive.google.com/file/d/1ZkhO-Q6GU9-QQMi91SIV9MtOQHiAizBw/view?usp=drive_link",
    dad: "500",
  },
  {
    id: 5,
    nama: "Partner: NDG Linux Unchated",
    penerbit: "Cisco",
    gambar: sertifikat3,
    link: "https://drive.google.com/file/d/1noe4Dipk_cHpH7XgyEQXuDgxvYR_RHFh/view?usp=sharing",
    dad: "600",
  },
];

export const listIgDesigns = [
  "/assets/design-ig/design1.png",
  "/assets/design-ig/design2.png",
  "/assets/design-ig/design3.png",
  "/assets/design-ig/design4.png",
  "/assets/design-ig/design5.png",
  "/assets/design-ig/design6.png",
  "/assets/design-ig/design7.png",
];
