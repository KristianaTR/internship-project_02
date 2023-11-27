import { MovieListProps } from "../../../Data/movieListType";

export interface TableAvailableMoviesProps {
  movieListToDisplay: MovieListProps[];
  tableHeaders: string[];
  getImageInfo: (status: string) => stockStatusImagesProps;
  handleClick: (movie: MovieListProps) => void;
}

export interface stockStatusImagesProps {
  src: string;
  alt: string;
}
