import Text from "../../Components/atoms/Text";
import NavigationBar from "../../Components/molecules/NavigationBar";
import YourMoviesContainer from "../../Components/organisms/YourMoviesContainer";
import { MovieListProps } from "../../Data/movieListType";
import { YourMovieListProps } from "../../Data/yourMovieListType";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { setMovieList } from "../../App/movieSlice";
import { setActiveUser, setUserList } from "../../App/userSlice";
import { UserListProps } from "../../Data/userListType";

const YourMovies = () => {
  const dispatch = useAppDispatch();
  const movieList = useAppSelector((state) => state.movies.movieList);
  const userList = useAppSelector((state) => state.users.userList);
  const activeUser = userList.find((user) => user.active === true)!;
  const yourMovies = activeUser?.rentedMovies || [];

  const tableHeaders = ["Name", "Genre", "Time", "Price", ""];

  const handleDeleteMovie = (movieToDelete: YourMovieListProps) => {
    if (yourMovies && activeUser) {
      const updatedYourMovies = yourMovies.filter(
        (movie: YourMovieListProps) =>
          movie.movieName !== movieToDelete.movieName
      );
      const activeUserUpdated: UserListProps = {
        ...activeUser,
        rentedMovies: updatedYourMovies,
      };
      dispatch(setActiveUser(activeUserUpdated));

      const updatedUserList = userList.map((user) =>
        user === activeUser
          ? {
              ...user,
              rentedMovies: [...updatedYourMovies],
            }
          : user
      );
      dispatch(setUserList(updatedUserList));
    }

    const deletedMovieIndex = movieList.findIndex(
      (movie: MovieListProps) => movie.movieName === movieToDelete.movieName
    );

    if (deletedMovieIndex !== -1) {
      const updatedMovieList = movieList.map((movie, index) =>
        index === deletedMovieIndex
          ? { ...movie, countInStock: movie.countInStock + 1 }
          : movie
      );
      dispatch(setMovieList(updatedMovieList));
    }
  };

  return (
    <div className="page-wrapper">
      <Text text="Movie Rental" type="heading" color="#ffffff" />
      <NavigationBar />
      {yourMovies.length > 0 && (
        <YourMoviesContainer
          movieListToDisplay={yourMovies}
          tableHeaders={tableHeaders}
          handleClick={handleDeleteMovie}
        />
      )}
    </div>
  );
};

export default YourMovies;
