import { Fragment, useState } from 'react';
import './Main.css';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function calTimeDiff(value) {
  let currentTime = new Date() / (1000 * 60 * 60 * 24);
  let dateTime = new Date(value) / (1000 * 60 * 60 * 24);
  let diffTime = currentTime - dateTime;
  if (diffTime >= 365) {
    return `${Math.floor(diffTime / 365)} years ago`;
  } else if (diffTime > 31) {
    return `${Math.floor(diffTime / 30)} months ago`;
  } else if (diffTime > 1) {
    return `${Math.floor(diffTime)} days ago`;
  } else if (Math.floor(diffTime) === 1) {
    return `${Math.floor(diffTime)} day ago`;
  }
}

function SearchForm() {
  return (
    <div className="search_wrap">
      <form className="search_form">
        <input className="search_input" placeholder="링크를 검색해 보세요."></input>
      </form>
    </div>
  );
}

function FolderListItem({ initialValue, preview }) {
  const [item, setItem] = useState(initialValue);
  return (
    <a className="folder_link" href={item.url} target="_blank" rel="noreferrer">
      <div className="folder_img_wrap">
        <img src={preview} alt={item.title} className="folder_img" />
      </div>
      <div className="description_wrap">
        <p className="folder_title">{calTimeDiff(item.createdAt)}</p>
        <p className="folder_description">{item.description}</p>
        <p className="folder_date">{formatDate(item.createdAt)}</p>
      </div>
    </a>
  );
}

function Main({ folder }) {
  return (
    <main className="main_wrap">
      <SearchForm />
      <ul className="folder">
        {folder.map((item) => {
          const { id, createdAt, url, title, description, imageSource } = item;
          const initialValue = { createdAt, url, title, description, imageSource };
          return (
            <li key={item.id} className="folder_card">
              <FolderListItem initialValue={initialValue} preview={imageSource} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
