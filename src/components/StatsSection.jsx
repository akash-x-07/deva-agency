import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./StatsSection.css";

const stats = [
  {
    number: 1,
    suffix: "B+",
    label: "Views Generated Across Platforms",
    color: "#ff4d6d"
  },
  {
    number: 150,
    suffix: "+",
    label: "Brands Supported Globally",
    color: "#caff70"
  },
  {
    number: 40,
    suffix: "+",
    label: "Countries Reached Through Distribution",
    color: "#4ade80"
  },
  {
    number: 100,
    suffix: "K+",
    label: "High-Performance Content Pieces Delivered",
    color: "#60a5fa"
  }
];

export default function StatsSection() {
  return (
    <section className="stats-section">

      <div className="stats-header">
        <span className="badge">IMPACT</span>

        <h2>
          Measured in <br />
          <span>Impact</span>
        </h2>

      </div>

      <div className="stats-grid">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="stat-card"
            whileHover={{ rotateX: 8, rotateY: -8 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >

            <div
              className="dot"
              style={{ backgroundColor: item.color }}
            ></div>

            <h3>
              <CountUp end={item.number} duration={2} />
              {item.suffix}
            </h3>

            <p>{item.label}</p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}