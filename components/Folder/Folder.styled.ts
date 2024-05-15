import styled from "styled-components";

export const FolderLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FolderContainer = styled.div`
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

export const FolderBox = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;
