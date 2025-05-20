import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from 'src/features/auth/slice'
import { RootState } from 'src/store'

import { Logo } from 'src/app/images'
import { path } from 'src/shared/routing'

import './index.css'

export const Header = () => {
  const token = useSelector((state: RootState) => state.auth.token)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate(path.home)
  }

  return (
    <header>
      <img src={Logo} alt="" className="logo" />
      <nav>
        <ul>
          <li>
            <NavLink to={path.home} className={({ isActive }) => (isActive ? 'active' : '')} end>
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to={path.films} className={({ isActive }) => (isActive ? 'active' : '')}>
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink to={path.serials} className={({ isActive }) => (isActive ? 'active' : '')}>
              Сериалы
            </NavLink>
          </li>
          <li>
            <NavLink to={path.anime} className={({ isActive }) => (isActive ? 'active' : '')}>
              Аниме
            </NavLink>
          </li>
        </ul>
      </nav>
      {token ? (
        <button className="LogIn" onClick={handleLogout}>
          Выйти
        </button>
      ) : (
        <NavLink to={path.login} className="LogIn">
          Войти
        </NavLink>
      )}
    </header>
  )
}
