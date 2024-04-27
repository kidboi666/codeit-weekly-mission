import * as S from './Button.styled';

const Button = ({ variant = 'default', text, className, type, onClick }) => {
  return (
    <S.Button
      $variant={variant}
      type={type}
      onClick={onClick}
      className={className}
    >
      {text}
    </S.Button>
  );
};

export default Button;
