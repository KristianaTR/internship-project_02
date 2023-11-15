import './Input.css';
import { InputProps } from './InputType';

const Input = ({ 
    label, 
    inputType, 
    id, 
    placeholder, 
    name,
    onChange}: InputProps) => {
  return (
    <label htmlFor={id}>
      {label}
      <input
        type={inputType}
        id={id}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </label>
  )
}

export default Input