import Link from "next/link";
import * as S from "../styles/homePage.styled";
import LandingPage from "./landingPage";

const Homepage = () => {
  return (
    <S.HomepageLayout>
      <LandingPage />
    </S.HomepageLayout>
  );
};

export default Homepage;
