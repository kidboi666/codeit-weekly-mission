import styled from "styled-components";

export const ModalLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 50;
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
  z-index: 60;

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

export const FolderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  margin-bottom: 24px;
`;

export const FolderListItem = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  line-height: 24px;
  cursor: pointer;

  &:hover {
    background-color: var(--gray5-color);
    color: var(--primary-color);
  }
`;

export const ItemName = styled.div``;
export const ItemLinkCount = styled.div`
  font-size: 14px;
  color: var(--gray2-color);
`;

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 70;
`;
