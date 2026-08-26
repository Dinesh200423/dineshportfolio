import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Reveal from "./Reveal";
import { profile } from "../data/content";
import { comicBounce } from "../motion/comicBounce";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Dinesh, I'm ${form.name} (${form.email}).\n\n${form.message}`
    );
    window.open(`${profile.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal className="contact-panel">
          <div className="contact-topbar">
            <span className="contact-index">04 / Contact</span>
            <span className="contact-rule" />
          </div>

          <div className="contact-header">
            <h2 className="contact-heading">
              Let's Build Something
              <span className="contact-accent">Great Together</span>
            </h2>
            <p className="contact-sub">
              Have a project in mind — a Flutter app, a website, a CRM, or a cloud solution?
              Let's create something exceptional together.
            </p>
            <div className="availability-badge">
              <span className="status-dot" /> Available for Opportunities
            </div>
          </div>

          <div className="contact-body">
            <div className="contact-info">
              <a href={`mailto:${profile.email}`} className="info-card">
                <div className="info-icon">
                  <FiMail />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>{profile.email}</p>
                </div>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="info-card">
                <div className="info-icon">
                  <FaLinkedinIn />
                </div>
                <div>
                  <h4>LinkedIn</h4>
                  <p>Connect professionally</p>
                </div>
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="info-card">
                <div className="info-icon">
                  <FaGithub />
                </div>
                <div>
                  <h4>GitHub</h4>
                  <p>Explore my projects</p>
                </div>
              </a>
              <a
                href={`${profile.whatsapp}?text=${encodeURIComponent("Hi Dinesh, I'd like to discuss a project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="info-card"
              >
                <div className="info-icon">
                  <FaWhatsapp />
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>{profile.phone}</p>
                </div>
              </a>
              <div className="info-card static">
                <div className="info-icon">
                  <FiMapPin />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>{profile.location}</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label>
                Message
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                />
              </label>
              <motion.button
                type="submit"
                className="contact-submit"
                {...comicBounce}
              >
                Send Message <FiSend />
              </motion.button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
