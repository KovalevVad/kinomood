import { Header } from "src/widgets/header"
import { Slider } from "src/widgets/slider/Slider"
import { TopMovies } from "src/widgets/topMovies"
import { SearchMain } from "src/widgets/searchMain"

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