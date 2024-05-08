import { InputHTMLAttributes } from "react";
import * as S from "./Input.styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
}

const Input: React.FC<InputProps> = ({ variant, type, placeholder, className, onChange, name, value }) => {
  return (
    <S.Input
      $variant={variant}
      name={name}
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
