import './Card.css';
import blankLogo from '../assets/icons/blank_logo.svg';
import { calculatorTime, formatDate } from '../utils/CalculatorTime';
import Star from './Star';
import Kebob from './Kebob';

function Card({ link, preview }) {
  const timeDelta = formatDate(link.createdAt);
  const createdDate = calculatorTime(link.createdAt);

  return (
    <li className="card_wrap">
      <a className="card" href={link.url} target="_blank" rel="noreferrer">
        <div className="card_img_wrap">
          <Star />
          {preview ? (
            <img src={preview} className="card_img" alt={link.title} />
          ) : (
            <div className="blank_img_wrap">
              <img src={blankLogo} className="none_img" alt={link.title} />
            </div>
          )}
        </div>
        <div className="card_description_wrap">
          <Kebob />
          <p className="card_title">{createdDate}</p>
          <p className="card_description">{link.description}</p>
          <p className="card_date">{timeDelta}</p>
        </div>
      </a>
    </li>
  );
}

export default Card;
