import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import googleIcon from "@/assets/icons/google_icon.svg";
import facebookIcon from "@/assets/icons/facebook_icon.svg";
import * as S from "@/styles/signUp.styled";
import Link from "next/link";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { checkEmailAccess, signUpAccess, userInfoAccess } from "@/redux/actions/auth";
import { useRouter } from "next/router";
import { API_MSG } from "@/constants/strings";

const SignUp = () => {
  const [signBody, setSignBody] = useState({
    email: "",
    pw: "",
  });
  const [passwordCheck, setPasswordCheck] = useState("");
  const { isLoggedIn, userInfo, accessToken, status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignBody({
      ...signBody,
      [e.target["name"]]: e.target.value,
    });
  };

  const onChangePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signBody.pw !== passwordCheck) return;
    if (signBody.email && signBody.pw) {
      dispatch(checkEmailAccess(signBody.email));
      if (status === API_MSG.FUL) {
        dispatch(signUpAccess(signBody));
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) dispatch(userInfoAccess(accessToken));
  }, [isLoggedIn]);

  useEffect(() => {
    if (userInfo.id) router.push("/folderPage");
  }, [userInfo]);

  return (
    <S.SignUpLayout>
      <S.SignUpContainer>
        <S.HeaderContainer>
          <Link href='/'>
            <S.ImgBox>
              <Image fill src={logo} alt='Linkbrary' />
            </S.ImgBox>
          </Link>
          <p>
            이미 회원이신가요?
            <Link href='./signIn'>
              <Button variant={"underBar"} text={"로그인 하기"} />
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
            <S.PasswordRepeatContainer>
              <label htmlFor='password'>비밀번호 확인</label>
              <Input
                variant={"sign"}
                value={passwordCheck}
                name='pwRepeat'
                type='password'
                placeholder='******'
                onChange={onChangePasswordCheck}
              />
            </S.PasswordRepeatContainer>
            <Button variant={"default"} type='submit' text={"회원가입"} />
          </form>
        </S.SignContainer>
        <S.SocialContainer>
          <div>
            <p>다른 방식으로 가입하기</p>
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
      </S.SignUpContainer>
    </S.SignUpLayout>
  );
};

export default SignUp;
