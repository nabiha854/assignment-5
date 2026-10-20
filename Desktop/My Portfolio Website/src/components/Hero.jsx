function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-image">
        <div className="image-glow"></div>

        <img
          src="/profile.png"
          alt="Nabiha Mirza"
          className="profile-pic"
        />

        <div className="floating-badge">
          <span className="badge-dot"></span>
          Creative Developer
        </div>
      </div>

      <div className="hero-content">

        <p className="hero-tag">
          <span className="tag-line"></span>
          WELCOME TO MY PORTFOLIO
        </p>

        <p className="hero-intro">Hello, I'm</p>

        <h1 className="animated-name">
  Nabiha <span>Mirza.</span>
</h1>

        <h2>
          Frontend Developer
          <span className="typing-cursor">|</span>
        </h2>

        <p className="hero-description">
          I build modern, responsive and visually engaging
          websites using HTML, CSS, JavaScript and React JS.
          I enjoy turning creative ideas into meaningful
          digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore My Work <span>↗</span>
          </a>

          <a href="#contact" className="secondary-btn">
            Let's Talk <span>→</span>
          </a>
        </div>

        <div className="social-buttons">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className="hero-tech">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>React JS</span>
        </div>

        <div className="developer-card">
          <div className="card-top">
            <span className="status-dot"></span>
            <span>DEVELOPER PROFILE</span>
          </div>

          <h3>Turning Ideas Into Reality ✨</h3>

          <p>
            Creative thinking, clean code and
            user-friendly web experiences.
          </p>

          <div className="code-preview">
            <div>
              <span className="code-purple">const</span>{" "}
              <span className="code-blue">developer</span> = {"{"}
            </div>
            <div>
              &nbsp;&nbsp;name: <span className="code-green">"Nabiha"</span>,
            </div>
            <div>
              &nbsp;&nbsp;skills: <span className="code-orange">["HTML", "CSS", "JS", "React"]</span>,
            </div>
            <div>
              &nbsp;&nbsp;creative: <span className="code-green">true</span>
            </div>
            <div>{"}"}</div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero