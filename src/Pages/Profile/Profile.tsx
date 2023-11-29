import Text from "../../Components/atoms/Text";
import NavigationBar from "../../Components/molecules/NavigationBar";
import ProfileContainer from "../../Components/organisms/ProfileContainer";

const Profile = () => {

  return (
    <div className="page-wrapper">
      <Text text="Movie Rental" type="heading" color="#ffffff" />
      <NavigationBar />
      <ProfileContainer/>
    </div>
  );
};

export default Profile;
