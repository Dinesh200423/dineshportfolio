import { motion } from "framer-motion";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import Reveal from "./Reveal";
import { projects, profile } from "../data/content";
import { comicBounce } from "../motion/comicBounce";
import "./Projects.css";

const process = ["Build", "Design", "Develop", "Deploy"];

// First sentence only — a short caption for the grid cards.
function shortDesc(description) {
  const [first] = description.split(". ");
  return first.endsWith(".") ? first : `${first}.`;
}

function ProjectCard({ project, index }) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="pj-gcard">
      <div className="pj-gcard-thumb">
        <img src={project.image} alt={project.name} loading="lazy" />
      </div>
      <div className="pj-gcard-body">
        <div className="pj-gcard-heading">
          <span className="pj-gcard-num">0{index + 1}</span>
          <h3>{project.name}</h3>
        </div>
        <p>{shortDesc(project.description)}</p>
        <div className="pj-gcard-tags">
          {project.tech.slice(0, 3).map((t) => (
            <span className="pj-gcard-tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <span className="pj-gcard-arrow">
          <FiArrowUpRight />
        </span>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="works" className="section projects-section">
      <div className="container">
        <Reveal className="pj-poster">
          {/* top bar */}
          <div className="pj-topbar">
            <span className="pj-index">03 / Projects</span>
            <span className="pj-rule" />
          </div>

          {/* hero: heading + giant word + process list */}
          <div className="pj-hero">
            <div className="pj-hero-left">
              <h2 className="pj-hero-title">
                Selected
                <br />
                Projects
              </h2>
              <p>Some real-world projects I have designed and developed.</p>
              <div className="pj-marks" aria-hidden="true">
                <div className="pj-barcode">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} style={{ width: i % 3 === 0 ? 3 : 1.5 }} />
                  ))}
                </div>
                <div className="pj-hatch" />
              </div>
            </div>

            <h1 className="pj-giant">Works</h1>

            <div className="pj-process">
              <ul>
                {process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
              <div className="pj-process-hatch" aria-hidden="true" />
            </div>
          </div>

          {/* 2x2 project grid */}
          <div className="pj-grid">
            {projects.map((project, i) => (
              <ProjectCard project={project} index={i} key={project.name} />
            ))}
          </div>

          {/* bottom bar */}
          <div className="pj-bottombar">
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pj-viewall"
              {...comicBounce}
            >
              View All Projects <FiArrowRight />
            </motion.a>
            <div className="pj-hatch" aria-hidden="true" />
            <p className="pj-tagline">
              Turning ideas into <span>scalable</span> digital experiences.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
