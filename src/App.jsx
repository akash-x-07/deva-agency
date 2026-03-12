import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

function Home() {
  return (
    <>
      <Hero />
      <LogoSlider />
      <SplitText />
      <ServicesSlider />
      <StatsSection />
      <AboutSection />
      <Portfolio />
      <WorkProcess />
      <Testimonials />
      <ContactSection />
    </>
  );
}

function About() {
  return (
    <div>
      <AboutSection />
    </div>
  );
}

function Services() {
  return (
    <div>
      <SplitText />
    </div>
  );
}

function Contact() {
  return (
    <div>
      <ContactSection />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="div">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;