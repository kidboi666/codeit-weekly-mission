import * as S from "./Card.styled";
import blankLogo from "@/assets/icons/blank_logo.svg";
import calculateTime from "@/utils/calculateTime";
import formatDate from "@/utils/formatDate";
import { Star, Kebab, DropDown } from "@/components";
import { Link } from "@/services/types";
import Image from "next/image";
import { CurrentFolderType } from "@/pages/folder/[[...folderId]]";
import { useState } from "react";

interface CardProps {
  linkList: Link[] | string;
  currentFolder?: CurrentFolderType;
  setCurrentFolder?: React.Dispatch<React.SetStateAction<CurrentFolderType>>;
}

const Card = ({ linkList, currentFolder, setCurrentFolder }: CardProps) => {
  if (typeof linkList === "string") {
    return <div>{linkList}</div>;
  } else if (linkList.length === 0) {
    return <div>해당되는 링크가 없습니다.</div>;
  }

  return (
    <>
      {linkList?.map((link) => (
        <S.CardLayout key={link.id}>
          <S.CardLinkContainer href={link.url} target='_blank' rel='noreferrer'>
            <S.CardImgContainer>
              <Star link={link} />
              {link.imageSource ? (
                <S.CardImg src={link.imageSource} alt={link.title} />
              ) : (
                <S.BlankImgBox>
                  <Image src={blankLogo} alt={link.title} style={{ width: "100%" }} />
                </S.BlankImgBox>
              )}
            </S.CardImgContainer>
            <S.CardDescriptionContainer>
              <Kebab
                linkId={link.id}
                linkTitle={link.title}
                linkUrl={link.url}
                currentFolder={currentFolder}
                setCurrentFolder={setCurrentFolder}
              />
              <S.CreatedDate>{calculateTime(link.createdAt)}</S.CreatedDate>
              <S.Title>{link.title}</S.Title>
              <S.TimeStamp>{formatDate(link.createdAt)}</S.TimeStamp>
            </S.CardDescriptionContainer>
          </S.CardLinkContainer>
        </S.CardLayout>
      ))}
    </>
  );
};

export default Card;
