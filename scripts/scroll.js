/* eslint-disable no-undef */
// Hide header on scroll down
let didScroll;
let lastScrollTop = 0;
const delta = 5;
const navbarHeight = $('header').outerHeight();

$(window).scroll(() => {
  didScroll = true;
});

const hasScrolled = () => {
  const st = $(this).scrollTop();

  // Make scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If scrolled down and past the navbar, add class .nav-up.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('header')
      .removeClass('nav-down')
      .addClass('nav-up')
      .removeClass('header-shadow');
  } else if (st + $(window).height() < $(document).height()) {
    $('header')
      .removeClass('nav-up')
      .addClass('nav-down')
      .addClass('header-shadow');
  }
  lastScrollTop = st;
};

setInterval(() => {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);
