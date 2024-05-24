import styled from "styled-components";

export const FolderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  margin-bottom: 24px;
`;

export const FolderListItem = styled.div<{ $isActive?: boolean }>`
  display: flex;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  line-height: 24px;
  cursor: pointer;
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--gray5-color)" : "var(--white-color)"};
  color: ${({ $isActive }) =>
    $isActive ? "var(--primary-color)" : "var(--black-color)"};

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

export const CheckIcon = styled.div<{ $isActive?: boolean }>`
  align-self: flex-end;
  display: ${({ $isActive }) => ($isActive ? "inline-block" : "none")};
`;
