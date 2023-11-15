import { Dispatch, SetStateAction } from 'react';
import { FormData, AllFormKeys } from './formTypes';

type SetErrorMessage = Dispatch<SetStateAction<{ [key: string]: string }>>;

const setErrorMessageForField = (
    setErrorMessage:SetErrorMessage, 
    field: keyof AllFormKeys, 
    message: string) => {
    setErrorMessage((prevErrors) => ({
        ...prevErrors,
        [field]: message,
    }));
};

const validateEmail = (
    setErrorMessage:SetErrorMessage, 
    emailToValidate: AllFormKeys, 
    formData: FormData) => {

    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const errorMessage = 
    formData[emailToValidate as keyof FormData] === "" 
    ? 'Please fill in the email'
    : !emailPattern.test(formData[emailToValidate as keyof FormData]) 
    ? 'Please enter a valid email address' 
    : '';

    setErrorMessageForField(
        setErrorMessage, 
        "email" as keyof AllFormKeys, 
        errorMessage
    );

    return errorMessage === '' ? true : false;
}

const validateRepeatField = (
    formData: FormData,
    field: AllFormKeys, 
    repeatField: AllFormKeys,
    setErrorMessage:SetErrorMessage, ) => {
    const fieldDisplayName = field.charAt(0) + field.slice(1);
    
    const errorMessage =
        formData[repeatField as keyof FormData] === "" 
        ? `Please fill in the ${fieldDisplayName}` 
        : formData[field as keyof FormData] !== formData[repeatField as keyof FormData] 
        ? `${fieldDisplayName.toUpperCase()}s do not match` 
        : ""
    ;

    setErrorMessageForField(
        setErrorMessage, 
        repeatField as keyof AllFormKeys, 
        errorMessage
    );

    return errorMessage === '' ? true : false;
}

export {
    setErrorMessageForField,
    validateEmail,
    validateRepeatField,
}