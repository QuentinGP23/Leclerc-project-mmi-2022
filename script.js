'use strict';

gsap.registerPlugin(ScrollTrigger);
function goToSection(i, anim) {
	gsap.to(window, {
		scrollTo: { y: i * innerHeight, autoKill: false },
		duration: 0.8,
	});

	if (anim) {
		anim.restart();
	}
}

gsap.utils.toArray('.panel').forEach((panel, i) => {
	ScrollTrigger.create({
		trigger: panel,
		onEnter: () => goToSection(i),
	});

	ScrollTrigger.create({
		trigger: panel,
		start: 'bottom bottom',
		onEnterBack: () => goToSection(i),
	});
});
