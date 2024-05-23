import * as S from "./Toast.styled";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { closeToast } from "@/redux/reducers/toast";
import { TOAST_COMPONENTS } from "./ToastTypes";
import { useEffect, useState } from "react";

const Toast = () => {
  const [isAnimation, setAnimation] = useState(false);
  const { type, isOpen } = useAppSelector((state) => state.toast);
  const dispatch = useAppDispatch();

  const findToast = TOAST_COMPONENTS.get(type);

  const closeButtonClickHandler = () => {
    dispatch(closeToast());
    setAnimation(false);
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        closeButtonClickHandler();
      }, 3000);
      setTimeout(() => {
        setAnimation(true);
      }, 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <S.ToastLayout $isAnimation={isAnimation}>
      <S.CheckContainer $backgroundColor={findToast?.warn}>❕</S.CheckContainer>
      <S.CheckTextBox>{findToast?.text}</S.CheckTextBox>
      <S.CloseIconButtonBox onClick={closeButtonClickHandler}>✕</S.CloseIconButtonBox>
    </S.ToastLayout>
  );
};

export default Toast;
