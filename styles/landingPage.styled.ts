import styled, { css } from "styled-components";

const animationStyle = css<{ $animation: boolean }>`
  transform: translateY(100px);
  opacity: 0.1;
  transition: transform 2s ease, opacity 2s ease;

  ${({ $animation }) =>
    $animation &&
    `
  opacity: 1;
  transform: translateY(0);
`}
`;

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
`;
// main_header_wrap
export const HeaderContainer = styled.div`
  background-color: var(--gray5-color);
  padding: 28px 32px 0;
`;
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
`;
// intro_wrap
export const IntroWrap = styled.div`
  margin-bottom: 40px;

  > h1,
  span {
    font-size: 64px;
    font-weight: 700;

    @media (max-width: 1199px) {
      font-size: 40px;
    }
  }
`;

export const LinkBox = styled.div`
  margin-bottom: 40px;
`;
//section
export const SectionCotainer = styled.div`
  box-shadow: 0 -15px 40px 20px var(--gray4-color);
  padding: 70px 0;
`;
// card
export const CardContainer = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    padding: 40px 32px;
  }

  &:nth-child(even) div div {
    grid-column: 1 / 2;
  }
`;

// card_item , section_link
export const CardBox = styled.div`
  width: 998px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  column-gap: 157px;
  row-gap: 1px;

  > h1 {
    grid-row: 2 / 3;
    font-size: 48px;
    font-weight: 700;

    @media (max-width: 1199px) {
      font-size: 40px;
      grid-row: 1 / span 2;
      align-self: end;
    }

    @media (max-width: 767px) {
      align-self: start;
    }
  }

  > p {
    margin-top: 10px;
    line-height: 25px;
    grid-row: 3 / 4;

    @media (max-width: 1199px) {
      grid-row: 3 / span 2;
    }

    @media (max-width: 767px) {
      order: 1;
    }
  }

  > div {
    width: 100%;
    grid-column: 2 / -1;
    grid-row: 1 / -1;

    @media (max-width: 1199px) {
      grid-column: 2 / -1;
      grid-row: 1 / span 4;
    }

    @media (max-width: 767px) {
      width: 100%;
    }

    > img {
      @media (max-width: 1199px) {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (max-width: 1199px) {
    width: 698px;
    row-gap: 10px;
    column-gap: 51px;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
`;

export const Break = styled.br`
  @media (max-width: 767px) {
    display: none;
  }
`;
