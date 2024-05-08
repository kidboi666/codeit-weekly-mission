import styled from "styled-components";
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
export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 70px;
  text-align: center;
`;
// intro_wrap
export const IntroWrap = styled.div`
  margin-bottom: 40px;

  > h1,
  span {
    font-size: 64px;
    font-weight: 700;
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
    font-weight: 500;
  }

  > p {
    margin-top: 10px;
    line-height: 25px;
    grid-row: 3 / 4;
  }
`;
//
