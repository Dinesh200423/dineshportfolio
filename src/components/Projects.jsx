import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import { projects } from "../data/content";
import { comicBounce } from "../motion/comicBounce";
import "./Projects.css";

function handleSpotlight(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  card.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
}

function ProjectCard({ project, index }) {
  const imgWrapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgWrapRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <Reveal delay={index * 0.08}>
      <div
        className={`project-card glass ${index % 2 === 1 ? "reverse" : ""}`}
        onMouseMove={handleSpotlight}
      >
        <div className="project-spotlight" />
        <div className="project-image" ref={imgWrapRef}>
          <motion.div className="project-image-parallax" style={{ y: imgY }}>
            <img src={project.image} alt={project.name} loading="lazy" />
          </motion.div>
        </div>
        <div className="project-content">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="project-tech">
            {project.tech.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            {...comicBounce}
          >
            Live Demo <FiArrowUpRight />
          </motion.a>
        </div>
      </div>
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

        <div className="projects-list">
          {projects.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
