import starTrue from '../../assets/icons/star_true.svg';
import starFalse from '../../assets/icons/star_false.svg';
import * as S from './Star.styled';
import useToggle from '../../hooks/useToggle';
import { useLocation } from 'react-router-dom';

const Star = () => {
  const [value, toggle] = useToggle();
  const currentLocation = useLocation();

  if (currentLocation.pathname !== '/folder') {
    return null;
  }

  const onClickStarButton = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    toggle();
  };

  return (
    <S.StarBox onClick={onClickStarButton}>
      <img src={value ? starTrue : starFalse} alt='즐겨찾기 아이콘' />
    </S.StarBox>
  );
};

export default Star;
