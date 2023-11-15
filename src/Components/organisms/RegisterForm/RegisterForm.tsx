import './RegisterForm.css';
import InputWithMessage from '../../molecules/InputWithMessage';
import Button from '../../atoms/Button';
import {setErrorMessageForField, validateEmail, validateRepeatField} from '../formUtils';
import { useState } from 'react';
import { RegisterFormDataType, AllFormKeys } from '../formTypes';
import { UserProps } from '../../../Pages/Login/UserType';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const navigate = useNavigate();
    const RegisterFormData = [
        { 
            label: "Name", 
            inputType: "text", 
            id: "name", 
            placeholder: "name", 
            name: "name" 
        },
        {
            label: "Surname", 
            inputType: "text", 
            id: "surname", 
            placeholder: "surname", 
            name: "surname" 
        },
        {
            label: "Email", 
            inputType: "email", 
            id: "email", 
            placeholder: "email", 
            name: "email" 
        },
        {
            label: "Email again", 
            inputType: "email", 
            id: "emailRepeat", 
            placeholder: "email", 
            name: "emailRepeat"
        },
        {
            label: "Password", 
            inputType: "password", 
            id: "password", 
            placeholder: "password", 
            name: "password"
        },
        {
            label: "Password again", 
            inputType: "password", 
            id: "passwordRepeat", 
            placeholder: "password", 
            name: "passwordRepeat"
        },
    ]

    const [formData, setFormData] = useState<RegisterFormDataType>({
        name: '',
        surname: '',
        email: '',
        emailRepeat: '',
        password: '',
        passwordRepeat: '',
    });

    const [errorMessage, setErrorMessage] = useState<{
        [key: string]: string;
    }>({
        name: '',
        surname: '',
        email: '',
        emailRepeat: '',
        password: '',
        passwordRepeat: '',
    });

    const [userList, setUserList] = useState<UserProps[]>(
        JSON.parse(localStorage.getItem("userList") ?? "[]")
    );
    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const validateNameAndSurname = <K extends keyof typeof formData>(target: K) => {
        const errorMessage = 
            formData[target].length < 2
            ? `Please fill in the ${target}`
            : ''
        ;
        setErrorMessageForField(
            setErrorMessage, 
            target as keyof AllFormKeys, 
            errorMessage
        );
        return errorMessage === '' ? true : false;
    };

    const validatePassword = <K extends keyof typeof formData>(passwordToValidate:K) => {
        const errorMessage = 
            formData[passwordToValidate].length < 8 
            ? 'Please fill in the password'
            : ''
        ;
        setErrorMessageForField(
            setErrorMessage, 
            "password" as keyof AllFormKeys, 
            errorMessage
        );
        return errorMessage === '' ? true : false;
    };
    
    const validateFormRegAndRedirect = () => {
        const isNameValid = validateNameAndSurname('name');
        const isSurnameValid = validateNameAndSurname('surname');
        const isPasswordValid = validatePassword('password');
        const isPasswordRepeatValid = validateRepeatField(formData, 'password','passwordRepeat', setErrorMessage);
        const isEmailValid = validateEmail(setErrorMessage, 'email', formData);
        const isEmailRepeatValid = validateRepeatField(formData, 'email', 'emailRepeat', setErrorMessage);
        
        if ( 
            isNameValid &&
            isSurnameValid &&
            isPasswordValid &&
            isPasswordRepeatValid &&
            isEmailValid &&
            isEmailRepeatValid
        ) {
            const newUser = {
                name: formData.name,
                surname: formData.surname,
                email: formData.email,
                password: formData.password,
            };
            setUserList((prevUserList) => [...prevUserList, newUser]);
            localStorage.setItem("userList", JSON.stringify([...userList, newUser]));
            navigate("/");
        }
    }

  return (
    <form className='registerForm' id="form-register">
        {RegisterFormData.map((field) => (
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
        <Button text='Register' onClick={validateFormRegAndRedirect}/>
    </form>
  )
}

export default RegisterForm