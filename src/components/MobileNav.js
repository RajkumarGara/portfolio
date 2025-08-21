import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

function MobileNav({ navLinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offset = 140;
      const elementPosition = targetElement.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="mobile-menu-button"
        onClick={toggleMenu}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle navigation menu"
        style={{
          display: 'none',
          background: 'rgba(255, 255, 255, 0.1)',
          border: 'none',
          borderRadius: '50%',
          width: '44px',
          height: '44px',
          color: 'white',
          fontSize: '1.2rem',
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          transition: 'all 0.3s ease'
        }}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 9998,
              display: 'none'
            }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'fixed',
              top: '70px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '300px',
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              borderRadius: '20px',
              padding: '1.5rem',
              zIndex: 9999,
              display: 'none',
              flexDirection: 'column',
              gap: '0.5rem',
              boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)'
            }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                variants={itemVariants}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  fontWeight: '500',
                  fontSize: '0.95rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  background: 'transparent'
                }}
                whileHover={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileNav;
