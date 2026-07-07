import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks, profile } from "../data/content";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");

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

        <a href="#contact" className="hire-btn" onClick={handleNav("#contact")}>
          Hire Me
        </a>

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
        <a href="#contact" className="hire-btn mobile" onClick={handleNav("#contact")}>
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}
