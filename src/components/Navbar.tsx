import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur-sm">
      <div className="wrap flex h-[70px] items-center justify-between gap-6 lg:h-20">
        <a href="#home" className="font-display text-xl font-bold whitespace-nowrap sm:text-[23px]">
          {profile.shortName}
          <span className="text-accent">—</span> {profile.name.toUpperCase()}
        </a>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex gap-7 text-xs font-extrabold tracking-wide uppercase">
            {navLinks.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className="relative py-2 transition-colors hover:text-accent-ink aria-[current]:text-accent-ink"
                >
                  {label}
                  {active === id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-accent"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn hidden border-accent-fill bg-accent-fill text-white sm:inline-flex">
            Let’s talk <ArrowUpRight size={14} aria-hidden />
          </a>
          <button
            type="button"
            className="grid size-12 place-items-center border border-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full border-b border-line bg-cream lg:hidden"
          >
            <ul className="wrap py-3">
              {navLinks.map(({ label, id }, i) => (
                <li key={id} className="border-b border-line last:border-0">
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-4 font-display text-2xl uppercase"
                  >
                    <span className={active === id ? "text-accent" : ""}>{label}</span>
                    <span className="font-mono text-[11px] text-muted">0{i + 1}</span>
                  </a>
                </li>
              ))}
              <li className="pt-4 pb-2 sm:hidden">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn w-full justify-center border-accent-fill bg-accent-fill text-white"
                >
                  Let’s talk <ArrowUpRight size={14} aria-hidden />
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
