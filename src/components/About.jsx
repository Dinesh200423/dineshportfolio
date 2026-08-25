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
  FiArrowRight,
} from "react-icons/fi";
import Reveal from "./Reveal";
import { aboutStory, profile } from "../data/content";
import { comicBounce } from "../motion/comicBounce";
import "./About.css";

const icons = { zap: FiZap, info: FiTarget, arrows: FiRefreshCw };

const infoRows = [
  { icon: FiUser, value: profile.name, label: "Name" },
  { icon: FiMail, value: profile.email, label: "Email" },
  { icon: FiMapPin, value: "India", label: "Location" },
  { icon: FiLayers, value: "Flutter Developer, Full Stack Web Developer", label: "Focus" },
];

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
            <span className="ap-index">01 / About Me</span>
            <span className="ap-rule" />
            <span className="ap-role">Full Stack Developer</span>
          </div>

          {/* heading + copy + photo */}
          <div className="ap-main">
            <h2 className="ap-heading">
              {aboutStory.title[0]} {aboutStory.title[1]}
              <span className="ap-accent">{aboutStory.title[2]}</span>
            </h2>

            <div className="ap-copy">
              <span className="ap-plus" aria-hidden="true">
                +
              </span>
              {aboutStory.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="ap-photo-col">
              <motion.div ref={photoWrapRef} className="ap-photo-parallax" style={{ y: photoParallaxY }}>
                <div className="ap-photo-frame">
                  <span className="ap-corner ap-corner-tl" />
                  <span className="ap-corner ap-corner-tr" />
                  <span className="ap-corner ap-corner-bl" />
                  <span className="ap-corner ap-corner-br" />
                  <div className="ap-photo-vbarcode" aria-hidden="true">
                    {Array.from({ length: 22 }).map((_, i) => (
                      <span key={i} style={{ height: i % 4 === 0 ? 10 : 5 }} />
                    ))}
                  </div>
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

          {/* footer: profile info + stats */}
          <div className="ap-footer">
            <div className="ap-footer-label">
              <span className="ap-index">02 / Profile</span>
              <span className="ap-rule ap-rule-thin" />
            </div>

            <div className="ap-footer-grid">
              <div className="ap-info">
                {infoRows.map(({ icon: Icon, value, label }) => (
                  <div className="ap-info-row" key={label}>
                    <Icon />
                    <div>
                      <span className="ap-info-value">{value}</span>
                      <span className="ap-info-label">{label}</span>
                    </div>
                  </div>
                ))}
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
          </div>

          {/* bottom bar: CV + availability strip */}
          <div className="ap-bottombar">
            <motion.a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="ap-cv-btn"
              {...comicBounce}
            >
              Download CV <FiDownload />
            </motion.a>
            <div className="ap-hatch" aria-hidden="true" />
            <div className="ap-availability">
              <span>Open to Opportunities</span>
              <span className="ap-dot" />
              <span>Freelance</span>
              <span className="ap-dot" />
              <span>Full-Time</span>
              <FiArrowRight className="ap-availability-arrow" />
            </div>
          </div>
        </Reveal>

        <div className="about-transition" aria-hidden="true" />

        <div className="about-feature-cards">
          {aboutStory.features.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <Reveal key={f.title} delay={0.1 + i * 0.08} y={56}>
                <motion.div
                  className="feature-card glass"
                  initial={{ scale: 0.94 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                >
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
