import Text from "../../Components/atoms/Text";
import NavigationBar from "../../Components/molecules/NavigationBar";


const YourMovies = () => {
  return (
    <div className="page-wrapper">
      <Text text="Movie Rental" type="heading" color= '#ffffff' />
      <NavigationBar/>
      Your movies
        
    </div>
  )
}

export default YourMovies