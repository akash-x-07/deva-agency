import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Heading */}
        <motion.h2
          className="about-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our Process — <span>How We Work</span><br />
          From story to scale, we follow a clear<br />
          system designed to turn attention<br />
          into long-term influence.
        </motion.h2>

        {/* Grid */}
        <motion.div
          className="about-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          {features.map((item, i) => (
            <motion.div
              className="about-card"
              key={i}
              variants={fadeUp}
              whileHover={{ rotateX: 8, rotateY: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div
                className="icon"
                dangerouslySetInnerHTML={{ __html: item.icon }}
              />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "01 — Understand the Story",
    text: "Every brand, creator or public figure has a story worth sharing. We begin by understanding the message, the audience and the moments that matter most.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#ff6b81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z"/>
    </svg>`
  },
  {
    title: "02 — Shape the Content",
    text: "We transform key moments into compelling digital assets designed to capture attention across modern platforms.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#2ed573" stroke-width="2">
      <path d="M4 12h16M12 4v16"/>
    </svg>`
  },
  {
    title: "03 — Strategic Distribution",
    text: "Content is placed where attention already exists. Through our distribution network and platform expertise, visibility expands rapidly.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#1e90ff" stroke-width="2">
      <circle cx="12" cy="12" r="9"/>
    </svg>`
  },
  {
    title: "04 — Momentum & Growth",
    text: "As content spreads, influence grows. We continue optimizing reach, partnerships and exposure to build lasting momentum.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#f5b7b1" stroke-width="2">
      <path d="M4 4h16v12H5.17L4 17.17V4z"/>
    </svg>`
  }
];