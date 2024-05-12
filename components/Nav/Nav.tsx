import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "./Nav.styled";
import logo from "@/assets/icons/logo.svg";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import Button from "../Button/Button";
import { logout } from "@/redux/reducers/auth";
import { userInfoAccess } from "@/redux/actions/auth";
import DropDown from "../DropDown/DropDown";

const Nav: React.FC = () => {
  const [isShadow, setShadow] = useState(false);
  const [isAccoutInfo, setAccoutInfo] = useState(false);
  const { isLoggedIn, userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { pathname } = useRouter();

  const handleNavigation = () => {
    setShadow(window.scrollY > 30);
  };

  const handleAccountInfo = () => {
    setAccoutInfo((prev) => !prev);
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
    const accessToken = localStorage?.getItem("accessToken");
    if (accessToken) {
      dispatch(userInfoAccess(accessToken));
    }
  }, []);

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
            <img src={userInfo?.imageSource} alt='프로필 이미지' onClick={handleAccountInfo} />
            {isAccoutInfo && <DropDown />}
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
