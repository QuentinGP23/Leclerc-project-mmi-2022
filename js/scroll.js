'use strict';

const panelContainer = document.querySelector('.panel-container');
const panel = document.querySelectorAll('.recette');
const sectionPosition = document.querySelectorAll('.section-position');

let panelToScroll = 0;
let currentPanel = 0;
let currentSectionPosition = 0;

panelContainer.addEventListener('wheel', (e) => {
	e.preventDefault();
	let { clientHeight } = document.documentElement;
	if (e.deltaY > 0 && currentPanel < panel.length - 1) {
		panelToScroll = panelToScroll + clientHeight;
		currentPanel++;
		sectionPosition[currentSectionPosition].style.backgroundColor = 'purple';
		currentSectionPosition++;
		sectionPosition[currentSectionPosition].style.backgroundColor = 'red';
	} else if (e.deltaY < 0 && currentPanel != 0) {
		panelToScroll = panelToScroll - clientHeight;
		currentPanel--;
		sectionPosition[currentSectionPosition].style.backgroundColor = 'purple';
		currentSectionPosition--;
		sectionPosition[currentSectionPosition].style.backgroundColor = 'red';
	}

	scrollTo({
		top: panelToScroll,
		behavior: 'smooth',
	});
});