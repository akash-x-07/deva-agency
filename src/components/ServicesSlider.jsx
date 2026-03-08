import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiLayers, FiPenTool, FiCode, FiTrendingUp, FiShare2, FiUsers } from "react-icons/fi";
import "./ServicesSlider.css";

export default function ServicesSlider() {

  const [active, setActive] = useState(0);
  const isScrolling = useRef(false);
  const touchStart = useRef(0);


const services = [
  {
    title: "Content Intelligence",
    tags: ["Content Strategy", "Creative Direction", "Audience Insights"],
    text: "Great visibility starts with the right content. We identify, refine and transform your most powerful moments into high-impact assets designed to capture attention.",
    icon: <FiTrendingUp />,
    color: "green"
  },
  {
    title: "Media Distribution",
    tags: ["Platform Strategy", "Growth Systems", "Audience Reach"],
    text: "Visibility doesn’t happen by chance. We deploy strategic distribution across high-performing platforms and networks to ensure your brand consistently reaches the right audiences.",
    icon: <FiShare2 />,
    color: "purple"
  },
  {
    title: "Influence & PR",
    tags: ["Creators", "Athletes", "Media Features"],
    text: "Influence grows when the right people talk about you. We connect brands with creators, athletes and media opportunities that expand credibility and public presence.",
    icon: <FiUsers />,
    color: "blue"
  }
];

  /* Smooth Scroll Control */
  const handleWheel = (e) => {

    if (isScrolling.current) return;

    if (e.deltaY > 0 && active < services.length - 1) {
      setActive(prev => prev + 1);
    }

    if (e.deltaY < 0 && active > 0) {
      setActive(prev => prev - 1);
    }

    isScrolling.current = true;

    /* slow cinematic delay */
    setTimeout(() => {
      isScrolling.current = false;
    }, 1400);
  };

  /* Mobile Swipe */
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {

    const end = e.changedTouches[0].clientY;

    if (touchStart.current - end > 50 && active < services.length - 1) {
      setActive(prev => prev + 1);
    }

    if (end - touchStart.current > 50 && active > 0) {
      setActive(prev => prev - 1);
    }
  };

  return (
    <section
      className="services"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      <div className="stack-wrapper">

        {services.map((service, index) => {

          const offset = index - active;

          return (
            <motion.div
              key={index}
              className={`card card-${service.color}`}
              animate={{
                y: offset * 55,
                scale: 1 - Math.abs(offset) * 0.05,
                rotateX: offset * -3,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
                zIndex: services.length - Math.abs(offset)
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1]
              }}
            >

              <div className="icon-circle">
                {service.icon}
              </div>

              <div className="content">

                <h2>{service.title}</h2>

                <div className="tags">
                  {service.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

                <p>{service.text}</p>

              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}