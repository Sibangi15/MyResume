import './style.css'

console.log('Portfolio loaded');

// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    // Simple toggle for now, would need CSS class
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if (navLinks.style.display === 'flex') {
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '80px';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = '#0a0a0c';
      navLinks.style.padding = '2rem';
      navLinks.style.textAlign = 'center';
      navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
    }
  });
}

// Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, observerOptions);

document.querySelectorAll('section h2, .hero-content > *, .about-text, .project-card, .contact-container').forEach((el) => {
  el.classList.add('hidden');
  observer.observe(el);
});

