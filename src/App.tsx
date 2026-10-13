import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Projects from "./components/Projects";
import About from "./components/About";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    // "user" honours prefers-reduced-motion: transforms are dropped, fades stay.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only z-[60] bg-ink px-4 py-3 text-sm font-bold text-cream focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Highlights />
        <About />
        <TechStack />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
