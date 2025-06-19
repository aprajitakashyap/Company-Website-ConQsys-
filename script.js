document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navigation
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Contact form validation
  const form = document.querySelector('.contact-form');
  const successBox = document.getElementById('successBox');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      alert('Please enter a valid email address.');
      return;
    }

    successBox.style.display = 'block';
    setTimeout(() => {
      successBox.style.display = 'none';
    }, 3000);

    form.reset();
  });

  // Dark Mode Toggle
  const toggle = document.getElementById('modeToggle');
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
  });
});