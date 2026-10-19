import { getPortfolioContent } from "../sanity/lib/client";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getPortfolioContent();
  const aboutSegments = content.aboutBody.split(/(music|The Midnight Library)/gi);
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="site-handle" href="#top">manojravichandran</a>
        <nav aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href={content.resumeUrl || "/manoj-ravichandran-resume.pdf"} target="_blank" rel="noreferrer">Resume <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">{content.heroLocation} <span className="eyebrow-divider">/</span> {content.heroCompany}</p>
        <h1>Manoj<br className="mobile-break" /> Ravichandran</h1>
        <p className="hero-copy">
          {content.heroDescription}
        </p>
        <div className="hero-links">
          <a className="text-link" href={`mailto:${content.contactEmail}`}>Get in touch <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow accent-text">{content.experienceLabel}</p>
          <h2>{content.experienceTitle}</h2>
        </div>
        <div className="experience-list">
          {content.experience.map((item) => (
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
          <div><p className="eyebrow accent-text">{content.projectsLabel}</p><h2>{content.projectsTitle}</h2></div>
          <p className="heading-note">{content.projectsNote}</p>
        </div>
        <div className="project-grid">
          {content.projects.map((project) => (
            <article className={`project-card ${project.image ? "has-image" : "text-only"}`} key={project.name}>
              {project.images ? <div className="project-image-wrap project-multi-image" aria-label={`${project.name} app screens`}>{project.images.map((image) => <img src={image} alt="" key={image} />)}</div> : project.image ? <div className={`project-image-wrap ${project.imageFit === "contain" ? "project-image-contain" : ""}`}><img src={project.image} alt={project.alt ?? ""} /></div> : <div className="project-monogram" aria-hidden="true">{project.mark}</div>}
              <div className="project-copy">
                <p className="project-type">{project.type}</p>
                <h3><a className="project-title-link" href={project.repo} target="_blank" rel="noreferrer">{project.name}<span aria-hidden="true">↗</span></a></h3>
                <p className="body-copy">{project.description}</p>
                {project.live && <a className="text-link" href={project.live} target="_blank" rel="noreferrer">Live site <span aria-hidden="true">↗</span></a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-index"><span className="eyebrow accent-text">{content.aboutLabel}</span></div>
        <div className="about-content">
          <h2>{content.aboutHeading}</h2>
          <p className="body-copy">{aboutSegments.map((segment, index) => {
            if (segment.toLowerCase() === "music" && content.musicPlaylistUrl) {
              return <a className="bio-link" href={content.musicPlaylistUrl} target="_blank" rel="noreferrer" key={index}>{segment}</a>;
            }
            if (segment.toLowerCase() === "the midnight library") {
              return <em key={index}>{segment}</em>;
            }
            return segment;
          })}</p>
        </div>
      </section>

      <footer className="footer">
        <a className="footer-name" href="#top">Manoj Ravichandran</a>
        <p>Made in Chennai <span>·</span> © 2026</p>
        <a href={`mailto:${content.contactEmail}`}>Say hello <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  );
}
