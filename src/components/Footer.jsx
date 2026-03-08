import React from "react";
import { FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>DEVA MEDIA</h2>
          <p>
            Deva Media helps brands scale visibility through strategic
            content, powerful media distribution and modern digital
            experiences.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <h4>Navigation</h4>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Work</a>
          <a href="#">Contact</a>
        </div>

        {/* Services */}
        <div className="footer-links">
          <h4>Services</h4>
          <a href="#">Content Intelligence</a>
          <a href="#">Media Distribution</a>
          <a href="#">Influence & PR</a>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h4>Connect</h4>

          <a href="#">
            <FiInstagram /> Instagram
          </a>

          <a href="#">
            <FiLinkedin /> LinkedIn
          </a>

          <a href="#">
            <FiTwitter /> Twitter
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        <p>DEVA MEDIA </p>
      </div>

    </footer>
  );
}

export default Footer;