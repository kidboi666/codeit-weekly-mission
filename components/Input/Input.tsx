import { InputHTMLAttributes, useEffect, useState } from "react";
import * as S from "./Input.styled";
import Eye from "../Eye/Eye";
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
  width?: string;
  error?: FieldError;
}

const Input = ({
  variant,
  width = "100%",
  value,
  name,
  type,
  placeholder,
  className,
  disabled,
  onBlur,
  onChange,
  error,
  ...field
}: InputProps) => {
  const [isEye, setEye] = useState(false);
  const [transforemedType, setTransformedType] = useState(type);

  const processEye = () => {
    if (type === "password") {
      return setEye(true);
    }
    setEye(false);
  };

  const changeInputType = () => {
    transforemedType === "password" ? setTransformedType("text") : setTransformedType("password");
  };

  useEffect(() => {
    processEye();
  }, []);

  return (
    <>
      <S.Input
        $variant={variant}
        $error={error}
        width={width}
        value={value}
        name={name}
        type={transforemedType}
        placeholder={placeholder}
        className={className}
        disabled={disabled}
        onBlur={onBlur}
        onChange={onChange}
        {...field}
      />
      {isEye && (
        <S.EyeSection>
          <Eye onClick={changeInputType} />
        </S.EyeSection>
      )}
      {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </>
  );
};

export default Input;
