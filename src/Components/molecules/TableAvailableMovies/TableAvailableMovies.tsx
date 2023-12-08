import "./TableAvailableMovies.css";

import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import {
  TableAvailableMoviesProps,
  stockStatusImagesProps,
} from "./TableAvailableMoviesType";
import TableCell from "../../atoms/TableCell";

const TableAvailableMovies = ({
  movieListToDisplay,
  tableHeaders,
  getImageInfo,
  handleClick,
}: TableAvailableMoviesProps) => {
  const stockStatusImages: stockStatusImagesProps[] = movieListToDisplay.map(
    (movie) => getImageInfo(movie.countInStock > 0 ? "inStock" : "outOfStock")
  );

  const stockStatus = movieListToDisplay.map((movie) => {
    const isInStock = movie.countInStock > 0;
    return isInStock;
  });

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
              <TableCell content={movie.rentalPrice.toFixed(2) + "€"} />
              <TableCell
                content={
                  <Image
                    className="table-stock-img"
                    src={stockStatusImages[index]?.src}
                    alt={stockStatusImages[index]?.alt}
                  />
                }
                isImage
              />
              <TableCell
                content={
                  <Button
                    text={stockStatus[index] ? "Rent" : "Out of stock"}
                    backgroundColor="transparent"
                    boxShadow="none"
                    cursor={movie.countInStock > 0 ? "pointer" : "not-allowed"}
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

export default TableAvailableMovies;
