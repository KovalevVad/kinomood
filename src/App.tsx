import { HomePage } from "./pages/HomePage"
import { Auth } from "./pages/Auth"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export const App = () => {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/kinomood" element={<HomePage />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </>
  )
}