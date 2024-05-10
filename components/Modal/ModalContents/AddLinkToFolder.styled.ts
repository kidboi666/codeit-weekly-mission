import styled from "styled-components";

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
