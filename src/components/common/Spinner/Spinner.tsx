import spinner from '@/public/icons/spinner.svg'
import Image from 'next/image'
import * as S from './Spinner.styled'

export enum SpinnerSize {
  SMALL = 's',
  MEDIUM = 'm',
}

const SPINNER_DIMENSIONS = {
  [SpinnerSize.SMALL]: 15,
  [SpinnerSize.MEDIUM]: 30,
}

const Spinner = ({ size = SpinnerSize.MEDIUM }: { size?: SpinnerSize }) => {
  return (
    <S.SpinnerBox>
      <S.Spinner>
        <Image
          src={spinner}
          alt="로딩 중..."
          width={SPINNER_DIMENSIONS[size]}
          height={SPINNER_DIMENSIONS[size]}
        />
      </S.Spinner>
    </S.SpinnerBox>
  )
}

export default Spinner
