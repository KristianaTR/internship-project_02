import "./YourMoviesContainer.css";
import Text from "../../../Components/atoms/Text";
import TableYourMovies from "../../molecules/TableYourMovies";
import { TableYourMoviesProps } from "../../molecules/TableYourMovies/TableYourMoviesType";

const YourMoviesContainer = ({
  movieListToDisplay,
  tableHeaders,
  handleClick,
}: TableYourMoviesProps) => {
  return (
    <div className="container yourMovies">
      <Text text="Your movies" type="heading" color="#000000" />
      <TableYourMovies 
         movieListToDisplay={movieListToDisplay} 
         tableHeaders={tableHeaders}
         handleClick={handleClick}
      />
    </div>
  );
};

export default YourMoviesContainer;
