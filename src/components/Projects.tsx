import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/content";
import SectionHead from "./SectionHead";

// Asymmetric editorial rhythm on desktop: wide / narrow, then narrow / wide.
const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Projects() {
  return (
    <section id="work" aria-labelledby="work-title" className="bg-sand py-16 md:py-24">
      <div className="wrap">
        <SectionHead
          id="work-title"
          eyebrow="Selected work"
          title={
            <>
              Built to make
              <br />a difference.
            </>
          }
          intro="Selected digital experiences, business tools, and creative projects built to solve real problems."
        />

        <motion.ul
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-12"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, i) => (
            <motion.li key={project.name} variants={card} className={spans[i % spans.length]}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col border border-line bg-paper p-3 transition duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_18px_40px_-24px_rgba(25,24,22,0.45)]"
              >
                <div className="relative h-56 overflow-hidden bg-ink sm:h-64 lg:h-72">
                  <img
                    src={project.image}
                    alt={`Screenshot of the ${project.name} website`}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover object-left-top transition duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute top-0 left-0 bg-ink px-3 py-2 font-mono text-[10px] text-accent-glow">
                    PROJECT / 0{i + 1}
                  </span>
                </div>

                <div className="flex flex-1 items-start justify-between gap-4 px-1 pt-5 pb-2">
                  <div>
                    <p className="font-mono text-[10px] tracking-wider text-accent-ink uppercase">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-[28px] leading-none font-semibold uppercase">
                      {project.name}
                    </h3>
                    <p className="mt-3 max-w-md text-[13px] leading-6 text-muted">
                      {project.description}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="grid size-10 shrink-0 place-items-center border border-line text-accent transition duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
                  >
                    <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
                <span className="sr-only">(opens live site in a new tab)</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
