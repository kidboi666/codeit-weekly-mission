import Button from '../Button/Button';
import Input from '../Input/Input';
import * as S from './Modal.styled';
import cancelIcon from '../../assets/icons/cancel.svg';
import kakaoIcon from '../../assets/icons/kakao_icon.svg';
import facebookIcon from '../../assets/icons/facebook_icon.svg';
import linkIcon from '../../assets/icons/link.svg';

const FolderList = ({ folderList }) => {
  return (
    <>
      <S.FolderList>
        {folderList.map((folder) => (
          <S.FolderListItem key={folder.id}>
            <S.ItemName>{folder.name}</S.ItemName>
            <S.ItemLinkCount>{folder.link.count}개 링크</S.ItemLinkCount>
          </S.FolderListItem>
        ))}
      </S.FolderList>
    </>
  );
};

const Modal = ({
  variant,
  title,
  text,
  placeholder = '내용 입력',
  closeModal,
  currentFolder,
  currentCard,
  folderList,
}) => {
  switch (variant) {
    case 'changeName':
      title = '폴더 이름 변경';
      text = '변경하기';
      placeholder = currentFolder;
      variant = 'default';
      break;
    case 'addFolder':
      title = '폴더 추가';
      text = '추가하기';
      variant = 'default';
      break;
    case 'selectFolder':
      title = '폴더에 추가';
      text = '추가하기';
      variant = 'default';
      break;
    case 'addLink':
      title = '링크 추가';
      text = '추가하기';
      variant = 'default';
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

  const closingModal = (e) => {
    e.stopPropagation();
    closeModal(false);
  };

  return (
    <S.ModalLayout onClick={closingModal}>
      {variant === 'shareFolder' ? (
        <S.ModalContainer>
          <S.CloseButton onClick={closingModal}>
            <img src={cancelIcon} alt='취소이미지' />
          </S.CloseButton>
          <h4>{title}</h4>
          <S.CurrentFolder>{currentFolder}</S.CurrentFolder>
          <S.ShareContainer>
            <div>
              <img src={kakaoIcon} alt='카카오톡' />
              <p>카카오톡</p>
            </div>
            <div>
              <img src={facebookIcon} alt='페이스북' />
              <p>페이스북</p>
            </div>
            <div>
              <img src={linkIcon} alt='링크' />
              <p>링크 복사</p>
            </div>
          </S.ShareContainer>
        </S.ModalContainer>
      ) : (
        <S.ModalContainer>
          {title === '폴더에 추가' ? (
            <FolderList folderList={folderList} />
          ) : (
            <>
              <S.CloseButton onClick={closingModal}>
                <img src={cancelIcon} alt='취소이미지' />
              </S.CloseButton>
              <h4>{title}</h4>
              {variant === 'deleteFolder' || variant === 'deleteLink' ? (
                <S.CurrentFolder>
                  {currentFolder || currentCard}
                </S.CurrentFolder>
              ) : (
                <Input placeholder={placeholder} />
              )}
            </>
          )}
          <Button variant={variant} text={text} type={'button'} />
        </S.ModalContainer>
      )}
    </S.ModalLayout>
  );
};

export default Modal;
