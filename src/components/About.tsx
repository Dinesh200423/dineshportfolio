import { principles } from "../data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-16 md:py-24">
      <div className="wrap grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">A little about me</p>
          <h2
            id="about-title"
            className="mt-4 font-display text-[clamp(2.6rem,5.5vw,3.9rem)] leading-[1.02] font-semibold uppercase"
          >
            Curious mind.
            <br />
            <span className="text-accent">Practical builder.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="text-[15px] leading-[1.95] text-body">
          <p>
            I’m Dinesh — a software developer and digital creator focused on solving real business
            problems. I enjoy turning complex workflows into useful products, from CRM systems and
            web applications to digital experiences that help brands communicate clearly.
          </p>
          <p className="mt-5">
            My approach is simple: understand the problem, build with purpose, and keep improving. I
            care about clean interfaces, reliable functionality, and work that creates measurable
            value.
          </p>

          <ol className="mt-9 grid grid-cols-3 gap-4 border-t border-line pt-5">
            {principles.map((p, i) => (
              <li key={p}>
                <span className="block font-display text-[26px] leading-none text-accent">0{i + 1}</span>
                <span className="mt-2 block text-[11px] leading-tight font-extrabold tracking-wide text-ink uppercase">
                  {p}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
