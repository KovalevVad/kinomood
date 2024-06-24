import { Header } from "src/widgets/header";
import { Title } from "src/shared/ui/title";
import { Filters } from "src/features/filters";
import { MovieType } from "src/shared/config/type"

import { minutesToHour } from "src/shared/lib/minutes-to-hours/minutes-to-hours";

import { useCatalogQuery } from "src/widgets/catalog/api";

import "./index.css";

interface CatalogProps {
  title: string;
}

interface FilmProps {
  id: string;
  img: string;
  name: string;
  year: number;
  movieLength: number;
}

const Film =
({
  id,
  img,
  name,
  year,
  movieLength,
}: FilmProps) => {

  const formattedTime = movieLength > 60
        ? `${minutesToHour(movieLength).Hours} ч ${minutesToHour(movieLength).minutes} мин`
        : `${minutesToHour(movieLength).minutes} мин`;

  return (
    <div key={id} className="filmsGrid__item">
      <div className="filmsGrid__item-img">
        <img src={img} alt="" />
      </div>
      <div className="filmsGrid__item-wrapper">
        <h5>{name}</h5>
        <div className="filmsGrid__item-wrapper-info">
          <span>{year}</span>
          <span>
           {formattedTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export const Catalog = ({ title }: CatalogProps) => {
  const { isLoading, isError, data } = useCatalogQuery();

  if (isLoading) {
    return <h3>Идет загрузка....</h3>;
  }

  if (isError) {
    return <h3>Ошибка получения данных</h3>;
  }

  return (
    <>
      <Header />
      <div className="Catalog">
        <div>
          <Title size="large">{title}</Title>
          <Filters />
        </div>
        <div className="filmsGrid">
          {data?.data.docs.map((movie: MovieType) => (
            <Film
              id={movie.id}
              img={movie.poster.previewUrl}
              name={movie.name}
              year={movie.year}
              movieLength={movie.movieLength}
              />
          ))}
        </div>
      </div>
    </>
  );
};
