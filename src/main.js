import './js/burgerMenu';
import './scss/styles.scss';
import './js/scroll';
import './js/cookies';
import AOS from 'aos';
import 'aos/dist/aos.css';
import initSwiper from './js/atmosphere';
import initFaq from './js/faq';
import InitReview from './js/reviews';

initSwiper();
initFaq();
InitReview();
AOS.init();

document.addEventListener('click', function (e) {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;

  const targetId = link.getAttribute('href');
  if (targetId.length < 2) return;

  const targetEl = document.querySelector(targetId);
  if (!targetEl) return;

  e.preventDefault();

  const elementTop = targetEl.getBoundingClientRect().top + window.scrollY;
  const offset = window.innerHeight / 4;
  window.scrollTo({
    top: elementTop - offset,
    behavior: 'smooth',
  });
});
