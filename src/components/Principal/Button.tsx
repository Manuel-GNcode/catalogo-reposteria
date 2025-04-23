import { ButtonProps } from "../../assets/types/interfaces";

export const Button = ({ children, handleClick, classActive }: ButtonProps) => {
  return (
    <button onClick={handleClick} className={`category-button ${classActive}`}>
      {children}
    </button>
  );
};