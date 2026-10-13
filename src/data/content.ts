// Central store for real content. Components read from here so no facts drift
// between sections — edit details in this one place.

import portrait from "../assets/dinesh-portrait.webp";
import seaMiracle from "../assets/project-sea-miracle.webp";
import srPhotography from "../assets/project-sr-photography.webp";
import luxurySalon from "../assets/project-24k-luxury.webp";
import rayies from "../assets/project-rayies.webp";
import mfhCrm from "../assets/project-mfh-crm.webp";

export const profile = {
  name: "Dinesh Kumar",
  shortName: "DK",
  email: "dinesh085596@gmail.com",
  phone: "8939127720",
  whatsapp: "https://wa.me/918939127720",
  location: "Chennai, India",
  github: "https://github.com/Dinesh200423/",
  linkedin: "https://www.linkedin.com/in/dinesh-kumar-developer23/",
  // Leave empty until you have a real profile URL — the link is hidden while blank.
  instagram: "",
  resume: "/dineshkumar-cv.pdf/Dinesh kumar Resume.pdf",
  portrait,
} as const;

export const whatsappLink = (message: string) =>
  `${profile.whatsapp}?text=${encodeURIComponent(message)}`;

export interface NavLink {
  label: string;
  id: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "work" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

export const highlights = [
  { label: "What I build", left: "Websites", right: "Web apps" },
  { label: "What I improve", left: "CRM", right: "Automation" },
  { label: "What I create", left: "Content", right: "Growth" },
];

export interface Project {
  name: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Live URL. Without one, the card points visitors to the contact section instead. */
  link?: string;
  /** Spans the full grid width as the lead card. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "MFH_CRM",
    category: "CRM · Business automation",
    description:
      "A CRM that brings leads, WhatsApp enquiries, follow-ups, bookings, quotations, invoices, and reports into one dashboard — with a mobile view for replying to customers on the go.",
    image: mfhCrm,
    imageAlt: "MFH_CRM dashboard on a laptop showing leads, lead sources and follow-ups, beside a phone with a WhatsApp conversation",
    featured: true,
  },
  {
    name: "Sea Miracle",
    category: "E-commerce · Beauty",
    description:
      "An e-commerce website for a beauty and cosmetics brand, letting customers browse, search, and buy skincare products online.",
    image: seaMiracle,
    imageAlt: "Screenshot of the Sea Miracle website",
    link: "https://seamiracle.in/",
  },
  {
    name: "24K Luxury Salon",
    category: "Brand website · Booking",
    description:
      "A premium unisex salon website for 24K Luxury Salon in Anna Nagar, showcasing services, online booking, and an elegant brand experience.",
    image: luxurySalon,
    imageAlt: "Screenshot of the 24K Luxury Salon website",
    link: "https://24kluxurysalons.com/",
  },
  {
    name: "Rayies — RAY Infra Energy",
    category: "Business website · Solar",
    description:
      "A business website promoting rooftop solar installations for homes, businesses, and RWAs, with PM Surya Ghar subsidy support.",
    image: rayies,
    imageAlt: "Screenshot of the Rayies (RAY Infra Energy Solutions) website",
    link: "https://rayies.in/",
  },
  {
    name: "SR Photography",
    category: "Portfolio website · Photography",
    description:
      "A premium website for a photography brand, presenting wedding photography, event coverage, and portfolio services.",
    image: srPhotography,
    imageAlt: "Screenshot of the SR Photography website",
    link: "https://sr-photography-site.vercel.app/",
  },
];

export const principles = ["Think clearly", "Build usefully", "Improve always"];

export const services = [
  {
    title: "Web Development",
    desc: "Responsive websites and web applications.",
  },
  {
    title: "CRM & Workflow Automation",
    desc: "Business process automation, lead management, and operational workflows.",
  },
  {
    title: "UI/UX & Digital Experiences",
    desc: "User-friendly interfaces, structured layouts, and intuitive user journeys.",
  },
  {
    title: "Content & Digital Marketing",
    desc: "Creative content, social media communication, and brand growth.",
  },
];

export const techStack = [
  { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "TypeScript"] },
  { group: "App development", items: ["Flutter", "Dart"] },
  { group: "Backend & database", items: ["Supabase", "Firebase", "PostgreSQL", "MongoDB"] },
  { group: "Cloud & deployment", items: ["AWS", "Vercel", "GitHub"] },
  { group: "Digital tools", items: ["WordPress", "SEO", "Content creation"] },
];
