import { CatalogoList } from "./CatalogoList";
import { catalogo } from "../assets/database";
import { useState, useEffect } from "react";
import { CatalogoItem } from "../assets/interfaces";

export const Principal = () => {
  const [list, setList] = useState(catalogo.desayunos);

  const onClickDesayunos = ()=>{
    setList(catalogo.desayunos)
  }
  const onClickSopas = ()=>{
    setList(catalogo.sopas)
  }
  const onClickPostres = ()=>{
    setList(catalogo.postres)
  }

  const [query, setQuery] = useState('');
  useEffect(()=>{
    const userSearch = query.trim().toLowerCase();

    if (userSearch) {
      const filtered: CatalogoItem[] = [];

      for (const category in catalogo) {
        const matches = catalogo[category as keyof typeof catalogo].filter(item =>
          item.name.toLowerCase().includes(userSearch)
        );

        if (matches.length > 0) {
          matches.forEach(match => filtered.push(match));
        }
      }

      setList(filtered);
    } else setList(catalogo.desayunos);
  }, [query])

  return (
    <section className="p-6 max-w-[450px] mx-auto">
      <h1 className="text-2xl font-extrabold text-dark-purple text-center mb-4">
        Catálogo de productos
      </h1>
      <nav className="flex flex-col-reverse items-center gap-4">
        <div className="relative flex justify-between w-full">
          <button onClick={onClickDesayunos} className="cursor-pointer bg-dark-purple text-grayish-blue font-bold px-2 py-1 rounded-2xl">
            Desayunos
          </button>
          <button onClick={onClickSopas} className="cursor-pointer bg-dark-purple text-grayish-blue font-bold px-2 py-1 rounded-2xl">
            Sopas
          </button>
          <button onClick={onClickPostres} className="cursor-pointer bg-dark-purple text-grayish-blue font-bold px-2 py-1 rounded-2xl">
            Postres
          </button>
          <span className="absolute w-full h-3 bg-soft-blue-green -z-1 top-1/2 -translate-y-1/2"></span>
        </div>

        <label htmlFor="search" className="w-full max-w-[300px] flex bg-grayish-blue p-1 rounded-xl items-center">
          <input
            className="w-full outline-0 px-2"
            placeholder="Alborada"
            type="search"
            name="search"
            id="search"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
          />
          <img
            className="w-auto h-5"
            src="/images/ui/iconos/buscar.png"
            alt="Icono de buscar"
          />
        </label>
      </nav>

      <CatalogoList foodList={list}></CatalogoList>
    </section>
  );
};
