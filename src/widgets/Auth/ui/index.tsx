import { NavLink } from "react-router-dom";

import { Logo } from "src/app/images/index";
import { Input } from "src/shared/ui/input";
import { Button } from "src/shared/ui/buttonAuth";
import { Title } from "src/shared/ui/title";

import "./index.css";

export const AuthLogin = () => {
  return (
    <div className="wrapper">
      <img src={Logo} alt="Logo" className="logoAuth" />
      <div className="wrapper__content">
        <Title as="h2" size="medium">
          Зарегистрируйся
          <br />
          или войди
        </Title>
        <Input
          className="inputAuth"
          placeholder="Введите email"
          classNameButton="inputButtonAuth"
        />
        <Button classNameContainer="buttonAuth">Продолжить</Button>
        <NavLink to="/kinomood/" className="backAuth">
          Назад
        </NavLink>
      </div>
    </div>
  );
};
