import React from 'react'

const Footer = () => {
    return (
        <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
            <a href="#beranda" className="text-xl font-extrabold tracking-wide">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">Syams</span>
                <span className="text-white">Dev</span>
            </a>
            <div className="flex gap-7">
                <a href="#">Beranda</a>
                <a href="#tentang">Tentang</a>
                <a href="#proyek">Proyek</a>
            </div>
            <div className="flex items-center gap-3">
                <a href="https://github.com/FawwazSyams" target="_blank" rel="noopener noreferrer">
                    <i className="ri-github-fill ri-2x"></i>
                </a>
                <a href="https://www.instagram.com/fawwazsyams_/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-instagram-fill ri-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/fawwaz-muhammad-syams-0b2659354/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-linkedin-fill ri-2x"></i>
                </a>
            </div>
        </div>

    )
}

export default Footer