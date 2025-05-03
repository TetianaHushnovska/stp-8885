document.addEventListener('DOMContentLoaded', () => {
  const cookiesBanner = document.querySelector('[data-cookies]');
  const acceptBtn = document.querySelector('[data-accept]');
  const declineBtn = document.querySelector('[data-decline]');

  const COOKIES_KEY = 'cookies-consent';

  if (localStorage.getItem(COOKIES_KEY)) {
    cookiesBanner.style.display = 'none';
    document.body.style.overflow = 'auto';
    return;
  }

  document.body.style.overflow = 'hidden';

  function handleCookiesResponse(choice) {
    localStorage.setItem(COOKIES_KEY, choice);
    cookiesBanner.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  acceptBtn.addEventListener('click', () => handleCookiesResponse('accepted'));
  declineBtn.addEventListener('click', () => handleCookiesResponse('declined'));
});
