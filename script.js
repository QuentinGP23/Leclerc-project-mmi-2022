gsap.registerPlugin(ScrollTrigger);
gsap.to(".snap-element", {
  scrollTrigger: {
    scroller: "snap",
    trigger: ".snap-element",
    start: 'center 55%',
    markers: true,
    toggleActions: 'play complete restart reverse',
  }, 
  scale: 4,
  duration: 2,
  ease: 'back',
});