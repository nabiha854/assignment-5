function Journey() {
  const milestones = [
    {
      number: "01",
      title: "The Beginning",
      description:
        "Started exploring web development and learning how websites are created.",
      icon: "🌱",
      tag: "START",
    },
    {
      number: "02",
      title: "Learning the Basics",
      description:
        "Practiced HTML and CSS to build structured pages and attractive layouts.",
      icon: "🎨",
      tag: "FOUNDATION",
    },
    {
      number: "03",
      title: "Adding Interactivity",
      description:
        "Explored JavaScript to make websites interactive and dynamic.",
      icon: "⚡",
      tag: "DEVELOPMENT",
    },
    {
      number: "04",
      title: "Exploring React",
      description:
        "Started building reusable components and creating projects with React.",
      icon: "⚛️",
      tag: "NEXT LEVEL",
    },
    {
      number: "05",
      title: "Building My Portfolio",
      description:
        "Bringing my skills together to create a personal portfolio and showcase my work.",
      icon: "🚀",
      tag: "MY PRESENT",
    },
  ]

  return (
    <section id="journey" className="journey-section">
      <div className="journey-heading">
        <p className="section-tag">THE STORY SO FAR</p>

        <h2>
          My Developer <span>Journey.</span>
        </h2>

        <p>
          Every project teaches me something new.
          Here is how I am growing as a developer.
        </p>
      </div>

      <div className="journey-list">
        {milestones.map((item, index) => (
          <article
            className="journey-card"
            key={item.number}
          >
            <div className="journey-marker">
              <span>{item.icon}</span>
            </div>

            <div className="journey-content">
              <div className="journey-meta">
                <span>{item.tag}</span>
                <span>{item.number} / 05</span>
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="journey-progress">
                <span
                  style={{
                    width: `${((index + 1) / milestones.length) * 100}%`,
                  }}
                ></span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Journey