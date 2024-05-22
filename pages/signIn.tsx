import facebookIcon from "@/assets/icons/facebook_icon.svg";
import googleIcon from "@/assets/icons/google_icon.svg";
import logo from "@/assets/icons/logo.svg";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { loginAccess, userInfoAccess } from "@/redux/actions/auth";
import { openToast } from "@/redux/reducers/toast";
import * as S from "@/styles/signIn.styled";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  email: string;
  password: string;
}

const SignIn = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { handleSubmit, control } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.email && data.password) {
      const res = await dispatch(loginAccess({ email: data.email, password: data.password }));
      if (res.meta.requestStatus === "fulfilled") {
        return dispatch(userInfoAccess());
      }
      return dispatch(openToast("wrongAccount"));
    }
  };

  useEffect(() => {
    if (isLoggedIn) router.push("/folderPage");
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
              <Button variant='underBar' text='회원 가입하기' />
            </Link>
          </p>
        </S.HeaderContainer>
        <S.SignContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.EmailContainer>
              <label htmlFor='email'>이메일</label>
              <Controller
                name='email'
                control={control}
                render={({ field }) => <Input {...field} type='email' placeholder='codeit@codeit.kr' />}
              />
            </S.EmailContainer>
            <S.PasswordContainer>
              <label htmlFor='password'>비밀번호</label>
              <Controller
                name='password'
                control={control}
                render={({ field }) => <Input {...field} type='password' placeholder='******' />}
              />
            </S.PasswordContainer>
            <Button variant='default' type='submit' text='로그인' />
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
