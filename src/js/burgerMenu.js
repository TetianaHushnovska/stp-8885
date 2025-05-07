const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const modalLinks = document.querySelectorAll('[data-goto]');

openBtnEl.addEventListener('click', () => {
  burgerMenuEl.dataset.visible = 'open';
  document.body.style.overflow = 'hidden';
});

closeBtnEl.addEventListener('click', () => {
  burgerMenuEl.dataset.visible = 'close';
  document.body.style.overflow = '';
});

modalLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    burgerMenuEl.dataset.visible = 'close';
    document.body.style.overflow = '';

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
