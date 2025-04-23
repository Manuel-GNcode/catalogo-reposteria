import { CatalogoList } from "./CatalogoList";
import { catalogo } from "../../assets/data/database";
import { useState, useEffect } from "react";
import { CatalogoItem } from "../../assets/types/interfaces";
import { Button } from "./Button";

export const Principal = () => {
  const [category, setCategory] = useState(1);

  const [list, setList] = useState(catalogo.desayunos);
  const onClickCategory = (category: number, list: CatalogoItem[]) => {
    setList(list);
    setCategory(category);
  };

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
          <Button 
          handleClick={()=>onClickCategory(1, catalogo.desayunos)} classActive={category==1? 'active':''}
          >
            Desayunos
          </Button>
          <Button 
          handleClick={()=>onClickCategory(2, catalogo.sopas)}
          classActive={category==2? 'active':''}>
            Sopas
          </Button>
          <Button 
          handleClick={()=>onClickCategory(3, catalogo.postres)}
          classActive={category==3? 'active':''}>
            Postres
          </Button>
          
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
            src="/images/ui/iconos/buscar.webp"
            alt="Icono de buscar"
          />
        </label>
      </nav>

      <CatalogoList foodList={list}></CatalogoList>
    </section>
  );
};
