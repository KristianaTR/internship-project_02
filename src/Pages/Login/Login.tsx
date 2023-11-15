import Button from "../../Components/atoms/Button";
import Text from "../../Components/atoms/Text";
import LoginForm from "../../Components/organisms/LoginForm";
import RegisterForm from "../../Components/organisms/RegisterForm/RegisterForm";
import React, { useState } from "react";

const Login = () => {
  const [showFormRegister, setShowFormRegister] = useState(false);

  const openFormRegister = () => setShowFormRegister(true);

  return (
    <div className="page-wrapper">
      <Text text="Movie Rental" type="heading" color="#ffffff" />
      {!showFormRegister && <LoginForm />}
      {!showFormRegister && (
        <Button text="Register" onClick={openFormRegister} />
      )}
      {showFormRegister && <RegisterForm />}
    </div>
  );
};

export default Login;
