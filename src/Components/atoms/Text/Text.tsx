import "./Text.css";
import { TextProps } from "./TextType";

const Text: React.FC<TextProps> = ({ text, type, color }) => {
  
  const customStyle = { 
    color: color,
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