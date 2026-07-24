import { motion } from "framer-motion";
import {
  SiFlutter,
  SiDart,
  SiHtml5,
  SiJavascript,
  SiWordpress,
  SiFirebase,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiAndroidstudio,
} from "react-icons/si";
import { FaCss3Alt, FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import Reveal from "./Reveal";
import { skills } from "../data/content";
import { useAutoScroll } from "../hooks/useAutoScroll";
import "./Skills.css";

// Rendered twice back-to-back so the auto-scroll loop can wrap seamlessly.
const loopedSkills = [...skills, ...skills];

const iconMap = {
  flutter: SiFlutter,
  dart: SiDart,
  html5: SiHtml5,
  css3: FaCss3Alt,
  javascript: SiJavascript,
  wordpress: SiWordpress,
  firebase: SiFirebase,
  aws: FaAws,
  mongodb: SiMongodb,
  git: SiGit,
  github: SiGithub,
  vercel: SiVercel,
  vscode: VscVscode,
  androidstudio: SiAndroidstudio,
};

export default function Skills() {
  const scrollerRef = useAutoScroll({ speed: 0.6 });

  return (
    <section id="skills" className="section skills-section">
      <div className="ambient-glow skills-glow" />

      <div className="container">
        <Reveal className="skills-header">
          <span className="section-tag">My Skills</span>
          <h2 className="section-title">
            Technologies <span className="text-gradient">I work with</span>
          </h2>
          <p className="section-sub skills-sub">
            The technologies, tools, and platforms I use to build modern, scalable, and
            high-performance applications.
          </p>
        </Reveal>

      </div>

      <Reveal delay={0.1} className="skills-scroller-outer">
        <div className="skills-scroller" ref={scrollerRef}>
          {loopedSkills.map((skill, i) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={`${skill.name}-${i}`}
                className="skill-card glass"
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <div className="skill-icon">
                  <Icon />
                </div>
                <h4>{skill.name}</h4>
                <p>{skill.desc}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="skills-fade skills-fade-left" />
        <div className="skills-fade skills-fade-right" />
      </Reveal>
    </section>
  );
}
