
import { minutesToHour } from "src/shared/lib/minutes-to-hours/minutes-to-hours";
import { MovieRating } from "src/shared/ui/movieRating";

import "./index.css"

interface Rating {
  kp?: number;
  imdb?: number;
}

interface Props {
  rating?: Rating;
  genres: string;
  year: number;
  ageRating: number;
  countries: string;
  movieLength: number;
}

export const Info = ({
  rating,
  year,
  genres,
  ageRating,
  countries,
  movieLength,
}: Props ) => {
  const formattedTime = movieLength > 60
        ? `${minutesToHour(movieLength).Hours} ч ${minutesToHour(movieLength).minutes} мин`
        : `${minutesToHour(movieLength).minutes} мин`;

  return (
    <div className="movie__info">
      <MovieRating rating={rating} />
      <span>{year}</span>
      <span>{genres}</span>
      <span>{ageRating}+</span>
      <span>{countries}</span>
      <span>{formattedTime}</span>
    </div>
  )
}