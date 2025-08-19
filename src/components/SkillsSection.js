import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaCode, FaTools, FaMicrochip, FaNetworkWired, 
  FaBrain, FaLightbulb, FaClock, FaListAlt 
} from 'react-icons/fa';

function SkillsSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "C/C++", level: 95 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "HTML/CSS", level: 85 }
      ]
    },
    {
      title: "Tools & Software",
      icon: <FaTools />,
      skills: [
        { name: "MATLAB Simulink", level: 90 },
        { name: "Code Composer Studio", level: 95 },
        { name: "GitHub", level: 85 },
        { name: "Linux", level: 80 }
      ]
    },
    {
      title: "Controllers & Hardware",
      icon: <FaMicrochip />,
      skills: [
        { name: "ARM Cortex R5", level: 95 },
        { name: "TI Controllers", level: 90 },
        { name: "Raspberry Pi", level: 85 },
        { name: "Pico-W", level: 80 }
      ]
    },
    {
      title: "Communication Protocols",
      icon: <FaNetworkWired />,
      skills: [
        { name: "CAN/J1939", level: 95 },
        { name: "SPI/I2C", level: 90 },
        { name: "TCP/IP", level: 85 },
        { name: "UART/RS232", level: 90 }
      ]
    },
    {
      title: "Core Attributes",
      icon: <FaBrain />,
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Critical Thinking", level: 90 },
        { name: "Time Management", level: 85 },
        { name: "Self-Starter", level: 90 }
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="glass-card" ref={ref}>
      <motion.h2 
        className="section-heading"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Technical Skills & Expertise
      </motion.h2>
      
      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category"
            variants={categoryVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <motion.div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div style={{
                fontSize: '1.5rem',
                color: 'rgba(255, 255, 255, 0.9)',
                padding: '0.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                backdropFilter: 'blur(10px)'
              }}>
                {category.icon}
              </div>
              <h3>{category.title}</h3>
            </motion.div>

            <div>
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  style={{ marginBottom: '1.2rem' }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (skillIndex * 0.1), duration: 0.6 }}
                >
                  <div className="skill-item">
                    <span>{skill.name}</span>
                    <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-progress">
                    <motion.div
                      className="skill-progress-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ 
                        delay: 0.5 + (skillIndex * 0.1), 
                        duration: 1.2,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      style={{
                        background: `linear-gradient(90deg, 
                          rgba(99, 102, 241, 0.8) 0%, 
                          rgba(139, 92, 246, 0.8) 50%, 
                          rgba(6, 182, 212, 0.8) 100%)`
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Skills Summary */}
      <motion.div
        style={{
          marginTop: '3rem',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
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
          marginBottom: '1.5rem',
          fontSize: '1.3rem'
        }}>
          Specialized Expertise
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          {[
            "Embedded Systems Design",
            "Battery Management Systems",
            "Real-time Applications",
            "IoT Development",
            "Vehicle Control Systems",
            "Protocol Implementation"
          ].map((expertise, index) => (
            <motion.div
              key={index}
              style={{
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: '500',
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
              {expertise}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default SkillsSection;
