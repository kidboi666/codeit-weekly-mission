import SortingButton from './SortingButton';
import * as S from './SortSelector.style';

const Item = ({ data }) => {
  return <SortingButton>{data.name}</SortingButton>;
};

const Folder = ({ folder }) => {
  return (
    <S.Wrap>
      <S.SortDiv>
        {folder.map((item) => (
          <Item key={item.id} data={item} />
        ))}
      </S.SortDiv>
      <div>
        <S.AddButton>폴더 추가 +</S.AddButton>
      </div>
    </S.Wrap>
  );
};

export default Folder;
