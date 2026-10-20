import { useEffect } from 'react'
import Education from './components/Education'
import Services from './components/services'
import Journey from './components/Journey'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {

  useEffect(() => {
    
  const elements = document.querySelectorAll(
    '.about-section, .skills-section, .projects-section, .contact-section'
    
  )

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 }
  )

  elements.forEach((element) => {
    element.classList.add('section-hidden')
    observer.observe(element)
  })

  return () => observer.disconnect()
}, [])
  return (
    <>

    
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Education />
      <Journey />
      <Projects />
      <Contact />

      <footer className="site-footer">
  <a href="#home" className="footer-logo">
    MY<span>PORTFOLIO</span>.
  </a>

  <p>
    Designed & Built with <span>♥</span> by Nabiha Mirza
  </p>

  <a href="#home" className="back-to-top">
    Back to Top ↑
  </a>

  <div className="footer-bottom">
    © 2026 Nabiha Mirza. All rights reserved.
  </div>
</footer>
    </>
  )
}

export default App
