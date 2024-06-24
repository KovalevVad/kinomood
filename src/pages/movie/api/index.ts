import { useQuery } from "@tanstack/react-query";

import { http } from "src/shared/api/kinopoisk";

export const useMovieQuery = (id: string | undefined) => {
  const { data } = useQuery({
    queryKey: ["data", id],
    queryFn: () => {
      return http.get(`movie/${id}`);
    },
    enabled: false,
    retry: 1,
  });

  return { data };
};
