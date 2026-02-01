# Contributing Guidelines

Thank you for considering contributing to this portfolio template! This document outlines the coding standards and best practices used in this project.

## Code Standards

### HTML

- **Semantic Markup**: Use appropriate HTML5 semantic elements
  ```html
  ✅ <header>, <nav>, <main>, <section>, <article>, <footer>
  ❌ <div class="header">, <div class="nav">
  ```

- **Accessibility**: Always include ARIA labels and alt text
  ```html
  ✅ <img src="..." alt="Descriptive text">
  ✅ <button aria-label="Close menu">
  ❌ <img src="...">
  ❌ <button>X</button>
  ```

- **Indentation**: 4 spaces (no tabs)

- **Attributes Order**:
  1. Class
  2. ID
  3. Data attributes
  4. ARIA attributes
  5. Other attributes

### CSS

- **Architecture**: Follow the modular CSS structure
  ```
  variables.css → reset.css → layout.css → components.css → sections.css → print.css
  ```

- **Naming Convention**: Use kebab-case
  ```css
  ✅ .hero-image, .skill-category-title
  ❌ .heroImage, .skill_category_title
  ```

- **CSS Variables**: Use custom properties from `variables.css`
  ```css
  ✅ color: var(--color-primary);
  ❌ color: #2563eb;
  ```

- **Mobile-First**: Write mobile styles first, then enhance for larger screens
  ```css
  ✅ .element { width: 100%; }
     @media (min-width: 768px) { .element { width: 50%; } }
  
  ❌ .element { width: 50%; }
     @media (max-width: 767px) { .element { width: 100%; } }
  ```

- **Selectors**: Keep specificity low
  ```css
  ✅ .card { ... }
  ❌ div.card.project-card { ... }
  ```

- **Property Order**:
  1. Positioning (position, top, right, bottom, left, z-index)
  2. Display & Box Model (display, flex/grid props, width, height, margin, padding)
  3. Typography (font, color, text-align)
  4. Visual (background, border, box-shadow)
  5. Misc (transition, animation, cursor)

### JavaScript

- **ES6+ Syntax**: Use modern JavaScript
  ```javascript
  ✅ const, let, arrow functions, template literals
  ❌ var, function declarations (unless needed)
  ```

- **IIFE Pattern**: Wrap code to avoid global scope pollution
  ```javascript
  (function() {
    'use strict';
    // Your code here
  })();
  ```

- **Naming Convention**:
  - Variables/Functions: camelCase
  - Constants: UPPER_SNAKE_CASE
  - Classes: PascalCase

- **Comments**: Document complex logic
  ```javascript
  /**
   * Validate email format
   * @param {string} email - Email address to validate
   * @returns {boolean} True if valid, false otherwise
   */
  function validateEmail(email) {
    // Implementation
  }
  ```

- **No Console in Production**: Comment out console.log
  ```javascript
  ✅ // Debug: console.log('Status:', status);
  ❌ console.log('Status:', status);
  ```

## Performance Best Practices

### Images
- Compress all images before adding
- Use WebP format with fallbacks
- Add width/height attributes
- Implement lazy loading for below-fold images
- Use appropriate image sizes (don't use 4000px image for 400px display)

### CSS
- Minimize use of expensive properties (box-shadow, transform, opacity are OK)
- Avoid animating layout properties (width, height, margin, padding)
- Use transform and opacity for animations
- Implement `will-change` sparingly

### JavaScript
- Use Intersection Observer instead of scroll events
- Debounce expensive operations
- Minimize DOM manipulation
- Use event delegation where appropriate

## Accessibility Requirements

### WCAG 2.1 AA Compliance

- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Keyboard Navigation**: All interactive elements must be keyboard accessible
- **Focus Indicators**: Visible focus states (2px outline minimum)
- **Alt Text**: Descriptive alternative text for all images
- **Form Labels**: Proper label associations
- **ARIA Labels**: For icons and interactive elements without text
- **Semantic HTML**: Use proper heading hierarchy (h1 → h2 → h3)
- **Skip Links**: Provide skip-to-content link
- **Error Messages**: Announced to screen readers

### Testing Checklist

- [ ] Test with keyboard only (Tab, Enter, Escape)
- [ ] Test with screen reader (NVDA or VoiceOver)
- [ ] Check color contrast with tool
- [ ] Verify focus indicators visible
- [ ] Run axe DevTools or WAVE
- [ ] Test on mobile devices
- [ ] Test in landscape and portrait

## Browser Testing

Test on:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari (iOS 12+)
- Chrome Android (latest)

## Git Workflow

1. **Create a branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes**: Follow code standards above

3. **Test thoroughly**:
   - Visual test on different screen sizes
   - Keyboard navigation
   - Screen reader
   - Browser compatibility
   - Lighthouse audit

4. **Commit with descriptive message**:
   ```bash
   git commit -m "Add: Hero section with gradient background"
   ```

   Commit message format:
   - `Add:` New feature
   - `Fix:` Bug fix
   - `Update:` Modify existing feature
   - `Remove:` Delete code/feature
   - `Refactor:` Code restructuring
   - `Docs:` Documentation changes
   - `Style:` Formatting, whitespace
   - `Test:` Add or update tests

5. **Push and create PR**:
   ```bash
   git push origin feature/your-feature-name
   ```

## File Organization

- Keep files small and focused
- One component per file when possible
- Group related functionality
- Use clear, descriptive file names

## Comments

- Write self-documenting code when possible
- Comment "why", not "what"
- Use JSDoc for functions
- Add section headers in CSS/JS files
- Keep comments up-to-date

## Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Can I Use](https://caniuse.com/)
- [CSS Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)

## Questions?

If you have questions about these guidelines or need clarification, please open an issue for discussion.

---

Thank you for contributing and helping make this portfolio template better! 🎉
