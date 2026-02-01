/**
 * Projects Module
 * 
 * Handles project data, rendering, and filtering
 */

(function() {
  'use strict';
  
  // ========================================
  // PROJECT DATA
  // ========================================
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, and secure checkout. Built with modern web technologies for optimal performance and user experience.',
      image: 'assets/images/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      liveUrl: 'https://example.com/ecommerce',
      sourceUrl: 'https://github.com/username/ecommerce',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team workspaces, and project tracking. Designed for productivity and seamless team collaboration.',
      image: 'assets/images/projects/task-app.jpg',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      category: 'web',
      liveUrl: 'https://example.com/tasks',
      sourceUrl: 'https://github.com/username/task-app',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with real-time forecasts, interactive maps, and location-based alerts. Features responsive design and intuitive data visualization.',
      image: 'assets/images/projects/weather.jpg',
      technologies: ['JavaScript', 'API Integration', 'Chart.js'],
      category: 'web',
      liveUrl: 'https://example.com/weather',
      sourceUrl: 'https://github.com/username/weather-dashboard',
      featured: false
    },
    {
      id: 4,
      title: 'Fitness Tracker Mobile',
      description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics. Includes social features and personalized fitness recommendations.',
      image: 'assets/images/projects/fitness.jpg',
      technologies: ['React Native', 'Redux', 'HealthKit'],
      category: 'mobile',
      liveUrl: '#',
      sourceUrl: 'https://github.com/username/fitness-tracker',
      featured: true
    },
    {
      id: 5,
      title: 'Portfolio Website Template',
      description: 'Modern, responsive portfolio website template for developers and designers. Fully customizable with clean code and comprehensive documentation.',
      image: 'assets/images/projects/portfolio.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'SASS'],
      category: 'design',
      liveUrl: 'https://example.com/portfolio',
      sourceUrl: 'https://github.com/username/portfolio-template',
      featured: false
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      description: 'Comprehensive real estate listing platform with advanced search filters, virtual tours, and appointment scheduling. Built for agents and home buyers.',
      image: 'assets/images/projects/realestate.jpg',
      technologies: ['Next.js', 'PostgreSQL', 'Google Maps API'],
      category: 'web',
      liveUrl: 'https://example.com/realestate',
      sourceUrl: 'https://github.com/username/realestate',
      featured: true
    },
    {
      id: 7,
      title: 'Blog CMS',
      description: 'Headless content management system for blogs and content creators. Features markdown support, media management, and SEO optimization tools.',
      image: 'assets/images/projects/blog-cms.jpg',
      technologies: ['Express.js', 'MySQL', 'REST API'],
      category: 'web',
      liveUrl: '#',
      sourceUrl: 'https://github.com/username/blog-cms',
      featured: false
    },
    {
      id: 8,
      title: 'Brand Identity Design',
      description: 'Complete brand identity design system including logo, color palette, typography guidelines, and marketing materials for a tech startup.',
      image: 'assets/images/projects/branding.jpg',
      technologies: ['Figma', 'Adobe Illustrator', 'Design System'],
      category: 'design',
      liveUrl: '#',
      sourceUrl: '#',
      featured: false
    }
  ];
  
  // ========================================
  // STATE
  // ========================================
  
  let currentFilter = 'all';
  
  // ========================================
  // DOM ELEMENTS
  // ========================================
  
  const projectsGrid = document.querySelector('.projects-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  // ========================================
  // RENDER FUNCTIONS
  // ========================================
  
  /**
   * Create HTML for a single project card
   * @param {Object} project - Project data object
   * @returns {string} HTML string for project card
   */
  function createProjectCard(project) {
    const {
      id,
      title,
      description,
      image,
      technologies,
      category,
      liveUrl,
      sourceUrl
    } = project;
    
    // Create technology tags HTML
    const techTags = technologies
      .map(tech => `<li class="project-tag">${tech}</li>`)
      .join('');
    
    // Determine if links should be shown
    const showLiveLink = liveUrl && liveUrl !== '#';
    const showSourceLink = sourceUrl && sourceUrl !== '#';
    
    return `
      <article class="project-card" data-category="${category}">
        <div class="project-image-wrapper">
          <img 
            src="${image}" 
            alt="${title} screenshot" 
            class="project-image"
            loading="lazy"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22225%22%3E%3Crect fill=%22%23e5e7eb%22 width=%22400%22 height=%22225%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22system-ui%22 font-size=%2218%22 fill=%22%236b7280%22%3EProject Image%3C/text%3E%3C/svg%3E'"
          >
          <div class="project-overlay">
            <div class="project-links">
              ${showLiveLink ? `
                <a 
                  href="${liveUrl}" 
                  class="project-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View ${title} live demo"
                >
                  Live Demo
                </a>
              ` : ''}
              ${showSourceLink ? `
                <a 
                  href="${sourceUrl}" 
                  class="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View ${title} source code"
                >
                  Source Code
                </a>
              ` : ''}
            </div>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${title}</h3>
          <p class="project-description">${description}</p>
          <ul class="project-tags" aria-label="Technologies used">
            ${techTags}
          </ul>
        </div>
      </article>
    `;
  }
  
  /**
   * Render all projects to the grid
   * @param {string} filter - Category filter ('all' or specific category)
   */
  function renderProjects(filter = 'all') {
    if (!projectsGrid) return;
    
    // Filter projects based on category
    const filteredProjects = filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter);
    
    // Check if any projects match the filter
    if (filteredProjects.length === 0) {
      projectsGrid.innerHTML = `
        <div class="projects-empty">
          <p>No projects found in this category.</p>
          <p class="text-sm">Try selecting a different filter.</p>
        </div>
      `;
      return;
    }
    
    // Generate HTML for all filtered projects
    const projectsHTML = filteredProjects
      .map(project => createProjectCard(project))
      .join('');
    
    // Update the grid
    projectsGrid.innerHTML = projectsHTML;
    
    // Announce to screen readers
    announceFilterChange(filteredProjects.length);
  }
  
  /**
   * Announce filter change to screen readers
   * @param {number} count - Number of visible projects
   */
  function announceFilterChange(count) {
    const announcement = `Showing ${count} project${count !== 1 ? 's' : ''}`;
    
    // Create or update live region for screen readers
    let liveRegion = document.getElementById('projects-live-region');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'projects-live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);
    }
    
    liveRegion.textContent = announcement;
  }
  
  // ========================================
  // FILTER FUNCTIONS
  // ========================================
  
  /**
   * Filter projects by category with smooth animation
   * @param {string} category - Category to filter by
   */
  function filterProjects(category) {
    if (category === currentFilter) return;
    
    currentFilter = category;
    
    // Add fade out animation
    const cards = projectsGrid.querySelectorAll('.project-card');
    cards.forEach(card => {
      card.classList.add('fade-out');
    });
    
    // Wait for fade out, then render filtered projects
    setTimeout(() => {
      renderProjects(category);
    }, 300); // Match CSS animation duration
  }
  
  /**
   * Update active state of filter buttons
   * @param {HTMLElement} activeButton - Button that was clicked
   */
  function updateFilterButtons(activeButton) {
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });
    
    activeButton.classList.add('active');
    activeButton.setAttribute('aria-pressed', 'true');
  }
  
  /**
   * Handle filter button click
   * @param {Event} event - Click event
   */
  function handleFilterClick(event) {
    const button = event.currentTarget;
    const filter = button.dataset.filter;
    
    updateFilterButtons(button);
    filterProjects(filter);
  }
  
  // ========================================
  // INITIALIZATION
  // ========================================
  
  /**
   * Initialize the projects module
   */
  function init() {
    // Render all projects initially
    renderProjects('all');
    
    // Set up filter button event listeners
    filterButtons.forEach(button => {
      button.addEventListener('click', handleFilterClick);
    });
    
    // Set initial active filter button
    const defaultButton = document.querySelector('.filter-btn[data-filter="all"]');
    if (defaultButton) {
      defaultButton.classList.add('active');
      defaultButton.setAttribute('aria-pressed', 'true');
    }
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // ========================================
  // PUBLIC API (for debugging)
  // ========================================
  
  window.ProjectsModule = {
    projects,
    renderProjects,
    filterProjects,
    currentFilter: () => currentFilter
  };
  
})();
