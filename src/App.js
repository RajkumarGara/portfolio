import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import AccomplishmentsSection from './components/AccomplishmentsSection';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Accomplishments', href: '#accomplishments' },
];

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Add offset for navbar height
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offset = navbarHeight + 20; // Extra 20px padding
        const elementPosition = targetElement.offsetTop - offset;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
        
        // Remove focus from the clicked link to prevent stuck active state
        e.target.blur();
        
        // Close mobile menu after clicking (simple approach)
        const navbarCollapse = document.querySelector('#navbarNav');
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
          if (navbarToggler) {
            navbarToggler.setAttribute('aria-expanded', 'false');
            navbarToggler.classList.add('collapsed');
          }
        }
      }
    };

    const navLinksElements = document.querySelectorAll('nav a');
    navLinksElements.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
      navLinksElements.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="app-container bg-light">
      <ParticlesBackground />
      {/* Bootstrap Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top" style={{ backgroundColor: '#0d6efd', backdropFilter: 'blur(10px)' }}>
        <div className="container-fluid px-3">
          <button 
            className="navbar-toggler border-0 shadow-none" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            style={{ padding: '6px 10px', fontSize: '1.1rem' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.name}>
                  <a 
                    className="nav-link text-white fw-medium px-3 py-2 rounded-pill mx-1" 
                    href={link.href}
                    style={{ transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <main className="pt-5">
        {/* Hero Section */}
        <section id="about" ref={addToRefs} className="visible">
          <Header />
        </section>
        {/* Experience Section */}
        <section id="experience" ref={addToRefs}>
          <ExperienceSection />
        </section>
        {/* Projects Section */}
        <section id="projects" ref={addToRefs}>
          <ProjectsSection />
        </section>
        {/* Skills Section */}
        <section id="skills" ref={addToRefs}>
          <SkillsSection />
        </section>
        {/* Education Section */}
        <section id="education" ref={addToRefs}>
          <EducationSection />
        </section>
        {/* Accomplishments Section */}
        <section id="accomplishments" ref={addToRefs}>
          <AccomplishmentsSection />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
