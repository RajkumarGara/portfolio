import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Computer Engineering",
      university: "Purdue University",
      location: "Fort Wayne, Indiana, USA",
      period: "2022 - 2024",
      gpa: "4.0/4.0",
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
      gpa: "9.2/10.0",
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

  return (
    <div className="container-fluid bg-light py-4">
      <div className="container">
        <div className="card bg-white text-dark mb-4 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-center mb-3 text-primary">Education</h2>
            <div className="row">
              {education.map((edu, index) => (
                <div key={index} className="col-12 mb-3">
                  <div className="card bg-white text-dark h-100 border-0 shadow-sm border-start border-4 border-info">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <span style={{ fontSize: '2rem', marginRight: '1rem', color: '#0d6efd' }}><FaGraduationCap /></span>
                        <h3 className="h5 mb-0 text-primary">{edu.degree}</h3>
                      </div>
                      <div className="mb-2">
                        <span className="me-3"><FaUniversity className="me-1 text-primary" />{edu.university}</span>
                        <span className="me-3"><FaMapMarkerAlt className="me-1 text-primary" />{edu.location}</span>
                        <span><FaCalendarAlt className="me-1 text-primary" />{edu.period}</span>
                      </div>
                      <span className="badge bg-primary mb-3">GPA: {edu.gpa}</span>
                      <div className="row">
                        <div className="col-md-6">
                          <h4 className="h6 text-primary">Key Coursework</h4>
                          <ul className="list-group list-group-flush">
                            {edu.coursework.map((course, i) => (
                              <li key={i} className="list-group-item bg-white text-dark">{course}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h4 className="h6 text-primary">Achievements</h4>
                          <ul className="list-group list-group-flush">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="list-group-item bg-white text-dark">{achievement}</li>
                            ))}
                          </ul>
                        </div>
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

export default EducationSection;
