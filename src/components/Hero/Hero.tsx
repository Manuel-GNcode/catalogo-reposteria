import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { heroAnimation } from "./heroAnimation";

export const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      heroAnimation();
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-100 sm:px-10 sm:h-110 lg:px-30 lg:h-120"
    >
      <img
        id="hero-img"
        className="h-full w-full object-cover"
        src="images/ui/banners/banner_promocion.webp"
        alt="Banner de promoción"
      />

      <button className="hero-button">
        <p>Conseguir cupón</p>
      </button>
    </section>
  );
};
