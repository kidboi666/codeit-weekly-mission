import shareIcon from '../assets/icons/share.svg';
import penIcon from '../assets/icons/pen.svg';
import deleteIcon from '../assets/icons/delete.svg';
import * as S from './FolderOption.style';

const FolderOption = () => {
  return (
    <S.Wrap>
      <S.OptionTitle>유용한 글</S.OptionTitle>
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
    </S.Wrap>
  );
};

export default FolderOption;
