import Button from '../Button/Button';
import Input from '../Input/Input';
import * as S from './Modal.styled';
import cancelIcon from '../../assets/icons/cancel.svg';

const Modal = ({
  variant,
  title,
  text,
  placeholder = '내용 입력',
  onClick,
  currentFolder,
}) => {
  switch (variant) {
    case 'changeName':
      title = '폴더 이름 변경';
      text = '변경하기';
      break;
    case 'addFolder':
      title = '폴더 추가';
      text = '추가하기';
      break;
    case 'shareFolder':
      title = '폴더 공유';
      break;
    case 'deleteFolder':
      title = '폴더 삭제';
      text = '삭제하기';
      break;
    case 'deleteLink':
      title = '링크 삭제';
      text = '삭제하기';
      break;
    default:
      return;
  }
  return (
    <S.ModalLayout>
      <S.ModalContainer>
        <S.CloseButton onClick={onClick}>
          <img src={cancelIcon} alt='취소이미지' />
        </S.CloseButton>
        <h4>{title}</h4>
        <Input placeholder={placeholder} />
        <Button text={text} />
      </S.ModalContainer>
    </S.ModalLayout>
  );
};

export default Modal;
