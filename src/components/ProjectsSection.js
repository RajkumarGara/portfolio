import React from 'react';
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

  return (
    <div className="container-fluid bg-light py-4">
      <div className="container">
        <div className="card bg-white text-dark mb-4 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-center mb-3 text-primary">Featured Projects</h2>
            <div className="row">
              {projects.map((project, index) => {
                const gradientClass = `project-gradient-${(index % 3) + 1}`;
                return (
                  <div key={index} className="col-md-6 col-lg-4 mb-3">
                    <div className={`card h-100 ${gradientClass} border-0 shadow-sm`}>
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <span style={{ fontSize: '2rem', marginRight: '1rem', color: 'rgba(255,255,255,0.9)' }}>{project.icon}</span>
                          <h3 className="h5 mb-0 text-white">{project.title}</h3>
                        </div>
                        <p className="mb-2 text-white"><strong>{project.subtitle}</strong></p>
                        <p className="mb-2 text-white opacity-90">{project.description}</p>
                        <ul className="list-group list-group-flush mb-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="list-group-item bg-transparent text-white opacity-85 border-white border-opacity-25">{feature}</li>
                          ))}
                        </ul>
                        <div className="d-flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="badge bg-light text-dark">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;