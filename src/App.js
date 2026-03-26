import { useEffect, useRef } from 'react';
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
      e.stopPropagation();
      
      const targetId = e.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Immediately reset styles
        const activeElement = e.target;
        activeElement.blur();
        activeElement.style.backgroundColor = 'transparent';
        activeElement.style.transform = 'scale(1)';
        
        // Close mobile menu first
        const navbarCollapse = document.querySelector('#navbarNav');
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
          if (navbarToggler) {
            navbarToggler.setAttribute('aria-expanded', 'false');
            navbarToggler.classList.add('collapsed');
          }
        }
        
        // Calculate scroll position
        setTimeout(() => {
          const navbar = document.querySelector('.navbar');
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          const offset = navbarHeight + 10;
          
          // Scroll directly to the section, not looking for container-fluid
          const elementPosition = targetElement.offsetTop - offset;
          
          window.scrollTo({
            top: Math.max(0, elementPosition),
            behavior: 'smooth'
          });
        }, 150);
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
    <div className="app-container">
      <ParticlesBackground />
      {/* Bootstrap Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" role="navigation" aria-label="Main navigation">
        <div className="container-fluid px-3">
          <button 
            className="navbar-toggler border-0 shadow-none" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation menu"
            style={{ padding: '6px 10px', fontSize: '1.1rem' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto" role="menubar">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.name} role="none">
                  <a 
                    className="nav-link fw-medium px-2 py-1 rounded mx-1" 
                    href={link.href}
                    role="menuitem"
                    style={{ 
                      transition: 'all 0.2s ease',
                      WebkitTapHighlightColor: 'transparent',
                      outline: 'none',
                      userSelect: 'none',
                      touchAction: 'manipulation'
                    }}
                    onMouseEnter={(e) => {
                      if (!('ontouchstart' in window)) {
                        e.target.style.color = '#64ffda';
                        e.target.style.backgroundColor = 'rgba(100, 255, 218, 0.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '';
                      e.target.style.backgroundColor = 'transparent';
                    }}
                    onTouchStart={(e) => {
                      e.target.style.color = '#64ffda';
                      e.target.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
                    }}
                    onTouchEnd={(e) => {
                      setTimeout(() => {
                        e.target.style.color = '';
                        e.target.style.backgroundColor = 'transparent';
                        e.target.blur();
                      }, 150);
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
