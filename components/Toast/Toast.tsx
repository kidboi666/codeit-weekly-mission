import * as S from "./Toast.styled";
import ToastCheckSvg from "@/assets/icons/toast-check.svg";
import ToastCloseSvg from "@/assets/icons/toast-close.svg";
import Image from "next/image";

interface ToastProps {
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toast: React.FC<ToastProps> = ({ setToast }) => {
  const closeButtonClickHandler = () => {
    setToast(false);
  };

  setTimeout(() => {
    setToast(false);
  }, 1500);

  return (
    <S.Layout>
      <S.CheckContainer>
        <Image src={ToastCheckSvg} alt={"체크이미지"} />
        <S.CheckTextBox>URL이 복사 되었습니다.</S.CheckTextBox>
      </S.CheckContainer>
      <S.CloseIconButtonBox onClick={closeButtonClickHandler}>
        <Image src={ToastCloseSvg} alt={"닫기버튼"} />
      </S.CloseIconButtonBox>
    </S.Layout>
  );
};

export default Toast;
