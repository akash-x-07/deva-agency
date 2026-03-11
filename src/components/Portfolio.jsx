import React from "react";
import "./Portfolio.css";

const portfolioItems = [
  {
    id: 1,
    video: "/videos/work1.mp4",
    title: "Brand Growth Campaign",
  },
  {
    id: 2,
    video: "/videos/work2.mp4",
    title: "Content Distribution Strategy",
  },
  {
    id: 3,
    video: "/videos/work3.mp4",
    title: "Social Media Viral Campaign",
  },
  {
    id: 4,
    video: "/videos/work4.mp4",
    title: "Influencer Marketing",
  },
];

function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">

      <div className="portfolio-header">
        <span className="portfolio-badge">PORTFOLIO</span>
        <h2>Our Recent Work</h2>
        <p>
          A glimpse into the distribution systems and viral content
          strategies we build for brands.
        </p>
      </div>

      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div className="portfolio-card" key={item.id}>

            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="portfolio-overlay">
              <h4>{item.title}</h4>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Portfolio;