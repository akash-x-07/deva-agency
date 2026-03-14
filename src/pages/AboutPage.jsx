import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaChartLine, FaBullhorn, FaLightbulb } from "react-icons/fa";
import "./AboutPage.css";

const sectionVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

export default function AboutPage() {
  return (
    <>

      {/* ABOUT SECTION */}

      <motion.section
        className="about-snippet"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <div className="snippet-container">

          <span className="snippet-tag">
            ABOUT DEVA MEDIA
          </span>

          <h2 className="snippet-heading">
            We build brands that dominate
            the digital landscape.
          </h2>

          <p className="snippet-text">
            In today’s digital world, attention is the most valuable asset.
            Brands that win are the ones that combine creativity,
            strategy and smart distribution.
          </p>

          <p className="snippet-text">
            Deva Media Network helps businesses grow faster by
            building powerful digital ecosystems that drive
            visibility, authority and long-term growth.
          </p>

        </div>

      </motion.section>


      {/* FEATURE SECTION */}

      <section className="features-section">

        <div className="features-container">

          <div className="feature-card">
            <FaRocket className="feature-icon"/>
            <h3>Fast Brand Growth</h3>
            <p>We scale brands using modern digital strategies and powerful media distribution.</p>
          </div>

          <div className="feature-card">
            <FaChartLine className="feature-icon"/>
            <h3>Data Driven Strategy</h3>
            <p>Every campaign we build is optimized using analytics and performance insights.</p>
          </div>

          <div className="feature-card">
            <FaBullhorn className="feature-icon"/>
            <h3>Powerful Marketing</h3>
            <p>We create marketing systems that continuously generate traffic and leads.</p>
          </div>

          <div className="feature-card">
            <FaLightbulb className="feature-icon"/>
            <h3>Creative Innovation</h3>
            <p>Our creative team builds unique brand identities that stand out online.</p>
          </div>

        </div>

      </section>


      {/* VISION SECTION */}

      <motion.section
        className="vision-section"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <div className="vision-container">

          <span className="vision-tag">
            OUR VISION
          </span>

          <h2 className="vision-heading">
            Helping brands become impossible to ignore.
          </h2>

          <p className="vision-text">
            Our vision is to empower modern businesses with
            the strategies, tools and creative systems
            required to scale in the digital economy.
          </p>

          <p className="vision-text">
            Through powerful storytelling, media distribution
            and digital growth frameworks, we transform brands
            into influential voices in their industries.
          </p>

        </div>

      </motion.section>

    </>
  );
}