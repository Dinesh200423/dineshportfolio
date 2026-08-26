// Central store for real content pulled from the previous site.
// Keeping this separate from components so no facts drift during the redesign.

export const profile = {
  name: "Dinesh Kumar",
  shortName: "DK",
  roles: ["Software Developer", "Content Creator"],
  taglineRoles: "Flutter Developer | Web Developer | AWS Enthusiast",
  heroDescription:
    "I build scalable CRM solutions for businesses, helping automate operations while supporting brands with digital marketing, content creation, and high-converting web experiences.",
  email: "dinesh085596@gmail.com",
  phone: "8939127720",
  whatsapp: "https://wa.me/918939127720",
  location: "Chennai, India",
  github: "https://github.com/Dinesh200423/",
  linkedin: "https://www.linkedin.com/in/dinesh-kumar-developer23/",
  instagram: "https://instagram.com/",
  resume: "/dineshkumar-cv.pdf/Dinesh kumar Resume.pdf",
};

export const aboutStory = {
  title: ["Passionate about", "building things for", "the web."],
  paragraphs: [
    "I'm a Full Stack Developer with a strong focus on building (and occasionally designing) exceptional digital experiences. I enjoy turning complex problems into simple, beautiful and intuitive solutions.",
    "I love writing clean, maintainable code and constantly learning new technologies to stay up to date.",
  ],
  features: [
    {
      title: "Always Learning",
      desc: "I explore new tools and technologies.",
      icon: "arrows",
    },
  ],
  info: [
    { label: "Name", value: "Dinesh Kumar" },
    { label: "Email", value: "dinesh085596@gmail.com" },
    { label: "Location", value: "India" },
    { label: "Specialization", value: "Flutter Developer, Full Stack Web Developer" },
  ],
  stats: [
    { number: "10+", label: "Projects Completed", icon: "folder" },
    { number: "100%", label: "Client Satisfaction", icon: "smile" },
  ],
};

export const skills = [
  { name: "Flutter", icon: "flutter", group: "Frontend", desc: "Cross-platform apps from one codebase." },
  { name: "Dart", icon: "dart", group: "Frontend", desc: "Typed language powering Flutter apps." },
  { name: "HTML", icon: "html5", group: "Frontend", desc: "Semantic structure for the web." },
  { name: "CSS", icon: "css3", group: "Frontend", desc: "Modern layout, motion and styling." },
  { name: "JavaScript", icon: "javascript", group: "Frontend", desc: "Interactive, dynamic web experiences." },
  { name: "WordPress", icon: "wordpress", group: "Platform", desc: "Fast CMS-driven business sites." },
  { name: "Firebase", icon: "firebase", group: "Backend", desc: "Realtime data, auth & hosting." },
  { name: "AWS", icon: "aws", group: "Backend", desc: "Serverless & cloud infrastructure." },
  { name: "MongoDB", icon: "mongodb", group: "Backend", desc: "Flexible NoSQL data storage." },
  { name: "Git", icon: "git", group: "Tools", desc: "Version control for every project." },
  { name: "GitHub", icon: "github", group: "Tools", desc: "Collaboration & code hosting." },
  { name: "Vercel", icon: "vercel", group: "Tools", desc: "Zero-config deploys & previews." },
  { name: "VS Code", icon: "vscode", group: "Tools", desc: "Daily driver code editor." },
  { name: "Android Studio", icon: "androidstudio", group: "Tools", desc: "Native Android build & debug." },
];

export const projects = [
  {
    name: "Sea Miracle E-Commerce Website",
    description:
      "A modern e-commerce website developed for Sea Miracle, a beauty and cosmetics products company. The platform allows customers to browse, search, and purchase skincare and cosmetic products online.",
    image: "/images/seamiralce.png",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "https://seamiracle.in/",
  },
  {
    name: "SR Photography Website",
    description:
      "A premium static website created for a professional photography brand showcasing wedding photography, event coverage, and portfolio services.",
    image: "/images/srportfolio.png",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://sr-photography-site.vercel.app/",
  },
  {
    name: "24K Luxury Salon",
    description:
      "A premium unisex salon website for 24K Luxury Salon in Anna Nagar, showcasing services, online booking, and an elegant brand experience.",
    image: "/images/24k-luxury-thumbnail.png",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "https://24kluxurysalons.com/",
  },
  {
    name: "Rayies — RAY Infra Energy Solutions",
    description:
      "A business website for RAY Infra Energy Solutions promoting rooftop solar installations for homes, businesses, and RWAs with PM Surya Ghar subsidy support.",
    image: "/images/rayies-thumbnail.png",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "https://rayies.in/",
  },
];

export const services = [
  {
    title: "Dynamic Websites",
    desc: "Feature-rich websites with databases, authentication, dashboards, and real-time functionality.",
    tags: ["E-Commerce", "Booking Systems", "Web Apps"],
    video: "/images/dynamic.mp4",
  },
  {
    title: "Static Websites",
    desc: "Fast, SEO-friendly business websites, landing pages, and portfolio websites.",
    tags: ["Landing Pages", "Business Sites", "Portfolio Websites"],
    video: "/images/static.mp4",
  },
  {
    title: "Flutter App Development",
    desc: "Cross-platform mobile applications built using Flutter and Dart with modern UI/UX.",
    tags: ["Flutter", "Android", "iOS"],
    video: "/images/flutter.mp4",
  },
  {
    title: "CRM Software Development",
    desc: "Custom CRM platforms, admin dashboards, automation systems, and business management software.",
    tags: ["CRM", "Automation", "Admin Panel"],
    video: "/images/crm.mp4",
  },
];

// Placeholder — grounded in the real projects above. Replace with your actual
// employment/freelance history whenever you have it written up.
export const experience = [
  {
    role: "Freelance Full-Stack & Flutter Developer",
    company: "Self-employed",
    duration: "2023 — Present",
    description:
      "Designing and building CRM platforms, business websites and Flutter apps for independent clients, including Sea Miracle and SR Photography.",
  },
  {
    role: "Cloud & Serverless Projects",
    company: "Personal / AWS",
    duration: "2023 — Present",
    description:
      "Built serverless tools on AWS (Lambda, API Gateway, DynamoDB, S3) to sharpen cloud architecture and automation skills.",
  },
  {
    role: "Started Web & Flutter Development",
    company: "Self-taught",
    duration: "2022",
    description:
      "Began building projects with HTML, CSS, JavaScript and Flutter/Dart, laying the foundation for full-stack and mobile work.",
  },
];

// Placeholder testimonials grounded in real project names.
// Replace quotes/names with actual client feedback when available.
export const testimonials = [
  {
    quote:
      "Placeholder quote — swap in the real feedback from the Sea Miracle team once received.",
    name: "Client",
    role: "Sea Miracle",
  },
  {
    quote:
      "Placeholder quote — swap in the real feedback from the SR Photography team once received.",
    name: "Client",
    role: "SR Photography",
  },
  {
    quote:
      "Placeholder quote — add a testimonial from your next CRM client here.",
    name: "Client",
    role: "CRM Project",
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#works" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
