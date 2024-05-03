import styled from "styled-components";

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
