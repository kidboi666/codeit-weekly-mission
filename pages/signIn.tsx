import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import googleIcon from "@/assets/icons/google_icon.svg";
import facebookIcon from "@/assets/icons/facebook_icon.svg";
import * as S from "@/styles/signIn.styled";
import Link from "next/link";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Eye from "@/components/Eye/Eye";
import { useState } from "react";
import { useAppDispatch } from "@/hooks/useApp";
import { loginAccess } from "@/redux/actions/auth";

const SignIn = () => {
  const [signBody, setSignBody] = useState({
    email: "",
    pw: "",
  });
  const dispatch = useAppDispatch();

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignBody({
      ...signBody,
      [e.target["name"]]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signBody.email && signBody.pw) {
      dispatch(loginAccess(signBody));
    }
  };

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
            <Link href='./signup.html'>
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
              <div id='wrong_email_message'></div>
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
              <Eye />
              <div id='wrong_password_message'></div>
            </S.PasswordContainer>
            <Button variant={"default"} type='submit' text={"로그인"} />
          </form>
        </S.SignContainer>
        <S.SocialContainer>
          <div className='footer_wrap'>
            <p>소셜 로그인</p>
            <div className='sns_wrap'>
              <a href='https://www.google.com/'>
                <Image src={googleIcon} alt='google' />
              </a>
              <a href='https://www.kakaocorp.com/page/'>
                <Image src={facebookIcon} alt='kakao' />
              </a>
            </div>
          </div>
        </S.SocialContainer>
      </S.SignInContainer>
    </S.SignInLayout>
  );
};

export default SignIn;
