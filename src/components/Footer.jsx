import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";
import { profile } from "../data/content";
import "./Footer.css";

const links = [
  { icon: FaGithub, href: profile.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: profile.linkedin, label: "LinkedIn" },
  { icon: FaInstagram, href: profile.instagram, label: "Instagram" },
  { icon: FaEnvelope, href: `mailto:${profile.email}`, label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>
            {profile.shortName}<span className="crimson">-</span> {profile.name}
          </h3>
          <p>{profile.taglineRoles}</p>
        </div>
        <div className="footer-links">
          {links.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {year} {profile.name}. Built with passion in Chennai, India.</p>
      </div>
    </footer>
  );
}
