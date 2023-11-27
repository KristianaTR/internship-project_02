import "./LoginForm.css";
import InputWithMessage from "../../molecules/InputWithMessage";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import { useState } from "react";
import { UserProps } from "../../../Pages/Login/UserType";
import { useNavigate } from "react-router-dom";
import { setErrorMessageForField, validateEmail } from "../formUtils";
import { LoginFormDataType, AllFormKeys } from "../formTypes";

const LoginForm = () => {
  const navigate = useNavigate();

  const LoginFormData = [
    {
      label: "Email",
      inputType: "email",
      id: "email",
      placeholder: "email",
      name: "email",
    },
    {
      label: "Password",
      inputType: "password",
      id: "password",
      placeholder: "password",
      name: "password",
    },
  ];

  const [formData, setFormData] = useState<LoginFormDataType>({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<{
    [key: string]: string;
  }>({
    email: "",
    password: "",
    general: "",
  });

  const userList: UserProps[] = JSON.parse(localStorage.getItem("userList") || "[]") || [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validatePassword = () => {
    const errorMessage =
      formData.password === "" ? "Please enter password" : "";

    setErrorMessageForField(
      setErrorMessage,
      "password" as keyof AllFormKeys,
      errorMessage
    );

    return errorMessage === "" ? true : false;
  };

  const validateFormSignInAndRedirect = () => {
    const isEmailValid = validateEmail(setErrorMessage, "email", formData);
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      const foundUser = userList.find(
        (user: UserProps) =>
          user.email === formData.email && user.password === formData.password
      );

      if (foundUser) {
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        navigate("/");
      } else {
        setErrorMessage((prevErrors) => ({
          ...prevErrors,
          general: "Invalid email or password",
        }));
      }
    }
  };

  return (
    <form className="loginForm" id="form-signIn">
      {LoginFormData.map((field) => (
        <InputWithMessage
          label={field.label}
          id={field.id}
          placeholder={field.placeholder}
          name={field.name}
          onChange={handleInputChange}
          errorMsg={errorMessage[field.id]}
          hasError={!!errorMessage[field.id]}
        />
      ))}
      <Text
        text={errorMessage.general}
        type="paragraph"
        color="#C93333"
        fontSize="0.6rem"
      />
      <Button text="Sign in" onClick={validateFormSignInAndRedirect} />
    </form>
  );
};

export default LoginForm;