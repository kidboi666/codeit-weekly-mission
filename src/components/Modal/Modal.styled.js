import styled from 'styled-components';

export const ModalLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 200;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 32px 40px;
  width: 360px;
  border-radius: 15px;
  border: 1px solid var(--gray3-color);
  background-color: var(--white-color);

  > h4 {
    font-size: 20px;
    font-weight: 700;
    color: var(--gray1-color);
    margin-bottom: 24px;
  }

  > input {
    width: 100%;
    margin-bottom: 15px;
  }

  > button {
    width: 100%;
    padding: 16px 20px;
    font-weight: 600;
    color: #f5f5f5;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #e7effb;
  cursor: pointer;
`;

export const CurrentFolder = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--gray2-color);
  margin-bottom: 24px;
`;

export const ShareContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  div {
    display: grid;
    grid-template-rows: 42px 15px;
    gap: 10px;
    place-items: center;
    cursor: pointer;

    p {
      font-size: 13px;
      line-height: 15px;
    }
  }
`;
