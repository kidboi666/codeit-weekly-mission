import starTrue from '../assets/icons/star_true.svg';
import starFalse from '../assets/icons/star_false.svg';
import './Star.css';
import useToggle from '../hooks/useToggle';

function Star() {
  const [value, toggle] = useToggle();

  const onClickStarButton = (e) => {
    e.preventDefault();
    toggle();
  };

  return (
    <div className="star_wrap" onClick={onClickStarButton}>
      <img src={value ? starTrue : starFalse} className="star_icon" alt="즐겨찾기 아이콘" />
    </div>
  );
}

export default Star;
