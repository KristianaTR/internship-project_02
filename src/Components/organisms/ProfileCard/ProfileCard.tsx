import "./ProfileCard.css";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import UserDataElement from "../../molecules/UserDataElement";
import { setActiveUser } from "../../../App/userSlice";

const ProfileCard = () => {
  const activeUser = useAppSelector((state) => state.users.activeUser);
  console.log(activeUser);
  const dispatch = useAppDispatch();
  // const fieldsToDisplay = ['name', 'surname', 'email'];
  // let dataToDisplay: { userDataLabel: string; userData: string }[] = [];

  // dataToDisplay = fieldsToDisplay.map((field) => ({
  //   userDataLabel: field.charAt(0).toUpperCase() + field.slice(1),
  //   userData: activeUser![field] ,
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
  ];

  const avatarImg = {
    src: "./Images/avatar.png",
  };
  const profileImg = activeUser?.profileImg || avatarImg.src;

  const handleResetEmail = () => {
    const newEmail = prompt("Enter new email:");
    if (newEmail !== null && activeUser) {
      const isValidEmail = /\S+@\S+\.\S+/.test(newEmail);
      if (isValidEmail) {
        const updatedUser = { ...activeUser, email: newEmail };
        dispatch(setActiveUser(updatedUser));
      } else {
        alert("Please enter a valid email address.");
      }
    }
  };

  return (
    <div className="profile-card">
      <div className="profile-container">
        <div className="profile-picture-container">
          <Image
            className="profile-picture"
            src={profileImg}
            alt="profile image"
          />
        </div>
        <div className="profile-data-container">
          {dataToDisplay.map((data) => (
            <UserDataElement
              key={data.userDataLabel}
              userDataLabel={data.userDataLabel}
              userData={data.userData}
            />
          ))}
        </div>
      </div>
      <div className="action-buttons-container">
        <Button
          text="Reset password"
          // onClick={}
        />
        <Button text="Reset email" onClick={handleResetEmail} />
      </div>
    </div>
  );
};

export default ProfileCard;
