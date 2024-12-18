document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.hero-section-right');
  const img = document.querySelector('.hero-banner-img');

  if (!section || !img) {
    console.error('Elements not found: .hero-section-right or .hero-banner-img');
    return;
  }

  section.addEventListener('mousemove', (e) => {
    const { width, height, left, top } = section.getBoundingClientRect();

    const offsetX = (e.clientX - left) / width;
    const offsetY = (e.clientY - top) / height;

    const rotateX = (offsetY - 0.5) * 30; // Adjust tilt sensitivity
    const rotateY = (offsetX - 0.5) * -30;

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    img.style.transition = 'transform 0.1s'; // Smooth animation
  });

  // Reset tilt effect when the mouse leaves the section
  section.addEventListener('mouseleave', () => {
    img.style.transform = 'rotateX(0deg) rotateY(0deg)';
    img.style.transition = 'transform 0.5s'; // Smooth reset
  });
});
