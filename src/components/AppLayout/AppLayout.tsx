import { ReactNode, useEffect } from 'react'
import { Footer, Nav } from '@/src/components'
import { userInfoAccess } from '@/src/services/auth'
import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'

interface AppLayoutProps {
  children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const dispatch = useAppDispatch()
  const { isLoggedIn } = useAppSelector((state) => state.auth)

  const loadUserInfo = async () => {
    await dispatch(userInfoAccess())
  }

  useEffect(() => {
    if (!isLoggedIn) {
      loadUserInfo()
    }
  }, [isLoggedIn])

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default AppLayout
