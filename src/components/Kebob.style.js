import styled from 'styled-components';

export const KebobBox = styled.div`
  position: absolute;
  height: 20px;
  top: 15px;
  right: 20px;
  z-index: 20;
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 30;
  right: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);

  > button {
    cursor: pointer;
    border: none;
    background-color: white;
    width: 100px;
    height: 32px;

    &:hover {
      background-color: var(--gray4-color);
      color: var(--primary-color);
    }
  }
`;
