import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "./Nav.styled";
import logo from "@/assets/icons/logo.svg";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import Button from "../Button/Button";
import { userInfoAccess } from "@/redux/actions/auth";

const Nav: React.FC = () => {
  const [isShadow, setShadow] = useState(false);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const token = useAppSelector((state) => state.auth.accessToken);
  const userInfo = useAppSelector((state) => state.auth.userInfo);
  const dispatch = useAppDispatch();
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

  useEffect(() => {
    dispatch(userInfoAccess(token));
  }, [isLoggedIn]);

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
            <S.ImgBox>
              <Image fill src={userInfo?.imageSource} alt='프로필 이미지' />
            </S.ImgBox>
            <div>{userInfo?.email}</div>
          </>
        ) : (
          <Link href='/signIn'>
            <Button variant={"default"} text={"로그인"} width={"88px"} />
          </Link>
        )}
      </S.LoginLayout>
    </S.HeaderLayout>
  );
};

export default Nav;
