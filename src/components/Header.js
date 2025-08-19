import React from 'react';

function Header() {
  return (
    <header style={{textAlign: 'center', padding: '2rem 0'}}>
  <img src={require('../assets/Raj Gara002.JPG')} alt="Rajkumar Gara" style={{width: 120, height: 120, objectFit: 'cover', borderRadius: '50%', marginBottom: '1rem', boxShadow: '0 2px 12px rgba(26,115,232,0.10)'}} />
  <h1 style={{fontSize: '2.2rem', marginBottom: '0.5rem', fontWeight: 700}}>Rajkumar Gara</h1>
      <p style={{fontSize: '1.08rem', color: '#444', marginBottom: '0.7rem'}}>
        <span style={{marginRight: '1.5rem'}}>
          <strong>Email:</strong> <a href="mailto:rajkumar.gara3@gmail.com" style={{color: '#1a73e8', textDecoration: 'none'}}>rajkumar.gara3@gmail.com</a>
        </span>
        <span><strong>Mobile:</strong> +1(260)4101373</span>
      </p>
      <div style={{display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem'}}>
        <a href="https://github.com/RajkumarGara" target="_blank" rel="noopener noreferrer" style={{color: '#222', textDecoration: 'none', fontSize: '1.5rem'}}>
          <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle', marginRight: '0.3rem'}}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/rajkumargara/" target="_blank" rel="noopener noreferrer" style={{color: '#0077b5', textDecoration: 'none', fontSize: '1.5rem'}}>
          <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle', marginRight: '0.3rem'}}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2 3.597 4.59v5.606z"/></svg>
          LinkedIn
        </a>
      </div>
    </header>
  );
}

export default Header;
