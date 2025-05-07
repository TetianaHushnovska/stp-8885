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
