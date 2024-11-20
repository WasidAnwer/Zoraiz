// onScroll header fixed starts
$(window).scroll(function () {
	var aTop = 205;
	if ($(this).scrollTop() >= aTop) {
		$('.markup-navbar').addClass('fixed');
		$('.markup-banner').addClass('fix-bnr')
	} else {
		$('.markup-navbar').removeClass('fixed');
		$('.markup-banner').removeClass('fix-bnr')
	}
});

$(document).ready(function () {
	// swiper sliders
	new Swiper(".markupBannerSlider", {
		// type: "progressbar",
		loop: true,
		speed: 1400,
		autoplay: true,
		delay: 2000,
		disableOnInteraction: false,
		navigation: false,
		pagination: {
			el: ".markupBannerSlider .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	new Swiper(".echronEnvironmentSlider", {
		loop: true,
		speed: 2000,
		autoplay: true,
		delay: 2000,
		disableOnInteraction: false,
		slidesPerGroup: 3,
		pagination: {
			el: ".echronEnvironmentSlider .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			499: {
				slidesPerView: 1,
			},
			999: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			}
		}
	});
	new Swiper(".echronGallerySlider", {
		loop: true,
		speed: 1400,
		spaceBetween: 5,
		autoplay: true,
		delay: 2000,
		disableOnInteraction: false,
		slidesPerGroup: 1,
		pagination: {
			el: ".echronGallerySlider  .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".arrow-right",
			prevEl: ".arrow-left",
		},
		breakpoints: {
			499: {
				slidesPerView: 1,
			},
			999: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			}
		}
	});
});

// document.querySelectorAll('.gallery-item img').forEach(image => {
// 	image.addEventListener('click', () => {
// 		const imgSrc = image.getAttribute('src');
// 		const lightbox = document.createElement('div');
// 		lightbox.id = 'lightbox';
// 		lightbox.style.position = 'fixed';
// 		lightbox.style.top = 0;
// 		lightbox.style.left = 0;
// 		lightbox.style.width = '100%';
// 		lightbox.style.height = '100%';
// 		lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
// 		lightbox.style.display = 'flex';
// 		lightbox.style.justifyContent = 'center';
// 		lightbox.style.alignItems = 'center';
// 		lightbox.addEventListener('click', () => {
// 			document.body.removeChild(lightbox);
// 		});

// 		const img = document.createElement('img');
// 		img.src = imgSrc;
// 		img.style.maxWidth = '70%';
// 		img.style.maxHeight = '70%';
// 		lightbox.appendChild(img);

// 		document.body.appendChild(lightbox);
// 	});
// });
