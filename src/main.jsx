import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import 'remixicon/fonts/remixicon.css'
import Footer from './components/Footer.jsx'
import Preloader from './components/Preloader.jsx'

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container mx-auto">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>,
);
