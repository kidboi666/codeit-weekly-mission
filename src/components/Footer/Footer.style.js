import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: var(--black-color);
`;

export const FooterBox = styled.div`
  padding: 32px 104px 108px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  color: #676767;

  @media (max-width: 1124px) {
    padding: 32px 104px 108px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    justify-items: center;
    gap: 20px;
    color: #676767;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: start;
    gap: 60px 0;
    padding: 32px;
  }
`;

export const Copyright = styled.div`
  @media (max-width: 767px) {
    grid-row: 2 / -1;
  }
`;

export const Privacy = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
  gap: 30px;

  > a {
    color: #cfcfcf;
  }

  @media (max-width: 767px) {
    justify-self: start;
    gap: 30px;
  }
`;

export const Sns = styled.div`
  display: flex;
  gap: 12px;
  justify-self: end;

  @media (max-width: 1124px) {
    justify-self: center;
  }

  @media (max-width: 767px) {
    justify-self: end;
  }
`;
