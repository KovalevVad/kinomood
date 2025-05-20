import { Header } from "src/widgets/header"
import { Slider } from "./slider/index"
import { TopMovies } from "src/pages/home/ui/topMovies"
import { SearchMain } from "src/pages/home/ui/searchMain"

export const HomePage = () => {

  return (
    <>
       <Header />
       <Slider />
       <TopMovies />
       <SearchMain />
    </>
  )
}