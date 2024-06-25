import { AddLink, AppLayout, Folder, PaperLayout, Search, PaperCard } from '@/src/components'
import { useAppSelector } from '@/src/hooks/useApp'
import { Link } from '@/src/types'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useGetPaper from '@/src/services/useFetch/paper/useGetPaper'
import useGetFolder from '@/src/services/useFetch/folder/useGetFolder'

const PaperPage = () => {
  const router = useRouter()
  const { id: userId } = useAppSelector((state) => state.auth.userInfo)
  const [paperList, paperPending] = useGetPaper()
  const [folderList, folderPending] = useGetFolder()
  const [, setSearchResult] = useState<Link[] | string>([])
  const [searchKeyword, setSearchKeyword] = useState('')

  useEffect(() => {
    if (!userId) router.push('/folder')
  }, [router, userId])

  return (
    <AppLayout>
      <PaperLayout
        AddLink={<AddLink folderList={folderList} />}
        Search={
          <Search
            setSearchKeyword={setSearchKeyword}
            setSearchResult={setSearchResult}
            searchKeyword={searchKeyword}
          />
        }
        Folder={<Folder folderList={folderList} />}
        Paper={<PaperCard paperList={paperList} />}
        folderPending={folderPending}
        paperPending={paperPending}
      />
    </AppLayout>
  )
}

export default PaperPage
