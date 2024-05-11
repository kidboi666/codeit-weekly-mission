import * as S from "./Toast.styled";
import ToastCheckSvg from "@/assets/icons/toast-check.svg";
import ToastCloseSvg from "@/assets/icons/toast-close.svg";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { closeToast, putContents } from "@/redux/reducers/toast";
import Image from "next/image";
import { TOAST_TYPES } from "./ToastTypes";
import { useEffect, useState } from "react";

const Toast: React.FC = () => {
  const [isAnimation, setAnimation] = useState(false);
  const { contents, isOpen } = useAppSelector((state) => state.toast);
  const dispatch = useAppDispatch();

  if (!isOpen) return null;

  const findToast = TOAST_TYPES.find((toast) => {
    if (toast.contents.type === contents.type) {
      dispatch(putContents(toast.contents));
      return toast;
    }
  });

  const closeButtonClickHandler = () => {
    dispatch(closeToast());
    setAnimation(false);
  };

  setTimeout(() => {
    closeButtonClickHandler();
  }, 3000);

  setTimeout(() => {
    if (isOpen) {
      setAnimation(true);
    }
  }, 100);

  return (
    <S.ToastLayout $isAnimation={isAnimation}>
      <S.CheckContainer>
        <Image src={ToastCheckSvg} alt={"체크이미지"} />
        <S.CheckTextBox>{findToast?.contents.text}</S.CheckTextBox>
      </S.CheckContainer>
      <S.CloseIconButtonBox onClick={closeButtonClickHandler}>
        <Image src={ToastCloseSvg} alt={"닫기버튼"} />
      </S.CloseIconButtonBox>
    </S.ToastLayout>
  );
};

export default Toast;
