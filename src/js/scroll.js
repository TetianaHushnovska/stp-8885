window.addEventListener('scroll', function () {
  const headerBg = document.querySelector('[data-header-bg]');
  const heroSection = document.querySelector('[data-hero]');
  const heroHeight = heroSection.offsetHeight;

  if (window.scrollY > heroHeight) {
    headerBg.classList.add('scrolled');
  } else {
    headerBg.classList.remove('scrolled');
  }
});
