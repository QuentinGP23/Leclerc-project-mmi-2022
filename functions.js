'use strict';

const shine = (arrayToShine, x, y, rayonFlou, color) => {
	arrayToShine.forEach((element) => {
		element.style.transition = 'ease filter .5s';
	});

	setInterval(
		arrayToShine.forEach((element) => {
			element.style.filter = `dropShadow(${x}px ${y}px ${rayonFlou}px ${color})`;
		}),
		1000,
	);
};
