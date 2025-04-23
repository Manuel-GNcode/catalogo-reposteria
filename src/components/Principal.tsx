import { CatalogoList } from "./CatalogoList";
import { catalogo } from "../assets/database";
import { useState, useEffect } from "react";
import { CatalogoItem } from "../assets/interfaces";

export const Principal = () => {
  const [category, setCategory] = useState(1);

  const [list, setList] = useState(catalogo.desayunos);

  const onClickDesayunos = ()=>{
    setList(catalogo.desayunos)
    setCategory(1);
  }
  const onClickSopas = ()=>{
    setList(catalogo.sopas)
    setCategory(2);
  }
  const onClickPostres = ()=>{
    setList(catalogo.postres)
    setCategory(3);
  }
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setQuery(e.target.value);
    setCategory(0);
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
    } else {
      setList(catalogo.desayunos);
      setCategory(1);
    }
  }, [query])

  return (
    <section className="py-6 px-10 sm:px-30 lg:px-50 min-h-[600px]">
      <h1 className="text-2xl font-extrabold text-dark-purple text-center mb-4">
        Catálogo de productos
      </h1>
      <nav className="flex flex-col-reverse items-center gap-4 mb-8 md:flex-row">
        <div className="relative flex justify-between w-full gap-2">
          <button onClick={onClickDesayunos} className={"cursor-pointer bg-dark-purple text-white font-bold px-4 py-1 rounded-2xl border-3 border-dark-purple"+ (category === 1 ? " active":"")}>
            Desayunos
          </button>

          <button onClick={onClickSopas} className={"cursor-pointer bg-dark-purple text-white font-bold px-4 py-1 rounded-2xl border-3 border-dark-purple"+ (category === 2 ? " active":"")}>
            Sopas
          </button>

          <button onClick={onClickPostres} className={"cursor-pointer bg-dark-purple text-white font-bold px-4 py-1 rounded-2xl border-3 border-dark-purple"+ (category === 3 ? " active":"")}>
            Postres
          </button>
          <span className="absolute w-full h-3 bg-soft-blue-green -z-1 top-1/2 -translate-y-1/2"></span>
        </div>

        <label htmlFor="search" className="px-2 w-full max-w-[300px] flex bg-grayish-blue p-1 rounded-xl items-center">
          <input
            className="w-full outline-0"
            placeholder="Alborada"
            type="search"
            name="search"
            id="search"
            value={query}
            onChange={onChangeInput}
          />
          <img
            className="w-auto h-4"
            src="/images/ui/iconos/buscar.png"
            alt="Icono de buscar"
          />
        </label>
      </nav>

      <CatalogoList foodList={list}></CatalogoList>
    </section>
  );
};
