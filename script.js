// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Active nav highlight + back to top toggle
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav a');
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });

  backToTop.style.display = scrollY > 400 ? 'block' : 'none';

  // Parallax effect
  const parallax = document.querySelector('.parallax-bg');
  if(parallax) {
    parallax.style.transform = `translateY(${scrollY * 0.2}px)`;
  }
});

// Back to top
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();
