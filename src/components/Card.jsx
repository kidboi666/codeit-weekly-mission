import { useState } from 'react';
import { calculatorTime, formatDate } from '../utils/CalculatorTime';
import blankLogo from '../assets/icons/blank_logo.svg';
import Star from './Star';
import './Card.css';

function Card({ initialValue, preview }) {
  const [item, setItem] = useState(initialValue);
  const timeDelta = formatDate(item.createdAt);
  const createdDate = calculatorTime(item.createdAt);

  return (
    <li className="card_wrap">
      <Star />
      <a className="card" href={item.url} target="_blank" rel="noreferrer">
        <div className="card_img_wrap">
          {preview ? (
            <img src={preview} alt={item.title} />
          ) : (
            <div className="blank_img_wrap">
              <img src={blankLogo} alt={item.title} className="none_img" />
            </div>
          )}
        </div>
        <div className="card_description_wrap">
          <p className="card_title">{createdDate}</p>
          <p className="card_description">{item.description}</p>
          <p className="card_date">{timeDelta}</p>
        </div>
      </a>
    </li>
  );
}

export default Card;
