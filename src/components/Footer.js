import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMicrochip } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark-footer mt-3">
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div className="col-auto">
            <div className="d-flex flex-wrap gap-3 justify-content-center">
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
        <div className="row justify-content-center">
          <div className="col-auto text-center">
            <p className="mb-1" style={{ color: 'var(--text-primary)' }}>© {currentYear} Rajkumar Gara</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
