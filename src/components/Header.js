import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import Typed from 'typed.js';

function Header() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Embedded Systems Engineer',
        'IoT Developer',
        'Software Engineer',
        'Problem Solver',
        'Innovation Driver'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    // Disable animations on mobile for better performance
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      typed.cursor.style.animation = 'none';
    }

    return () => typed.destroy();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const avatarVariants = {
    hidden: { scale: 0, rotate: 180, opacity: 0 },
    visible: { scale: 1, rotate: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="hero-avatar floating"
        variants={avatarVariants}
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img 
          src={require('../assets/Raj Gara002.JPG')} 
          alt="Rajkumar Gara" 
          loading="eager"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </motion.div>

      <motion.h1 className="hero-title" variants={itemVariants}>
        Rajkumar Gara
      </motion.h1>

      <motion.div className="hero-subtitle" variants={itemVariants}>
        <span ref={typedRef}></span>
      </motion.div>

      <motion.p className="hero-description" variants={itemVariants}>
        Passionate embedded systems engineer with expertise in IoT development, 
        battery management systems, and real-time applications. Currently pursuing 
        advanced studies while contributing to cutting-edge technology solutions.
      </motion.p>

      <motion.div className="contact-info" variants={itemVariants}>
        <motion.div 
          className="contact-item"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <FaEnvelope />
          <a href="mailto:rajkumar.gara3@gmail.com">rajkumar.gara3@gmail.com</a>
        </motion.div>
        <motion.div 
          className="contact-item"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <FaPhone />
          <span>+1(260)4101373</span>
        </motion.div>
      </motion.div>

      <motion.div className="social-links" variants={itemVariants}>
        <motion.a
          href="https://github.com/RajkumarGara"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <FaGithub size={20} />
          <span>GitHub</span>
        </motion.a>
        
        <motion.a
          href="https://www.linkedin.com/in/rajkumargara/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <FaLinkedin size={20} />
          <span>LinkedIn</span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default Header;
