function Projects() {
  const projects = [
    {
      number: "01",
      title: "E-commerce Website",
      description:
        "A stylish online shopping experience with modern layouts, product displays and responsive design.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "🛍️",
      link: "",
    },
    {
      number: "02",
      title: "React Portfolio",
      description:
        "My personal developer portfolio showcasing my skills, creative work and frontend development journey.",
      tech: ["React JS", "CSS", "JavaScript"],
      icon: "💻",
      link: "",
    },
    {
      number: "03",
      title: "Jewellery Website",
      description:
        "An elegant jewellery website featuring bridal designs, rings, necklaces, bracelets and watches.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "💎",
      link: "",
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-heading">
        <p className="section-tag">MY CREATIVE WORK</p>
        <h2>
          Featured <span>Projects.</span>
        </h2>
        <p className="projects-subtitle">
          A selection of projects where creativity
          meets code.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-card-top">
              <span className="project-number">
                {project.number}
              </span>
              <span className="project-icon">
                {project.icon}
              </span>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-card-bottom">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project <span>↗</span>
                </a>
              ) : (
                <span className="project-coming-soon">
                  Project link coming soon
                </span>
              )}
              <span className="project-arrow">↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects