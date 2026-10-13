import type { ComponentType, CSSProperties } from "react";
import { ArrowUpRight, Cloud, PenTool, TrendingUp } from "lucide-react";
import {
  SiCss,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTypescript,
  SiVercel,
  SiWordpress,
} from "react-icons/si";
import { techStack } from "../data/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

type IconComponent = ComponentType<{ size?: number; style?: CSSProperties; className?: string }>;

// Official brand icon + hex per tool, where simple-icons has one. A few
// tools (AWS, SEO, Content creation) have no usable brand mark here — AWS's
// was pulled from the icon pack under Amazon's trademark policy — so those
// fall back to a generic icon tinted with the brand's real color.
const ICONS: Record<string, { Icon: IconComponent; color: string }> = {
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#1572B6" },
  JavaScript: { Icon: SiJavascript, color: "#F0C419" },
  React: { Icon: SiReact, color: "#149ECA" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  Flutter: { Icon: SiFlutter, color: "#02569B" },
  Dart: { Icon: SiDart, color: "#0175C2" },
  Supabase: { Icon: SiSupabase, color: "#3FCF8E" },
  Firebase: { Icon: SiFirebase, color: "#DD8023" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  AWS: { Icon: Cloud, color: "#FF9900" },
  Vercel: { Icon: SiVercel, color: "#191816" },
  GitHub: { Icon: SiGithub, color: "#181717" },
  WordPress: { Icon: SiWordpress, color: "#21759B" },
  SEO: { Icon: TrendingUp, color: "#ED321F" },
  "Content creation": { Icon: PenTool, color: "#ED321F" },
};

function TechIcon({ name }: { name: string }) {
  const { Icon, color } = ICONS[name] ?? { Icon: PenTool, color: "#ED321F" };
  return <Icon size={30} style={{ color }} aria-hidden />;
}

export default function TechStack() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-sand py-16 md:py-24">
      <div className="wrap">
        <SectionHead
          id="skills-title"
          eyebrow="The tools behind the work"
          title={
            <>
              Built with the <span className="text-accent">right tools.</span>
            </>
          }
          intro="A carefully chosen set of modern tools to design, develop, deploy and grow meaningful digital experiences."
        />

        <div className="border-t border-line">
          {techStack.map((group, i) => (
            <Reveal
              key={group.group}
              delay={i * 0.05}
              className="group relative border-b border-b-line border-l-4 border-l-accent py-6 pl-5 md:grid md:grid-cols-[240px_1fr_48px] md:items-center md:gap-8 md:py-7"
            >
              <div className="mb-4 md:mb-0">
                <p className="font-mono text-[11px] tracking-wider text-accent-ink uppercase">
                  0{i + 1} /
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold uppercase">{group.group}</h3>
                <p className="mt-1 max-w-[220px] text-[13px] leading-6 text-muted">{group.desc}</p>
              </div>

              <ul className="flex flex-wrap gap-x-9 gap-y-5">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-3">
                    <TechIcon name={item.name} />
                    <div>
                      <p className="text-sm leading-tight font-bold">{item.name}</p>
                      <p className="text-xs text-muted">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <span
                aria-hidden
                className="mt-5 hidden size-10 place-items-center border border-line text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white md:mt-0 md:grid"
              >
                <ArrowUpRight size={18} />
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={0.1}
          className="mt-10 flex flex-col items-center justify-between gap-3 bg-ink px-6 py-4 font-mono text-[11px] tracking-wider text-cream uppercase sm:flex-row"
        >
          <span className="flex items-center gap-2.5">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            Tools change. Curiosity doesn’t.
          </span>
          <span className="flex items-center gap-2.5">
            Build / Learn / Improve / Repeat
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
          </span>
        </Reveal>
      </div>
    </section>
  );
}
