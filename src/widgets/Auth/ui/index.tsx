import { NavLink } from "react-router-dom";

import { Logo } from "src/assets/images/index";
import { Input } from "src/shared/ui/input"
import { Button } from "src/shared/ui/buttonAuth";

import './index.css'

export const AuthLogin = () => {
  return (
    <div className="wrapper">
      <img src={Logo} alt="Logo" className="logoAuth" />
      <div className="wrapper__content">
        <h2>Зарегистрируйся<br/>или войди</h2>
        <Input className="inputAuth" placeholder='Почта или телефон' classNameButton="inputButtonAuth"/>
        <Button className="buttonAuth" text="Продолжить"/>
        <NavLink to='/' className='backAuth'>Назад</NavLink>
      </div>
    </div>
  )
}