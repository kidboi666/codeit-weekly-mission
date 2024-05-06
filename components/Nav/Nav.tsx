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
    setTimeout(() => {
      if (window.scrollY > 30) {
        setShadow(true);
        return;
      }

      setShadow(false);
    }, 100);
  };

  useEffect(() => {
    if (pathname === "/folder") return;
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [pathname]);

  return (
    <S.HeaderLayout $isShadow={isShadow}>
      <S.LogoBox>
        <Link href='/'>
          <Image src={logo} alt='Linkbrary' />
        </Link>
      </S.LogoBox>
      <UserLoggedIn />
    </S.HeaderLayout>
  );
};

export default Nav;
