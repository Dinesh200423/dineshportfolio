import { ArrowUp } from "lucide-react";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-ink py-6 font-mono text-[11px] text-cream uppercase">
      <div className="wrap flex flex-wrap items-center justify-between gap-4">
        <span>
          {profile.shortName}
          <span className="text-accent-glow">—</span> {profile.name}
        </span>
        <span>
          Made with intent <span className="text-accent-glow">●</span> © {new Date().getFullYear()}
        </span>
        <a href="#home" className="inline-flex min-h-11 items-center gap-1.5 hover:text-accent-glow">
          Back to top <ArrowUp size={13} aria-hidden />
        </a>
      </div>
    </footer>
  );
}
