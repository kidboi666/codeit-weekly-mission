import blankLogo from '@/public/icons/blank_logo.svg'
import calculateTime from '@/src/utils/calculateTime'
import formatDate from '@/src/utils/formatDate'
import { FolderList, Link as LinkType } from '@/src/types'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Kebab } from '@/src/components'
import { CARD_SECTION_MSG } from '@/src/constants/strings'
import SkeletonCard from '@/src/components/specific/LinkCard/SkeletonCard'
import * as S from './LinkCard.styled'

interface CardProps {
  linkList: LinkType[] | string
  folderList?: FolderList[]
  isLoading: boolean
  startDraggingItem?: (link: LinkType) => void
  dropItem?: () => void
}

const LinkCard = ({
  linkList,
  isLoading,
  folderList = [],
  startDraggingItem,
  dropItem,
}: CardProps) => {
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
        linkList?.map((link: LinkType) => (
          <Link href={link.url} key={link.id}>
            <S.CardLayout
              draggable
              onDragStart={() => {
                if (startDraggingItem) startDraggingItem(link)
              }}
              onDragEnd={dropItem}
            >
              <S.CardLinkContainer>
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
          </Link>
        ))
      )}
    </div>
  )
}

export default LinkCard
