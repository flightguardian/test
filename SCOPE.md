# SCOPE.md - Portfolio Website

## Project Overview

A single-page portfolio website designed to showcase professional work, skills, and provide contact capabilities. Built with vanilla HTML, CSS, and JavaScript with no framework dependencies, ensuring fast load times and easy customization.

## Technical Requirements

### Core Technologies

- **HTML5**: Semantic markup, accessibility features
- **CSS3**: Custom properties (variables), Grid, Flexbox, animations
- **JavaScript**: ES6+, no frameworks or libraries
- **Assets**: Optimized images (WebP with PNG/JPG fallbacks), SVG icons

### Performance Requirements

- Initial page load: < 1 second on 3G
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s
- Lighthouse Performance score: 90+
- Total bundle size: < 200KB (excluding images)
- Images: optimized, lazy-loaded, responsive sizes

### Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile: iOS Safari 12+, Chrome Android (latest)
- Graceful degradation for older browsers

### Accessibility (WCAG 2.1 AA)

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels for interactive elements
- Keyboard navigation (Tab, Enter, Escape)
- Focus indicators (visible outlines)
- Color contrast: 4.5:1 for normal text, 3:1 for large text
- Alt text for all images
- Form labels and error messages
- Skip to content link
- Heading hierarchy (h1 → h2 → h3)

### Responsive Design

**Breakpoints**:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

**Mobile-First Approach**:
- Design for mobile first, enhance for larger screens
- Touch-friendly targets (44x44px minimum)
- Readable font sizes (16px minimum)
- No horizontal scroll
- Hamburger menu for mobile navigation

## Content Requirements

### 1. About Section

**Objective**: Introduce yourself professionally and highlight key skills

**Content Elements**:
- Hero area with:
  - Professional photo or illustration
  - Name and title/role
  - Brief tagline (1-2 sentences)
  - Call-to-action buttons (View Projects, Contact Me)
- Bio section:
  - 2-3 paragraphs about background, expertise, passion
  - Professional tone, personable and engaging
- Skills showcase:
  - Visual representation (icons, progress bars, or simple list)
  - 8-12 key skills organized by category
  - Frontend, Backend, Tools, Soft Skills categories
- Additional elements:
  - Social media links (GitHub, LinkedIn, Twitter, etc.)
  - Download resume button
  - Years of experience indicator

**Technical Implementation**:
- Semantic HTML (`<section id="about">`, `<article>`, `<figure>`)
- CSS Grid for layout
- Smooth animations on scroll (fade-in, slide-up)
- Responsive image sizing
- Print-friendly version

### 2. Projects Grid

**Objective**: Showcase portfolio work in an organized, filterable grid

**Content Elements**:
- Section heading and intro text
- Filter buttons:
  - All Projects
  - Category filters (Web Apps, Mobile, Design, etc.)
  - Technology filters (React, Python, etc.)
- Project cards (6-12 projects) with:
  - Project thumbnail/screenshot
  - Project title
  - Brief description (2-3 sentences)
  - Technology tags/badges
  - Links to:
    - Live demo (if available)
    - Source code (GitHub)
    - Case study (optional)
  - Completion date or status
- Hover effects:
  - Image overlay with project details
  - Smooth transitions
  - Lift/shadow effect

**Technical Implementation**:
- Projects stored as JavaScript array of objects
- Dynamic rendering via vanilla JS
- CSS Grid for responsive layout (1 column mobile, 2 tablet, 3 desktop)
- Filter functionality:
  - Show/hide based on selected filter
  - Smooth animations (fade in/out)
  - Update URL hash for shareable filtered views
- Lazy loading for project images
- Modal/lightbox for expanded project details (optional)

**Project Data Structure**:
```javascript
{
  id: 1,
  title: 'Project Name',
  description: 'Brief description',
  image: 'path/to/image.jpg',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  category: 'web',
  liveUrl: 'https://...',
  sourceUrl: 'https://github.com/...',
  featured: true,
  completedDate: '2024-01'
}
```

### 3. Contact Form

**Objective**: Provide easy way for visitors to get in touch

**Content Elements**:
- Section heading and intro text
- Form fields:
  - Name (required, text input)
  - Email (required, email input with validation)
  - Subject (optional, text input)
  - Message (required, textarea, 500 char max)
  - Submit button
- Alternative contact methods:
  - Direct email link
  - Phone number (optional)
  - Social media links
  - Location (city/region, optional)
- Privacy notice (how data is used)

**Technical Implementation**:
- HTML5 form with proper attributes (`required`, `type="email"`, `maxlength`)
- Client-side validation:
  - Check all required fields filled
  - Validate email format
  - Character limits enforced
  - Clear, inline error messages
- Form submission:
  - Prevent default form submission
  - Display loading state during submission
  - Success message after submission
  - Error handling for failed submissions
  - Form reset after successful submission
- Backend integration options:
  - Formspree (simple, no backend needed)
  - EmailJS
  - Custom backend endpoint (PHP, Node.js)
  - For demo: console.log submission and show success
- Accessibility:
  - Proper label associations
  - Error announcements for screen readers
  - Focus management

## Navigation

### Fixed Header Navigation

**Desktop**:
- Horizontal nav bar with links to sections
- Smooth scroll to section on click
- Active section highlighting
- Logo/name on left, nav links on right
- Scroll-triggered background (transparent → solid)

**Mobile**:
- Hamburger menu icon
- Slide-in/overlay navigation panel
- Close button or outside click to dismiss
- Full-height menu with large touch targets
- Smooth transitions

**Technical Implementation**:
- Sticky/fixed positioning (`position: fixed`)
- Intersection Observer API for active section detection
- Smooth scroll behavior (`scroll-behavior: smooth` or JS)
- Toggle class for mobile menu open/close
- Prevent body scroll when mobile menu open
- Keyboard accessible (Tab, Enter, Escape)

## Styling & Design

### Color Scheme

**Requirements**:
- Professional and modern
- Primary color (brand/accent)
- Secondary color (support)
- Neutral colors (grays for text, backgrounds)
- Light and dark mode support (optional but recommended)
- WCAG AA contrast ratios

**Suggested Palette** (customizable):
- Primary: #2563eb (blue)
- Secondary: #8b5cf6 (purple)
- Success: #10b981 (green)
- Neutral Dark: #1f2937
- Neutral Light: #f3f4f6
- Text: #111827 (dark), #f9fafb (light)

### Typography

**Requirements**:
- 2 fonts maximum (heading + body)
- System fonts or web fonts (Google Fonts)
- Responsive font sizing (clamp() or media queries)
- Clear hierarchy (h1 > h2 > h3 > body)
- Readable line height (1.5-1.75 for body)
- Optimal line length (60-80 characters)

**Suggested Fonts**:
- Headings: 'Inter', 'Poppins', or 'Montserrat'
- Body: 'Inter', 'Open Sans', or system fonts
- Code: 'Fira Code' or 'JetBrains Mono' (if needed)

### Spacing

- Consistent spacing scale (8px base, e.g., 8, 16, 24, 32, 48, 64)
- Section padding: 64-128px vertical
- Component margin/padding: multiples of 8px
- Responsive adjustments (less padding on mobile)

### Components

**Buttons**:
- Primary (filled), Secondary (outline), Text (no border)
- Hover states, active states, disabled states
- Focus indicators
- Loading states (spinner)
- Consistent padding and border-radius

**Cards**:
- Shadow or border
- Hover effects (lift, shadow increase)
- Rounded corners
- Consistent internal padding

**Forms**:
- Input styling (border, focus state, error state)
- Label positioning
- Helper text styling
- Error message styling

### Animations

**Allowed**:
- Fade in on scroll (sections, cards)
- Slide up on scroll
- Hover transitions (color, transform, shadow)
- Button hover effects
- Loading spinners
- Mobile menu slide-in/out

**Performance**:
- Use `transform` and `opacity` only (GPU-accelerated)
- Avoid animating `width`, `height`, `margin`, `padding`
- Use `will-change` sparingly
- Respect `prefers-reduced-motion` media query

## JavaScript Functionality

### Required Features

1. **Smooth Scrolling**:
   - Click nav link → smooth scroll to section
   - Update URL hash
   - Handle back/forward browser navigation

2. **Mobile Menu Toggle**:
   - Open/close hamburger menu
   - Close on link click
   - Close on outside click
   - Close on Escape key
   - Prevent body scroll when open

3. **Active Section Highlighting**:
   - Detect which section is in viewport
   - Highlight corresponding nav link
   - Use Intersection Observer API

4. **Project Filtering**:
   - Click filter button → show/hide projects
   - Smooth fade transitions
   - Update active filter button styling
   - Maintain responsive layout

5. **Form Validation & Submission**:
   - Validate on blur and submit
   - Show inline error messages
   - Submit form (log to console for demo)
   - Show success message
   - Reset form after success

6. **Scroll-to-Top Button** (optional):
   - Appears after scrolling down
   - Smooth scroll to top on click
   - Fade in/out animation

### Code Organization

```
js/
├── navigation.js       # Smooth scroll, mobile menu, active section
├── projects.js         # Project data, rendering, filtering
├── contact.js          # Form validation and submission
├── animations.js       # Scroll animations, intersection observer
└── main.js             # Init all modules
```

**Principles**:
- Modular code (separate concerns)
- No global pollution (use IIFE or ES6 modules)
- Event delegation where appropriate
- Debounce scroll/resize handlers
- ES6+ syntax (const/let, arrow functions, template literals)
- Comments for complex logic

## File Structure

```
portfolio/
├── index.html              # Single HTML file
├── css/
│   ├── variables.css       # CSS custom properties (colors, spacing, fonts)
│   ├── reset.css          # CSS reset/normalize
│   ├── layout.css         # Grid, flexbox, responsive utilities
│   ├── components.css     # Buttons, cards, forms
│   ├── sections.css       # About, projects, contact sections
│   └── main.css           # Main stylesheet (imports all others)
├── js/
│   ├── navigation.js
│   ├── projects.js
│   ├── contact.js
│   ├── animations.js
│   └── main.js
├── assets/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── projects/
│   │   │   ├── project1.jpg
│   │   │   └── ...
│   │   └── optimized/     # WebP versions
│   └── icons/
│       ├── github.svg
│       ├── linkedin.svg
│       └── ...
├── .gitignore
├── README.md
└── SCOPE.md
```

## Task Plan

This section outlines all tasks in the project so every agent has shared context about the overall development plan and how tasks relate to each other.

### Wave 1: Foundation

**Task 1: Project Structure & HTML Foundation**
- **Purpose**: Set up project structure and create semantic HTML
- **Dependencies**: None (first task)
- **Deliverables**: Complete HTML structure with all sections, proper semantic tags, accessibility attributes, meta tags for SEO
- **Connects to**: All subsequent tasks depend on this HTML structure

**Task 2: CSS Architecture & Design System**
- **Purpose**: Create CSS foundation with variables, reset, and design tokens
- **Dependencies**: None (runs parallel with Task 1)
- **Deliverables**: CSS variables (colors, spacing, typography), CSS reset, responsive utilities, design system documented in comments
- **Connects to**: All styling tasks (3, 4, 5) build on these foundations

### Wave 2: Content & Styling

**Task 3: About Section Styling**
- **Purpose**: Style the hero and about section with responsive layout
- **Dependencies**: Task 1 (HTML), Task 2 (CSS foundation)
- **Deliverables**: Styled hero section, bio layout, skills showcase, social links, fully responsive, smooth animations on scroll
- **Connects to**: Task 6 (animations)

**Task 4: Projects Grid Implementation**
- **Purpose**: Build the projects grid with responsive layout and cards
- **Dependencies**: Task 1 (HTML), Task 2 (CSS foundation)
- **Deliverables**: Project card styling, responsive grid (1/2/3 columns), hover effects, project data structure in JS, dynamic rendering
- **Connects to**: Task 6 (filtering), Task 7 (animations)

**Task 5: Contact Form Styling & Validation**
- **Purpose**: Style and implement contact form with validation
- **Dependencies**: Task 1 (HTML), Task 2 (CSS foundation)
- **Deliverables**: Styled form inputs, error states, client-side validation, form submission handling, success/error messages
- **Connects to**: Task 7 (form interactivity)

### Wave 3: Interactivity & Polish

**Task 6: Navigation & Scroll Behavior**
- **Purpose**: Implement smooth scrolling, mobile menu, active section detection
- **Dependencies**: Task 1 (HTML), Task 2 (CSS), Task 3 (About section)
- **Deliverables**: Smooth scroll navigation, mobile hamburger menu with slide-in, active section highlighting, scroll-to-top button
- **Connects to**: Enhances all sections

**Task 7: Final Polish & Testing**
- **Purpose**: Cross-browser testing, accessibility audit, performance optimization
- **Dependencies**: All previous tasks (3, 4, 5, 6)
- **Deliverables**: Image optimization, lazy loading, browser compatibility fixes, accessibility verification (WCAG AA), Lighthouse audit passing 90+, print styles, documentation
- **Connects to**: Prepares site for deployment

## Success Criteria

### Functional Requirements
- All sections (About, Projects, Contact) complete and functional
- Navigation works smoothly across all sections
- Projects can be filtered by category/technology
- Contact form validates and submits (with demo handling)
- Mobile menu opens/closes properly
- All links and buttons work

### Performance Benchmarks
- Lighthouse Performance: 90+
- Page load time: < 1s on fast connection, < 3s on 3G
- Total bundle size: < 200KB (excluding images)
- Images optimized (WebP with fallbacks)

### Accessibility Compliance
- WCAG 2.1 AA compliant
- Keyboard navigable (all interactive elements)
- Screen reader friendly (tested with NVDA/VoiceOver)
- Color contrast passing (4.5:1 minimum)
- Focus indicators visible

### Browser Testing
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Mobile: iOS Safari, Chrome Android
- No major visual or functional bugs
- Graceful degradation for older browsers

### Responsive Design
- Mobile (320px-767px): single column, hamburger menu
- Tablet (768px-1023px): 2-column projects grid
- Desktop (1024px+): 3-column projects grid, horizontal nav
- No horizontal scroll at any breakpoint
- Touch targets minimum 44x44px

## Out of Scope

- Backend server or database
- User authentication or accounts
- Blog or content management system
- E-commerce functionality
- Real-time chat or messaging
- Analytics integration (can be added later)
- Multilingual support
- Advanced animations or WebGL
- Video backgrounds or complex media

## Constraints

- No frameworks or libraries (vanilla JS only)
- No build tools required (optional for optimization)
- Static hosting compatible (GitHub Pages, Netlify, Vercel)
- No runtime dependencies
- Must work without JavaScript (progressive enhancement)
- Single HTML page (no multi-page routing)

## Deployment

**Recommended Platforms**:
1. GitHub Pages (free, easy)
2. Netlify (free tier, custom domain)
3. Vercel (free tier, excellent performance)
4. Any static hosting service

**Build Steps**:
1. Optimize images (compress, convert to WebP)
2. Minify CSS and JS (optional, for production)
3. Test on multiple devices/browsers
4. Deploy to hosting platform
5. Configure custom domain (optional)

**Post-Deployment**:
- Test all functionality on live site
- Verify mobile responsiveness
- Check all external links
- Monitor performance (PageSpeed Insights)
- Set up basic analytics (optional)