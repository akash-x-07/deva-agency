import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          <div className="logo">DEVA MEDIA</div>

          {/* Hamburger always visible */}
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

      {/* Fullscreen Menu */}
      <div className={`fullscreen-menu ${menuOpen ? "show" : ""}`}>
        <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </>
  );
}

export default Navbar;