import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadProps {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  id?: string;
  tone?: "light" | "dark";
}

export default function SectionHead({ eyebrow, title, intro, id, tone = "light" }: SectionHeadProps) {
  return (
    <Reveal className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between md:gap-10">
      <div>
        <p className={`eyebrow ${tone === "dark" ? "text-accent-glow" : ""}`}>{eyebrow}</p>
        <h2
          id={id}
          className="mt-3 font-display text-[clamp(2.5rem,6vw,4rem)] leading-none font-semibold uppercase"
        >
          {title}
        </h2>
      </div>
      {intro && (
        <p className={`max-w-sm text-sm leading-7 ${tone === "dark" ? "text-ash" : "text-muted"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
