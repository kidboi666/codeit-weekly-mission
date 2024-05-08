import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "./Nav.styled";
import logo from "@/assets/icons/logo.svg";
import { useAppSelector } from "@/hooks/useApp";

const Nav: React.FC = () => {
  const [isShadow, setShadow] = useState(false);
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const userInfo = useAppSelector((state) => state.user.userInfo);
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
      <S.LoginLayout>
        {isLoggedIn ? (
          <>
            <Image src={userInfo.imageSource} alt='프로필 이미지' />
            <div>{userInfo.email}</div>
          </>
        ) : (
          <Link href='/signIn'>
            <S.LoginButton variant='default' text='로그인' />
          </Link>
        )}
      </S.LoginLayout>
    </S.HeaderLayout>
  );
};

export default Nav;
