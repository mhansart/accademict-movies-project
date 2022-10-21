import internal from "stream";

export interface Movie {
  title: string;
  description: string;
  image: string;
  releaseDate: Date;
  gender: string[];
  duration: string;
}
