import React from 'react'
import GeometricBanner from './components/GeometricBanner'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Partners from './components/Partners'
import About from './sections/About'
import Projects from './sections/Projects'
import Projects2 from './sections/Projects2'
import Help from './sections/Help'
import About2 from './sections/About2'
import Footer from './sections/Footer'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 200
    });
  }, []);

  return (
    <div className='container mx-auto max-w-[7xl]'>
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Projects />
      <Projects2 />
      <Help />
      <About2 />
      <Footer />
    </div>
  )
}

export default App
