import "./index.css";

import { Input } from "src/shared/ui/input";
import { http } from "src/shared/api/kinopoisk";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

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
  const updateTime = (minute: number) => {
    const Hours = Math.floor(minute / 60);
    const minutes = minute % 60;

    return { Hours, minutes };
  };

  return (
    <div key={id} className="cardSearchMain">
      <span className="titleKey">{number + 1}</span>
      <img src={urlImg} alt="" />
      <div className="cardSearchMain__text">
        <h4>{title}</h4>
        <span>
          {year}&emsp;{ageRating}+
        </span>
        <ul>
          {genres?.map((genre, index) => (
            <li key={index}>{genre.name}, &nbsp;</li>
          ))}
          {updateTime(movieLength).Hours +
            ` ч ` +
            updateTime(movieLength).minutes +
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

  console.log(data);
  return (
    <div className="wrapper__searchMain">
      <h2 className="headerText">Найдите фильм под ваше настроение!</h2>
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
