
export interface MovieType {
  id: string;
  name: string;
  poster: {
    previewUrl: string;
  };
  year: number;
  countries: {
    name: string;
  }[];
  description: string;
  backdrop: {
    url: string
  };
  movieLength: number;
}
