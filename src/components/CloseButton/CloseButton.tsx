import Image from "next/image";
import cancelIcon from "@/public/icons/cancel.svg";
import * as S from "./CloseButton.styled";

interface CloseButtonProps {
  variant: string;
  onClick?: () => void;
  className?: string;
}

const CloseButton = ({ variant, onClick, className }: CloseButtonProps) => {
  return (
    <S.CloseButton className={className} $variant={variant} onClick={onClick}>
      <Image src={cancelIcon} alt='취소이미지' />
    </S.CloseButton>
  );
};

export default CloseButton;
