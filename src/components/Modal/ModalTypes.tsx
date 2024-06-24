import AddFolder from '@/src/components/Modal/ModalContents/AddFolder'
import ChangeName from '@/src/components/Modal/ModalContents/ChangeName'
import ShareFolder from '@/src/components/Modal/ModalContents/ShareFolder'
import AddLinkToFolder from '@/src/components/Modal/ModalContents/AddLinkToFolder'
import DeleteFolder from '@/src/components/Modal/ModalContents/DeleteFolder'
import DeleteLink from '@/src/components/Modal/ModalContents/DeleteLink'
import { ReactNode } from 'react'
import DeletePaper from './ModalContents/DeletePaper'
import PaperForm from './ModalContents/PaperForm'

type ModalType =
  | 'changeName'
  | 'addFolder'
  | 'addLinkToFolder'
  | 'shareFolder'
  | 'deleteFolder'
  | 'deleteLink'
  | 'deletePaper'
  | 'newPaperForm'

export const MODAL_COMPONENTS: Map<ModalType, ReactNode> = new Map<ModalType, ReactNode>([
  [
    'changeName',
    <ChangeName key="changeName" title="폴더 이름 변경" text="변경하기" variant="default" />,
  ],
  [
    'addLinkToFolder',
    <AddLinkToFolder key="addLink" title="폴더 이동" text="추가하기" variant="default" />,
  ],
  [
    'deleteLink',
    <DeleteLink key="deleteLink" title="링크 삭제" text="삭제하기" variant="deleteLink" />,
  ],
  [
    'deletePaper',
    <DeletePaper key="deletePaper" title="페이퍼 삭제" text="삭제하기" variant="deleteLink" />,
  ],
  [
    'newPaperForm',
    <PaperForm key="paperForm" title="페이퍼 추가" text="추가하기" variant="default" />,
  ],
  ['shareFolder', <ShareFolder key="shareFolder" title="폴더 공유" />],
])
