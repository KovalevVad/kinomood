import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { http } from "src/shared/api/kinopoisk";

export const useMovieQuery = (id: string | undefined) => {
  const [isEnabled, setIsEnabled] = useState(true)

  const { data, isSuccess } = useQuery({
    queryKey: ["data", id],
    queryFn: () => {
      return http.get(`movie/${id}`);
    },
    enabled: isEnabled,
    retry: 1,
  });

  useEffect(() => {
    if (isSuccess) {
      setIsEnabled(false);
    }
  }, [isSuccess]);

  return { data };
};
