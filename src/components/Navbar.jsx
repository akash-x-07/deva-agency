import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (className) => {
    const section = document.querySelector(`.${className}`);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    setMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          <div className="logo">DEVA MEDIA</div>

          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <div className={`fullscreen-menu ${menuOpen ? "show" : ""}`}>
        <a onClick={() => scrollToSection("hero")}>Home</a>
        <a onClick={() => scrollToSection("snippet-container")}>About</a>
        <a onClick={() => scrollToSection("services-container")}>Services</a>
        <a onClick={() => scrollToSection("contact-section")}>Contact</a>
      </div>
    </>
  );
}

export default Navbar;