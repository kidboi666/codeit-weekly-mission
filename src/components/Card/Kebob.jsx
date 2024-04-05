import kebobIcon from '../../assets/icons/kebab.svg';
import useToggle from '../../hooks/useToggle';
import * as S from './Kebob.style';

function KebobModal() {
  return (
    <S.ModalLayout>
      <button type="button">삭제하기</button>
      <button type="button">폴더에 추가</button>
    </S.ModalLayout>
  );
}

function Kebob() {
  const [value, toggle] = useToggle();

  const onClickKebobButton = (e) => {
    e.preventDefault();
    toggle();
  };

  return (
    <S.KebobLayout onClick={onClickKebobButton}>
      <img src={kebobIcon} alt="케밥 버튼 아이콘" />
      {value ? <KebobModal /> : null}
    </S.KebobLayout>
  );
}

export default Kebob;
