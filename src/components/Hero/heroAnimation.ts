import { gsap } from "gsap";

export const heroAnimation = (): void => {
  gsap.from('#hero-img', {
    y: 100,
    opacity: .5,
    duration: 0.8,
    ease: "power2.out",
  });

  const tl = gsap.timeline({
    delay: 0.3,
    defaults: {duration: 0.4, ease: 'back.out'}
  })
  tl.from('.hero-button', {
    y: 200,
    opacity: 0.2,
  }).from('.hero-button', {
    width: '60px',
  }).from('.hero-button p', {
    scaleX: 0.1,
    opacity: 0,
  }, '-=0.3')
};