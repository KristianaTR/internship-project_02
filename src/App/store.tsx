import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    movies: movieReducer,
    users: userReducer,
    // Add other reducers if needed
  },
})

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch