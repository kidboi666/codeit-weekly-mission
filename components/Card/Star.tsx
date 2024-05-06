import starTrue from "../../assets/icons/star_true.svg";
import starFalse from "../../assets/icons/star_false.svg";
import * as S from "./Star.styled";
import useToggle from "../../hooks/useToggle";
import { useRouter } from "next/router";
import Image from "next/image";

const Star: React.FC = () => {
  const [value, toggle] = useToggle();
  const currentLocation = useRouter();

  if (currentLocation.pathname !== "/folderPage") {
    return null;
  }

  const onClickStarButton = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    toggle();
  };

  return (
    <S.StarBox onClick={onClickStarButton}>
      <Image src={value ? starTrue : starFalse} alt='즐겨찾기 아이콘' />
    </S.StarBox>
  );
};

export default Star;
