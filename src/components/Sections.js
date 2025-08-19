import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const sections = [
  { name: 'Education', file: require('../content/education.md'), id: 'education' },
  { name: 'Experience', file: require('../content/experience.md'), id: 'experience' },
  { name: 'Projects', file: require('../content/projects.md'), id: 'projects' },
  { name: 'Skills', file: require('../content/skills.md'), id: 'skills' },
  { name: 'Accomplishments', file: require('../content/accomplishments.md'), id: 'accomplishments' },
];

function Section({ name, file, id }) {
  const [content, setContent] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch(file)
      .then(res => res.text())
      .then(setContent);
    setTimeout(() => setVisible(true), 200);
  }, [file]);

  return (
    <section id={id} className={visible ? 'fade-in' : ''} style={{ marginBottom: '2rem' }}>
      <h2 style={{marginTop: 0, marginBottom: '1.2rem', fontSize: '2rem', fontWeight: 700, letterSpacing: '0.01em', color: '#1a73e8'}}>{name}</h2>
      <ReactMarkdown>{content}</ReactMarkdown>
    </section>
  );
}

function Sections() {
  return (
    <div>
      {sections.map(({ name, file, id }) => (
        <Section key={name} name={name} file={file} id={id} />
      ))}
    </div>
  );
}

export default Sections;
