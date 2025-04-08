// Toggle menu on mobile
const toggleButton = document.querySelector('header button');
const navMenu = document.querySelector('header nav');

if (toggleButton && navMenu) {
  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
  });
}

// Scroll to top button
const backToTopBtn = document.querySelector('a[href="#"]');

if (backToTopBtn) {
  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
