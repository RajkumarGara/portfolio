import { FaCode, FaTools, FaMicrochip, FaNetworkWired, FaServer } from 'react-icons/fa';

function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode />,
      skills: ["C", "C++", "Python", "JavaScript"]
    },
    {
      title: "Controllers & Hardware",
      icon: <FaMicrochip />,
      skills: ["ARM Cortex-R5", "TI (TMS570, TMS320)", "NXP (MC9S12)", "Raspberry Pi", "Pico-W"]
    },
    {
      title: "Communication Protocols",
      icon: <FaNetworkWired />,
      skills: ["CAN", "J1939", "SPI", "I2C", "ISO-SPI", "UART (SCI)", "RS232", "RS485", "TCP/IP"]
    },
    {
      title: "Tools & Software",
      icon: <FaTools />,
      skills: ["Code Composer Studio", "Freescale CodeWarrior", "Oscilloscope", "CAN232", "Multimeter", "Git", "Eclipse", "JTAG"]
    },
    {
      title: "Operating Systems",
      icon: <FaServer />,
      skills: ["Threads", "Concurrency", "Synchronization", "Memory Management", "Scheduling", "Linux", "Kernel Space"]
    }
  ];

  const specializations = [
    "Embedded Systems Design",
    "Battery Management Systems",
    "Real-time Firmware",
    "Vehicle Control Units",
    "On-Board Diagnostics",
    "Hardware-Software Integration"
  ];

  return (
    <div className="section-container">
      <div className="container">
        <div className="section-card mb-3">
          <h2 className="section-title">Technical Skills</h2>
          <div className="row g-3">
            {skillCategories.map((category, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="dark-card p-3 h-100">
                  <div className="d-flex align-items-center mb-3">
                    <span style={{ fontSize: '1.25rem', marginRight: '0.75rem', color: 'var(--accent)' }}>{category.icon}</span>
                    <h3 className="h6 mb-0" style={{ color: 'var(--text-primary)' }}>{category.title}</h3>
                  </div>
                  <div className="d-flex flex-wrap gap-1">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="tech-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-card">
          <h3 className="section-title" style={{ fontSize: '1.3rem' }}>Specializations</h3>
          <div className="row g-2">
            {specializations.map((expertise, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2">
                <div className="stat-card" style={{ padding: '0.75rem' }}>
                  <small className="mono" style={{ color: 'var(--accent)', fontSize: '0.75rem' }}>{expertise}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
