import './Search.css';
import searchIcon from '../assets/icons/search.svg';

function Search() {
  return (
    <div className="helper">
      <div className="form_wrap">
        <form className="form">
          <button className="icon_btn">
            <img src={searchIcon} alt="검색 돋보기 아이콘" />
          </button>
          <input id="search" placeholder="링크를 검색해 보세요." />
        </form>
      </div>
    </div>
  );
}

export default Search;
