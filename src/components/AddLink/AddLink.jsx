import * as S from './AddLink.style';
import LinkIcon from '../../assets/icons/link.svg';

const AddLink = () => {
  return (
    <S.AddLinkLayout>
      <S.FormContainer>
        <S.FormBox>
          <S.IconImg src={LinkIcon} alt="" />
          <S.StyledInput placeholder="링크를 추가해 보세요" />
          <S.StyledButton>추가하기</S.StyledButton>
        </S.FormBox>
      </S.FormContainer>
    </S.AddLinkLayout>
  );
};

export default AddLink;
