import { AddLink, AppLayout, Folder, PaperLayout, Search, PaperCard } from '@/src/components'
import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { getFolder } from '@/src/store/actions/folder'
import { getPaper } from '@/src/store/actions/paper'
import { Link, Paper } from '@/src/types'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const PaperPage = () => {
  const [, setSearchResult] = useState<Link[] | string>([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const { id: userId } = useAppSelector((state) => state.auth.userInfo)
  const { data: paperList } = useAppSelector((state) => state.paper)
  const dispatch = useAppDispatch()

  const router = useRouter()

  const fetchPaperList = async () => {
    dispatch(getPaper())
    dispatch(getFolder())
  }

  useEffect(() => {
    if (userId) fetchPaperList()
  }, [userId])

  useEffect(() => {
    if (!userId) router.push('/folder')
  }, [router, userId])

  return (
    <AppLayout>
      <PaperLayout
        AddLink={<AddLink />}
        Search={
          <Search
            setSearchKeyword={setSearchKeyword}
            setSearchResult={setSearchResult}
            searchKeyword={searchKeyword}
          />
        }
        Folder={<Folder />}
        Paper={paperList.map((paper: Paper) => (
          <PaperCard key={paper.id} paper={paper} />
        ))}
      />
    </AppLayout>
  )
}

export default PaperPage
