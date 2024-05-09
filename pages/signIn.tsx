import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import googleIcon from "@/assets/icons/google_icon.svg";
import facebookIcon from "@/assets/icons/facebook_icon.svg";
import * as S from "@/styles/signIn.styled";
import Link from "next/link";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { loginAccess, userInfoAccess } from "@/redux/actions/auth";
import { useRouter } from "next/router";

const SignIn = () => {
  const [signBody, setSignBody] = useState({
    email: "",
    pw: "",
  });
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignBody({
      ...signBody,
      [e.target["name"]]: e.target.value,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signBody.email && signBody.pw) {
      dispatch(loginAccess(signBody));
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/folderPage");
    }
  }, [isLoggedIn]);

  return (
    <S.SignInLayout>
      <S.SignInContainer>
        <S.HeaderContainer>
          <Link href='/'>
            <S.ImgBox>
              <Image fill src={logo} alt='Linkbrary' />
            </S.ImgBox>
          </Link>
          <p>
            회원이 아니신가요?
            <Link href='/signUp'>
              <Button variant={"underBar"} text={"회원 가입하기"} />
            </Link>
          </p>
        </S.HeaderContainer>
        <S.SignContainer>
          <form onSubmit={onSubmit}>
            <S.EmailContainer>
              <label htmlFor='email'>이메일</label>
              <Input
                variant={"sign"}
                value={signBody.email}
                name='email'
                type='email'
                placeholder='codeit@codeit.kr'
                onChange={onChangeInputValue}
              />
            </S.EmailContainer>
            <S.PasswordContainer>
              <label htmlFor='password'>비밀번호</label>
              <Input
                variant={"sign"}
                value={signBody.pw}
                name='pw'
                type='password'
                placeholder='******'
                onChange={onChangeInputValue}
              />
            </S.PasswordContainer>
            <Button variant={"default"} type='submit' text={"로그인"} />
          </form>
        </S.SignContainer>
        <S.SocialContainer>
          <div>
            <p>소셜 로그인</p>
            <div>
              <Link href='https://www.google.com/'>
                <Image src={googleIcon} alt='google' />
              </Link>
              <Link href='https://www.kakaocorp.com/page/'>
                <Image src={facebookIcon} alt='kakao' />
              </Link>
            </div>
          </div>
        </S.SocialContainer>
      </S.SignInContainer>
    </S.SignInLayout>
  );
};

export default SignIn;
