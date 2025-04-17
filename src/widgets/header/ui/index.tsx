import { NavLink } from "react-router-dom";

import { Logo } from "src/app/images";
import { path } from "src/shared/routing";

import "./index.css";

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" className="logo" />
      <nav>
        <ul>
          <li>
            <NavLink
              to={path.home}
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to={path.films}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink
              to={path.serials}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Сериалы
            </NavLink>
          </li>
          <li>
            <NavLink
              to={path.anime}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Аниме
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to={path.auth} className="LogIn">
        Войти
      </NavLink>
    </header>
  );
};
