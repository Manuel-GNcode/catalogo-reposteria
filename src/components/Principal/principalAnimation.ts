import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export const principalAnimation = (): void => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  document.fonts.ready.then(() => {
    const split = new SplitText("#p-title", { type: "chars" }); // Divide el texto en caracteres
    gsap.from(split.chars, {
      x: -50,
      opacity: 0,
      stagger: { each: 0.02, from: "end" },
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#p-title",
        start: "top 85%",
        toggleActions: "play no no reverse",
      },
    });
  });

  gsap.from("#p-nav", {
    x: 100,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#p-nav",
      start: "top 85%",
      toggleActions: "play no no reverse",
    },
  });
  gsap.from("#p-catalogo", {
    y: 50,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#p-catalogo",
      start: "top 85%",
      toggleActions: "play no no reverse",
    },
  });
};
