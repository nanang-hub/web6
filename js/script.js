document.addEventListener('DOMContentLoaded', function() {
  const heroSection = document.querySelector('.hero-section');

  document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const moveX = (mouseX - 0.5) * 20;
    const moveY = (mouseY - 0.5) * 20;
    
    heroSection.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
  });

  document.addEventListener('mouseleave', function() {
    heroSection.style.backgroundPosition = 'center';
  });
});
