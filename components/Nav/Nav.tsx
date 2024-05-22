import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "./Nav.styled";
import logo from "@/assets/icons/logo.svg";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { DropDown, Button } from "@/components";
import { openDropDown } from "@/redux/reducers/dropDown";

const Nav = () => {
  const [isShadow, setShadow] = useState(false);
  const { isLoggedIn, userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { pathname } = useRouter();

  const handleNavigation = () => {
    setShadow(window.scrollY > 30);
  };

  const handleAccountInfo = () => {
    dispatch(openDropDown("accountInfo"));
  };

  useEffect(() => {
    if (pathname.includes("folder")) return;

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
            <p>{userInfo?.email}</p>
            <S.ImageBox onClick={handleAccountInfo}>
              <Image fill src={userInfo?.imageSource} alt='프로필 이미지' />
            </S.ImageBox>
          </>
        ) : (
          <Link href='/signin'>
            <Button variant='default' text='로그인' width='88px' />
          </Link>
        )}
      </S.LoginLayout>
      <DropDown />
    </S.HeaderLayout>
  );
};

export default Nav;
