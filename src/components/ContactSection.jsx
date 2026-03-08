import React, { useEffect } from "react";
import "./ContactSection.css";

export default function ContactSection() {

  // 🔥 Random Infinite Particles
  useEffect(() => {
    const particles = document.querySelectorAll(".contact-particles span");

    particles.forEach((el) => {
      el.style.left = Math.random() * 100 + "%";
      el.style.top = Math.random() * 100 + "%";
      el.style.animationDelay = Math.random() * 20 + "s";
      el.style.animationDuration = 20 + Math.random() * 25 + "s";
      el.style.opacity = Math.random();
    });
  }, []);

  return (
    <section className="contact-section">

      {/* 🔥 SAME Beam Effect */}
      <div className="beam"></div>

      {/* 🔥 SAME Particles */}
      <div className="contact-particles">
        {[...Array(60)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <div className="contact-content">
        <div className="contact-header">
          <span className="badge">LET’S MAKE IT HAPPEN</span>
          <h2>
            Ready to <br />
            <span>Get started</span>
          </h2>
        </div>

        <div className="contact-card">
          <h4>Contact information</h4>

          <div className="input-row">
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Business email" />
          </div>

          <textarea placeholder="Tell us about your project"></textarea>

          <select>
            <option>Select Budget</option>
            <option>₹20,000 - ₹50,000</option>
            <option>₹50,000 - ₹1,00,000</option>
            <option>₹1,00,000+</option>
          </select>

          <div className="checkbox-group">
            <label><input type="checkbox" /> Branding</label>
            <label><input type="checkbox" /> Design</label>
            <label><input type="checkbox" /> Development</label>
          </div>

          <button className="submit-btn">Send message</button>
        </div>
      </div>
    </section>
  );
}