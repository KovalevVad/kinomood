import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { http } from "src/shared/api/kinopoisk";

import "./index.css";

interface CardList {
  name: string;
  url: string;
  year: number;
  countries: string;
}

interface Movie {
  id: string;
  name: string;
  poster: {
    previewUrl: string;
  };
  year: number;
  countries: {
    name: string;
  }[];
}

const Card: React.FC<CardList> = ({ name, url, year, countries }) => {
  return (
    <div className="card">
      <img src={url} alt={name} />
      <div className="card__text">
        <h3>{name}</h3>
        <span>
          {year}, {countries}
        </span>
      </div>
    </div>
  );
};

export const TopMovies = () => {
    const searchParams = new URLSearchParams({
      'page': '1',
      'limit': '100',
      'notNullFields': 'top250',
  });

  const selectFields = ['id', 'name', 'year', 'poster', 'top250', 'countries'];

  selectFields.forEach(field => {
      searchParams.append('selectFields', field);
  });

  const { isLoading, isError, isSuccess, data, refetch } = useQuery({
    queryKey: ["data.data.docs"],
    queryFn: () => {
      return http.get(
        `movie?${searchParams}&sortField=top250&sortType=1&type=movie`
      );
    },
    enabled: true,
    retry: 1,
  });

  useEffect(() => {
    refetch()
  }, [])

  if (isLoading) {
    return <h3>Идет загрузка....</h3>;
  }

  if (isError) {
    return <h3>Ошибка получения данных</h3>;
  }

  return (
    <div className="topMovie">
      <h1>Топ 250 фильмов</h1>
      <div className="topMovie__list">
        {isSuccess && data?.data.docs.map((movie: Movie) => (
          <Card
            key={movie.id}
            name={movie.name}
            url={movie.poster.previewUrl}
            year={movie.year}
            countries={movie.countries[0].name}
          />
        ))}
      </div>
    </div>
  );
};
