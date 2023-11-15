import "./Text.css";
import { TextProps } from "./TextType";

const Text: React.FC<TextProps> = ({ text, type, color, fontSize }) => {
  
  const customStyle = { 
    color,
    fontSize,
  };

  return (
    <p 
      className={`text ${type}`}
      style={customStyle}
    >
      {text}
    </p>
  );
};

export default Text