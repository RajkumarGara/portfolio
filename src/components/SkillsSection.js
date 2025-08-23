import React from 'react';
import { FaCode, FaTools, FaMicrochip, FaNetworkWired, FaBrain } from 'react-icons/fa';

function SkillsSection() {
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

  return (
    <div className="container-fluid bg-light py-4">
      <div className="container">
        <div className="card bg-white text-dark mb-4 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-center mb-3 text-primary">Technical Skills & Expertise</h2>
            <div className="row">
              {skillCategories.map((category, index) => (
                <div key={index} className="col-md-6 col-lg-4 mb-3">
                  <div className="card h-100 bg-white text-dark border-0 shadow-sm border-start border-4 border-primary">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <span style={{ fontSize: '1.5rem', marginRight: '1rem', color: '#0d6efd' }}>{category.icon}</span>
                        <h3 className="h5 mb-0 text-primary">{category.title}</h3>
                      </div>
                      <ul className="list-group list-group-flush">
                        {category.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="list-group-item bg-white text-dark d-flex justify-content-between align-items-center">
                            <span>{skill.name}</span>
                            <span className="badge bg-primary ms-2">{skill.level}%</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Additional Skills Summary */}
        <div className="card bg-white text-dark mt-2 shadow-sm">
          <div className="card-body">
            <h3 className="card-title text-center mb-3 text-primary">Specialized Expertise</h3>
            <div className="row">
              {["Embedded Systems Design","Battery Management Systems","Real-time Applications","IoT Development","Vehicle Control Systems","Protocol Implementation"].map((expertise, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4 mb-2">
                  <div className="card bg-primary text-white h-100 border-0 shadow-sm">
                    <div className="card-body text-center py-2">
                      <small className="fw-medium">{expertise}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
