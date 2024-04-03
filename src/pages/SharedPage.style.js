import styled from 'styled-components';

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  background-color: var(--gray5-color);
`;

export const Folder = styled.ul`
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(3, 340px);
  gap: 25px 20px;

  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, 340px);
    gap: 25px 24px;
  }

  @media (max-width: 767px) {
    margin-bottom: 60px;
    padding: 0 32.5px;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
`;
