import spinner from '@/public/icons/spinner.svg'
import Image from 'next/image'
import * as S from './Spinner.styled'

const Spinner = () => {
  return (
    <S.SpinnerBox>
      <S.Spinner>
        <Image src={spinner} alt="로딩 중...." width={30} height={30} />
      </S.Spinner>
    </S.SpinnerBox>
  )
}

export default Spinner
