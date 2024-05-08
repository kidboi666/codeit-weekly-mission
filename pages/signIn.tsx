import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import eyeOff from "@/assets/icons/eye-off.svg";
import googleIcon from "@/assets/icons/google_icon.svg";
import facebookIcon from "@/assets/icons/facebook_icon.svg";
import * as S from "@/styles/signIn.styled";

const SignIn = () => {
  return (
    <main>
      <S.HeaderContainer>
        <a href='../index.html' className='logo'>
          <Image src={logo} alt='Linkbrary' />
        </a>
        <p>
          회원이 아니신가요?{" "}
          <a href='./signup.html' className='signup_button'>
            회원 가입하기
          </a>
        </p>
      </S.HeaderContainer>
      <section>
        <form id='form'>
          <div className='email_wrap'>
            <label htmlFor='email'>이메일</label>
            <input id='email' name='email' type='email' placeholder='codeit@codeit.kr' />
            <div id='wrong_email_message'></div>
          </div>
          <div className='password_wrap'>
            <label htmlFor='password'>비밀번호</label>
            <input id='password' name='password' type='password' placeholder='******' />
            <Image src={eyeOff} alt='비밀번호 표시 아이콘' id='password_eyes' />
            <div id='wrong_password_message'></div>
          </div>
          <button type='submit' className='signin_button'>
            로그인
          </button>
        </form>
      </section>
      <footer>
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
      </footer>
    </main>
  );
};

export default SignIn;
