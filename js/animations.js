/**
 * Scroll Animations
 * 
 * Handles fade-in and slide-up animations as elements scroll into view
 * Uses Intersection Observer API for performance
 */

(function() {
  'use strict';
  
  // ========================================
  // CONFIGURATION
  // ========================================
  
  const CONFIG = {
    // Threshold: how much of the element should be visible before animating
    threshold: 0.1,
    // Root margin: start animating slightly before element enters viewport
    rootMargin: '0px 0px -50px 0px',
  };
  
  // ========================================
  // INTERSECTION OBSERVER
  // ========================================
  
  /**
   * Create and configure Intersection Observer
   */
  function createObserver() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // If user prefers reduced motion, make all elements visible immediately
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        el.classList.add('animated');
      });
      return null;
    }
    
    // Create observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animated class when element enters viewport
          entry.target.classList.add('animated');
          
          // Optional: unobserve after animation (one-time animation)
          // Uncomment the line below to only animate once
          // observer.unobserve(entry.target);
        } else {
          // Optional: remove animated class when element leaves viewport
          // This allows re-animation on scroll up
          // Uncomment the line below to enable re-animation
          // entry.target.classList.remove('animated');
        }
      });
    }, {
      threshold: CONFIG.threshold,
      rootMargin: CONFIG.rootMargin
    });
    
    return observer;
  }
  
  /**
   * Observe elements for scroll animation
   */
  function observeElements(observer) {
    if (!observer) return;
    
    // Select all elements that should animate on scroll
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      observer.observe(element);
    });
    
    console.log(`Observing ${elements.length} elements for scroll animations`);
  }
  
  // ========================================
  // AUTO-DETECT ANIMATABLE ELEMENTS
  // ========================================
  
  /**
   * Automatically add animate-on-scroll class to specific elements
   */
  function autoDetectAnimatableElements() {
    // Bio section
    const bioSection = document.querySelector('.bio');
    if (bioSection) {
      bioSection.classList.add('animate-on-scroll');
    }
    
    // Skills grid categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
      category.classList.add('animate-on-scroll');
    });
    
    // About footer
    const aboutFooter = document.querySelector('.about-footer');
    if (aboutFooter) {
      aboutFooter.classList.add('animate-on-scroll');
    }
  }
  
  // ========================================
  // INITIALIZATION
  // ========================================
  
  /**
   * Initialize scroll animations
   */
  function init() {
    // Auto-detect elements that should animate
    autoDetectAnimatableElements();
    
    // Create observer
    const observer = createObserver();
    
    // Start observing elements
    if (observer) {
      observeElements(observer);
    }
    
    console.log('Scroll animations initialized');
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
})();
