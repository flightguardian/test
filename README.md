# Portfolio Website

A clean, modern single-page portfolio website showcasing your work, skills, and contact information.

## Features

### About Section
- Professional introduction and bio
- Skills and expertise showcase
- Downloadable resume/CV option
- Social media links

### Projects Grid
- Responsive grid layout showcasing your best work
- Project cards with:
  - Project thumbnails/screenshots
  - Project titles and descriptions
  - Technology stack tags
  - Links to live demos and source code
- Filterable by category or technology
- Hover effects and transitions

### Contact Form
- Functional contact form with:
  - Name, email, and message fields
  - Client-side validation
  - Clear error messaging
  - Success confirmation
- Form submission handling (can integrate with services like Formspree or custom backend)
- Alternative contact methods (email, social links)

### Design & UX
- Fully responsive (mobile, tablet, desktop)
- Smooth scrolling navigation
- Modern, clean aesthetic
- Fast loading times
- Accessible (WCAG 2.1 AA compliant)
- Print-friendly styles

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **Tools**: CSS autoprefixer for browser compatibility

## Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── variables.css       # CSS custom properties
│   ├── reset.css          # CSS reset/normalize
│   ├── layout.css         # Grid and layout styles
│   ├── components.css     # Reusable component styles
│   └── main.css           # Main stylesheet
├── js/
│   ├── navigation.js      # Smooth scrolling, mobile menu
│   ├── projects.js        # Project filtering and display
│   ├── contact.js         # Form validation and handling
│   └── main.js            # Main JavaScript entry point
├── assets/
│   ├── images/            # Project screenshots, profile photo
│   └── icons/             # SVG icons
└── README.md
```

## Getting Started

### Prerequisites

A modern web browser and a local development server.

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Open with a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

3. Visit `http://localhost:8000` in your browser

## Customization

### Updating Content

1. **About Section**: Edit the about section in `index.html`
2. **Projects**: Update the projects array in `js/projects.js`
3. **Colors**: Modify CSS custom properties in `css/variables.css`
4. **Fonts**: Change font imports and variables in `css/variables.css`

### Adding Projects

Edit the projects array in `js/projects.js`:

```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Brief description',
    image: 'assets/images/project.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/username/repo',
    category: 'web'
  }
];
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari 12+, Chrome Android)

## Performance

- Optimized images (WebP with fallbacks)
- Lazy loading for images
- Minified CSS and JavaScript for production
- No external dependencies or frameworks
- Target: < 1s load time on 3G

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly
- Color contrast WCAG AA compliant
- Focus indicators on interactive elements

## License

MIT License - feel free to use this template for your own portfolio.

## Contact

Your Name - [email@example.com](mailto:email@example.com)

Project Link: [https://github.com/username/portfolio](https://github.com/username/portfolio)