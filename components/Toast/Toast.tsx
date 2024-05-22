import * as S from "./Toast.styled";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { closeToast, putContents } from "@/redux/reducers/toast";
import { TOAST_TYPES } from "./ToastTypes";
import { useState } from "react";

const Toast = () => {
  const [isAnimation, setAnimation] = useState(false);
  const { contents, isOpen } = useAppSelector((state) => state.toast);
  const dispatch = useAppDispatch();

  if (!isOpen) return null;

  const findToast = TOAST_TYPES.find((toast) => {
    if (toast.type === contents.type) {
      dispatch(putContents(toast));
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
      <S.CheckContainer $backgroundColor={findToast?.warning}>❕</S.CheckContainer>
      <S.CheckTextBox>{findToast?.text}</S.CheckTextBox>
      <S.CloseIconButtonBox onClick={closeButtonClickHandler}>✕</S.CloseIconButtonBox>
    </S.ToastLayout>
  );
};

export default Toast;
