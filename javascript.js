'use strict';

var mySwiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  slidesPerView: 3,
  loop: true,
	autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
  }
});