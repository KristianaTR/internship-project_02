import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';

const store = configureStore({
  reducer: {
    movies: movieReducer,
    // Add other reducers if needed
  },
})

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch