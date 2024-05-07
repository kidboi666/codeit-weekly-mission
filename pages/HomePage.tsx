import Link from "next/link";
import * as S from "../styles/homePage.styled";

const Homepage = () => {
  return (
    <S.HomepageLayout>
      <Link href='/folderPage'>
        <S.StyledButton variant={"default"} text={"folder page"} />
      </Link>
      <Link href='/sharedPage'>
        <S.StyledButton variant={"default"} text={"shared page"} />
      </Link>
    </S.HomepageLayout>
  );
};

export default Homepage;
