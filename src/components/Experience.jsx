import Reveal from "./Reveal";
import { experience } from "../data/content";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="ambient-glow experience-glow" />
      <div className="container">
        <Reveal className="section-header">
          <span className="section-tag">Experience</span>
          <h2 className="section-title">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="section-sub">
            A timeline of the work that's shaped how I build. Placeholder entries — swap in your
            full history any time.
          </p>
        </Reveal>

        <div className="timeline">
          {experience.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.1} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card glass">
                <span className="timeline-duration">{item.duration}</span>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
