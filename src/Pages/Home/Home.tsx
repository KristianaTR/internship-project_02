import "./Home.css";
import NavigationBar from "../../Components/molecules/NavigationBar";
import Text from "../../Components/atoms/Text";

const Home = () => {
  return (
    <div className="page-wrapper">
      <Text text="Movie Rental" type="heading" color= '#ffffff' />
      <NavigationBar/>
      Home
        
    </div>
  )
}

export default Home