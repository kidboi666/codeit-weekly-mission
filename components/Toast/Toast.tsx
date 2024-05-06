import * as S from "./Toast.styled";

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
        <S.CheckIconBox></S.CheckIconBox>
        <S.CheckTextBox>URL이 복사 되었습니다.</S.CheckTextBox>
      </S.CheckContainer>
      <S.CloseIconButtonBox onClick={closeButtonClickHandler}>
        <S.CloseIconBox></S.CloseIconBox>
      </S.CloseIconButtonBox>
    </S.Layout>
  );
};

export default Toast;
