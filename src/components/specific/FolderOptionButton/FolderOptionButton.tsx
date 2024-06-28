import { useRouter } from 'next/router'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Image from 'next/image'
import shareIcon from '@/public/icons/share.svg'
import penIcon from '@/public/icons/pen.svg'
import deleteIcon from '@/public/icons/delete.svg'
import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { openModal } from '@/src/store/reducers/modal'
import DeleteFolder from '@/src/components/common/Modal/ModalContents/DeleteFolder'
import PaperForm from '@/src/components/common/Modal/ModalContents/PaperForm'
import ShareFolder from '@/src/components/common/Modal/ModalContents/ShareFolder'
import ChangeName from '@/src/components/common/Modal/ModalContents/ChangeName'
import { DRAG_TARGET } from '@/src/constants/number'
import { Button } from '@/src/components'
import * as S from './FolderOptionButton.styled'

interface FolderOptionButtonProps {
  isDragging: boolean
  enterDrag: (elementId: number) => void
  dragLeave: () => void
  deleteLoading: boolean
  paperPage: number
  setPaperPage: Dispatch<SetStateAction<number>>
  isPaperSuccess: boolean
  totalPage: number
  currentPage: number
}

const FolderOptionButton = ({
  isDragging,
  enterDrag,
  dragLeave,
  deleteLoading,
  paperPage,
  setPaperPage,
  isPaperSuccess,
  totalPage,
  currentPage,
}: FolderOptionButtonProps) => {
  const { currentFolder } = useAppSelector((state) => state.folder)
  const [isEnter, setEnter] = useState(false)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { folderId } = router.query
  const [totalPageArr, setTotalPageArr] = useState<number[]>([])

  useEffect(() => {
    if (totalPageArr.length !== totalPage) {
      for (let i = 0; i < totalPage; i += 1) {
        setTotalPageArr((prev) => [...prev, i + 1])
      }
    }
  }, [totalPage])

  return (
    <S.FolderOptionButtonLayout>
      <S.SelectedFolder>{currentFolder?.name}</S.SelectedFolder>
      {folderId && Number(folderId) > 1 && (
        <S.OptionContainer>
          <S.OptionBox onClick={() => dispatch(openModal(<ShareFolder />))}>
            <Image src={shareIcon} alt="공유버튼" width={18} height={18} />
            공유
          </S.OptionBox>
          <S.OptionBox onClick={() => dispatch(openModal(<ChangeName />))}>
            <Image src={penIcon} alt="이름변경버튼" width={18} height={18} />
            이름 변경
          </S.OptionBox>
          {isDragging && (
            <S.DraggingEventBox>
              <S.BiggerButton
                $deleteLoading={deleteLoading}
                $enterDrag={isEnter}
                onDragEnter={() => {
                  setEnter(true)
                  enterDrag(DRAG_TARGET.링크삭제)
                }}
                onDragLeave={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setEnter(false)
                    dragLeave()
                  }
                }}
              >
                <Image src={deleteIcon} alt="삭제버튼" width={58} height={58} />
                <p>위로 드래그하여 삭제</p>
              </S.BiggerButton>
            </S.DraggingEventBox>
          )}
          <S.OptionBox onClick={() => dispatch(openModal(<DeleteFolder />))}>
            <Image src={deleteIcon} alt="삭제버튼" width={18} height={18} />
            삭제
          </S.OptionBox>
        </S.OptionContainer>
      )}
      {currentFolder.id === 1 && (
        <S.OptionContainer>
          <Button
            variant="folderButton"
            text="이전"
            disabled={!paperPage}
            onClick={() =>
              setPaperPage((prev: number) => {
                if (prev <= totalPage && prev !== 1) {
                  return prev - 1
                }
                return prev
              })
            }
          />
          {totalPageArr.map((v) => (
            <Button
              key={v}
              variant="folderButton"
              text={v}
              selected={paperPage}
              onClick={() => setPaperPage(v)}
            />
          ))}
          <Button
            variant="folderButton"
            text="다음"
            onClick={() =>
              setPaperPage((prev) => {
                if (prev < totalPage) {
                  return prev + 1
                }
                return prev
              })
            }
          />
          <S.OptionBox onClick={() => dispatch(openModal(<PaperForm />))}>✚ 새 글</S.OptionBox>
        </S.OptionContainer>
      )}
    </S.FolderOptionButtonLayout>
  )
}

export default FolderOptionButton
