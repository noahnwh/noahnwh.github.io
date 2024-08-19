document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const topBarNav = document.querySelector('.topBar_nav');

  hamburger.addEventListener('click', function() {
    console.log('Hamburger clicked'); // Debugging line
    topBarNav.classList.toggle('show');
  });
});
