import { FaTrophy, FaCertificate, FaAward, FaCode, FaChalkboardTeacher, FaProjectDiagram } from 'react-icons/fa';

function AccomplishmentsSection() {
  const accomplishments = [
    {
      category: "Professional Achievements",
      icon: <FaTrophy />,
      items: [
        {
          title: "Battery Management System for Vande Bharat Express",
          description: "Successfully developed and deployed BMS software for India's fastest train, contributing to the nation's high-speed rail initiative.",
          impact: "Critical safety system for high-speed rail transport"
        },
        {
          title: "IoT Smart Home Integration Projects",
          description: "Developed three innovative projects integrating Apple HomeKit with custom hardware solutions.",
          impact: "Enhanced home automation capabilities for modern IoT ecosystems"
        },
        {
          title: "Real-time Embedded Systems Expertise",
          description: "Demonstrated proficiency in developing real-time systems for automotive and transportation sectors.",
          impact: "Improved vehicle safety and diagnostic capabilities"
        }
      ]
    },
    {
      category: "Academic Excellence",
      icon: <FaCertificate />,
      items: [
        {
          title: "Graduate Teaching Assistant",
          description: "Served as TA for Applications of Deep Learning course under Prof. Zesheng Chen at Purdue University.",
          impact: "Mentored students in advanced AI/ML concepts"
        },
        {
          title: "Research Collaboration",
          description: "Co-authored research paper in LaTeX using Overleaf in collaboration with Alessandro Selvitella.",
          impact: "Contributed to academic research in data science"
        },
        {
          title: "Consistent Academic Performance",
          description: "Maintained strong GPA throughout graduate studies while working on multiple projects.",
          impact: "Demonstrated ability to balance academic and practical work"
        }
      ]
    },
    {
      category: "Technical Innovation",
      icon: <FaCode />,
      items: [
        {
          title: "Protocol Implementation Expertise",
          description: "Implemented complex communication protocols including CAN, J1939, SPI, and TCP/IP for real-world applications.",
          impact: "Enabled reliable communication in critical systems"
        },
        {
          title: "Cross-platform Development",
          description: "Successfully worked across multiple controller platforms (TI, ARM, NXP) and development environments.",
          impact: "Versatile embedded systems development capabilities"
        },
        {
          title: "Algorithm Development",
          description: "Developed State of Charge estimation algorithms for high-capacity lithium-ion battery packs.",
          impact: "Improved battery management efficiency and safety"
        }
      ]
    }
  ];

  return (
    <div className="container-fluid bg-light py-4">
      <div className="container">
        <div className="card bg-white text-dark mb-4 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-center mb-3 text-primary">Key Accomplishments</h2>
            <div className="row">
              {accomplishments.map((category, categoryIndex) => (
                <div key={categoryIndex} className="col-12 mb-3">
                  <div className="card bg-white text-dark h-100 border-0 shadow-sm border-start border-4 border-warning">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <span style={{ fontSize: '2rem', marginRight: '1rem', color: '#0d6efd' }}>{category.icon}</span>
                        <h3 className="h5 mb-0 text-primary">{category.category}</h3>
                      </div>
                      <div className="row">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="col-md-6 mb-3">
                            <div className="card bg-light text-dark h-100 border-0 shadow-sm">
                              <div className="card-body">
                                <h4 className="h6 mb-2 text-primary">{item.title}</h4>
                                <p className="mb-2">{item.description}</p>
                                <div className="badge bg-primary text-wrap" style={{ maxWidth: '100%', whiteSpace: 'normal' }}>
                                  <FaAward className="me-1" /> Impact: {item.impact}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Summary Statistics */}
        <div className="card bg-white text-dark mt-4 shadow-sm">
          <div className="card-body">
            <h3 className="card-title text-center mb-3 text-primary">Career Highlights</h3>
            <div className="row">
              {[{ value: "4+", label: "Years Experience", icon: <FaCode /> },{ value: "5+", label: "Major Projects", icon: <FaProjectDiagram /> },{ value: "Multiple", label: "Platforms", icon: <FaTrophy /> },{ value: "Teaching", label: "Experience", icon: <FaChalkboardTeacher /> }].map((stat, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-3 mb-2">
                  <div className="card bg-light text-dark h-100 text-center border-0 shadow-sm">
                    <div className="card-body">
                      <div style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#0d6efd' }}>{stat.icon}</div>
                      <div className="h5 mb-1 text-primary">{stat.value}</div>
                      <div>{stat.label}</div>
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

export default AccomplishmentsSection;
