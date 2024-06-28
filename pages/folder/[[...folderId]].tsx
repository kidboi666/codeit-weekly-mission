import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import {
  Folder,
  AddLink,
  Search,
  AppLayout,
  LinkCard,
  FolderLayout,
  PaperCard,
  FolderOptionButton,
} from '@/src/components'
import { Link } from '@/src/types'
import useGetLink from '@/src/services/link/useGetLink'
import useGetFolder from '@/src/services/folder/useGetFolder'
import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { initCurrentFolder } from '@/src/store/reducers/folder'
import useGetPaper from '@/src/services/paper/useGetPaper'
import useDeleteLink from '@/src/services/link/useDeleteLink'
import useFetchHandler from '@/src/hooks/useFetchHandler'
import { DRAG_TARGET } from '@/src/constants/number'

const FolderPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { folderId } = router.query
  const [searchResult, setSearchResult] = useState<Link[] | string>([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const [page, setPage] = useState(0)
  const [isDragging, setDragging] = useState(false)
  const dragItem = useRef<Link | null>(null)
  const dragOverTarget = useRef(0)
  const { isLoggedIn } = useAppSelector((state) => state.auth)
  const [success, failure] = useFetchHandler()
  const { data: folderList, isPending: folderPending } = useGetFolder()
  const { data: paperList, isPending: paperPending, isSuccess: paperSuccess } = useGetPaper(page)
  const { data: linkList, isPending: linkPending } = useGetLink(Number(folderId))
  const { mutate: deleteLink, isPending: deleteLinkPending } = useDeleteLink()

  const startDraggingItem = (link: Link) => {
    setDragging(true)
    dragItem.current = link
  }

  const enterDraggedItem = (elementId: number) => {
    dragOverTarget.current = elementId
  }

  const dragLeave = () => {
    dragOverTarget.current = 0
  }

  const dropItem = () => {
    setDragging(false)
    if (dragItem.current && dragOverTarget.current === DRAG_TARGET.링크삭제) {
      deleteLink(dragItem.current.id, {
        onSuccess: () => success('링크가 삭제되었습니다.'),
        onError: (error) => failure(error),
      })
      dragOverTarget.current = 0
    }
  }

  useEffect(() => {
    if (!folderId) {
      dispatch(initCurrentFolder())
    }
  }, [folderId])

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (!isLoggedIn && !token) {
      router.push('/')
    }
  }, [isLoggedIn])

  return (
    <AppLayout>
      <FolderLayout
        AddLink={<AddLink folderList={folderList} />}
        Search={
          <Search
            linkList={linkList}
            setSearchResult={setSearchResult}
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
          />
        }
        Folder={<Folder folderList={folderList} isLoading={folderPending} />}
        FolderOption={
          <FolderOptionButton
            isDragging={isDragging}
            enterDrag={enterDraggedItem}
            dragLeave={dragLeave}
            deleteLoading={deleteLinkPending}
          />
        }
        Card={
          searchKeyword && searchResult.length >= 1 ? (
            <LinkCard
              linkList={searchResult}
              folderList={folderList}
              isLoading={linkPending}
              startDraggingItem={startDraggingItem}
              dropItem={dropItem}
            />
          ) : (
            <LinkCard
              linkList={linkList}
              folderList={folderList}
              isLoading={linkPending}
              startDraggingItem={startDraggingItem}
              dropItem={dropItem}
            />
          )
        }
        Paper={<PaperCard paperList={paperList} isLoading={paperPending} />}
        isSuccess={paperSuccess}
        setPage={setPage}
      />
    </AppLayout>
  )
}

export default FolderPage
