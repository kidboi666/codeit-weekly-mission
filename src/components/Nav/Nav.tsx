import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "./Nav.styled";
import logo from "@/public/icons/logo.svg";
import { useAppSelector } from "@/src/hooks/useApp";
import { DropDown, Button } from "@/src/components";

const Nav = () => {
  const [isShadow, setShadow] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const { isLoggedIn, userInfo } = useAppSelector((state) => state.auth);
  const { pathname } = useRouter();

  const handleNavigation = () => {
    setShadow(window.scrollY > 30);
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
    <>
      <S.HeaderLayout $isShadow={isShadow} onMouseLeave={() => setOpen(false)}>
        <S.LogoBox>
          <Link href='/'>
            <Image src={logo} alt='Linkbrary' style={{ width: "100%" }} />
          </Link>
        </S.LogoBox>
        <S.LoginLayout>
          {isLoggedIn ? (
            <>
              <p>{userInfo?.email}</p>
              <S.ImageBox onClick={() => setOpen((prev) => !prev)}>
                <Image fill src={userInfo?.imageSource} alt='프로필 이미지' />
              </S.ImageBox>
            </>
          ) : (
            <Link href='/signin'>
              <Button variant='default' text='로그인' width='88px' />
            </Link>
          )}
          <DropDown variant='accountInfo' setOpen={setOpen} isOpen={isOpen} />
        </S.LoginLayout>
      </S.HeaderLayout>
    </>
  );
};

export default Nav;
