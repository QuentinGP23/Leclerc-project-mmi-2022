// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".snap-element");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".snap",
//     pin: true,
//     scrub: 1,
//     snap: {
//       snapTo: 1 / (sections.length - 1),
//       duration: 0.1,
//       delay: 0.1,
//       ease: "power1.inOut"
//     },
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=3500"
//   }
// });