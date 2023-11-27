import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../App/store";

// interface RentTimeState {
//   values: { movieId: number };
// }

// const initialState: RentTimeState = {
//   values: {},
// };

interface RentTimeState {
  value: number;
}

// const getInitialRentTime = (movieId: number):RentTimeState => {
//   const storedYourMovies = localStorage.getItem("yourMovies");
//   const storedMovie = JSON.parse(storedYourMovies || '{}');
//   const initialRentTime = storedMovie[movieId]?.rentTime || 12;
//   return {value: initialRentTime};
// }

const initialState: RentTimeState = {
  value: 12,
};

export const rentTimeSlice = createSlice({
  name: "rentTime",
  initialState,
  reducers: {
    setRentTime: (
      state,
      action: PayloadAction<RentTimeState >
    ) => {
      // const movieId = action.payload;
      // state.value[movieId] = value;
      state = action.payload
    },

    // incrementRentTime: (state, action: PayloadAction<RentTimeState>) => {
    //   const movieId = action.payload;
    //   const maxRentTime = 168;
    //   state.values[movieId] = Math.min(
    //     (state.values[movieId] || 0) + 12,
    //     maxRentTime
    //   );
    // },
    
    // decrementRentTime: (state, action: PayloadAction<RentTimeState>) => {
    //     const movieId = action.payload;
    //     const minRentTime = 12;
    //   state.values[movieId] = Math.max(
    //     (state.values[movieId] || 0) - 12, minRentTime
    //     );
    // },
  },
});

// export const { setRentTime, incrementRentTime, decrementRentTime } = rentTimeSlice.actions;
// export default rentTimeSlice.reducer;

// export const selectRentTime = (movieId: number) => (state: RootState) =>
//   state.rentTime.values[movieId];
