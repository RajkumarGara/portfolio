import { FaCode, FaMicrochip, FaBatteryFull, FaBus, FaGraduationCap, FaHome } from 'react-icons/fa';

function AccomplishmentsSection() {
  const accomplishments = [
    {
      icon: <FaBatteryFull />,
      title: "BMS for Vande Bharat Express",
      description: "Developed and deployed Battery Management System firmware for India's fastest train with minimal supervision.",
      impact: "Critical safety system for national high-speed rail"
    },
    {
      icon: <FaBus />,
      title: "Electric Bus VCU & VRMS",
      description: "Developed Vehicle Control Unit firmware and Vehicle Remote Monitoring System for the electric bus project.",
      impact: "End-to-end vehicle control and remote monitoring"
    },
    {
      icon: <FaCode />,
      title: "CAN Timing Optimization",
      description: "Identified and resolved critical CAN frame drops by optimizing the communication cycle from 32 ms to 64 ms.",
      impact: "Eliminated data loss in real-time communication"
    },
    {
      icon: <FaGraduationCap />,
      title: "Perfect GPA at Purdue University",
      description: "Achieved 4.00/4.00 GPA in M.S. Computer Science while working as Teaching Assistant and Research Collaborator.",
      impact: "Academic excellence alongside practical work"
    },
    {
      icon: <FaMicrochip />,
      title: "Multi-Platform Firmware Expertise",
      description: "Developed production firmware across TI (TMS570), NXP (MC9S12), and ARM Cortex-R5 platforms using CCS, CodeWarrior, and Eclipse.",
      impact: "Versatile embedded development across architectures"
    },
    {
      icon: <FaHome />,
      title: "IoT Smart Home System",
      description: "Built cross-platform IoT system integrating Raspberry Pi and Pico-W with Apple HomeKit and Node-RED for smart home automation.",
      impact: "Full-stack IoT from firmware to user interface"
    }
  ];

  const stats = [
    { value: "5+", label: "Years Total Experience" },
    { value: "3+", label: "Years Embedded" },
    { value: "6+", label: "Major Projects" },
    { value: "5+", label: "Protocols Implemented" }
  ];

  return (
    <div className="section-container">
      <div className="container">
        <div className="section-card mb-3">
          <h2 className="section-title">Key Accomplishments</h2>
          <div className="row g-3">
            {accomplishments.map((item, index) => (
              <div key={index} className="col-md-6">
                <div className="dark-card p-3 h-100">
                  <div className="d-flex align-items-start">
                    <span style={{ fontSize: '1.25rem', marginRight: '0.75rem', color: 'var(--accent)', marginTop: '0.1rem' }}>{item.icon}</span>
                    <div>
                      <h4 className="h6 mb-1" style={{ color: 'var(--text-primary)' }}>{item.title}</h4>
                      <p className="mb-2" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>{item.description}</p>
                      <span className="tech-badge">{item.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-card">
          <h3 className="section-title" style={{ fontSize: '1.3rem' }}>Career Highlights</h3>
          <div className="row g-3">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccomplishmentsSection;
