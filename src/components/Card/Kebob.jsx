import { useLocation } from 'react-router-dom';
import kebobIcon from '../../assets/icons/kebab.svg';
import useToggle from '../../hooks/useToggle';
import * as S from './Kebob.style';

const KebobModal = () => {
  return (
    <S.ModalLayout>
      <button type="button">삭제하기</button>
      <button type="button">폴더에 추가</button>
    </S.ModalLayout>
  );
};

const Kebob = () => {
  const [value, toggle] = useToggle();
  const currentLocation = useLocation();

  if (currentLocation.pathname !== '/folder') {
    return;
  }

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
};

export default Kebob;
