import cancelIcon from "../../assets/icons/cancel.svg";
import * as S from "./CloseButton.styled";

interface CloseButtonProps {
  variant: string;
  onClick?: () => void;
  className?: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({ variant, onClick, className }) => {
  return (
    <S.CloseButton className={className} $variant={variant} onClick={onClick}>
      <img src={cancelIcon} alt='취소이미지' />
    </S.CloseButton>
  );
};

export default CloseButton;
