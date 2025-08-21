import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Computer Engineering",
      university: "Purdue University",
      location: "Fort Wayne, Indiana, USA",
      period: "2022 - 2024",
      gpa: "3.8/4.0",
      coursework: [
        "Advanced Embedded Systems",
        "Machine Learning Applications",
        "Digital Signal Processing",
        "Computer Architecture",
        "Data Structures & Algorithms"
      ],
      achievements: [
        "Graduate Teaching Assistant",
        "Research in Deep Learning Applications",
        "Dean's List (Multiple Semesters)"
      ]
    },
    {
      degree: "Bachelor of Technology in Electronics & Communication",
      university: "JNTU Hyderabad",
      location: "Hyderabad, India",
      period: "2015 - 2019",
      gpa: "7.8/10.0",
      coursework: [
        "Embedded Systems Design",
        "Digital Electronics",
        "Communication Systems",
        "Microprocessor Systems",
        "Control Systems"
      ],
      achievements: [
        "Graduated with First Class",
        "Active in Technical Societies",
        "Project on Battery Management Systems"
      ]
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

  const cardVariants = {
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
        Education
      </motion.h2>
      
      <motion.div 
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 }
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)'
            }}
          >
            <motion.div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
                marginBottom: '1.5rem'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div style={{
                fontSize: '2.5rem',
                color: 'rgba(255, 255, 255, 0.9)',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)'
              }}>
                <FaGraduationCap />
              </div>
              
              <div style={{ flex: 1 }}>
                <h3 style={{
                  color: 'white',
                  fontSize: '1.4rem',
                  marginBottom: '0.5rem',
                  fontWeight: '600'
                }}>
                  {edu.degree}
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
                    <FaUniversity />
                    <span>{edu.university}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaMapMarkerAlt />
                    <span>{edu.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaCalendarAlt />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  display: 'inline-block',
                  color: 'white',
                  fontWeight: '500',
                  fontSize: '0.9rem'
                }}>
                  GPA: {edu.gpa}
                </div>
              </div>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {/* Coursework */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h4 style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '1rem',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  Key Coursework
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {edu.coursework.map((course, i) => (
                    <motion.div
                      key={i}
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        paddingLeft: '1rem',
                        position: 'relative',
                        fontSize: '0.9rem'
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.05), duration: 0.4 }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: 'rgba(255, 255, 255, 0.6)'
                      }}>
                        •
                      </span>
                      {course}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <h4 style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '1rem',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  Achievements
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {edu.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        paddingLeft: '1rem',
                        position: 'relative',
                        fontSize: '0.9rem'
                      }}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + (i * 0.05), duration: 0.4 }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: 'rgba(255, 255, 255, 0.6)'
                      }}>
                        ★
                      </span>
                      {achievement}
                    </motion.div>
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

export default EducationSection;
