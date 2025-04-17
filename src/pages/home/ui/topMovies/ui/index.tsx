import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { MovieType } from "src/shared/config/type";
import { UseTopMoviesQuery } from "../api";
import { arrowLeft, arrowRight } from "src/app/images";

import "./index.css";

interface CardList {
  id: string;
  name: string;
  url: string;
  year: number;
  countries: string;
}

const Card: React.FC<CardList> = ({ id, name, url, year, countries }) => {
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
  const { isSuccess, refetch, data } = UseTopMoviesQuery();

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    refetch();
  }, []);

  const handleClickButtonLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -600, behavior: "smooth" }); // Прокручиваем влево на 300px
    }
  };

  const handleClickButtonRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 600, behavior: "smooth" }); // Прокручиваем влево на 300px
    }
  };

  console.log(startX, scrollLeft, isDragging);
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Запрещаем прокрутку, если используется мышь (левая кнопка)
    if (e.button !== 0) return;

    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Если мышь используется для прокрутки, блокируем действие
    if (e.type === "mousemove") return;

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
        ref={containerRef}
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
        <img
          className="topMovie__list-arrowLeft"
          onClick={handleClickButtonLeft}
          src={arrowLeft}
          alt="стрелка влево"
        />
        <img
          className="topMovie__list-arrowRight"
          onClick={handleClickButtonRight}
          src={arrowRight}
          alt="стрелка вправо"
        />
      </div>
    </div>
  );
};
