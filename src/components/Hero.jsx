import React, { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [loaded, setLoaded] = useState(false);

  // 🔥 Heading fade load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // 🔥 Random Infinite Particles
  useEffect(() => {
    const particles = document.querySelectorAll(".particles span");

    particles.forEach((el) => {
      el.style.left = Math.random() * 100 + "%";
      el.style.top = Math.random() * 100 + "%";
      el.style.animationDelay = Math.random() * 20 + "s";
      el.style.animationDuration = 20 + Math.random() * 25 + "s";
      el.style.opacity = Math.random();
    });
  }, []);

  const scrollToSection = (className) => {
    const section = document.querySelector(`.${className}`);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero">
      <div className="beam"></div>

      {/* 🔥 Particles */}
      <div className="particles">
        {[...Array(60)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <div className={`hero-content ${loaded ? "show" : ""}`}>
        
        <h1>
          Turning Attention <br />
          into <span>Influence</span>
        </h1>

        <p>
          In a world overflowing with content, visibility is everything.
          We build structured distribution systems that ensure your brand
          isn’t just seen — it’s remembered.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => scrollToSection("services")}
          >
            Scale My Brand
          </button>

          <button
            className="secondary-btn"
            onClick={() => scrollToSection("split-hero")}
          >
            View Our Work
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;