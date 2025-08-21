import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaBolt, FaTrain } from 'react-icons/fa';

function ProjectsSection() {
  const projects = [
    {
      title: "BMS Software Development",
      subtitle: "India's Fastest Train - Vande Bharat Express",
      description: "Developed comprehensive Battery Management System software with minimal supervision for India's premier high-speed train. Implemented sophisticated algorithms for battery monitoring and state estimation.",
      features: [
        "Developed BMS software with minimal supervision",
        "Periodic communication with Cell Monitoring Unit (LTC6812) for getting Cell voltage and temperature",
        "Developed State of Charge estimation algorithm for 110V, 684Ah Lithium-ion battery pack"
      ],
      technologies: ["Embedded C", "LTC6812", "Battery Management", "Real-time Systems", "Algorithm Development"],
      icon: <FaTrain />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "OBD Software Development",
      subtitle: "Electric Bus Control System",
      description: "Comprehensive On-Board Diagnostics software development and maintenance for electric bus systems, including fault detection and vehicle control integration.",
      features: [
        "Maintenance of On-Board Diagnostics (OBD) software and adding new features",
        "Status and fault data acquisition from all modules using CAN protocol",
        "Troubleshooting communication issues using CAN232 tool and resolving issues",
        "Software design documentation and Vehicle Control Unit integration"
      ],
      technologies: ["CAN Protocol", "OBD", "Embedded Systems", "Vehicle Control", "Diagnostics"],
      icon: <FaBolt />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "IoT Smart Home Integration",
      subtitle: "Apple HomeKit & Node-RED Integration",
      description: "Developed three innovative projects for smart home automation, integrating lighting and window shading systems with modern IoT platforms.",
      features: [
        "RemoteSerialPico - Serial communication bridge for IoT devices",
        "node-red-bridge - Visual programming interface for home automation",
        "homebridge-tcp-smarthome - TCP/IP integration with Apple HomeKit",
        "Enhanced control on iOS and Android devices"
      ],
      technologies: ["IoT", "TCP/IP", "Raspberry Pi", "Apple HomeKit", "Node-RED", "Smart Home"],
      icon: <FaBolt />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
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

  const cardVariants = {
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

  return (
    <div className="glass-card">
      <motion.h2 
        className="section-heading"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 }
            }}
            style={{
              background: `${project.gradient}, rgba(255, 255, 255, 0.1)`,
              backgroundBlendMode: 'overlay'
            }}
          >
            <motion.div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div style={{
                fontSize: '2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                padding: '0.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                backdropFilter: 'blur(10px)'
              }}>
                {project.icon}
              </div>
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.9rem',
                  margin: 0
                }}>
                  {project.subtitle}
                </p>
              </div>
            </motion.div>

            <motion.p 
              className="project-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              style={{ marginBottom: '1.5rem' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem',
                    paddingLeft: '1rem',
                    position: 'relative'
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 0.4 }}
                >
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: 'rgba(255, 255, 255, 0.6)'
                  }}>
                    •
                  </span>
                  {feature}
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="project-tech"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  className="tech-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ delay: 0.7 + (i * 0.05), duration: 0.3 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ProjectsSection;
