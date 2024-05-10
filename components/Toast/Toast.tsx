import * as S from "./Toast.styled";
import ToastCheckSvg from "@/assets/icons/toast-check.svg";
import ToastCloseSvg from "@/assets/icons/toast-close.svg";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { closeToast, putContents } from "@/redux/reducers/toast";
import Image from "next/image";
import { TOAST_TYPES } from "./ToastTypes";

const Toast: React.FC = () => {
  const { contents, isOpen } = useAppSelector((state) => state.toast);
  const dispatch = useAppDispatch();

  if (!isOpen) return null;

  const findToast = TOAST_TYPES.find((toast) => {
    return toast.type === contents.type;
  });

  const closeButtonClickHandler = () => {
    dispatch(closeToast());
  };

  setTimeout(() => {
    closeButtonClickHandler();
  }, 1500);

  return (
    <S.Layout>
      <S.CheckContainer>
        <Image src={ToastCheckSvg} alt={"체크이미지"} />
        <S.CheckTextBox>{findToast?.text}</S.CheckTextBox>
      </S.CheckContainer>
      <S.CloseIconButtonBox onClick={closeButtonClickHandler}>
        <Image src={ToastCloseSvg} alt={"닫기버튼"} />
      </S.CloseIconButtonBox>
    </S.Layout>
  );
};

export default Toast;
