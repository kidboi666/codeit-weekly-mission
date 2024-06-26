import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import Image from 'next/image'
import copyToClipboard from '@/src/utils/copyToClipboard'
import facebookIcon from '@/public/icons/facebook_icon.svg'
import linkIcon from '@/public/icons/link.svg'
import { KakaoButton } from '@/src/components'
import * as S from '@/src/components/common/Modal/ModalContents/ShareFolder.styled'
import { openToast } from '@/src/store/reducers/toast'

const ShareFolder = () => {
  const { currentFolder } = useAppSelector((state) => state.folder) || {}
  const dispatch = useAppDispatch()

  const handleClick = () => {
    copyToClipboard(currentFolder.id)
    dispatch(openToast('주소가 복사되었습니다.'))
  }

  return (
    <form>
      <h3>링크 공유</h3>
      <h4>{currentFolder.name}</h4>
      <S.ShareContainer>
        <KakaoButton />
        <div>
          <Image src={facebookIcon} alt={facebookIcon} />
          <p>페이스북</p>
        </div>
        <div onClick={handleClick}>
          <Image src={linkIcon} alt={linkIcon} />
          <p>링크 복사</p>
        </div>
      </S.ShareContainer>
    </form>
  )
}

export default ShareFolder
