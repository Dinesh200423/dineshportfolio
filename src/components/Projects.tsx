import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../data/content";
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { featured, link } = project;
  const linkProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : { href: "#contact" };

  return (
    <a
      {...linkProps}
      className={`group flex h-full flex-col border border-line bg-paper p-3 transition duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_18px_40px_-24px_rgba(25,24,22,0.45)] ${
        featured ? "lg:grid lg:grid-cols-[1.45fr_1fr] lg:gap-8" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-ink ${
          featured ? "aspect-[16/9] lg:aspect-auto lg:h-[420px]" : "h-56 sm:h-64 lg:h-72"
        }`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          className={`size-full object-cover transition duration-700 group-hover:scale-[1.04] ${
            featured ? "object-center" : "object-left-top"
          }`}
        />
        <span className="absolute top-0 left-0 bg-ink px-3 py-2 font-mono text-[10px] text-accent-glow">
          PROJECT / 0{index + 1}
        </span>
      </div>

      <div
        className={`flex flex-1 items-start justify-between gap-4 px-1 pt-5 pb-2 ${
          featured ? "lg:flex-col lg:justify-center lg:pt-2 lg:pr-6" : ""
        }`}
      >
        <div>
          <p className="font-mono text-[10px] tracking-wider text-accent-ink uppercase">
            {project.category}
          </p>
          <h3
            className={`mt-2 font-display leading-none font-semibold uppercase ${
              featured ? "text-[28px] lg:text-5xl" : "text-[28px]"
            }`}
          >
            {project.name}
          </h3>
          <p className={`mt-3 max-w-md leading-6 text-muted ${featured ? "text-[13px] lg:text-sm lg:leading-7" : "text-[13px]"}`}>
            {project.description}
          </p>
          {featured && !link && (
            <p className="mt-5 hidden font-mono text-[11px] tracking-wider text-ink uppercase lg:block">
              Ask me about this project →
            </p>
          )}
        </div>
        <span
          aria-hidden
          className={`grid size-10 shrink-0 place-items-center border border-line text-accent transition duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white ${
            featured ? "lg:hidden" : ""
          }`}
        >
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
      <span className="sr-only">
        {link ? "(opens live site in a new tab)" : "(ask about this project in the contact section)"}
      </span>
    </a>
  );
}

export default function Projects() {
  let regular = 0;

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
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project, i) => (
            <motion.li
              key={project.name}
              variants={card}
              className={
                project.featured ? "md:col-span-2 lg:col-span-12" : spans[regular++ % spans.length]
              }
            >
              <ProjectCard project={project} index={i} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
