import './Input.css';
import { InputProps } from './InputType';

const Input = ({ 
    label, 
    inputType, 
    id, 
    placeholder, 
    onChange }: InputProps) => {
  return (
    <label htmlFor={id}>
      {label}
      <input
        type={inputType}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  )
}

export default Input