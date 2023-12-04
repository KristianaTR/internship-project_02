import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../App/store";
import { MovieListProps } from "../Data/movieListType";
import initialMovieList from "../Data/movieList";

interface MovieState {
  movieList: MovieListProps[];
}

const getInitialMovieList = (): MovieListProps[] => {
  const movieListOnline = localStorage.getItem("movieList");
  return movieListOnline ? JSON.parse(movieListOnline) : initialMovieList;
};

const initialState: MovieState = {
  movieList: getInitialMovieList(),
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovieList: (state, action: PayloadAction<MovieListProps[]>) => {
      state.movieList = action.payload;
      localStorage.setItem("movieList", JSON.stringify(action.payload));
    },
  },
});

export const { setMovieList } = movieSlice.actions;
export const selectMovies = (state: RootState) => state.movies;

export default movieSlice.reducer;