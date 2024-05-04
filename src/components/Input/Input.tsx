import { InputHTMLAttributes } from "react";
import * as S from "./Input.styled";
/**
 *
 * @param {string} placeholder 기본으로 보여줄 문자열
 * @param {string} className 사용할 곳에서 스타일링을 위한 클래스네임
 * @param {function} setter onChange에 걸 함수
 * @param {any} value 값
 * @returns {Element}
 */

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setter?: React.Dispatch<React.SetStateAction<any>>;
}

const Input: React.FC<InputProps> = ({ placeholder, className, setter, value }) => {
  return <S.InputLayout placeholder={placeholder} className={className} onChange={setter} value={value} />;
};

export default Input;
