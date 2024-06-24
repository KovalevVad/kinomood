import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { http } from "src/shared/api/kinopoisk";
import { MovieType } from "src/shared/config/type"

import "./index.css";

interface CardList {
  id: string;
  name: string;
  url: string;
  year: number;
  countries: string;
}

const Card: React.FC<CardList> = ({
  id,
  name,
  url,
  year,
  countries }) => {
  return (
    <div key={id} className="card">
      <NavLink to={`${id}`}></NavLink>
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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const searchParams = new URLSearchParams({
    page: "1",
    limit: "100",
    notNullFields: "top250",
  });

  const selectFields = ["id", "name", "year", "poster", "top250", "countries"];

  selectFields.forEach((field) => {
    searchParams.append("selectFields", field);
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
    refetch();
  }, []);

  if (isLoading) {
    return <h3>Идет загрузка....</h3>;
  }

  if (isError) {
    return <h3>Ошибка получения данных</h3>;
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 2;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="topMovie">
      <h1>Топ 250 фильмов</h1>
      <div
        className="topMovie__list"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        {isSuccess &&
          data?.data.docs.map((movie: MovieType) => (
            <Card
              id={movie.id}
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
