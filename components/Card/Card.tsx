import * as S from "./Card.styled";
import blankLogo from "@/assets/icons/blank_logo.svg";
import calculateTime from "@/utils/calculateTime";
import formatDate from "@/utils/formatDate";
import Star from "./Star";
import Kebab from "./Kebab";
import { useState } from "react";
import { Link } from "@/services/types";
import Image from "next/image";

interface Props {
  link: Link | string;
}

const Card: React.FC<Props> = ({ link }) => {
  if (typeof link === "string") {
    return <p>{link}</p>;
  }
  const timeDelta = formatDate(link.createdAt);
  const createdDate = calculateTime(link.createdAt);

  return (
    <S.CardLayout>
      <S.CardLinkContainer href={link.url} target='_blank' rel='noreferrer'>
        <S.CardImgContainer>
          <Star />
          {link.imageSource ? (
            <S.CardImg src={link.imageSource} alt={link.title} />
          ) : (
            <S.BlankImgBox>
              <Image src={blankLogo} alt={link.title} style={{ width: "100%" }} />
            </S.BlankImgBox>
          )}
        </S.CardImgContainer>
        <S.CardDescriptionContainer>
          <Kebab />
          <S.CreatedDate>{createdDate}</S.CreatedDate>
          <S.Title>{link.title}</S.Title>
          <S.TimeStamp>{timeDelta}</S.TimeStamp>
        </S.CardDescriptionContainer>
      </S.CardLinkContainer>
    </S.CardLayout>
  );
};

export default Card;
