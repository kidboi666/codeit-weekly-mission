import * as S from "@/styles/folderCard.styled";
import blankLogo from "@/assets/icons/blank_logo.svg";
import calculateTime from "@/utils/calculateTime";
import formatDate from "@/utils/formatDate";
import Star from "@/components/Star/Star";
import Kebab from "@/components/Kebab/Kebab";
import { Link } from "@/services/types";
import Image from "next/image";
import useToggle from "@/hooks/useToggle";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { getLinkList } from "@/redux/actions/link";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import { useEffect, useState } from "react";

interface CardProps {
  currentFolder?: string;
  setCurrentFolder?: React.Dispatch<React.SetStateAction<string>>;
  currentFolderId?: number;
  setCurrentFolderId?: React.Dispatch<React.SetStateAction<number>>;
}

const FolderLinkList = ({ currentFolder, setCurrentFolder, currentFolderId, setCurrentFolderId }: CardProps) => {
  const [showKebabMenu, toggle] = useToggle();
  const router = useRouter();
  const { id } = router.query;
  const userId = useAppSelector((state) => state.auth.userInfo.id);
  const { data } = useAppSelector((state) => state.link);
  const dispatch = useAppDispatch();

  const handleFetchLinkList = async () => {
    await dispatch(getLinkList({ userId: userId, folderId: Number(id) }));
  };

  const handleMouseLeave = () => {
    if (showKebabMenu) return toggle();
  };

  useEffect(() => {
    handleFetchLinkList();
  }, []);

  return (
    <>
      {data?.map((link) => (
        <S.CardLayout key={link.id} onMouseLeave={handleMouseLeave}>
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

export default FolderLinkList;
