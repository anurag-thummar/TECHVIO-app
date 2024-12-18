window.addEventListener('scroll', function() {
    var header = document.querySelector('.home-page__header');
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});







document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.home-page__header');
    var logo = document.getElementById('logo');
    var heroSection = document.getElementById('hero-section');
    var heroSection1 = document.getElementById('hero-section1');
    var savedTheme = localStorage.getItem('theme');
    var savedHeroSection = localStorage.getItem('heroSection');

    // Apply saved theme
    if (savedTheme === 'alternative') {
        header.classList.add('alternative-theme');
        logo.src = './ASSETS/logo-black.png'; // Change to black logo
    } else {
        logo.src = './ASSETS/logo.png'; // Change to original logo
    }

    // Apply saved hero section visibility
    if (savedHeroSection === 'hero-section1') {
        heroSection.style.display = 'none';
        heroSection1.style.display = 'block';
    } else {
        heroSection.style.display = 'block';
        heroSection1.style.display = 'none';
    }

    // Theme toggle button event listener
    document.getElementById('support-btn').addEventListener('click', function() {
        header.classList.toggle('alternative-theme');
        
        if (header.classList.contains('alternative-theme')) {
            localStorage.setItem('theme', 'alternative');
            logo.src = './ASSETS/logo-black.png'; // Change to black logo
        } else {
            localStorage.setItem('theme', 'default');
            logo.src = './ASSETS/logo.png'; // Change to original logo
        }

        // Toggle hero sections
        if (heroSection.style.display === 'none') {
            heroSection.style.display = 'block';
            heroSection1.style.display = 'none';
            localStorage.setItem('heroSection', 'hero-section');
        } else {
            heroSection.style.display = 'none';
            heroSection1.style.display = 'block';
            localStorage.setItem('heroSection', 'hero-section1');
        }
    });
});