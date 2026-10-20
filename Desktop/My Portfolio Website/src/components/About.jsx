function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-heading">
        <p className="section-tag">GET TO KNOW ME</p>
        <h2>
          About <span>Me.</span>
        </h2>
      </div>

      <div className="about-container">

        <div className="about-visual">
          <div className="about-glow"></div>

          <div className="about-card">
            <div className="about-card-top">
              <span className="about-dot"></span>
              <span className="about-dot"></span>
              <span className="about-dot"></span>
              <span className="about-card-label">ABOUT_NABIHA</span>
            </div>

            <div className="about-avatar">NM</div>

            <h3>Nabiha Mirza</h3>
            <p className="about-role">Frontend Developer</p>

            <div className="about-divider"></div>

            <div className="about-fact">
              <span>Focus</span>
              <strong>Web Development</strong>
            </div>

            <div className="about-fact">
              <span>Technology</span>
              <strong>React & JavaScript</strong>
            </div>

            <div className="about-fact">
              <span>Mindset</span>
              <strong>Learn & Create</strong>
            </div>
          </div>
        </div>

        <div className="about-content">
          <p className="about-greeting">
            Hello there! 👋
          </p>

          <h3>
            I love building
            <span> digital experiences.</span>
          </h3>

          <p>
            Hi! I'm Nabiha Mirza, a developer passionate
            about creating modern, responsive and
            user-friendly websites.
          </p>

          <p>
            I work with HTML, CSS, JavaScript and React JS
            to turn creative ideas into engaging web
            experiences. I'm always learning new skills
            and looking for opportunities to improve
            my development abilities.
          </p>

          <div className="about-highlights">
            <div className="about-highlight">
              <span className="highlight-icon">✦</span>
              <div>
                <h4>Creative Design</h4>
                <p>Clean and modern interfaces</p>
              </div>
            </div>

            <div className="about-highlight">
              <span className="highlight-icon">⌘</span>
              <div>
                <h4>Responsive Websites</h4>
                <p>Layouts for different screen sizes</p>
              </div>
            </div>
          </div>

          <a href="#contact" className="about-button">
            Let's Connect <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default About