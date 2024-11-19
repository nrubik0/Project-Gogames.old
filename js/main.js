const burgerIcon = document.querySelector('.burger-icon');
const navLinks = document.querySelector('.right-line');

burgerIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});