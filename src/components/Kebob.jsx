import kebobIcon from '../assets/icons/kebab.svg';
import useToggle from '../hooks/useToggle';
import './Kebob.css';

function KebobModal() {
  return (
    <div className="kebob_modal">
      <button type="button" className="kebob_delete">
        삭제하기
      </button>
      <button type="button" className="kebob_add-folder">
        폴더에 추가
      </button>
    </div>
  );
}

function Kebob() {
  const [value, toggle] = useToggle();

  const onClickKebobButton = (e) => {
    e.preventDefault();
    toggle();
  };

  return (
    <div className="kebob" onClick={onClickKebobButton}>
      <img src={kebobIcon} className="kebob_icon" alt="케밥 버튼 아이콘" />
      {value ? <KebobModal /> : null}
    </div>
  );
}

export default Kebob;
