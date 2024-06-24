import { useQuery } from "@tanstack/react-query";

import { http } from "src/shared/api/kinopoisk";

export const useCatalogQuery = () => {
  const searchParams = new URLSearchParams({
    page: "1",
    limit: "36",
  });

  const selectFields = ["id", "name", "year", "poster", "movieLength"];
  const notNullFields = ["id","name" ,"poster.url", "movieLength"];

  selectFields.forEach((field) => {
    searchParams.append("selectFields", field);
  });

  notNullFields.forEach((field) => {
    searchParams.append("notNullFields", field);
  });

  const { isLoading, isError, data } = useQuery({
    queryKey: ["data"],
    queryFn: () => {
      return http.get(`movie?${searchParams}&type=movie`);
    },
    enabled: true,
    retry: 1,
  });

  return { isLoading, isError, data };
};
