import shareIcon from '../../assets/icons/share.svg';
import penIcon from '../../assets/icons/pen.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import * as S from './FolderOptionButton.style';

const FolderOptionButton = ({ folderTitle }) => {
  return (
    <S.FolderOptionButtonLayout>
      <S.SelectedFolder>{folderTitle}</S.SelectedFolder>
      {folderTitle === '전체' ? null : (
        <S.OptionContainer>
          <S.OptionBox>
            <S.OptionIcon src={shareIcon} />
            공유
          </S.OptionBox>
          <S.OptionBox>
            <S.OptionIcon src={penIcon} />
            이름 변경
          </S.OptionBox>
          <S.OptionBox>
            <S.OptionIcon src={deleteIcon} />
            삭제
          </S.OptionBox>
        </S.OptionContainer>
      )}
    </S.FolderOptionButtonLayout>
  );
};

export default FolderOptionButton;
