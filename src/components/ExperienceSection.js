import React from 'react';
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

  return (
    <div className="container-fluid bg-light py-4">
      <div className="container">
        <div className="card bg-white text-dark mb-4 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-center mb-3 text-primary">Professional Experience</h2>
            <div className="row">
              {experiences.map((exp, index) => (
                <div key={index} className="col-12 mb-3">
                  <div className="card bg-white text-dark h-100 border-0 shadow-sm border-start border-4 border-success">
                    <div className="card-body">
                      <h3 className="h5 mb-2 text-primary">{exp.title}</h3>
                      <div className="mb-2">
                        <span className="me-3"><FaBriefcase className="me-1 text-primary" />{exp.company}</span>
                        <span><FaCalendarAlt className="me-1 text-primary" />{exp.period}</span>
                      </div>
                      <ul className="list-group list-group-flush mb-2">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="list-group-item bg-white text-dark">{desc}</li>
                        ))}
                      </ul>
                      <div className="d-flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="badge bg-primary">{tech}</span>
                        ))}
                      </div>
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

export default ExperienceSection;
