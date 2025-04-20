import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <section className="p-6 max-w-[450px] mx-auto">
      <h1 className="text-2xl font-extrabold text-dark-purple text-center mb-4">Catálogo de productos</h1>
      <nav className="flex flex-col-reverse items-center gap-4">
        <ul className="relative flex justify-between w-full">
          <li className="bg-dark-purple text-grayish-blue font-bold px-2 py-1 rounded-2xl">
            <NavLink to="/">Desayunos</NavLink>
          </li>
          <li className="bg-dark-purple text-grayish-blue font-bold px-2 py-1 rounded-2xl">
            <NavLink to="/sopas">Sopas</NavLink>
          </li>
          <li className="bg-dark-purple text-grayish-blue font-bold px-2 py-1 rounded-2xl">
            <NavLink to="/postres">Postres</NavLink>
          </li>
          <span className="absolute w-full h-3 bg-soft-blue-green -z-1 top-1/2 -translate-y-1/2"></span>
        </ul>

        <label htmlFor="search" className="flex bg-grayish-blue p-1 rounded-xl items-center">
          <input
            className="w-[200px] outline-0"
            placeholder="Alborada"
            type="search"
            name="search"
            id="search"
          />
          <img className="w-auto h-5" src="/images/iconos/buscar.png" alt="Icono de buscar" />
        </label>
      </nav>
    </section>
  );
};
