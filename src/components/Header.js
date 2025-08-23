import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import Typed from 'typed.js';

function Header() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Embedded Software Engineer',
        'IoT Developer',
        'Software Engineer',
        'Firmware Developer',
        'BMS Engineer'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
          <div className="position-relative d-inline-block">
            <img
              src={require('../assets/Raj Gara002.JPG')}
              alt="Rajkumar Gara"
              className="img-fluid shadow-lg"
              style={{ 
                width: '220px', 
                height: '220px', 
                objectFit: 'cover',
                objectPosition: 'center 20%',
                borderRadius: '20px',
                border: '4px solid #0d6efd'
              }}
            />
            <div 
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background: 'linear-gradient(45deg, rgba(13, 110, 253, 0.1), rgba(102, 126, 234, 0.1))',
                borderRadius: '20px',
                pointerEvents: 'none'
              }}
            ></div>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <h1 className="display-5 fw-bold text-primary mb-2">Rajkumar Gara</h1>
          <h2 className="h4 text-dark mb-3"><span ref={typedRef}></span></h2>
          <p className="lead text-dark mb-4">
            Passionate embedded systems engineer with expertise in IoT development,
            battery management systems, and real-time applications. Currently pursuing
            advanced studies while contributing to cutting-edge technology solutions.
          </p>
          <div className="d-flex flex-wrap gap-2 justify-content-start">
            <a href="mailto:rajkumar.gara3@gmail.com" className="btn btn-outline-primary">
              <FaEnvelope className="me-1" /> Email
            </a>
            <a href="tel:+12604101373" className="btn btn-outline-primary">
              <FaPhone className="me-1" /> Phone
            </a>
            <a href="https://github.com/RajkumarGara" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
              <FaGithub className="me-1" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/rajkumargara/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
              <FaLinkedin className="me-1" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
