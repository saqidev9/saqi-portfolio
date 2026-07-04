export const siteConfig = {
  name: "Saqi",
  fullTitle: "Saqi — Full-Stack Web Developer",
  role: "Full-Stack Web Developer",
  tagline: "I build fast, full-stack web applications — from idea to deployment.",
  subTagline:
    "React.js & Node.js developer specializing in clean, scalable websites and web apps for startups and small businesses.",
  location: "KPK, Pakistan",
  description:
    "Saqi is a full-stack web developer skilled in React.js, Node.js, Express.js and REST APIs, building production-ready websites and web applications for freelance clients.",
  url: "https://saqi.dev",
  email: "hello@saqi.dev",
  social: {
    github: "https://github.com/saqidev9",
    linkedin: "https://linkedin.com/in/saqidev9",
  },
  nav: [
    { label: "/about", href: "#about" },
    { label: "/skills", href: "#skills" },
    { label: "/services", href: "#services" },
    { label: "/work", href: "#projects" },
    { label: "/experience", href: "#experience" },
    { label: "/contact", href: "#contact" },
  ],
  terminalLines: [
    { prompt: "whoami", response: "saqi — full-stack web developer" },
    { prompt: "stack --list", response: "react.js · node.js · express.js · rest-apis" },
    { prompt: "status", response: "available_for_freelance: true" },
  ],
};

export type TerminalLine = (typeof siteConfig.terminalLines)[number];
