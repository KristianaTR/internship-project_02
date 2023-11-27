import "./RentTimeElement.css";
import Button from "../../atoms/Button";
import { RentTimeElementProps } from "./RentTimeElementType";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { useEffect, useState } from "react";
// import { decrementRentTime, incrementRentTime, selectRentTime } from "../../../App/rentTimeSlice";
import { setYourMovies } from "../../../App/movieSlice";

const RentTimeElement = ({
  rentTime,
  movieId,
//   onDecrement,
//   onIncrement,
}: RentTimeElementProps) => {
  const [localRentTime, setRentTime] = useState(rentTime);

  const minRentTime = 12;
  const maxRentTime = 168;
    
  const yourMovies = useAppSelector((state) => state.movies.yourMovies);
  
  const dispatch = useAppDispatch();

  // const handleDecrement = () => {
  //   dispatch(incrementRentTime(rentTime, movieId));
  // };

  // const handleIncrement = () => {
  //   dispatch(decrementRentTime(rentTime, movieId));
  // };

  const handleDecrement = () => {
    const newRentTime = Math.max(rentTime -12, minRentTime);
    setRentTime(newRentTime);
    updateRentTime(newRentTime);
  }

  const handleIncrement = () => {
    const newRentTime = Math.min(rentTime +12, maxRentTime);
    setRentTime(newRentTime);
    updateRentTime(newRentTime);
  }

  const updateRentTime = (newRentTime: number) => {
    const updatedYourMovies = yourMovies.map((movie, index) => {
      if(index=== movieId) {
        return {...movie, rentTime: newRentTime};
      }
      return movie;
    });
    dispatch(setYourMovies(updatedYourMovies));
  }

  // useEffect(() => {
  //   // TODO: update rentTime 
  // }, [rentTime]);

  return (
    <div className="count-display">
      <Button text="&lt;" onClick={handleDecrement} />
      <span>{`${localRentTime} h`}</span>
      <Button text="&gt;" onClick={handleIncrement} />
    </div>
  );
};

export default RentTimeElement;
