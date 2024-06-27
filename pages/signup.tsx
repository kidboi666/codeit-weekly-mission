/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image'
import logo from '@/public/icons/logo.svg'
import googleIcon from '@/public/icons/google_icon.svg'
import facebookIcon from '@/public/icons/facebook_icon.svg'
import * as S from '@/src/styles/signup.styled'
import Link from 'next/link'
import { Button } from '@/src/components'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { useRouter } from 'next/router'
import { openToast } from '@/src/store/reducers/toast'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { ALPHANUMERIC_REGX, EMAIL_REGX, INPUT_MSG } from '@/src/constants/strings'
import useCheckEmail from '@/src/services/auth/useCheckEmail'
import useFetchHandler from '@/src/hooks/useFetchHandler'
import useSignUp from '@/src/services/auth/useSignUp'
import AuthInput from '@/src/components/common/AuthInput/AuthInput'

interface Inputs {
  email: string
  password: string
  passwordCheck: string
}

const SignUpPage = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth)
  const { mutate: checkEmail, isPending: checkEmailPending } = useCheckEmail()
  const { mutate: signup, isPending: signupPending } = useSignUp()
  const [success, failure] = useFetchHandler()
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { handleSubmit: submit, control } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
      passwordCheck: '',
    },
  })

  const handleSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.password !== data.passwordCheck) {
      dispatch(openToast({ text: '비밀번호가 다릅니다.', warn: true }))
    } else if (data.email && data.password) {
      checkEmail(data.email, {
        onSuccess: (result) => {
          const isUsable = result?.data?.isUsableEmail
          if (isUsable) {
            signup(
              { email: data.email, password: data.password },
              {
                onSuccess: () => success('환영합니다!'),
                onError: (error) => failure(error),
              },
            )
          }
        },
        onError: () => {
          failure('이미 존재하는 이메일입니다.')
        },
      })
    }
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
          <Link href="/">
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
                  deps: ['passwordCheck'],
                }}
                render={({ field, fieldState: { error } }) => (
                  <AuthInput field={field} type="password" placeholder="******" error={error} />
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
                  <AuthInput field={field} type="password" placeholder="******" error={error} />
                )}
              />
            </S.PasswordRepeatContainer>
            <Button
              variant="default"
              type="submit"
              text="회원가입"
              isPending={checkEmailPending || signupPending}
            />
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
