function debounce(func, delay) {
    let timeoutId;
  
    // Return a new function that wraps the original function
    return function() {
      // Save the context and arguments of the function call
      const context = this;
      const args = arguments;
  
      // Clear the previous timeout
      clearTimeout(timeoutId);
  
      // Set a new timeout to call the function after the specified delay
      timeoutId = setTimeout(() => {
        // Call the original function with the saved context and arguments
        func.apply(context, args);
      }, delay);
    };
  }
  

// Define the function to debounce
function handleInput() {
    console.log('Handling input...');
  }
  
  // Debounce the function with a delay of 300 milliseconds
  const debouncedHandleInput = debounce(handleInput, 300);
  
  // Simulate frequent calls to the debounced function
  setInterval(() => {
    debouncedHandleInput();
  }, 1);
  