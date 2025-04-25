import { useState, useEffect } from "react";
import { catalogo } from "../assets/data/database";
import { CatalogoItem } from "../assets/types/interfaces";

export const useCatalogo = () => {
  const [category, setCategory] = useState(1);

  const [list, setList] = useState(catalogo.desayunos);

  const onClickCategory = (category: number) => {
    setCategory(category);
    if (category === 1) setList(catalogo.desayunos);
    else if (category === 2) setList(catalogo.sopas);
    else setList(catalogo.postres);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setCategory(0);
  };

  const [query, setQuery] = useState("");
  useEffect(() => {
    const userSearch = query.trim().toLowerCase();

    if (userSearch) {
      const filtered: CatalogoItem[] = [];

      for (const category in catalogo) {
        const matches = catalogo[category as keyof typeof catalogo].filter(
          (item) => item.name.toLowerCase().includes(userSearch)
        );

        if (matches.length > 0) {
          matches.forEach((match) => filtered.push(match));
        }
      }

      setList(filtered);
    } else {
      setList(catalogo.desayunos);
      setCategory(1);
    }
  }, [query]);

  return {
    category,
    list,
    query,
    onClickCategory,
    onChangeInput,
  }
};
