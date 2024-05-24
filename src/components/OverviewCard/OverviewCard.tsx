import Image, { StaticImageData } from "next/image";
import * as S from "./OverviewCard.styled";

interface OverviewCardProps {
  span: string;
  p: string;
  imgSrc: StaticImageData;
  firstH1?: string;
  lastH1?: string;
  gradient: string;
}

const OverviewCard = ({
  span,
  p,
  imgSrc,
  firstH1,
  lastH1,
  gradient,
}: OverviewCardProps) => {
  const classNames = `text_gradient ${gradient}_gradient`;

  return (
    <S.CardContainer>
      <S.InnerBox>
        <h1>
          {firstH1 || ""}
          <span className={classNames}>{` ${span}`}</span>
          {lastH1 || ""}
        </h1>
        <p>{p}</p>
        <div>
          <Image src={imgSrc} alt='' />
        </div>
      </S.InnerBox>
    </S.CardContainer>
  );
};

export default OverviewCard;
