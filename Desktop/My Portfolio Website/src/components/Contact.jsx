function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <p className="section-tag">LET'S CONNECT</p>

        <h2>
          Let's Work <span>Together.</span>
        </h2>

        <p className="contact-description">
          Have an idea or a project in mind? I'd love to
          hear from you. Let's turn your ideas into
          something amazing!
        </p>

        <div className="contact-email-card">
          <div className="contact-email-icon">✉</div>

          <div className="contact-email-info">
            <span>EMAIL ME AT</span>
            <a href="mailto:nabihamirza876@gmail.com">
              nabihamirza876@gmail.com
            </a>
          </div>
        </div>

        <a
          className="contact-btn"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=nabihamirza876@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Let's Talk <span>↗</span>
        </a>

        <div className="contact-socials">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact