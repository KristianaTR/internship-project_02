import { YourMovieListProps } from "../../../Data/yourMovieListType";

export interface TableYourMoviesProps {
  movieListToDisplay: YourMovieListProps[];
  tableHeaders: string[];
  handleClick: (movie: YourMovieListProps) => void;
}
