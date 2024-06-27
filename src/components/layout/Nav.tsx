import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import logo from '@/public/icons/logo.svg'
import { DropDown, Button, Spinner } from '@/src/components'
import { UserData } from '@/src/types'
import * as S from './Nav.styled'

interface NavProps {
  me: UserData
  isPending: boolean
}
const Nav = ({ me, isPending }: NavProps) => {
  const { pathname } = useRouter()
  const [isShadow, setShadow] = useState(false)
  const [isOpen, setOpen] = useState(false)

  const handleNavigation = () => {
    setShadow(window.scrollY > 30)
  }

  useEffect(() => {
    if (pathname.includes('folder')) return

    const scrollEvent = setInterval(() => {
      window.addEventListener('scroll', handleNavigation)
    }, 100)

    // eslint-disable-next-line consistent-return
    return () => {
      clearInterval(scrollEvent)
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [pathname])

  return (
    <S.HeaderLayout $isShadow={isShadow} onMouseLeave={() => setOpen(false)}>
      <Link href="/">
        <Image src={logo} alt="Linkbrary" width={133} height={24} />
      </Link>
      <S.LoginLayout>
        {/* eslint-disable-next-line no-nested-ternary */}
        {isPending ? (
          <Spinner />
        ) : me ? (
          <>
            <p>{me?.email}</p>
            <S.ImageBox onClick={() => setOpen((prev) => !prev)}>
              <Image src={me?.imageSource} alt="프로필 이미지" width={28} height={28} />
            </S.ImageBox>
          </>
        ) : (
          <Link href="/signin">
            <Button variant="default" text="로그인" width="88px" />
          </Link>
        )}
        <DropDown variant="accountInfo" setOpen={setOpen} isOpen={isOpen} props={me} />
      </S.LoginLayout>
    </S.HeaderLayout>
  )
}

export default Nav
