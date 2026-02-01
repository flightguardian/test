/**
 * Contact Form Validation & Submission
 * 
 * Handles client-side validation, form submission, and user feedback
 */

(function() {
  'use strict';
  
  // ========================================
  // CONFIGURATION
  // ========================================
  
  const CONFIG = {
    minMessageLength: 10,
    maxMessageLength: 500,
    emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    submitDelay: 2000, // Simulated API delay in ms
  };
  
  // ========================================
  // STATE
  // ========================================
  
  const state = {
    isSubmitting: false,
    fields: {
      name: { valid: false, touched: false },
      email: { valid: false, touched: false },
      subject: { valid: true, touched: false }, // Optional field
      message: { valid: false, touched: false },
    }
  };
  
  // ========================================
  // DOM ELEMENTS
  // ========================================
  
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const submitButton = form.querySelector('button[type="submit"]');
  const formMessage = document.getElementById('form-message');
  const messageCount = document.getElementById('message-count');
  
  // Error message elements
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  
  // ========================================
  // VALIDATION FUNCTIONS
  // ========================================
  
  /**
   * Validate name field
   */
  function validateName(value) {
    if (!value || value.trim() === '') {
      return {
        valid: false,
        message: 'Name is required'
      };
    }
    
    if (value.trim().length < 2) {
      return {
        valid: false,
        message: 'Name must be at least 2 characters'
      };
    }
    
    return {
      valid: true,
      message: ''
    };
  }
  
  /**
   * Validate email field
   */
  function validateEmail(value) {
    if (!value || value.trim() === '') {
      return {
        valid: false,
        message: 'Email is required'
      };
    }
    
    if (!CONFIG.emailRegex.test(value)) {
      return {
        valid: false,
        message: 'Please enter a valid email address'
      };
    }
    
    return {
      valid: true,
      message: ''
    };
  }
  
  /**
   * Validate message field
   */
  function validateMessage(value) {
    if (!value || value.trim() === '') {
      return {
        valid: false,
        message: 'Message is required'
      };
    }
    
    if (value.trim().length < CONFIG.minMessageLength) {
      return {
        valid: false,
        message: `Message must be at least ${CONFIG.minMessageLength} characters`
      };
    }
    
    if (value.length > CONFIG.maxMessageLength) {
      return {
        valid: false,
        message: `Message must not exceed ${CONFIG.maxMessageLength} characters`
      };
    }
    
    return {
      valid: true,
      message: ''
    };
  }
  
  /**
   * Update field UI based on validation state
   */
  function updateFieldUI(input, errorElement, validation, fieldName) {
    // Remove existing states
    input.classList.remove('error', 'success');
    
    // Only show validation states if field has been touched
    if (state.fields[fieldName].touched) {
      if (validation.valid) {
        input.classList.add('success');
        input.setAttribute('aria-invalid', 'false');
        errorElement.textContent = '';
        errorElement.setAttribute('aria-live', 'off');
      } else {
        input.classList.add('error');
        input.setAttribute('aria-invalid', 'true');
        errorElement.textContent = validation.message;
        errorElement.setAttribute('aria-live', 'polite');
      }
    }
    
    // Update state
    state.fields[fieldName].valid = validation.valid;
  }
  
  /**
   * Update character count display
   */
  function updateCharacterCount() {
    const currentLength = messageInput.value.length;
    const maxLength = CONFIG.maxMessageLength;
    messageCount.textContent = `${currentLength} / ${maxLength}`;
    
    // Update color based on usage
    messageCount.classList.remove('warning', 'error');
    if (currentLength > maxLength) {
      messageCount.classList.add('error');
    } else if (currentLength > maxLength * 0.9) {
      messageCount.classList.add('warning');
    }
  }
  
  /**
   * Check if entire form is valid
   */
  function isFormValid() {
    return state.fields.name.valid &&
           state.fields.email.valid &&
           state.fields.message.valid;
  }
  
  /**
   * Update submit button state
   */
  function updateSubmitButton() {
    if (isFormValid() && !state.isSubmitting) {
      submitButton.disabled = false;
      submitButton.setAttribute('aria-disabled', 'false');
    } else {
      submitButton.disabled = true;
      submitButton.setAttribute('aria-disabled', 'true');
    }
  }
  
  /**
   * Show form message (success or error)
   */
  function showFormMessage(type, message) {
    formMessage.className = 'form-message show ' + type;
    formMessage.textContent = message;
    
    // Set appropriate ARIA role
    if (type === 'success') {
      formMessage.setAttribute('role', 'status');
    } else {
      formMessage.setAttribute('role', 'alert');
    }
    
    // Announce to screen readers
    formMessage.setAttribute('aria-live', 'polite');
  }
  
  /**
   * Hide form message
   */
  function hideFormMessage() {
    formMessage.classList.remove('show');
    formMessage.setAttribute('aria-live', 'off');
  }
  
  /**
   * Set loading state on submit button
   */
  function setLoadingState(loading) {
    if (loading) {
      submitButton.classList.add('loading');
      submitButton.disabled = true;
      submitButton.setAttribute('aria-busy', 'true');
    } else {
      submitButton.classList.remove('loading');
      submitButton.setAttribute('aria-busy', 'false');
      updateSubmitButton(); // Re-evaluate disabled state
    }
  }
  
  /**
   * Reset form to initial state
   */
  function resetForm() {
    form.reset();
    
    // Reset state
    Object.keys(state.fields).forEach(field => {
      state.fields[field].valid = field === 'subject'; // subject is optional
      state.fields[field].touched = false;
    });
    
    // Clear UI states
    [nameInput, emailInput, messageInput].forEach(input => {
      input.classList.remove('error', 'success');
      input.setAttribute('aria-invalid', 'false');
    });
    
    [nameError, emailError, messageError].forEach(error => {
      error.textContent = '';
      error.setAttribute('aria-live', 'off');
    });
    
    // Reset character count
    updateCharacterCount();
    
    // Update button state
    updateSubmitButton();
  }
  
  // ========================================
  // EVENT HANDLERS
  // ========================================
  
  /**
   * Handle name field blur
   */
  function handleNameBlur() {
    state.fields.name.touched = true;
    const validation = validateName(nameInput.value);
    updateFieldUI(nameInput, nameError, validation, 'name');
    updateSubmitButton();
  }
  
  /**
   * Handle email field blur
   */
  function handleEmailBlur() {
    state.fields.email.touched = true;
    const validation = validateEmail(emailInput.value);
    updateFieldUI(emailInput, emailError, validation, 'email');
    updateSubmitButton();
  }
  
  /**
   * Handle message field blur
   */
  function handleMessageBlur() {
    state.fields.message.touched = true;
    const validation = validateMessage(messageInput.value);
    updateFieldUI(messageInput, messageError, validation, 'message');
    updateSubmitButton();
  }
  
  /**
   * Handle name field input (real-time validation after touched)
   */
  function handleNameInput() {
    if (state.fields.name.touched) {
      const validation = validateName(nameInput.value);
      updateFieldUI(nameInput, nameError, validation, 'name');
      updateSubmitButton();
    }
  }
  
  /**
   * Handle email field input (real-time validation after touched)
   */
  function handleEmailInput() {
    if (state.fields.email.touched) {
      const validation = validateEmail(emailInput.value);
      updateFieldUI(emailInput, emailError, validation, 'email');
      updateSubmitButton();
    }
  }
  
  /**
   * Handle message field input
   */
  function handleMessageInput() {
    updateCharacterCount();
    
    if (state.fields.message.touched) {
      const validation = validateMessage(messageInput.value);
      updateFieldUI(messageInput, messageError, validation, 'message');
      updateSubmitButton();
    }
  }
  
  /**
   * Handle form submission
   */
  async function handleSubmit(event) {
    event.preventDefault();
    
    // Mark all fields as touched
    Object.keys(state.fields).forEach(field => {
      state.fields[field].touched = true;
    });
    
    // Validate all fields
    const nameValidation = validateName(nameInput.value);
    const emailValidation = validateEmail(emailInput.value);
    const messageValidation = validateMessage(messageInput.value);
    
    // Update UI for all fields
    updateFieldUI(nameInput, nameError, nameValidation, 'name');
    updateFieldUI(emailInput, emailError, emailValidation, 'email');
    updateFieldUI(messageInput, messageError, messageValidation, 'message');
    
    // Check if form is valid
    if (!isFormValid()) {
      showFormMessage('error', 'Please fix the errors above and try again.');
      
      // Focus first invalid field
      if (!nameValidation.valid) {
        nameInput.focus();
      } else if (!emailValidation.valid) {
        emailInput.focus();
      } else if (!messageValidation.valid) {
        messageInput.focus();
      }
      
      return;
    }
    
    // Prevent multiple submissions
    if (state.isSubmitting) {
      return;
    }
    
    // Set submitting state
    state.isSubmitting = true;
    setLoadingState(true);
    hideFormMessage();
    
    // Collect form data
    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim(),
      timestamp: new Date().toISOString()
    };
    
    try {
      // Simulate API call
      await simulateFormSubmission(formData);
      
      // Success
      console.log('Form submitted successfully:', formData);
      showFormMessage('success', '🎉 Thank you for your message! I\'ll get back to you soon.');
      
      // Reset form after short delay
      setTimeout(() => {
        resetForm();
        hideFormMessage();
      }, 5000);
      
    } catch (error) {
      // Error
      console.error('Form submission error:', error);
      showFormMessage('error', 'Oops! Something went wrong. Please try again later.');
    } finally {
      state.isSubmitting = false;
      setLoadingState(false);
    }
  }
  
  /**
   * Simulate form submission (replace with actual API call)
   */
  function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success (95% success rate)
        if (Math.random() > 0.05) {
          resolve(data);
        } else {
          reject(new Error('Simulated network error'));
        }
      }, CONFIG.submitDelay);
    });
  }
  
  // ========================================
  // INITIALIZATION
  // ========================================
  
  /**
   * Initialize contact form
   */
  function init() {
    if (!form) {
      console.error('Contact form not found');
      return;
    }
    
    // Attach event listeners
    nameInput.addEventListener('blur', handleNameBlur);
    nameInput.addEventListener('input', handleNameInput);
    
    emailInput.addEventListener('blur', handleEmailBlur);
    emailInput.addEventListener('input', handleEmailInput);
    
    messageInput.addEventListener('blur', handleMessageBlur);
    messageInput.addEventListener('input', handleMessageInput);
    
    form.addEventListener('submit', handleSubmit);
    
    // Initialize character count
    updateCharacterCount();
    
    // Initial button state
    updateSubmitButton();
    
    console.log('Contact form initialized');
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
})();
