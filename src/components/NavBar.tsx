import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex justify-between border">
      <ul className="flex gap-4">
        <li>
          <NavLink to="/">Postres</NavLink>
        </li>
        <li>
          <NavLink to="/drinks">Bebidas</NavLink>
        </li>
        <li>
          <NavLink to="/others">Otros</NavLink>
        </li>
      </ul>

      <label htmlFor="search">
        <input className="border w-[150px]" placeholder="Search" type="text" name="search" id="search" />
      </label>
    </div>
  );
};
