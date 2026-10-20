function Skills() {
  const skills = [
    { name: "HTML5", icon: "🌐", level: "Markup & Structure" },
    { name: "CSS3", icon: "🎨", level: "Styling & Responsive Design" },
    { name: "JavaScript", icon: "⚡", level: "Programming & Interactivity" },
    { name: "React JS", icon: "⚛️", level: "Component-Based UI" },
    { name: "Bootstrap", icon: "🧩", level: "UI Framework" },
    { name: "Git & GitHub", icon: "🔗", level: "Version Control" },
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="skills-heading">
        <p className="section-tag">MY TECHNICAL TOOLKIT</p>
        <h2>
          Skills & <span>Technologies.</span>
        </h2>
        <p>
          The tools I use to turn ideas into interactive
          digital experiences.
        </p>
      </div>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <article className="skill-card" key={skill.name}>
            <div className="skill-card-top">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-number">
                0{index + 1}
              </span>
            </div>

            <h3>{skill.name}</h3>
            <p>{skill.level}</p>

            <div className="skill-line">
              <span></span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills