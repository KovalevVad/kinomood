import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'src/store/store';
import { Header } from 'src/widgets/header';
import { Title } from 'src/shared/ui/title';
import { Filters } from 'src/features/filters';
import { MovieType } from 'src/shared/config/type';

import { minutesToHour } from 'src/shared/lib/minutes-to-hours/minutes-to-hours';
import { MovieRating } from 'src/shared/ui/movieRating';

import { useCatalogQuery } from 'src/widgets/catalog/api';

import './index.css';

interface CatalogProps {
  title: string;
  type: string;
}

interface FilmProps {
  id: string;
  img: string;
  name: string;
  year: number;
  movieLength: number;
  rating?: {
    kp?: number;
    imdb?: number;
  };
}

const Film = ({ id, img, name, year, movieLength, rating }: FilmProps) => {
  const formattedTime =
    movieLength > 60
      ? `${minutesToHour(movieLength).Hours} ч ${
          minutesToHour(movieLength).minutes
        } мин`
      : `${minutesToHour(movieLength).minutes} мин`;

  return (
    <div className="filmsGrid__item">
      <NavLink to={`${id}`}></NavLink>
      <div className="filmsGrid__item-img">
        <img src={img} alt="" />
      </div>
      <div className="filmsGrid__item-wrapper">
        <h5>{name}</h5>
        <div className="filmsGrid__item-wrapper-info">
          <span>{year}</span>
          <span>{formattedTime}</span>
        </div>
        <MovieRating classes="filmsGrid__item-rating" rating={rating} />
      </div>
    </div>
  );
};

export const Catalog = ({ title, type }: CatalogProps) => {
  const genre = useSelector((state: RootState) => state.filters.genre);
  const rating = useSelector((state: RootState) => state.filters.rating);

  const { isLoading, isError, data } = useCatalogQuery(genre, rating, type);

  if (isError) {
    return <h3>Ошибка получения данных</h3>;
  }

  return (
    <>
      <Header />
      <div className="Catalog">
        <div>
          <Title size="large" classNameContainer="catalog__title">
            {title}
          </Title>
          <Filters />
        </div>
        <div className="filmsGrid">
          {isLoading ? (
            <div className="spinner">
              <div className="blob top"></div>
              <div className="blob bottom"></div>
              <div className="blob left"></div>
              <div className="blob move-blob"></div>
            </div>
          ) : (
            data?.data.docs.map((movie: MovieType) => (
              <Film
                key={movie.id}
                id={movie.id}
                img={movie.poster.previewUrl}
                name={movie.name}
                year={movie.year}
                movieLength={movie.movieLength}
                rating={movie.rating}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};
