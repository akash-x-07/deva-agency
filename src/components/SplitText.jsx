import React from "react";
import { motion } from "framer-motion";
import "./splittext.css";
import devaaa from "../assets/devaaa.jpg";

const text = "Scaling Brands Through Strategic Visibility";

/* SECTION ANIMATION */

const sectionVariant = {
  hidden: {
    opacity: 0,
    y: 80
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

/* SERVICES STAGGER */

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 60
  },
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
      section.scrollIntoView({
        behavior: "smooth"
      });
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
          transition={{ delay: 0.2 }}
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
              competitive advantage.
            </p>

            <p className="snippet-text">
              Our systems combine content strategy, media distribution
              and influence networks to ensure your brand reaches
              the audiences that matter.
            </p>

          </div>

        </motion.section>

      {/* SERVICES */}

      <motion.section
        className="services-section"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >

        <div className="services-container">

          <span className="services-tag">
            OUR SERVICES
          </span>

          <h2 className="services-heading">
            Expanding Brand Visibility
            Through Strategy
          </h2>

          <motion.div
            className="services-grid"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <motion.div className="service-card" variants={cardVariant}>
              <h3>Content Intelligence</h3>
              <p>
                Great visibility begins with the right content.
                We identify stories and moments that resonate
                with audiences and transform them into powerful
                digital assets.
              </p>
            </motion.div>

            <motion.div className="service-card" variants={cardVariant}>
              <h3>Media Distribution</h3>
              <p>
                Creating content is only the beginning.
                Our distribution network ensures your
                message reaches the right audiences
                across modern platforms.
              </p>
            </motion.div>

            <motion.div className="service-card" variants={cardVariant}>
              <h3>Strategic Partnerships</h3>
              <p>
                We connect brands, creators and public
                figures with collaborations that elevate
                credibility and expand influence.
              </p>
            </motion.div>

            <motion.div className="service-card" variants={cardVariant}>
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

      {/* APPROACH */}

      <motion.section
        className="approach-section"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >

        <div className="approach-container">

          <span className="services-tag">
            OUR APPROACH
          </span>

          <h2 className="services-heading">
            Meaningful Visibility
          </h2>

          <p className="approach-text">
            Our work is built around one principle:
            meaningful visibility.
          </p>

          <p className="approach-text">
            By combining content strategy, distribution,
            partnerships and media exposure, we help our
            clients build influence that extends far
            beyond a single platform.
          </p>

        </div>

      </motion.section>

      {/* FINAL CTA */}

      <motion.section
        className="final-cta"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >

        <div className="cta-container">

          <h2>
            Ready to expand your visibility?
          </h2>

          <p>
            Let’s explore how Deva Media can help your brand,
            story, or message reach the audiences it deserves.
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