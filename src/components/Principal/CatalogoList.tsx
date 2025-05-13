import { Food } from "./Food";
import { CatalogoListProps } from "../../assets/types/interfaces";
import { EmptyFood } from "./EmptyFood";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { catalogoListAnimation } from "./catalogoListAnimation";

export const CatalogoList = ({ foodList }: CatalogoListProps ) => {
  const catalogoListRef = useRef(null);

  useLayoutEffect(() => {
      const ctx = gsap.context(()=>{
        catalogoListAnimation();
      }, catalogoListRef);
  
      return ()=> ctx.revert();
    }, [foodList]);

  return (
    foodList.length > 0 ?
    <div id="p-catalogo" ref={catalogoListRef} className=" grid grid-cols-2 justify-items-center gap-x-6 gap-y-8 md:grid-cols-3">
      {foodList.map((item) => {
        return (
          <Food
            key={item.name + item.id}
            id={item.id}
            name={item.name}
            urlImg={item.urlImg}
            price={item.price}
          ></Food>
        );
      })}
    </div>
    : <EmptyFood></EmptyFood>
  );
};
