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

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ placeholder, className, onChange, value }) => {
  return <S.Input placeholder={placeholder} className={className} onChange={onChange} value={value} />;
};

export default Input;
