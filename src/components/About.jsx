import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiMapPin,
  FiLayers,
  FiDownload,
  FiFolder,
  FiCpu,
  FiSmile,
  FiClock,
} from "react-icons/fi";
import Reveal from "./Reveal";
import AboutHero from "./AboutHero";
import { aboutStory, profile } from "../data/content";
import { comicBounce } from "../motion/comicBounce";
import "./About.css";

const statIcons = { folder: FiFolder, cpu: FiCpu, smile: FiSmile, clock: FiClock };

export default function About() {
  return (
    <>
      <AboutHero />

      <section className="section about-section">
        <div className="ambient-glow about-glow-1" />
        <div className="ambient-glow about-glow-2" />

        <div className="container">
          <div className="about-bottom">
            <Reveal className="about-info glass">
              <div className="info-row">
                <FiUser />
                <span className="info-label">Name</span>
                <span className="info-value">{profile.name}</span>
              </div>
              <div className="info-row">
                <FiMail />
                <span className="info-label">Email</span>
                <span className="info-value">{profile.email}</span>
              </div>
              <div className="info-row">
                <FiMapPin />
                <span className="info-label">Location</span>
                <span className="info-value">India</span>
              </div>
              <div className="info-row">
                <FiLayers />
                <span className="info-label">Focus</span>
                <span className="info-value">Flutter Developer, Full Stack Web Developer</span>
              </div>
              <motion.a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary resume-btn"
                {...comicBounce}
              >
                Download CV <FiDownload />
              </motion.a>
            </Reveal>

            <Reveal delay={0.1} className="about-stats glass">
              <div className="stats-grid-overlay" />
              {aboutStory.stats.map((s, i) => {
                const Icon = statIcons[s.icon];
                return (
                  <motion.div
                    className="stat"
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="stat-icon">
                      <Icon />
                    </div>
                    <h3>{s.number}</h3>
                    <p>{s.label}</p>
                  </motion.div>
                );
              })}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
