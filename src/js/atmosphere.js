import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

let swiper = null;

export default function initSwiper() {
  const swiperEl = document.querySelector('[data-swiper-atm]');
  if (!swiperEl) return;

  if (swiper === null) {
    swiper = new Swiper(swiperEl, {
      direction: 'horizontal',
      loop: true,
      modules: [Navigation],
      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },
      slidesPerView: 1,
      spaceBetween: 20,
      lazyPreloadPrevNext: 0,
      speed: 800,
    });
  }

  if (window.innerWidth <= 768) {
    initLightboxOnMobile();
  }
}

function initLightboxOnMobile() {
  const images = document.querySelectorAll('.game-atm-img');

  images.forEach(img => {
    if (!img.dataset.lightboxBound) {
      img.addEventListener('click', () => {
        const instance = basicLightbox.create(`
          <img 
            src="${img.src}" 
            srcset="${img.srcset}" 
            alt="${img.alt}" 
            style="max-width: 100%; height: auto;" 
          />
        `);
        instance.show();
      });

      img.dataset.lightboxBound = 'true';
    }
  });
}
