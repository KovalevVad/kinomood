
import { dropDown } from "src/assets/images"

import "./index.css"

export const Filters = () => {
  return (
    <div className="dropdown">
    <button className="dropButton">
      <p>Жанры</p>
      <img src={dropDown} alt="" />
    </button>
    <div className="dropdown-content">
      <a href="#">Ссылка 1</a>
      <a href="#">Ссылка 2</a>
      <a href="#">Ссылка 3</a>
    </div>
  </div>
  )
}