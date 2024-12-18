// Show the button when scrolled down 1000px, and animate it from top to bottom
window.onscroll = function() {
    const button = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        button.style.display = 'block';
        button.style.transform = 'translateY(642px)'; // Move the button into view
    } else {
        // button.style.transform = 'translateY(-642px)'; // Move the button out of view
        button.style.transform = 'translateY(-642px)'; // Move the button out of view
        setTimeout(() => {
            button.style.display = 'block'; // Hide the button after the transition is done
        }, 3000); // Match this duration to the transition time
    }
};

// Function to scroll to the top
function scrollToTop() {
    const start = window.scrollY;
    const duration = 3000; // Duration in ms
    const startTime = performance.now();

    function easing(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Example of a quadratic easing function
    }

    function scroll() {
        const currentTime = performance.now();
        const timeElapsed = currentTime - startTime;
        const progress = timeElapsed / duration;

        if (progress < 1) {
            window.scrollTo(0, start - easing(progress) * start);
            requestAnimationFrame(scroll);
        } else {
            window.scrollTo(0, 0);
        }
    }
    scroll();
}



