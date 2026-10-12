import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/content";

const ease = [0.16, 1, 0.3, 1] as const;

// Short, small offsets so the content is readable almost immediately.
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="wrap grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-20"
    >
      <div>
        <motion.p className="eyebrow" {...enter(0)}>
          Developer · Digital creator · India
        </motion.p>

        <motion.h1
          id="hero-title"
          className="my-6 font-display text-[clamp(3.5rem,15vw,7rem)] leading-[0.92] font-bold tracking-[-0.02em] uppercase"
          {...enter(0.05)}
        >
          Build with
          <br />
          <span className="text-accent">intent.</span>
        </motion.h1>

        <motion.p
          className="mb-5 text-[clamp(1.2rem,2.5vw,1.85rem)] leading-tight font-extrabold uppercase"
          {...enter(0.1)}
        >
          Software developer <span className="text-accent">/</span>
          <br />
          Digital creator
        </motion.p>

        <motion.p className="mb-8 max-w-[540px] text-[15px] leading-[1.9] text-body" {...enter(0.15)}>
          I build scalable CRM solutions and thoughtful web experiences that help businesses work
          smarter — combining software development, automation, and content that moves brands
          forward.
        </motion.p>

        <motion.div className="flex flex-wrap gap-3" {...enter(0.2)}>
          <a href="#work" className="btn border-accent-fill bg-accent-fill text-white">
            Explore my work <ArrowUpRight size={14} aria-hidden />
          </a>
          <a href="#contact" className="btn border-ink hover:bg-ink hover:text-cream">
            Let’s connect
          </a>
        </motion.div>
      </div>

      <motion.figure
        className="group relative mx-auto w-full max-w-[460px] pr-6 pb-6 lg:max-w-none"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
      >
        <div aria-hidden className="absolute inset-0 top-6 left-6 bg-accent" />
        <div className="relative overflow-hidden border border-ink">
          <img
            src={profile.portrait}
            alt="Dinesh Kumar working at his laptop"
            width={1400}
            height={933}
            fetchPriority="high"
            className="aspect-square w-full object-cover object-[64%_center] grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-[60%]"
          />
        </div>
        <figcaption className="absolute right-0 bottom-0 bg-ink px-4 py-3 font-mono text-[10px] text-cream uppercase">
          {profile.name}
          <span className="mt-1 block text-accent-glow">Developer &amp; digital creator</span>
        </figcaption>
      </motion.figure>
    </section>
  );
}
