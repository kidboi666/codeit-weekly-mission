import styled, { css } from 'styled-components'

const animationStyle = css<{ $animation: boolean }>`
  transform: translateY(100px);
  opacity: 0.1;
  transition:
    transform 2s ease,
    opacity 2s ease;

  ${({ $animation }) =>
    $animation &&
    `
  opacity: 1;
  transform: translateY(0);
`}
`

export const LandingPageLayout = styled.div`
  width: 100%;
  .info_gradient {
    background: linear-gradient(270deg, #ff9f9f, var(--primary-color));
  }
  .link_gradient {
    background: linear-gradient(270deg, #a4ceff, #fe8a8a);
  }
  .folder_gradient {
    background: linear-gradient(270deg, #a4ceff, #ffd88b);
  }
  .share_gradient {
    background: linear-gradient(270deg, #a4ceff, #528885);
  }
  .sns_gradient {
    background: linear-gradient(270deg, #a4ceff, #76dbf0);
  }
  .text_gradient {
    color: transparent;
    background-clip: text;
  }
`
// main_header_wrap
export const HeaderContainer = styled.div`
  background-color: var(--gray5-color);
  padding: 28px 32px 0;
`
// main_header
export const HeaderBox = styled.div<{ $animation: boolean; ref?: any }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 70px;
  overflow: hidden;
  text-align: center;

  > img {
    ${animationStyle}

    @media (max-width: 1199px) {
      width: 100%;
      height: 100%;
    }
  }
`
// intro_wrap
export const IntroWrap = styled.div`
  margin-bottom: 40px;

  > h1,
  span {
    font-size: 64px;
    font-weight: 700;
    line-height: 80px;

    @media (max-width: 767px) {
      font-size: 32px;
      line-height: 42px;
    }
  }
`

export const LinkBox = styled.div`
  margin-bottom: 40px;
`
// section
export const SectionCotainer = styled.div`
  box-shadow: 0 -15px 40px 20px var(--gray4-color);
  padding: 70px 0;
`
