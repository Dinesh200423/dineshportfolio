import { highlights } from "../data/content";

export default function Highlights() {
  return (
    <div className="wrap">
      <ul className="grid bg-ink text-cream md:grid-cols-3" aria-label="What I do">
        {highlights.map(({ label, left, right }, i) => (
          <li
            key={label}
            className="border-b border-rule px-6 py-5 last:border-0 md:border-r md:border-b-0 md:py-6"
          >
            <span className="mb-2 block font-mono text-[10px] tracking-wider text-ash uppercase">
              0{i + 1} / {label}
            </span>
            <strong className="font-display text-[22px] font-medium uppercase md:text-lg lg:text-[22px]">
              {left} <span className="text-accent">+</span> {right}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
