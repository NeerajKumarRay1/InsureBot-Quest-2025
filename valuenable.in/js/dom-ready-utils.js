/**
 * DOM Ready Utilities - Ensures JavaScript executes only after DOM is ready
 * Fixes timing issues where scripts run before elements exist
 */

/**
 * Core DOM ready function with cross-browser compatibility
 * @param {Function} callback - Function to execute when DOM is ready
 */
function domReady(callback) {
  if (document.readyState === 'loading') {
    // DOM is still loading, wait for it
    if (document.addEventListener) {
      // Modern browsers
      document.addEventListener('DOMContentLoaded', callback);
    } else if (document.attachEvent) {
      // IE8 and below
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'complete') {
          callback();
        }
      });
    }
  } else {
    // DOM is already loaded, execute immediately
    callback();
  }
}

/**
 * Safe element selection that waits for DOM ready
 * @param {string} selector - CSS selector for elements
 * @param {Function} callback - Function to call with selected elements
 */
function safeElementSelection(selector, callback) {
  domReady(function() {
    try {
      const elements = document.querySelectorAll(selector);
      if (elements.length > 0) {
        callback(elements);
      } else {
        console.warn('DOM Ready Utils: No elements found for selector:', selector);
      }
    } catch (error) {
      console.warn('DOM Ready Utils: Error selecting elements:', error);
    }
  });
}

/**
 * Wait for a specific element to appear in the DOM
 * @param {string} selector - CSS selector for the element
 * @param {Function} callback - Function to call when element is found
 * @param {number} timeout - Maximum time to wait in milliseconds (default: 5000)
 */
function waitForElement(selector, callback, timeout = 5000) {
  const startTime = Date.now();
  
  const checkElement = () => {
    try {
      const element = document.querySelector(selector);
      if (element) {
        callback(element);
      } else if (Date.now() - startTime < timeout) {
        setTimeout(checkElement, 50);
      } else {
        console.warn('DOM Ready Utils: Timeout waiting for element:', selector);
      }
    } catch (error) {
      console.warn('DOM Ready Utils: Error waiting for element:', error);
    }
  };
  
  checkElement();
}

/**
 * Safe execution wrapper with error handling
 * @param {Function} fn - Function to execute safely
 * @param {Function} errorHandler - Optional error handler
 */
function safeExecute(fn, errorHandler) {
  try {
    fn();
  } catch (error) {
    console.warn('DOM Ready Utils: Safe execution failed:', error);
    if (errorHandler && typeof errorHandler === 'function') {
      errorHandler(error);
    }
  }
}

/**
 * Animation queue manager for deferred animations
 */
const animationQueue = {
  queue: [],
  
  /**
   * Add animation function to queue
   * @param {Function} animationFunction - Function containing animation code
   */
  add: function(animationFunction) {
    this.queue.push(animationFunction);
  },
  
  /**
   * Execute all queued animations
   */
  execute: function() {
    const self = this;
    domReady(function() {
      self.queue.forEach(function(fn) {
        safeExecute(fn);
      });
      self.queue = []; // Clear queue after execution
    });
  }
};

/**
 * DOM state checker utility
 */
const domState = {
  /**
   * Check if DOM is ready
   * @returns {boolean} True if DOM is ready
   */
  isReady: function() {
    return document.readyState === 'complete' || 
           document.readyState === 'interactive';
  },
  
  /**
   * Get current DOM ready state
   * @returns {string} Current document ready state
   */
  getState: function() {
    return document.readyState;
  }
};

// Export functions for module systems (if available)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    domReady,
    safeElementSelection,
    waitForElement,
    safeExecute,
    animationQueue,
    domState
  };
}

// Also make available globally for direct script inclusion
if (typeof window !== 'undefined') {
  window.DOMReadyUtils = {
    domReady,
    safeElementSelection,
    waitForElement,
    safeExecute,
    animationQueue,
    domState
  };
}