import styled from 'styled-components'
import Button from '../Button/Button'

export const HeaderLayout = styled.div<{ $isShadow?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  padding: 20px 200px;
  background-color: var(--gray5-color);
  transition: box-shadow 0.3s;
  z-index: 40;
  position: relative;

  ${({ $isShadow }) =>
    $isShadow &&
    `
      box-shadow: 0 10px 30px rgba(188, 188, 188, 0.3);
      position: sticky;
      transition: box-shadow 0.3s;
      border-bottom: 1px solid #e2ebfa;
  `}

  @media (max-width: 1124px) {
    padding: 20px 32px;
  }
`

export const LogoBox = styled.div`
  > img {
    width: 133px;
    height: 24px;
  }
`
export const LoginLayout = styled.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;

  > p {
    text-decoration: none;
    color: #000;
    margin-right: 10px;

    @media (max-width: 767px) {
      display: none;
    }
  }
`

export const ImageBox = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  cursor: pointer;

  > img {
    border-radius: 50%;
  }
`

export const LoginButton = styled(Button)`
  padding: 15px 40px;
`
