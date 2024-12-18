// Function to animate the counter
function countUp(element) {
    const target = +element.getAttribute('data-target');
    let current = 0;
    const duration = 2000; // Total duration in milliseconds (2.5 seconds)
    const increment = target / (duration / 25); // Calculate how much to increment per interval (25ms)
  
    // Animate the counting process
    const counterInterval = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(counterInterval);
        element.textContent = target + "+"; // Ensure it reaches the target value
      } else {
        element.textContent = Math.floor(current);
      }
    }, 20); // Update the number every 25 milliseconds
  }
  
  // Function to handle the intersection (when the section comes into view)
  function handleScroll() {
    const counters = document.querySelectorAll('.counter');
    
    // Use IntersectionObserver to detect when the counter section is in view
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // If the counter section is in view, start counting
          countUp(entry.target);
          observer.unobserve(entry.target); // Stop observing after the count starts
        }
      });
    }, {
      threshold: 0.5 // Trigger the animation when 50% of the element is in view
    });
  
    // Observe each counter element
    counters.forEach(counter => {
      observer.observe(counter);
    });
  }
  
  // Call handleScroll function when the DOM is ready
  document.addEventListener('DOMContentLoaded', handleScroll);
  