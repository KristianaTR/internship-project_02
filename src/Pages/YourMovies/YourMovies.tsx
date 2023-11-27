import Text from "../../Components/atoms/Text";
import NavigationBar from "../../Components/molecules/NavigationBar";
import YourMoviesContainer from "../../Components/organisms/YourMoviesContainer";
import { MovieListProps } from "../../Data/movieListType";
import { YourMovieListProps } from "../../Data/yourMovieListType";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { setMovieList, setYourMovies } from "../../App/movieSlice";

const YourMovies = () => {
  const dispatch = useAppDispatch();
  const movieList = useAppSelector((state) => state.movies.movieList);
  const yourMovies = useAppSelector((state) => state.movies.yourMovies);

  const tableHeaders = ["Name", "Genre", "Time", "Price", ""];

  const handleDeleteMovie = (movieToDelete: YourMovieListProps) => {
    const updatedYourMovies = yourMovies.filter(
      (movie: YourMovieListProps) => movie.movieName !== movieToDelete.movieName
    );

    const deletedMovieIndex = movieList.findIndex(
      (movie: MovieListProps) => movie.movieName === movieToDelete.movieName
    );

    if (deletedMovieIndex !== -1) {
      const updatedMovieList = movieList.map((movie, index) => 
      index === deletedMovieIndex ? {...movie, countInStock: movie.countInStock + 1 } : movie);
      dispatch(setMovieList(updatedMovieList));
    }

    dispatch(setYourMovies(updatedYourMovies));
  };

  return (
    <div className="page-wrapper">
      <Text text="Movie Rental" type="heading" color="#ffffff" />
      <NavigationBar />
      <YourMoviesContainer
        movieListToDisplay={yourMovies}
        tableHeaders={tableHeaders}
        handleClick={handleDeleteMovie}
      />
    </div>
  );
};

export default YourMovies;
