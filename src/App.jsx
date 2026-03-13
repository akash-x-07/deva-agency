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

import ServicesPages from "./pages/ServicesPages";
import AboutPage from "./pages/AboutPage";


function Home() {
  return (
    <>
      <Hero />
      <LogoSlider />
      <SplitText />
      <ServicesSlider />
      <StatsSection />
      <Portfolio />
      <WorkProcess />
      <Testimonials />
      <ContactSection />
    </>
  );
}


function Contact() {
  return <ContactSection />;
}


function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;