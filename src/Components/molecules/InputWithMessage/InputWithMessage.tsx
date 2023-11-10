import Text from "../../atoms/Text";
import Input from "../../atoms/Input";
import {InputWithMessageProps} from "./InputWithMessageType";

const InputWithMessage = (
    {label, 
    inputType, 
    id, 
    placeholder, 
    onChange,
    errorMsg}: InputWithMessageProps) => {
  return (
    <div className='InputWithMessage'>
        <Input
            label={label}
            inputType={inputType}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
        />
        <Text text={errorMsg} type="paragraph" color="#C93333"/>
    </div>
  )
}

export default InputWithMessage