/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import facebookIcon from '@/public/icons/facebook_icon.svg'
import googleIcon from '@/public/icons/google_icon.svg'
import logo from '@/public/icons/logo.svg'
import { Button } from '@/src/components'
import { ALPHANUMERIC_REGX, EMAIL_REGX, INPUT_MSG } from '@/src/constants/strings'
import { useAppSelector } from '@/src/hooks/useApp'
import useSignIn from '@/src/services/auth/useSignIn'
import useFetchHandler from '@/src/hooks/useFetchHandler'
import AuthInput from '@/src/components/common/AuthInput/AuthInput'
import * as S from '@/src/styles/signin.styled'

interface Inputs {
  email: string
  password: string
}

const SignInPage = () => {
  const router = useRouter()
  const { isLoggedIn } = useAppSelector((state) => state.auth)
  const [success, failure] = useFetchHandler()
  const { mutate: postSignIn, isPending } = useSignIn()
  const { handleSubmit: submit, control } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleSubmit: SubmitHandler<Inputs> = async (value) => {
    if (value.email && value.password) {
      postSignIn(
        { email: value.email, password: value.password },
        {
          onSuccess: () => {
            success('로그인성공')
          },
          onError: (error: Error) => {
            failure(error)
          },
        },
      )
    }
  }

  useEffect(() => {
    if (isLoggedIn) router.push('/folder')
  }, [isLoggedIn])

  return (
    <S.SignInLayout>
      <S.SignInContainer>
        <S.HeaderContainer>
          <Link href="/">
            <S.ImgBox>
              <Image fill src={logo} alt="Linkbrary" />
            </S.ImgBox>
          </Link>
          <p>
            회원이 아니신가요?
            <Link href="/signup">
              <Button variant="underBar" text="회원 가입하기" />
            </Link>
          </p>
        </S.HeaderContainer>
        <S.SignContainer>
          <form onSubmit={submit(handleSubmit)}>
            <S.EmailContainer>
              <label htmlFor="email">이메일</label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: { value: true, message: INPUT_MSG.inputEmail },
                  maxLength: { value: 30, message: INPUT_MSG.emailLength },
                  pattern: {
                    value: EMAIL_REGX,
                    message: INPUT_MSG.wrongEmailForm,
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <AuthInput
                    field={field}
                    type="email"
                    placeholder="codeit@codeit.kr"
                    error={error}
                  />
                )}
              />
            </S.EmailContainer>
            <S.PasswordContainer>
              <label htmlFor="password">비밀번호</label>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: { value: true, message: INPUT_MSG.inputPw },
                  maxLength: { value: 20, message: INPUT_MSG.pwLength },
                  pattern: {
                    value: ALPHANUMERIC_REGX,
                    message: INPUT_MSG.wrongPwForm,
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <AuthInput field={field} type="password" placeholder="******" error={error} />
                )}
              />
            </S.PasswordContainer>
            <Button variant="default" type="submit" text="로그인" isPending={isPending} />
          </form>
        </S.SignContainer>
        <S.SocialContainer>
          <div>
            <p>소셜 로그인</p>
            <div>
              <Link href="https://www.google.com/">
                <Image src={googleIcon} alt="google" />
              </Link>
              <Link href="https://www.kakaocorp.com/page/">
                <Image src={facebookIcon} alt="kakao" />
              </Link>
            </div>
          </div>
        </S.SocialContainer>
      </S.SignInContainer>
    </S.SignInLayout>
  )
}

export default SignInPage
