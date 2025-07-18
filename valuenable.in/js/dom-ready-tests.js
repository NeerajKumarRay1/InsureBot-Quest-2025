/**
 * Basic tests for DOM Ready Utilities
 * Run these in browser console to verify functionality
 */

function runDOMReadyTests() {
  console.log('🧪 Starting DOM Ready Utils Tests...');
  
  // Test 1: Basic DOM ready functionality
  console.log('Test 1: Basic DOM ready');
  domReady(function() {
    console.log('✅ DOM ready callback executed');
    console.log('   Document state:', document.readyState);
  });
  
  // Test 2: Safe element selection
  console.log('Test 2: Safe element selection');
  safeElementSelection('body', function(elements) {
    console.log('✅ Found body element:', elements.length > 0);
  });
  
  // Test 3: Element that doesn't exist
  console.log('Test 3: Non-existent element (should warn)');
  safeElementSelection('.non-existent-class', function(elements) {
    console.log('This should not execute');
  });
  
  // Test 4: DOM state checker
  console.log('Test 4: DOM state checker');
  console.log('✅ DOM is ready:', domState.isReady());
  console.log('   Current state:', domState.getState());
  
  // Test 5: Safe execution
  console.log('Test 5: Safe execution');
  safeExecute(function() {
    console.log('✅ Safe execution works');
  });
  
  // Test 6: Safe execution with error
  console.log('Test 6: Safe execution with error (should warn)');
  safeExecute(function() {
    throw new Error('Test error');
  }, function(error) {
    console.log('✅ Error handler called:', error.message);
  });
  
  // Test 7: Animation queue
  console.log('Test 7: Animation queue');
  animationQueue.add(function() {
    console.log('✅ Animation 1 executed');
  });
  animationQueue.add(function() {
    console.log('✅ Animation 2 executed');
  });
  animationQueue.execute();
  
  console.log('🎉 DOM Ready Utils Tests Complete!');
}

// Auto-run tests when this script loads
if (typeof domReady !== 'undefined') {
  domReady(runDOMReadyTests);
} else {
  console.error('❌ DOM Ready Utils not loaded. Include dom-ready-utils.js first.');
}