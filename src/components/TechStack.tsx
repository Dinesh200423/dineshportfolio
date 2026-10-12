import { techStack } from "../data/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function TechStack() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-16 md:py-24">
      <div className="wrap">
        <SectionHead
          id="skills-title"
          eyebrow="Tools I work with"
          title="My tech stack."
          intro="A practical toolkit across frontend development, app development, cloud services, databases, and digital platforms."
        />

        <div className="border-t border-line">
          {techStack.map(({ group, items }, i) => (
            <Reveal
              key={group}
              delay={i * 0.04}
              className="grid gap-3 border-b border-line py-5 md:grid-cols-[220px_1fr] md:items-center md:gap-6"
            >
              <h3 className="font-mono text-[11px] font-normal tracking-wider text-accent-ink uppercase">
                0{i + 1} / {group}
              </h3>
              <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
                {items.map((item) => (
                  <li
                    key={item}
                    className="border border-line bg-paper px-4 py-3 text-[13px] font-bold transition-colors hover:border-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
