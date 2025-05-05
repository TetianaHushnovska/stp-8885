import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

export default function InitReview() {
  const swiperReview = document.querySelector('[data-reviews-swiper]');

  const swiper = new Swiper(swiperReview, {
    direction: 'horizontal',
    loop: false,
    modules: [Navigation],
    slidesPerView: 'auto',
    centeredSlides: false,
    grabCursor: true,
    spaceBetween: 13,
  });
}
