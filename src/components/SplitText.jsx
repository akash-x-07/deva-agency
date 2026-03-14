import React from "react";
import { motion } from "framer-motion";
import "./splittext.css";
import devaaa from "../assets/devaaa.jpg";

import {
  FiTrendingUp,
  FiShare2,
  FiUsers,
  FiGlobe
} from "react-icons/fi";

const text = "Scaling Brands Through Strategic Visibility";

const sectionVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const SplitText = () => {

  const scrollToSection = (className) => {
    const section = document.querySelector(`.${className}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>

      {/* HERO */}

      <section className="split-hero">

        <div className="glow glow1"></div>
        <div className="glow glow2"></div>

        <div className="split-container">

          <motion.div
            className="card-3d"
            whileHover={{ rotateX: 8, rotateY: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
          >

            <div className="card-img-wrapper">
              <img className="card-img" src={devaaa} alt="analytics dashboard" />
            </div>

            <div className="card-overlay">
              <h3>+240%</h3>
              <p>Audience Growth</p>
            </div>

          </motion.div>

          {/* RIGHT */}

          <div className="content">

            <span className="tag">DEVA MEDIA</span>

            <h1 className="title">Digital Visibility</h1>

            <motion.h2 className="split-text">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.03,
                    duration: 0.5
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>

            <p className="desc">
              Deva Media helps modern brands dominate attention through
              structured distribution, creator partnerships and strategic
              content placement.
            </p>

            <button
              className="cta"
              onClick={() => scrollToSection("services-section")}
            >
              Explore Our Work
            </button>

          </div>

        </div>
      </section>

      {/* ABOUT */}

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
            The brands that win today aren’t louder.
            <br />
            They’re distributed smarter.
          </h2>

          <p className="snippet-text">
            In a world flooded with content, visibility is the real
            competitive advantage. We help brands scale attention
            through strategic distribution and influence networks.
          </p>

          <div className="about-highlights">

            <div className="highlight-card">
              <h3>Content Strategy</h3>
              <p>
                We craft powerful stories and content strategies
                that capture modern audience attention.
              </p>
            </div>

            <div className="highlight-card">
              <h3>Distribution Systems</h3>
              <p>
                Our network ensures your brand reaches the right
                platforms and communities.
              </p>
            </div>

            <div className="highlight-card">
              <h3>Influence Networks</h3>
              <p>
                Creator partnerships amplify credibility and
                expand your audience reach.
              </p>
            </div>

          </div>

        </div>

      </motion.section>

      {/* SERVICES */}

      <motion.section
        className="services-section"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <div className="services-container">

          <span className="services-tag">
            OUR SERVICES
          </span>

          <h2 className="services-heading">
            Expanding Brand Visibility Through Strategy
          </h2>

          <motion.div
            className="services-grid"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <motion.div className="service-card" variants={cardVariant}>
              <div className="service-icon">
                <FiTrendingUp />
              </div>
              <h3>Content Intelligence</h3>
              <p>
                We analyze trends and craft content strategies
                that resonate with modern audiences.
              </p>
            </motion.div>

            <motion.div className="service-card" variants={cardVariant}>
              <div className="service-icon">
                <FiShare2 />
              </div>
              <h3>Media Distribution</h3>
              <p>
                Our distribution systems ensure your message
                reaches the right audiences across platforms.
              </p>
            </motion.div>

            <motion.div className="service-card" variants={cardVariant}>
              <div className="service-icon">
                <FiUsers />
              </div>
              <h3>Strategic Partnerships</h3>
              <p>
                We connect brands with creators and public
                figures to expand reach and influence.
              </p>
            </motion.div>

            <motion.div className="service-card" variants={cardVariant}>
              <div className="service-icon">
                <FiGlobe />
              </div>
              <h3>Public Presence</h3>
              <p>
                Media exposure and PR positioning help
                strengthen your brand authority.
              </p>
            </motion.div>

          </motion.div>

        </div>

      </motion.section>

      {/* FINAL CTA */}

      <motion.section
        className="final-cta"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <div className="cta-container">

          <h2>
            Ready to expand your visibility?
          </h2>

          <p>
            Let’s explore how Deva Media can help your brand
            reach the audiences it deserves.
          </p>

          <button
            className="cta"
            onClick={() => scrollToSection("contact-section")}
          >
            Book a Strategy Call
          </button>

        </div>

      </motion.section>

    </>
  );
};

export default SplitText;