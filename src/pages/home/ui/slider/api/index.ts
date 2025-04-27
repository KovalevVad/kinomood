import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { http } from 'src/shared/api/kinopoisk';

export const useSliderQuery = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  const { data, isSuccess } = useQuery({
    queryKey: ['slider'],
    queryFn: () => {
      return http.get(
        `movie?page=1&limit=5&selectFields=id&selectFields=name&selectFields=poster&selectFields=videos&selectFields=backdrop&notNullFields=backdrop.url&notNullFields=id&notNullFields=name&notNullFields=poster.url&rating.kp=7-10&notNullFields=videos.trailers.url&notNullFields=videos.trailers.site&year=2024`
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
  return { data, isSuccess };
};
