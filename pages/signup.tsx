/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image'
import logo from '@/public/icons/logo.svg'
import googleIcon from '@/public/icons/google_icon.svg'
import facebookIcon from '@/public/icons/facebook_icon.svg'
import * as S from '@/src/styles/signup.styled'
import Link from 'next/link'
import { Input, Button } from '@/src/components'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { checkEmailAccess, signUpAccess } from '@/src/services/endPoint/auth'
import { useRouter } from 'next/router'
import { openToast } from '@/src/store/reducers/toast'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { ALPHANUMERIC_REGX, EMAIL_REGX, INPUT_MSG } from '@/src/constants/strings'

interface Inputs {
  email: string
  password: string
  passwordCheck: string
}

const SignUpPage = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { handleSubmit, control } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
      passwordCheck: '',
    },
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.password !== data.passwordCheck) {
      return dispatch(openToast({ type: 'diffrentPassword' }))
    }
    if (data.email && data.password) {
      const res = await dispatch(checkEmailAccess(data.email))

      if (res.meta.requestStatus === 'fulfilled') {
        return dispatch(signUpAccess(data))
      }
      return dispatch(openToast({ type: 'emailAlreadyExists' }))
    }
    return dispatch(openToast({ type: 'wrongAccount' }))
  }

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/folder')
    }
  }, [isLoggedIn])

  return (
    <S.SignUpLayout>
      <S.SignUpContainer>
        <S.HeaderContainer>
          <Link href="/public">
            <S.ImgBox>
              <Image fill src={logo} alt="Linkbrary" />
            </S.ImgBox>
          </Link>
          <p>
            이미 회원이신가요?
            <Link href="/signin">
              <Button variant="underBar" text="로그인 하기" />
            </Link>
          </p>
        </S.HeaderContainer>
        <S.SignContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  <Input {...field} type="email" placeholder="codeit@codeit.kr" error={error} />
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
                  deps: ['passwordCheck'],
                }}
                render={({ field, fieldState: { error } }) => (
                  <Input {...field} type="password" placeholder="******" error={error} />
                )}
              />
            </S.PasswordContainer>
            <S.PasswordRepeatContainer>
              <label htmlFor="password">비밀번호 확인</label>
              <Controller
                name="passwordCheck"
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
                  <Input {...field} type="password" placeholder="******" error={error} />
                )}
              />
            </S.PasswordRepeatContainer>
            <Button variant="default" type="submit" text="회원가입" />
          </form>
        </S.SignContainer>
        <S.SocialContainer>
          <div>
            <p>다른 방식으로 가입하기</p>
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
      </S.SignUpContainer>
    </S.SignUpLayout>
  )
}

export default SignUpPage
