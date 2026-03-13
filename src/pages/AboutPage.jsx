import React from "react";
import { motion } from "framer-motion";
import "./AboutPage.css";

const sectionVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

export default function bout() {
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


      {/* NEW VISION SECTION */}

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