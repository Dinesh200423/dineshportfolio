import { motion } from "framer-motion";
import Reveal from "./Reveal";
import LazyVideo from "./LazyVideo";
import { services } from "../data/content";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-tag">Services I Offer</span>
          <h2 className="section-title">
            Premium <span className="text-gradient">Digital Solutions</span>
          </h2>
          <p className="section-sub">
            Crafted for modern businesses and growing brands — from mobile apps to full CRM
            platforms.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <motion.div className="service-card glass" whileHover={{ y: -8 }}>
                <div className="service-video">
                  <div className="video-skeleton" />
                  <LazyVideo src={service.video} className="service-video-el" />
                </div>
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <div className="service-tags">
                    {service.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
