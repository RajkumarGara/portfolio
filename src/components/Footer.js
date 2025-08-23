import React from 'react';
import { FaHeart, FaReact, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light py-3 mt-3 border-top">
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div className="col-auto">
            <a href="https://github.com/RajkumarGara" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mx-2">
              <FaGithub className="me-2" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/rajkumargara/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mx-2">
              <FaLinkedin className="me-2" /> LinkedIn
            </a>
            <a href="mailto:rajkumar.gara3@gmail.com" className="btn btn-outline-primary mx-2">
              <FaEnvelope className="me-2" /> Email
            </a>
          </div>
        </div>
        <div className="row justify-content-center mb-3">
          <div className="col-auto text-center">
            <span className="me-2">Built with</span>
            <FaHeart className="heart-icon me-2 text-danger" />
            <span className="me-2">using</span>
            <FaReact className="react-icon me-2 text-primary" />
            <span>React & Bootstrap</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto text-center">
            <p className="mb-1 text-dark">© {currentYear} Rajkumar Gara. All rights reserved.</p>
            <p className="mb-0 text-muted">Passionate about creating innovative solutions in embedded systems and IoT</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
