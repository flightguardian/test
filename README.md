# Portfolio Website

A modern, responsive single-page portfolio website built with vanilla HTML, CSS, and JavaScript. Features smooth animations, accessible design, and optimized performance.

![Portfolio Preview](assets/images/og-image.jpg)

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Scroll-triggered animations using Intersection Observer API
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Lighthouse score 90+ with lazy-loaded images and optimized assets
- **Modern CSS**: Uses CSS Grid, Flexbox, and CSS Custom Properties (variables)
- **Vanilla JavaScript**: No frameworks or dependencies - pure ES6+ JavaScript
- **Print-Friendly**: Optimized print styles for professional resumes
- **SEO Ready**: Semantic HTML5 markup with proper meta tags

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── main.css           # Main stylesheet (imports all others)
│   ├── variables.css      # CSS custom properties
│   ├── reset.css          # CSS reset/normalize
│   ├── layout.css         # Grid, flexbox, responsive utilities
│   ├── components.css     # Reusable components (buttons, cards, forms)
│   ├── sections.css       # Section-specific styles
│   └── print.css          # Print-specific styles
├── js/
│   ├── main.js            # Main JavaScript entry point
│   ├── animations.js      # Scroll animations (Intersection Observer)
│   ├── projects.js        # Project data and filtering
│   ├── contact.js         # Form validation and submission
│   └── navigation.js      # Navigation and smooth scrolling (optional)
├── assets/
│   ├── images/
│   │   ├── profile.jpg    # Profile photo
│   │   └── projects/      # Project screenshots
│   └── icons/             # SVG icons
├── README.md
└── SCOPE.md               # Project scope and requirements
```

## 🎨 Sections

### 1. Hero/About Section
- Eye-catching hero with gradient background
- Professional photo with border effect
- Name, title, and tagline
- Call-to-action buttons
- Bio section with background and expertise
- Skills showcase organized by category

### 2. Projects Section
- Responsive grid layout (1/2/3 columns)
- Filterable project cards by category
- Project thumbnails with hover effects
- Technology tags
- Links to live demos and source code

### 3. Contact Section
- Validated contact form
- Email, subject, and message fields
- Character counter for message field
- Success/error message handling
- Alternative contact methods (email, social media, location)

## 🛠️ Customization

### Colors
Edit `css/variables.css` to customize the color scheme:

```css
--color-primary: #2563eb;      /* Primary brand color */
--color-secondary: #8b5cf6;    /* Secondary accent color */
--color-success: #10b981;      /* Success color */
--color-error: #ef4444;        /* Error color */
```

### Typography
Change fonts in `css/variables.css`:

```css
--font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', ...;
--font-family-heading: 'Inter', -apple-system, ...;
```

### Spacing
Adjust spacing scale in `css/variables.css`:

```css
--spacing-1: 0.5rem;    /* 8px */
--spacing-2: 1rem;      /* 16px */
--spacing-3: 1.5rem;    /* 24px */
/* ... and so on */
```

### Content
1. **Profile Information**: Update text in `index.html`
2. **Projects**: Edit the `projects` array in `js/projects.js`
3. **Skills**: Update skill categories in `index.html`
4. **Social Links**: Change URLs in the social media section

### Images
Replace images in `assets/images/`:
- `profile.jpg` - Your profile photo (recommended: 400x400px)
- `projects/` - Project screenshots (recommended: 16:9 aspect ratio)
- `og-image.jpg` - Open Graph preview image (recommended: 1200x630px)

## 🚀 Deployment

### Option 1: GitHub Pages (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "main" branch
   - Click "Save"
   - Your site will be live at `https://username.github.io/repository-name`

### Option 2: Netlify

1. **Deploy via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

2. **Or via Netlify UI**:
   - Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)

### Option 3: Vercel

1. **Deploy via Vercel CLI**:
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Or connect GitHub repository** at [vercel.com](https://vercel.com)

## 📋 Performance Checklist

- [x] Images optimized and compressed
- [x] Lazy loading implemented
- [x] CSS minified (for production)
- [x] JavaScript minified (for production)
- [x] Lighthouse Performance score 90+
- [x] WCAG 2.1 AA compliance
- [x] Mobile-responsive design
- [x] Cross-browser tested

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support (Tab, Enter, Escape)
- Focus indicators on all interactive elements
- Color contrast ratio 4.5:1 (WCAG AA)
- Alt text for all images
- Screen reader friendly
- Skip to content link
- Form error announcements

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- iOS Safari 12+
- Chrome Android (latest)

## 🧪 Testing

### Run Lighthouse Audit
1. Open site in Chrome
2. Open DevTools (F12)
3. Go to "Lighthouse" tab
4. Click "Generate report"
5. Target scores:
   - Performance: 90+
   - Accessibility: 100
   - Best Practices: 90+
   - SEO: 90+

### Test Accessibility
1. Use [axe DevTools](https://www.deque.com/axe/devtools/)
2. Or [WAVE browser extension](https://wave.webaim.org/extension/)
3. Test with keyboard only (no mouse)
4. Test with screen reader (NVDA/VoiceOver)

### Test Responsiveness
1. Open Chrome DevTools
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test on:
   - Mobile (375px, 414px)
   - Tablet (768px, 1024px)
   - Desktop (1280px, 1920px)

## 📝 Development Tips

### Local Development
Simply open `index.html` in a browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server

# VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Then visit `http://localhost:8000`

### Debugging
Uncomment console.log statements in JavaScript files:
- `js/main.js`
- `js/animations.js`
- `js/contact.js`
- `js/projects.js`

### Production Build
For production, minify CSS and JavaScript:

```bash
# Using online tools:
# - CSS: https://cssminifier.com/
# - JS: https://javascript-minifier.com/

# Or use build tools if you add them later
```

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 💬 Contact

For questions or suggestions, feel free to reach out:
- Email: your.email@example.com
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- GitHub: [@yourusername](https://github.com/yourusername)

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**
