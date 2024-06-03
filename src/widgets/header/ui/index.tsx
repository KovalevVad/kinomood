import { NavLink } from "react-router-dom";

import { Logo } from "src/assets/images";

import "./index.css";

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" className="logo" />
      <nav>
        <ul>
          <li>Главная</li>
          <li>Фильмы</li>
          <li>Сериалы</li>
        </ul>
      </nav>
      <NavLink to='/auth' className="LogIn">Log in</NavLink>
    </header>
  );
};
