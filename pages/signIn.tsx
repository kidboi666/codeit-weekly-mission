import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import eyeOff from "@/assets/icons/eye-off.svg";
import googleIcon from "@/assets/icons/google_icon.svg";
import facebookIcon from "@/assets/icons/facebook_icon.svg";
import * as S from "@/styles/signIn.styled";
import Link from "next/link";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Eye from "@/components/Eye/Eye";

const SignIn = () => {
  return (
    <S.SignInLayout>
      <S.SignInContainer>
        <S.HeaderContainer>
          <Link href='/'>
            <Image src={logo} alt='Linkbrary' />
          </Link>
          <p>
            회원이 아니신가요?{" "}
            <Link href='./signup.html'>
              <Button variant={"default"} text={"회원 가입하기"} />
            </Link>
          </p>
        </S.HeaderContainer>
        <S.SignContainer>
          <form id='form'>
            <S.EmailContainer>
              <label htmlFor='email'>이메일</label>
              <Input variant={"sign"} id='email' name='email' type='email' placeholder='codeit@codeit.kr' />
              <div id='wrong_email_message'></div>
            </S.EmailContainer>
            <S.PasswordContainer>
              <label htmlFor='password'>비밀번호</label>
              <Input variant={"sign"} id='password' name='password' type='password' placeholder='******' />
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
