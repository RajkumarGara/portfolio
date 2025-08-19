import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTrophy, FaCertificate, FaAward, FaCode, 
  FaResearch, FaChalkboardTeacher, FaProjectDiagram 
} from 'react-icons/fa';

function AccomplishmentsSection() {
  const accomplishments = [
    {
      category: "Professional Achievements",
      icon: <FaTrophy />,
      items: [
        {
          title: "Battery Management System for Vande Bharat Express",
          description: "Successfully developed and deployed BMS software for India's fastest train, contributing to the nation's high-speed rail initiative.",
          impact: "Critical safety system for high-speed rail transport"
        },
        {
          title: "IoT Smart Home Integration Projects",
          description: "Developed three innovative projects integrating Apple HomeKit with custom hardware solutions.",
          impact: "Enhanced home automation capabilities for modern IoT ecosystems"
        },
        {
          title: "Real-time Embedded Systems Expertise",
          description: "Demonstrated proficiency in developing real-time systems for automotive and transportation sectors.",
          impact: "Improved vehicle safety and diagnostic capabilities"
        }
      ]
    },
    {
      category: "Academic Excellence",
      icon: <FaCertificate />,
      items: [
        {
          title: "Graduate Teaching Assistant",
          description: "Served as TA for Applications of Deep Learning course under Prof. Zesheng Chen at Purdue University.",
          impact: "Mentored students in advanced AI/ML concepts"
        },
        {
          title: "Research Collaboration",
          description: "Co-authored research paper in LaTeX using Overleaf in collaboration with Alessandro Selvitella.",
          impact: "Contributed to academic research in data science"
        },
        {
          title: "Consistent Academic Performance",
          description: "Maintained strong GPA throughout graduate studies while working on multiple projects.",
          impact: "Demonstrated ability to balance academic and practical work"
        }
      ]
    },
    {
      category: "Technical Innovation",
      icon: <FaCode />,
      items: [
        {
          title: "Protocol Implementation Expertise",
          description: "Implemented complex communication protocols including CAN, J1939, SPI, and TCP/IP for real-world applications.",
          impact: "Enabled reliable communication in critical systems"
        },
        {
          title: "Cross-platform Development",
          description: "Successfully worked across multiple controller platforms (TI, ARM, NXP) and development environments.",
          impact: "Versatile embedded systems development capabilities"
        },
        {
          title: "Algorithm Development",
          description: "Developed State of Charge estimation algorithms for high-capacity lithium-ion battery packs.",
          impact: "Improved battery management efficiency and safety"
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="glass-card">
      <motion.h2 
        className="section-heading"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Key Accomplishments
      </motion.h2>
      
      <motion.div 
        style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {accomplishments.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            variants={categoryVariants}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <motion.div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem'
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div style={{
                fontSize: '2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)'
              }}>
                {category.icon}
              </div>
              <h3 style={{
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: '600',
                margin: 0
              }}>
                {category.category}
              </h3>
            </motion.div>

            <motion.div
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              variants={containerVariants}
            >
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(5px)'
                  }}
                >
                  <motion.h4
                    style={{
                      color: 'white',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      marginBottom: '0.8rem'
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + (itemIndex * 0.1), duration: 0.6 }}
                  >
                    {item.title}
                  </motion.h4>

                  <motion.p
                    style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      marginBottom: '1rem',
                      lineHeight: '1.6',
                      fontSize: '0.95rem'
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + (itemIndex * 0.1), duration: 0.6 }}
                  >
                    {item.description}
                  </motion.p>

                  <motion.div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 1rem',
                      background: 'rgba(99, 102, 241, 0.2)',
                      borderRadius: '20px',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      fontSize: '0.85rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: '500'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (itemIndex * 0.1), duration: 0.5 }}
                  >
                    <FaAward style={{ fontSize: '0.8rem' }} />
                    <span>Impact: {item.impact}</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Summary Statistics */}
      <motion.div
        style={{
          marginTop: '3rem',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 style={{
          color: 'white',
          textAlign: 'center',
          marginBottom: '2rem',
          fontSize: '1.3rem'
        }}>
          Career Highlights
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem'
        }}>
          {[
            { value: "3+", label: "Years Experience", icon: <FaCode /> },
            { value: "5+", label: "Major Projects", icon: <FaProjectDiagram /> },
            { value: "Multiple", label: "Platforms", icon: <FaTrophy /> },
            { value: "Teaching", label: "Experience", icon: <FaChalkboardTeacher /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              style={{
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.05,
                background: 'rgba(255, 255, 255, 0.15)'
              }}
              transition={{ 
                delay: 0.9 + (index * 0.1), 
                duration: 0.5,
                type: "spring",
                stiffness: 300
              }}
              viewport={{ once: true }}
            >
              <div style={{
                fontSize: '2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '0.5rem'
              }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '0.5rem'
              }}>
                {stat.value}
              </div>
              <div style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.9rem'
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default AccomplishmentsSection;
