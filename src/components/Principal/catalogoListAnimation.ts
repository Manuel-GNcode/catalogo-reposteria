import { gsap } from "gsap/gsap-core";

export const catalogoListAnimation = () => {
  gsap.from('.food-principal', {
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power2.out'
  })
}