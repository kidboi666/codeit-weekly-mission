import * as S from "./Card.styled";
import blankLogo from "@/assets/icons/blank_logo.svg";
import calculateTime from "@/utils/calculateTime";
import formatDate from "@/utils/formatDate";
import { Star, Kebab } from "@/components";
import { Link } from "@/services/types";
import Image from "next/image";
import useToggle from "@/hooks/useToggle";

interface CardProps {
  link: Link;
  currentFolder?: string;
  setCurrentFolder?: React.Dispatch<React.SetStateAction<string>>;
  currentFolderId?: number;
  setCurrentFolderId?: React.Dispatch<React.SetStateAction<number>>;
}

const Card = ({ link, currentFolder, setCurrentFolder, currentFolderId, setCurrentFolderId }: CardProps) => {
  const [showKebabMenu, toggle] = useToggle();
  const timeDelta = formatDate(link.createdAt);
  const createdDate = calculateTime(link.createdAt);

  const handleMouseLeave = () => {
    if (showKebabMenu) return toggle();
  };

  return (
    <S.CardLayout onMouseLeave={handleMouseLeave}>
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
            currentFolderId={currentFolderId}
            setCurrentFolderId={setCurrentFolderId}
            showKebabMenu={showKebabMenu}
            toggle={toggle}
          />
          <S.CreatedDate>{createdDate}</S.CreatedDate>
          <S.Title>{link.title}</S.Title>
          <S.TimeStamp>{timeDelta}</S.TimeStamp>
        </S.CardDescriptionContainer>
      </S.CardLinkContainer>
    </S.CardLayout>
  );
};

export default Card;
