import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

function EducationSection() {
  const education = [
    {
      degree: "Master of Science - Computer Science",
      university: "Purdue University",
      location: "Indiana, US",
      period: "Aug 2022 - Dec 2023",
      gpa: "4.00/4.00",
      coursework: [
        "Operating Systems",
        "Algorithm Design and Analysis",
        "Web Development",
        "Applications of Deep Learning",
        "Machine Learning",
        "Natural Language Processing"
      ],
      achievements: [
        "Teaching Assistant - Deep Learning",
        "Research Collaboration in Data Science"
      ]
    },
    {
      degree: "B.Tech - Electronics & Communication Engineering",
      university: "GMR Institute of Technology",
      location: "India",
      period: "June 2015 - May 2019",
      gpa: "9.16/10.0",
      coursework: [
        "Microprocessors and Microcontrollers",
        "Digital Electronics",
        "Control Systems",
        "Communication Systems"
      ],
      achievements: [
        "Graduated with Distinction",
        "Goldmedalist"
      ]
    }
  ];

  return (
    <div className="section-container">
      <div className="container">
        <div className="section-card">
          <h2 className="section-title">Education</h2>
          <div className="row g-3">
            {education.map((edu, index) => (
              <div key={index} className="col-12">
                <div className="edu-card">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-start">
                      <FaGraduationCap style={{ fontSize: '1.5rem', marginRight: '0.75rem', color: 'var(--accent)', marginTop: '0.2rem' }} />
                      <div>
                        <h3 className="h5 mb-1" style={{ color: 'var(--text-primary)' }}>{edu.degree}</h3>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                          <FaUniversity className="me-1" style={{ color: 'var(--accent)' }} />{edu.university}
                          <span className="mx-2">|</span>
                          <FaMapMarkerAlt className="me-1" style={{ color: 'var(--accent)' }} />{edu.location}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 mt-md-0 text-md-end">
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                        <FaCalendarAlt className="me-1" style={{ color: 'var(--accent)' }} />{edu.period}
                      </div>
                      <span className="tech-badge mt-1 d-inline-block" style={{ fontSize: '0.8rem' }}>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <h4 className="mono mb-2" style={{ color: 'var(--accent)', fontSize: '0.82rem' }}>Key Coursework</h4>
                      <div className="d-flex flex-wrap gap-1 mb-2">
                        {edu.coursework.map((course, i) => (
                          <span key={i} className="tech-badge">{course}</span>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-5">
                      <h4 className="mono mb-2" style={{ color: 'var(--accent)', fontSize: '0.82rem' }}>Achievements</h4>
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="exp-list-item" style={{ fontSize: '0.85rem' }}>{achievement}</div>
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
  );
}

export default EducationSection;
