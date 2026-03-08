import React from "react";
import { motion } from "framer-motion";
import "./splittext.css";
import devaaa from "../assets/devaaa.jpg"; 

const text = "Scaling Brands Through Strategic Visibility";

const SplitText = () => {

  const scrollToSection = (className) => {
    const section = document.querySelector(`.${className}`);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <section className="split-hero">

        <div className="glow glow1"></div>
        <div className="glow glow2"></div>

        <div className="split-container">

          {/* LEFT CARD */}

          <motion.div
            className="card-3d"
            whileHover={{ rotateX: 8, rotateY: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
          >

            <div className="card-img-wrapper">

              <img
                className="card-img"
                src={devaaa}
                alt="analytics dashboard"
              />

            </div>

            <div className="card-overlay">
              <h3>+240%</h3>
              <p>Audience Growth</p>
            </div>

          </motion.div>

          {/* RIGHT CONTENT */}

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
                    duration: 0.5,
                    ease: "easeOut"
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
              onClick={() => scrollToSection("about-section")}
            >
              Explore Our Work
            </button>

          </div>

        </div>
      </section>

      {/* ABOUT */}

      <section className="about-section">

        <motion.div
          className="snippet-container"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

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
            competitive advantage.
          </p>

          <p className="snippet-text">
            Our systems combine content strategy, media distribution
            and influence networks to ensure your brand reaches
            the audiences that matter.
          </p>

        </motion.div>

      </section>
    </>
  );
};

export default SplitText;