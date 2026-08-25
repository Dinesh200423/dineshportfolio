import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import { projects } from "../data/content";
import "./Projects.css";

// First sentence only — a short caption for the collage cards.
function shortDesc(description) {
  const [first] = description.split(". ");
  return first.endsWith(".") ? first : `${first}.`;
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <Reveal
      delay={index * 0.08}
      y={64}
      className={`pj-card-slot ${index % 2 === 0 ? "pj-card-slot-end" : "pj-card-slot-start"}`}
    >
      <motion.a
        ref={cardRef}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="pj-card glass"
        initial={{ rotate: index % 2 === 0 ? -1.5 : 1.5 }}
        whileHover={{ y: -8, rotate: 0, scale: 1.02 }}
      >
        <div className="pj-card-thumb">
          <motion.img
            src={project.image}
            alt={project.name}
            loading="lazy"
            style={{ y: imgY }}
          />
          <span className="pj-card-link">
            <FiArrowUpRight />
          </span>
        </div>
        <div className="pj-card-body">
          <h3>{project.name}</h3>
          <p>{shortDesc(project.description)}</p>
        </div>
      </motion.a>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="works" className="section projects-section">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-tag">My Works</span>
          <h2 className="section-title">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-sub">Some real-world projects I have designed and developed.</p>
        </Reveal>

        <div className="pj-collage">
          <span className="pj-watermark" aria-hidden="true">
            Works
          </span>
          <div className="pj-cards">
            {projects.map((project, i) => (
              <ProjectCard project={project} index={i} key={project.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
