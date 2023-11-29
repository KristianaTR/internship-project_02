import "./TableYourMovies.css";
import Button from "../../atoms/Button";
import TableCell from "../../atoms/TableCell";
import RentTimeElement from "../RentTimeElement";
import { TableYourMoviesProps } from "./TableYourMoviesType";
import { useAppDispatch } from "../../../App/hooks";
// import {
//   decrementRentTime,
//   incrementRentTime,
// } from "../../../App/rentTimeSlice";

const TableYourMovies = ({
  movieListToDisplay,
  tableHeaders,
  handleClick,
}: TableYourMoviesProps) => {
  return (
    <table className="content-table">
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {movieListToDisplay.map((movie, index) => {
          return (
            <tr key={index}>
              <TableCell content={movie.movieName} />
              <TableCell content={movie.movieGenre} />
              <TableCell
                content={
                  <RentTimeElement
                    rentTime={movie.rentTime}
                    movieId= {index}
                  />
                }
              />
              <TableCell content={movie.rentalPrice.toFixed(2) + "€"} />
              <TableCell
                content={
                  <Button
                    text="Delete"
                    backgroundColor="transparent"
                    boxShadow="none"
                    onClick={() => handleClick(movie)}
                  />
                }
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableYourMovies;
