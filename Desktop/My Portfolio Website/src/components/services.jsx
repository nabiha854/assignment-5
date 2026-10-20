function Services() {
  const services = [
    {
      number: "01",
      icon: "✦",
      title: "Frontend Development",
      description:
        "Modern and interactive websites built with HTML, CSS, JavaScript and React.",
      tags: ["React JS", "JavaScript"],
    },
    {
      number: "02",
      icon: "◈",
      title: "Responsive Web Design",
      description:
        "Clean layouts that adapt smoothly to mobile, tablet and desktop screens.",
      tags: ["CSS3", "Responsive UI"],
    },
    {
      number: "03",
      icon: "⌘",
      title: "Website UI Development",
      description:
        "Attractive user interfaces with thoughtful layouts, smooth animations and clear navigation.",
      tags: ["UI Design", "Animations"],
    },
    {
      number: "04",
      icon: "⚡",
      title: "Website Improvements",
      description:
        "Enhancing existing pages with better layouts, interactive elements and polished styling.",
      tags: ["CSS", "Optimization"],
    },
  ]

  return (
    <section id="services" className="services-section">
      <div className="services-heading">
        <p className="section-tag">WHAT I CAN DO</p>

        <h2>
          My <span>Services.</span>
        </h2>

        <p>
          Creative solutions for building modern
          and user-friendly web experiences.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-card-top">
              <span className="service-icon">
                {service.icon}
              </span>

              <span className="service-number">
                {service.number}
              </span>
            </div>

            <h3>{service.title}</h3>

            <p className="service-description">
              {service.description}
            </p>

            <div className="service-tags">
              {service.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="service-bottom">
              <span>Explore service</span>
              <span className="service-arrow">↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services