const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	spaceBetween: 65,
	slidesPerView: 4,
	loop: true,

	autoplay: {
		delay: 4000
	},

	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	}
})
