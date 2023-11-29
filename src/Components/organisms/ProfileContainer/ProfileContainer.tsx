import './ProfileContainer.css';
import Text from '../../atoms/Text';
import ProfileCard from '../ProfileCard';

const ProfileContainer = () => {
  return (
    <div className="container">
        <Text
            type='subheading'
            text='Profile'
            color='#000000'
        />
        <ProfileCard/>
    </div>
  )
}

export default ProfileContainer