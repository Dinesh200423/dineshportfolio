import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";
import { profile } from "../data/content";
import "./Hero.css";

const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const socials = [
  { icon: FaGithub, href: profile.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: profile.linkedin, label: "LinkedIn" },
  { icon: FaInstagram, href: profile.instagram, label: "Instagram" },
  { icon: FaEnvelope, href: `mailto:${profile.email}`, label: "Email" },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });

  const photoX = useTransform(springX, [-1, 1], [-14, 14]);
  const photoY = useTransform(springY, [-1, 1], [-10, 10]);
  const glowX = useTransform(springX, [-1, 1], [-30, 30]);
  const glowY = useTransform(springY, [-1, 1], [-30, 30]);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  const scrollToWorks = (e) => {
    e.preventDefault();
    document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero" ref={sectionRef} onMouseMove={handleMouseMove}>
      <div className="hero-bg">
        <motion.div className="ambient-glow hero-glow-1" style={{ x: glowX, y: glowY }} />
        <div className="ambient-glow hero-glow-2" />
        <div className="hero-grid-overlay" />
      </div>

      <div className="container hero-grid">
        <div className="hero-left">
          <motion.p className="hero-eyebrow" {...fadeUp(0)}>
            Hi, I'm
          </motion.p>

          <motion.h1 className="hero-name" {...fadeUp(0.08)}>
            {profile.shortName}
            <span className="crimson">-</span> {profile.name}
          </motion.h1>

          <motion.h2 className="hero-roles" {...fadeUp(0.16)}>
            {profile.roles[0]} <span className="slash">/</span>
            <br />
            {profile.roles[1]}
          </motion.h2>

          <motion.p className="hero-desc" {...fadeUp(0.24)}>
            {profile.heroDescription}
          </motion.p>

          <motion.div className="hero-actions" {...fadeUp(0.32)}>
            <motion.a
              href="#works"
              className="btn btn-primary"
              onClick={scrollToWorks}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>

          <motion.div className="hero-socials" {...fadeUp(0.4)}>
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="social-btn"
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="hero-right">
          <motion.div
            className="hero-photo-wrap"
            style={{ x: photoX, y: photoY }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
          >
            <div className="hero-photo-glow" />
            <motion.div
              className="hero-photo-frame"
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/images/dk.png"
                alt={profile.name}
                fetchPriority="high"
                decoding="async"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <div className="scroll-mouse">
          <motion.span
            animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="scroll-label">Scroll</span>
      </motion.div>
    </section>
  );
}
