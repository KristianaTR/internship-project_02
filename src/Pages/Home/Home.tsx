import "./Home.css";
import NavigationBar from "../../Components/molecules/NavigationBar";
import Text from "../../Components/atoms/Text";
import MovieListContainer from "../../Components/organisms/MovieListContainer";
import initialMovieList from "../../Data/movieList";
import {MovieListProps} from "../../Data/movieListType";
import { useEffect, useState } from "react";

const Home = () => {
  const [movieList, setMovieList] = useState( () => {
    const movieListOnline = localStorage.getItem("movieList");
    return movieListOnline ? JSON.parse(movieListOnline) : initialMovieList;
  });
  const [yourMovies, setYourMovies] = useState(()=> {
    const storedYourMovies = localStorage.getItem("yourMovies");
    return storedYourMovies ? JSON.parse(storedYourMovies) : [];
  });

  useEffect(() => {
    localStorage.setItem("movieList", JSON.stringify(movieList));
  }, [movieList]);

  useEffect( () => {
    localStorage.setItem("yourMovies", JSON.stringify(yourMovies))
  }, [yourMovies]);

  const tableHeaders = ["Name", "Genre", "Price for 12h", "Is in stock", ""];
  
  const getImageInfo = (status: string) => {
    const imgInfo = {
      inStock: {
        src: "./Images/check.png",
        alt: "in stock",
      },
      outOfStock: {
        src: "./Images/cross.png",
        alt: "out of stock",
      },
    };
 
    return status === "inStock" ? imgInfo.inStock : imgInfo.outOfStock;
  };
  
  const handleRentClick = (movie: MovieListProps) => {
    const index = movieList.findIndex((m: MovieListProps) => m.movieName === movie.movieName);
    if (index !== -1 && movieList[index].countInStock > 0) {
      const updatedMovieList = [...movieList];
      updatedMovieList[index].countInStock--;

      const updatedYourMovies = [...yourMovies];
      updatedYourMovies.push(movie);

      setMovieList(updatedMovieList);
      setYourMovies(updatedYourMovies);
    }
  }
 
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
