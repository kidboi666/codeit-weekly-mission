import blankLogo from '@/public/icons/blank_logo.svg'
import calculateTime from '@/src/utils/calculateTime'
import formatDate from '@/src/utils/formatDate'
import { FolderList, Link } from '@/src/types'
import Image from 'next/image'
import { Star, Kebab } from '@/src/components'
import { CARD_SECTION_MSG } from '@/src/constants/strings'
import SkeletonCard from '@/src/components/specific/LinkCard/SkeletonCard'
import * as S from './LinkCard.styled'

interface CardProps {
  linkList: Link[] | string
  folderList?: FolderList[]
  isLoading: boolean
}

const LinkCard = ({ linkList, isLoading, folderList = [] }: CardProps) => {
  if (linkList === CARD_SECTION_MSG.searchDataNotFound) {
    return <div>{CARD_SECTION_MSG.searchDataNotFound}</div>
  }
  if (linkList?.length === 0) {
    return <div>{CARD_SECTION_MSG.dataNotFound}</div>
  }

  return (
    <div>
      {isLoading ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        Array.isArray(linkList) &&
        linkList?.map((link: Link) => (
          <S.CardLayout key={link.id}>
            <S.CardLinkContainer href={link.url} target="_blank" rel="noreferrer">
              <S.CardImgContainer>
                <Star favorite={link.favorite} linkId={link.id} />
                {link.imageSource ? (
                  <S.CardImg src={link.imageSource} alt={link.title} />
                ) : (
                  <S.BlankImgBox>
                    <Image src={blankLogo} alt={link.title} style={{ width: '100%' }} />
                  </S.BlankImgBox>
                )}
              </S.CardImgContainer>
              <S.CardDescriptionContainer>
                <Kebab
                  linkId={link.id}
                  linkTitle={link.title}
                  linkUrl={link.url}
                  folderList={folderList}
                />
                <S.CreatedDate>{calculateTime(link.createdAt)}</S.CreatedDate>
                <S.Title>{link.title}</S.Title>
                <S.TimeStamp>{formatDate(link.createdAt)}</S.TimeStamp>
              </S.CardDescriptionContainer>
            </S.CardLinkContainer>
          </S.CardLayout>
        ))
      )}
    </div>
  )
}

export default LinkCard
