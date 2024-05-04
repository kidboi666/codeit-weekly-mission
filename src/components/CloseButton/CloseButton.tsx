import cancelIcon from "../../assets/icons/cancel.svg";
import * as S from "./CloseButton.styled";

interface CloseButtonProps {
  closingModal?: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ closingModal }) => {
  return (
    <S.CloseButton onClick={closingModal}>
      <img src={cancelIcon} alt='취소이미지' />
    </S.CloseButton>
  );
};

export default CloseButton;
