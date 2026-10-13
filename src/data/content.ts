// Central store for real content. Components read from here so no facts drift
// between sections — edit details in this one place.

import portrait from "../assets/dinesh-portrait.webp";

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
  /** Live URL. Without one, the card points visitors to the contact section instead. */
  link?: string;
  /** Art direction for the card's poster panel — see Projects.tsx. */
  poster: "crm" | "peach" | "gold" | "sun" | "navy";
}

export const projects: Project[] = [
  {
    name: "MFH_CRM",
    category: "CRM · Business automation",
    description:
      "A CRM that brings leads, WhatsApp enquiries, follow-ups, bookings, quotations, invoices, and reports into one dashboard — with a mobile view for replying to customers on the go.",
    poster: "crm",
  },
  {
    name: "Sea Miracle",
    category: "E-commerce · Beauty",
    description:
      "An e-commerce website for a beauty and cosmetics brand, letting customers browse, search, and buy skincare products online.",
    poster: "peach",
    link: "https://seamiracle.in/",
  },
  {
    name: "24K Luxury Salon",
    category: "Brand website · Booking",
    description:
      "A premium unisex salon website for 24K Luxury Salon in Anna Nagar, showcasing services, online booking, and an elegant brand experience.",
    poster: "gold",
    link: "https://24kluxurysalons.com/",
  },
  {
    name: "Rayies",
    category: "Solar · Business website",
    description:
      "A business website for RAY Infra Energy Solutions, promoting rooftop solar for homes, businesses, and RWAs with PM Surya Ghar subsidy support.",
    poster: "sun",
    link: "https://rayies.in/",
  },
  {
    name: "SR Photography",
    category: "Portfolio website · Photography",
    description:
      "A premium website for a photography brand, presenting wedding photography, event coverage, and portfolio services.",
    poster: "navy",
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

export interface TechItem {
  name: string;
  desc: string;
}

export interface TechGroup {
  group: string;
  desc: string;
  items: TechItem[];
}

export const techStack: TechGroup[] = [
  {
    group: "Frontend",
    desc: "Building responsive and modern user interfaces.",
    items: [
      { name: "HTML", desc: "Markup" },
      { name: "CSS", desc: "Styling" },
      { name: "JavaScript", desc: "Interactivity" },
      { name: "React", desc: "Library" },
      { name: "TypeScript", desc: "Type safety" },
    ],
  },
  {
    group: "App development",
    desc: "Cross-platform mobile application development.",
    items: [
      { name: "Flutter", desc: "Mobile framework" },
      { name: "Dart", desc: "Programming language" },
    ],
  },
  {
    group: "Backend & database",
    desc: "Reliable backend services and data management.",
    items: [
      { name: "Supabase", desc: "Backend platform" },
      { name: "Firebase", desc: "Backend services" },
      { name: "PostgreSQL", desc: "Relational database" },
      { name: "MongoDB", desc: "NoSQL database" },
    ],
  },
  {
    group: "Cloud & deployment",
    desc: "Scalable infrastructure and seamless deployment.",
    items: [
      { name: "AWS", desc: "Cloud platform" },
      { name: "Vercel", desc: "Hosting platform" },
      { name: "GitHub", desc: "Version control" },
    ],
  },
  {
    group: "Digital & creative",
    desc: "Tools for content, SEO and brand growth.",
    items: [
      { name: "WordPress", desc: "CMS platform" },
      { name: "SEO", desc: "Search optimization" },
      { name: "Content creation", desc: "Writing & design" },
    ],
  },
];
