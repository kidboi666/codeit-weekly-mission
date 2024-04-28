import styled from 'styled-components';

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  padding: 20px 200px;
  background-color: var(--gray5-color);
  transition: box-shadow 0.3s;
  z-index: 100;
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
`;

export const LogoBox = styled.div`
  > img {
    width: 133px;
    height: 24px;
  }
`;
