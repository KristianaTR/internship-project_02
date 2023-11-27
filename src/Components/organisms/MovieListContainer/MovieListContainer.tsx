import "./MovieListContainer.css";
import TableAvailableMovies from "../../molecules/TableAvailableMovies";
import Text from "../../atoms/Text";
import { TableAvailableMoviesProps } from "../../molecules/TableAvailableMovies/TableAvailableMoviesType";

const MovieListContainer = ({
  movieListToDisplay,
  tableHeaders,
  getImageInfo,
  handleClick,
}: TableAvailableMoviesProps) => {
  return (
    <div className="movieList-container">
      <Text text="Available Movies" type="heading" color="#000000" />
      <TableAvailableMovies
        movieListToDisplay={movieListToDisplay}
        tableHeaders={tableHeaders}
        getImageInfo={getImageInfo}
        handleClick={handleClick}
      />
    </div>
  );
};

export default MovieListContainer;
