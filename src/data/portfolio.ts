export type Project = {
  name: string;
  type: string;
  description: string;
  repo: string;
  live?: string;
  image?: string;
  images?: string[];
  alt?: string;
  mark?: string;
};

export type Experience = {
  date: string;
  role: string;
  company: string;
  href: string;
  details: string[];
};

export type PortfolioContent = {
  heroLocation: string;
  heroCompany: string;
  heroDescription: string;
  contactEmail: string;
  experienceLabel: string;
  experienceTitle: string;
  experience: Experience[];
  projectsLabel: string;
  projectsTitle: string;
  projectsNote: string;
  projects: Project[];
  aboutLabel: string;
  aboutHeading: string;
  aboutBody: string;
  musicPlaylistUrl: string;
};

export const defaultPortfolio: PortfolioContent = {
  heroLocation: "Chennai, India",
  heroCompany: "Building at Samsung",
  heroDescription:
    "I'm a software development engineer with 3+ years of experience in distributed systems, microservices, mobile application development, and performance optimization. I also make jokes.",
  contactEmail: "manojravichandran12@gmail.com",
  experienceLabel: "A few chapters",
  experienceTitle: "Experience",
  experience: [
    {
      date: "2023 — Now",
      role: "Software Development Engineer",
      company: "Samsung",
      href: "https://www.samsung.com/",
      details: [
        "Built an automated app performance analysis system to capture page, flow, and rendering metrics, detect regressions, generate AI-assisted insights, and create Jira tickets for critical issues; contributed to 50% reduction in screen lag and enabled release-over-release comparisons.",
        "Optimized critical APIs, reducing response times by 20% and improving application performance.",
        "Built an in-memory API caching layer for the shop app with request deduplication and concurrent in-flight request coalescing, reducing redundant network calls and improving app responsiveness.",
        "Led Samsung Shop app rollouts across USA, Japan, Turkey, Canada, Australia, Saudi Arabia, and Israel, coordinating market-specific localization and release readiness with multi language support.",
      ],
    },
    {
      date: "2023",
      role: "Software Developer Intern",
      company: "Gallabox",
      href: "https://gallabox.com/",
      details: [
        "Developed a WhatsApp-based appointment booking and queue management system with backend services in Node.js, Redis and RabbitMQ asynchronous job processing and supporting bursty traffic",
      ],
    },
    {
      date: "2022",
      role: "Software Developer Intern",
      company: "Google",
      href: "https://about.google/",
      details: [
        "Developed a health monitoring solution for private cloud infrastructure, enabling diagnostics and detection of infrastructure failures.",
        "Built Angular dashboards to visualize the metrics.",
      ],
    },
  ],
  projectsLabel: "Things I've made",
  projectsTitle: "Selected projects",
  projectsNote: "A mix of useful tools, experiments, and ideas I wanted to bring to life.",
  projects: [
    {
      name: "DailyFlow",
      type: "Productivity · Personal project",
      repo: "https://github.com/manojr-12/dailyflow",
      live: "https://daily-tracker-eight-dusky.vercel.app/",
      description:
        "Built a productivity app for managing daily and recurring tasks, tracking habits and completion streaks, and writing journal entries; added overdue task carryover, progress visualizations, and JSON backup and restore with protected journal entries.",
      image: "/portfolio/dailyflow.png",
      alt: "DailyFlow productivity app interface",
    },
    {
      name: "CricInfo for macOS",
      type: "macOS · Personal project",
      repo: "https://github.com/manojr-12/cric_info",
      description:
        "A menu bar companion for live cricket scores, match statistics, and player data, powered by custom APIs and carefully tuned refresh logic.",
      image: "/portfolio/widget-preview.png",
      alt: "Live cricket score widget preview",
    },
    {
      name: "BitGuard",
      type: "Security · Personal project",
      repo: "https://github.com/manojr-12/BitGuard",
      mark: "BG",
      description:
        "An encrypted credential vault designed around biometric authentication and secure access controls.",
    },
    {
      name: "Xpense",
      type: "Mobile · Personal project",
      repo: "https://github.com/manojr-12/XpenseProject",
      description:
        "A cross-platform expense tracker built with React Native and Firebase, with real-time data synchronization.",
      images: ["/portfolio/xpense_2.png", "/portfolio/xpense_1.png"],
      alt: "Xpense mobile app screens",
    },
    {
      name: "Link prediction in social networks",
      type: "Machine learning · Academic project",
      repo: "https://github.com/manojr-12/link_prediction",
      description:
        "Explored how machine learning models can predict new connections in evolving social graphs.",
      image: "/portfolio/link_p.png",
      alt: "Link prediction project visualization",
    },
  ],
  aboutLabel: "A little about me",
  aboutHeading: "Hustle till my last breath",
  aboutBody:
    "I studied IT at SSN College of Engineering and like figuring out tricky problems with simple solutions. When I’m not working, you’ll probably find me at the gym, planning a trip, swimming, gaming, listening to music, or reading. I’m currently reading The Midnight Library. I run on coffee, love watching F1 and cheering for Max, and try to stay disciplined.",
  musicPlaylistUrl:
    "https://open.spotify.com/playlist/60ht3itAzPwYkL88GaEIE4?si=tfha2yOGSE2x4ovXNQc7SA",
};
