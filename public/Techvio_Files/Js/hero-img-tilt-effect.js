document.querySelector('.hero-section-right').addEventListener('mousemove', (e) => {
    const section = document.querySelector('.hero-section-right');
    const img = document.querySelector('.hero-banner-img');
    const { width, height, left, top } = section.getBoundingClientRect();
    
    const offsetX = (e.clientX - left) / width;
    const offsetY = (e.clientY - top) / height;
    
    const rotateX = (offsetY - 0.5) * 30; // Change 30 for more/less tilt
    const rotateY = (offsetX - 0.5) * -30; // Change -30 for more/less tilt
  
    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  