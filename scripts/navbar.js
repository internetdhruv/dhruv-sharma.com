const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const whitespace = document.getElementById('whitespace');
const exit = document.getElementById('exit');

const { SmoothScroll } = window;
// eslint-disable-next-line no-unused-vars
const easeInOutQuad = new SmoothScroll('[data-easing="easeInOutQuad"]', {
  easing: 'easeInOutQuad',
  header: '.dummy-header',
});

menu.addEventListener('click', (e) => {
  nav.classList.toggle('hide-mobile');
  whitespace.classList.toggle('hide-mobile');
  e.preventDefault();
});

exit.addEventListener('click', (e) => {
  nav.classList.toggle('hide-mobile');
  whitespace.classList.toggle('hide-mobile');
  e.preventDefault();
});

whitespace.addEventListener('click', (e) => {
  nav.classList.toggle('hide-mobile');
  whitespace.classList.toggle('hide-mobile');
  e.preventDefault();
});
