import "./Table.css";

import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import { TableProps, stockStatusImagesProps } from "./TableType";

const Table = ({
  movieListToDisplay,
  tableHeaders,
  getImageInfo,
  handleClick,
}: TableProps) => {
  const stockStatusImages: stockStatusImagesProps[] = movieListToDisplay.map(
    (movie) => getImageInfo(movie.countInStock > 0 ? "inStock" : "outOfStock")
  );

  const stockStatus = movieListToDisplay.map((movie) => {
    const isInStock = movie.countInStock > 0;
    console.log(
      `Movie: ${movie.movieName}, CountInStock: ${movie.countInStock}, IsInStock: ${isInStock}`
    );
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
              <td>{movie.movieName}</td>
              <td>{movie.movieGenre}</td>
              <td>{movie.rentalPrice.toFixed(2) + "€"}</td>
              <td className="table-stock-img">
                <Image
                  src={stockStatusImages[index]?.src}
                  alt={stockStatusImages[index]?.alt}
                />
              </td>
              <td>
                <Button
                  text={stockStatus[index] ? "Rent" : "Out of stock"}
                  backgroundColor="transparent"
                  boxShadow="none"
                  cursor={movie.countInStock > 1 ? "pointer" : "not-allowed"}
                  onClick={() => handleClick(movie)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
