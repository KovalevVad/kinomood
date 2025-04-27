import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { http } from "src/shared/api/kinopoisk";

export const useCatalogQuery = (
  genre?: string,
  rating?: string,
  type?: string
) => {
  const [isEnabled, setIsEnabled] = useState(true);

  const searchParams = new URLSearchParams({
    page: "1",
    limit: "36",
  });

  const selectFields = [
    "id",
    "name",
    "year",
    "poster",
    "movieLength",
    "rating",
  ];
  const notNullFields = ["id", "name", "poster.url", "rating.kp"];

  selectFields.forEach((field) => {
    searchParams.append("selectFields", field);
  });

  notNullFields.forEach((field) => {
    searchParams.append("notNullFields", field);
  });

  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ["catalog", genre, rating, type],
    queryFn: () => {
      return http.get(
        `movie?${searchParams}&genres.name=${genre}&rating.kp=${rating}&type=${type}`
      );
    },
    enabled: isEnabled,
    retry: 1,
  });

  useEffect(() => {
    if (isSuccess) {
      setIsEnabled(false);
    }
  }, [isSuccess]);

  return { isLoading, isError, data };
};
