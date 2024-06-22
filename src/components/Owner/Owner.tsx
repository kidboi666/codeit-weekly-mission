import * as S from './Owner.styled'

interface OwnerProps {
  profileImage: string
  userName: string
  folderName: string
}

const Owner = ({ profileImage, userName, folderName }: OwnerProps) => {
  return (
    <S.OwnerList>
      <li>
        <S.OwnerImg src={profileImage} alt="프로필 이미지" />
      </li>
      <li>
        <S.OwnerName>{userName}</S.OwnerName>
      </li>
      <li>
        <S.Star>{folderName}</S.Star>
      </li>
    </S.OwnerList>
  )
}

export default Owner
