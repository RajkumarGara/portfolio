# Rajkumar Gara - Portfolio

A modern, interactive portfolio website with stunning glassmorphism design and dynamic particle animations, built with React and advanced web technologies.

🌐 **Live Portfolio:** [https://rajkumargara.github.io/portfolio](https://rajkumargara.github.io/portfolio)

## About

This portfolio showcases my journey as a software engineer with expertise in embedded systems, automotive software development, and web technologies. Built with modern design principles, it features an immersive glassmorphism aesthetic with interactive particle backgrounds and smooth animations.

## Tech Stack

- **Frontend:** React 18.2.0, JavaScript ES6+, HTML5, CSS3
- **Animations:** Framer Motion 10.16.5 for smooth transitions
- **Interactive Elements:** Canvas 2D API for particle effects
- **Typography Animation:** Typed.js for dynamic text effects
- **Icons:** React Icons for modern iconography
- **Build Tool:** Create React App
- **Content Management:** React Markdown for content rendering
- **UI Detection:** React Intersection Observer for scroll animations
- **Deployment:** GitHub Pages
- **Package Manager:** npm

## Features

- ✨ **Glassmorphism Design:** Modern frosted glass aesthetic with backdrop blur effects
- 🎬 **Particle Animation:** Interactive Canvas 2D particle background with connecting lines
- 🎭 **Smooth Animations:** Framer Motion powered transitions and scroll-triggered animations
- ⚡ **Dynamic Typography:** Typed.js animated text effects in header
- 📱 **Responsive Design:** Optimized for all devices and screen sizes
- 🎨 **Modern UI/UX:** Professional styling with CSS custom properties
- 📄 **Markdown Content:** Easy content management with Markdown files
- 🔗 **Smooth Navigation:** Intersection observer-based active section highlighting
- 📧 **Interactive Contact:** Engaging contact section with social media links
- 🚀 **Performance Optimized:** Fast loading with clean, modular code structure

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
│   ├── Header.js              # Profile header with animated typing and contact info
│   ├── Footer.js              # Modern footer with tech stack and social links
│   ├── ParticlesBackground.js # Canvas 2D particle animation system
│   ├── ExperienceSection.js   # Professional experience with animations
│   ├── ProjectsSection.js     # Featured projects showcase
│   ├── SkillsSection.js       # Technical skills with visual indicators
│   ├── EducationSection.js    # Education background display
│   └── AccomplishmentsSection.js # Achievements and accomplishments
├── content/
│   ├── education.md           # Education background content
│   ├── experience.md          # Work experience details
│   ├── projects.md           # Featured projects information
│   ├── skills.md             # Technical skills listing
│   ├── accomplishments.md    # Achievements and certifications
│   └── contact.md            # Contact information
├── assets/
│   └── Raj Gara002.JPG      # Profile image
├── App.js                    # Main application with routing and scroll detection
├── App.css                   # Global styles with CSS custom properties
└── index.js                  # Application entry point
```

## Design System

### Color Palette
- **Primary Colors:** Deep blues and teals with gradient overlays
- **Glass Effects:** Semi-transparent backgrounds with backdrop blur
- **Accent Colors:** Bright highlights for interactive elements
- **Typography:** Clean, modern fonts with proper contrast

### Animation System
- **Entrance Animations:** Staggered fade-ins and slide-ups using Framer Motion
- **Scroll Triggers:** Intersection Observer API for performance-optimized animations
- **Particle System:** Custom Canvas 2D implementation with dynamic connections
- **Hover Effects:** Subtle transformations and glow effects

### Responsive Breakpoints
- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px and above

## Content Management

Content is managed through Markdown files in the `src/content/` directory. Each section loads its content dynamically, making it easy to update information without touching the codebase.

### Updating Content
1. Navigate to the relevant `.md` file in `src/content/`
2. Edit the content using standard Markdown syntax
3. Save the file - changes will be reflected automatically

## Performance Features

- **Optimized Animations:** Hardware-accelerated CSS transforms and Canvas 2D
- **Lazy Loading:** Intersection Observer for efficient scroll-based animations
- **Modern Bundle:** Tree-shaking and code-splitting with Create React App
- **CSS Custom Properties:** Efficient styling system with minimal redundancy
- **Lightweight Dependencies:** Carefully selected packages for optimal performance

## Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Rajkumar Gara**
- Portfolio: [https://rajkumargara.github.io/portfolio](https://rajkumargara.github.io/portfolio)
- Email: [rajkumar.gara@example.com](mailto:rajkumar.gara@example.com)
- LinkedIn: [linkedin.com/in/rajkumargara](https://linkedin.com/in/rajkumargara)
- GitHub: [@RajkumarGara](https://github.com/RajkumarGara)
