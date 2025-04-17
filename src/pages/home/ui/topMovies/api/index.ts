import { useQuery } from "@tanstack/react-query";

import { http } from "src/shared/api/kinopoisk";

export const UseTopMoviesQuery = () => {

  const searchParams = new URLSearchParams({
    page: "1",
    limit: "100",
    notNullFields: "top250",
  });

  const selectFields = ["id", "name", "year", "poster", "top250", "countries"];

  selectFields.forEach((field) => {
    searchParams.append("selectFields", field);
  });

  const { isSuccess, data, refetch } = useQuery({
    queryKey: ["data.data.docs"],
    queryFn: () => {
      return http.get(
        `movie?${searchParams}&sortField=top250&sortType=1&type=movie`
      );
    },
    enabled: false,
    retry: 1,
  });

  return { refetch, isSuccess, data };
}