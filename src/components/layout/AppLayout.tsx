import { ReactNode, useEffect } from 'react'
import { Footer, Nav } from '@/src/components'
import useGetMe from '@/src/services/auth/useGetMe'
import { useAppDispatch } from '@/src/hooks/useApp'
import { login } from '@/src/store/reducers/auth'

interface AppLayoutProps {
  children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { data, isLoading, isSuccess } = useGetMe()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isSuccess) {
      dispatch(login())
    }
  }, [isSuccess])

  return (
    <>
      <Nav me={data?.[0]} isPending={isLoading} />
      {children}
      <Footer />
    </>
  )
}

export default AppLayout
