import { ArrowUpRight } from "lucide-react";
import { profile, whatsappLink } from "../data/content";
import Reveal from "./Reveal";

const projectEnquiry = whatsappLink("Hi Dinesh, I'd like to discuss a project.");

interface ContactLink {
  label: string;
  href: string;
  external: boolean;
}

const links: ContactLink[] = [
  { label: profile.email, href: `mailto:${profile.email}`, external: false },
  { label: `WhatsApp · +91 ${profile.phone}`, href: projectEnquiry, external: true },
  { label: "LinkedIn", href: profile.linkedin, external: true },
  { label: "GitHub", href: profile.github, external: true },
  { label: "Instagram", href: profile.instagram, external: true },
  { label: "Résumé (PDF)", href: profile.resume, external: true },
].filter((l) => l.href !== "");

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-accent-fill py-16 text-white md:py-20">
      <div className="wrap grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12">
        <Reveal>
          <p className="eyebrow text-white">Have a project in mind?</p>
          <h2
            id="contact-title"
            className="my-5 font-display text-[clamp(3rem,8vw,5.25rem)] leading-[0.96] font-bold uppercase"
          >
            Let’s build
            <br />
            something useful.
          </h2>
          <p className="mb-8 max-w-[490px] text-base leading-8">
            Have a website to launch, a workflow to improve, or an idea you want to bring to life?
            Tell me what you’re working on.
          </p>
          <a
            href={projectEnquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border-cream bg-cream text-ink hover:border-ink hover:bg-ink hover:text-cream"
          >
            Start a conversation <ArrowUpRight size={14} aria-hidden />
          </a>
        </Reveal>

        <Reveal delay={0.1} className="border-t border-white/50 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <p className="font-mono text-[11px] tracking-wider uppercase">Get in touch</p>
          <ul className="mt-2">
            {links.map(({ label, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="group flex min-h-12 items-center justify-between gap-4 border-b border-white/30 py-3 text-sm font-semibold [overflow-wrap:anywhere]"
                >
                  {label}
                  <ArrowUpRight
                    size={16}
                    aria-hidden
                    className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
