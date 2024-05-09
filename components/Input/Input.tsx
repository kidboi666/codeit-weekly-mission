import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from "react";
import * as S from "./Input.styled";
import { INPUT_MESSAGES } from "@/constants/strings";
import Eye from "../Eye/Eye";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
  width?: string;
}

const Input: React.FC<InputProps> = ({
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
}) => {
  const [error, setError] = useState("");
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
  // const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.type === "email") {
  //     if (e.target.value.trim() === "") return setError(INPUT_MESSAGES.AUTH.ENTER_EMAIL);
  //   }
  //   if (e.target.type === "password" || e.target.type === "text") {
  //     if (e.target.value.trim() === "") return setError(INPUT_MESSAGES.AUTH.ENTER_PW);
  //   }

  //   setError("");
  // };

  useEffect(() => {
    processEye();
  }, []);

  return (
    <>
      <S.Input
        $variant={variant}
        $error={error}
        $width={width}
        value={value}
        name={name}
        type={transforemedType}
        placeholder={placeholder}
        className={className}
        disabled={disabled}
        onBlur={onBlur}
        onChange={onChange}
      />
      {isEye && (
        <S.EyeSection>
          <Eye onClick={changeInputType} />
        </S.EyeSection>
      )}
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </>
  );
};

export default Input;
