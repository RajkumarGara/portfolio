import { FaClock, FaBus, FaHome, FaBatteryFull, FaSatelliteDish, FaCar } from 'react-icons/fa';

function ProjectsSection() {
  const projects = [
    {
      title: "Battery Management System",
      subtitle: "Vande Bharat Express (India's Fastest Train)",
      description: "Developed complete BMS firmware on TMS570LC4357 with minimal supervision. Decoded BMS communication protocol including ISO-SPI frames and timing using limited ICD documentation.",
      features: [
        "Real-time cell voltage/temperature monitoring via LTC6812 over ISO-SPI",
        "State of Charge (SoC) estimation algorithm for 110V, 684Ah Li-ion battery pack",
        "Provided inputs to hardware team based on protocol analysis",
        "Ensured reliable operation under real-time constraints and fault conditions"
      ],
      technologies: ["Embedded C", "TMS570LC4357", "LTC6812", "ISO-SPI", "SoC Algorithm"],
      icon: <FaBatteryFull />
    },
    {
      title: "On-Board Diagnostics (OBD)",
      subtitle: "Electric Bus Control System",
      description: "Developed and maintained OBD firmware for fault detection and diagnostics across vehicle subsystems. Optimized existing code improving memory usage and data storage efficiency.",
      features: [
        "CAN-based data acquisition from multiple control modules",
        "VCU firmware with CAN communication to DC-DC converters and BMS",
        "Resolved 32ms CAN timing issues by optimizing to 64ms cycle",
        "Integration of subsystems within Vehicle Control Unit (VCU)"
      ],
      technologies: ["Embedded C", "CAN", "J1939", "OBD", "VCU", "ARM Cortex-R5"],
      icon: <FaBus />
    },
    {
      title: "Vehicle Remote Monitoring System",
      subtitle: "Electric Bus - VRMS",
      description: "Implemented complete vehicle remote monitoring using GSM and GPS protocols for the electric bus project, enabling real-time fleet tracking and diagnostics.",
      features: [
        "GSM module integration for remote data transmission",
        "GPS-based vehicle location tracking",
        "Real-time parameter monitoring from VCU",
        "Tuned UART (RS232) communication parameters including baud rate"
      ],
      technologies: ["GSM", "GPS", "UART", "RS232", "Embedded C"],
      icon: <FaSatelliteDish />
    },
    {
      title: "GPS Clock Project",
      subtitle: "7-Segment LED Display",
      description: "First embedded project as part of a 4-member team. Contributed to PCB hardware design and developed embedded C code on the MC9S12XDP512CAG microcontroller.",
      features: [
        "7-segment LED display driven by GPS time data",
        "PCB hardware design contribution",
        "Embedded C development using Freescale CodeWarrior",
        "MC9S12XDP512CAG microcontroller programming"
      ],
      technologies: ["Embedded C", "MC9S12XDP512", "CodeWarrior", "PCB Design", "GPS"],
      icon: <FaClock />
    },
    {
      title: "Vehicle Control Unit (VCU)",
      subtitle: "Electric Bus - Software Updates & Maintenance",
      description: "Developed and maintained VCU firmware for the electric bus, handling communication with all vehicle subsystems and ensuring reliable operation.",
      features: [
        "CAN communication integration with DC-DC converters, BMS, and motor controllers",
        "Transmission of speed parameters from VCU to dashboard via RS485",
        "Software updates and maintenance for field-deployed units",
        "Collaborated with MCU and auxiliary teams for subsystem integration"
      ],
      technologies: ["Embedded C", "CAN", "RS485", "VCU", "ARM Cortex-R5"],
      icon: <FaCar />
    },
    {
      title: "IoT Smart Home",
      subtitle: "Apple HomeKit & Node-RED Integration",
      description: "Built IoT-based embedded systems integrating Raspberry Pi and Pico-W for smart home control with cross-platform device management.",
      features: [
        "RemoteSerialPico - Serial communication bridge for IoT devices",
        "TCP/IP communication between Raspberry Pi and Pico-W",
        "Node-RED/HomeKit interfaces for lighting and window shading",
        "Cross-platform control on iOS and Android devices"
      ],
      technologies: ["IoT", "TCP/IP", "Raspberry Pi", "Pico-W", "Node-RED", "HomeKit"],
      icon: <FaHome />
    }
  ];

  return (
    <div className="section-container">
      <div className="container">
        <div className="section-card">
          <h2 className="section-title">Featured Projects</h2>
          <div className="row g-3">
            {projects.map((project, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="project-card">
                  <div className="d-flex align-items-center mb-3">
                    <span style={{ fontSize: '1.5rem', marginRight: '0.75rem', color: 'var(--accent)' }}>{project.icon}</span>
                    <h3 className="h6 mb-0" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                  </div>
                  <p className="mono mb-2" style={{ color: 'var(--accent)', fontSize: '0.78rem' }}>{project.subtitle}</p>
                  <p className="mb-3" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>{project.description}</p>
                  <div className="mb-3">
                    {project.features.map((feature, i) => (
                      <div key={i} className="exp-list-item" style={{ fontSize: '0.82rem' }}>{feature}</div>
                    ))}
                  </div>
                  <div className="d-flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
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

export default ProjectsSection;