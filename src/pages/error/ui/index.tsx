import { NavLink } from "react-router-dom";

import "./index.css";

export const ErrorPage = () => {
  return (
    <div className="wrapperError">
      <h2 className="wrapperError__text">404</h2>
      <NavLink to="/kinomood/" className="backAuth">
        Вернуться на главную
      </NavLink>
    </div>
  );
};
