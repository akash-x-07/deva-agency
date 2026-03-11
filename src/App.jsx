import { div } from "framer-motion/client";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SplitText from "./components/SplitText";
import ServicesSlider from "./components/ServicesSlider";
import StatsSection from "./components/StatsSection";
import AboutSection from "./components/AboutSection";
import WorkProcess from "./components/WorkProcess";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import LogoSlider from "./components/LogoSlider";
import Portfolio from "./components/Portfolio";



function App(){
  return(
        <div className="div">
          <Navbar/>
          <Hero/>
          <LogoSlider/>
          <SplitText/>
          <ServicesSlider/>
          <StatsSection/>
          <AboutSection/>
          <Portfolio/>
          <WorkProcess/>
          <Testimonials/>
          <ContactSection/>
          <Footer/>
        </div>
  );
}
export default App