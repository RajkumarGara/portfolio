# Rajkumar Gara - Portfolio

A modern, responsive portfolio website built with React, showcasing my professional experience, projects, skills, and accomplishments.

🌐 **Live Portfolio:** [https://rajkumargara.github.io/portfolio](https://rajkumargara.github.io/portfolio)

## About

This portfolio website presents my journey as a software engineer with expertise in embedded systems, automotive software development, and web technologies. It features sections for education, experience, projects, skills, and accomplishments.

## Tech Stack

- **Frontend:** React 18, JavaScript, HTML5, CSS3
- **Build Tool:** Create React App
- **Markdown:** React Markdown for content rendering
- **Deployment:** GitHub Pages
- **Package Manager:** npm

## Features

- 📱 Responsive design that works on all devices
- 🎨 Clean, modern UI with professional styling
- 📄 Markdown-based content management
- 🔗 Interactive navigation with smooth scrolling
- 📧 Contact information and social media links
- 🚀 Fast loading with optimized build

## Development

### Prerequisites
- Node.js (version 14 or higher)
- npm

### Installation
```bash
git clone https://github.com/RajkumarGara/portfolio.git
cd portfolio
npm install
```

### Running Locally
```bash
npm start
```
This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production
```bash
npm run build
```
Builds the app for production to the `build` folder.

### Deployment
```bash
npm run deploy
```
Deploys the built app to GitHub Pages.

## Project Structure

```
src/
├── components/
│   ├── Header.js      # Profile header with contact info
│   ├── Sections.js    # Main content sections
│   └── Footer.js      # Footer component
├── content/
│   ├── education.md   # Education background
│   ├── experience.md  # Work experience
│   ├── projects.md    # Featured projects
│   ├── skills.md      # Technical skills
│   └── accomplishments.md # Achievements
├── assets/            # Images and media files
├── App.js            # Main application component
├── App.css           # Global styles
└── index.js          # Application entry point
```

## Content Management

Content is managed through Markdown files in the `src/content/` directory.
