import * as S from './Card.style';
import blankLogo from '../assets/icons/blank_logo.svg';
import { calculatorTime, formatDate } from '../utils/CalculatorTime';
import Star from './Star';
import Kebob from './Kebob';

function Card({ link, preview }) {
  const timeDelta = formatDate(link.createdAt);
  const createdDate = calculatorTime(link.createdAt);

  return (
    <S.Li>
      <S.CardLink href={link.url} target="_blank" rel="noreferrer">
        <S.CardImgBox>
          <Star />
          {preview ? (
            <S.CardImg src={preview} alt={link.title} />
          ) : (
            <S.BlankImgHelper>
              <S.CardImg src={blankLogo} alt={link.title} />
            </S.BlankImgHelper>
          )}
        </S.CardImgBox>
        <S.CardDescription>
          <Kebob />
          <S.CreatedDate>{createdDate}</S.CreatedDate>
          <S.Title>{link.title}</S.Title>
          <S.TimeStamp>{timeDelta}</S.TimeStamp>
        </S.CardDescription>
      </S.CardLink>
    </S.Li>
  );
}

export default Card;
