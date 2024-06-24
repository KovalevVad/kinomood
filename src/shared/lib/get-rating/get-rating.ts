interface Rating {
  kp?: number;
  imdb?: number;
}

export const getRating = (rating: Rating | null | undefined) =>
  (rating?.kp ?? rating?.imdb ?? 0)?.toFixed(1);
