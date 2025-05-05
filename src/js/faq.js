import Accordion from 'accordion-js';
import { Autoplay } from 'swiper/modules';

export default function initFaq() {
  document.addEventListener('DOMContentLoaded', function () {
    new Accordion('[data-accordion]', {
      duration: 400,
      showMultiple: true,
      openOnInit: [0],
      elementClass: 'data-item',
      triggerClass: 'data-header',
      panelClass: 'data-panel',
      activeClass: 'is-active',
    });
  });

  document.querySelectorAll('[data-item]').forEach(item => {
    item.querySelector('[data-header]')?.addEventListener('click', () => {
      item.querySelector('[data-toggle]')?.classList.toggle('is-open');
    });
  });
}
