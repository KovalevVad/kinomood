import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { HomePage } from "src/pages/HomePage"
import { Auth } from "src/pages/Auth"
import { ErrorPage } from "src/pages/error"
import { FilmsPage } from "src/pages/films"
import { MoviePage } from "src/pages/movie"
import { SerialsPage } from "src/pages/serials"

export const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='*' element={<ErrorPage/>} />
          <Route path="/kinomood/" element={<HomePage />} />
          <Route path="/kinomood/auth/" element={<Auth />} />
          <Route path="/kinomood/movie/" element={<FilmsPage />} />
          <Route path="/kinomood/serials/" element={<SerialsPage />} />
          <Route path="/kinomood/:id" element={<MoviePage />} />
        </Routes>
      </Router>
  )
}