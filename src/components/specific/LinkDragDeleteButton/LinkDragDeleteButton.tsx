import * as S from '@/src/components/specific/FolderOptionButton/FolderOptionButton.styled'
import { DRAG_TARGET } from '@/src/constants/number'
import Image from 'next/image'
import deleteIcon from '@/public/icons/delete.svg'
import React, { Dispatch, SetStateAction } from 'react'

interface LinkDragDeleteButtonProps {
  deleteLoading: boolean
  isEnter: boolean
  setEnter: Dispatch<SetStateAction<boolean>>
  enterDrag: (elementId: number) => void
  dragLeave: () => void
}

const LinkDragDeleteButton = ({
  deleteLoading,
  isEnter,
  setEnter,
  enterDrag,
  dragLeave,
}: LinkDragDeleteButtonProps) => {
  return (
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
  )
}

export default LinkDragDeleteButton
