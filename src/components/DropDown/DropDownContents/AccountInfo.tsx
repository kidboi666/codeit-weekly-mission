import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { logout } from '@/src/store/reducers/auth'
import Image from 'next/image'
import * as S from './AccountInfo.styled'

const AccountInfo = () => {
  const { imageSource, name, email } = useAppSelector((state) => state.auth.userInfo)
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(logout())
  }

  return (
    <S.AccountInfoLayout>
      <S.InfoSection>
        <Image width={30} height={30} src={imageSource} alt="프로필 이미지" />
        <div>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </S.InfoSection>
      <S.MenuList>
        <li>
          <div onClick={onClick}>
            <span>⎋</span>
            로그아웃
          </div>
        </li>
      </S.MenuList>
    </S.AccountInfoLayout>
  )
}

export default AccountInfo
