import "./Home.css";
import NavigationBar from "../../Components/molecules/NavigationBar";
import Text from "../../Components/atoms/Text";
import MovieListContainer from "../../Components/organisms/MovieListContainer";
import { MovieListProps } from "../../Data/movieListType";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { setMovieList } from "../../App/movieSlice";
import { YourMovieListProps } from "../../Data/yourMovieListType";
import { setActiveUser, setUserList } from "../../App/userSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const dispatch = useAppDispatch();
  const movieList = useAppSelector((state) => state.movies.movieList);
  const userList = useAppSelector((state) => state.users.userList);

  const activeUser = userList.find((user) => user.active === true)!;

  const yourMovies = activeUser?.rentedMovies || [];

  const tableHeaders = ["Name", "Genre", "Price for 12h", "Is in stock", ""];

  const getImageInfo = (status: string) => {
    const imgInfo = {
      inStock: {
        src: "Images/check.png",
        alt: "in stock",
      },
      outOfStock: {
        src: "Images/cross.png",
        alt: "out of stock",
      },
    };

    return status === "inStock" ? imgInfo.inStock : imgInfo.outOfStock;
  };

  const handleRentClick = (rentedMovie: MovieListProps) => {
    const index = movieList.findIndex(
      (m: MovieListProps) => m.movieName === rentedMovie.movieName
    );

    let alreadyRented = false;

    if (yourMovies.length > 0) {
      alreadyRented = yourMovies.some(
        (m: YourMovieListProps) => m.movieName === rentedMovie.movieName
      );
    }
    if (index !== -1 && movieList[index].countInStock > 0 && !alreadyRented) {
      const updatedMovieList = movieList.map((movie, i) =>
        i === index ? { ...movie, countInStock: movie.countInStock - 1 } : movie
      );

      const rentedMovieWithRentTime = {
        ...rentedMovie,
        rentTime: 12,
      };

      const updatedYourMovies = [...yourMovies, rentedMovieWithRentTime];

      const updatedActiveUser = {
        ...activeUser,
        rentedMovies: updatedYourMovies,
      };

      const updatedUserList = userList.map((user) =>
        user === activeUser
          ? {
              ...user,
              rentedMovies: [...updatedYourMovies],
            }
          : user
      );

      dispatch(setMovieList(updatedMovieList));
      dispatch(setActiveUser(updatedActiveUser));
      dispatch(setUserList(updatedUserList));
    }
    
    const notify = () => toast("You have already rented this movie!");
    
    alreadyRented && notify();
  };

  return (
    <div className="page-wrapper">
      <Text text="Movie Rental" type="heading" color="#ffffff" />
      <NavigationBar />
      <MovieListContainer
        movieListToDisplay={movieList}
        tableHeaders={tableHeaders}
        getImageInfo={getImageInfo}
        handleClick={handleRentClick}
      />
    </div>
  );
};

export default Home;
