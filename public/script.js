document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll to section when clicking on navigation links
  const navLinks = document.querySelectorAll('.sidebar a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // Highlight active navigation link based on scroll position
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        const targetLink = document.querySelector(`.sidebar a[href="#${section.id}"]`);
        if (targetLink) {
          navLinks.forEach(link => link.classList.remove('active'));
          targetLink.classList.add('active');
        }
      }
    });
  });
});
