import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { navLinks, profile } from "../data/content";
import { useTheme } from "../hooks/useTheme";
import { comicBounce } from "../motion/comicBounce";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const handleNav = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar-inner">
        <a href="#hero" className="brand" onClick={handleNav("#hero")}>
          <span className="brand-mark">{profile.shortName}-</span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNav(link.href)}
                className={active === link.href ? "active" : ""}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <motion.button
            className="theme-toggle"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </motion.button>

          <motion.a
            href="#contact"
            className="hire-btn"
            onClick={handleNav("#contact")}
            {...comicBounce}
          >
            Hire Me
          </motion.a>

          <button
            className={`burger ${open ? "open" : ""}`}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleNav(link.href)}
            className={active === link.href ? "active" : ""}
          >
            {link.label}
          </a>
        ))}
        <div className="mobile-menu-footer">
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <motion.a
            href="#contact"
            className="hire-btn mobile"
            onClick={handleNav("#contact")}
            {...comicBounce}
          >
            Hire Me
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
