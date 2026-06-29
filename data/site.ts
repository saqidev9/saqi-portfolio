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
  email: "saqig885@gmail.com",
  social: {
    github: "https://github.com/saqidev9",
    linkedin: "https://www.linkedin.com/in/saqib-humayun-72a90640a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
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
    { prompt: "who_am_i", response: "saqi — full-stack web developer" },
    { prompt: "stack --list", response: "react.js · node.js · express.js · rest-apis" },
    { prompt: "status", response: "available_for_freelance: true" },
  ],
};

export type TerminalLine = (typeof siteConfig.terminalLines)[number];
