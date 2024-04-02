import * as S from './AddLink.style';
import LinkIcon from '../assets/icons/link.svg';

const AddLink = () => {
  return (
    <S.Div>
      <S.Form>
        <S.Icon src={LinkIcon} alt="" />
        <S.StyledInput placeholder="링크를 추가해 보세요" />
        <S.StyledButton>추가하기</S.StyledButton>
      </S.Form>
    </S.Div>
  );
};

export default AddLink;
