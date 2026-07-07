import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Reveal from "./Reveal";
import { profile } from "../data/content";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "your website"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="ambient-glow contact-glow-1" />
      <div className="ambient-glow contact-glow-2" />

      <div className="container">
        <Reveal className="contact-panel glass">
          <div className="contact-header">
            <span className="section-tag">Contact</span>
            <h2 className="section-title">
              Let's Build Something
              <br />
              <span className="text-gradient">Great Together</span>
            </h2>
            <p className="section-sub center">
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
                className="btn btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
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
