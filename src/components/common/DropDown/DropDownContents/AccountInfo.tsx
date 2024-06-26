import { useAppDispatch } from '@/src/hooks/useApp'
import { logout } from '@/src/store/reducers/auth'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as S from './AccountInfo.styled'

interface AccountInfoProps {
  imageSource: string
  name: string
  email: string
}

const AccountInfo = ({ imageSource, name, email }: AccountInfoProps) => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleClickLogout = () => {
    dispatch(logout())
    router.reload()
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
          <div onClick={handleClickLogout}>
            <span>⎋</span>
            로그아웃
          </div>
        </li>
      </S.MenuList>
    </S.AccountInfoLayout>
  )
}

export default AccountInfo
