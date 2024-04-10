import styled from 'styled-components';

export const FolderLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FolderContainer = styled.div`
  width: 1060px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 1124px) {
    width: 700px;
  }

  @media (max-width: 767px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const FolderBox = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const AddButton = styled.button`
  width: 75px;
  color: var(--primary-color);
  border: none;
  background-color: var(--white-color);
  cursor: pointer;

  @media (max-width: 767px) {
    width: 127px;
    position: fixed;
    padding: 8px 24px;
    bottom: 101px;
    left: 50%;
    border-radius: 40px;
    border: 1px solid var(--white-color);
    transform: translateX(-63.5px);
    z-index: 50;
    background-color: var(--primary-color);
    color: var(--white-color);
  }
`;
