'use strict';

const panelContainer = document.querySelector('.panel-container');
const panel = document.querySelectorAll('.recette');
const sectionPosition = document.querySelectorAll('.section-position');

let panelToScroll = 0;
let currentPanel = 0;
let currentSectionPosition = 0;
console.log(sectionPosition);

panelContainer.addEventListener('wheel', (e) => {
	e.preventDefault();
	let { clientHeight } = document.documentElement;
	if (e.deltaY > 0 && currentPanel < panel.length - 1) {
		panelToScroll = panelToScroll + clientHeight;
		currentPanel++;
		sectionPosition[currentSectionPosition].style.backgroundColor = "white";
		currentSectionPosition++;
		sectionPosition[currentSectionPosition].style.backgroundColor = "#484141";
	} else if (e.deltaY < 0 && currentPanel != 0) {
		panelToScroll = panelToScroll - clientHeight;
		currentPanel--;
		sectionPosition[currentSectionPosition].style.backgroundColor = "white";
		currentSectionPosition--;
		sectionPosition[currentSectionPosition].style.backgroundColor = "#484141";
	}

	scrollTo({
		top: panelToScroll,
		behavior: 'smooth',
	});
});