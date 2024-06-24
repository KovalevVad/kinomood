import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { Input } from "src/shared/ui/input";
import { http } from "src/shared/api/kinopoisk";
import { Title } from "src/shared/ui/title"

import { minutesToHour } from "src/shared/lib/minutes-to-hours/minutes-to-hours"

import "./index.css";
import { NavLink } from "react-router-dom";


interface CardList {
  title?: string;
  urlImg?: string;
  id?: number;
  year?: number;
  ageRating?: number;
  number: number;
  genres: [{ name: string }];
  movieLength: number;
  countries: string;
}

interface Movie {
  id: number;
  name: string;
  poster: {
    previewUrl: string;
  };
  year: number;
  ageRating: number;
  genres: [{ name: string }];
  movieLength: number;
  countries: [{name: string}];
}

const CardList: React.FC<CardList> = ({
  title,
  urlImg,
  id,
  year,
  ageRating,
  number,
  genres,
  movieLength,
  countries,
}) => {

  return (
    <div key={id} className="cardSearchMain">
      <span className="titleKey">{number + 1}</span>
      <img src={urlImg} alt="" />
      <NavLink to={`${id}`}></NavLink>
      <div className="cardSearchMain__text">
        <Title classNameContainer="cardSearchMain__text-title" as="h3" size="small">{title}</Title>
        <span>
          {year}&emsp;{ageRating}+
        </span>
        <ul>
          {genres?.map((genre, index) => (
            <li key={index}>{genre.name}, &nbsp;</li>
          ))}
          {minutesToHour(movieLength).Hours +
            ` ч ` +
            minutesToHour(movieLength).minutes +
            ` мин`}
        </ul>
        <span>{countries} • Ридли Скотт</span>
      </div>
    </div>
  );
};

export const SearchMain = () => {
  const [query, setQuery] = useState("");

  const handleClickSearch = () => {
    refetch();
  };

  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["data"],
    queryFn: () => {
      return http.get(`movie/search?page=1&limit=10&query=${query}`);
    },
    enabled: true,
    retry: 1,
  });

  return (
    <div className="wrapper__searchMain">
      <Title as="h2" size="medium" classNameContainer="headerText">Найдите фильм под ваше настроение!</Title>
      <Input
        className="inputSearch"
        placeholder="русская комедия"
        classNameButton="searchMainButton"
        onChange={(e) => setQuery(e.target.value)}
        clickButton={handleClickSearch}
      />
      <div className="wrapper__searchMain-list">
        {isLoading && <p>Загрузка...</p>}
        {isError && <p>Ошибка при загрузке данных</p>}
        {data?.data.docs.map((movie: Movie, index: number) => (
          <CardList
            key={movie.id}
            number={index}
            id={movie.id}
            title={movie.name}
            urlImg={movie.poster.previewUrl}
            year={movie.year}
            ageRating={movie.ageRating}
            genres={movie.genres}
            movieLength={movie.movieLength}
            countries={movie.countries[0].name}
          />
        ))}
      </div>
    </div>
  );
};
