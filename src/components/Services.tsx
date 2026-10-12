import { ArrowUpRight } from "lucide-react";
import { services } from "../data/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-ink py-16 text-cream md:py-24">
      <div className="wrap">
        <SectionHead
          id="services-title"
          tone="dark"
          eyebrow="How I can help"
          title="Services with purpose."
          intro="From the first idea to a working digital product, I help turn business needs into clear, maintainable solutions."
        />

        <ul className="border-t border-rule">
          {services.map((service, i) => (
            <li key={service.title} className="border-b border-rule">
              <Reveal delay={i * 0.05}>
                <a
                  href="#contact"
                  className="group grid grid-cols-[2.25rem_1fr_1.5rem] items-center gap-3 py-6 sm:grid-cols-[3.5rem_1fr_2rem] sm:gap-5"
                >
                  <span className="font-mono text-[11px] text-accent-glow">0{i + 1} /</span>
                  <span>
                    <span className="block font-display text-[clamp(1.4rem,3.2vw,2rem)] leading-tight uppercase transition-colors group-hover:text-accent-glow">
                      {service.title}
                    </span>
                    <span className="mt-1 block text-[13px] text-ash">{service.desc}</span>
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
