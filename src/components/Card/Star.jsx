import starTrue from '../../assets/icons/star_true.svg';
import starFalse from '../../assets/icons/star_false.svg';
import * as S from './Star.style';
import useToggle from '../../hooks/useToggle';

const Star = () => {
  const [value, toggle] = useToggle();

  const onClickStarButton = (e) => {
    e.preventDefault();
    toggle();
  };

  return (
    <S.StarBox onClick={onClickStarButton}>
      <img src={value ? starTrue : starFalse} alt="즐겨찾기 아이콘" />
    </S.StarBox>
  );
};

export default Star;
