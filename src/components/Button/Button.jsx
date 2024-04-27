import * as S from './Button.styled';

const Button = ({ text, className, type, onClick }) => {
  return (
    <S.Button type={type} onClick={onClick} className={className}>
      {text}
    </S.Button>
  );
};

export default Button;
