import * as S from './Button.styled';

const Button = ({
  variant = 'default',
  isActive,
  text,
  className,
  type,
  onClick,
}) => {
  return (
    <S.Button
      $variant={variant}
      $isActive={isActive}
      type={type}
      onClick={onClick}
      className={className}
    >
      {text}
    </S.Button>
  );
};

export default Button;
