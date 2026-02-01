/**
 * Navigation Module
 * 
 * Handles smooth scrolling, mobile menu, active section detection,
 * scroll-to-top button, and header scroll effects
 */

(function() {
  'use strict';
  
  // ========================================
  // CONFIGURATION
  // ========================================
  
  const CONFIG = {
    headerScrollThreshold: 50, // Pixels scrolled before header background appears
    scrollToTopThreshold: 300, // Pixels scrolled before scroll-to-top button appears
    scrollBehavior: 'smooth',
    scrollOffset: 80, // Offset for fixed header (in pixels)
    sectionObserverThreshold: 0.3, // How much of section should be visible
  };
  
  // ========================================
  // DOM ELEMENTS
  // ========================================
  
  const header = document.querySelector('.header');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  const body = document.body;
  
  // Create overlay element for mobile menu
  let navOverlay = document.querySelector('.nav-overlay');
  if (!navOverlay) {
    navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);
  }
  
  // ========================================
  // STATE
  // ========================================
  
  let isMobileMenuOpen = false;
  let currentSection = '';
  
  // ========================================
  // SMOOTH SCROLLING
  // ========================================
  
  /**
   * Smooth scroll to target element
   */
  function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (!target) return;
    
    const targetPosition = target.offsetTop - CONFIG.scrollOffset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: CONFIG.scrollBehavior
    });
  }
  
  /**
   * Handle navigation link clicks
   */
  function handleNavLinkClick(event) {
    const link = event.target.closest('.nav-link');
    if (!link) return;
    
    event.preventDefault();
    
    const targetId = link.getAttribute('href');
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      closeMobileMenu();
    }
    
    // Smooth scroll to section
    smoothScrollTo(targetId);
    
    // Update URL hash without jumping
    if (history.pushState) {
      history.pushState(null, null, targetId);
    } else {
      // Fallback for older browsers
      window.location.hash = targetId;
    }
  }
  
  /**
   * Handle hash links from external sources (e.g., direct URL with hash)
   */
  function handleInitialHash() {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure page is loaded
      setTimeout(() => {
        smoothScrollTo(hash);
      }, 100);
    }
  }
  
  // ========================================
  // MOBILE MENU
  // ========================================
  
  /**
   * Open mobile menu
   */
  function openMobileMenu() {
    isMobileMenuOpen = true;
    navToggle.classList.add('active');
    navMenu.classList.add('active');
    navOverlay.classList.add('active');
    body.classList.add('nav-open');
    
    // Update ARIA attributes
    navToggle.setAttribute('aria-expanded', 'true');
    
    // Focus first nav link
    const firstLink = navMenu.querySelector('.nav-link');
    if (firstLink) {
      setTimeout(() => firstLink.focus(), 100);
    }
  }
  
  /**
   * Close mobile menu
   */
  function closeMobileMenu() {
    isMobileMenuOpen = false;
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    body.classList.remove('nav-open');
    
    // Update ARIA attributes
    navToggle.setAttribute('aria-expanded', 'false');
    
    // Return focus to toggle button
    navToggle.focus();
  }
  
  /**
   * Toggle mobile menu
   */
  function toggleMobileMenu() {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }
  
  /**
   * Handle clicking outside mobile menu
   */
  function handleOverlayClick() {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    }
  }
  
  /**
   * Handle Escape key to close mobile menu
   */
  function handleEscapeKey(event) {
    if (event.key === 'Escape' && isMobileMenuOpen) {
      closeMobileMenu();
    }
  }
  
  /**
   * Handle window resize - close mobile menu if switching to desktop
   */
  function handleResize() {
    if (window.innerWidth >= 768 && isMobileMenuOpen) {
      closeMobileMenu();
    }
  }
  
  // ========================================
  // HEADER SCROLL EFFECT
  // ========================================
  
  /**
   * Update header background on scroll
   */
  function updateHeaderOnScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollY > CONFIG.headerScrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  // ========================================
  // SCROLL-TO-TOP BUTTON
  // ========================================
  
  /**
   * Update scroll-to-top button visibility
   */
  function updateScrollToTopButton() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollY > CONFIG.scrollToTopThreshold) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  }
  
  /**
   * Scroll to top of page
   */
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: CONFIG.scrollBehavior
    });
  }
  
  // ========================================
  // ACTIVE SECTION DETECTION
  // ========================================
  
  /**
   * Update active nav link based on current section
   */
  function updateActiveNavLink(sectionId) {
    if (sectionId === currentSection) return;
    
    currentSection = sectionId;
    
    // Remove active class from all links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    // Add active class to current section link
    const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
  
  /**
   * Create Intersection Observer for section detection
   */
  function createSectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: `-${CONFIG.scrollOffset}px 0px -60% 0px`,
      threshold: CONFIG.sectionObserverThreshold
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateActiveNavLink(entry.target.id);
        }
      });
    }, observerOptions);
    
    // Observe all sections
    sections.forEach(section => {
      observer.observe(section);
    });
  }
  
  // ========================================
  // SCROLL EVENT HANDLER (THROTTLED)
  // ========================================
  
  let scrollTimeout;
  
  /**
   * Throttled scroll handler
   */
  function handleScroll() {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
      updateHeaderOnScroll();
      updateScrollToTopButton();
    });
  }
  
  // ========================================
  // KEYBOARD NAVIGATION
  // ========================================
  
  /**
   * Handle keyboard navigation in mobile menu
   */
  function handleMenuKeyNavigation(event) {
    if (!isMobileMenuOpen) return;
    
    const focusableElements = navMenu.querySelectorAll('.nav-link');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    // Tab key - trap focus within menu
    if (event.key === 'Tab') {
      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }
  }
  
  // ========================================
  // EVENT LISTENERS
  // ========================================
  
  /**
   * Attach all event listeners
   */
  function attachEventListeners() {
    // Navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavLinkClick);
    });
    
    // Mobile menu toggle
    if (navToggle) {
      navToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Overlay click (close menu)
    if (navOverlay) {
      navOverlay.addEventListener('click', handleOverlayClick);
    }
    
    // Scroll-to-top button
    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener('click', scrollToTop);
    }
    
    // Scroll event
    window.addEventListener('scroll', handleScroll);
    
    // Resize event
    window.addEventListener('resize', handleResize);
    
    // Keyboard events
    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('keydown', handleMenuKeyNavigation);
    
    // Browser back/forward buttons
    window.addEventListener('popstate', () => {
      const hash = window.location.hash;
      if (hash) {
        smoothScrollTo(hash);
      }
    });
  }
  
  // ========================================
  // INITIALIZATION
  // ========================================
  
  /**
   * Initialize navigation module
   */
  function init() {
    // Initial header state
    updateHeaderOnScroll();
    
    // Initial scroll-to-top button state
    updateScrollToTopButton();
    
    // Create section observer for active link detection
    createSectionObserver();
    
    // Attach event listeners
    attachEventListeners();
    
    // Handle initial hash (if page loaded with hash)
    handleInitialHash();
    
    // Debug: console.log('Navigation initialized');
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
})();
