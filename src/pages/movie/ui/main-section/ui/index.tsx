import { useMovieQuery } from "src/pages/movie/api";
import { Info } from "./info";
import { Title } from "src/shared/ui/title";
import { Button } from "./buttonMovie";

import "./index.css";

interface IdParam {
  id: string;
}

export const MainSection = ({ id }: IdParam) => {
  const { data } = useMovieQuery(id);

  let backgroundUrl;
  if (data?.data?.backdrop?.url !== undefined) {
    backgroundUrl = data?.data?.backdrop?.url;
  } else {
    backgroundUrl = data?.data.poster.url;
  }

  return (
    <section className="MoviePage__mainSection">
      <div
        className="MoviePage__mainSection-bg"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
      ></div>
      <Title
        as="h2"
        size="medium"
        classNameContainer="MoviePage__mainSection-title"
      >
        {data?.data.name}
      </Title>
      <Info
        rating={data?.data.rating}
        year={data?.data.year}
        genres={data?.data.genres[0].name}
        ageRating={data?.data.ageRating}
        movieLength={data?.data.movieLength}
        countries={data?.data.countries[0].name}
      />
      <p className="mainSection__description">{data?.data.shortDescription}</p>
      <div className="MoviePage__mainSection-button">
        <Button type="buttonMovie">Смотреть фильм</Button>
        {data?.data?.videos?.trailers[0]?.url && (
          <Button
            type="buttonTrailer"
            trailerUrl={data.data.videos.trailers[0].url}
          >
            трейлер
          </Button>
        )}
      </div>
    </section>
  );
};
