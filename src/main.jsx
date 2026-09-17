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

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Discuss from './pages/Discuss.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<><App /><Footer /></>} />
          <Route path="/discuss" element={<Discuss />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>,
);
