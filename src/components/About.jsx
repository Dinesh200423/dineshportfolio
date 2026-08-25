import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiZap,
  FiTarget,
  FiRefreshCw,
  FiUser,
  FiMail,
  FiMapPin,
  FiLayers,
  FiDownload,
} from "react-icons/fi";
import Reveal from "./Reveal";
import { aboutStory, profile } from "../data/content";
import { comicBounce } from "../motion/comicBounce";
import "./About.css";

const icons = { zap: FiZap, info: FiTarget, arrows: FiRefreshCw };

const marqueeItems = ["Open to Opportunities", "Freelance", "Full-Time"];

export default function About() {
  const photoWrapRef = useRef(null);
  const { scrollYProgress: photoScroll } = useScroll({
    target: photoWrapRef,
    offset: ["start end", "end start"],
  });
  const photoParallaxY = useTransform(photoScroll, [0, 1], [40, -40]);

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <Reveal className="about-poster">
          {/* top bar */}
          <div className="ap-topbar">
            <span className="ap-index">01 / Profile</span>
            <span className="ap-rule" />
            <span className="ap-role">Full Stack Developer</span>
          </div>

          {/* heading + copy + photo */}
          <div className="ap-main">
            <h2 className="ap-heading">
              <span className="ap-line">{aboutStory.title[0]}</span>
              <span className="ap-line">{aboutStory.title[1]}</span>
              <span className="ap-line ap-accent">{aboutStory.title[2]}</span>
            </h2>

            <div className="ap-copy">
              {aboutStory.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="ap-photo-col">
              <motion.div ref={photoWrapRef} className="ap-photo-parallax" style={{ y: photoParallaxY }}>
                <div className="ap-photo-frame">
                  <img
                    src="/images/about-image.png"
                    alt={profile.name}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>
              <div className="ap-caption-bar">
                <span>Code</span>
                <span className="ap-dot" />
                <span>Create</span>
                <span className="ap-dot" />
                <span>Solve</span>
                <div className="ap-barcode" aria-hidden="true">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <span key={i} style={{ width: i % 3 === 0 ? 3 : 1.5 }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* footer: profile info + stats + CTA */}
          <div className="ap-footer">
            <div className="ap-info">
              <div className="ap-info-row">
                <FiUser />
                <span>{profile.name}</span>
              </div>
              <div className="ap-info-row">
                <FiMail />
                <span>{profile.email}</span>
              </div>
              <div className="ap-info-row">
                <FiMapPin />
                <span>India</span>
              </div>
              <div className="ap-info-row">
                <FiLayers />
                <span>Flutter Developer, Full Stack Web Developer</span>
              </div>
              <motion.a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="ap-cv-btn"
                {...comicBounce}
              >
                Download CV <FiDownload />
              </motion.a>
            </div>

            <div className="ap-stats">
              {aboutStory.stats.map((s) => (
                <div className="ap-stat" key={s.label}>
                  <h3>{s.number}</h3>
                  <p>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* marquee ticker */}
          <div className="ap-marquee">
            <div className="ap-marquee-track">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
                (item, i) => (
                  <span key={i}>
                    {item} <i />
                  </span>
                )
              )}
            </div>
          </div>
        </Reveal>

        <div className="about-feature-cards">
          {aboutStory.features.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <Reveal key={f.title} delay={0.1 + i * 0.08}>
                <motion.div className="feature-card glass" whileHover={{ y: -6 }}>
                  <div className="feature-icon">
                    <Icon />
                  </div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
