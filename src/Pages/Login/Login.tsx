import Button from "../../Components/atoms/Button";
import Text from "../../Components/atoms/Text";
import LoginForm from "../../Components/organisms/LoginForm";
import RegisterForm from "../../Components/organisms/RegisterForm/RegisterForm";
import { useState } from "react";
import { useAppSelector } from "../../App/hooks";

const Login = () => {
  const [showFormRegister, setShowFormRegister] = useState(false);
  const userList = useAppSelector((state) => state.users.userList);
  console.log(userList);
  const openFormRegister = () => setShowFormRegister(true);

  return (
    <div className="page-wrapper">
      <Text text="Movie Rental" type="heading" color="#ffffff" />
      {!showFormRegister && <LoginForm userList={userList} />}
      {!showFormRegister && (
        <Button text="Register" onClick={openFormRegister} />
      )}
      {showFormRegister && <RegisterForm userList={userList} />}
    </div>
  );
};

export default Login;
