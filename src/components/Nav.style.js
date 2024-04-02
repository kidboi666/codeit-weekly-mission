import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 20px 200px;
  background-color: var(--gray5-color);
  transition: box-shadow 0.5s;
  z-index: 100;

  .shadow {
    box-shadow: 0 10px 30px rgba(188, 188, 188, 0.2);
    background: linear-gradient();
    transition: box-shadow 0.5s;
    border-bottom: 1px solid #e2ebfa;
  }

  @media (max-width: 1124px) {
    padding: 20px 32px;
  }
`;

export const Logo = styled.div`
  flex-shrink: 0;

  > img {
    width: 133px;
    height: 24px;
  }
`;
