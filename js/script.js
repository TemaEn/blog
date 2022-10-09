'use strict';

// burger

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	});
};

// slider

let slider = new Swiper('.image-slider', {

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	simulateTouch: true,

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	mousewheel: {
		sensitivity: 1,
		eventsTarget: '.image-slider',
	},

	watchOverflow: true,

	initialSlide: 0,
	centeredSlides: false,
});

// accordion

const accordions = document.querySelectorAll(".accordion");
const panels = document.querySelectorAll('.panel');

if (accordions.length > 0) {
	for (let index = 0; accordions.length > index; index++) {
		const accordion = accordions[index];

		accordion.addEventListener('click', function (e) {
			deleteActive();
			let panel = e.target.nextElementSibling;
			if (panel.style.maxHeight) {
				closeAccordions();
				panel.style.maxHeight = null;
			} else {
				closeAccordions();
				e.target.classList.toggle("_active");
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}
}

function closeAccordions() { // функция закрытия остальных спойлеров, убираем класс актив
	panels.forEach(item => {
		item.style.maxHeight = null;
	});
}

function deleteActive() { // удаляем класс актив у спойлеров
	accordions.forEach(item => {
		item.classList.remove('_active');
	});
}