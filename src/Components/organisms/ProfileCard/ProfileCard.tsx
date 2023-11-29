import './ProfileCard.css';
import Image from '../../atoms/Image'
import Button from '../../atoms/Button';
import { useAppSelector } from "../../../App/hooks";
import UserDataElement from '../../molecules/UserDataElement';

const ProfileCard = () => {
  const activeUser = useAppSelector((state) => state.users.activeUser);
  console.log(activeUser);
  // const fieldsToDisplay = ['name', 'surname', 'email'];
  
  // const dataToDisplay = fieldsToDisplay.map((field) => ({
  //   userDataLabel: field.charAt(0).toUpperCase() + field.slice(1),
  //   userData: activeUser?.[field],
  // }));

  const dataToDisplay = [
    {
      userDataLabel: "Name:",
      userData: activeUser?.name || "",
    },
    {
      userDataLabel: "Surname:",
      userData: activeUser?.surname || "",
    },
    {
      userDataLabel: "Email:",
      userData: activeUser?.email || "",
    },
  ]

  const  avatarImg = {
    src: './Images/avatar.png',
  }
  const profileImg = activeUser?.profileImg || avatarImg.src;

  return (
    <div className='profile-card'>
      <div className="profile-container">
        <div className="profile-picture-container">
          <Image 
            className='profile-picture'
            src={profileImg}
            alt='profile image'
          />
        </div>
        <div className="profile-data-container">
          {dataToDisplay.map((data) => (
            <UserDataElement 
              userDataLabel={data.userDataLabel}
              userData={data.userData}
            />
          ))}
          
        </div>
      </div>
      <div className="action-buttons-container">
        <Button
          text='Reset password'
          // onClick={}
        />
        <Button
          text='Reset email'
          // onClick={}
        />
      </div>
    </div>
  )
}

export default ProfileCard