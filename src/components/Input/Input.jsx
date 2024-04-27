import * as S from './Input.styled';

const Input = ({ placeholder, className, setter, value }) => {
  return <S.InputLayout placeholder={placeholder} className={className} />;
};

export default Input;
