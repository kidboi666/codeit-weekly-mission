import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    padding: 40px 32px;
  }
`;

export const InnerBox = styled.div<{ $isEven: boolean }>`
  width: 998px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  column-gap: 157px;
  row-gap: 1px;

  > h1 {
    width: 300px;
    grid-row: 2 / 3;
    font-size: 48px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.3px;

    @media (max-width: 1199px) {
      width: 250px;
      font-size: 40px;
      grid-row: 1 / span 2;
      align-self: end;
    }

    @media (max-width: 767px) {
      width: 100%;
      font-size: 24px;
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

    ${({ $isEven }) =>
      $isEven &&
      `
        grid-column: 1 / 2;
    `}

    @media (max-width: 1199px) {
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
