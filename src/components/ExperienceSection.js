import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

function ExperienceSection() {
  const experiences = [
    {
      title: "Medical Informatics Engineering | Development Intern",
      company: "Fort Wayne, US",
      period: "Oct 2023 - Present",
      description: [
        "Developed three projects: RemoteSerialPico, node-red-bridge, and homebridge-tcp-smarthome, for integrating digital lighting and window shading systems with Apple HomeKit and Nodered-UI for enhanced control on iOS and Android devices.",
        "Implemented the TCP/IP protocol for communication between Raspberry Pi and Pico-W in this IoT project."
      ],
      technologies: ["IoT", "TCP/IP", "Raspberry Pi", "Apple HomeKit", "Node-RED"]
    },
    {
      title: "Teaching Assistant",
      company: "Purdue University",
      period: "Aug 2023 - Dec 2023",
      description: [
        "Worked under professor Zesheng Chen for Applications of Deep learning course.",
        "Evaluated and provided feedback on assignments, fostering student growth and understanding."
      ],
      technologies: ["Deep Learning", "Python", "Teaching", "Machine Learning"]
    },
    {
      title: "Jr. Data Scientist",
      company: "Purdue University",
      period: "Jan 2023 - May 2023",
      description: [
        "Analysed datasets, developed, and tested predictive models using statistical and data analysis tools.",
        "Drafted final research paper in latex using overleaf in collaboration with Alessandro Selvitella."
      ],
      technologies: ["Data Science", "Python", "Statistical Analysis", "LaTeX", "Research"]
    },
    {
      title: "R&D Engineer",
      company: "Medha Servo Drives | India",
      period: "June 2019 - July 2022",
      description: [
        "Highly skilled in embedded C coding (bare metal) with a strong knowledge in coding TI, ARM Cortex R5 and NXP controllers for On-board Diagnostics, Vehicle Control Unit, and Battery Management System.",
        "Proficient in understanding datasheets and writing communication protocols (CAN, J1939, SPI, SCI, GSM, GPS, ISO-SPI) working with real-time projects.",
        "Rigorous working experience with the controllers TMS570LC4357, LTC6812, MC9S12XDP512, TMS320F28375S on Code Composer Studio, Freescale CodeWarrior, Halcogen, MATLAB Simulink."
      ],
      technologies: ["Embedded C", "ARM Cortex", "CAN Protocol", "Battery Management", "Real-time Systems"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
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
        Professional Experience
      </motion.h2>
      
      <motion.div 
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h3 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                  {exp.title}
                </h3>
                
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '1rem', 
                  marginBottom: '1rem',
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaBriefcase />
                    <span>{exp.company}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaCalendarAlt />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  {exp.description.map((desc, i) => (
                    <motion.p 
                      key={i}
                      style={{ 
                        color: 'rgba(255, 255, 255, 0.9)', 
                        marginBottom: '0.8rem',
                        lineHeight: '1.6'
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1), duration: 0.6 }}
                    >
                      • {desc}
                    </motion.p>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ delay: 0.4 + (i * 0.05), duration: 0.3 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ExperienceSection;
