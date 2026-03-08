import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Founder",
    role: "Migratemate",
    text: "Working with Deva Media changed the scale of our visibility. The distribution alone brought our brand in front of audiences we hadn’t reached before.",
  },
  {
    name: "Marketing Director",
    role: "Donondo",
    text: "What impressed us most was the consistency. Every piece of content was placed strategically and the reach kept compounding.",
  },
  {
    name: "Founder",
    role: "Doordash",
    text: "Deva Media understands how modern attention works. The exposure and momentum we gained through their network was remarkable.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">

        {/* LEFT SIDE */}
        <div className="testimonial-left">
          <span className="tag">TESTIMONIALS</span>
          <h2>
            What our <br />
            <span>clients say</span>
          </h2>
          <button className="read-btn">Read more stories</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="testimonial-right">
          <motion.div
            className="scroll-column"
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <div className="testimonial-card" key={i}>
                <p className="testimonial-text">“{item.text}”</p>

                <div className="testimonial-user">
                  <div className="avatar">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>

              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}