import { NavLink } from "react-router-dom";

import { Logo } from "src/assets/images";

import "./index.css";

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" className="logo" />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/kinomood/"
              className={({ isActive }) => isActive ? "active" : "" } end>Главная</NavLink>
          </li>
          <li>
            <NavLink
              to='/kinomood/movie/'
              className={({ isActive }) => isActive ? "active" : "" }>Фильмы</NavLink>
          </li>
          <li>
            <NavLink
              to="/kinomood/serials/"
              className={({ isActive }) => isActive ? "active" : "" }>Сериалы</NavLink>
            </li>
        </ul>
      </nav>
      <NavLink to='/kinomood/auth/' className="LogIn">Войти</NavLink>
    </header>
  );
};
