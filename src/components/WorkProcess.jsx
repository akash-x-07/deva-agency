import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./WorkProcess.css";

const slides = [
  {
    number: "01",
    title: "Discovery & Understanding",
    text: "We dive deep into your business, goals, and challenges through collaboration and research to create a clear vision.",
    days: "1 - 2 DAYS",
    gradient: ["#f5ff87", "#c4d800"],
  },
  {
    number: "02",
    title: "Strategy & Planning",
    text: "We craft a strategic roadmap aligned with your brand goals and audience positioning.",
    days: "2 - 3 DAYS",
    gradient: ["#87f5ff", "#00c8ff"], 
  },
  {
    number: "03",
    title: "Design & Execution",
    text: "Our team designs and develops a seamless, engaging digital experience.",
    days: "4 - 7 DAYS",
    gradient: ["#ff9af5", "#ff3dc8"], 
  },
  {
    number: "04",
    title: "Launch & Growth",
    text: "We launch your product and optimise continuously for performance.",
    days: "Ongoing",
    gradient: ["#ffc987", "#ff7b00"], 
  },
];

export default function WorkProcess() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="process-section">
      <div className="process-header">
        <span className="tag">HOW WE WORK</span>
        <h2>
          How <span>we bring</span><br />
          ideas to life
        </h2>
        <button className="work-btn">How we work</button>
      </div>

      <div className="slider-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="slide-card"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="slide-left">
              <span className="number">{slides[index].number}</span>
              <h3>{slides[index].title}</h3>
              <p>{slides[index].text}</p>
              <div className="days">{slides[index].days}</div>
            </div>

            <div className="slide-right">
              <div className="logo-box">
                <svg
                  viewBox="0 0 100 100"
                  style={{
                    filter: `drop-shadow(0 0 40px ${slides[index].gradient[0]})`,
                  }}
                >
                  <defs>
                    <radialGradient id="grad">
                      <stop
                        offset="0%"
                        stopColor={slides[index].gradient[0]}
                      />
                      <stop
                        offset="100%"
                        stopColor={slides[index].gradient[1]}
                      />
                    </radialGradient>
                  </defs>

                  <rect
                    width="100"
                    height="100"
                    rx="25"
                    fill="url(#grad)"
                  />
                  <path
                    d="M50 15 L65 50 L50 85 L35 50 Z"
                    fill="#111"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="nav-buttons">
          <button onClick={prev}>‹</button>
          <button onClick={next}>›</button>
        </div>
      </div>
    </section>
  );
}