import { gsap } from "gsap";

export const headerAnimation = (): void => {
  gsap.from('.social-icon', {
      y: -50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out",
    }
  );
  gsap.from('.h-span', {
      x: 100,
      duration: 0.8,
      ease: 'back.out',
    })
  gsap.from('#h-logo', {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out'
  })
};