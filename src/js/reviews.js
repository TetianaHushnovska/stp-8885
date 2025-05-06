import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';

export default function InitReview() {
  const swiperReview = document.querySelector('[data-reviews-swiper]');

  const swiper = new Swiper(swiperReview, {
    direction: 'horizontal',
    loop: false,
    modules: [Navigation, Autoplay],
    slidesPerView: 'auto',
    centeredSlides: false,
    grabCursor: true,
    spaceBetween: 13,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });
}
