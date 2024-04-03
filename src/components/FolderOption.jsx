import shareIcon from '../assets/icons/share.svg';
import penIcon from '../assets/icons/pen.svg';
import deleteIcon from '../assets/icons/delete.svg';
import * as S from './FolderOption.style';

const FolderOption = ({ folderTitle }) => {
  return (
    <S.Wrap>
      <S.OptionTitle>{folderTitle}</S.OptionTitle>
      {folderTitle === '전체' ? null : (
        <S.OptionWrap>
          <S.Div>
            <S.OptionIcon src={shareIcon} />
            공유
          </S.Div>
          <S.Div>
            <S.OptionIcon src={penIcon} />
            이름 변경
          </S.Div>
          <S.Div>
            <S.OptionIcon src={deleteIcon} />
            삭제
          </S.Div>
        </S.OptionWrap>
      )}
    </S.Wrap>
  );
};

export default FolderOption;
