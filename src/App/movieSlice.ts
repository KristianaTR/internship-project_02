import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../App/store";
import { MovieListProps } from "../Data/movieListType";
import { YourMovieListProps } from "../Data/yourMovieListType";
import initialMovieList from "../Data/movieList";

interface MovieState {
  movieList: MovieListProps[];
  yourMovies: YourMovieListProps[];
}

const getInitialMovieList = (): MovieListProps[] => {
  const movieListOnline = localStorage.getItem("movieList");
  return movieListOnline ? JSON.parse(movieListOnline) : initialMovieList;
};

const getInitialYourMovieList = (): YourMovieListProps[] => {
  const storedYourMovies = localStorage.getItem("yourMovies");
  return storedYourMovies ? JSON.parse(storedYourMovies) : [];
};

const initialState: MovieState = {
  movieList: getInitialMovieList(),
  yourMovies: getInitialYourMovieList(),
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovieList: (state, action: PayloadAction<MovieListProps[]>) => {
      state.movieList = action.payload;
      localStorage.setItem("movieList", JSON.stringify(action.payload));
    },
    setYourMovies: (state, action: PayloadAction<YourMovieListProps[]>) => {
      state.yourMovies = action.payload;
      localStorage.setItem("yourMovies", JSON.stringify(action.payload));
    },
  },
});

export const { setMovieList, setYourMovies } = movieSlice.actions;
export const selectMovies = (state: RootState) => state.movies;

export default movieSlice.reducer;