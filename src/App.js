import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import AccomplishmentsSection from './components/AccomplishmentsSection';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import MobileNav from './components/MobileNav';
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
        // Add offset for mobile to account for fixed navigation
        const isMobile = window.innerWidth <= 768;
        const offset = isMobile ? 140 : 100;
        const elementPosition = targetElement.offsetTop - offset;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
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
      
      {/* Fixed Navigation */}
      <div className="nav-container">
        <motion.nav
          className="desktop-nav"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.nav>
        
        {/* Mobile Navigation */}
        <MobileNav navLinks={navLinks} />
      </div>

      <main>
        {/* Hero Section */}
        <motion.section
          id="about"
          ref={addToRefs}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Header />
        </motion.section>

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
