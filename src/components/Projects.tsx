import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../data/content";
import SectionHead from "./SectionHead";

interface PosterTheme {
  /** Poster background + title colour. */
  panel: string;
  chip: string;
  /** Decorative shapes drawn behind the title. */
  decor: ReactNode;
}

const themes: Record<Project["poster"], PosterTheme> = {
  crm: {
    panel: "bg-[#EDE3D6] text-ink",
    chip: "bg-[#8B1E24] text-white",
    decor: (
      <>
        <span className="absolute top-4 right-4 size-7 bg-accent" />
        <span className="absolute top-[2.6rem] right-[2.6rem] size-3 border-2 border-ink" />
        <span className="absolute -right-3 -bottom-5 h-[55%] w-[42%] -rotate-6 bg-[#8B1E24] shadow-[8px_8px_0_#191816]" />
      </>
    ),
  },
  peach: {
    panel: "bg-[#F4EDE3] text-ink",
    chip: "bg-[#EADFD2] text-ink",
    decor: (
      <>
        <span className="absolute -right-8 -bottom-16 size-40 rounded-full bg-[#E9A07E]" />
        <span className="absolute right-[42%] -bottom-4 size-14 rounded-full bg-[#F2CFB4]" />
      </>
    ),
  },
  gold: {
    panel: "bg-[#141210] text-[#E8C26A]",
    chip: "bg-[#E8C26A] text-[#141210]",
    decor: (
      <>
        <span className="absolute -top-16 left-[38%] h-[150%] w-16 rotate-[28deg] bg-[#C9962E]/70" />
        <span className="absolute -top-16 left-[68%] h-[150%] w-6 rotate-[28deg] bg-[#C9962E]/45" />
      </>
    ),
  },
  sun: {
    panel: "bg-[#F5C95C] text-ink",
    chip: "bg-ink text-[#F5C95C]",
    decor: (
      <>
        <span className="absolute -top-10 -right-10 size-32 rounded-full bg-accent" />
        <span className="absolute inset-x-0 bottom-0 h-1/3 bg-[repeating-linear-gradient(0deg,#E7AE3B_0_2px,transparent_2px_14px)]" />
      </>
    ),
  },
  navy: {
    panel: "bg-gradient-to-b from-[#9DB8C6] to-[#EAD9B6] text-[#102A3A]",
    chip: "bg-[#F7F4EF] text-[#102A3A]",
    decor: (
      <span className="absolute inset-0 bg-[#1F4A60] [clip-path:polygon(0_68%,100%_32%,100%_100%,0_100%)] [background-image:repeating-linear-gradient(115deg,transparent_0_12px,rgba(157,184,198,0.35)_12px_14px)]" />
    ),
  },
};

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function Poster({ project }: { project: Project }) {
  const t = themes[project.poster];
  return (
    <div className={`@container relative min-h-0 flex-1 overflow-hidden ${t.panel}`}>
      <div aria-hidden>{t.decor}</div>

      <p
        aria-hidden
        className="relative max-w-[85%] p-4 font-display text-[clamp(1.5rem,11cqw,2.4rem)] leading-[0.9] font-bold uppercase"
      >
        {project.name}
      </p>

      <span className={`absolute bottom-3 left-3 px-2 py-1 font-mono text-[10px] tracking-wider uppercase ${t.chip}`}>
        {project.category.replace(" · ", " / ")}
      </span>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { link } = project;
  const linkProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : { href: "#contact" };

  return (
    <a
      {...linkProps}
      className="group flex aspect-square flex-col overflow-hidden bg-cream text-ink transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-28px_rgba(0,0,0,0.9)]"
    >
      <Poster project={project} />

      <div className="flex shrink-0 flex-col border-t border-line px-4 pt-3 pb-4">
        <p className="truncate font-mono text-[10px] tracking-wider text-accent-ink uppercase">
          0{index + 1} — {project.category}
        </p>
        <h3 className="mt-2 truncate font-display text-[22px] leading-[1.15] font-bold uppercase">{project.name}</h3>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted">{project.description}</p>
        <span className="inline-flex items-center gap-1.5 pt-3 font-mono text-[11px] tracking-wider uppercase transition-colors group-hover:text-accent-ink">
          {link ? "Visit live site" : "Ask me about it"}
          <ArrowUpRight
            size={14}
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
      <span className="sr-only">
        {link ? "(opens in a new tab)" : "(goes to the contact section)"}
      </span>
    </a>
  );
}

export default function Projects() {
  const rowRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: true });

  const updateEdges = useCallback(() => {
    const row = rowRef.current;
    if (!row) return;
    setEdges({
      start: row.scrollLeft <= 4,
      end: row.scrollLeft + row.clientWidth >= row.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  // Step by one card (its width plus the row gap).
  const scrollByCard = (dir: 1 | -1) => {
    const row = rowRef.current;
    const first = row?.firstElementChild as HTMLElement | null;
    if (!row || !first) return;
    const gap = parseFloat(getComputedStyle(row).columnGap) || 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    row.scrollBy({ left: dir * (first.offsetWidth + gap), behavior: reduce ? "auto" : "smooth" });
  };

  const scrollable = !(edges.start && edges.end);

  return (
    <section id="work" aria-labelledby="work-title" className="bg-ink py-16 text-cream md:py-24">
      <div className="wrap">
        <SectionHead
          id="work-title"
          tone="dark"
          eyebrow="Selected work"
          title={
            <>
              Built to make
              <br />a difference.
            </>
          }
          intro="A selection of websites, business tools, and digital projects designed to solve real problems."
        />

        {/* One row: 4 cards on desktop, 2 on tablet, 1 + a peek on mobile. Extra cards scroll. */}
        <motion.ul
          ref={rowRef}
          onScroll={updateEdges}
          aria-label="Projects"
          className="-my-3 flex snap-x snap-mandatory gap-3 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project, i) => (
            <motion.li
              key={project.name}
              variants={card}
              className="w-[85%] shrink-0 snap-start sm:w-[calc((100%-0.75rem)/2)] lg:w-[calc((100%-2.25rem)/4)]"
            >
              <ProjectCard project={project} index={i} />
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-rule pt-5 font-mono text-[11px] tracking-wider uppercase">
          <span className="text-ash">
            Selected work / {String(projects.length).padStart(2, "0")} projects
          </span>
          <div className="flex items-center gap-4">
            {scrollable && (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => scrollByCard(-1)}
                  disabled={edges.start}
                  aria-label="Previous projects"
                  className="grid size-11 place-items-center border border-rule transition-colors hover:border-accent hover:text-accent-glow disabled:pointer-events-none disabled:opacity-30"
                >
                  <ArrowLeft size={16} aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCard(1)}
                  disabled={edges.end}
                  aria-label="Next projects"
                  className="grid size-11 place-items-center border border-rule transition-colors hover:border-accent hover:text-accent-glow disabled:pointer-events-none disabled:opacity-30"
                >
                  <ArrowRight size={16} aria-hidden />
                </button>
              </div>
            )}
            <a
              href="#contact"
              className="hidden items-center gap-1.5 transition-colors hover:text-accent-glow sm:inline-flex"
            >
              Have a project in mind? <ArrowUpRight size={14} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
