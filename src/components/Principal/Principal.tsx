import { CatalogoList } from "./CatalogoList";
import { Button } from "./Button";
import { useCatalogo } from "../../hooks/useCatalogo";
import { useLayoutEffect, useRef } from "react";
import { principalAnimation } from "./principalAnimation";
import { gsap } from "gsap";

export const Principal = () => {
  const principalRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(()=>{
      principalAnimation();
    }, principalRef);

    return ()=> ctx.revert();
  }, []);

  const { category, list, query, onClickCategory, onChangeInput } = useCatalogo();

  return (
    <section ref={principalRef} className="py-6 px-10 sm:px-30 lg:px-50 min-h-[600px]">
      <h1 id="p-title" className="text-2xl font-extrabold text-dark-purple text-center mb-6 lg:text-3xl">
        Catálogo de productos
      </h1>
      <nav id="p-nav" className="flex flex-col-reverse items-center gap-4 mb-8 md:flex-row">
        <div className="relative flex justify-between w-full gap-2">
          <Button 
          handleClick={()=>onClickCategory(1)} classActive={category==1? 'active':''}
          >
            Desayunos
          </Button>
          <Button 
          handleClick={()=>onClickCategory(2)}
          classActive={category==2? 'active':''}>
            Sopas
          </Button>
          <Button 
          handleClick={()=>onClickCategory(3)}
          classActive={category==3? 'active':''}>
            Postres
          </Button>
          
          <span className="absolute w-full h-3 bg-soft-blue-green -z-1 top-1/2 -translate-y-1/2"></span>
        </div>

        <label className="px-2 w-full max-w-[300px] flex bg-grayish-blue p-1 rounded-xl items-center">
          <input
            className="w-full outline-0"
            placeholder="Alborada"
            type="search"
            name="search"
            value={query}
            onChange={onChangeInput}
          />
          <img
            className="w-auto h-4"
            src="/images/ui/iconos/buscar.webp"
            alt="Icono de buscar"
          />
        </label>
      </nav>

      <CatalogoList foodList={list}></CatalogoList>
    </section>
  );
};
