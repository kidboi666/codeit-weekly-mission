import * as S from "./Button.styled";
import React from "react";

interface ButtonProps {
  variant: string;
  width?: string;
  text?: string;
  selected?: string;
  className?: string;
  type?: "submit" | "button";
  onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  width,
  text,
  selected,
  className,
  type = "button",
  onClick,
}) => {
  return (
    <S.Button
      $variant={variant}
      $width={width}
      $isActive={selected === text}
      type={type}
      onClick={onClick}
      className={className}
    >
      <p>{text}</p>
    </S.Button>
  );
};

export default Button;
