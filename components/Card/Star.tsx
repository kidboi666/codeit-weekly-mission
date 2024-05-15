import starTrue from "../../assets/icons/star_true.svg";
import starFalse from "../../assets/icons/star_false.svg";
import * as S from "./Star.styled";
import useToggle from "../../hooks/useToggle";
import { useRouter } from "next/router";
import Image from "next/image";
import { Link } from "@/services/types";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { putFavoriteLink } from "@/redux/actions/link";

interface StarProps {
  link: Link;
}

const Star: React.FC<StarProps> = ({ link }) => {
  const [value, toggle] = useToggle();
  const dispatch = useAppDispatch();
  const currentLocation = useRouter();

  if (currentLocation.pathname !== "/folderPage") {
    return null;
  }

  const onClickStarButton = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const localToken = localStorage.getItem("accessToken");
    if (localToken) {
      dispatch(putFavoriteLink({ linkId: link.id, accessToken: localToken }));
      toggle();
    }
  };

  return (
    <S.StarBox onClick={onClickStarButton}>
      <Image src={value ? starTrue : starFalse} alt='즐겨찾기 아이콘' />
    </S.StarBox>
  );
};

export default Star;
