import "./Button.css";
import { ButtonProps } from "./ButtonType";

const Button = ({ text, backgroundColor, color, onClick }: ButtonProps) => {

  const buttonCustomStyle = {
    backgroundColor: backgroundColor, 
    color: color,
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