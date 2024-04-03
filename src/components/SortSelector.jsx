import SortingButton from './SortingButton';
import * as S from './SortSelector.style';

const SortSelector = () => {
  return (
    <S.Wrap>
      <S.SortDiv>
        <SortingButton>전체</SortingButton>
        <SortingButton>⭐️ 즐겨찾기</SortingButton>
        <SortingButton>코딩 팁</SortingButton>
        <SortingButton>채용 사이트</SortingButton>
        <SortingButton>유용한 글</SortingButton>
        <SortingButton>나만의 장소</SortingButton>
      </S.SortDiv>
      <div>
        <S.AddButton>폴더 추가 +</S.AddButton>
      </div>
    </S.Wrap>
  );
};

export default SortSelector;
