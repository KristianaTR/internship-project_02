import "./InputWithMessage.css";
import Text from "../../atoms/Text";
import Input from "../../atoms/Input";
import { InputWithMessageProps } from "./InputWithMessageType";

const InputWithMessage = ({
  label,
  inputType,
  id,
  placeholder,
  name,
  onChange,
  errorMsg,
  hasError,
}: InputWithMessageProps) => {
  return (
    <div className={`InputWithMessage ${hasError ? "error" : ""}`}>
      <Input
        label={label}
        inputType={inputType}
        id={id}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      <Text
        text={errorMsg}
        type="paragraph"
        color="#C93333"
        fontSize="0.6rem"
      />
    </div>
  );
};

export default InputWithMessage;
