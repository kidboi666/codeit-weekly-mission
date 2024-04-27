import shareIcon from '../../assets/icons/share.svg';
import penIcon from '../../assets/icons/pen.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import * as S from './FolderOptionButton.styled';
import { useCallback, useState } from 'react';
import Modal from '../Modal/Modal';

const FolderOptionButton = ({ folderTitle }) => {
  const [isShareModal, setShareModal] = useState(false);
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [isChangeNameModal, setChangeNameModal] = useState(false);

  const onModal = useCallback((setter) => {
    return setter((prev) => !prev);
  }, []);

  return (
    <S.FolderOptionButtonLayout>
      <S.SelectedFolder>{folderTitle}</S.SelectedFolder>
      {folderTitle !== '전체' ? (
        <S.OptionContainer>
          <S.OptionBox onClick={() => onModal(setShareModal)}>
            <S.OptionIcon src={shareIcon} />
            공유
          </S.OptionBox>
          <S.OptionBox onClick={() => onModal(setChangeNameModal)}>
            <S.OptionIcon src={penIcon} />
            이름 변경
          </S.OptionBox>
          <S.OptionBox onClick={() => onModal(setDeleteModal)}>
            <S.OptionIcon src={deleteIcon} />
            삭제
          </S.OptionBox>
        </S.OptionContainer>
      ) : null}
      {isShareModal && (
        <Modal
          variant={'shareFolder'}
          closeModal={setShareModal}
          currentFolder={folderTitle}
        />
      )}
      {isDeleteModal && (
        <Modal variant={'deleteFolder'} closeModal={setDeleteModal} />
      )}
      {isChangeNameModal && (
        <Modal variant={'changeName'} closeModal={setChangeNameModal} />
      )}
    </S.FolderOptionButtonLayout>
  );
};

export default FolderOptionButton;
