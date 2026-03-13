import React from "react";
import { motion } from "framer-motion";
import "./ServicesPages.css";

function ServicesPage() {

  const sectionVariant = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" }
    }
  };

  const containerStagger = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  return (

    <motion.section
      className="services-page-section"
      variants={sectionVariant}
      initial="hidden"
      animate="visible"
    >

      <div className="services-page-container">

        <span className="services-page-tag">
          OUR SERVICES
        </span>

        <h2 className="services-page-heading">
          Expanding Brand Visibility
          Through Strategy
        </h2>

        <motion.div
          className="services-page-grid"
          variants={containerStagger}
          initial="hidden"
          animate="visible"
        >

          <motion.div className="services-page-card" variants={cardVariant}>
            <h3>Content Intelligence</h3>
            <p>
              Great visibility begins with the right content.
              We identify stories and moments that resonate
              with audiences and transform them into powerful
              digital assets.
            </p>
          </motion.div>

          <motion.div className="services-page-card" variants={cardVariant}>
            <h3>Media Distribution</h3>
            <p>
              Creating content is only the beginning.
              Our distribution network ensures your
              message reaches the right audiences
              across modern platforms.
            </p>
          </motion.div>

          <motion.div className="services-page-card" variants={cardVariant}>
            <h3>Strategic Partnerships</h3>
            <p>
              We connect brands, creators and public
              figures with collaborations that elevate
              credibility and expand influence.
            </p>
          </motion.div>

          <motion.div className="services-page-card" variants={cardVariant}>
            <h3>Public Presence</h3>
            <p>
              Through strategic media exposure and
              public relations we strengthen your
              brand’s digital presence.
            </p>
          </motion.div>

        </motion.div>

      </div>

    </motion.section>
  );
}

export default ServicesPage;