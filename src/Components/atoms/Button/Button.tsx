import "./Button.css";
import { ButtonProps } from "./ButtonType";

const Button = ({ text, backgroundColor, color, boxShadow, cursor, onClick }: ButtonProps) => {

  const buttonCustomStyle = {
    backgroundColor, 
    color,
    boxShadow,
    cursor
  };

  return (
    <button 
      type="button" 
      className="sharedButton" 
      style={buttonCustomStyle}
      onClick={onClick}>
        {text}
    </button>
  );
};

export default Button;