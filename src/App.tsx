import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { HomePage } from "src/pages/home"
import { Auth } from "src/pages/Auth"
import { ErrorPage } from "src/pages/error"
import { FilmsPage } from "src/pages/films"
import { MoviePage } from "src/pages/movie"
import { SerialsPage } from "src/pages/serials"
import { AnimePage } from "./pages/anime"

import { path } from "src/shared/routing"


export const App = () => {
  return (
    <Router>
        <Routes>
          <Route path={path.error} element={<ErrorPage/>} />
          <Route path={path.home} element={<HomePage />} />
          <Route path={path.auth} element={<Auth />} />
          <Route path={path.films} element={<FilmsPage />} />
          <Route path={path.serials} element={<SerialsPage />} />
          <Route path={path.movie} element={<MoviePage />} />
          <Route path={path.filmMovie} element={<MoviePage /> } />
          <Route path={path.serialsMovie} element={<MoviePage /> } />
          <Route path={path.animeMovie} element={<MoviePage /> } />
          <Route path={path.anime} element={<AnimePage/>} />
        </Routes>
      </Router>
  )
}