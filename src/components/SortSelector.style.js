import styled from 'styled-components';

export const SortDiv = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const AddButton = styled.button`
  color: var(--primary-color);
  border: none;
  background-color: var(--white-color);
  cursor: pointer;

  @media (max-width: 767px) {
    position: fixed;
    width: 127px;
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

export const Wrap = styled.div`
  width: 1060px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1124px) {
    width: 700px;
  }

  @media (max-width: 767px) {
    width: 100%;
    justify-content: flex-start;
  }
`;
