function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">
        MY<span>PORTFOLIO</span>
        <span className="logo-dot">.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact" className="nav-contact">
          Contact ↗
        </a>
      </div>
    </nav>
  )
}

export default Navbar