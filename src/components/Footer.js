import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaReact, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.a
            href="https://github.com/RajkumarGara"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            <span>GitHub</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/rajkumargara/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </motion.a>

          <motion.a
            href="mailto:rajkumar.gara3@gmail.com"
            className="social-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
            <span>Email</span>
          </motion.a>
        </motion.div>

        <motion.div
          className="footer-tech"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <span>Built with</span>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <FaHeart className="heart-icon" />
          </motion.div>
          <span>using</span>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <FaReact className="react-icon" />
          </motion.div>
          <span>React & Framer Motion</span>
        </motion.div>

        <motion.div
          className="footer-copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p>© {currentYear} Rajkumar Gara. All rights reserved.</p>
          <p>Passionate about creating innovative solutions in embedded systems and IoT</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
