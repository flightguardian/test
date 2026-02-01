/**
 * Main JavaScript Entry Point
 * 
 * Initializes all modules and sets up global functionality
 */

(function() {
  'use strict';
  
  /**
   * Update copyright year in footer
   */
  function updateCopyrightYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }
  
  /**
   * Initialize all modules
   */
  function init() {
    // Update copyright year
    updateCopyrightYear();
    
    // Debug: console.log('Portfolio initialized');
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
})();
