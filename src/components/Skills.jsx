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
import "./Skills.css";

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

        <div className="skills-grid">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon];
            return (
              <Reveal key={skill.name} delay={(i % 7) * 0.06}>
                <motion.div
                  className="skill-card glass"
                  style={{ animationDelay: `${(i % 5) * 0.6}s` }}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <div className="skill-icon">
                    <Icon />
                  </div>
                  <h4>{skill.name}</h4>
                  <p>{skill.desc}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
