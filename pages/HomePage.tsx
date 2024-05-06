import Link from "next/link";
import * as S from "./homePage.styled";
import AppLayout from "@/components/App/AppLayout";

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