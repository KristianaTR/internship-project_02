import { InputProps } from '../../atoms/Input/InputType';
// import { TextProps } from '../../atoms/Text/TextType';

export interface InputWithMessageProps extends InputProps {
    errorMsg: string,
    hasError?: boolean,
}