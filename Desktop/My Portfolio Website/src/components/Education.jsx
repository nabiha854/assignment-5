function Education() {
  const journey = [
    {
      number: "01",
      title: "Education",
      place: "My Academic Journey",
      period: "Learning in Progress",
      description:
        "Building my knowledge, developing new skills and working towards my future goals.",
      icon: "🎓",
    },
    {
      number: "02",
      title: "Web Development",
      place: "Frontend Development",
      period: "Continuous Learning",
      description:
        "Learning HTML, CSS, JavaScript and React to create modern and responsive websites.",
      icon: "💻",
    },
    {
      number: "03",
      title: "Practical Projects",
      place: "Learning by Building",
      period: "Growing Every Day",
      description:
        "Applying what I learn by building websites, improving my coding and exploring new ideas.",
      icon: "🚀",
    },
  ]

  return (
    <section id="education" className="education-section">
      <div className="education-heading">
        <p className="section-tag">MY LEARNING JOURNEY</p>

        <h2>
          Education & <span>Growth.</span>
        </h2>

        <p>
          Every new skill is another step towards
          becoming a better developer.
        </p>
      </div>

      <div className="education-timeline">
        {journey.map((item) => (
          <article className="education-card" key={item.number}>
            <div className="education-timeline-icon">
              {item.icon}
            </div>

            <div className="education-card-content">
              <div className="education-card-top">
                <span>{item.period}</span>
                <span>{item.number}</span>
              </div>

              <h3>{item.title}</h3>
              <h4>{item.place}</h4>

              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education