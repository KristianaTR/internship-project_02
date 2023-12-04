import "./RentTimeElement.css";
import Button from "../../atoms/Button";
import { RentTimeElementProps } from "./RentTimeElementType";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { useState } from "react";
import { setActiveUser, setUserList } from "../../../App/userSlice";

const RentTimeElement = ({
  rentTime,
  movieId,
  rentPrice,
  movieName,
}: RentTimeElementProps) => {
  const [localRentTime, setRentTime] = useState(rentTime);
  const minRentTime = 12;
  const maxRentTime = 168;

  const userList = useAppSelector((state) => state.users.userList);
  const activeUser = useAppSelector((state) => state.users.activeUser)!;
  const yourMovies = activeUser.rentedMovies;
  const movieList = useAppSelector((state) => state.movies.movieList);
  const rentPriceForPeriod = movieList.find(
    (movie) => movie.movieName === movieName
  )?.rentalPrice!;

  const dispatch = useAppDispatch();

  const handleDecrement = () => {
    const newRentTime = Math.max(rentTime - 12, minRentTime);
    if (newRentTime === minRentTime) {
      alert("12h is the minimum of the rent time!");
    }
    const newRentPrice = rentPriceForPeriod * Math.floor(newRentTime / 12);
    setRentTime(newRentTime);
    updateRentData(newRentTime, newRentPrice);
  };

  const handleIncrement = () => {
    const newRentTime = Math.min(rentTime + 12, maxRentTime);
    if (newRentTime === maxRentTime) {
      alert("You reached the maximum of the rent time!");
    }
    const newRentPrice = rentPriceForPeriod * Math.ceil(newRentTime / 12);

    setRentTime(newRentTime);
    updateRentData(newRentTime, newRentPrice);
  };

  const updateRentData = (newRentTime: number, newRentPrice: number) => {
    const updatedYourMovies = yourMovies.map((movie, index) => {
      if (index === movieId) {
        return { ...movie, rentTime: newRentTime, rentalPrice: newRentPrice };
      }
      return movie;
    });

    const updatedActiveUser = {
      ...activeUser,
      rentedMovies: updatedYourMovies,
    };
    dispatch(setActiveUser(updatedActiveUser));

    const updatedUserList = userList.map((user) =>
      user.email === activeUser.email
        ? {
            ...user,
            rentedMovies: updatedActiveUser.rentedMovies,
          }
        : user
    );
    dispatch(setUserList(updatedUserList));
  };

  return (
    <div className="count-display">
      <Button text="&lt;" onClick={handleDecrement} />
      <span>{`${localRentTime} h`}</span>
      <Button text="&gt;" onClick={handleIncrement} />
    </div>
  );
};

export default RentTimeElement;
