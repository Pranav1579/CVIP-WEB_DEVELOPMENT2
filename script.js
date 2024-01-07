
document.querySelector('nav').addEventListener('click', function(event) {
  event.preventDefault();
  const target = event.target;
  const targetSection = document.querySelector(target.getAttribute('href'));
  targetSection.scrollIntoView({ behavior: 'smooth' });
});