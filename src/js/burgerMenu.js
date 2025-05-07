const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const modalLinks = document.querySelectorAll('[data-goto]');

openBtnEl.addEventListener('click', () => {
  burgerMenuEl.style.display = 'flex';
  burgerMenuEl.setAttribute('data-visible', 'close');

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      burgerMenuEl.setAttribute('data-visible', 'open');
    });
  });

  document.body.style.overflow = 'hidden';
});

function closeModal() {
  burgerMenuEl.setAttribute('data-visible', 'closing');
  document.body.style.overflow = '';

  setTimeout(() => {
    burgerMenuEl.setAttribute('data-visible', 'close');
    burgerMenuEl.style.display = 'none';
  }, 600);
}

closeBtnEl.addEventListener('click', closeModal);

modalLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    closeModal();
  });
});
