import React from "react";
import "./logoslider.css";

const logos = [
  "SOLEIL",
  "kooki",
  "GRAND Utilaje",
  "OPTIMO",
  "RecruiterOne",
  "skoolvers",
  "Vignetique"
];

const LogoSlider = () => {
  return (
    <section className="logo-section">

      <p className="trusted">THEY TRUSTED US</p>

      <div className="logo-slider">

        <div className="logo-track">
          {/* double render for infinite loop */}
          {logos.concat(logos).map((logo, index) => (
            <div className="logo-item" key={index}>
              {logo}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LogoSlider;