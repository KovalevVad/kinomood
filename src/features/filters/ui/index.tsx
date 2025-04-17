import { useDispatch } from 'react-redux';

import { filters } from "../config"
import { DropDown } from "./dropdown"
import { filtersActions } from '../slice';
import { GenresEnum } from 'src/shared/config/genres';

export const Filters = () => {
  const genre = filters[0]
  const rating = filters[1]
  const dispatch = useDispatch()

  const handleGenreChange = (selectedGenre: GenresEnum) => {
    dispatch(filtersActions.setGenre({ genre: selectedGenre }))
  }

  const handleRatingChange = (selectedRating: string) => {
    dispatch(filtersActions.setRating({rating: selectedRating }))
  }

  return (
    <>
      <DropDown arr={genre} label={"жанры"} onChange={handleGenreChange} />
      <DropDown arr={rating} label={"рейтинг"} onChange={handleRatingChange}/>
    </>
  )
}