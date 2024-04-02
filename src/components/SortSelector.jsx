import SortingButton from './SortingButton';
import styled from 'styled-components';

const WrapDiv = styled.div`
  margin-top: 40px;
  width: 1060px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SortDiv = styled.div`
  display: flex;
  gap: 8px;
`;

const AddButton = styled.button`
  color: var(--primary-color);
  border: none;
  background-color: var(--white-color);
`;

const SortSelector = () => {
  return (
    <WrapDiv>
      <SortDiv>
        <SortingButton>전체</SortingButton>
        <SortingButton>⭐️ 즐겨찾기</SortingButton>
        <SortingButton>코딩 팁</SortingButton>
        <SortingButton>채용 사이트</SortingButton>
        <SortingButton>유용한 글</SortingButton>
        <SortingButton>나만의 장소</SortingButton>
      </SortDiv>
      <div>
        <AddButton>폴더 추가 +</AddButton>
      </div>
    </WrapDiv>
  );
};

export default SortSelector;
