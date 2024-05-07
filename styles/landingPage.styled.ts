import styled from "styled-components";
export const LandingPageLayout = styled.div`
  width: 100%;
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
  padding-top: 7rem;
  text-align: center;

  > a {
    padding: 16px 126px;
    background-image: linear-gradient(270deg, #6ae3fe, var(--primary-color));
    border-radius: 8px;
    color: var(--white-color);
    text-decoration: none;
    margin-top: 40px;
    margin-bottom: 90px;
  }
`;
// intro_wrap
export const IntroWrap = styled.div`
  > h1,
  span {
    font-size: 64px;
  }
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

    > span {
      background: linear-gradient(270deg, #ff9f9f, var(--primary-color));
      color: transparent;
      background-clip: text;
    }
  }

  > p {
    margin-top: 10px;
    line-height: 25px;
    grid-row: 3 / 4;
  }
`;
//
