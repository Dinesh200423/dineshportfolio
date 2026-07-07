import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Reveal from "./Reveal";
import { testimonials } from "../data/content";
import "./Testimonials.css";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), []);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <Reveal className="section-header center">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">
            Kind <span className="text-gradient">Words</span>
          </h2>
          <p className="section-sub center">
            Placeholder testimonials for now — real client quotes will replace these.
          </p>
        </Reveal>

        <div className="testimonial-carousel">
          <button className="carousel-arrow" onClick={prev} aria-label="Previous testimonial">
            <FiChevronLeft />
          </button>

          <div className="testimonial-viewport">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="testimonial-card glass"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="quote">&ldquo;{current.quote}&rdquo;</p>
                <div className="testimonial-person">
                  <div className="avatar">{current.name.charAt(0)}</div>
                  <div>
                    <h4>{current.name}</h4>
                    <span>{current.role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="carousel-arrow" onClick={next} aria-label="Next testimonial">
            <FiChevronRight />
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((t, i) => (
            <button
              key={t.name + i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
