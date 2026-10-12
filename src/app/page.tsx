const projects: { name: string; type: string; description: string; repo: string; image?: string; images?: string[]; alt?: string; mark?: string }[] = [
  {
    name: "DailyFlow",
    type: "Productivity · Personal project",
    repo: "https://github.com/manojr-12/dailyflow",
    description:
      "A calm place to manage daily and recurring tasks, build habits, and keep a private journal. Includes streaks, overdue-task carryover, progress views, and JSON backup and restore.",
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
];

const experience = [
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
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="site-handle" href="#top">manojravichandran</a>
        <nav aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="/manoj-ravichandran-resume.pdf" target="_blank" rel="noreferrer">Resume <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Chennai, India <span className="eyebrow-divider">/</span> Building at Samsung</p>
        <h1>Manoj<br className="mobile-break" /> Ravichandran</h1>
        <p className="hero-copy">
          I&apos;m a software development engineer with 3+ years of experience in distributed systems, microservices, mobile application development, and performance optimization. I also make jokes.
        </p>
        <div className="hero-links">
          <a className="text-link" href="mailto:manojravichandran12@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">A few chapters</p>
          <h2>Experience</h2>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.company}>
              <p className="experience-date">{item.date}</p>
              <div>
                <h3>{item.role} <span>at</span> <a href={item.href} target="_blank" rel="noreferrer">{item.company}<span aria-hidden="true" className="external">↗</span></a></h3>
                <ul className="body-copy experience-points">
                  {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading project-heading">
          <div><p className="eyebrow">Things I&apos;ve made</p><h2>Selected projects</h2></div>
          <p className="heading-note">A mix of useful tools, experiments, and ideas I wanted to bring to life.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.image ? "has-image" : "text-only"}`} key={project.name}>
              {project.images ? <div className="project-image-wrap project-multi-image" aria-label={`${project.name} app screens`}>{project.images.map((image) => <img src={image} alt="" key={image} />)}</div> : project.image ? <div className="project-image-wrap"><img src={project.image} alt={project.alt ?? ""} /></div> : <div className="project-monogram" aria-hidden="true">{project.mark}</div>}
              <div className="project-copy">
                <p className="project-type">{project.type}</p>
                <h3><a className="project-title-link" href={project.repo} target="_blank" rel="noreferrer">{project.name}<span aria-hidden="true">↗</span></a></h3>
                <p className="body-copy">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-index"><span className="eyebrow">A little about me</span></div>
        <div className="about-content">
          <h2>Good software should feel effortless.</h2>
          <p className="body-copy">I enjoy working through the hard parts behind that feeling: reducing unnecessary work, making systems observable, and helping teams ship confidently. My day-to-day tools include JavaScript, C++, Dart, React, Node.js, Redis, and RabbitMQ.</p>
          <p className="body-copy">I studied Information Technology at SSN College of Engineering. Outside of work, I like building small products, solving programming problems, and learning how things fit together.</p>
        </div>
      </section>

      <footer className="footer">
        <a className="footer-name" href="#top">Manoj Ravichandran</a>
        <p>Made in Chennai <span>·</span> © 2026</p>
        <a href="mailto:manojravichandran12@gmail.com">Say hello <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  );
}
