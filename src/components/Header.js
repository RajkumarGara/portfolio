import { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import Typed from 'typed.js';

function Header() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Embedded Software Engineer',
        'Firmware Developer',
        'Real-Time Systems Developer',
        'IoT Developer',
        'Software Developer'
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
    <div className="container py-3 py-md-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
          <div className="position-relative d-inline-block">
            <img
              src={require('../assets/Raj Gara002.JPG')}
              alt="Rajkumar Gara"
              className="img-fluid header-image"
              style={{
                width: '280px',
                height: '280px',
                objectFit: 'cover',
                objectPosition: 'center 20%',
                borderRadius: '20px',
                border: '2px solid var(--accent)',
                boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)'
              }}
            />
          </div>
        </div>
        <div className="col-12 col-md-8">
          <h1 className="display-5 fw-bold mb-2 header-text-mobile" style={{ color: 'var(--text-primary)' }}>Rajkumar Gara</h1>
          <h2 className="h4 mb-3 header-text-mobile mono" style={{ color: 'var(--accent)' }}><span ref={typedRef}></span></h2>
          <p className="lead mb-3 text-justify" style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.8' }}>
            Embedded Software Engineer with 5+ years of experience, including 3+ years in bare-metal C development
            on ARM-based microcontrollers building real-time systems (BMS, VCU, OBD) and 2 years in software
            development. Strong understanding of low-level system design, communication protocols (CAN, SPI, I2C,
            UART), and hardware-software interaction. Currently expanding expertise in operating systems, Linux
            systems programming, and device-level software.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-start header-buttons-desktop">
            <a href="mailto:rajkumar.gara3@gmail.com" className="btn-accent">
              <FaEnvelope /> Email
            </a>
            <a href="tel:+12604101373" className="btn-accent">
              <FaPhone /> Phone
            </a>
            <a href="https://github.com/RajkumarGara" target="_blank" rel="noopener noreferrer" className="btn-accent">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/rajkumargara/" target="_blank" rel="noopener noreferrer" className="btn-accent">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
