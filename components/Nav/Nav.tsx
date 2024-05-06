import { useEffect, useState } from "react";
import Link from "next/link";
import * as S from "./Nav.styled";
import UserLoggedIn from "./UserLoggedIn";
import logo from "@/assets/icons/logo.svg";
import { useRouter } from "next/router";
import Image from "next/image";

const Nav: React.FC = () => {
  const [isShadow, setShadow] = useState(false);
  const { pathname } = useRouter();

  const handleNavigation = () => {
    setShadow(window.scrollY > 30);
  };

  useEffect(() => {
    if (pathname === "/folderPage") return;

    const scrollEvent = setInterval(() => {
      window.addEventListener("scroll", handleNavigation);
    }, 100);

    return () => {
      clearInterval(scrollEvent);
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [pathname]);

  return (
    <S.HeaderLayout $isShadow={isShadow}>
      <S.LogoBox>
        <Link href='/'>
          <Image src={logo} alt='Linkbrary' style={{ width: "100%" }} />
        </Link>
      </S.LogoBox>
      <UserLoggedIn />
    </S.HeaderLayout>
  );
};

export default Nav;
