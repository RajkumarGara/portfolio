import React from 'react';
import Header from './components/Header';
import Sections from './components/Sections';
import Footer from './components/Footer';
import './App.css';

const navLinks = [
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Accomplishments', href: '#accomplishments' },
];

function App() {
  return (
    <div className="app-container">
      <Header />
      <nav>
        {navLinks.map(link => (
          <a key={link.name} href={link.href}>{link.name}</a>
        ))}
      </nav>
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
