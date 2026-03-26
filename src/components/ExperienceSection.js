import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

function ExperienceSection() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Medical Informatics Engineering",
      location: "Fort Wayne, US",
      period: "April 2024 - Present",
      description: [
        "Debug and maintain large-scale C-based applications, improving system stability and performance",
        "Develop backend logic and optimize SQL queries for performance-critical workflows",
        "Collaborate on system-level features including AI-driven automation (Ozwell AI)"
      ],
      technologies: ["C", "SQL", "JavaScript", "AI"]
    },
    {
      title: "Development Intern",
      company: "Medical Informatics Engineering",
      location: "Fort Wayne, US",
      period: "Oct 2023 - March 2024",
      description: [
        "Built IoT-based embedded systems integrating Raspberry Pi and Pico-W for smart home control (lighting/window shading)",
        "Implemented TCP/IP communication with Node-RED/HomeKit interfaces for cross-platform device control"
      ],
      technologies: ["IoT", "TCP/IP", "Raspberry Pi", "Pico-W", "Node-RED", "HomeKit"]
    },
    {
      title: "R&D Engineer (Embedded Systems)",
      company: "Medha Servo Drives",
      location: "Hyderabad, India",
      period: "June 2019 - July 2022",
      description: [
        "Designed and developed embedded C firmware (bare-metal) for automotive and railway systems on ARM Cortex-R5, TI, and NXP microcontrollers",
        "Implemented interrupt-driven communication and real-time data handling using CAN, SPI, UART (SCI), and I2C protocols",
        "Debugged hardware-software issues using oscilloscope, CAN tools, and JTAG, improving system reliability",
        "Worked closely with hardware teams, interpreting datasheets and register-level configurations",
        "Implemented Battery Management System (BMS) firmware on TMS570LC4357 with minimal supervision",
        "Developed Vehicle Remote Monitoring System (VRMS) using GSM and GPS protocols for electric bus",
        "Resolved CAN communication timing issues by optimizing cycle from 32 ms to 64 ms, eliminating frame drops",
        "Contributed to Combined Charging System (CCS) protocol development for charging stations",
        "Performed on-site vehicle performance analysis and parameter tuning"
      ],
      technologies: ["Embedded C", "ARM Cortex-R5", "CAN", "J1939", "SPI", "UART", "I2C", "ISO-SPI", "TMS570LC4357", "LTC6812", "GSM", "GPS"]
    }
  ];

  return (
    <div className="section-container">
      <div className="container">
        <div className="section-card">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="dark-card p-3 p-md-4">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-2">
                    <div>
                      <h3 className="h5 mb-1" style={{ color: 'var(--text-primary)' }}>{exp.title}</h3>
                      <p className="mb-1 mono" style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>{exp.company}</p>
                    </div>
                    <div className="text-md-end mt-1 mt-md-0">
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                        <FaMapMarkerAlt className="me-1" style={{ color: 'var(--accent)' }} />{exp.location}
                      </div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                        <FaCalendarAlt className="me-1" style={{ color: 'var(--accent)' }} />{exp.period}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    {exp.description.map((desc, i) => (
                      <div key={i} className="exp-list-item">{desc}</div>
                    ))}
                  </div>
                  <div className="d-flex flex-wrap gap-1">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
